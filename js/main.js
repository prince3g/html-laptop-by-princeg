
//power on device

function onDevice(){
  setTimeout(function(){
$('.main-screen-btns').addClass('on-device'); 
$('.appl-label').addClass('on-device'); 
$('.t-icons').addClass('on-device');
$('.key').addClass('on-device');
},0);
   setTimeout(function(){
$('.appl-label').removeClass('on-device');
 $('.Main-screen').addClass('on-device'); 
 $('.keyboard').addClass('on-device'); 
},3000);
}

function offDevice(){
  setTimeout(function(){
    $('.bye-loader').css('display', 'flex');
    $('.lock-screen').css('display', 'none');
    $('.home-screen').css('display', 'none');
},0);
   setTimeout(function(){
    $('.main-screen-btns').removeClass('on-device'); 
    $('.bye-loader').css('display', 'none');
$('.appl-label').removeClass('on-device'); 
$('.t-icons').removeClass('on-device');
$('.key').removeClass('on-device');
$('.appl-label').removeClass('on-device');
 $('.Main-screen').removeClass('on-device'); 
 $('.keyboard').removeClass('on-device'); 
},3000);
}

// opening laptop leap

function openLeap(){
  setTimeout(function(){
$('.front').addClass('open-leapDspy');
$('.laptop-leap-content').addClass('open-leapDspy');
},0);
    setTimeout(function(){
$('.main-screen-btns').addClass('open-leapDspy');
},200);
    setTimeout(function(){
$('.laptop-screen').addClass('open-leapDspy');
},500);
}


function closeLeap(){
  setTimeout(function(){
$('.front').removeClass('open-leapDspy');
$('.laptop-leap-content').removeClass('open-leapDspy');
},0);
    setTimeout(function(){
$('.main-screen-btns').removeClass('open-leapDspy');
},200);
  
    setTimeout(function(){
$('.laptop-screen').removeClass('open-leapDspy');
},500);
}



      $(document).ready(function(){
    $('.key-power-btn').click(function(){
      $('.power-option').toggleClass('show-power-option');
    });
  });
           $(document).ready(function(){
    $('.power-option').click(function(){
      $('.power-option').removeClass('show-power-option');
    });
  });


      $(document).ready(function(){
    $('.camearDspy-btn').click(function(){
      $('.camera-display').toggleClass('show-camera-dspy');
    });
  });

   $(document).ready(function(){
    $('.chargingSec-btn').click(function(){
      $('.charging-sec').toggleClass('show-charging-sec');
    });
  });
    $(document).ready(function(){
    $('.charging-sec').click(function(){
      $('.charging-sec').removeClass('show-charging-sec');
    });
  });





    document.addEventListener("DOMContentLoaded", () => {
        var but = document.getElementById("but");
        var video = document.getElementById("vid");
        var mediaDevices = navigator.mediaDevices;
        vid.muted = true;
        but.addEventListener("click", () => {

        // Accessing the user camera and video.
        mediaDevices
            .getUserMedia({
            video: true,
            audio: true,
            })
            .then((stream) => {

            // Changing the source of video to current stream.
            video.srcObject = stream;
            video.addEventListener("loadedmetadata", () => {
                video.play();
            });
            })
            .catch(alert);
        });
    });









  //what makes number to come up when clicked

  function insert(num){
     document.getElementById('passwordInput').value = document.getElementById('passwordInput').value + num;
    }

    function clean(){
      document.getElementById('passwordInput').value  = "";
    }

     function back(){
      var exp = document.getElementById('passwordInput').value
      document.getElementById('passwordInput').value = exp.substring(0,exp.length-1);
    }


    function validateForm1(){
        var z = document.getElementById('passwordInput').value
        if (z == null || z == "555") {
       $('.lock-screen').css('display', 'none');
        $('.welcome-loader').css('display', 'flex');
           setTimeout(function(){
        $('.welcome-loader').css('display', 'none');
        $('.home-screen').css('display', 'block');
        },3000);
    }

    if (z == null || z !== "555") {
        $('.input-pass').css('display', 'none');
        $('.wrong-pass').css('display', 'block');
        document.getElementById('passwordInput').value  = "";
    }
       if (z == null || z == "") {
        $('.input-pass').css('display', 'block');
        $('.wrong-pass').css('display', 'none');
        document.getElementById('passwordInput').value  = "";
    }
    }