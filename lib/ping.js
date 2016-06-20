const co = require('co');
const coreq = require('co-request');


module.exports.command = parts => {
    var url = parts;
    return co(function*() {
        var start = new Date();
        var result = yield coreq(url);
        var end = new Date() - start;

        return `Pinged ${url} successfully - took ${end} ms`;
    }).catch(function(err) {
        return `Could not ping ${url} (${err.message})`;
    });
};
