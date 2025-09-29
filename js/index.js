// console.log("heloo World")
// var a=20;
// console.log("a="+a);

// console.log(a);
// let a=20;


// let a=50;
// if(a>10)
// {
// let a=100;
// console.log(a)
// }
// else{
// console.log("hhhh");
// }
// console.log("hii"+a);

// const a=23;
// a=50;


//normal funct
// function fun(msg){
//     return "hey"+msg;
//     console.log("heloooo");
// }
// const data=fun("greet");
// console.log( data);


//func as expression 
// const data=function(a,b){
//     return  a*b;
// }
// console.log(data (12,20));



//arrow fun 
// const dat =(msg)=>{
//     console.log("first"+msg);
// }
// dat("in react dev");

// const data=msg=>msg;
// console.log(data ("greet in aday "));

//IIFE
// (function(){
//     console.log("wlc to mewekrj");

// })();



// function greet(msg="jaca"){
//     console.log(msg+"is good lang ");
// }greet("phython");


function selectLang(lang)
{
    let result;
    if(lang=="java"){
        function javacompiler(){
            return "using java compiler";
        }
         result=javacompiler(); 
    }
    else if(lang=='c')
    {
        function cCompiler (){
            return "using c compiler";
        }
        result=cCompiler
    }
    else
    {
        result="no compiler found";
    }
    return result;
    
}

console.log(selectLang(" java "));