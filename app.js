var restify = require('restify');
var builder =
    require('botbuilder');
//=========================================================
// Bot Setup
//=========================================================
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
        console.log('%s listening to %s', server.name, server.url);
    });
// Create chat bot
var connector = new builder.ChatConnector({
    appId: "4e50e52d-5181-4191-b2e0-e70a0eec4074",
    appPassword: "4zqdBMdN681WVrnSFkBJMT7"
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());
//=========================================================
// Bots Dialogs
//=========================================================
bot.dialo
g('/', function (session) {
    session.send("Hello World");
});