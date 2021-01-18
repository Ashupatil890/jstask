function callback1(query, callback){
  setTimeout(function(){
    var response = query + "full!";
    callback(response);
  },5000);
}

function getResults(results){
  console.log("Response from the callback: " + results);
}

callback1("The glass is half ", getResults);