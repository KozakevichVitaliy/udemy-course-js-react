'use strict';

let money, time;

function start() {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
}
start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
      b = prompt('Во сколько обойдется?', '');

    if (
      typeof a === 'string' &&
      typeof a != null &&
      typeof b != null &&
      a != '' &&
      b != '' &&
      a.length < 50
    ) {
      appData.expenses[a] = b;
    } else {
      i--;
    }
  }
}
chooseExpenses();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt('Какова сумма накоплений?'),
      percent = +prompt('Под какой процент?');

    appData.monthIncome = (save / 100 / 12) * percent;
    alert('Доход с Вашего депозита в месяц: ' + appData.monthIncome);
  }
}
checkSavings();

// 1.detectDayBudget

function detectDayBudget(appData) {
  appData.moneyPerDay = +(appData.budget / 30).toFixed(1);
  alert('Бюджет на 1 день составляет ' + appData.moneyPerDay + 'руб.');
  return appData.moneyPerDay;
}

const moneyPerDay = detectDayBudget(appData);

// 2.detectLevel

function detectLevel(moneyPerDay) {
  if (moneyPerDay < 100) {
    console.log('Это минимальный уровень достатка!');
  } else if (moneyPerDay > 100 && moneyPerDay < 2000) {
    console.log('Это средний уровень достатка!');
  } else if (moneyPerDay > 2000) {
    console.log('Это высокий уровень достатка!');
  } else {
    console.log('Произошла ошибка');
  }
}

detectLevel(moneyPerDay);

// 3.chooseOptExpenses
function chooseOptExpenses() {
  for (let i = 1; i <= 3; i++) {
    let b = prompt('Статья необязательных расходов?', '');
    appData.optionalExpenses[i] = b;
  }
}

chooseOptExpenses();
console.log(appData);
