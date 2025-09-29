// const div = document.getElementsByTagName("div");
// div[0].innerText = "Hello World"; 
// div[0].style.color="white";
// div[0].style.backgroundColor="black";
// console.log(div);

// const container=document.getElementsByClassName("container");
// container[0].innerHTML="<h2 style=color:red>Hello World</h2>";
// console.dir(container);
// const h2=document.createElement("h2");
// h2.innerText="ABES Engineering College";
// h2.style.color="white";
// h2.style.backgroundColor="brown";
// console.log(h2);
// container[0].appendChild(h2);



// const button=document.getElementById('btn');
// console.log(button);

// const img=document.createElement("img");
// img.src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg";
// img.setAttribute("height","200px");
// img.setAttribute("width","200px")
// console.log(img);
// container[0].appendChild(img);

// function msg(){
// // console.log( "hi,i,m working");
// // alert("u r a fool");
// }
// button.addEventListener("click",msg);  




// BCLOCKING $ NON BLOCKING CODE


// function {
//     console.log("star");
//     for(i=0;i<1000;i++)
//     {
//         console.log(i);
//     }
//     console.log("end");
// }


// button.addEventListener('click',longData); 

const button =document.getElementById('btn');
const disp=document.getElementById('disp');
let table='<table border=1>';
async function fetchData(){
    disp.innerHTML="<h2>Data is loaading..</h2>";
// alert("hiiiiiiiiiiiiiiiiiiiiiiiii");
const response=await fetch('https://dummyjson.com/recipes');
const jsonData= await response.json();
console.log(jsonData.recipes);
disp.innerHTML=`<h2>${jsonData.recipes[0].name}`;
jsonData.recipes.forEach(element =>{table+=`<tr>
    <td><img src= ${element.image} height=200 width=200 alt='image'</td>
    <td> ${element.id}</td>
    <td>${ element.name}</td>
    
     <td>${ element.ingredients}</td>
    
    </tr>`})

table+='</table>';
disp.innerHTML=table;
// console.log(response);

}
button.addEventListener('click',fetchData); 