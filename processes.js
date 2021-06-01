'use strict';

const valueBtnNumbers = { 
    'data': [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 
    'typeClass': 'btnNumber',
    'nameContent': 'wrapperNumbersCalculator'
}

const valueBtnOperators = {
    'data': ['/','*','+','-'],
    'typeClass': 'btnOperator',
    'nameContent': 'wrapperOperatorsCalculator'
}

const valueBtnToResult = {
    'data': ['AC','='],
    'typeClass': 'btnToResult',
    'nameContent': 'wrapperNumbersCalculator'
}

let wrapperResult = document.querySelector('.wrapperResult');

window.addEventListener('load',()=>{
    addedBtnDivs(valueBtnNumbers);
    addedBtnDivs(valueBtnOperators);
    addedBtnDivs(valueBtnToResult);
});

let getValueBtnCalculator = (e) => {
    wrapperResult.append(e.target.dataset.value);
    console.log(e.target.dataset.value);
}

let addedBtnDivs = (valueBtns) => {
    let content = document.querySelector(`.${valueBtns.nameContent}`);
    valueBtns.data.forEach(element => {
        let divBtn = document.createElement('div');
        divBtn.className = valueBtns.typeClass;
        divBtn.addEventListener("click", getValueBtnCalculator);
        divBtn.setAttribute('data-value', element);
        divBtn.innerText = element;
        content.append(divBtn);
    });
}
