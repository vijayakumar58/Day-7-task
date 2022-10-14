//Solving problems using array functions on the rest countries' data.
//a.Get all the countries from the Asia continent /region using the Filter function.

let request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    let res=JSON.parse(request.response);
    let res1=res.filter((ele)=>ele.region==="Asia");
    let res2=res1.map((ele)=>ele.name);
       console.log(res2);
    
}

//b.Get all the countries with a population of less than 2 lakhs using Filter function

let request1=new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v2/all");
request1.send();
request1.onload=function(){
    let rc=JSON.parse(request1.response);
    let pop=rc.filter((ele)=>ele.population<200000);
    let popn=pop.map((ele)=>ele.name);
       console.log(popn);
    
}

//c.Print the following details name, capital, flag using forEach function

let request2=new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v2/all");
request2.send();
 var temp=[].join("");
request2.onload=function(){
    let resc=JSON.parse(request2.response);
        for(var i=0;i<resc.length;i++){
    console.log("name : "+resc[i].name,", capital : "+resc[i].capital,", flag : "+resc[i].flag);
        }
        
       }
       temp.forEach(details)
             function details(item) {
                  console.log(item);
             }