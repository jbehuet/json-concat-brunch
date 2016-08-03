var JSONConcat = require('./json-concat');

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

    for (var destPath in this.files) {
        JSONConcat.write(this.files[destPath], destPath);
    }

    return;
};

module.exports = Concatenate;
