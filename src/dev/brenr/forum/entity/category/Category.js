
module.exports = class Category {

    /**
     * Creates a Category object
     * @param {number} categoryId the category id in the database
     */
    constructor(categoryId) {
        this.categoryId = categoryId;
    }
}