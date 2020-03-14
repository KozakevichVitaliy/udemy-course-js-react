'use strict';

let btnStart = document.getElementById('start'),
  budgetValue = document.getElementByClassName('budget-value'),
  budgetValue = document.getElementByClassName('daybudget-value'),
  budgetValue = document.getElementByClassName('level-value'),
  budgetValue = document.getElementByClassName('expenses-value'),
  budgetValue = document.getElementByClassName('optionalexpenses-value'),
  budgetValue = document.getElementByClassName('income-value'),
  budgetValue = document.getElementByClassName('monthsavings-value'),
  budgetValue = document.getElementByClassName('monthsavings-value'),

  expensesItem = document.getElementsByClassName('expenses-item'),
  buttons = document.getElementsByTagName('button'),
  
  expensesItemBtn = buttons[0],
  optionalexpensesBtn = buttons[1],
  countbBudgeBtn = buttons[2],
  optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
  incomeItem = document.querySelector('.choose-income'),
  checkSavings = document.querySelector('#savings'),
  sumValue = document.querySelector('.choose-sum'),
  percentValue = document.querySelector('.choose-percent'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value');
