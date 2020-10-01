module.exports = class Permissions {
    /**
     * Constructs a Permissions object
     * @param {number} permissions The permissions represented as an integer
     */
    constructor(permissions) {
        this.__permissions__ = permissions;
    }
    
    /**
     * Gets a single permission
     * @param {number} ordinal the permission ordinal from __Permission__
     */
    get(ordinal) {
        return Boolean((this.__permissions__ >> ordinal) & 0b1);
    }

    /**
     * Sets a single permission
     * @param {number} ordinal the permission ordinal from __Permission__
     * @param {Boolean} boolean whether or not this permission is allowed
     */
    set(ordinal, value) {
        this.__permissions__ ^= (-value ^ this.__permissions__) & (0b1 << ordinal);
    }

    /**
     * Sets multiple permissions given an object ordinal value pairs. Ordinal 
     * being the __Permission__ ordinal and the value being a boolean
     * @param {{number: Boolean}} permissions 
     */
    setPermissions(permissions) {
        for (let [ordinal, value] of Object.entries(permissions)) {
            this.set(ordinal, value);
        }
    }

    /**
     * 
     * @param {Permissions} permissions the permissions object to AND with
     * @returns {Permissions} the new AND permissions
     */
    and(permissions) {
        return new Permissions(this.asInteger() & permissions.asInteger());
    }

    /**
     * 
     * @param {Permissions} permissions the permissions to OR with
     * @returns {Permissions} the new OR permissions
     */
    or(permissions) {
        return new Permissions(this.asInteger() | permissions.asInteger());
    }

    /**
     * @returns {number} integer representation of this permission map
     */
    asInteger() {
        return this.__permissions__;
    }

};