class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        this.length--;

    }

    shiftItems(index) {
        for(let i = index; i < this.length - 1; ++i) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
    }
}

const newArr = new MyArray();
newArr.push(10);
newArr.push('Hello');
newArr.push('World');
newArr.push('Rohan');
newArr.push('Rishav');
console.log(newArr);
newArr.delete(2);
console.log(newArr);