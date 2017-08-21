const mongoose = require('mongoose');

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

module.exports = mongoose.model('Repo', RepoSchema);

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