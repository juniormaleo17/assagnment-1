// IIEF-Immediately Invoked Function Expression
(function(){

function start(){ 
    // declaration of variable 
    let title=document.title;
    let myarray=new Array();
     myarray=[
        "my first string",
        "my second string",
        "my first classe",
        "my secode course",
        "MY favorite name",
    ]
    //let next=document.getElementById("next");
   //next.addEventListener("click :",function(){console.log("you click on About");})
    //personal information
    switch(title){
        case" HOME":
        console.log("3037 LAKE SHORE BLVD WEST");
        console.log("CITY: ETOBICOKE");
        console.log("country: CANADA");
        break;
        case"about":
        console.info("SCHOOL:CENTENNIAL COLLEGE");
    console.info("DEPARTEMENT:SOFTWARE ENGINEERING")
    console.info("ACADEMIC YEAR: First year STUDENT");
    console.info("STUDENT ID:300976968");
    console.info("COURSE :COMP125-S2018");
    break;
        case" contact":
        console.log("MALEO MIKOLA JUNIOR");
    console.log("3064508365")
    console.info("mikolajunior6@gmail.com");
    default:
    console.log("title:"+title);
    
    }
    
   let content=document.getElementsByClassName("content")
    console.log(myarray);
    console.log("my array length:"+myarray.length);
    array.forEach(element => {
        
    });
}

window.onload=start;

})();