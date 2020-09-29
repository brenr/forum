let ordinal = 0;
module.exports = class Permission {

    // Access
    static CAN_ACCESS = ordinal++;

    // Creation
    static CAN_CREATE_POST = ordinal++;
    static CAN_CREATE_THREAD = ordinal++;
    static CAN_CREATE_CATEGORY = ordinal++;
    static CAN_CREATE_SECTION = ordinal++;

    // Modification
    static CAN_EDIT_OWN_POST = ordinal++;
    static CAN_EDIT_OTHER_POSTS = ordinal++;
    static CAN_EDIT_THREAD_TITLE = ordinal++;
    static CAN_EDIT_CATEGORY_TITLE = ordinal++;
    static CAN_EDIT_SECTION_TITLE = ordinal++;

    // Configuration
    static CAN_CONFIGURE_USER_ROLES = ordinal++;
    static CAN_CONFIGURE_USERS = ordinal++;

    // Thread-specific Flags
    static CAN_HIDE_THREAD = ordinal++;
    static CAN_STICKY_THREAD = ordinal++;
    static CAN_HIDE_POSTS = ordinal++;
    static CAN_QUOTE_POSTS = ordinal++;
    static CAN_EMBED_IMAGES = ordinal++;
    static CAN_EMBED_LINKS = ordinal++;
};