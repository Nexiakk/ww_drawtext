$(document).ready(function(){
    $('#help').fadeOut(0)
    let showing = false
    window.addEventListener('message', function(event){
        var eventData = event.data;
        if (eventData.type == 'HELP') {
            if (eventData.action == 'SHOW') {
                if (showing == true) {
                    $('#text').html(eventData.msg)
                } else {
                    showing = true
                    $('#text').html(eventData.msg)
                    $('#help').fadeIn(200)
                }
            } else if (eventData.action == 'HIDE') {
                showing = false
                $('#help').fadeOut(200)
                setTimeout(function() {
                    $('#text').html("")
                }, 200)
            }
        }
    });
});