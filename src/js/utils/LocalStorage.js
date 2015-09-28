import { canUseDOM } from 'react/lib/ExecutionEnvironment';

var structureLocalStorage = {};
function getStorage() {
  var storageImpl = null;
  try {
    window.localStorage.setItem('storage', '');
    window.localStorage.removeItem('storage');
    storageImpl = window.localStorage;
  }
  catch(err) {
    storageImpl = new LocalStorageAlternative();
  }
  return storageImpl;
}

function LocalStorageAlternative() {

  this.setItem = function (key, value) {
    structureLocalStorage[key] = value;
  };

  this.getItem = function (key) {
    if(typeof structureLocalStorage[key] != 'undefined' ) {
      return structureLocalStorage[key];
    }
    else {
      return null;
    }
  };

  this.removeItem = function (key) {
    structureLocalStorage[key] = undefined;
  };
}

const _storageImpl = getStorage();

module.exports = _storageImpl;
