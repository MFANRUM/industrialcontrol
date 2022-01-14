'use strict'

import {app, protocol, BrowserWindow, Menu, dialog} from 'electron'
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
    //取消默认菜单栏
    Menu.setApplicationMenu(null)
    if (process.env.WEBPACK_DEV_SERVER_URL) {
        await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
        win.webContents.openDevTools()
    } else {
        // win.webContents.openDevTools()
        createProtocol('app')
        win.loadURL('app://./index.html')
    }
    //窗口最大化
    win.setFullScreen(true)

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
    //检查版本
    checkUpdate()
    //创建窗口
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

function checkUpdate() {
    autoUpdater.setFeedURL('http://101.34.165.99:8088/win32')

    //检测更新
    autoUpdater.checkForUpdates()

    //监听'error'事件
    autoUpdater.on('error', (err) => {
        console.log(err)
    })

    //监听'update-available'事件，发现有新版本时触发
    autoUpdater.on('update-available', () => {
        console.log('found new version')
    })

    //监听'update-downloaded'事件，新版本下载完成时触发
    autoUpdater.on('update-downloaded', () => {
        dialog.showMessageBox({
            type: 'info',
            title: '应用更新',
            message: '发现新版本，是否更新？',
            buttons: ['是', '否']
        }).then((buttonIndex) => {
            if (buttonIndex.response == 0) {  //选择是，则退出程序，安装新版本
                autoUpdater.quitAndInstall()
                app.quit()
            }
        })
    })
}
