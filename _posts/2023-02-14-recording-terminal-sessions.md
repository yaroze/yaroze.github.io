---
title: "Recording terminal sessions"
date: 2023-02-14
categories:
  - tech
tags:
  - linux
  - recording
  - screen
  - shell
---

This snippet shows how to record your terminal sessions.

This might be useful in case you screw the Production system and forget what you did wrong, or to prove your innocence.

# Install ttyrec or script
```bash
sudo apt install ttyrec
sudo apt install script```


## If rewinding is desirable, install ipbt:
```bash
sudo apt install its-playback-time```

# Place this under .bashrc or .zshrc

```bash
# This will spawn the terminal recorder of choice if it's a level 1 shell (to avoid infinite loops).
mkdir -p $HOME/typescripts
if [ $SHLVL -eq 1 ]
then
       echo Compressing old typescripts...
       find $HOME/typescripts -mtime +1 -name "*ttyrec" -exec gzip -9 {} +
       echo Starting ttyrec...
       echo
       ttyrec $HOME/typescripts/script_$(date '+%Y%m%d_%H%M%S').ttyrec
       #script -t$HOME/typescripts/script_$(date '+%Y%m%d_%H%M%S').tim $HOME/typescripts/script_$(date '+%Y%m%d_%H%M%S').script
exit
```

# Playing recordings
```bash
ttyplay <scriptfile>
scriptreplay <scriptfile> -t<timefile>
```

## Only for ttyrec:
```bash
ipbt <scriptfile>
```


# ttyplay specific
There are some special keys defined:

- + or f: double the speed of playback.
- - or s: halve the speed of playback.
- 0: set playback speed to 0, pausing playback.
- 1: set playback to speed 1.0 again.

# ipbt specific
- o: OSD
- p: pause
- b or <: back one frame. To go back by many frames, type a number followed by `b' or `<'.
- space or >: forward one frame. To go forward by many frames, type a number followed by the space bar or `>'.
- 3 times faster:
	- 3x
- 3 times slower:
	- 3X
