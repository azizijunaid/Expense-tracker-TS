// Assignment #1
// Expense Tracker - Ledger

import { IAdd } from './interfaces';

// - DataModel: Date, Particulars / Description, Amount, "Expense" "Income"
// 10/08/2022, Bought LCD, 45000, "Expense"
// 06/08/2022, Get Freelance Payment, 150000, "Income"
// 01/08/2022, Rent Office, 35000, "Expense"

// - AddExpense method
// - AddIncome method
// - Total Expense
// - Total Income
// - Current Balance

export class ExpenseTracker {
  expenses: IAdd[] = [];
  AddExpense(payload: IAdd) {
    if (payload.type === 'Expense') {
      this.expenses.push(payload);
    } else {
      throw new Error('Invalid expense type!');
    }
  }

  AddIncome(payload: IAdd) {
    if (payload.type === 'Income') {
      this.expenses.push(payload);
    } else {
      throw new Error('Invalid expense type!');
    }
  }

  TotalExpense(): number {
    let total = 0;
    for (let index = 0; index < this.expenses.length; index++) {
      const eachExpenseObj = this.expenses[index];
      if (eachExpenseObj.type === 'Expense') {
        total += eachExpenseObj.amount;
      }
    }
    return total;
  }

  TotalIncome(): number {
    let total = 0;
    for (let index = 0; index < this.expenses.length; index++) {
      const eachIncomeObj = this.expenses[index];
      if (eachIncomeObj.type === 'Income') {
        total += eachIncomeObj.amount;
      }
    }
    return total;
  }

  Balance(): number {
    return this.TotalIncome() - this.TotalIncome();
  }
}

const expenseTracker = new ExpenseTracker();
expenseTracker.AddExpense({
  date: new Date(),
  amount: 500,
  description: 'egg',
  type: 'Expense',
});
expenseTracker.AddExpense({
  date: new Date(),
  amount: 500,
  description: 'tomatto',
  type: 'Expense',
});
expenseTracker.AddExpense({
  date: new Date(),
  amount: 2000,
  description: 'beef',
  type: 'Expense',
});
expenseTracker.AddIncome({
  date: new Date(),
  amount: 50000,
  description: 'income',
  type: 'Income',
});
console.log(`TotalExpense : ${expenseTracker.TotalExpense()}`);
console.log(`TotalIncome : ${expenseTracker.TotalExpense()}`);
console.log(`Balance : ${expenseTracker.TotalExpense()}`);
