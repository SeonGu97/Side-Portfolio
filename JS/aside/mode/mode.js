'use strict';

export default class Mode {
    constructor(generator, data) {
        const mode = new generator(data[4], data[1].name);

        const name = 'Dark-Mode';
        let value;

        if(localStorage.getItem(name) == null) {
            value = JSON.parse(localStorage.getItem(name));
        }else {
            value = [];
            value.push(false);
        }

        data[4].name.addEventListener('click', e => {
            const target = e.target;

            target.classList.toggle('active');

            let boolean;

            if(target.classList.contains('active')) {
                boolean = true;
            }else {
                boolean = false;
            }

            value.shift();
            value.push(boolean);

            localStorage.setItem(name, JSON.stringify(value));

            this.maintains(data, boolean);
        });   

        this.boolean = JSON.parse(localStorage.getItem(name))[0];

        this.maintains(data, this.boolean);
    }

    add(element, value) {
        element.classList.add(value);
    }

    remove(element, value) {
        element.classList.remove(value);
    }

    replace(element, value1, value2) {
        element.classList.replace(value1, value2);
    }

    maintains(data, boolean) {
        if(boolean) {
            data[4].value[0] = 'mode border-light active';
            this.replace(data[4].name, 'border-dark', 'border-light');

            this.add(data[0].name, 'dark-mode');

            this.add(data[1].name, 'light-dark-mode');

            data[3].array.forEach(element => {
                this.replace(element, 'light-item', 'dark-item');
            });
            data[3].value[0] = 'item dark-item';

            data[6].value[0] = 'library dark-library';
            this.add(data[6].name, 'dark-library');
        }else {
            data[4].value[0] = 'mode border-dark';
            this.replace(data[4].name, 'border-light', 'border-dark');

            this.remove(data[0].name, 'dark-mode');

            this.remove(data[1].name, 'light-dark-mode');
            
            data[3].array.forEach(element => {
                this.replace(element, 'dark-item', 'light-item');
            });

            data[6].value[0] = 'library light-library';
            this.add(data[6].name, 'light-library');
            this.remove(data[6].name, 'dark-library');
        }
    }
}