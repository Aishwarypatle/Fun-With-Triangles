const inputs = document.querySelectorAll(".input");
const submitButton = document.querySelector(".submit");
const outputMsg = document.querySelector(".output");

function areaofT(base,height){
    const area =(base * height)/2;
    return area;
}


function calculate(){
    if (inputs[0].value > 0 && inputs[1].value > 0 ){
        const area = areaofT(Number(inputs[0].value),Number(inputs[1].value));
        outputMsg.innerText = "Area of Triangle is "+area;
    }else{
        outputMsg.innerText = "Enter valid Numbers";
    }
}

submitButton.addEventListener("click",calculate);