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
var ExpenseSplitter = /** @class */ (function () {
    function ExpenseSplitter() {
        this.members = [];
    }
    ExpenseSplitter.prototype.addMember = function (member) {
        this.members.push(member);
    };
    ExpenseSplitter.prototype.splitExpense = function (splitType, expense, members, Percentages) {
        if (!expense || expense == null || expense < 0 || expense == 0) {
            console.log("expense value is not valid");
            return;
        }
        else if (!members || members == null || members.length == 0) {
            console.log("members are required");
            return;
        }
        else if (splitType === "Custom" &&
            (!Percentages || Percentages.length == 0)) {
            console.log("percentage is required when for custom split");
            return;
        }
        else if (splitType === "Equally") {
            var totalMembers = members.length;
            var expensePerperson = expense / totalMembers;
            console.log("expense per person wil be ", expensePerperson);
            return;
        }
        else {
            if (!Percentages) {
                return;
            }
            var Percenttotal = Percentages.reduce(function (sum, current) { return sum + current; }, 0);
            if (Percenttotal != 100) {
                console.log("Percentage must sum up to 100 only");
                return;
            }
            if (Percentages.length != members.length) {
                console.log("the number of percentage must match the members ");
                return;
            }
            var result = [];
            for (var i = 0; i < members.length; i++) {
                var percentage = Percentages[i];
                var member = members[i];
                if (percentage != null &&
                    percentage != undefined &&
                    member != undefined) {
                    var amount = (expense * percentage) / 100;
                    result.push(__assign(__assign({ name: member.name }, (member.email ? { email: member.email } : {})), { amount: amount }));
                }
            }
            console.log(result);
        }
    };
    return ExpenseSplitter;
}());
var expenseTracker = new ExpenseSplitter();
expenseTracker.addMember({ name: "Ayush", email: "ayushsharma@gmail.com" });
expenseTracker.addMember({
    name: "Devraj",
    email: "devraj@gmail.com",
});
expenseTracker.addMember({
    name: "Bharat",
});
// expenseTracker.splitExpense("Equally", 1000, expenseTracker.members);
expenseTracker.splitExpense("Custom", 45670, expenseTracker.members, [10, 60, 30]);
