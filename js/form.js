
window.addEventListener(func)

function func () {
    if (window.screen.width() < '600px')
{
    document.getElementById('test').style.width = '20px';
    document.getElementById('test').style.width = '40px';
}
else {
    document.getElementById('test').style.width = '2000px';
}
}

if (window.screen.width() < 200)
{
    document.getElementById('test').style.width = '20px';
}
else {
    document.getElementById('test').style.width = '2000px';
}