let first = document.querySelector("#first");
let second = document.querySelector("#second");
let third = document.querySelector("#third");
let output = document.querySelector(".output");
let btn = document.querySelector(".submit");

function check ()
{
    let sum = first.value + second.value + third.value;
    let traingle = 180;

    if(sum==traingle)
    {
        output.innerText = "This is Traingle";
        console.log("aishary")
    }
    else
    {
        output.innerText = "This is not Traingle";
    }
}

btn.addEventListener('click',check);