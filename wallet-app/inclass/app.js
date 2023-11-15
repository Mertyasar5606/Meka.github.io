console.log("Hello My World");

// & selector

const eklebtn = document.getElementById("ekle-btn") 

const gelirinput= document.getElementById("gelir-input")

//&  variable
let toplamgelir = 0;

// & ekle dormu

eklebtn.addEventListener("click",(i)=>{
    toplamgelir = toplamgelir +Number( gelirinput.value);
    
    console.log(toplamgelir);
    gelirinput.value="";
        i.preventDefault();
       

})