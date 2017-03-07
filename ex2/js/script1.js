var cnt=0;
// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    function sayHello (event) {
      this.textContent = "Said it!";
      var name =
       document.getElementById("name").value;
       var message = "<h2>Hello " + name + "!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;

      if (name === "student") {
        var title = 
          document
            .querySelector("#title")
            .textContent;
        if(cnt==0)
        {
        title += " & Lovin' it!";
        cnt++;
        }
        document
            .querySelector("h1")
            .textContent = title;
         }
    else{
    cnt=0;
      var title ="Let's Chat"
       document
            .querySelector("h1")
            .textContent = title;
      
    }
    }

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHello);

  }
);



// document.querySelector("button")
//   .onclick = sayHello;
