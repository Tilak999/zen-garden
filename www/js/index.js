// Global variables

// used to keep color pallete
var base_color = {  background: "#E2D67B" , circle: "#FDF9C4"};
var success_color = {  background: "#b6e27b" , circle: "#fff682"};
var fail_color = {  background: "#FF5722" , circle: "#ffbaa5"};

// used to store time for stopwatch
var finalTime = { min : 20, sec:0};

// used by setInterval to store id, so that it can be cleared later.
var timer = null;

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {      }
};

app.initialize();

// initial setup of roundSlider UI

$("#slider").roundSlider({
    width: 8,
    sliderType: "min-range",
    handleShape: "round",
    handleSize: "+25",
    step: 1,
    max : 60,
    value: "20",
    radius: 140
});

// setting callback hooks for roundSlider

$("#slider").roundSlider({
    drag: "setTime",
    change: "setTime"
});


// call back function for hooks of roundSlider 
function setTime(e)
{
    val = e.value;
    finalTime.min = val;

    $('.time h1').text(val+":00")
}


var track = {

    initState: function(){

        $(".time h1").text("20:00");

        clearInterval(timer);

        $("#slider").roundSlider({
            readOnly : false,
            step : 10
        });
        
    },

    // initialization of timer by clicking start
    start : function(){

        $("#startBtn").hide();
        $("#stopBtn").fadeIn();

        $("#slider").roundSlider({
            readOnly : true,
            step : 1
        });
        
        timer = setInterval(function(){

            if(finalTime.sec > 0)
            {
                finalTime.sec = finalTime.sec - 1;

                if(finalTime.sec > 9)
                {
                    $('.time h1').text(finalTime.min+":"+finalTime.sec);
                }
                else
                {
                    $('.time h1').text(finalTime.min+":0"+finalTime.sec)
                } 
            }
            else
            {
                if(finalTime.min > 0)
                {
                    finalTime.min = finalTime.min - 1;
                    finalTime.sec = 59;

                    $('.time h1').text(finalTime.min+":"+finalTime.sec)
                    $("#slider").roundSlider('setValue',finalTime.min);
                }
                else
                {
                    clearInterval(timer);
                    $("#slider").roundSlider('setValue',60);

                    $("#stopBtn").hide();

                    $("#slider").roundSlider({
                        readOnly : false,
                        step: 10
                    });
                }
            }

        }, 1000);

    },

    stop : function(){

        

    }

}

$("#startBtn").click(track.start);
$("#stopBtn").click(track.stop);