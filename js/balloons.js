$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });
    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        console.log('change');
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });
    $('#CheckAllBoxes').on('change', function (){
        let colorCheckBoxes = $('.form-check-input');
        $(this).is(':checked')?
            checkAllBoxes(colorCheckBoxes) : unCheckAllBoxes(colorCheckBoxes);
    })

    $('#submit').on('click', function() {
        if ((!document.getElementById('red').checked) &
            (!document.getElementById('green').checked) &
            (!document.getElementById('blue').checked)) {
            $('#toast').toast('show');
        }
    });
});

function checkAllBoxes(boxes) {
    boxes.each(function(i){boxes[i].checked=true});
    for (let i = 1; i < 4; i++) {
        $('#' + boxes[i].id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown');
    }
}

function unCheckAllBoxes(boxes) {
    boxes.each(function (i) {
        boxes[i].checked = false
    })
    for (let i = 1; i < 4; i++) {
        $('#' + boxes[i].id + 'Img').addClass('animate__animated animate__bounceOutUp');

    }
}
const animations = [
    "animate__animated animate__bounce",
    "animate__animated animate__flash",
    "animate__animated animate__pulse",
    "animate__animated animate__rubberBand",
    "animate__animated animate__shakeX",
    "animate__animated animate__shakeY",
    "animate__animated animate__headShake",
    "animate__animated animate__swing",
    "animate__animated animate__tada",
    "animate__animated animate__wobble",
    "animate__animated animate__jello",
    "animate__animated animate__heartBeat"];

const attention = Math.floor(Math.random() * ((animations.length - 1) + 1));
const randomClass = animations[attention];

$('#red').on({
    mouseenter: function(){
        $('#animations').css("color", "red");},
    mouseleave: function(){
        $('#animations').css("color", "gray");
    }
});
$('#green').on({
    mouseenter: function(){
        $('#animations').css("color", "green");},
    mouseleave: function(){
        $('#animations').css("color", "gray");
    }
});

$('#blue').on({
    mouseenter: function(){
        $('#animations').css("color", "blue");},
    mouseleave: function(){
        $('#animations').css("color", "gray");
    }
});

$('#animations').addClass(randomClass);

$(document).keyup(function(e) {
    if (e.key === "Escape") {
        $('#toast').toast('hide');
    }
});