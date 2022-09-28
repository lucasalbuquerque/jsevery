function addDays(date, days) {
  const tomorrow = new Date();
  tomorrow.setDate(date.getDate() + days);
  return tomorrow;
}

function subDays(date, days) {
  return date.setDate(date.getDate() - days);
}

function addYears(date, years) {
  return date.setFullYear(date.getFullYear() + years);
}

function subYears(date, years) {
  return date.setFullYear(date.getFullYear() - years);
}

function format(date) {
  return date.toLocaleDateString("pt-br");
}

/*
lição de casa:
seguindo a implementação de datas no arquivo helpers/date/index.js implemente o 
método de addMonth e SubMonth 

- implemente pelo menos 1 teste para cada helper em helpers/date/index.js
*/

module.exports = { addDays, subDays, format };
