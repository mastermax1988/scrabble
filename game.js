class Game
{
	constructor()
	{
		this.history=new History(this);
		this.players = [];
		this.playerindex = -1;
		this.playercount = -1;
		this.playerscore = [];
		this.board = new Board(this);
		this.cellx = -1;
		this.celly = -1;
	}
	
	getHistObject()
	{	
		var obj = {};
		obj.playerindex = this.playerindex;
		obj.playerscore = cloneObj(this.playerscore)
		obj.cellArray = cloneObj(this.board.cellArray)
		console.log(obj);
		return obj;
	}	

	restoreHistory(histgame)
	{
		this.playerindex = histgame.playerindex;
		this.playerscore = cloneObj(histgame.playerscore);
		this.board.restoreHistory(histgame);
		this.cellx = -1;
		this.celly = -1;
		this.board.clearMarkedCells();
		this.update();
	}
	
	cellClicked(x,y) // board is calling this
	{
		this.cellx = parseInt(x);
		this.celly = parseInt(y);
		this.board.clearMarkedCells();
		this.board.markCell(x,y);
		this.update();
		this.wordinput.focus();
	}
	
	
	newGame()
	{
		document.getElementById("board").innerHTML = "";
		var onlycheckbtn = document.createElement("button");
		onlycheckbtn.addEventListener("click", () => {this.startOnlyWordChecker();});
		onlycheckbtn.innerHTML = "Nur den Wortchecker ohne Scrabbleblock starten.";
		var div = document.getElementById("player");
		div.innerHTML = "";
		div.appendChild(onlycheckbtn);
		var hinweis = document.createElement("div");
		hinweis.innerHTML = "Bitte die Mitspieler in der richtigen Reihenfolge anlegen:";
		div.appendChild(hinweis);
		div.appendChild(document.createElement("br"));
		var txt = document.createElement("input");
		txt.id = "playername";
		var addPlayerBtn = document.createElement("button");
		txt.addEventListener("keyup", (event) => 
		{
			if(event.keyCode == 13) // enter key pressed
			{
				event.preventDefault();
				addPlayerBtn.click();
			}
		});
		div.appendChild(txt);
		addPlayerBtn.innerHTML = "Spieler hinzufügen";
		div.appendChild(addPlayerBtn);
		addPlayerBtn.addEventListener("click", () => {this.addPlayer(txt)});
		var btn = document.createElement("button");
		btn.id = "startBtn";
		btn.innerHTML = "Spiel starten";
		btn.addEventListener("click", () => {this.startNewGame();});
		div.appendChild(document.createElement("br"));
		var playlist = document.createElement("div");
		playlist.id = "playerlist";
		div.appendChild(playlist);
		div.appendChild(document.createElement("br"));
		div.appendChild(btn);
		this.showAllPlayerNames();
	}

	startNewGame()
	{
		this.playerdiv = document.getElementById("player");
		this.playerdiv.innerHTML = "";
		this.scoreboard = document.getElementById("scoreboard");
		this.turn = document.getElementById("turn");
		//this.playerdiv.appendChild(document.createElement("br"));
		this.playerindex = 0;
		this.playercount = this.players.length;
		this.currentplayerdiv = document.createElement("div");
		this.wordinput = document.createElement("input");
		this.btnInsertH = document.createElement("button");
		this.btnInsertH.innerHTML = "Horizontal";
		this.btnInsertH.addEventListener("click", (e) => {this.insertClicked(true);});
		this.btnInsertV = document.createElement("button");
		this.btnInsertV.innerHTML = "Vertikal";
		this.btnInsertV.addEventListener("click", (e) => {this.insertClicked(false);});
		this.playerdiv.appendChild(this.currentplayerdiv);
		this.playerdiv.appendChild(document.createElement("br"));
		this.playerdiv.appendChild(this.wordinput);
		this.playerdiv.appendChild(this.btnInsertH);
		this.playerdiv.appendChild(this.btnInsertV);
		this.playerdiv.appendChild(document.createElement("br"));
		this.preview = document.createElement("div");
		this.playerdiv.appendChild(this.preview);	
		this.freezeBtn = document.createElement("button");
		this.updateFreezeBtn();
		this.freezeBtn.addEventListener("click", (e) => {this.freezeBtnClicked();});
		this.playerdiv.appendChild(this.freezeBtn);
		this.history.snapshot();
		this.history.start();
		this.update();
	}

	freezeBtnClicked()
	{
		this.addScore();
		this.board.freezeTempLetters();
		this.board.clearMarkedCells;
		this.playerindex = (this.playerindex+1)%this.playercount;
		this.updateFreezeBtn();
		this.cellx = -1;
		this.celly = -1;
		this.board.clearMarkedCells();
		this.wordinput.value = "";
		this.wordinput.focus();
		this.history.snapshot();
		this.update();
	}

	updateFreezeBtn()
	{
		this.freezeBtn.innerHTML = this.players[this.playerindex] + ": angezeigtes Wort legen und Zug beenden.";
	}

	addScore()
	{
		var allWords = this.board.getAllWords();
		var score = 0;
		for(var i=0;i<allWords.length;i++)
		{
			if(allWords[i].containsNewLetter)
				score += allWords[i].score
		}	
		if(this.board.getNewLetterCount() == 7)
			score +=50;
		this.playerscore[this.playerindex] += score;
	}

	insertClicked(horizontal)
	{
		console.log("insert clicked" + horizontal);
		this.board.clearTempLetters();
		this.board.insertWord(this.cellx, this.celly, horizontal, this.wordinput.value.replace(".","?").trim().toUpperCase());
		this.update();
	}

	startOnlyWordChecker()
	{
		this.playerdiv = document.getElementById("player");
		this.playerdiv.innerHTML = "";
		var wordin = document.createElement("input");
		var resp = document.createElement("div");
		wordin.addEventListener("keyup", (event) => 
		{
			if(event.keyCode == 13)
			{
				event.preventDefault();
				var word = wordin.value.toUpperCase().trim();
				if(words.includes(word))
				{
					resp.style.color = "green";
					resp.innerHTML = word + " ist akzeptabel";
				}
				else
				{
					resp.style.color = "red";
					resp.innerHTML = word + " ist NICHT akzeptabel"
				}
			wordin.value = "";
			}
		});
		var hinweis = document.createElement("div");
		hinweis.innerHTML = "Wort eingeben und mit ENTER bestätigen"
		this.playerdiv.appendChild(hinweis);
		this.playerdiv.appendChild(wordin);
		this.playerdiv.appendChild(resp);
	}

	update()
	{
		if(this.playerindex == -1)
			return;
		this.turn.innerHTML = this.players[this.playerindex] + " ist an der Reihe. Blankosteine mit '.' oder '?' eingeben.";

		var allWords = this.board.getAllWords();
		this.preview.innerHTML="";
		for(var i=0;i<allWords.length;i++)
		{
			if(allWords[i].containsNewLetter)
				this.preview.innerHTML+=allWords[i].word + (words.includes(allWords[i].word)?" (":" (NICHT ERKANNT + ") + allWords[i].score + ")<br>";
		}
		var lc = this.board.getNewLetterCount();
		if(lc == 7)
			this.preview.innerHTML +="Alle Buchstaben ausgespielt + 50<br>"
		if(lc > 7)
			this.preview.innerHTML +="Fehler: mehr als 7 neue Buchstaben<br>"
			

		this.scoreboard.innerHTML = "Scoreboard:";
		var b = document.createElement("table")
		for(var i=0;i<this.playercount; i++)
		{
			console.log(this.players[i]);
			var r = document.createElement("tr");
			var n = document.createElement("td");
			n.innerHTML = this.players[i];
			var s = document.createElement("td");
			s.innerHTML = this.playerscore[i];
			r.appendChild(n);
			r.appendChild(s);
			b.appendChild(r);
		}
		this.scoreboard.appendChild(b);
		
		this.board.drawBoard();
		
	}

	showAllPlayerNames()
	{
		document.getElementById("startBtn").disabled = this.players.length<2;
		document.getElementById("playerlist").innerHTML = this.players.length == 0 ? "Bitte Spieler eintragen!" : "Spieler: " + this.players;
		document.getElementById("playername").focus();
	}

	addPlayer(txt)
	{
		this.players.push(txt.value);
		this.playerscore.push(0);
		txt.value = "";
		this.showAllPlayerNames();
	}
}

