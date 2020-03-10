let money = prompt('Ваш бюджет на месяц', '100');
let time = prompt('Введите дату в формате YYYY-MM-DD', '2020-01-01');
let expensesOnMounth = prompt('Введите обязательную статью расходов в этом месяце', 'food');
let sum = prompt('Во сколько обойдется?', '10');

const appData = {
  budget: money,
  date: time,
  expenses: {
    [expensesOnMounth]: sum,
  },
  optionalExpenses: {},
  income: [],
  savings: false,
};

alert(+appData.budget / 30);
