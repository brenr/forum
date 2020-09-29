const express = require('express');
const path = require('path');
const config = require('../../../../../config.js');
const ForumRouter = require('../routing/ForumRouter.js');

module.exports = class Bootstrapper {

    /**
     * 
     * @param {Express | undefined} expressServer the express server. If no reference is passed, an express server will be lazily instantiated
     */
    static initialize(expressServer) {
        // Initialize express server if necessary
        expressServer = Bootstrapper.lazilyInitializeExpress(expressServer);


        // Set the templating engine to EJS
        expressServer.set('view engine', 'ejs');
        expressServer.set('views', path.join(__dirname, '../view'));


        // TO DO add express-session middleware


        // Bind the session handler middleware
        // const sessionHandler = new SessionHandler();
        // expressServer.expressServer.use((request, response, next) => {
        //     sessionHandler.handle(request, response, next);
        // });


        // Routing
        const forumRouter = new ForumRouter();
        expressServer.use(forumRouter);
    }

    static lazilyInitializeExpress(expressServer) {
        if (expressServer !== undefined && expressServer instanceof Express) {
            return expressServer;
        }
        const server = express();
        server.listen(config.EXPRESS_PORT);
        return server;
    }

}