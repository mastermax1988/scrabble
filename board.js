class Board
{
	constructor(game)
	{
		this.game = game;
		this.cellArray = Array(15);
		for(var i=0;i<15;i++)
		{
			this.cellArray[i] = new Array(15);
			for(var j=0;j<15;j++)
				{
					this.cellArray[i][j] = new Cell(i,j);
				}
		}
		this.initBoardValues();
	}


	restoreHistory(histboard)
	{
		for(var i=0;i<15;i++)
		{
			for(var j=0;j<15;j++)
			{
				this.cellArray[i][j].restoreHistory(histboard.cellArray[i][j])
			}
		}
	}

	insertWord(x,y,horizontal,word)
	{
		console.log(word);
		if(!this.wordInsertable(x,y,horizontal,word))
			return;
		for(var i=0;i<word.length;i++)
			this.cellArray[horizontal ? x : x+i][horizontal ? y+i : y].letter = word[i];
		console.log("inserted");
	}

	wordInsertable(x,y,horizontal,word)
	{
		if(x<0 || y<0)
			return false;
		if(!this.inBound(x,y,horizontal,word.length))
			return false;
		console.log("word in bound");
		for(var i=0;i<word.length;i++)
		{
			var l = this.cellArray[horizontal ? x : x+i][horizontal ? y+i : y].letter;
			if(l !="" && l != word[i])
				return false;
		}
		console.log("word insertable");
		return true;
	}

	inBound(x,y,horizontal,length)
	{
		console.log("in Bound " + x + " " + y + " " + length );
		if(horizontal)
			return (y + length) <= 15;
		return (x + length) <= 15;
	}

	clearTempLetters()
	{
		for(var i = 0; i< 15; i++)
			for(var j = 0; j< 15; j++)
					this.cellArray[i][j].clearTempLetter();
	}
	
	freezeTempLetters()
	{
		for(var i = 0; i< 15; i++)
			for(var j = 0; j< 15; j++)
					this.cellArray[i][j].freezeTempLetter();
	}
	
	initBoardValues() //todo make private, when firefox supports it
	{
		this.cellArray[0][0].setSpecial(cellTyp.tWord);
		this.cellArray[7][0].setSpecial(cellTyp.tWord);
		this.cellArray[14][0].setSpecial(cellTyp.tWord);
		this.cellArray[0][7].setSpecial(cellTyp.tWord);
		this.cellArray[7][14].setSpecial(cellTyp.tWord);
		this.cellArray[0][14].setSpecial(cellTyp.tWord);
		this.cellArray[14][7].setSpecial(cellTyp.tWord);
		this.cellArray[14][14].setSpecial(cellTyp.tWord);
		this.cellArray[1][1].setSpecial(cellTyp.dWord);
		this.cellArray[2][2].setSpecial(cellTyp.dWord);
		this.cellArray[3][3].setSpecial(cellTyp.dWord);
		this.cellArray[4][4].setSpecial(cellTyp.dWord);
		this.cellArray[7][7].setSpecial(cellTyp.dWord);
		this.cellArray[10][10].setSpecial(cellTyp.dWord);
		this.cellArray[11][11].setSpecial(cellTyp.dWord);
		this.cellArray[12][12].setSpecial(cellTyp.dWord);
		this.cellArray[13][13].setSpecial(cellTyp.dWord);
		this.cellArray[13][1].setSpecial(cellTyp.dWord);
		this.cellArray[12][2].setSpecial(cellTyp.dWord);
		this.cellArray[11][3].setSpecial(cellTyp.dWord);
		this.cellArray[10][4].setSpecial(cellTyp.dWord);
		this.cellArray[4][10].setSpecial(cellTyp.dWord);
		this.cellArray[3][11].setSpecial(cellTyp.dWord);
		this.cellArray[2][12].setSpecial(cellTyp.dWord);
		this.cellArray[1][13].setSpecial(cellTyp.dWord);
		this.cellArray[0][3].setSpecial(cellTyp.dLetter);
		this.cellArray[0][11].setSpecial(cellTyp.dLetter);
		this.cellArray[2][6].setSpecial(cellTyp.dLetter);
		this.cellArray[2][8].setSpecial(cellTyp.dLetter);
		this.cellArray[3][0].setSpecial(cellTyp.dLetter);
		this.cellArray[3][7].setSpecial(cellTyp.dLetter);
		this.cellArray[3][14].setSpecial(cellTyp.dLetter);
		this.cellArray[6][2].setSpecial(cellTyp.dLetter);
		this.cellArray[6][6].setSpecial(cellTyp.dLetter);
		this.cellArray[6][8].setSpecial(cellTyp.dLetter);
		this.cellArray[6][12].setSpecial(cellTyp.dLetter);
		this.cellArray[7][3].setSpecial(cellTyp.dLetter);
		this.cellArray[7][11].setSpecial(cellTyp.dLetter);
		this.cellArray[8][2].setSpecial(cellTyp.dLetter);
		this.cellArray[8][6].setSpecial(cellTyp.dLetter);
		this.cellArray[8][8].setSpecial(cellTyp.dLetter);
		this.cellArray[8][12].setSpecial(cellTyp.dLetter);
		this.cellArray[11][0].setSpecial(cellTyp.dLetter);
		this.cellArray[11][7].setSpecial(cellTyp.dLetter);
		this.cellArray[11][14].setSpecial(cellTyp.dLetter);
		this.cellArray[12][6].setSpecial(cellTyp.dLetter);
		this.cellArray[12][8].setSpecial(cellTyp.dLetter);
		this.cellArray[14][3].setSpecial(cellTyp.dLetter);
		this.cellArray[14][11].setSpecial(cellTyp.dLetter);
		this.cellArray[1][5].setSpecial(cellTyp.tLetter);
		this.cellArray[1][9].setSpecial(cellTyp.tLetter);
		this.cellArray[5][1].setSpecial(cellTyp.tLetter);
		this.cellArray[5][5].setSpecial(cellTyp.tLetter);
		this.cellArray[5][9].setSpecial(cellTyp.tLetter);
		this.cellArray[5][13].setSpecial(cellTyp.tLetter);
		this.cellArray[9][1].setSpecial(cellTyp.tLetter);
		this.cellArray[9][5].setSpecial(cellTyp.tLetter);
		this.cellArray[9][9].setSpecial(cellTyp.tLetter);
		this.cellArray[9][13].setSpecial(cellTyp.tLetter);
		this.cellArray[13][5].setSpecial(cellTyp.tLetter);
		this.cellArray[13][9].setSpecial(cellTyp.tLetter);
	}
	
	clearMarkedCells()
	{	
		for(var i = 0; i< 15; i++)
			for(var j = 0; j< 15; j++)
					this.cellArray[i][j].clearMarkedCell();
	}

	getNewLetterCount()
	{
		var l=0;
		for(var i=0;i<15;i++)
		{
			for(var j=0;j<15;j++)
			{
				var c = this.cellArray[i][j];
				l += (c.temp && c.letter != "") ? 1 : 0;
			}
		}
		return l;
	}

	getFrozenLetterCount()
	{
		var l=0;
		for(var i=0;i<15;i++)
		{
			for(var j=0;j<15;j++)
			{
				var c = this.cellArray[i][j];
				l += (!c.temp && c.letter != "") ? 1 : 0;
			}
		}
		return l;

	}

	getAllWords()
	{
		var ret = [];
		for(var i = 0; i<15;i++)
		{
			var h = this.getLineWords(i, true);
			for(var j = 0; j<h.length; j++)
				ret.push(h[j]);
			var v = this.getLineWords(i, false);
			for(var j = 0; j<v.length; j++)
				ret.push(v[j]);
		}
		console.log(ret);
		return ret;
	}

	getLineWords(index, horizontal)
	{
		var ret = [];
		var bWord=false;
		var word = null;
		for(var i = 0; i< 15;i++)
		{
			var c = this.cellArray[horizontal? index:i][horizontal?i:index];
			if(bWord)
			{
				if(c.letter=="" || i==14)
				{
					if(i==14 && c.letter!="")
						word.addLetter(c);
					bWord = false;
					if(word.word.length>1)
					{
						word.applyWordmultiplyer();
						ret.push(word);
					}
					continue;
				}
				word.addLetter(c);
				continue;
			}
			if(c.letter!="")
			{
				word = new Word();
				word.addLetter(c);
				bWord = true;
			}
		}
		return ret;
	}

	markCell(x,y)
	{
		this.cellArray[x][y].marked = true;
	}

	drawBoard()
	{
		var div = document.getElementById("board");
		div.innerHTML = '';
		var table = document.createElement("table");
		//table.setAttribute("overflow-x", "auto");
		table.setAttribute("layout", "fixed");
		for(var i=0;i<15;i++)
		{
			var tr = document.createElement("tr");
			tr.setAttribute("height", scale + "px");
			tr.setAttribute("style", "text-align: center; vertical-align: middle;font-weight:bold; font-size:" + 0.8*scale + "px");
			for(var j=0;j<15;j++)
			{
				var thisCell = this.cellArray[i][j];
				var tcell = document.createElement("td");
				tcell.setAttribute("width", scale + "px");
				tcell.setAttribute("x", i);
				tcell.setAttribute("y", j);
				tcell.addEventListener("click", (e) => {this.game.cellClicked(e.target.attributes.x.value, e.target.attributes.y.value);});
				tcell.style.backgroundColor = this.cellArray[i][j].getColor();
				tcell.style.color = thisCell.temp ? "gray" : "black";
				tcell.innerHTML = thisCell.getLetter();
				tr.appendChild(tcell);
			}
			table.appendChild(tr);
		}
		div.appendChild(table);
	}
}
