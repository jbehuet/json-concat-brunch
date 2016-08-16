var JSONConcat = require("./json-concat");

function Concatenate(config) {
    this.config = config;
    if (config && config.plugins && config.plugins.concatenate) {
        this.files = config.plugins.concatenate.files || {};
    } else {
        this.files = {};
    }
}

Concatenate.prototype.brunchPlugin = true;

Concatenate.prototype.onCompile = function onCompile(generatedFiles) {

    Object.keys(this.files).map(function(destPath){
      JSONConcat.write(this.files[destPath], destPath);
    });

    return;
};

module.exports = Concatenate;
