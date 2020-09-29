const { Router } = require("express");

module.exports = class ForumRouter extends Router {

    constructor() {
        super();
        /**
         * TO DO
         * 
         * Populate each sub-router logic
         */
        this.use('/post'); // Post router
        this.use('/category'); // Category router
        this.use('/settings'); // Settings page
        this.use('/administration'); // Administration page
    }

}