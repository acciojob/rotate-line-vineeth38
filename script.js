//your JS code here. If required.
 var angle = 0;
      setInterval(function() {
        angle += 2;
        document.getElementById("line").style.transform = "rotate(" + angle + "deg)";
      }, 20);