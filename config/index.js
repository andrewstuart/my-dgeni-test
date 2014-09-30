"use strict";

var path = require('canonical-path');
var packagePath = __dirname;

var Package = require('dgeni').Package;

var _ = require('lodash');

module.exports = new Package('dgeni-test', [
  require('dgeni-packages/ngdoc'),
  require('dgeni-packages/nunjucks'),
  // require('dgeni-packages/examples')
])
.processor(function proc() {

  return {
    $runAfter: ['reading-files'],
    $process:function(docs) {
      console.log(JSON.stringify(docs));
    }
  };
})
.config(function(log, readFilesProcessor, writeFilesProcessor) {

  log.level = 'info'; //'debug';

  readFilesProcessor.basePath = path.resolve(packagePath, '..');
  readFilesProcessor.sourceFiles = [{
    include: 'source/main.js', basePath: 'source'
  }];

  writeFilesProcessor.outputFolder = './out';
});
