document.getElementById("flower").style.display = 'none';
document.getElementById("machine").style.display = 'none';
document.getElementById("music").style.display = 'none';
document.getElementById("food").style.display = 'none';

function go_top() {
    document.getElementById("top").style.display = 'flex';
    document.getElementById("flower").style.display = 'none';
    document.getElementById("machine").style.display = 'none';
    document.getElementById("music").style.display = 'none';
    document.getElementById("food").style.display = 'none';

    $('.introduction').show('slow');
    $('html, body').animate({scrollTop:-100});
}
function go_flower() {
    document.getElementById("top").style.display = 'none';
    document.getElementById("flower").style.display = 'block';
    document.getElementById("machine").style.display = 'none';
    document.getElementById("music").style.display = 'none';
    document.getElementById("food").style.display = 'none';

    $('.introduction').hide('slow');
    $('html, body').animate({scrollTop:-100});
}
function go_machine() {
    document.getElementById("top").style.display = 'none';
    document.getElementById("flower").style.display = 'none';
    document.getElementById("machine").style.display = 'block';
    document.getElementById("music").style.display = 'none';
    document.getElementById("food").style.display = 'none';

    $('.introduction').hide('slow');
    $('html, body').animate({scrollTop:-100});
}
function go_music() {
    document.getElementById("top").style.display = 'none';
    document.getElementById("flower").style.display = 'none';
    document.getElementById("machine").style.display = 'none';
    document.getElementById("music").style.display = 'block';
    document.getElementById("food").style.display = 'none';

    $('.introduction').hide('slow');
    $('html, body').animate({scrollTop:-100});
}
function go_food() {
    document.getElementById("top").style.display = 'none';
    document.getElementById("flower").style.display = 'none';
    document.getElementById("machine").style.display = 'none';
    document.getElementById("music").style.display = 'none';
    document.getElementById("food").style.display = 'block';

    $('.introduction').hide('slow');
    $('html, body').animate({scrollTop:-100});
}

