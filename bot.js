const botBuilder = require('claudia-bot-builder');
const co = require('co');
const coreq = require('co-request');
const ping = require('./lib/ping');

module.exports = botBuilder(request => {
    var parts = request.text.split(' ', 1);
    var command = parts[0];
    if (command == 'ping') {
        return ping.command(request.text.slice(command.length + 1))
    }
});
