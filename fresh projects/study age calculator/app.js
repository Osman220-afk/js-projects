let userInputDate=document.getElementById("date");
userInputDate.max=new Date().toISOString().split("T")[0];
function calculatAge(){

let birthDate=new Date(userInputDate.value);
let y1,m1,d1;
y1=birthDate.getFullYear();
 m1=birthDate.getMonth()+1;
  d1=birthDate.getDate();

  let today=new Date();

  let y2=today.getFullYear();
  let m2=today.getMonth()+1;
  let d2=today.getDate();
}