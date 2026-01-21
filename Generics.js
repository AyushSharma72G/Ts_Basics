var AddTypes = /** @class */ (function () {
    function AddTypes() {
        this.Arr = [];
    }
    AddTypes.prototype.addItems = function (item1, item2) {
        this.Arr.push(item1);
        this.Arr.push(item2);
    };
    AddTypes.prototype.getItem = function (index) {
        return this.Arr[index];
    };
    return AddTypes;
}());
var obj1 = new AddTypes();
obj1.addItems(2, 3);
console.log(obj1.getItem(1));
