console.log('extension is working');



chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendresponse) {
    console.log(message.txt);

    WebUrl = document.URL;
    ////////////////Javascript function to track when a user uses a button and clicks on the mouse
    $(document).click(function(e) {
        if(e.ctrlKey) {
          console.log("Ctrl+Click");
          alert("Object Selected");
      
          ///SELECTING OBJECTS AND DISTINGUISHING THEM
          const JQueryDivs = $("div")
          JQueryDivs.css("border", "2px solid orange")               
      
        } else if(e.altKey) {
          console.log("Alt+Click");
          alert("Object Selected");
          ///SELECTING OBJECTS AND DISTINGUISHING THEM
          const JQueryDivs = $("h1")
          JQueryDivs.css("border", "2px solid blue")    
      
      
        } else if(e.shiftKey) {
          console.log("Shift+Click");
          alert("Object Selected");
          ///SELECTING OBJECTS AND DISTINGUISHING THEM
          const JQueryDivs = $("p")
          JQueryDivs.css("border", "2px solid red")    
      
      }
      });   
    
}