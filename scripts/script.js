const divid_op = document.querySelector('#divide');
const multiply_op = document.querySelector('#multiply')
const sub_op = document.querySelector('#subtract')
const add_op = document.querySelector('#add')
const equals_op = document.querySelector('#equals')

const add = function(num1,num2){
    let result = num1+num2;
    return result
}

const div = function(num1,num2){
    let result = num1/num2;
    return result
}
const oprate = function(num1,num2,op){
    if(op===add_op){
        return add(num1,num2)
    } else if(op===divid_op){
        return div(num1,num2)
    } else if(op===sub_op){


    }
    else if(op===multiply_op){
        
    }

   
}