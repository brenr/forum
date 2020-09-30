const Category = require("../../entity/category/Category.js");
const Permission = require("../../entity/permission/Permission.js");
const Post = require("../../entity/post/Post.js");
const Thread = require("../../entity/thread/Thread.js");
const User = require("../../entity/user/User.js");

// Start from child and go up ancestral tree (inherit from ancestors)
const checkPermissionByGroups = (user, entity, permissionToCheck) => {
    for (let [groupId, permissionMap] of Object.entries(entity.permissionsByGroup)) {
        
    }
    // If we can get up to ancestral entity with 1 bit, then we return true
};

// Start from parent most and go down to child entity (collect user ids)
const checkPermissionByUserId = (user, entity, permissionToCheck) => {
    // If we can get down to child entity with 1 bit then we return true
};

module.exports = class PermissionUtils {


    // Access
    static canAccess(user, entity) {
        return false;
    }


    // Posts
    /**
     * Whether or not we can view a post that is hidden
     * @param {User} user the requesting user
     * @param {Post} post the post we wish to view
     */
    static canViewHiddenPost(user, post) {
        return false;
    }
    static canCreatePost(user, thread) {
        return false;
    }
    static canEditPost(user, post) {
        return false;
    }
    static canHidePost(user, post) {
        return false;
    }


    // Threads
    static canViewThread(user, thread) {
        return false;
    }
    static canCreateThread(user, category) {
        return false;
    }
    static canMoveThread(user, thread, category) {
        return false;
    }
    static canRenameThread(user, thread) {
        return false;
    }
    static canDeleteThread(user, thread) {
        return false;
    }
    static canHideThread(user, thread) {
        return false;
    }
    static canStickyThread(user, thread) {
        return false;
    }


    // Categories
    static canViewCategory(user, category) {
        return false;
    }
    static canCreateCategory(user, section) {
        return false;
    }
    static canMoveCategory(user, category, section) {
        return false;
    }
    static canRenameCategory(user, category) {
        return false;
    }
    static canDeleteCategory(user, category) {
        return false;
    }
    static canHideCategory(user, category) {
        return false;
    }


    // Sections
    static canCreateSection(user, section) {
        return false;
    }
    static canRenameSection(user, section) {
        return false;
    }
    static canDeleteSection(user, section) {
        return false;
    }
    static canHideSection(user, section) {
        return false;
    }

}