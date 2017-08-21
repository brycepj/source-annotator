const _ = require('lodash');
const Promise = require('bluebird');
const db = require('localforage');

// methods for read/write activity on indexedDB via localForage
const DB_NAME = 'source-annotator';
const STORE_KEY = 'source_annotator';
const VERSION = 1.0;

db.config({
  driver: db.INDEXEDDB,
  name: DB_NAME,
  version: VERSION,
  storeName: STORE_KEY,
});

function initDb() {
  return maybeSetInitialValues({
    repoList: [],
    notes: {},
  }).catch((err) => {
    console.err('An error ocurred while initializing the database', err);
  });
}

function setInitialValue(key, val) {
  return db.getItem(key).then((existingVal) => {
    if (existingVal === null) {
      return db.setItem(key, val);
    }

    return Promise.resolve();
  });
}

function maybeSetInitialValues(initialPairs) {
  const initializers = [];

  _.forIn(initialPairs, (val, key) => {
    initializers.push(setInitialValue(key, val));
  });

  return Promise.all(initializers);
}

// Just do it with Mock Data in memory for now.
// And go with Pouch/CouchDB -- documents are better for this anyway