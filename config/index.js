"use strict";

var path = require('canonical-path');
var packagePath = __dirname;

var Package = require('dgeni').Package;

module.exports = new Package('dgeni-test', [
  require('dgeni-packages/ngdoc'),
  require('dgeni-packages/nunjucks'),
  require('dgeni-packages/examples')
])

.config(function(log, readFilesProcessor, writeFilesProcessor) {
  log.level = 'info';

  readFilesProcessor.basePath = path.resolve(packagePath, 'source');
  readFilesProcessor.sourceFiles = [{
    include: '**/*.js', basePath: '.'
  }];

  writeFilesProcessor.outputFolder = 'docs';
});
