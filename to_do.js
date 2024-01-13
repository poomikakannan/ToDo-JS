"use strict"
let value =0

let div1=document.createElement('div')
div1.className="container"
let h1=document.createElement('h1')
h1.textContent="To Do List"
let input=document.createElement('input')
input.className='box'
let btn=document.createElement('button')
btn.className='btn'
btn.textContent='Submit'
btn.addEventListener("click",store)
div1.append(h1,input,btn)
document.body.append(div1)


let  clear = document.createElement('button')
clear.className='clear'
clear.textContent="Clear"



function store(){
    if(input.value==""){
        alert("enter a value")
    }
    else if(value==0){
        let list1 = document.createElement('div')
        let list2 = document.createElement('ul')
        let span  = document.createElement('span')
    
    
        span.innerText = input.value
        input.value = ""
    
        let edit = document.createElement('button')
        edit.className='edit'
        edit.textContent = 'Edit'
    
    
        let del = document.createElement('button')
        del.className='del'
        del.textContent = 'X'
    
    
        div1.appendChild(list1)
        list1.appendChild(list2)
        list2.append(span,edit,del)
        list1.appendChild(clear)
    
    
        del.addEventListener("click",delete1)
        function delete1(){
            del.parentElement.remove();
        }
    
    
        clear.addEventListener("click",allClear)
        function allClear(){
            list2.parentElement.remove();
        }
    
    
        edit.addEventListener("click",edt1)
        function edt1(){
        value = span;
        input.value = value.innerHTML;
        
    
        }
    }
    else{
        value.innerHTML = input.value;
        input.value="";
        value=0;
    }

}
