var fs = require('fs'),
    util = require("util"),
    mkdirp = require('mkdirp'),
    logger = require('loggy'),
    Q = require("q");


var JSONConcat = (function() {
    return {

        mkdir: function(folder) {
            mkdirp(folder, this._0777, function(err) {
                if (err)
                    logger.error('[json-concat-brunch] ' + err);
            });
            return;
        },

        read: function(destContent, file) {
            var deferred = Q.defer();

            fs.readFile(file, 'utf8', function(err, data) {
                if (err) {
                    logger.error('[json-concat-brunch] ' + err);
                    deferred.reject();
                } else {
                    var content = JSON.parse(util.format(data));
                    for (var key in content) {
                        destContent[key] = content[key];
                    }
                    deferred.resolve();
                }
            });

            return deferred.promise;
        },

        write: function(files, destFile) {
            var fileContent = {};
            var destFolder = destFile.replace(/[^\/]*$/, '');

            if (!fs.existsSync(destFolder))
                this.mkdir(destFolder);

            Q.all(files.map((function(file) {
                return this.read(fileContent, file);
            }).bind(this))).then(function() {
                fs.writeFile(destFile, JSON.stringify(fileContent), 'utf8', function(err) {
                    if (err) {
                        logger.error('[json-concat-brunch] ' + err);
                        return;
                    }

                    logger.info('[json-concat-brunch] concatenate ' + files.length + ' files to ' + destFile);
                });
            });
        }

    };


})();

module.exports = JSONConcat;
