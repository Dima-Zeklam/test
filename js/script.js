'use strict';
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

