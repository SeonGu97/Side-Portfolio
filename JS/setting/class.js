const _class = {
    add: function(element, value) {
        return element.classList.add(value);
    },
    add_all: function(element, value) {
        element.forEach(element => {
            element.classList.add(value);
        });
    },

    remove: function(element, value) {
        return element.classList.remove(value);
    },
    remove_all: function(element, value) {
        element.forEach(element => {
            element.classList.remove(value);
        });
    },

    toggle: function(element, value) {
        return element.classList.toggle(value);
    },
    toggle_all: function(element, value) {
        element.forEach(element => {
            element.classList.toggle(value);
        });
    },

    replace: function(element, value) {
        return element.classList.replace(value);
    },
    replace_all: function(element, value1, value2) {
        element.forEach(element => {
            element.classList.replace(value1, value2);
        });
    },

    contains: function(element, value) {
        return element.classList.contains(value);
    },
    contains_all: function(element, value) {
        element.forEach(element => {
            element.classList.contains(value);
        });
    },
}

export default _class;