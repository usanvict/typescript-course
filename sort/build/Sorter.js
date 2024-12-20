"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        for (let i = 0; i < this.collection.length; i++) {
            for (let j = 0; j < this.collection.length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
                // Adding separate type guards doesn't seem to be a good approach
                // if (typeof this.collection === "string") {}
            }
        }
    }
}
exports.Sorter = Sorter;
