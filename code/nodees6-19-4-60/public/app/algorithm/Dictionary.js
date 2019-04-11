class Dictionary {
    constructor(_values) {
        this.values = _values || {};
    }

    store(name, value) {
        this.values[name] = value;
    }

    get(name) {
        return this.values[name];
    }

    contains(name) {
        return Object.prototype.hasOwnProperty.call(this.values, name) &&
            Object.prototype.propertyIsEnumerable.call(this.values, name);
    }

    each(action) {
        for (let property in this.values) {
            if (Object.prototype.hasOwnProperty.call(this.values, property)) {
                action(property, this.values[property]);
            }
        }

    }
}