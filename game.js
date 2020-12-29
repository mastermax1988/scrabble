class Game
{
	constructor()
	{
		this.players = [];
		this.playindex = -1;
		this.playercount = -1;
		this.board = new Board();
	}
	newGame()
	{
		document.getElementById("board").innerHTML = "";
		var div = document.getElementById("player");
		div.innerHTML = "";
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
		this.playerindex = 0;
		this.playercount = this.players.length;
		this.currentplayerdiv = document.createElement("div");
		this.playerdiv.appendChild(this.currentplayerdiv);
		this.playerdiv.appendChild(document.createElement("br"));
		this.update();
	}
	
	update()
	{
		if(this.playerindex == -1)
			return;
		this.currentplayerdiv.innerHTML = this.players[this.playerindex];
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
		txt.value = "";
		this.showAllPlayerNames();
	}
}
