// const path =require('path');
// console.log(path.join(__dirname,'../src/app.js'))

function b(time){
  return new Promise((resolve,reject)=>{
    setTimeout(resolve(666),time)
  })
}
async function A(){
  const res = await b(2000);
  return res
}
async function fun(){
  console.log("before");
  var res = await A();
  console.log("after",res);
}
fun();