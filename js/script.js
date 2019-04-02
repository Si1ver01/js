let money = prompt("Ваш бюджет в месяц?", "500000"),
    time = prompt("Введите дату формате YYYY-MM-DD", "2019-04-02"),
    article1 = prompt("Введите обязательную статью рассходов","Такси"),
    cost1 = prompt("Во сколько обойдется", "1000"),
    article2 = prompt("Введите обязательную статью рассходов","Такси"),
    cost2 = prompt("Во сколько обойдется", "1000");

var appData = {
    budget : money,
    timeData : time,
    expenses : {
        expenses1:article1 +" " + cost1,
        expenses2:article2 +" " + cost2
    },
    optionalExpenses:{},
    income:[],
    saving:false
};

alert("Бюджет на один день равен " + (appData.budget/30) );

console.log(appData);

