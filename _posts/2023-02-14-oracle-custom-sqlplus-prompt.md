---
title: "Custom SQL*Plus prompt"
date: 2023-02-14

categories:
  - tech
tags:
  - oracle
  - sqlplus
  - prompt
---

Edit the following file:
```bash
$ORACLE_HOME/sqlplus/admin/glogin.sql
```

## Add the following:
```sql
set timing on
set time on
set sqlprompt "_user'@'_connect_identifier _DATE '> '"
```

## Result:

```sql
[oracle@localhost ~]$ sqlplus / as sysdba

SQL*Plus: Release 19.0.0.0.0 - Production on Thu Dec 1 15:19:19 2022
Version 19.3.0.0.0

Copyright (c) 1982, 2019, Oracle.  All rights reserved.


Connected to:
Oracle Database 19c Enterprise Edition Release 19.0.0.0.0 - Production
Version 19.3.0.0.0

15:19:19 SYS@orclcdb 01-DEC-22 >
```