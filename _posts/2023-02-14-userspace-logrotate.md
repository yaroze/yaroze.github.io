---
title: "Userspace logrotate"
date: 2023-02-14
categories:
  - tech
tags:
  - linux
  - logrotate
  - userspace
---

# Logrotate in userspace
`/usr/sbin/logrotate` – The logrotate command itself.
`/home/user/logrotate/logrotate.state` - The logrotate state file. Do not touch.
`/home/user/logrotate/logrotate.conf` - The logrotate configuration file


```bash
# Global settings
weekly          # Run when
rotate 4        # Keep only the last 4 rotated log files
create          # Creates a new file
include /etc/logrotate.d
# Settings specific to a directory
/var/log/wtmp { # Run for the files in this directory

    monthly    # Run when
    minsize 1M # File must be at least 1M to be rotated
    create 0664 root utmp # Creates a new file with specific permissions&ownership
    rotate 1 # Keep only the last rotated log file
}
```


`/home/user/logrotate/logrotate.sh` - A shell script to trigger logrotate

```bash
#!/bin/sh

/usr/sbin/logrotate --state /home/user/logrotate/logrotate.state /home/user/logrotate/logrotate.conf
EXITVALUE=$?
if [ $EXITVALUE != 0 ]; then
    /usr/bin/logger -t logrotate "ALERT exited abnormally with [$EXITVALUE]"
fi
exit 0
```
