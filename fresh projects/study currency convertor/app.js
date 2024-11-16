
const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");

for(let select of dropdowns){
    for(let code in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=code;
        newOption.value=code;
        if(select.name==="from" && code==="USD"){
            newOption.selected="selected";
        }
        else if(select.name==="to" && code==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}
const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
}
btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amountVal=amount.value;
    if(amountVal===""||amountVal<1){
        amountVal=1;
        amount.value="1";
    }
})





