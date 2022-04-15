const {
  app,
  BrowserWindow,
  globalShortcut,
  dialog,
  Tray,
  Menu,
} = require("electron");
const windowStateKeeper = require("electron-window-state");

let window;
let isMac = process.platform === "darwin";

const menuTemplate = [
  ...(isMac
    ? { label: "Blog", submenu: [{ label: "About" }, { label: "Version" }] }
    : []),
  { label: "File" },
  {
    label: "Tools",
    submenu: [
      { label: "Zoom In" },
      { label: "Zoom Out" },
      { label: "Quit app", role: isMac ? "close" : "quit" },
    ],
  },
];
const menu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menu);

function initWindow() {
  const mainWindowState = windowStateKeeper({
    defaultWidth: 800,
    defaultHeight: 600,
  });

  window = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    title: "LiveFurnish",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  window.loadFile("index.html");
  window.webContents.openDevTools();
  
  mainWindowState.manage(window);

  // Implementing global shortcuts
  // globalShortcut.register("Shift+K", () => {
  //   console.log('Shift + K pressed')
  //   window.loadFile('other.html')
  // })

  // Implement Dialog box
  // globalShortcut.register("Ctrl+K", () => {
  //   dialog.showOpenDialog({
  //     defaultPath: app.getPath('documents'),
  //     buttonLabel: "Select File",
  //   })
  // })

  // Implement action tray
  // let tray = new Tray('compass.png')
  // tray.setToolTip("Tray for electron app")
  // tray.on('click', () => {
  //   window.isVisible() ? window.hide() : window.show()
  // })
  // const template = [
  //   {label: 'Item 1'},
  //   {label: 'Item 2'},
  //   {label: 'Item 3'},
  // ]
  // const contextMenu = Menu.buildFromTemplate(template)
  // tray.setContextMenu(contextMenu)

  // Implement Custom menu
}

app.on("ready", () => initWindow());
