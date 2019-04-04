let money,time;
function start() {
    money = +prompt("Ваш бюджет в месяц?", "500000");
    time = prompt("Введите дату формате YYYY-MM-DD", "2019-04-02");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет в месяц?", "500000");
    }
}

start();
 
var appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses:{},
    income:[],
    saving:true,
    choseExpanses: function(){
        for(let i=0; i<2;i++){
            let article = prompt("Введите обязательную статью рассходов","Такси"),
                cost = prompt("Во сколько обойдется", "1000");
            if ((typeof(article)==='string' && (typeof(article)) != null && (typeof(cost)) != null && article != "" 
            && cost != "" && article.length<50)) {
                appData.expenses[article]= cost;
            } else{ i--;};
        };
    },
    checkSaving:function(){
        if (appData.saving == true) {
            let save = +prompt("Какова сумма накоплений", "12000"),
                percent = +prompt("Под какой процент?", "12");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита"+ appData.monthIncome); 
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = appData.budget/30;
        alert("Дневной бюджет составляет " + appData.moneyPerDay);
    },
    detectLevel: function(){
        if (appData.moneyPerDay < 100){
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else{
            console.log("Произошла ошибка");
        }
    },
    chooseeOptExpenses: function(){
        for (let i=0;i<3;i++){
            let states=prompt("Статья необязательных расходов ?", "Гулянки" + i);
            appData.optionalExpenses[i] = states;
        }
    },
    choseIncome:function(){
        let items=prompt("Что принесет дополнительный доход?","переработка,чаевые,ставки");
        if (typeof(items)==="string" && items != "" && items != null){
        appData.income=items.split(",");
        appData.income.push(prompt('Может что то еще ?', "лоторея"));
        appData.income.sort();
        appData.income.forEach(function(item,i){
            console.log("Способы доп заробатка:" + (i+1) +"-"+item);
        });
        } else { alert("Строка заполнена не верно")};
    }
};
appData.choseIncome();
for (let key in appData) {
    console.log("Наша программа включает в себя:" + key);
    
};
console.log(appData);
