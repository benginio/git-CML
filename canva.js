
	//declaration des variable
		var c=document.getElementById("mon_canvas");
		var ctx=c.getContext("2d");
	


		ctx.beginPath();
		ctx.moveTo(368,278);
		ctx.lineTo(410,278);
		ctx.lineTo(410,265);
		ctx.lineTo(368,265);
		ctx.lineWidth=2;//epaisseur ligne
		ctx.strokeStyle='#000';//couleur ligne
		ctx.fillStyle='#7841c9';//couleur fond
		ctx.fill();//fermeture couleur fond
		ctx.closePath();
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(374,300);
		ctx.lineTo(374,278);
		ctx.lineTo(403,278);
		ctx.lineTo(403,385);
		ctx.lineWidth=2;//epaisseur ligne
		ctx.strokeStyle='#000';//couleur ligne
		ctx.fillStyle='#f4c96b';//couleur fond
		ctx.fill();//fermeture couleur fond
		ctx.closePath();
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(466,407);
		ctx.lineTo(340,277);
		ctx.lineTo(224,407);
		ctx.lineTo(216,400);
		ctx.lineTo(340,260);
		ctx.lineTo(474,398);
		ctx.lineWidth=2;//epaisseur ligne
		ctx.strokeStyle='#000';//couleur ligne
		ctx.fillStyle='#7841c9';//couleur fond
		ctx.fill();//fermeture couleur fond
		ctx.closePath();
		ctx.stroke();	

		ctx.beginPath();
		ctx.moveTo(235,417);
		ctx.lineTo(340,300);
		ctx.lineTo(457,417);
		ctx.lineTo(466,407);
		ctx.lineTo(340,277);
		ctx.lineTo(224,407);
		ctx.lineWidth=2;//epaisseur ligne
		ctx.strokeStyle='#000';//couleur ligne
		ctx.fillStyle='#1e3ab5';//couleur fond
		ctx.fill();//fermeture couleur fond
		ctx.closePath();
		ctx.stroke();	


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
		ctx.fillStyle='#beeffe';//couleur fond
		ctx.fill();//fermeture couleur fond
		ctx.closePath();
		ctx.stroke();
	
	//fenetre(milieu)

		ctx.beginPath();
		ctx.moveTo(312,404);
		ctx.lineTo(312,464);
		ctx.lineTo(375,464);
		ctx.lineTo(375,404);
		ctx.lineTo(345,404);
		ctx.lineTo(345,464);
		ctx.lineTo(345,404);
		ctx.lineWidth=2;//epaisseur ligne
		ctx.strokeStyle='#000';//couleur ligne
		ctx.fillStyle='#beeffe';//couleur fond
		ctx.fill();//fermeture couleur fond
		ctx.closePath();
		ctx.stroke();

		//bottom fenetre (milieu)
		ctx.beginPath();
		ctx.moveTo(312,464);
		ctx.lineTo(312,475);
		ctx.lineTo(375,475);
		ctx.lineTo(375,464);
		ctx.lineWidth=2;//epaisseur ligne
		ctx.strokeStyle='#000';//couleur ligne
		ctx.fillStyle='#f4c96b';//couleur fond
		ctx.fill();//fermeture couleur fond
		ctx.closePath();
		ctx.stroke();

		//fenetre(droite)

		ctx.beginPath();
		ctx.moveTo(385,404);
		ctx.lineTo(385,475);
		ctx.lineTo(420,475);
		ctx.lineTo(420,404);
		ctx.lineWidth=2;//epaisseur ligne
		ctx.strokeStyle='#000';//couleur ligne
		ctx.fillStyle='#beeffe';//couleur fond
		ctx.fill();//fermeture couleur fond
		ctx.closePath();
		ctx.stroke();