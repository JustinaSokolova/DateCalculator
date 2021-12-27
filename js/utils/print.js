const resultBlock = document.querySelector("#output");

function printError(errorText) {
    resultBlock.innerHTML = `<span style= "color: red;"> ${errorText} </span>` 
};

function printDateDiff ({years, months, days}){
    resultBlock.innerHTML = `
    Годы: ${years}
    Месяцы: ${months}  
    Дни: ${days} `
}

export {printError, printDateDiff };