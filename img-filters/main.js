window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');  // $('img')[0]
            img.src = URL.createObjectURL(this.files[0]); // set src to file url
            img.style.filter = "none";
            img.onload = imageIsLoaded; // optional onload event listener
        }
    });
  });
  
 
  function noFilter() {
      document.getElementById("myIMG").style.filter = "none";
  }

  function turnGray() {
      document.getElementById("myIMG").style.filter = "grayscale(100%)";
  }

  function turnSepia() {
      document.getElementById("myIMG").style.filter = "sepia(100%)";
  }

  function turnInvert() {
      document.getElementById("myIMG").style.filter = "invert(100%)";
  }

  function turnBright() {
      document.getElementById("myIMG").style.filter = "brightness(200%)";
  }

  function turnContrast() {
      document.getElementById("myIMG").style.filter = "contrast(200%)";
  }

  function turnBlur() {
      document.getElementById("myIMG").style.filter = "blur(2px)";
  }

  function turnHue1() {
      document.getElementById("myIMG").style.filter = "hue-rotate(20deg)";
  }

  function turnHue2() {
    document.getElementById("myIMG").style.filter = "hue-rotate(60deg)";
}

function turnHue3() {
    document.getElementById("myIMG").style.filter = "hue-rotate(100deg)";
}

function turnHue4() {
    document.getElementById("myIMG").style.filter = "hue-rotate(130deg)";
}

function turnHue5() {
    document.getElementById("myIMG").style.filter = "hue-rotate(170deg)";
}

function turnSat1() {
    document.getElementById("myIMG").style.filter = "saturate(5)";
}

function turnSat2() {
    document.getElementById("myIMG").style.filter = "saturate(15)";
}

function turnSat3() {
    document.getElementById("myIMG").style.filter = "saturate(30)";
}

function turnSat4() {
    document.getElementById("myIMG").style.filter = "saturate(50)";
}

function turnSat5() {
    document.getElementById("myIMG").style.filter = "saturate(80)";
}