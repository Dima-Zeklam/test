'use strict';

function drawstars(){
    let loopNum = 5;
    let star = '*';
    let result='';
 
    while(loopNum){
        
for(let i = loopNum;i>1;i--){
    result += ' ';}
    for(let y = 0;y<6-loopNum;y++)
result+=star;


console.log(result);
        loopNum--;
        result = '';
    }
}
drawstars();