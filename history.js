class History
{	
	constructor(game)
	{
		this.hist = [];
		this.game = game;
		this.backBtn = document.createElement("button");
		this.backBtn.innerHTML = "Zug rückgängig machen";
		this.backBtn.addEventListener("click", (e) => {this.backBtnClicked();});
		this.backBtn.disabled = true;
		document.getElementById("history").appendChild(this.backBtn);
		this.continueBtn = document.createElement("button");
		this.continueBtn.innerHTML = "weiter spielen";
		this.continueBtn.addEventListener("click", (e) => {this.continueBtnClicked();});
		this.continueBtn.disabled = true;
		document.getElementById("history").appendChild(this.continueBtn);
	}

	start()
	{
		this.backBtn.disabled=false;
	}

	backBtnClicked()
	{
		var state = this.hist.pop();
		if(state == null)
			return;
		this.game.restoreHistory(state);
		this.continueBtn.disabled = false;
		document.getElementById("player").hidden = true;
	}
	
	continueBtnClicked()
	{
		this.snapshot();
		this.continueBtn.disabled = true;
		this.game.updateFreezeBtn();
		document.getElementById("player").hidden = false;
	}
	snapshot()
	{
		console.log("snapshot");
		this.hist.push(game.getHistObject());
	}
}

function cloneObj(o)
{
	return JSON.parse(JSON.stringify(o));
}
	
