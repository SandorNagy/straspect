$('#fYear').text(new Date().getFullYear());

function contactSubmit()
{
    let fname = $('#fnameVal').val();
    let lname = $('#lnameVal').val();
    let email = $('#email').val();
    let msg = $('#msg').val();

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=info@straspect.com&su=${fname} ${lname} - ${email}&body=${msg}`)
    return false
}

$('#return-to-top').fadeOut(0)
$(window).scroll(function()
{
    if ($(this).scrollTop() >= 100) $('#return-to-top').fadeIn(200)
    else $('#return-to-top').fadeOut(200)
});