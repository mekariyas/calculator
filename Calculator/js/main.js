//console.log('hello world');
let table = document.getElementById('table');
let txt= document.getElementById('txt');
let text = txt.firstChild;
table.addEventListener('click',(e)=>{
    let ele = e.target;
if((ele.textContent!== '=')&&(ele.textContent !== 'Clear')){
    text.value += ele.textContent;
} else if(ele.textContent==='Clear'){
    text.value = ' ';
} else if(ele.textContent === '='){
    let ele2 = text.value;
    text.value = eval(ele2);
}
}); 
