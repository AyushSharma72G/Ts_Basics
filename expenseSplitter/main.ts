interface Member {
  name: string;
  email?: string;
}

interface Customreposne {
  name: string;
  email?: string;
  amount: number;
}

type split = "Equally" | "Custom";

class ExpenseSplitter {
  members: Member[] = [];

  addMember(member: Member) {
    this.members.push(member);
  }

  splitExpense(
    splitType: split,
    expense: number,
    members: Member[],
    Percentages?: number[],
  ) {
    if (!expense || expense == null || expense < 0 || expense == 0) {
      console.log("expense value is not valid");
      return;
    } else if (!members || members == null || members.length == 0) {
      console.log("members are required");
      return;
    } else if (
      splitType === "Custom" &&
      (!Percentages || Percentages.length == 0)
    ) {
      console.log("percentage is required when for custom split");
      return;
    } else if (splitType === "Equally") {
      const totalMembers = members.length;
      const expensePerperson = expense / totalMembers;
      console.log("expense per person wil be ", expensePerperson);
      return;
    } else {
      if (!Percentages) {
        return;
      }

      const Percenttotal = Percentages.reduce(
        (sum, current) => sum + current,
        0,
      );

      if (Percenttotal != 100) {
        console.log("Percentage must sum up to 100 only");
        return;
      }

      if (Percentages.length != members.length) {
        console.log("the number of percentage must match the members ");
        return;
      }

      const result: Customreposne[] = [];

      for (let i = 0; i < members.length; i++) {
        const percentage = Percentages[i];
        const member = members[i];

        if (
          percentage != null &&
          percentage != undefined &&
          member != undefined
        ) {
          const amount = (expense * percentage) / 100;

          result.push({
            name: member.name,
            ...(member.email ? { email: member.email } : {}),
            amount: amount,
          });
        }
      }

      console.log(result);
    }
  }

}

const expenseTracker = new ExpenseSplitter();

expenseTracker.addMember({ name: "Ayush", email: "ayushsharma@gmail.com" });
expenseTracker.addMember({
  name: "Devraj",
  email: "devraj@gmail.com",
});
expenseTracker.addMember({
  name: "Bharat",
});

// expenseTracker.splitExpense("Equally", 1000, expenseTracker.members);

expenseTracker.splitExpense(
  "Custom",
  45670,
  expenseTracker.members,
  [10, 60, 30],
);
