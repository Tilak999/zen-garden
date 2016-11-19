var colors = ['#D0021B','#009688','#ffc002','#4e4380'];

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

function randomBackground()
{
    var min = Math.ceil(0);
    var max = Math.floor(colors.length);
    var id = Math.floor(Math.random() * (max - min)) + min;

    $('body').css('background',colors[id]);
    $('body').css('color',colors[id]);

    return colors[id];
}

$(window).hashchange(onHashchange);
$current = '#home';
function onHashchange()
{
    var hash = location.hash;
    
    randomBackground();
    window.scrollTo(0,0);
    
    if(hash=="")
    {
        $($current).hide();
        $('#home').fadeIn();
        $current = '#home';
        console.log($current);
    }
    else
    {
        $($current).hide();
        $(hash).fadeIn();
        $current = hash;
        console.log(hash);
    }
}

$('#home .btn-lg').click(function(){
    
    $topic = $(this).text().toLowerCase();
    location.hash = "question";
    console.log($topic);
});