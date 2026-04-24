class Bank {
  protected bankName: string = "JC Bank";
}

class BankAccount extends Bank {
  private balance: number = 0;
  private accountHolderName: string;

  constructor(name: string) {
    super(); // call the constructor of the parent
    this.accountHolderName = name;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  holderInfo(): string {
    return this.accountHolderName;
  }

  getbankName(): string {
    return this.bankName; // this comes form the Bank class
  }
}

const bank = new BankAccount("Ayush");

console.log(bank.holderInfo());
console.log(bank.getbankName());
