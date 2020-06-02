const electron = require('electron');
const app = electron.app;
const browserWindow = electron.BrowserWindow;

let mainWindow;

app.on('ready', _ => {
    console.log('ready');
    mainWindow = new browserWindow({
        height: 400,
        width: 400
    });

    mainWindow.loadURL('file:///C:/Git/opt/electron/ipc-demo/src/index.html');
    console.log('mainWindow', mainWindow);

    mainWindow.on('closed', _ => {
        console.log('closed!');
        mainWindow = null;
    });

    mainWindow.webContents.on('did-finish-load', _ => {
        console.log('\nmainWindow.webContents', mainWindow.webContents);
        // console.log(mainWindow.webContents.getUrl());
    });
});
