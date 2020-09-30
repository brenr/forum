
module.exports = class Thread {

    constructor(
        id,
        owner,
        dateCreated,
        category,
        title,
        isSticky,
        sortId,
        isHidden,
        autoHideNewPosts,
        permissionsByGroup,
        permissionsByUser
    ) {
        this.id = id;
        this.dateCreated = dateCreated;
        this.category = category;
        this.title = title;
        this.isSticky = isSticky;
        this.sortId = sortId;
        this.isHidden = isHidden;
        this.autoHideNewPosts = autoHideNewPosts;
        this.permissionsByGroup = permissionsByGroup;
        this.permissionsByUser = permissionsByUser;
    }

}