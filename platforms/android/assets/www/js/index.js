
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

        $('.app').text("okk");

        $.ajax( "http://google.com" )
            .done(function(data) {
                alert( "success" );
                $('.app').html(data);
            })
            .fail(function() {
                alert( "error" );
            })
            .always(function() {
                alert( "complete" );
            });
                    
    }
};

app.initialize();

$('.app').text("okk");