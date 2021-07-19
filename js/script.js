'use strict';
let infoArr =[];
let form = document.getElementById('myform');
let container= document.getElementById('container');
let table = document.createElement('table');
function Data(name,age,image){
    this.name =name;
    this.age = age;
    this.image = image;
    infoArr.push(this);
    SaveToLocalStoarge();
}

function SaveToLocalStoarge(){
 let obj = JSON.stringify(infoArr);
 localStorage.setItem('info',obj);

}
function LoadFromLocalStorage(){
    let strobj =localStorage.getItem('info');
    let normalObj = JSON.parse(strobj);
    if(normalObj !== null){
for(let i=0 ;i<normalObj.length;i++){
    new Data(normalObj[i].name,normalObj[i].age,normalObj[i].image);
     infoArr[i].render();
    }
}
}
let trEl = document.createElement('tr');
let tdEl = document.createElement('td');
function tableHead(){
tdEl.textContent = 'Full Name';
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = 'Age';
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = 'Image';
trEl.appendChild(tdEl);
table.appendChild(trEl);
container.appendChild(table);
}

tableHead();

Data.prototype.render = function(){
    trEl = document.createElement('tr');
    tdEl = document.createElement('td');
tdEl.textContent = this.name;
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
tdEl.textContent = this.age;
trEl.appendChild(tdEl);
tdEl = document.createElement('td');
let image = document.createElement('img');
image.setAttribute('src',this.image);
image.style.width="100px";
tdEl.appendChild(image);
trEl.appendChild(tdEl);
table.appendChild(trEl);
container.appendChild(table);
}

function addData(event){
let fname = event.target.fname.value;
let lname = event.target.lname.value;
let age = event.target.age.value;
let image = event.target.img.value;
let fullName = fname + ' ' + lname;
new Data(fullName,age,image);
Data.render();
}
form.addEventListener('submit',addData);

LoadFromLocalStorage();