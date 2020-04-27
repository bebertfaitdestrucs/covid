alert('Début du script js pour la base de données.');
var xhr = new XMLHttpRequest();
alert(xhr);
xhr.open('POST','http://localhost/site/db.php');
//xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//xhr.send(null);
xhr.addEventListener('readystatechange',
function()
{
	if(xhr.readyState===XMLHttpRequest.DONE)
	{
		alert('code renvoyé :'+xhr.status);
		alert("message renvoyé : "+xhr.statusText);
		alert("contenu renvoyé : "+xhr.responseText);
	}

});

var form = new FormData();
form.append('variable1','lol');
form.append('variable2','relol');	i
xhr.send(form);



