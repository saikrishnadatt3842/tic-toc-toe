console.log("sas");
var bdy = document.getElementById('bdy');
  



var b = document.getElementById('dk');

b.addEventListener('click',function(){
    bdy.style.background= "black";
})
    console.log("ghjk");


var td1 = document.getElementById('td1');
var td2 = document.getElementById('td2');
var td3 = document.getElementById('td3');
var td4 = document.getElementById('td4');
var td5 = document.getElementById('td5');
var td6 = document.getElementById('td6');
var td7 = document.getElementById('td7');
var td8 = document.getElementById('td8');
var td9 = document.getElementById('td9');


//-----1--------//
td1.addEventListener('click',function(){
    td1.style.color = "red";
    td1.textContent = "x";
})
td1.addEventListener('dblclick',function(){
    td1.textContent = "o";
    td1.style.color = "blue";
})

//-----2--------//
td2.addEventListener('click',function(){
    td2.style.color = "red";
    td2.textContent = "x";
})
td2.addEventListener('dblclick',function(){
    td2.style.color = "blue";
    td2.textContent = "o";
})

//-----3--------//
td3.addEventListener('click',function(){
    td3.textContent = "x";
    td3.style.color = "red";
})
td3.addEventListener('dblclick',function(){
    td3.textContent = "o";
    td3.style.color = "blue";
})

//-----4--------//
td4.addEventListener('click',function(){
    td4.textContent = "x";
    td4.style.color = "red";
})
td4.addEventListener('dblclick',function(){
    td4.style.color = "blue";
    td4.textContent = "o";
})

//-----5--------//
td5.addEventListener('click',function(){
    td5.textContent = "x";
    td5.style.color = "red";
})
td5.addEventListener('dblclick',function(){
    td5.style.color = "blue";
    td5.textContent = "o";
})

//-----6--------//
td6.addEventListener('click',function(){
    td6.textContent = "x";
    td6.style.color = "red";
})
td6.addEventListener('dblclick',function(){
    td6.style.color = "blue";
    td6.textContent = "o";
})

//-----7--------//
td7.addEventListener('click',function(){
    td7.style.color = "red";
    td7.textContent = "x";
})
td7.addEventListener('dblclick',function(){
    td7.style.color = "blue";
    td7.textContent = "o";
})

//-----8--------//
td8.addEventListener('click',function(){
    td8.style.color = "red";
    td8.textContent = "x";
})
td8.addEventListener('dblclick',function(){
    td8.style.color = "blue";
    td8.textContent = "o";
})

//-----9--------//
td9.addEventListener('click',function(){
    td9.textContent = "x";
    td9.style.color = "red";
})
td9.addEventListener('dblclick',function(){
    td9.style.color = "blue";
    td9.textContent = "o";
})


var two = document.getElementById('two');

var x = "x";

var restart = document.getElementById('btn');

var squres = document.querySelectorAll("td");

function clearbord(){
    for(var i = 0; i<squres.length; i++){
        squres[i].textContent = '';
    }
}
var a = document.getElementById('a');

a.addEventListener('click',function(){
    bdy.style.background = "white";
})
restart.addEventListener('click',clearbord);
var icon = document.getElementById('icon');

icon.addEventListener('click',function(){
    bdy.style.background = "red";
})
if(document.bdy.contains = "red"){
    icon.src = "images/sun.png";
}
else{
    icon.src = "images/moon.png";
}

if(squres[0] == "x")
{
    console.log("ss");


}
