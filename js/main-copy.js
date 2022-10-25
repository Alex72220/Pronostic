var zoneErreur	= document.querySelector("#zone_erreurs");
var bouton		= document.querySelector("#bt_envoyer");
var formulaire	= document.querySelector("#formulaire");

change();

function verif(form){
	console.log("verif");
	console.log(form);
	var str_err = [];
	
	console.log(form.votre_nom.value);
	console.log(form.prenom_bebe.value);
	console.log(form.therme.value);
	console.log(form.poids.value);
	console.log(form.taille.value);
	console.log(form.sexe.value);
	console.log(form.msg.value);
	
	if(form.votre_nom.value == "")
	{
		str_err.push("Votre nom");
	}
	
	if(form.prenom_bebe.value == "")
	{
		str_err.push("Le prénom du bébé");
	}
	
	if(form.therme.value == "")
	{
		str_err.push("Date");
	}
	
	if(form.poids.value == "")
	{
		str_err.push("Poids");
	}
	
	if(form.taille.value == "")
	{
		str_err.push("Taille");
	}

	if(form.sexe.value == "")
	{
		str_err.push("Sexe");
	}	

	zoneErreur.innerHTML = "";
	if(str_err.length)
	{
		zoneErreur.innerHTML = "<ul>";
		zoneErreur.innerHTML += "Manque: ";
		for(var i=0; i<str_err.length; i++)
		{
			zoneErreur.innerHTML += "<li>" + str_err[i] + "</li>";
		}
		zoneErreur.innerHTML += "</ul>";
		return false;
	}
	{
		return true;
	}
	return false;
}

function change() {
	var sexe		= document.querySelector("#sexe");
	var img_sexe	= document.querySelector("#img_sexe");
	
	if(sexe.selectedIndex == 1)
	{
		img_sexe.src = "img/gars.png";
	}
	else
	{
		img_sexe.src = "img/fille.png";
	}
}

