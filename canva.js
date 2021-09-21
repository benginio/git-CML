
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
  // Suite premiere fenetre(haut)
		ctx.beginPath();
		ctx.moveTo(340,320);
		ctx.lineTo(365,345);
		ctx.lineTo(318,345);
		ctx.lineTo(340,320);
		ctx.lineTo(340,375);
		ctx.lineWidth=2;//epaisseur ligne
		ctx.strokeStyle='#000';//couleur ligne
		ctx.fillStyle='#beeffe';//couleur fond
		ctx.fill();//fermeture couleur fond
		ctx.closePath();
		ctx.stroke();

		//fenetre(gauche)

		ctx.beginPath();
		ctx.moveTo(270,404);
		ctx.lineTo(270,475);
		ctx.lineTo(303,475);
		ctx.lineTo(303,404);
		ctx.lineWidth=2;//epaisseur ligne
		ctx.strokeStyle='#000';//couleur ligne
		ctx.fillStyle='white';//couleur fond
		ctx.fill();//fermeture couleur fond
		ctx.closePath();
		ctx.stroke();
	