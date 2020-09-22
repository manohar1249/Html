let container = create('div','container','con');
let row1 = create('div','row','names');
let rcol1 = create('div','col-md-6 col-sm-12','rcol1');
let fname = createButton('input','text','firstname','text','fname');
let name1 = "First Name";
let rcol2 = create('div','col-md-6 col-sm-12','rcol2');
let lname = createButton('input','text','lastname','text','lname');
let name2 = "Last Name";

rcol1.append(name1,fname);
rcol2.append(name2,lname);
row1.append(rcol1,rcol2);

let row2 = create('div','row','address');
let r2col1 = create('div','col-md-6 col-sm-12 col-12','r2col1');
let address = createAddress('textarea','addr','4','15');
let addr = "Address";

let r2col2 = create('div','col-md-6 col-sm-12 col-12','r2col2');
let pin = createButton('input','text','pincode','text','pin');
let pincode = "Pincode";
let br1 = document.createElement('br');
let states = createButton('input','text','State','text','states');
let state = "State";
let br2 = document.createElement('br');
let coun = createButton('input','text','Country Name','text','coun');
let country = "Country";

r2col1.append(addr,address);
r2col2.append(pincode,pin,br1,state,states,br2,country,coun);
row2.append(r2col1,r2col2);


let row3 = create('div','row','check');
let r3col1 = create('div','col-md-6','r3col1');
let h3 = create('h3','head','h3');
h3.append("Select min of 2 choces")
let br3 = document.createElement('br');
let br4 = document.createElement('br');
let chick = createCheck('input','checkbox','chick','chicken');
let chicken = "chicken";
let mut = createCheck('input','checkbox','mut','mutton');
let mutton = ",mutton";
let fish = createCheck('input','checkbox','fish','fish');
let sea = ",Fish";
let pan = createCheck('input','checkbox','pan','panner');
let paneer = "paneer";
let veg = createCheck('input','checkbox','veg','veg curry');
let vegan = ",vegan";

let r3col2 = create('div','col-md-6','r3col2');
let h4 = create('h4','head','h4');
h4.append("Submit Form For Validation");
var btn = document.createElement('input');
btn.setAttribute('type','submit');
btn.setAttribute('id','click');
btn.setAttribute('value','Click Me')

r3col1.append(h3,chicken,chick,mutton,mut,br3,sea,fish,br4,paneer,pan,vegan,veg);
r3col2.append(h4,btn);
row3.append(r3col1,r3col2);

container.append(row1,row2,row3);
document.body.append(container);





let butt = document.getElementById('click');
butt.addEventListener('click',myfun);
let table = createTable('table','tab',1);
    let tr1 = createTablerow('tr');
    let th1 = createTablerow('th');
    let th2 = createTablerow('th');
    let th3 = createTablerow('th');
    let th4 = createTablerow('th');
    let th5 = createTablerow('th');
    let th6 = createTablerow('th');
    let th7 = createTablerow('th');
    
    th1.append('first name');
    th2.append('second name');
    th3.append('Address');
    th4.append('Food');
    th5.append('state');
    th6.append('country');
    th7.append('Pincode');
    tr1.append(th1,th2,th3,th4,th5,th6,th7);
    table.append(tr1);

function myfun(){
    let flag = 0;
    let foo =[];
    let ch = [];
    let s = "";
  ch[0] = document.getElementById('chick').checked;
  ch[1] = document.getElementById('mut').checked;
  ch[2] = document.getElementById('fish').checked;
  ch[3] = document.getElementById('pan').checked;
  ch[4] = document.getElementById('veg').checked;
  foo[0] = document.getElementById('chick').value;
  foo[1] = document.getElementById('mut').value;
  foo[2] = document.getElementById('fish').value;
  foo[3] = document.getElementById('pan').value;
  foo[4] = document.getElementById('veg').value;
  console.log(ch,foo);
  let val = ch.filter((ch)=>{
      
      if(ch==true){
          s=s+foo[flag];
          flag++;
      }
      else{
          flag++;
      }
      return ch;
  });
  if(val.length<2){
      document.getElementById('h3').innerHTML='Please Select Minimum Of Two Choices';
  }
  else{

    
    let tr2 = createTablerow('tr');
    let rth1 = createTablerow('th');
    let rth2 = createTablerow('th');
    let rth3 = createTablerow('th');
    let rth4 = createTablerow('th');
    let rth5 = createTablerow('th');
    let rth6 = createTablerow('th');
    let rth7 = createTablerow('th');

    rth1.append(document.getElementById('fname').value);
    rth2.append(document.getElementById('lname').value);
    rth3.append(document.getElementById('addr').value);
    rth4.append(s);
    rth5.append(document.getElementById('states').value);
    rth6.append(document.getElementById('coun').value);
    rth7.append(document.getElementById('pin').value);
    tr2.append(rth1,rth2,rth3,rth4,rth5,rth6,rth7);


    table.append(tr2);
    container.append(table);
    document.body.append(container);
  }

}  













function create(element, classname,id) {
    var t = document.createElement(element);
    if (classname)
        t.setAttribute('class', classname);
        t.setAttribute('id',id);

    return t;
}

function createButton(ele,classname,value,type,id){
    var a = document.createElement(ele);
    a.setAttribute('class',classname);
    a.setAttribute('placeholder',value);
    a.setAttribute('type',type);
    a.setAttribute('id',id);
      return a;
}


function createAddress(ele,id,row,col){
    var a = document.createElement(ele);
   
    a.setAttribute('row',row);
    a.setAttribute('col',col);
    a.setAttribute('id',id);
      return a;
}
function createCheck(ele,type,id,value){
    var a = document.createElement(ele);
    a.setAttribute('id',id);
    a.setAttribute('type',type);
    a.setAttribute('value',value);
    return a;
}
function createTable(ele,id,border){
    var a = document.createElement(ele);
    a.setAttribute('id',id);
    a.setAttribute('border',border);
    
    return a;
}
function createTablerow(ele){
    var a = document.createElement(ele);
    return a;

}
