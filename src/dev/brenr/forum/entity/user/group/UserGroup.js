
module.exports = class UserGroup {

    constructor(
        id,
        name,
        powerLevel,
        isSuperAdmin,
        cssClass
    ) {
        this.id = id;
        this.name = name;
        this.powerLevel = powerLevel;
        this.isSuperAdmin = isSuperAdmin;
        this.cssClass = cssClass;
    }

}