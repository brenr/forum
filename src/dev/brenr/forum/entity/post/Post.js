
module.exports = class Post {

    constructor(
        id,
        originalPost,
        user,
        dateCreated,
        thread,
        body,
        editedByUser,
        isHidden
    ) {
        this.id = id;
        this.originalPost = originalPost;
        this.user = user;
        this.dateCreated = dateCreated;
        this.thread = thread;
        this.body = body;
        this.editedByUser = editedByUser;
        this.isHidden = isHidden;
    }

}