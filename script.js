let plus=document.getElementById('plus');
let zero=document.getElementById('zero');
let minus=document.getElementById('minus');
let count_dis=document.getElementById('count-display');
let reset=document.getElementById('reset');

let person_count=0;
let tipAmount=0;
let bill=0;




let tipbtns=document.querySelectorAll('.tip-btn');

tipbtns.forEach(element => {
    element.addEventListener("click", () => {
        // console.log(element)
        tipAmount = element.value
        console.log(tipAmount)
        tipbtns.forEach(nav => {
            nav.classList.remove("active");
        })
        element.classList.add("active")
    });
})

function incr(){
    person_count++;
    count_dis.value=person_count;
}
function decr(){
    person_count--;
    if(person_count>-1){
    count_dis.value=person_count;
    }else{
        person_count=0;
    }
}
function setzero(){
    person_count=0;
    count_dis.value=person_count;
}

function calculate(){

    billInp=document.getElementById('bill-input');
    bill=billInp.value;

    if (reset.innerHTML == "Calculate" && (count_dis.value > 0)) {
  
           
            let tip = Math.floor((tipAmount* bill) / person_count)
            console.log(tip,person_count,bill)
            document.querySelector("#tip-person").innerHTML = "Rs. " + tip + ".00"
            let totalAmount = Math.floor(bill / person_count)
            document.querySelector("#amount-person").innerHTML = "Rs." + Math.floor((tipAmount  * bill) + totalAmount) + ".00"
            reset.innerHTML = "Reset"
        } else if (reset.innerHTML == "Reset") {
            let tip = 0
            tipAmount = 0
            let totalAmount = 0
            document.querySelector("#tip-person").innerHTML = "Rs." + tip + ".00"
            document.querySelector("#amount-person").innerHTML = "Rs. " + totalAmount + ".00"
            reset.innerHTML = "Calculate";
            count_dis.value = "";
            billInp.value= "";
            

            tipbtns.forEach(nav => {
                nav.classList.remove("active");
            })
            
        }
    } 



// reset.onclick=calculate;
plus.onclick=incr;
minus.onclick=decr;
zero.onclick=setzero;
reset.onclick=calculate;