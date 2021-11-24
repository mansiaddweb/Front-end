let inputfield = document.getElementById("inputfield");
let btn = document.getElementById("add");
let box = document.getElementById("box");
let bt = document.getElementById("bt");
btn.addEventListener("click", function () {
    let para = document.createElement('p');
    let plus = document.createElement('button');
    let del = document.createElement('button');
    para.innerHTML = inputfield.value;
    plus.innerText= "Edit";
    del.innerHTML = "Delete";
    box.appendChild(para);
    bt.appendChild(plus);
    bt.appendChild(del);
    inputfield.value=" ";
    // para.addEventListener("click",function(){
    //     para.style.textDecoration="line-through";
    // })
    del.addEventListener("click",function(){
        box.removeChild(para);
        bt.removeChild(plus);
        bt.removeChild(del);
        
    })
    plus.addEventListener("click",function(){
        let old = para.innerText;
        console.log(old);
        // inputfield.value= old;
        let inc = document.createElement('input');
        let up = document.createElement('button');
        inc.value = old;
        up.innerText = "update";
        box.appendChild(inc);
        bt.appendChild(up);
        
        up.addEventListener("click",function(){
        para.innerText =inc.value;
        inc.value=" ";
        box.removeChild(inc);
        bt.removeChild(up);
        
        
    })
    })

})