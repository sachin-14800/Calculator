var op1="";
var op2="";
var result="";
var operator="";
var input=document.getElementById('text');
var operators=document.querySelectorAll('.operator');

for(var i=0;i<operators.length;i++)
{
    operators[i].addEventListener('click',function(){
        var operate=this.getAttribute('data-value');
        if(operate=='%')
        {
            if(op2=="")
            {op1=op1/100;
            input.innerText=op1;}
            else{
                op2=op2/100;
                input.innerText=op2;
            }
        }
        else
        operator=operate;
        document.getElementsByClassName('show')[0].innerText=operator;
    });

}

document.getElementsByClassName('negate')[0].addEventListener('click',function(){
    
            if(op2=="")
            {
                op1*=-1;
                input.innerText=op1;
            }
            else{
                op2*=-1;
                input.innerText=op2;
            }
        
});
document.getElementsByClassName('AC')[0].addEventListener('click',function(){
    op1=0;
    op2="";
    operator="";
    input.innerText=op1;
    document.getElementsByClassName('show')[0].innerText=operator;
  });

var keys=document.querySelectorAll('.key');
for(var i=0;i<keys.length;i++)
{
    keys[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        if(operator=="")
        {
            if(op1==0)
            op1=value;
            else
            op1+=value;
            input.innerText=op1;
        }
        else
        {
            op2+=value;
            input.innerText=op2;
        }
    });
}
var equal=document.getElementsByClassName('equal')[0].addEventListener('click',function()
{
    console.log(op1,op2);
    if(op1=="")
    {result="";}
    else if(op2=="")
    {
        result=op1;
    }
    else{
    result=eval(op1+" "+operator+" "+op2);
    }
    op1=result;
    op2="";
    operator="";
    input.innerText=result;
    document.getElementsByClassName('show')[0].innerText=operator;
});
var backspace=document.getElementsByClassName('backspace')[0].addEventListener('click',function(){
    if(operator=="")
    {
        op1=String(op1);
        let x=op1.slice(0,op1.length-1);
        if(x.length==0)
        x=0;
        input.innerText=x;
        op1=x;
    }
    else{
        op2=String(op2);
        let x=op2.slice(0,op2.length-1);
        if(x.length==0)
        x=0;
        input.innerText=x;
        op2=x;
    }
});