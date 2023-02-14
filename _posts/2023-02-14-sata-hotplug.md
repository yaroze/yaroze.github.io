---
title: "SATA hot plug/unplug"
date: 2023-02-14
categories:
  - tech
tags:
  - linux
  - storage
  - sata
  - ahci
---

This snippet shows how safely unplug a SATA device.

Unplug:
1. After unmounting all filesystems:
```bash
echo 1 > /sys/block/(whatever)/device/delete
```
2. Physically unplug the device (or remove it from the hypervisor)


Hotplug:


```bash
# If we know the host, we can do it directly:
echo "- - -" > /sys/class/scsi_host/<hostN>/scan

# If not, this will do the trick:
```bash
cd /sys/class/scsi_host/
for i in `ls -1`
do 
  echo "- - -" > $i/scan
done
```