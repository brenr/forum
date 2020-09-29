const path = require('path');

module.exports = class RendererUtils {

    static getFile(targetFile) {
        return path.join(__dirname, '../../view/', targetFile);
    }
}