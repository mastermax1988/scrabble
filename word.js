class Word
{
	constructor()
	{
		this.word = "";
		this.containsNewLetter = false;
	}

	addLetter(cell)
	{
		this.word += cell.letter;
		if(cell.temp)
			this.containsNewLetter = true;
	}
}
