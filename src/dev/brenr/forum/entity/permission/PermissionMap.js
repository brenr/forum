let __permissions__;
module.exports = class PermissionMap {
    /**
     * Constructs a Permission Map
     * @param {number} permissions The permissions represented as an integer
     */
    constructor(permissions) {
        __permissions__ = permissions;
    }
    
    /**
     * Gets a single permission
     * @param {number} ordinal the permission ordinal from __Permission__
     */
    getPermission(ordinal) {
        return (__permissions__ >> ordinal) & 0b1;
    }

    /**
     * Sets a single permission
     * @param {number} ordinal the permission ordinal from __Permission__
     * @param {Boolean} boolean whether or not this permission is allowed
     */
    setPermission(ordinal, boolean) {
        __permissions__ ^= (-boolean ^ __permissions__) & (0b1 << ordinal);
    }

    /**
     * Sets multiple permissions given an object key value pairs. Key 
     * being the __Permission__ ordinal and the value being a boolean
     * @param {{number: Boolean}} permissions 
     */
    setPermissions(permissions) {
        for (let [key, value] of Object.entries(permissions)) {
            setPermission(key, value);
        }
    }

    /**
     * @returns {number} integer representation of this permission map
     */
    asInteger() {
        return __permissions__;
    }

};