
module.exports = class Category {

    constructor(
        id,
        name,
        section,
        sortId,
        permissionByGroup,
        permissionByUser
    ) {
        this.id = id;
        this.name = name;
        this.section = section;
        this.sortId = sortId;
        this.permissionByGroup = permissionByGroup;
        this.permissionByUser = permissionByUser;
    }

}