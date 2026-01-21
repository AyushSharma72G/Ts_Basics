class AddTypes<T> {  // T here is generic  

    private Arr: T[]

    constructor() {
        this.Arr = []
    }

    addItems(item1: T, item2: T): void {
        this.Arr.push(item1);
        this.Arr.push(item2);
    }

    getItem(index: number): T | undefined {
        return this.Arr[index];
    }

}

const obj1 = new AddTypes<number>(); // sending general type while creating the object 

obj1.addItems(2, 3);

console.log(obj1.getItem(1));



// https://github.com/AyushSharma72G/Ts_Basics