              var container = document.getElementsByClassName('box_1')[0];
              var div = document.getElementById('div');
              var Welcome = document.getElementById('Welcome');
              var button = document.getElementById('button');
              var video = document.getElementById('video');
              var videos = document.getElementsByClassName('videos');
              var paragraph = document.getElementById('paragraph');
              var body = document.getElementById('body');
              var sidebar = document.getElementById('sidebar');
              var form = document.getElementById('form');
              var changebackground = document.getElementById('box2');
              var viewvideo = document.getElementsByClassName('viewvideo');
              var previewvideo = document.getElementById('Previewvideo');
              var videocontainer = document.getElementsByClassName('videocontainer')[0];
              var viewtext = document.getElementById('viewtext');


                  <!-- LOADING THE VIDEO -->

                    previewvideo.style = "display: none";
                    viewvideo[0].onplay = function(){
                    let videosource = viewvideo[0].getAttribute('src');
                    viewvideo[0].pause();
                    previewvideo.setAttribute('controls', '');
                    viewvideo[0].removeAttribute('controls');
                    viewvideo[1].setAttribute('controls', '');
                    viewvideo[2].setAttribute('controls', '');
                    viewtext.innerHTML = document.getElementsByClassName('videotext')[0].innerHTML;

                    previewvideo.setAttribute('src', videosource);

                    previewvideo.style = "display: all";

                    viewvideo[0].style = "margin-top: 30px";
                    viewvideo[1].style = "margin-top: 30px";
                    viewvideo[2].style = "margin-top: 30px";
                  /*console.log("WELCOME BACK");*/

                  viewvideo[0].onclick = function(){
                    alert('Video already playing');
                  }
                }

                viewvideo[1].onplay = function(){
                  let videosource = viewvideo[1].getAttribute('src');
                  viewvideo[1].pause();
                  viewvideo[1].removeAttribute('controls');

                  previewvideo.setAttribute('src', videosource);
                  previewvideo.setAttribute('controls', '');
                  viewvideo[0].setAttribute('controls', '');
                  viewvideo[2].setAttribute('controls', '');
                  document.getElementById('footer').setAttribute('class', 'active');
                  viewtext.innerHTML = document.getElementsByClassName('videotext')[1].innerHTML;

                  previewvideo.style = "display: all";
                /*console.log("WELCOME BACK");*/

                viewvideo[1].onclick = function(){
                  alert('Video already playing');
                }

              }

              viewvideo[2].onplay = function(){
                let videosource = viewvideo[2].getAttribute('src');
                viewvideo[2].pause();
                viewvideo[2].removeAttribute('controls');

                previewvideo.setAttribute('src', videosource);
                previewvideo.setAttribute('controls', '');
                viewvideo[0].setAttribute('controls', '');
                viewvideo[1].setAttribute('controls', '');
                viewtext.innerHTML = document.getElementsByClassName('videotext')[2].innerHTML;

                document.getElementById('footer').setAttribute('class', 'active');

                previewvideo.style = "display: all";
              /*console.log("WELCOME BACK");*/

              viewvideo[2].onclick = function(){
                alert('Video already playing');
              }
            }




              function toggleSidebar(){
                sidebar.classList.add('active');
                body.classList.add('active');
              }


              function X(){
                sidebar.classList.remove('active');
                body.classList.remove('active');
              }


              container.onmouseover = function(){
                div.setAttribute('class' , 'hover');
                Welcome.setAttribute('class' , 'hover');
              }


              document.getElementById('button').onclick = function () {
                paragraph.setAttribute('class', 'active');
            }

            document.getElementById('button').ondblclick = function () {
              paragraph.removeAttribute('class', 'active');
              paragraph.style = "display: all";
          }


          function About(){
              sidebar.classList.remove('active');
              body.classList.remove('active');
              document.getElementById('button').textContent = "About";
              video.setAttribute('class', 'video');
              paragraph.style = "display: all";
              form.setAttribute('class', 'form');
              changebackground.setAttribute('class', 'box_2');
              document.getElementById('button').style = "display : all";
          }




          document.getElementById('videos').onclick = function(){
          paragraph.style = "display: none";
          paragraph.removeAttribute('class', 'active');
          body.removeAttribute('class', 'active');
          sidebar.removeAttribute('class', 'active');
          form.setAttribute('class', 'form');
          changebackground.setAttribute('id', 'video');

          document.getElementById('button').style = "display : none";
          video.setAttribute('class', 'active');
        }

        document.getElementById('Contact').onclick = function(){
          alert("You are sending an E-mail to us");
        }

        document.getElementById('Notifications').onclick = function(){

          form.setAttribute('class', 'active');

          paragraph.style = "display: none";

          paragraph.removeAttribute('class', 'active');
          body.removeAttribute('class', 'active');
          sidebar.removeAttribute('class', 'active');
          video.setAttribute('class', 'video');
          document.getElementById('button').style = "display: none";
        }

        function Contact(){
          window.location.href = "mailto:Triumphjo123@gmail.com";
        }



        document.getElementById("Email").value = "";

        function validation()
        {
          var form = document.getElementById("form");
          var email = document.getElementById("Email").value;
          var text = document.getElementById("text");
          var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


          if (email.match(pattern)) {
            form.classList.add("valid");
            form.classList.remove("invalid");
            text.innerHTML = "Your Email Address is Valid.";
            text.style.color = "#00ff00";
          }

          else {
            form.classList.remove("valid");
            form.classList.add("invalid");
            text.innerHTML = "Please Enter a Valid Email Address";
            text.style.color = "#ff0000";
          }

          if (email == "") {
            form.classList.remove("valid");
            form.classList.remove("invalid");
            text.innerHTML = "";
            text.style.color = "#00ff00";
          }

        }
