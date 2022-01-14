'use strict'

import {app, protocol, BrowserWindow, Menu, ipcMain} from 'electron'
import {createProtocol} from 'vue-cli-plugin-electron-builder/lib'
import installExtension, {VUEJS_DEVTOOLS} from 'electron-devtools-installer'
import {autoUpdater} from "electron-updater";

const isDevelopment = process.env.NODE_ENV !== 'production'
protocol.registerSchemesAsPrivileged([
    {scheme: 'app', privileges: {secure: true, standard: true}}
])
let win = null;

async function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        transparent: true,
        webPreferences: {
            nodeintegration: true,
            contextIsolated: false,
            webSecurity: false
        }
    })
    Menu.setApplicationMenu(null)
    if (process.env.WEBPACK_DEV_SERVER_URL) {
        await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
        win.webContents.openDevTools()
    } else {
        // win.webContents.openDevTools()
        createProtocol('app')
        win.loadURL('app://./index.html')
    }
    // win.setFullScreen(true)

}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on('ready', async () => {
    if (isDevelopment && !process.env.IS_TEST) {
        try {
            await installExtension(VUEJS_DEVTOOLS)
        } catch (e) {
            console.error('Vue Devtools failed to install:', e.toString())
        }
    }
    createWindow()

})

if (isDevelopment) {
    if (process.platform === 'win32') {
        process.on('message', (data) => {
            if (data === 'graceful-exit') {
                app.quit()
            }
        })
    } else {
        process.on('SIGTERM', () => {
            app.quit()
        })
    }
}
autoUpdater.checkForUpdates();
autoUpdater.on('update-downloaded', () => {
    this.win.webContents.send('updateDownLoaded');
})
ipcMain.on('quitAndInstall', event => {
    console.log(event);
    autoUpdater.quitAndInstall();
})
