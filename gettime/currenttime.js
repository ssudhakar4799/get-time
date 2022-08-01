
function addtime() {

    var newdate = new Date();

    var newtime = newdate.getHours() + ":" + newdate.getMinutes() + ':' + newdate.getSeconds();

    var newtext = document.createElement('p');

    newtext.innerText = newtime;

    var bodyelment = document.getElementsByTagName('body');

    bodytag = bodyelment[0];

    bodytag.appendChild(newtext);

    buttonElement.setAttribute('disabled','disabled');

}
var buttonElement = document.getElementById('show-butn');

buttonElement.addEventListener('click', addtime);