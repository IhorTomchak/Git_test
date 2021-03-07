$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    $(".zoom").hover(function(){

        $(this).addClass('transition');
    }, function(){

        $(this).removeClass('transition');
    });
});

function switchTheme() {
            var check = document
               .getElementById('theme_css')
               .classList[0] === 'style1';
            var element = document.getElementById('theme_css');
            if (check) {
               element.href = 'less.style2.css';
               element.classList.remove('style1')
               element.classList.add('style2');
            } else {
               element.href = 'less.style1.css';
               element.classList.remove('style2')
               element.classList.add('style1');
            }

         }

