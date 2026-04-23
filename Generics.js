var AddTypes = /** @class */ (function () {
    function AddTypes() {
        this.arr = [];
    }
    AddTypes.prototype.addItems = function (item1, item2) {
        this.arr.push(item1);
        this.arr.push(item2);
    };
    AddTypes.prototype.getItem = function (index) {
        return this.arr[index];
    };
    return AddTypes;
}());
var obj1 = new AddTypes(); // sending general type while creating the object
obj1.addItems(2, 3);
console.log(obj1.getItem(1));
// https://github.com/AyushSharma72G/Ts_Basics
function General(data) {
    console.log(data);
}
General("ayush");
General(2);
