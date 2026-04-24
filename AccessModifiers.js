var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bank = /** @class */ (function () {
    function Bank() {
        this.bankName = "JC Bank";
    }
    return Bank;
}());
var BankAccount = /** @class */ (function (_super) {
    __extends(BankAccount, _super);
    function BankAccount(name) {
        var _this = _super.call(this) || this; // call the constructor of the parent
        _this.balance = 0;
        _this.accountHolderName = name;
        return _this;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.holderInfo = function () {
        return this.accountHolderName;
    };
    BankAccount.prototype.getbankName = function () {
        return this.bankName; // this comes form the Bank class
    };
    return BankAccount;
}(Bank));
var bank = new BankAccount("Ayush");
console.log(bank.holderInfo());
console.log(bank.getbankName());
