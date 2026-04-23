class AddTypes<T> {
  // T here is generic

  private arr: T[];

  constructor() {
    this.arr = [];
  }

  addItems(item1: T, item2: T): void {
    this.arr.push(item1);
    this.arr.push(item2);
  }

  getItem(index: number): T | undefined {
    return this.arr[index];
  }
}

const obj1 = new AddTypes<number>(); // sending general type while creating the object

obj1.addItems(2, 3);

console.log(obj1.getItem(1));

// https://github.com/AyushSharma72G/Ts_Basics
