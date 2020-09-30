
module.exports = class User {

    constructor(
        id,
        email,
        username,
        userGroups,
        postCount,
        dateCreated,
        isMuted,
        isBanned
    ) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.userGroups = userGroups;
        this.postCount = postCount;
        this.dateCreated = dateCreated;
        this.isMuted = isMuted;
        this.isBanned = isBanned;
    }

}