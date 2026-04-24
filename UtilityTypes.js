var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function update(todo, fieldsToUpdate) {
    // we need to only update the todo partially
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo = {
    title: "This is todo 1",
    description: "this is the desc of todo 1",
};
var todo2 = update(todo, {
    description: "this is the desc of todo 2",
});
console.log(todo2);
