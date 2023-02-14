---
title: "Loading tables FAST"
date: 2023-02-14

categories:
  - tech
tags:
  - oracle
  - plsql
  - turbo
  - parallel
---

# The folowing anonymous block uses DBMS_PARALLEL_EXECUTE to load a table in parallel. This speeds up the process a lot and it's possible to issue periodic commits so that we don't blow up UNDO.

# Of course, this can be used for other stuff, just be creative 😊

```sql
DECLARE
v_schema            varchar2(200) := 'SOURCE_SCHEMA';
v_source_table_name varchar2(200) := 'SOURCE_TABLE';
v_target_table_name varchar2(200) := 'TARGET_TABLE';
v_task_name varchar2(200);
l_sql_stmt VARCHAR2(4000);


BEGIN
  v_task_name := 'LOAD_' || v_target_table_name;
  begin
    DBMS_PARALLEL_EXECUTE.DROP_task (task_name => v_task_name);
  exception when others then null;
  end;
  DBMS_PARALLEL_EXECUTE.create_task (task_name => v_task_name);
  DBMS_PARALLEL_EXECUTE.create_chunks_by_rowid(task_name   => v_task_name,
                                               table_owner => V_schema,
                                               table_name  => v_source_table_name,
                                               by_row      => TRUE,
                                               chunk_size  => 100000);
  
  l_sql_stmt := 'insert into ' || v_target_table_name || ' select * from ' ||v_source_table_name || '  WHERE rowid BETWEEN :start_id AND :end_id';

  DBMS_PARALLEL_EXECUTE.run_task(task_name      => v_task_name,
                                 sql_stmt       => l_sql_stmt,
                                 language_flag  => 0,
                                 parallel_level => 2);

END;
/
```

# Check the status with the following queries:
```sql
SELECT task_name,
       status
FROM   user_parallel_execute_tasks;

SELECT status, COUNT(*)
FROM   user_parallel_execute_chunks
GROUP BY status
ORDER BY status;
```