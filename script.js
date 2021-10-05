function compute(){
   amount = document.getElementById("principal").value;
   rate = document.getElementById('textInput').value;
   years = document.getElementById("years").value; 
   result = (amount*(rate/100))*years;

   document.getElementById("out1").innerHTML = 'If you deposit '+amount;
   document.getElementById("out2").innerHTML ='at an interest rate of '+rate+'%';
   document.getElementById("out3").innerHTML =' You will receive an amount of '+result;
   document.getElementById("out4").innerHTML =' in the year '+ (parseInt(years)+2020)     
}

function updateTextInput(val) {
   document.getElementById('textInput').value=val; 
}
        
