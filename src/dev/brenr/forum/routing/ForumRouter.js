const { Router } = require("express");
const config = require("../../../../../config.js");
const RendererUtils = require("../utils/rendering/RendererUtils.js");

module.exports = class ForumRouter extends Router {

    constructor(expressServer) {
        super();

        // Forum root view
        this.get(config.FORUM_ROOT_DIRECTORY, (request, response, next) => {
            response.render(RendererUtils.getFile('index'));
        });

        /**
         * TO DO
         * 
         * Populate each sub-router logic
         */
        // this.use('/post'); // Post router
        // this.use('/category'); // Category router
        // this.use('/settings'); // Settings page
        // this.use('/administration'); // Administration page
    }

}