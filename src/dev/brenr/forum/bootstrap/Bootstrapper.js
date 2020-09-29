
module.exports = class Bootstrapper {

    /**
     * 
     * @param {Express | undefined} expressServer the express server. If no reference is passed, an express server will be lazily instantiated
     */
    static initialize(expressServer) {
        // Initialize express server if necessary
        expressServer = Bootstrapper.lazilyInitializeExpress(expressServer);

        // Set the templating engine to EJS
        this.set('view engine', 'ejs');

        // Bind the session handler middleware
        const sessionHandler = new SessionHandler();
        this.expressServer.use((request, response, next) => {
            sessionHandler.handle(request, response, next);
        });

    }

    static lazilyInitializeExpress(expressServer) {
        if (expressServer !== undefined && expressServer instanceof Express) {
            return expressServer;
        }
        return express();
    }

}