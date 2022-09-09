var screen = document.querySelector('#screen')
var button = document.querySelectorAll('.button')

    for(num of button)
    {
        num.addEventListener('click',(e)=>{
            buttonText=e.target.innerText;
             if(buttonText =='X')
            {
                buttonText= '*';
            }
             if(buttonText =='=')
            {
                buttonText= '';
            }
            if(buttonText =='Clear')
            {
                buttonText= '';
            }
            screen.value+=buttonText;
        });
    }

function add()
{
    screen.value+=number;
}

function multiply()
{
    screen.value*=number;
}

function subtract()
{
    screen.value-=number;
}

function divide()
{
    screen.value/=number;
}

function operate(number1, operator,number2) {
    switch (operator) {
        case "+":
            return add(number1, number2);
        case "-":
            return subtract(number1, number2);
        case "*":
            return multiply(number1, number2);
        case "÷":
            return divide(number1, number2);
    }
};


