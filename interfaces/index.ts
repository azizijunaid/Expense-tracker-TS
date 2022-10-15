export interface IAdd {
    date: Date;
    description: string;
    amount: number;
    type: "Expense" | "Income";
}