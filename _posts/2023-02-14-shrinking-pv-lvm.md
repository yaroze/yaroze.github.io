---
title: "Shrinking LVM PV partitions"
date: 2023-02-14
categories:
  - tech
tags:
  - linux
  - lvm
  - storage
---

This snippet shows how to shring an LVM physical volume partition.

Everything went OK on my end, but keep in mind I'm NOT responsible if anything goes wrong.

⚠️ Confirm the commands **always** before issuing them!
⚠️ Backup your data before doing anything risky!

```bash
# 1. Do a filesystem check just to make sure everything is OK
e2fsck -f /dev/mapper/vg_root-lv_root

# 2. Shrink the filesystem to a decent value. It may take some time and it's optional, but it's always better to be on the safe side.
#resize2fs <device> 50G
#resize2fs /dev/mapper/vg_root-lv_root 52G

# 1. Shrink the LV
lvresize --size 52G --resizefs /dev/mapper/vg_root-lv_root

# 2. ℹ️ The volume group isn't shrunk, as its size is the same as the sum of all PV's that belong to it.

# 3. Logically shrink the PV
pvresize --setphysicalvolumesize 52G /dev/sda6

# 3.1. Now comes the difficult part.

# It might be necessary to move the segments somewhere else.

# Check with:
pvdisplay -m 

# Move with:
pvmove --alloc anywhere 

# 4. Shrink the partition
# 4.1. Check the PV size **in sectors**. Take note the PSize:
pvs --units s
  PV         VG      Fmt  Attr PSize      PFree   
  /dev/sda6  vg_root lvm2 a--  109043712S 2088960S

# 4.2. Check the size of the sda6 partition in sectors:
parted /dev/sda unit s print
Model: ATA WDC WDS240G2G0A- (scsi)
Disk /dev/sda: 468877312s
Sector size (logical/physical): 512B/512B
Partition Table: gpt
Disk Flags: 

Number  Start       End         Size        File system  Name                          Flags
 1      2048s       1050623s    1048576s    fat32                                      boot, esp
 2      1050624s    1083391s    32768s                   Microsoft reserved partition  msftres
 3      1083392s    161492322s  160408931s               Basic data partition          msftdata
 4      161492992s  162744319s  1251328s    ntfs                                       hidden, diag
 5      162746368s  163839999s  1093632s    ntfs                                       hidden, diag
 6      163840000s  332451839s  168611840s               Linux LVM                     lvm
 7      332451840s  333451263s  999424s     ext4
 8      333451264s  468875263s  135424000s               crypt-root

```
### ⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠
### Point of no return below
### ⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠

```bash
4.3. Delete the partition sda6 and recreate it with the number of sectors of the PV (starting sector + PSize + 1):
fdisk /dev/sda
Command (m for help): d
Partition number (1-8, default 8): 6

Partition 6 has been deleted.

Command (m for help): n
Partition number (6,9-128, default 6): 
First sector (163840000-468877278, default 163840000): 
Last sector, +/-sectors or +/-size{K,M,G,T,P} (163840000-332451839, default 332451839): 272883713 

Created a new partition 6 of type 'Linux filesystem' and of size 52 GiB.
Partition #6 contains a LVM2_member signature.

Do you want to remove the signature? [Y]es/[N]o: N

Command (m for help): t
Partition number (1-8, default 8): 6
Partition type or alias (type L to list all): 30


Changed type of partition 'Linux filesystem' to 'Linux LVM'.

Command (m for help): p
Disk /dev/sda: 223,58 GiB, 240065183744 bytes, 468877312 sectors
Disk model: WDC WDS240G2G0A-
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 6748ABC9-976E-40DF-93E0-F5FB047951B0

Device         Start       End   Sectors  Size Type
/dev/sda1       2048   1050623   1048576  512M EFI System
/dev/sda2    1050624   1083391     32768   16M Microsoft reserved
/dev/sda3    1083392 161492322 160408931 76,5G Microsoft basic data
/dev/sda4  161492992 162744319   1251328  611M Windows recovery environment
/dev/sda5  162746368 163839999   1093632  534M Windows recovery environment
/dev/sda6  163840000 272883713 109043714   52G Linux LVM
/dev/sda7  332451840 333451263    999424  488M Linux filesystem
/dev/sda8  333451264 468875263 135424000 64,6G Linux filesystem

Command (m for help): w
The partition table has been altered.
Syncing disks.

% pvs
  WARNING: Device /dev/sda6 has size of 109043714 sectors which is smaller than corresponding PV size of 109049856 sectors. Was device resized?
  WARNING: One or more devices used as PVs in VG vg_root have changed sizes.
  PV         VG      Fmt  Attr PSize   PFree   
  /dev/sda6  vg_root lvm2 a--  <52,00g 1020,00m
% lvresize /dev/vg_root/lv_root -l +100%FREE
  Size of logical volume vg_root/lv_root changed from 51,00 GiB (13056 extents) to 51,99 GiB (13310 extents).
  Logical volume vg_root/lv_root successfully resized.
% pvs
  PV         VG      Fmt  Attr PSize  PFree
  /dev/sda6  vg_root lvm2 a--  51,99g    0 
%
```





