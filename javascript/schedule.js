    // var x = new Date();
    // x.setDate(x.getDate() + ((5 - x.getDay()) % 10 + 7) % 1);

    // // console.log(x);

    // var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // var d = new Date();
    // var n = d.getDay();

    // function Today() {

    //     if (n == 0) {
    //         $('.Sunday').show();
    //         $('.Monday').hide();
    //         $('.Tuesday').hide();
    //         $('.Wednesday').hide();
    //         $('.Thursday').hide();
    //         $('.Friday').hide();
    //         $('.Saturday').hide();

    //     } else if (n == 1) {
    //         $('.Sunday').hide();
    //         $('.Monday').show();
    //         $('.Tuesday').hide();
    //         $('.Wednesday').hide();
    //         $('.Thursday').hide();
    //         $('.Friday').hide();
    //         $('.Saturday').hide();

    //     } else if (n == 2) {
    //         $('.Sunday').hide();
    //         $('.Monday').hide();
    //         $('.Tuesday').show();
    //         $('.Wednesday').hide();
    //         $('.Thursday').hide();
    //         $('.Friday').hide();
    //         $('.Saturday').hide();

    //     } else if (n == 3) {
    //         $('.Sunday').hide();
    //         $('.Monday').hide();
    //         $('.Tuesday').hide();
    //         $('.Wednesday').show();
    //         $('.Thursday').hide();
    //         $('.Friday').hide();
    //         $('.Saturday').hide();

    //     } else if (n == 4) {
    //         $('.Sunday').hide();
    //         $('.Monday').hide();
    //         $('.Tuesday').hide();
    //         $('.Wednesday').hide();
    //         $('.Thursday').show();
    //         $('.Friday').hide();
    //         $('.Saturday').hide();

    //     } else if (n == 5) {
    //         $('.Sunday').hide();
    //         $('.Monday').hide();
    //         $('.Tuesday').hide();
    //         $('.Wednesday').hide();
    //         $('.Thursday').hide();
    //         $('.Friday').show();
    //         $('.Saturday').hide();

    //     } else if (n == 6) {
    //         $('.Sunday').hide();
    //         $('.Monday').hide();
    //         $('.Tuesday').hide();
    //         $('.Wednesday').hide();
    //         $('.Thursday').hide();
    //         $('.Friday').hide();
    //         $('.Saturday').show();

    //     } else {
    //         alert("well something broke...");
    //         $('.Sunday').hide();
    //         $('.Monday').hide();
    //         $('.Tuesday').hide();
    //         $('.Wednesday').hide();
    //         $('.Thursday').hide();
    //         $('.Friday').hide();
    //         $('.Saturday').hide();

    //     }
    // }





    // $(document).ready(function() {


    //     $(".day_selector_button").click(function() {

    //         $(".day_selector_button").prop("disabled", false);


    //         $(this).prop("disabled", true);
    //         console.log("beep");


    //     });

    //     $('#today').text("Server Schedule - " + days[n] + " (today)");
    //     $('#today').show();
    //     $('.Sunday').hide();
    //     $('.Monday').hide();
    //     $('.Tuesday').hide();
    //     $('.Wednesday').hide();
    //     $('.Thursday').hide();
    //     $('.Friday').hide();
    //     $('.Saturday').hide();


    //     Today();




    //     $("#Today").click(function() {

    //         $('#today').text("Server Schedule - " + days[n] + " (today)");
    //         Today();

    //     });

    //     $("#Monday").click(function() {
    //         $('.Sunday').hide();
    //         $('.Monday').show();
    //         $('.Tuesday').hide();
    //         $('.Wednesday').hide();
    //         $('.Thursday').hide();
    //         $('.Friday').hide();
    //         $('.Saturday').hide();
    //         $('#today').text("Server Schedule - " + days[1]);

    //     });

    //     $("#Tuesday").click(function() {
    //         $('.Sunday').hide();
    //         $('.Monday').hide();
    //         $('.Tuesday').show();
    //         $('.Wednesday').hide();
    //         $('.Thursday').hide();
    //         $('.Friday').hide();
    //         $('.Saturday').hide();
    //         $('#today').text("Server Schedule - " + days[2]);

    //     });

    //     $("#Wednesday").click(function() {
    //         $('.Sunday').hide();
    //         $('.Monday').hide();
    //         $('.Tuesday').hide();
    //         $('.Wednesday').show();
    //         $('.Thursday').hide();
    //         $('.Friday').hide();
    //         $('.Saturday').hide();
    //         $('#today').text("Server Schedule - " + days[3]);

    //     });

    //     $("#Thursday").click(function() {
    //         $('.Sunday').hide();
    //         $('.Monday').hide();
    //         $('.Tuesday').hide();
    //         $('.Wednesday').hide();
    //         $('.Thursday').show();
    //         $('.Friday').hide();
    //         $('.Saturday').hide();
    //         $('#today').text("Server Schedule - " + days[4]);

    //     });

    //     $("#Friday").click(function() {
    //         $('.Sunday').hide();
    //         $('.Monday').hide();
    //         $('.Tuesday').hide();
    //         $('.Wednesday').hide();
    //         $('.Thursday').hide();
    //         $('.Friday').show();
    //         $('.Saturday').hide();
    //         $('#today').text("Server Schedule - " + days[5]);

    //     });


    //     $("#Saturday").click(function() {
    //         $('.Sunday').hide();
    //         $('.Monday').hide();
    //         $('.Tuesday').hide();
    //         $('.Wednesday').hide();
    //         $('.Thursday').hide();
    //         $('.Friday').hide();
    //         $('.Saturday').show();
    //         $('#today').text("Server Schedule - " + days[6]);

    //     });
    //     $("#Sunday").click(function() {
    //         $('.Sunday').show();
    //         $('.Monday').hide();
    //         $('.Tuesday').hide();
    //         $('.Wednesday').hide();
    //         $('.Thursday').hide();
    //         $('.Friday').hide();
    //         $('.Saturday').hide();
    //         $('#today').text("Server Schedule - " + days[0]);

    //     });
    // });




    // // Go to line 67 to add new timers

    // function Data(t_hour, t_min, t_sec, dy, id) {

    //     this.t_hour = t_hour;
    //     this.t_sec = t_sec
    //     this.t_min = t_min;
    //     this.dy = dy;
    //     this.id = id;
    //     var curday;
    //     var secTime;
    //     var ticker;

    // }

    // function getSeconds(data) {
    //     var nowDate = new Date();
    //     var countertime = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), data.t_hour, data.t_min, data.t_sec); //20 out of 24 hours = 8pm
    //     var curtime = nowDate.getTime(); //current time
    //     var atime = countertime.getTime(); //countdown time
    //     var diff = parseInt((atime - curtime) / 1000);
    //     if (diff > 0) { data.curday = data.dy - nowDate.getDay() } else { data.curday = data.dy - nowDate.getDay() - 1 } //after countdown time
    //     if (data.curday < 0) { data.curday += 7; } //already after countdown time, switch to next week
    //     if (diff <= 0) { diff += (86400 * 7) }
    //     startTimer(diff, data);
    //     // console.log(curtime);
    // }

    // function startTimer(secs, data) {
    //     var ticker;
    //     data.secTime = parseInt(secs);
    //     data.ticker = setInterval(tick, 1000, data);
    //     data.ticker = ticker;
    //     tick(data); //initial count display
    // }

    // function tick(data) {
    //     var secs = data.secTime;
    //     if (secs > 0) {
    //         data.secTime--;
    //     } else {
    //         clearInterval(data.ticker);
    //         getSeconds(data); //start over
    //     }

    //     var days = Math.floor(secs / 86400);
    //     secs %= 86400;
    //     var hours = Math.floor(secs / 3600);
    //     secs %= 3600;
    //     var mins = Math.floor(secs / 60);
    //     secs %= 60;

    //     document.getElementById(data.id).innerHTML = data.curday + ":" + ((hours < 10) ? "0" : "") + hours + ":" + ((mins < 10) ? "0" : "") + mins + ":" + ((secs < 10) ? "0" : "") + secs;

    // }

    // $(document).ready(function() {

    //     // Just like in the examples below params = (1)target hour (2)minutes (3)seconds (4) day from 0 to 6 (5) <p>id</>

    //     getSeconds(new Data(5, 0, 0, 6, "saturday_05"));
    //     getSeconds(new Data(12, 0, 0, 6, "saturday_12"));
    //     // getSeconds(new Data(11, 0, 0, 6, "saturday_11"));
    //     // getSeconds(new Data(11, 0, 0, 6, "saturday_11x"));
    //     // getSeconds(new Data(11, 0, 0, 6, "saturday_11y"));
    //     // getSeconds(new Data(11, 0, 0, 6, "saturday_11z"));

    //     getSeconds(new Data(18, 0, 0, 6, "saturday_18"));
    //     getSeconds(new Data(19, 0, 0, 6, "saturday_19"));
    //     // getSeconds(new Data(21, 0, 0, 6, "saturday_21"));
    //     getSeconds(new Data(22, 0, 0, 6, "saturday_22"));

    //     getSeconds(new Data(5, 0, 0, 0, "sunday_05"));
    //     getSeconds(new Data(12, 0, 0, 0, "sunday_12"));
    //     // getSeconds(new Data(11, 0, 0, 0, "sunday_11"));
    //     // getSeconds(new Data(11, 0, 0, 0, "sunday_11x"));
    //     // getSeconds(new Data(11, 0, 0, 0, "sunday_11y"));
    //     // getSeconds(new Data(11, 0, 0, 0, "sunday_11z"));
    //     getSeconds(new Data(18, 0, 0, 0, "sunday_18"));
    //     getSeconds(new Data(19, 0, 0, 0, "sunday_19"));
    //     // getSeconds(new Data(21, 0, 0, 0, "sunday_21"));
    //     // getSeconds(new Data(21, 0, 0, 0, "sunday_21x"));
    //     // getSeconds(new Data(21, 0, 0, 0, "sunday_21y"));
    //     // getSeconds(new Data(21, 0, 0, 0, "sunday_21z"));
    //     getSeconds(new Data(22, 0, 0, 0, "sunday_22"));

    //     getSeconds(new Data(5, 0, 0, 1, "monday_05"));
    //     getSeconds(new Data(12, 0, 0, 1, "monday_12x"));
    //     // getSeconds(new Data(18, 0, 0, 1, "monday_21"));
    //     getSeconds(new Data(18, 0, 0, 1, "monday_18"));
    //     getSeconds(new Data(19, 0, 0, 1, "monday_19"));
    //     // getSeconds(new Data(21, 0, 0, 1, "monday_21"));
    //     // getSeconds(new Data(21, 0, 0, 1, "monday_21x"));
    //     getSeconds(new Data(22, 0, 0, 1, "monday_22"));

    //     getSeconds(new Data(5, 0, 0, 2, "tuesday_05"));
    //     getSeconds(new Data(12, 0, 0, 2, "tuesday_12x"));
    //     getSeconds(new Data(18, 0, 0, 2, "tuesday_18"));

    //     getSeconds(new Data(19, 0, 0, 2, "tuesday_19"));
    //     // getSeconds(new Data(21, 0, 0, 2, "tuesday_21"));
    //     // getSeconds(new Data(21, 0, 0, 2, "tuesday_21x"));
    //     getSeconds(new Data(22, 0, 0, 2, "tuesday_22"));

    //     getSeconds(new Data(5, 0, 0, 3, "wednesday_05"));
    //     getSeconds(new Data(12, 0, 0, 3, "wednesday_12"));
    //     getSeconds(new Data(18, 0, 0, 3, "wednesday_18"));

    //     getSeconds(new Data(19, 0, 0, 3, "wednesday_19"));
    //     // getSeconds(new Data(21, 0, 0, 3, "wednesday_21"));
    //     // getSeconds(new Data(21, 0, 0, 3, "wednesday_21x"));
    //     // getSeconds(new Data(21, 0, 0, 3, "wednesday_21y"));
    //     // getSeconds(new Data(21, 0, 0, 3, "wednesday_21z"));
    //     getSeconds(new Data(22, 0, 0, 3, "wednesday_22"));

    //     getSeconds(new Data(5, 0, 0, 4, "thursday_05"));
    //     getSeconds(new Data(12, 0, 0, 4, "thursday_12x"));
    //     getSeconds(new Data(18, 0, 0, 4, "thursday_18"));
    //     getSeconds(new Data(19, 0, 0, 4, "thursday_19"));

    //     getSeconds(new Data(22, 0, 0, 4, "thursday_22"));


    //     getSeconds(new Data(5, 0, 0, 5, "friday_05"));
    //     getSeconds(new Data(12, 0, 0, 5, "friday_12x"));
    //     getSeconds(new Data(18, 0, 0, 5, "friday_18"));

    //     getSeconds(new Data(19, 0, 0, 5, "friday_19"));
    //     getSeconds(new Data(22, 0, 0, 5, "friday_22"));

    //      getSeconds(new Data(16, 0, 0, 5, "timer"));

    // });