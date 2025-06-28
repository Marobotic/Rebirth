window.onerror=null;tooltip={attr_name:"tooltip",blank_text:"(Opens in new Window)",newline_entity:"  ",max_width:0,delay:30,t:document.createElement("DIV"),c:null,g:false,m:function(e){if(tooltip.g){oCanvas=document.getElementsByTagName((document.compatMode&&document.compatMode=="CSS1Compat")?"HTML":"BODY")[0];x=window.event?event.clientX+oCanvas.scrollLeft:e.pageX;y=window.event?event.clientY+oCanvas.scrollTop:e.pageY;tooltip.a(x,y);}},d:function(){tooltip.t.setAttribute("id","tooltip");document.body.appendChild(tooltip.t);a=document.all?document.all:document.getElementsByTagName("*");aLength=a.length;for(var i=0;i<aLength;i++){if(!a[i]||!a[i].getAttribute)continue;tooltip_title=a[i].getAttribute("title");if(tooltip_title&&typeof tooltip_title!="string")tooltip_title="";tooltip_alt=a[i].getAttribute("alt");tooltip_blank=a[i].getAttribute("target")&&a[i].getAttribute("target")=="_blank"&&tooltip.blank_text;if(tooltip_title||tooltip_blank){a[i].setAttribute(tooltip.attr_name,tooltip_blank?(tooltip_title?tooltip_title+" "+tooltip.blank_text:tooltip.blank_text):tooltip_title);if(a[i].getAttribute(tooltip.attr_name)){a[i].removeAttribute("title");if(tooltip_alt&&a[i].complete)a[i].removeAttribute("alt");tooltip.l(a[i],"mouseover",tooltip.s);tooltip.l(a[i],"mouseout",tooltip.h);}}else if(tooltip_alt&&a[i].complete){a[i].setAttribute(tooltip.attr_name,tooltip_alt);if(a[i].getAttribute(tooltip.attr_name)){a[i].removeAttribute("alt");tooltip.l(a[i],"mouseover",tooltip.s);tooltip.l(a[i],"mouseout",tooltip.h);}}
if(!a[i].getAttribute(tooltip.attr_name)&&tooltip_blank){}}
document.onmousemove=tooltip.m;window.onscroll=tooltip.h;tooltip.a(-99,-99);},s:function(e){d=window.event?window.event.srcElement:e.target;if(!d.getAttribute(tooltip.attr_name))return;s=d.getAttribute(tooltip.attr_name);if(tooltip.newline_entity){s=s.replace(/\&/g,"&amp;");s=s.replace(/\</g,"&lt;");s=s.replace(/\>/g,"&gt;");s=s.replace(eval("/"+tooltip.newline_entity+"/g"),"<br />");tooltip.t.innerHTML=s;}else{if(tooltip.t.firstChild)tooltip.t.removeChild(tooltip.t.firstChild);tooltip.t.appendChild(document.createTextNode(s));}
tooltip.c=setTimeout("tooltip.t.style.visibility = 'visible';",tooltip.delay);tooltip.g=true;},h:function(e){tooltip.t.style.visibility="hidden";if(!tooltip.newline_entity&&tooltip.t.firstChild)tooltip.t.removeChild(tooltip.t.firstChild);clearTimeout(tooltip.c);tooltip.g=false;tooltip.a(-99,-99);},l:function(o,e,a){if(o.addEventListener)o.addEventListener(e,a,false);else if(o.attachEvent)o.attachEvent("on"+e,a);else return null;},a:function(x,y){oCanvas=document.getElementsByTagName((document.compatMode&&document.compatMode=="CSS1Compat")?"HTML":"BODY")[0];w_width=oCanvas.clientWidth?oCanvas.clientWidth+oCanvas.scrollLeft:window.innerWidth+window.pageXOffset;w_height=window.innerHeight?window.innerHeight+window.pageYOffset:oCanvas.clientHeight+oCanvas.scrollTop;tooltip.t.style.width=((tooltip.max_width)&&(tooltip.t.offsetWidth>tooltip.max_width))?tooltip.max_width+"px":"auto";t_width=tooltip.t.offsetWidth;t_height=tooltip.t.offsetHeight;tooltip.t.style.left=x+8+"px";tooltip.t.style.top=y+8+"px";if(x+t_width>w_width)tooltip.t.style.left=w_width-t_width+"px";if(y+t_height>w_height)tooltip.t.style.top=w_height-t_height+"px";}}
var root=window.addEventListener||window.attachEvent?window:document.addEventListener?document:null;if(root){if(root.addEventListener)root.addEventListener("load",tooltip.d,false);else if(root.attachEvent)root.attachEvent("onload",tooltip.d);}

var base_uri = "http://www.etherealaion.com/";
var base_dir = document.location.hostname;


$(".edit_profile_div").hide();
$(".cancel_button").hide();
// $(".webkit_fix").animate({ marginRight: '0px' }, 500);


$(".show_edit_profile").click(function() {
    $(".edit_profile_div").show();
    $(".view_profile_div").hide();
    $(".show_edit_profile").hide();
    $(".cancel_button").show();
});


$(".cancel_button").click(function() {
    $(".edit_profile_div").hide();
    $(".view_profile_div").show();
    $(".cancel_button").hide();
    $(".show_edit_profile").show();
});

function join() {
    location.href = '/reg.php';
}



$(document).ready(function() {
$(".gm_panel").hide();
// let num =  $(".schedule_card_countdown").html();
// let display = num.toLocaleString('us-US');
// console.log(typeof display, parseInt(display));   // 1,000,000

$(".webkit_fix").animate({ width: '0px' }, 1);
    $(".drag").click(function() {


        var x = document.getElementById("webkit_fix");
        var y = document.getElementById("drag");
        if (x.style.width === "0px") {
            $(".webkit_fix").animate({ width: '364px' }, 200);
            $("#drag").animate({marginRight: "+=364px"}, 200);
            y.style.webkitTransform = 'rotate(' + 180 + 'deg)';
        } else {
            $(".webkit_fix").animate({ width: '0px' }, 200);
            $("#drag").animate({marginRight: "-=364px"}, 200);
            y.style.webkitTransform = 'rotate(' + 360 + 'deg)';
        }






     

    });

    $(".donate_one").hide();
    $(".vote_navigation").hide();
    $(".news_navigation").hide();
    $(".statistics_navigation").hide();
    $(".changelog_navigation").show();

    $(".news_tab").click(function() {

        $(".news_navigation").show();
        $(".statistics_navigation").hide();
        $(".changelog_navigation").hide();
        $(".vote_navigation").hide();
    });
    $(".statistics_tab").click(function() {
        $(".vote_navigation").hide();
        $(".statistics_navigation").show();
        $(".news_navigation").hide();
        $(".changelog_navigation").hide();
    });
    $(".changelog_tab").click(function() {
        $(".vote_navigation").hide();
        $(".changelog_navigation").show();
        $(".news_navigation").hide();
        $(".statistics_navigation").hide();

    });

    $(".vote_tab").click(function() {
        $(".vote_navigation").show();
        $(".changelog_navigation").hide();
        $(".news_navigation").hide();
        $(".statistics_navigation").hide();

    });


    $(".logout").hide();
    $(".login_tests").show();

    $(".papyrus_div").animate({ height: '0px' }, 500);


    $(".news_menu").hide();
    $(".features_menu").hide();
    $(".support_menu").hide();
    $("div.News_drop")
        .mouseover(function() {

            $(".news_menu").show();
        })

    $(".News_drop")
        .mouseout(function() {

            $(".news_menu").hide();
        });


    $("div.Features_drop")
        .mouseover(function() {

            $(".features_menu").show();
        })

    $(".Features_drop")
        .mouseout(function() {

            $(".features_menu").hide();
        });

    $("div.Profile_drop")
        .mouseover(function() {

            $(".profile_menu").show();
        })

    $(".profile_menu").hide();

    $(".Profile_drop")
        .mouseout(function() {

            $(".profile_menu").hide();
        });




    $("div.Support_drop")
        .mouseover(function() {

            $(".support_menu").show();
        })

    $(".Support_drop")
        .mouseout(function() {

            $(".support_menu").hide();
        });

    $(".papyrus_div").hide();
    $(".papyrus_close").hide();
    $(".Username_text").hide();
    $(".Password_text").hide();
    $(".Login_details").hide();
    $("#Account_creation_message").hide();
    $(".big_ass_login_thingy").hide();







    $(".login").click(function() {
        $(".buttons").hide();

        $(".papyrus_div").show();
        $(".papyrus_close").show();
        $(".Login_details").show();
        $(".Username_text").show();
        $(".Password_text").show();


    });

    $(".papyrus_close").click(function() {

        $(".buttons").show();
        $(".papyrus_div").hide();
        $(".papyrus_close").hide();
        $(".Login_details").hide();
        $(".Username_text").hide();
        $(".Password_text").hide();
        $(".wrong_password_error").hide();

    });
    $('.papyrus_test_close').hide();

    $(".login_tests").click(function() {
        $(".papyrus_div").show();
        $('.buttons2').hide();
        $('.papyrus_test_close').show();
        $('.Login_details').show();
        $(".papyrus_div").animate({ height: '400px' }, 500);
      
    });
    $(".papyrus_test_close").click(function() {
        // $(".papyrus_div").hide();
        // $('.buttons2').show();
        // $('.papyrus_test_close').hide();
        // $('.Login_details').hide();
        $(".papyrus_div").animate({ height: '0px' }, 500);
    });


    // $(".donation_text").text('Beer Lootbox');

    // $("#one").click(function() {

    //     $(".donation_text").text('1 Beer Lootbox');
    // });

    // $("#five").click(function() {

    //     $(".donation_text").text('5 Beer Lootbox');
    // });

    // $("#ten").click(function() {

    //     $(".donation_text").text('10 Beer Lootbox');
    // });

    // $("#fifteen").click(function() {
    //     $(".donation_text").text('15 Beer Lootbox');
    // });

    // $("#twenty").click(function() {

    //     $(".donation_text").text('20 Beer Lootbox');
    // });






    $(".login_container").hide();



    // $(".leaderboards_side")
    //     .mouseover(function() {
    //         $('.leaderboard_image').hide();

    //         $('.leaderboard_text').show();

    //     })
    //     .mouseout(function() {
    //         $('.leaderboard_image').show();
    //         $('.leaderboard_text').hide();
    //     });


    // $(".siege_schedule_side")
    //     .mouseover(function() {
    //         $('.schedule_image').hide();

    //         $('.schedule_text').show();
    //     })
    //     .mouseout(function() {
    //         $('.schedule_image').show();
    //         $('.schedule_text').hide();
    //     });



    // $(".about_us_side")
    //     .mouseover(function() {
    //         $('.about_image').hide();

    //         $('.about_text').delay(100).show();
    //     })
    //     .mouseout(function() {
    //         $('.about_image').show();
    //         $('.about_text').hide();
    //     });



    // $(".discord_side")
    //     .mouseover(function() {
    //         $('.discord_image').hide();

    //         $('.about_text').delay(100).show();
    //     })
    //     .mouseout(function() {
    //         $('.discord_image').show();
    //         $('.about_text').hide();
    //     });
    // $(".facebook_side")
    //     .mouseover(function() {
    //         $('.facebook_image').hide();

    //         $('.about_text').delay(100).show();
    //     })
    //     .mouseout(function() {
    //         $('.facebook_image').show();
    //         $('.about_text').hide();
    //     });

});



// function hide_bundles() {
//     document.getElementById("attack_bundle").style.display = "none";
//     document.getElementById("crit_bundle").style.display = "none";
//     document.getElementById("magical_bundle").style.display = "none";
// }
// hide_bundles();

// function attack() {
//     document.getElementById("attack").disabled = true;
//     document.getElementById("crit").disabled = false;
//     document.getElementById("magical").disabled = false;


//     document.getElementById("attack_bundle").style.display = "block";
//     document.getElementById("crit_bundle").style.display = "none";
//     document.getElementById("magical_bundle").style.display = "none";
//     document.getElementById("bundle_text").innerHTML = "//dual attack";

// }

// function crit() {
//     document.getElementById("attack").disabled = false;
//     document.getElementById("crit").disabled = true;
//     document.getElementById("magical").disabled = false;


//     document.getElementById("attack_bundle").style.display = "none";
//     document.getElementById("crit_bundle").style.display = "block";
//     document.getElementById("magical_bundle").style.display = "none";
//     document.getElementById("bundle_text").innerHTML = "//dual crit";

// }


// function magical() {
//     document.getElementById("attack").disabled = false;
//     document.getElementById("crit").disabled = false;
//     document.getElementById("magical").disabled = true;


//     document.getElementById("attack_bundle").style.display = "none";
//     document.getElementById("crit_bundle").style.display = "none";
//     document.getElementById("magical_bundle").style.display = "block";
//     document.getElementById("bundle_text").innerHTML = "//dual magical";
// }