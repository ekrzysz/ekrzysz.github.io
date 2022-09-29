let headerNav = (.05 * window.screen.height) + "" + "px";
let absoluteScreenHeight = (4.25 * window.screen.height) + "" + "px";
let faded = 0;
console.log(headerNav);
//document.getElementById("entire-html").style.height = absoluteScreenHeight;
document.getElementById("html-body").style.height = absoluteScreenHeight;
document.getElementById("header-nav").style.minHeight = headerNav;
$(".top-image").fadeOut(0);
$(".bottom-image").fadeOut(0);
//$(".c1").animate({left: '1260px'});
$(document).ready(function () {
    $(window).scroll(function(){
        var ScrollTop = parseInt($(window).scrollTop());
        //console.log(ScrollTop);

        
        if (ScrollTop > 450) {
            $(document).ready(function(){
            $(".top-image").fadeIn(2000);
            //$(".javascript-images").fadeIn(2000);
           // console.log("true");
            
        });
       
        }

        if (ScrollTop > 550) {
            $(document).ready(function(){
            $(".bottom-image").fadeIn(2000);
            //$(".javascript-images").fadeIn(2000);
            console.log("true");
            
        });
       
        }

        if (ScrollTop < 450) {
            $(document).ready(function(){
            $(".top-image").fadeOut(2000);
            //$(".javascript-images").fadeOut(2000);
         
        });
 
        }
        if (ScrollTop < 550) {
            $(document).ready(function(){
            $(".bottom-image").fadeOut(2000);
            //$(".javascript-images").fadeOut(2000);
         
        });
 
        }
        if (ScrollTop > 1350) {
            $(document).ready(function(){
            //$(".t").fadeOut(2000);
            //$(".t").animate({opacity: '1.0', right: '0px'}, 20);
            //$(".t").animate({opacity: '1.0', right: '250px'}, 2000);
            //$(".javascript-images").fadeOut(2000);
            $(".t").animate({left: '1600px'});
         
        });
 
        }

    });
    $("button").click(function(){
        var v = window.screen.width * .8;
        console.log(v);
        //$(".t").animate({opacity: '1.0', left: '250px'}, 2000);
        //$(".t").fadeOut(2000);
        $(".c1").animate({left: '126px'});
      });
    
});
