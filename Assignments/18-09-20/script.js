let num = [];
let opr = [];
let k=0;
let l=0;
let str=0;
let c = create('div','container');
let div = create('div','parent');

let tarea = create('textarea','tarea');
tarea.setAttribute('rows','4');
tarea.setAttribute('cols','17');
tarea.setAttribute('id','tar')
div.append(tarea);
let br = document.createElement('br');
div.append(br);
let num1 = createButton('input','num1',1,'submit');
let num2 = createButton('input','num2',2,'submit');
let num3 = createButton('input','num3',3,'submit');
let opr1 = createButton('input','opr1','*','submit');
let div1 = create('div','parent1');

let num4 = createButton('input','num4',4,'submit');
let num5 = createButton('input','num5',5,'submit');
let num6 = createButton('input','num6',6,'submit');
let num7 = createButton('input','num7',7,'submit');

let div2 = create('div','parent2');
let num8 = createButton('input','num8',8,'submit');
let num9 = createButton('input','num9',9,'submit');
let num0 = createButton('input','num0',0,'submit');
let opr2 = createButton('input','opr2','/','submit');

let div3 = create('div','parent3');
let opr3 = createButton('input','opr3','+','submit');
let opr4 = createButton('input','opr4','-','submit');
let opr5 = createButton('input','opr5','=','submit');


div.append(num1,num2,num3,opr1)
div1.append(num4,num5,num6,num7);
div2.append(num8,num9,num0,opr2);
div3.append(opr3,opr4,opr5);
c.append(div,div1,div2,div3);
document.body.append(c);

let txt = document.getElementById('tar');
let v1 = document.getElementById('num1');
let v2 = document.getElementById('num2');
let v3 = document.getElementById('num3');
let v4 = document.getElementById('num4');
let v5 = document.getElementById('num5');
let v6 = document.getElementById('num6');
let v7 = document.getElementById('num7');
let v8 = document.getElementById('num8');
let v9 = document.getElementById('num9');
let v0 = document.getElementById('num0');

let o1 = document.getElementById('opr1');
let o2 = document.getElementById('opr2');
let o3 = document.getElementById('opr3');
let o4 = document.getElementById('opr4');
let o5 = document.getElementById('opr5');


o1.addEventListener('click',function (){
    let b=o1.value;
    let c = txt.value;
     txt.value = c+b;
     if(str==0){
         let e= txt.value;
         let d = e.indexOf("*");
         let f = e.split("*");
         num[k]=parseInt(f[0]);
         k++;
         str=d+1;
         console.log(str);
         let cc = '*';
         let val = cc.charCodeAt(0);
         opr[l] = val;
         l++;
         console.log(val);
     }
     else {
            let e = txt.value;
            let g = e.substring(str);
            let d = g.indexOf("*");
            let f = g.split("*");
            num[k]=parseInt(f[0]);
            
            k++;
            str=str+d+1;
         console.log(str);
         let cc = '*';
         let val = cc.charCodeAt(0);
         opr[l] = val;
         
         l++;
         console.log(val);
     }

});

o2.addEventListener('click',function (){
    let b=o2.value;
    let c = txt.value;
     txt.value = c+b;
     if(str==0){
         let e= txt.value;
         let d = e.indexOf("/");
         let f = e.split("/");
         num[k]=parseInt(f[0]);
         k++;
         str=d+1;
         console.log(str);
         let cc = '/';
         let val = cc.charCodeAt(0);
         opr[l] = val;
         l++;
         console.log(val);
     }
     else {
        let e = txt.value;
        let g = e.substring(str);
        let d = g.indexOf("/");
        let f = g.split("/");
        num[k]=parseInt(f[0]);
        
        k++;
        str=str+d+1;
     console.log(str);
     let cc = '/';
     let val = cc.charCodeAt(0);
     opr[l] = val;
     
     l++;
     console.log(val);
 }

});

o3.addEventListener('click',function (){
    let b=o3.value;
    let c = txt.value;
     txt.value = c+b;
     if(str==0){
         let e= txt.value;
         let d = e.indexOf("+");
         let f = e.split("+");
         num[k]=parseInt(f[0]);
         k++;
         str=d+1;
         console.log(str);
         let cc = '+';
         let val = cc.charCodeAt(0);
         opr[l] = val;
         l++;
         console.log(val);
     }
     else {
        let e = txt.value;
        let g = e.substring(str);
        let d = g.indexOf("+");
        let f = g.split("+");
        num[k]=parseInt(f[0]);
        
        k++;
        str=str+d+1;
     console.log(str);
     let cc = '+';
     let val = cc.charCodeAt(0);
     opr[l] = val;
     
     l++;
     console.log(val);
 }

});

o4.addEventListener('click',function (){
    let b=o4.value;
    let c = txt.value;
     txt.value = c+b;
     if(str==0){
         let e= txt.value;
         let d = e.indexOf("-");
         let f = e.split("-");
         num[k]=parseInt(f[0]);
         k++;
         str=d+1;
         console.log(str);
         let cc = '-';
         let val = cc.charCodeAt(0);
         opr[l] = val;
         l++;
         console.log(val);
     }
     else {
        let e = txt.value;
        let g = e.substring(str);
        let d = g.indexOf("-");
        let f = g.split("-");
        num[k]=parseInt(f[0]);
        
        k++;
        str=str+d+1;
     console.log(str);
     let cc = '-';
     let val = cc.charCodeAt(0);
     opr[l] = val;
     
     l++;
     console.log(val);
 }

});
o5.addEventListener('click',function (){
    let e = txt.value;
    let g = e.substring(str);
    num[k]=parseInt(g);
    console.log(num[k]);
    let s = "";
    for(let i=0;i<num.length-1;i++){
         if(opr[i]==42){
             if(i==0){
            s=(num[i]*num[i+1]);
             }
             else{
                 let d= parseInt(s);
                 s=d*num[i+1];
             }
            
         }
         else if(opr[i]==43){
            if(i==0){
                s=(num[i]+num[i+1]);
                 }
                 else{
                     let d= parseInt(s);
                     s=d+num[i+1];
                 }
                
         }
         else if(opr[i]==45){
            if(i==0){
                s=(num[i]-num[i+1]);
                 }
                 else{
                     let d= parseInt(s);
                     s=d-num[i+1];
                 }
                
         }
         else{
            if(i==0){
                s=(num[i]/num[i+1]);
                 }
                 else{
                     let d= parseInt(s);
                     s=d/num[i+1];
                 }
                
         }
    }
    txt.value=s;
});


 v1.addEventListener('click',function (){
     let b = v1.value;
     let c = txt.value;
     txt.value = c+b;
     
 });
 v2.addEventListener('click',function (){
    let b = v2.value;
    let c = txt.value;
    txt.value = c+b;
    
});
v3.addEventListener('click',function (){
    let b = v3.value;
    let c = txt.value;
    txt.value = c+b;
    
});
v4.addEventListener('click',function (){
    let b = v4.value;
    let c = txt.value;
    txt.value = c+b;
    
});
v5.addEventListener('click',function (){
    let b = v5.value;
    let c = txt.value;
    txt.value = c+b;
    
});
v6.addEventListener('click',function (){
    let b = v6.value;
    let c = txt.value;
    txt.value = c+b;
    
});
v7.addEventListener('click',function (){
    let b = v7.value;
    let c = txt.value;
    txt.value = c+b;
    
});
v8.addEventListener('click',function (){
    let b = v8.value;
    let c = txt.value;
    txt.value = c+b;
    
});
v9.addEventListener('click',function (){
    let b = v9.value;
    let c = txt.value;
    txt.value = c+b;
    
});
v0.addEventListener('click',function (){
    let b = v0.value;
    let c = txt.value;
    txt.value = c+b;
    
});




function create(element, classname) {
    var t = document.createElement(element);
    if (classname)
        t.setAttribute('class', classname);

    return t;
}
function createButton(element,id,value,type){
    var a = document.createElement(element);
    a.setAttribute('id',id);
    a.setAttribute('value',value);
    a.setAttribute('type',type);
      return a;
}
