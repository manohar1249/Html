let con = create('div','container','parent');
let dob = create('div','row','row1');
let c1 = create('div','col-6','col1');
let h1 = create('h2','msg','heading');
h1.append('Please enter dob in text feald')
let text = createButton('input','txt','Enter Dob in dd/mon(01)/yyyy','text','text');
let h2 = create('h5','msg','heading5');
let text2 = createButton('input','txt','Enter Time in min/hour.','text','text1');
var btn = document.createElement('input');
btn.setAttribute('type','button');
btn.setAttribute('id','click');
btn.setAttribute('value','Click Me')
let br = document.createElement('br');

c1.append(h1,text,h2,text2,br,btn);

let c2 = create('div','col-6','col2');
let days = createButton('input','txt','Total days','text','days');
let months = createButton('input','txt','total Months','text','months');
let years = createButton('input','txt','total years','text','years');
let mins = createButton('input','txt','total minutes','text','min');
let hrs = createButton('input','txt','total hrs','text','hrs');
let ms = createButton('input','txt','total hrs','text','ms');
let br1 = document.createElement('br');
let br2 = document.createElement('br');
let br3 = document.createElement('br');
let br4 = document.createElement('br');
let br5 = document.createElement('br');
c2.append('Total Days :   ',days,br1,'Total Months : ',months,br2,'Total Years :',years,br3,'Total mins :',mins,br4,'Total Hours :',hrs,br5,'Total Millisecounds :',ms);


dob.append(c1,c2);
con.append(dob);
document.body.append(con);

document.getElementById('heading5').innerHTML='Enter Time in min/hour.'


let r = document.getElementById('click');
r.addEventListener('click',calculate);


function calculate(){
    let dob = document.getElementById('text').value;
    let time = document.getElementById('text1').value;
    let db = dob.split("/");

    let ud = parseInt(db[0]);
    let um = parseInt(db[1]);
    let uy = parseInt(db[2]);

    let t = time.split("/");
    let utm = parseInt(t[0]);
    let uth = parseInt(t[1]);
    
    let today = new Date();

    console.log(db,t);
    console.log(ud,um,uy);
    console.log(utm,uth);
    let y = today.getFullYear();
    console.log(today);
    let m = today.getMonth()+1;
   let d = today.getDate();
  
   let mm = today.getMinutes();

   let rd = 0;
   let rm = 0;
   let ry = 0;
   let rmm = 0;
   let rh = 0;
   let rms = 0;
   for(let i=uy+1;i<=y;i++){
          console.log(i);
       if(uy==y){
            rm = rm+(um-1)+(m-1);
            rd = rm*30+(30-ud);
            ry = ry;
            let k = rd*24;
              rh = k-uth;
              let j = rh*60
              rmm = j-utm;
              rms = rmm*60000;
              console.log(rms);
            
       }
       else {
           if(um==m){
               
              rd = rd+365;
              rm = rm+12;
              ry = ry+1;
              let k = rd*24;
              rh = k-uth;
              let j = rh*60
              rmm = j-utm;
           }
           else{

               rd = rd+365;
               rm = rm+12;
               ry=ry+1;
               let k = rd*24;
              rh = k-uth;
              let j = rh*60
              rmm = j-utm;
              rms = rmm*60000;

           }
       }
   }
   document.getElementById('days').value=rd;
   document.getElementById('months').value=rm;
   document.getElementById('years').value=ry;
   document.getElementById('min').value=rmm;
   document.getElementById('hrs').value=rh;
   document.getElementById('ms').value=rms;
    



}

function create(element, classname,id) {
    var t = document.createElement(element);
    if (classname)
        t.setAttribute('class', classname);
        t.setAttribute('id',id);

    return t;
}
function createButton(element,id,value,type,id1){
    var a = document.createElement(element);
    a.setAttribute('class',id);
    a.setAttribute('placeholder',value);
    a.setAttribute('type',type);
    a.setAttribute('id',id1);
      return a;
}

