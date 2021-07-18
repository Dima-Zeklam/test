'use strict';
let table2 = document.getElementById('table2');
let storArr = [];
let hours = ['1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7mp', '8pm', '9pm'];
let form = document.getElementById('myform');
let container = document.getElementById('container');
let table = document.createElement('table');
let total = 0;
let megatotal = [];
let lastTotal = 0;
container.appendChild(table);
function Stores(storeLocation, minCus, maxCust, Avg,image,favourit,yesOrno) {
    this.storeLocation = storeLocation;
    this.minCus = minCus;
    this.maxCust = maxCust;
    this.Avg = Avg;
    this.image = image;
    this.favourit = favourit;
    this.yesOrno=yesOrno;
    this. hourlyTotal = [];
    storArr.push(this);
    SaveLocalStorage()
}

Stores.prototype.randomnum = function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCus) + this.minCus);
}

Stores.prototype.getAvg = function () {
    let avgNum;
    total =0 ;
    for (let i = 0; i < hours.length; i++) {
        avgNum = Math.floor(this.randomnum() * this.Avg);
       this.hourlyTotal[i] = avgNum;
        total += this.hourlyTotal[i];
    }
    lastTotal +=total;

}



tableHead();
function SaveLocalStorage() {
    let stringObj = JSON.stringify(storArr);
    localStorage.setItem('store', stringObj);
}

function LodeFromLocalStorage() {
    let obj = localStorage.getItem('store');
    let originalObj = JSON.parse(obj);
    if (originalObj !== null) {
        for (let i = 0; i < originalObj.length; i++) {
            new Stores(originalObj[i].storeLocation, originalObj[i].minCus, originalObj[i].maxCust, originalObj[i].Avg,originalObj[i].image,originalObj[i].favourit,originalObj[i].yesOrno);
        
            storArr[i].render();
        }
    }
}

function getData(event) {
    let fav=[];
    let radio;
    let i=0;
    event.preventDefault();
    let name = event.target.location.value;
    let min = event.target.min.value;
    let max = event.target.max.value;
    let avg = event.target.avg.value;
    let image = event.target.image.value;
    let fav1= event.target.food;
    let fav2= event.target.cars;
    let fav3= event.target.sport;
    
if(fav1.checked){
    fav[i] = fav1.value;
    i++;
}  if(fav2.checked){
    fav[i] = fav2.value;
    i++;
}  if(fav3.checked){
    fav[i] = fav3.value;
    i++;
}
let radio1 = event.target.no;
let radio2 = event.target.yes;
if(radio1.checked){
    radio = radio1.value;
    i++;
}else  if(radio2.checked){
    radio = radio2.value;
}
  let nexObj = new Stores(name, min, max, avg,image,fav,radio);
 
    nexObj.render();
    removefooter();
}

function tableHead() {
    let trEL = document.createElement('tr');
    let th = document.createElement('th');
    th.textContent = 'Location';
    trEL.appendChild(th);

    for (let y = 0; y < hours.length; y++) {
        th = document.createElement('th');
        th.textContent = hours[y];
        trEL.appendChild(th);
    }
    th = document.createElement('th');
    th.textContent = 'Total';
    trEL.appendChild(th);
    table.appendChild(trEL);
    container.appendChild(table);

}

let trfooter = document.createElement('tr');
Stores.prototype.render = function () {
    removefooter();
    let gt = 0;
    this.getAvg();
    let tr = document.createElement('tr');
    let tdEl = document.createElement('td');
    tdEl.textContent = this.storeLocation;
    tr.appendChild(tdEl);
    for (let s = 0; s < hours.length; s++) {
        gt = 0;
        tdEl = document.createElement('td');
        tdEl.textContent = this.hourlyTotal[s];
        tr.appendChild(tdEl);
        for(let x=0;x<storArr.length;x++){
            gt += storArr[x].hourlyTotal[s];
        }
        megatotal[s] = gt;

    }
    
    tdEl = document.createElement('td');
    tdEl.textContent = total;
    tr.appendChild(tdEl);
    table.appendChild(tr);
 
    let tdfooter = document.createElement('td');
    tdfooter.textContent='general total';
    trfooter.appendChild(tdfooter);
    for (let index = 0; index < megatotal.length; index++) {
        tdfooter = document.createElement('td');
    tdfooter.textContent = megatotal[index];
     trfooter.appendChild(tdfooter);
        
    }
    tdfooter = document.createElement('td');
    tdfooter.textContent = lastTotal;
     trfooter.appendChild(tdfooter);
    table.appendChild(trfooter);
    container.appendChild(table);

    let trEl2 = document.createElement('tr');
    let td2 = document.createElement('td');
    let img = document.createElement('img');
    img.setAttribute('src',this.image);
    img.style.width = '100px';
    td2.appendChild(img);
    trEl2.appendChild(td2);
    td2 = document.createElement('td');
    td2.textContent = this.favourit;
    trEl2.appendChild(td2);
    td2 = document.createElement('td');
    td2.textContent = this.yesOrno;
    trEl2.appendChild(td2);
    table2.appendChild(trEl2);
    removefooter();
    SaveLocalStorage();
}
function removefooter(){
    if(table.rows != 1){
        trfooter.remove();
    }else
    console.log('no');
}

form.addEventListener('submit', getData);

LodeFromLocalStorage();
















// let form = document.getElementById('myform');
// let container = document.getElementById('container');
// let table = document.createElement('table');
// container.appendChild(table);
// let count = 0;
// let infoArr = [];
// function userInfo(name, pass, img) {
//     this.name = name;
//     this.pass = pass;
//     this.img = img;
//     this.randnum = 0;
//     infoArr.push(this);

// }

// function createpass() {
//     return Math.floor((Math.random() * 10));

// }

// userInfo.prototype.setpass = function () {
//     let password = createpass() + '$*&';
//     for (let i = 0; i < infoArr.length; i++) {
//         infoArr[i].randnum = password;
//     }

// }

// function SaveToLocalStorage() {
//     let strObj = JSON.stringify(infoArr);
//     localStorage.setItem('info', strObj);

// }
// function LodeFromLocalStorage() {
//     let strObj = localStorage.getItem('info');
//     let obj = JSON.parse(strObj);
//     if (obj !== null) {
//         for (let index = 0; index < obj.length; index++) {
//             new userInfo(obj[index].name,obj[index].pass,obj[index].img);
//           infoArr[index].renderTable();
//         }

//     }

// }


// function getInput(event) {
//     event.preventDefault();
//     let name = event.target.username.value;
//     console.log(name);
//     let password = event.target.pass.value;
//     console.log(password);
//     let image = event.target.img.value;
//     console.log(image);

//    let newomj = new userInfo(name, password, image);
//     newomj.renderTable();
// }


// function TableHead() {
//     let trEl = document.createElement('tr');
//     let head = document.createElement('th');
//     head.textContent = 'User Name';
//     trEl.appendChild(head);
//     head = document.createElement('th');
//     head.textContent = 'Pasword';
//     trEl.appendChild(head);
//     head = document.createElement('th');
//     head.textContent = 'image';
//     trEl.appendChild(head);
//     head = document.createElement('th');
//     head.textContent = 'ID';
//     trEl.appendChild(head);
//     table.appendChild(trEl);

// }
// TableHead();

// userInfo.prototype.renderTable = function() {
//     this.setpass();
//         let tr = document.createElement('tr');
//         let td = document.createElement('td');
//         td.textContent = this.name;
//         tr.appendChild(td);
//         td = document.createElement('td');
//         td.textContent = this.pass;
//         tr.appendChild(td);
//         td = document.createElement('td');
//         let img = document.createElement('img');
//         img.setAttribute('src',this.img);
//         img.setAttribute('width',100);
//         td.appendChild(img);
//         tr.appendChild(td);
//         td = document.createElement('td');
//         td.textContent = this.randnum;
//         tr.appendChild(td);
//         table.appendChild(tr);
//         container.appendChild(table);

//         count++;

//     let div = document.getElementById('total');
//     div.textContent = `the total is : ${count}`;
//     SaveToLocalStorage();
// }


// form.addEventListener('submit', getInput);
// LodeFromLocalStorage();
// console.log(infoArr);

