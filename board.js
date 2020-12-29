class Board
{
	constructor()
	{
		this.cellArray = Array(15);
		for(var i=0;i<15;i++)
		{
			this.cellArray[i] = new Array(15);
			for(var j=0;j<15;j++)
				{
					this.cellArray[i][j] = new Cell(i,j);
				}
		}
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
		this.drawBoard();
	}
	drawBoard()
	{
		var div = document.getElementById("board");
		div.innerHTML = '';
		var table = document.createElement("table");
		for(var i=0;i<15;i++)
		{
			var tr = document.createElement("tr");
			tr.setAttribute("height", "40px");
			for(var j=0;j<15;j++)
			{
				var tcell = document.createElement("td");
				tcell.setAttribute("width", "40px ");
				tcell.style.backgroundColor = this.cellArray[i][j].getColor();
				tr.appendChild(tcell);
			}
			table.appendChild(tr);
		}
		div.appendChild(table);
	}
}