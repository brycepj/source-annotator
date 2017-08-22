const mongoose = require('mongoose');
const Promise = require('bluebird');

const schemaConfig = {
  collection: 'repositories',
};

const schemaDefinition = {
  details: {
    name: { type: String },
    remote: { type: String },
    id: { type: String },
    path: { type: String },
    headSHA: { type: String },
    lastUpdated: { type: Date, default: Date.now },
  }
};

const RepoSchema = mongoose.Schema(schemaDefinition, schemaConfig);

const RepoModel = mongoose.model('Repo', RepoSchema);


function find(query) {
  return new Promise((resolve, reject) => {
    RepoModel.find(query).exec((err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

function findOne(query) {
  return new Promise((resolve, reject) => {
    RepoModel.find(query).exec((err, results) => {
      if (err) reject(err);
      resolve(results[0]._doc);
    });
  });
}

function create(details) {
  const query = {
    details,
  };

  return new Promise((resolve, reject) => {
    RepoModel.create(query, (err, newRepo) => {
      if (err) reject(err);
      resolve(newRepo._doc);
    });
  });
}

function remove() {
  return new Promise((resolve, reject) => {
    RepoModel.remove(query).exec((err) => {
      if (err) reject(err);
      resolve();
    });
  });
}

module.exports = {
  find,
  create,
  remove,
  findOne,
};

/**
    { 
      headSHA: '8706c44539415a85a58d2f44c0a7c8ebb13f1d99\n',
      lastUpdated: new Date(),
      remoteUrl: 'https://github.com/brycepj/scrawl',
      repoId: 'b7410330u86a0-11e7-b5b6-9b8cd7cc8736',
      repoName: 'scrawl',
      repoPath: '/Users/bryce/_repos/personal/source-annotator/repositories/scrawl',
    }
 */