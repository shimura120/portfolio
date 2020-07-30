document.getElementById("content1").style.display = 'none';
document.getElementById("content2").style.display = 'none';
document.getElementById("content3").style.display = 'none';
document.getElementById("content4").style.display = 'none';

function go_top() {
    document.getElementById("top").style.display = 'flex';
    document.getElementById("content1").style.display = 'none';
    document.getElementById("content2").style.display = 'none';
    document.getElementById("content3").style.display = 'none';
    document.getElementById("content4").style.display = 'none';

    document.getElementById("wrapper").style.background = '#ececec'

    $("#go_content1").animate({'color': '#ffffff'}, 150);
    $("#go_content2").animate({'color': '#ffffff'}, 150);
    $("#go_content3").animate({'color': '#ffffff'}, 150);
    $("#go_content4").animate({'color': '#ffffff'}, 150);

    $('.introduction').show('slow');
    $('html, body').animate({scrollTop:-100});
}
function go_content1() {
    document.getElementById("top").style.display = 'none';
    document.getElementById("content1").style.display = 'block';
    document.getElementById("content2").style.display = 'none';
    document.getElementById("content3").style.display = 'none';
    document.getElementById("content4").style.display = 'none';

    document.getElementById("wrapper").style.background = 'teal'

    $("#go_content1").animate({'color': '#ff943e'}, 150);
    $("#go_content2").animate({'color': '#ffffff'}, 150);
    $("#go_content3").animate({'color': '#ffffff'}, 150);
    $("#go_content4").animate({'color': '#ffffff'}, 150);

    $('.introduction').hide('slow');
    $('html, body').animate({scrollTop:-100});
}
function go_content2() {
    document.getElementById("top").style.display = 'none';
    document.getElementById("content1").style.display = 'none';
    document.getElementById("content2").style.display = 'block';
    document.getElementById("content3").style.display = 'none';
    document.getElementById("content4").style.display = 'none';

    document.getElementById("wrapper").style.background = 'khaki'

    $("#go_content1").animate({'color': '#ffffff'}, 150);
    $("#go_content2").animate({'color': '#ff943e'}, 150);
    $("#go_content3").animate({'color': '#ffffff'}, 150);
    $("#go_content4").animate({'color': '#ffffff'}, 150);

    $('.introduction').hide('slow');
    $('html, body').animate({scrollTop:-100});
}
function go_content3() {
    document.getElementById("top").style.display = 'none';
    document.getElementById("content1").style.display = 'none';
    document.getElementById("content2").style.display = 'none';
    document.getElementById("content3").style.display = 'block';
    document.getElementById("content4").style.display = 'none';

    document.getElementById("wrapper").style.background = 'salmon'

    $("#go_content1").animate({'color': '#ffffff'}, 150);
    $("#go_content2").animate({'color': '#ffffff'}, 150);
    $("#go_content3").animate({'color': '#ff943e'}, 150);
    $("#go_content4").animate({'color': '#ffffff'}, 150);

    $('.introduction').hide('slow');
    $('html, body').animate({scrollTop:-100});
}
function go_content4() {
    document.getElementById("top").style.display = 'none';
    document.getElementById("content1").style.display = 'none';
    document.getElementById("content2").style.display = 'none';
    document.getElementById("content3").style.display = 'none';
    document.getElementById("content4").style.display = 'block';

    document.getElementById("wrapper").style.background = 'darkgoldenrod'

    $("#go_content1").animate({'color': '#ffffff'}, 150);
    $("#go_content2").animate({'color': '#ffffff'}, 150);
    $("#go_content3").animate({'color': '#ffffff'}, 150);
    $("#go_content4").animate({'color': '#ff943e'}, 150);

    $('.introduction').hide('slow');
    $('html, body').animate({scrollTop:-100});
}

$("#go_content1").hover(function(){
    $(this).animate({'color': '#ff943e'}, 150);
}, function() {
    if(document.getElementById("content1").style.display == 'block') {
        $(this).animate({'color': '#ff943e'}, 150);
    } else {
        $(this).animate({'color': '#ffffff'}, 150);
    }
})
$("#go_content2").hover(function(){
    $(this).animate({'color': '#ff943e'}, 150);
}, function() {
    if(document.getElementById("content2").style.display == 'block') {
        $(this).animate({'color': '#ff943e'}, 150);
    } else {
        $(this).animate({'color': '#ffffff'}, 150);
    }
})
$("#go_content3").hover(function(){
    $(this).animate({'color': '#ff943e'}, 150);
}, function() {
    if(document.getElementById("content3").style.display == 'block') {
        $(this).animate({'color': '#ff943e'}, 150);
    } else {
        $(this).animate({'color': '#ffffff'}, 150);
    }
})
$("#go_content4").hover(function(){
    $(this).animate({'color': '#ff943e'}, 150);
}, function() {
    if(document.getElementById("content4").style.display == 'block') {
        $(this).animate({'color': '#ff943e'}, 150);
    } else {
        $(this).animate({'color': '#ffffff'}, 150);
    }
})