const express = require('express');
const Bootstrapper = require('./bootstrap/Bootstrapper.js');
module.exports = class Forum {

    /**
     * Constructs a Forum instance
     * @param {Express} express the express server. If no reference is passed, an express server will be lazily instantiated
     */
    constructor(expressServer) {
        Bootstrapper.initialize(expressServer);
    }

}