
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    document.querySelector("button")
      .addEventListener("click", function () {
        
        if(firstname=='kanishk')
        {
      $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
     var message += " scored";
    
     message += res.wp;
     message += " in wp";
              
                            
                document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
                          
                          
        if(firstname=='prakhar')
        {
      $ajaxUtils
          .sendGetRequest("data/namep.json", 
            function (resp) {
   var  message += " scored";
    
     message += resp.wp;
     message += " in wp";
              
                            
                document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
                          
          
           
           
      });
  }
);

