
let div = create('div','container')
let div1 = create('div','child');
let h1 = create('h1','heading');
var btn = document.createElement('input');
btn.setAttribute('type','button');
btn.setAttribute('id','click');
btn.setAttribute('value','Click Me');
let a = create('a','url');
a.setAttribute('href',"index1.html");
a.append('DobCalculater');

div1.append(h1,btn,a);
div.append(div1);
document.body.append(div);
document.getElementById('heading').innerHTML='Click The Button to Generate Random Number';

let r = document.getElementById('click');
r.addEventListener('click',myfun);

function myfun(){
    setTimeout(myfun,1000);
    let x = Math.floor(10000000 + Math.random() * 90000000);
    document.getElementById('heading').innerHTML=x;
}

function create(element, id) {
    var t = document.createElement(element);
    if (id)
        t.setAttribute('id',id);

    return t;
}