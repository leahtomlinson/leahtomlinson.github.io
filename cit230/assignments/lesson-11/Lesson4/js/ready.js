$(function () {
   /* console.log($('input[type="text"]').css('background-color'));*/
   /*var toggleStyle = function() {

        var inputFields = $('input[type="text"]');
        if( inputFields.css('background-color') === 'rgb(225, 0, 0)'){
            inputFields.css('background-color', 'rgb(225, 255, 255)');
        } else {
            inputFields.css('background-color', 'rgb(225, 0, 0)');
        }
    }
    $('#ReqAQuoteBtn').click( toggleStyle );*/
/*
    $('.coreValues').prepend("<li><strong>This is brand new !!</strong></li>");
    $("<li><strong>This is also great !!</strong></li>").prependTo(".coreValues");*/

    var nameVal = $('input[name="nameVal"]');

    function FillEmpty(){
        if( nameVal.val() == '' ){
            nameVal.val( 'John Doe');
        }
    }
    $('#ReqAQuoteBtn').click( FillEmpty );
})
