let ordinal = 0;
module.exports = class UserGroupPermission {

    // Administration
    static IS_SUPER_ADMINISTRATOR = ordinal++;
    static CAN_CONFIGURE_SYSTEM = ordinal++;
    static CAN_VIEW_AUDIT_LOG = ordinal++;
    static CAN_CONFIGURE_FORUMS = ordinal++;
    static CAN_CONFIGURE_USER_GROUPS = ordinal++;

    // Moderation
    static CAN_ASSIGN_USER_GROUPS = ordinal++;
    static CAN_MUTE_USER = ordinal++;
    static CAN_BAN_USER = ordinal++;

    // Account
    static CAN_CHANGE_USERNAME = ordinal++;
    static CAN_CHANGE_USERNAME_OTHER = ordinal++;
    static CAN_CHANGE_EMAIL = ordinal++;
    static CAN_CHANGE_OTHER_EMAIL = ordinal++;
    static CAN_VIEW_EMAIL = ordinal++;
    static CAN_SET_AVATAR = ordinal++;
    static CAN_SET_AVATAR_OTHER = ordinal;
    static CAN_SET_AVATAR_GIF = ordinal++;
    static CAN_SET_AVATAR_GIF_OTHER = ordinal++;

};