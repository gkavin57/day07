//Get all the countries from Asia continent /region using Filter function
var request=new XMLHttpRequest
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    
    var result=res.filter((element)=>{
        if(element.region==='Asia'){
            return element.name;
        }
    })
    console.log(result) 
 
} 
     
     
//Get all the countries with population of less than 2 lacs using Filter function
var request=new XMLHttpRequest
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    var pop=res.filter((element)=>{
        return element.population<200000;
    })
    console.log(pop); 
} 
 
 
    
//Print the following details name, capital, flag using forEach function.

var request=new XMLHttpRequest
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    var ans=JSON.parse(this.response);
    ans.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
      }) 
    } 
 
 
 

   
//Print the total population of countries using reduce function 

var request=new XMLHttpRequest
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    var population=res.reduce((acc,cv)=>{
        return acc+cv.population;
    },0)
    console.log(population) 
}
    
 
 //Print the country which use US Dollars as currency.  
 var request=new XMLHttpRequest
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    
    var result=res.filter((element)=>{
        if(element.currency==='US Dollars'){
            return element.name;
        }
    })
    console.log(result) 
 
} 
     
  
