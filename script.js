
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
   var data= request.response
    console.log(data);
    var result = JSON.parse(data);
    console.log(result[0].name.common);
    console.log(result[249].area);
    for(var i =0; i<result.length;i++){
        console.log(result[i].area);
    }
    
    
    }



