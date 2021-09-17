
	//declaration des variable
		var c=document.getElementById("mon_canvas");
		var ctx=c.getContext("2d");
	

		//base de la maison
		ctx.beginPath();
		ctx.moveTo(250,400);
		ctx.lineTo(340,300);
		ctx.lineTo(440,400);
		ctx.lineTo(440,510);
		ctx.lineTo(250,510);
		ctx.lineWidth=2;//epaisseur ligne
		ctx.strokeStyle='#000';//couleur ligne
		ctx.fillStyle='#f8e162';//couleur fond
		ctx.fill();//fermeture couleur fond
		ctx.closePath();
		ctx.stroke();

//premier fenetre haut 
		ctx.beginPath();
		ctx.moveTo(292,375);
		ctx.lineTo(340,320);
		ctx.lineTo(395,375);
		ctx.lineTo(292,375);
		ctx.lineWidth=2;//epaisseur ligne
		ctx.strokeStyle='#000';//couleur ligne
		ctx.fillStyle='#beeffe';//couleur fond
		ctx.fill();//fermeture couleur fond
		ctx.closePath();
		ctx.stroke();

	