// 'use strict';
// let carsimg = ['car1.jpg','car2.jpg','car3.jpg','car4.jpg','car5.jpeg','car6.jpg'];
// let container = document.getElementById('container');
// let carList = [];
// function Cars(image){
//    this.carName = image.split('.')[0];
//    this.image = image;
//    this.src = 'images/' + image;
//    this.clicked = 0;
//    this.views = 0;
//    carList.push(this);
//    SaveToLocalStoarge()
// }
// for(let y=0;y<carsimg.length;y++){
//     new Cars(carsimg[y]);
// }
// function getNum(){
//     return Math.floor(Math.random()*carsimg.length);
// }
// function SaveToLocalStoarge(){
//     let obj = JSON.stringify(carList);
//     localStorage.setItem('cars',obj);

// }
// function LoadFromLocalStorage(){
//     let strobj = localStorage.getItem('cars');
//     let normalObj = JSON.parse(strobj);
//     // if(normalObj !== null){
//         // for(let i=0 ; i<normalObj.length;i++){
//         //  new Cars(normalObj[i].image);

//         // //   render();
//         // }
//     // }
// }


// let firstImgIndex = getNum();
// let lastImgIndex = getNum();


// let img1 = document.getElementById('img1');
// let img2 = document.getElementById('img2');
// let render = function(){
//     firstImgIndex = getNum();
//     lastImgIndex = getNum();
//     while(firstImgIndex === lastImgIndex){
//         firstImgIndex = getNum();
//     }
//     img1.setAttribute('src',carList[firstImgIndex].src);
//     img2.setAttribute('src',carList[lastImgIndex].src);
//     img1.style.width = '200px';
//     img2.style.width = '200px';
//    carList[firstImgIndex].views++;
//    carList[lastImgIndex].views++;
//    console.log('first:' + firstImgIndex);
//    console.log('last:' + lastImgIndex);
//     SaveToLocalStoarge();
// }
// render();
// function handl(event){
// if('img1' === event.target.id){
   
//     carList[firstImgIndex].clicked++;
//  }
//  if('img2' === event.target.id)
//  carList[lastImgIndex].clicked++;
// render();
// }
// img1.addEventListener('click',handl);
// img2.addEventListener('click',handl);


// LoadFromLocalStorage();
// // let infoArr =[];
// // let form = document.getElementById('myform');
// // let container= document.getElementById('container');
// // let table = document.createElement('table');
// // function Data(name,age,image){
// //     this.name =name;
// //     this.age = age;
// //     this.image = image;
// //     infoArr.push(this);
// //     SaveToLocalStoarge();
// // }

// // function SaveToLocalStoarge(){
// //  let obj = JSON.stringify(infoArr);
// //  localStorage.setItem('info',obj);

// // }
// // function LoadFromLocalStorage(){
// //     let strobj =localStorage.getItem('info');
// //     let normalObj = JSON.parse(strobj);
// //     if(normalObj !== null){
// // for(let i=0 ;i<normalObj.length;i++){
// //     new Data(normalObj[i].name,normalObj[i].age,normalObj[i].image);
// //      infoArr[i].render();
// //     }
// // }
// // }
// // let trEl = document.createElement('tr');
// // let tdEl = document.createElement('td');
// // function tableHead(){
// // tdEl.textContent = 'Full Name';
// // trEl.appendChild(tdEl);
// // tdEl = document.createElement('td');
// // tdEl.textContent = 'Age';
// // trEl.appendChild(tdEl);
// // tdEl = document.createElement('td');
// // tdEl.textContent = 'Image';
// // trEl.appendChild(tdEl);
// // table.appendChild(trEl);
// // container.appendChild(table);
// // }

// // tableHead();

// // Data.prototype.render = function(){
// //     trEl = document.createElement('tr');
// //     tdEl = document.createElement('td');
// // tdEl.textContent = this.name;
// // trEl.appendChild(tdEl);
// // tdEl = document.createElement('td');
// // tdEl.textContent = this.age;
// // trEl.appendChild(tdEl);
// // tdEl = document.createElement('td');
// // let image = document.createElement('img');
// // image.setAttribute('src',this.image);
// // image.style.width="100px";
// // tdEl.appendChild(image);
// // trEl.appendChild(tdEl);
// // table.appendChild(trEl);
// // container.appendChild(table);
// // }

// // function addData(event){
// // let fname = event.target.fname.value;
// // let lname = event.target.lname.value;
// // let age = event.target.age.value;
// // let image = event.target.img.value;
// // let fullName = fname + ' ' + lname;
// // new Data(fullName,age,image);
// // Data.render();
// // }
// // form.addEventListener('submit',addData);

// // LoadFromLocalStorage();