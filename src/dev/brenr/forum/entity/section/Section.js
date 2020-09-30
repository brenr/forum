
module.exports = class Section {

    constructor(
        id,
        name,
        sortId,
        permissionsByGroup,
        permissionsByUser
    ) {
        this.id = id;
        this.name = name;
        this.sortId = sortId;
        this.permissionsByGroup = permissionsByGroup;
        this.permissionsByUser = permissionsByUser;
    }
}