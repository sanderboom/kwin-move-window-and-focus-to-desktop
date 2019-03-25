/**
 * KWin script that creates shortcuts for moving a window and the focus to a certain desktop.
 */

var defaultShortcuts = [
    'Meta+!',
    'Meta+@',
    'Meta+#',
    'Meta+$',
    'Meta+%',
    'Meta+^',
    'Meta+&',
    'Meta+*',
    'Meta+(',
    'Meta+)'
];

registerShortcut('MoveWindowAndFocusToDesktop1', 'Move Window and Focus to Desktop 1', defaultShortcuts[0], function() { moveToDesktopAndActivate(1);});
registerShortcut('MoveWindowAndFocusToDesktop2', 'Move Window and Focus to Desktop 2', defaultShortcuts[1], function() { moveToDesktopAndActivate(2);});
registerShortcut('MoveWindowAndFocusToDesktop3', 'Move Window and Focus to Desktop 3', defaultShortcuts[2], function() { moveToDesktopAndActivate(3);});
registerShortcut('MoveWindowAndFocusToDesktop4', 'Move Window and Focus to Desktop 4', defaultShortcuts[3], function() { moveToDesktopAndActivate(4);});
registerShortcut('MoveWindowAndFocusToDesktop5', 'Move Window and Focus to Desktop 5', defaultShortcuts[4], function() { moveToDesktopAndActivate(5);});
registerShortcut('MoveWindowAndFocusToDesktop6', 'Move Window and Focus to Desktop 6', defaultShortcuts[5], function() { moveToDesktopAndActivate(6);});
registerShortcut('MoveWindowAndFocusToDesktop7', 'Move Window and Focus to Desktop 7', defaultShortcuts[6], function() { moveToDesktopAndActivate(7);});
registerShortcut('MoveWindowAndFocusToDesktop8', 'Move Window and Focus to Desktop 8', defaultShortcuts[7], function() { moveToDesktopAndActivate(8);});
registerShortcut('MoveWindowAndFocusToDesktop9', 'Move Window and Focus to Desktop 9', defaultShortcuts[8], function() { moveToDesktopAndActivate(9);});
registerShortcut('MoveWindowAndFocusToDesktop10', 'Move Window and Focus to Desktop 10', defaultShortcuts[9], function() { moveToDesktopAndActivate(10);});

function moveToDesktopAndActivate(targetDesktopNr) {
    var client = workspace.activeClient;
    if (client.moveable) {
        client.desktop = targetDesktopNr;
        workspace.activeClient = client;
    }
}
