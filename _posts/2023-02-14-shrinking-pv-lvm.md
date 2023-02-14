---
title: "dd over the wire"
date: 2023-02-14

categories:
  - tech
tags:
  - ssh
  - netcat
  - dd
---

## ssh

### Send (local -> remote block device or file)

```bash
dd if=<file> | gzip -9 - | pv | ssh user@remote dd of=<file>
```
### Receive (remote -> local)

```bash
ssh user@remote "dd if=<file> | gzip -9 -" | dd of=<file>
```

## netcat

### Target
```bash
nc -l -p 19000 | bzip2 -d | dd bs=16M of=/dev/sda
```

### Source
```bash
dd bs=16M if=/dev/sda | bzip2 -c | nc 192.168.100.2 19000
```
