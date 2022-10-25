change();

function verif(form){
	console.log("verif");
	console.log(form);
	var str_err = [];

	if(form.votre_nom.value == "")		{ str_err.push("Votre nom"); }
	if(form.prenom_bebe.value == "")	{ str_err.push("Le prénom du bébé"); }
	if(form.therme.value == "")			{ str_err.push("Date"); }
	if(form.poids.value == "")			{ str_err.push("Poids"); }
	if(form.taille.value == "") 		{ str_err.push("Taille"); }
	if(form.sexe.value == "") 			{ str_err.push("Sexe"); }	

	var str ="";
	if(str_err.length)
	{
		str = "<ul>";
		str += "Manque: ";
		for(var i=0; i<str_err.length; i++)
		{
			str += "<li>" + str_err[i] + "</li>";
		}
		str += "</ul>";

		$("#zone_erreurs").html("").append($("<div>")); // supprime et remet la section div
		$("#zone_erreurs>div").html(str).attr("class","").addClass("animate__animated").addClass("animate__bounceInDown");

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

