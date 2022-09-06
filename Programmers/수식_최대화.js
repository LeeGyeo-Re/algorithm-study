
function solution(expression) {
    var answer = 0;
    console.log('result',calculator(expression))
    return answer;
}

// 연산자 우선순위 정하기
function three(){
    return [
        ['+','-','*'],
        ['+','*','-'],
        ['-','+','*'],
        ['-','*','+'],
        ['*','+','-'],
        ['*','-','+']
    ]
}

function two(op1, op2){
    return [[op1, op2], [op2, op1]];
}

// 계산하기
function calculator(formular) {
    if(isInOperator(formular)) return Number(formular);
    let numCheck = /[^0-9]/;
    let operatorCheck = /[^-\\+*]/;
    
    let newFormular = formular;
    let numberArr = newFormular.split(numCheck);
    let operatorArr = newFormular.split(operatorCheck).filter(item => item !== '')
    
    // console.log(numberArr, operatorArr);
    
    const order = three();
    
    let newNumberArray = [...numberArr];
    let newOperatorArray = [...operatorArr];
    let max = -1;
    
    for(let i = 0 ; i < order.length; i++){
        let newNumberArray = [...numberArr];
        let newOperatorArray = [...operatorArr];
        let temp = [];
        // [+,-,*]
        const ops = order[i];
        console.log('ops',ops)
        
        for(let j = 0 ; j < ops.length; j++){
            // +
            const op = ops[j];
            temp = [];
            for(let k = 0 ; k < newOperatorArray.length; k++){
                // [ '-', '*', '-', '+' ]
                if(op === newOperatorArray[k]){
                    const cal = calculate(newNumberArray[k],newNumberArray[k+1],op);
                    temp.push(cal)
                }else{
                    temp.push(newNumberArray[k])
                }
            }
            console.log('temp', temp)
            // [100, 200, 300, 520]
            newNumberArray = temp;
            // [-, *, -]
            newOperatorArray = newOperatorArray.filter(it => it !== op);
        }
        if(max < Math.abs(newNumberArray[0])) max = Math.abs(newNumberArray[0]);
    }
    
    return max;
}

function isInOperator(formular){
    let check = /^[0-9]+$/;
    return check.test(formular)
}

function calculate(num1, num2, op){
    switch(op){
        case '+':
            return Number(num1)+Number(num2);
        case '-':
            return Number(num1)-Number(num2);
        case '*':
            return Number(num1)*Number(num2);
    }
    return 0;
}
