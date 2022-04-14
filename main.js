const { app, BrowserWindow } = require("electron");

function initWindow() {
  const window = new BrowserWindow({
    width: 900,
    height: 600,
    // frame: false,
    // backgroundColor: "#cdcdcd",
    // alwaysOnTop: true,
    title: "LiveFurnish",
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  //   const childWindow = new BrowserWindow({
  //     parent: window,
  //   });
  //   childWindow.loadFile("index.html");
  //   childWindow.show();

  window.loadFile("index.html");
  window.webContents.openDevTools();
}

// app.on("before-quit", (e) => {
//   console.log("onBeforeQuit method called!!!!!");
//   e.preventDefault();
// });
// app.on("will-quit", () => {
//   console.log("willQuit method called!!!!!");
// });
app.on("browser-window-focus", () => {
  console.log("onBrowserWindowFocus method called!!!!!");
});
app.on("browser-window-blur", () => {
  console.log("onBrowserWindowBlur method called!!!!!");
});

app.on("ready", () => {
  initWindow();
});

// app.whenReady().then(initWindow);
