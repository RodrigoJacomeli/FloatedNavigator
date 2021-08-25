const { app, BrowserWindow, globalShortcut } = require('electron');

let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden',
    allwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  win.loadFile('index.html');
}

// Function from open WebDevTools
function toggleDevTools() {
  win.webContents.toggleDevTools();
}

// Function create shortcuts
function createShortcuts() {
  globalShortcut.register('CmdOrCtrl+J', toggleDevTools);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow).then(createShortcuts);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On MacOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with CMD + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
