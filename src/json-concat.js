var fs = require('fs'),
    path = require('path'),
    glob = require('glob'),
    util = require('util'),
    mkdirp = require('mkdirp'),
    logger = require('loggy'),
    Q = require('q');


var JSONConcat = (function() {
    return {

        mkdir: function(folder) {
            mkdirp(folder, this._0777, function(err) {
                if (err)
                    logger.error('[json-concat-brunch] ' + err);
            });
            return;
        },

        readFile: function(destContent, file) {
            var deferred = Q.defer();
            var ext = path.extname(file);
            if (ext === '.json') {
                fs.readFile(file, 'utf8', function(err, data) {
                    if (err) {
                        logger.error('[json-concat-brunch] ' + err);
                        deferred.reject(err);
                    } else {
                        var content = JSON.parse(util.format(data));
                        for (var key in content) {
                            destContent[key] = content[key];
                        }
                        deferred.resolve();
                    }
                });
            } else {
              deferred.reject(ext + ' not supported');
            }

            return deferred.promise;
        },

        read: function(destContent, source) {
            var deferred = Q.defer();

            glob(source, null, function(err, files){
                Q.all(files.map(function(file){
                  return JSONConcat.readFile(destContent, file);
                })).then(function(){
                  deferred.resolve(files.length);
                }).catch(function(err){
                  deferred.reject(err);
                });
            });

            return deferred.promise;
        },

        write: function(sources, destFile) {
            var fileContent = {};
            var destFolder = destFile.replace(/[^\/]*$/, '');

            if (!fs.existsSync(destFolder))
                this.mkdir(destFolder);

            Q.all(sources.map(function(source) {
                return JSONConcat.read(fileContent, source);
            })).then(function(count) {
                fs.writeFile(destFile, JSON.stringify(fileContent), 'utf8', function(err) {
                    if (err) {
                        logger.error('[json-concat-brunch] ' + err);
                        return;
                    }

                    logger.info('[json-concat-brunch] concatenate ' + count + ' files to ' + destFile);
                });
            }).catch(function(err){
              logger.error('[json-concat-brunch] ' + err);
            });
        }

    };


})();

module.exports = JSONConcat;
