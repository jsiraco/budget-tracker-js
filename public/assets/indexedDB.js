export function checkForIndexedDB() {
    if (!window.indexedDB) {
        console.log("Your browser doesn't support a stable version of IndexedDB.");
        return false;
      }
      return true;
};