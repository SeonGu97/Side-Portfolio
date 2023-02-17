'use strict';

import Nav from "./nav/nav.js";
import Library from "./library/library.js"

import StorageData from "../setting/storage-data.js";
import StorageCreater from "../setting/storage-creater.js";
import _Class from "../setting/class.js";

export default class Aside {
    constructor(generator, data) {
        const aside = new generator(data[1], data[0].name);
        
        const storage_data = StorageData;
        const storage_creater = StorageCreater;
        const _class = _Class;

        const nav = new Nav(generator, data, storage_data, storage_creater, _class);
        const library = new Library(generator, data, _class);

        const fix = storage_creater(storage_data[2].name, storage_data[2].value, storage_data[2].basic);
        
        const _fix = JSON.parse(localStorage.getItem(storage_data[2].name));
        const _dark_mode = JSON.parse(localStorage.getItem(storage_data[0].name));

        data[1].name.addEventListener('click', e => {
            const target = e.target;
            
            if(_class.contains(target, 'list')) {

                const target_index = data[5].array.indexOf(target);
    
                let boolean;

                if(target_index == 3) {
                    boolean = true;

                    _class.add(data[10].name, 'fix');
                }else {
                    boolean = false;
                    console.log(false)
                    _class.remove(data[10].name, 'fix');
                }

                _fix.shift();
                _fix.push(boolean);

                localStorage.setItem(storage_data[2].name, JSON.stringify(_fix));
            }
        });

        this.maintains(data, _dark_mode[0], _class, _fix[0]);
    }

    maintains(data, _dark_mode, _class, _fix) {
        if(_dark_mode) {
            _class.add(data[10].name, 'dark-library');
        }else {
            _class.remove(data[10].name, 'dark-library');
        }

        if(_fix) {
            _class.add(data[10].name, 'fix');
        }
    }
}