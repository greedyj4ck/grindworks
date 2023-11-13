const Store = require("electron-store");
const Storage = new Store();

function wasInitialized() {
  const initializedCheck = Storage.get("flag-initialized");

  if (initializedCheck) return initializedCheck;
  else {
    return false;
  }
}

module.exports = { wasInitialized };
