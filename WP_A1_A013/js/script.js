
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    document.querySelector("button")
      .addEventListener("click", function () {
        
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
  if(firstname=='kanishk')
  {
     message += " scored";
    
 message += res.wp;
     message += " in wp";
              
                            
  }
          /* var message = 
                res.firstName + " " + res.lastName
              if (res.likesChineseFood) {
                message += " likes Chinese food";
              }
              else {
                message += " doesn't like Chinese food";
              }
              message += " and uses ";
              message += res.numberOfDisplays + 1;
              message += " displays for coding.";
*/
              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);

