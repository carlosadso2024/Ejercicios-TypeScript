type Transaction = {
    amount: number
    type: 'income' | 'expense'
    category: string
}

function getTotalIncome(transactions: Transaction[]): { income: number, expense: number } {
    let income = 0;
    let expense = 0;

    for (const transaction of transactions) {
        if (transaction.type === 'income') {
            income += transaction.amount;
        } else {
            expense += transaction.amount;
        }
    }
    return { income, expense };
}

const transactions: Transaction[] = [
    { amount: 100, type: 'income', category: 'salary' },
    { amount: 50, type: 'expense', category: 'food' },
    { amount: 200, type: 'income', category: 'freelance' },
    { amount: 30, type: 'expense', category: 'transport' },
    { amount: 150, type: 'income', category: 'investment' },
    { amount: 40, type: 'expense', category: 'entertainment' },
]

console.log(getTotalIncome(transactions));
