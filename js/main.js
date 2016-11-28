window.onload = function(){

  // Timer
  var start = new Date()
  // Start Button
  document.getElementById('start').onclick = function() {

    setTimeout(function() {
      generateFigure();
      start = new Date().getTime()
    }, Math.random() * 1000);
    document.getElementById('start').style.display = "none";
    document.getElementById('stop').style.display = "block";
  }


  // Figure Click
  document.getElementById('figure').onclick = function() {
    doTime()
    clearFigure()
    setTimeout(function() {
      generateFigure();
      start = new Date().getTime()
    }, Math.random() * 1000);
  }

  // Timer function
  function doTime(){
    var end = new Date().getTime()
    var timeTaken = (end - start) / 1000
    document.getElementById('time-taken').innerHTML = timeTaken + "s"
  }


  function clearFigure(){
    document.getElementById('figure').style.width = 0
    document.getElementById('figure').style.height = 0
  }

  function generateFigure(){
    // Sizing constants
    let minWidth = 5
    let maxWidth = 15
    let minHeight = 5
    let maxHeight = 20

    // Positioning
    let maxTop = 80
    let maxLeft = 80

    // Calculating height and width
    var width = Math.random() * maxWidth + minWidth + "%"
    var height = Math.random() * maxHeight + minHeight + "%"
    document.getElementById('figure').style.width = width
    document.getElementById('figure').style.height = height

    // Calculating position

    document.getElementById('figure').style.right = 0
    document.getElementById('figure').style.left = 0
    document.getElementById('figure').style.top = 0
    document.getElementById('figure').style.bottom = 0

    var vertical = Math.random() * 100
    if(vertical > maxTop){
      vertical = maxTop - vertical + "%"
      document.getElementById('figure').style.bottom = vertical
    }
    else{
      vertical = vertical + "%"
      document.getElementById('figure').style.top = vertical
    }

    var horizontal = Math.random() * 100
    if(horizontal > maxLeft){
      horizontal = maxLeft - horizontal + "%"
      document.getElementById('figure').style.right = horizontal

    }
    else{
      horizontal = horizontal + "%"
      document.getElementById('figure').style.left = horizontal
    }

    // Color
    let colorArray = [
      "#d03823",
      "#477417",
      "#52c9a8",
      "#2395a1",
      "#a9e31e",
      "#3ab8e2",
      "#5df486",
      "#c840de",
      "#9d0b0d",
      "#d4b905",
      "#c29803"
    ]
    color = colorArray[Math.floor(Math.random() * (colorArray.length + 1))]
    document.getElementById('figure').style.backgroundColor = color

    // Form
    radius1 = Math.floor(Math.random() * (90 + 1)) + "%"
    radius2 = Math.floor(Math.random() * (90 + 1)) + "%"
    radius3 = Math.floor(Math.random() * (90 + 1)) + "%"
    radius4 = Math.floor(Math.random() * (90 + 1)) + "%"
    radius = radius1 + " " + radius2 + " " + radius3 + " " + radius4
    document.getElementById('figure').style.borderRadius = radius


  }

  // Modal Window
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("stop");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    clearFigure()
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
      document.getElementById('start').style.display = "block";
      document.getElementById('stop').style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById('start').style.display = "block";
        document.getElementById('stop').style.display = "none";
        clearFigure()
      }
  }
};
