 let items=prompt("Что принесет дополнительный доход?","Переработка,чаевые,ставки");
        if (typeof(items)==="string" && items != "" && items != null){
        appData.income=items.split(",");
        appData.income.push(prompt('Может что то еще ?'),"лоторея");
        appData.income.sort();
        appData.income.forEach(function(item,i){
            console.log("Способы доп заробатка:" + (i+1) +"-"+item);
        });