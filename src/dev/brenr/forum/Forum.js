const express = require('express');
const session = require('express-session');
const SessionHandler = require('./session/SessionHandler.js');
module.exports = class Forum {

    /**
     * Constructs a Forum instance
     * @param {Express} express the express server. If no reference is passed, an express server will be lazily instantiated
     */
    constructor(expressServer) {
        if (expressServer !== undefined && expressServer instanceof Express) {
            this.expressServer = expressServer;
        } else {
            this.expressServer = express();
        }
    }

    initialize() {
        const sessionHandler = new SessionHandler();
        this.expressServer.use((request, response, next) => {
            sessionHandler.handle(request, response, next);
        });
    }

}