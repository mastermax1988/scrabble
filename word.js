class Word
{
	constructor()
	{
		this.word = "";
		this.containsNewLetter = false;
		this.wordmultiplyer=1;
		this.score=0;
	}

	addLetter(cell)
	{
		if(cell.letter =="")
			return;
		this.word += cell.letter;
		if(cell.temp)
			this.containsNewLetter = true;
		this.wordmultiplyer *= cell.wordMultiplyer;
		this.score += lettervalue[cell.letter] * cell.letterMultiplyer;
	}

	applyWordmultiplyer()
	{
		this.score *= this.wordmultiplyer;
		this.wordmultiplyer = 1;
	}
}
