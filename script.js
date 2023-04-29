//your JS code here. If required.
 const lineElement = document.getElementById('line');
    let rotation = 0;

    function rotateLine() {
      rotation += 1;
      lineElement.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
      requestAnimationFrame(rotateLine);
    }

    rotateLine();