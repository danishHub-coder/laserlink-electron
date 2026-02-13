const { app, BrowserWindow } = require("electron");

const START_URL = "https://ambitious-rock-050696a1e.4.azurestaticapps.net";

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
  });

  win.loadURL(START_URL);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
