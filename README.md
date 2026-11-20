# KWin script: Move Window and Focus to Desktop

> KWin script that creates shortcuts for moving a window and the focus to a certain desktop.

Requires Plasma 6 / KWin 6.8.

## Install:

### GUI:
- Go to `System Settings > Window Management > KWin Scripts`
- Click `Get New Scripts`
- Search for 'Move Window and Focus to Desktop'

### Command line:
- Clone this repo
- `zip -r movewindowandfocustodesktop.kwinscript contents/ metadata.json README.md`
- `kpackagetool6 -t KWin/Script -i /path/to/movewindowandfocustodesktop.kwinscript`
- To upgrade an existing install: `kpackagetool6 -t KWin/Script -u /path/to/movewindowandfocustodesktop.kwinscript`

Enable the script in `System Settings > Window Management > KWin Scripts`.

## Setup shortcuts
Configure the shortcuts at `System Settings > Shortcuts`, under the KWin component.

Installation of the plugin will set the following shortcuts as default:  
 - Desktop 1: `Meta+Shift+1` aka `Meta+!`,
 - Desktop 2: `Meta+Shift+2` aka `Meta+@`,
 - Desktop 3: `Meta+Shift+3` aka `Meta+#`,
 - Desktop 4: `Meta+Shift+4` aka `Meta+$`,
 - Desktop 5: `Meta+Shift+5` aka `Meta+%`,
 - Desktop 6: `Meta+Shift+6` aka `Meta+^`,
 - Desktop 7: `Meta+Shift+7` aka `Meta+&`,
 - Desktop 8: `Meta+Shift+8` aka `Meta+*`,
 - Desktop 9: `Meta+Shift+9` aka `Meta+(`,
 - Desktop 10: `Meta+Shift+10` aka `Meta+)`,
