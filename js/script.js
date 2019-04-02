let money = prompt("Ваш бюджет в месяц?", "500000"),
    time = prompt("Введите дату формате YYYY-MM-DD", "2019-04-02");
    
    // article2 = prompt("Введите обязательную статью рассходов","Такси"),
    // cost2 = prompt("Во сколько обойдется", "1000");

var appData = {
    budget : money,
    timeData : time,
    expenses : {
        // expenses1:article1 +" " + cost1,
        // expenses2:article2 +" " + cost2
    },
    optionalExpenses:{},
    income:[],
    saving:false
};
// appData.expenses.article1=cost1;
// appData.expenses.article2=cost2;

for(let i=0; i<2;i++){
    let article = prompt("Введите обязательную статью рассходов","Такси"),
        cost = prompt("Во сколько обойдется", "1000");
    if ((typeof(article)==='string' && (typeof(article)) != null && (typeof(cost)) != null && article != "" 
    && cost != "" && article.length<50)) {
        appData.expenses[article]= cost;
    } else{ i--;};
};
// let i =0;
// while (i<2) {
//     let article = prompt("Введите обязательную статью рассходов","Такси"),
//         cost = prompt("Во сколько обойдется", "1000");
//     if ((typeof(article)==='string' && (typeof(article)) != null && (typeof(cost)) != null && article != "" 
//     && cost != "" && article.length<50)) {
//         appData.expenses[article]= cost;
//         i++;
//     };
// }
//alert("Бюджет на один день равен " + (appData.budget/30) );

console.log(appData);

