
module.exports = class Post {

    constructor(id, author, dateCreated, edited, body) {
        this.id = id;
        this.author = author;
        this.dateCreated = new Date(dateCreated);
        this.edited = edited;
        this.body = body;
    }
    
}