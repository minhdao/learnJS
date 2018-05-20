const account = {
    name: 'Minh Dao',
    incomes: [],
    expenses:[],
    addIncomes: function (desc, amount) {
        this.incomes.push({
            description: desc,
            amount: amount
        });
    },
    addExpense: function (desc, amount) {
        this.expenses.push({
            description: desc,
            amount: amount
        });
    },
    getAccountSummary: function () {
        let totalIncome = 0;
        let totalExpense = 0;
        this.incomes.forEach(function (income) {
            totalIncome += income.amount;
        });
        this.expenses.forEach(function (expense) {
            totalExpense += expense.amount;
        });
        return `${this.name} has a balance of $${totalIncome - totalExpense}.
                $${totalIncome} in incomes.
                $${totalExpense} in expenses.`;
    }
};

account.addIncomes('salary', 1000);
account.addExpense('buy milk', 20);
account.addExpense('pay rent', 300);
console.log(account.getAccountSummary());
