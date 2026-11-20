/**
 * KWin script that creates shortcuts for moving a window and the focus to a certain desktop.
 */

const defaultShortcuts = [
    "Meta+!",
    "Meta+@",
    "Meta+#",
    "Meta+$",
    "Meta+%",
    "Meta+^",
    "Meta+&",
    "Meta+*",
    "Meta+(",
    "Meta+)",
];

function desktopByNumber(number) {
    const desktops = workspace.desktops;
    for (let i = 0; i < desktops.length; i++) {
        if (desktops[i].x11DesktopNumber === number) {
            return desktops[i];
        }
    }
    return null;
}

function moveToDesktopAndActivate(targetDesktopNr) {
    const window = workspace.activeWindow;
    if (!window || !window.moveable) {
        return;
    }

    const target = desktopByNumber(targetDesktopNr);
    if (!target) {
        return;
    }

    window.desktops = [target];
    workspace.setCurrentDesktopForScreen(target, window.output);
    workspace.activeWindow = window;
}

function registerDesktopShortcut(desktopNr) {
    registerShortcut(
        "MoveWindowAndFocusToDesktop" + desktopNr,
        "Move Window and Focus to Desktop " + desktopNr,
        defaultShortcuts[desktopNr - 1],
        function () {
            moveToDesktopAndActivate(desktopNr);
        }
    );
}

for (let desktopNr = 1; desktopNr <= defaultShortcuts.length; desktopNr++) {
    registerDesktopShortcut(desktopNr);
}
