let currentDisplay='';
    document.querySelector('#display').value=currentDisplay;
// numeric button code 
    

    
let num_button=document.querySelectorAll(".button");
num_button[0].addEventListener("click",()=>{
  currentDisplay=currentDisplay+1;
  document.querySelector("#display").value=currentDisplay;
})
num_button[1].addEventListener("click",()=>{
  currentDisplay=currentDisplay+2;
  document.querySelector("#display").value=currentDisplay;
})
num_button[2].addEventListener("click",(event)=>{
  currentDisplay=currentDisplay+3;
  document.querySelector("#display").value=currentDisplay;
})
num_button[3].addEventListener("click",()=>{
  currentDisplay=currentDisplay+4;
  document.querySelector("#display").value=currentDisplay;
})
num_button[4].addEventListener("click",()=>{
  currentDisplay=currentDisplay+5;
  document.querySelector("#display").value=currentDisplay;
})
num_button[5].addEventListener("click",()=>{
  currentDisplay=currentDisplay+6;
  document.querySelector("#display").value=currentDisplay;
})
num_button[6].addEventListener("click",()=>{
  currentDisplay=currentDisplay+7;
  document.querySelector("#display").value=currentDisplay;
})
num_button[7].addEventListener("click",()=>{
  currentDisplay=currentDisplay+8;
  document.querySelector("#display").value=currentDisplay;
})
num_button[8].addEventListener("click",()=>{
  currentDisplay=currentDisplay+9;
  document.querySelector("#display").value=currentDisplay;
})
num_button[9].addEventListener("click",()=>{
  currentDisplay=currentDisplay+0;
  document.querySelector("#display").value=currentDisplay;
})
    
    //calculation button code
    
      let cal_button=document.querySelectorAll(".button1");
      cal_button[0].addEventListener("click",()=>{
        currentDisplay='';
        document.querySelector("#display").value=currentDisplay;
      })

      cal_button[1].addEventListener("click",()=>{
        currentDisplay=currentDisplay+'+';
        document.querySelector("#display").value=currentDisplay;
      })

      cal_button[2].addEventListener("click",()=>{
        currentDisplay=currentDisplay+'-';
        document.querySelector("#display").value=currentDisplay;
      })

      cal_button[3].addEventListener("click",()=>{
        currentDisplay=currentDisplay+'*';
        document.querySelector("#display").value=currentDisplay;
      })

      cal_button[4].addEventListener("click",()=>{
        currentDisplay=currentDisplay+'/';
        document.querySelector("#display").value=currentDisplay;
      })

      cal_button[5].addEventListener("click",()=>{

        let result=eval(currentDisplay);
       currentDisplay=result;
       document.querySelector('#display').value=currentDisplay;
      })

      cal_button[6].addEventListener("click",()=>{
        currentDisplay=currentDisplay+'.';
        document.querySelector("#display").value=currentDisplay;
      })
    