class Cell 
{
	constructor(x,y)
	{
		this.x = x;
		this.y = y;
		this.letterMultiplyer = 1;
		this.wordMultiplyer = 1;
		this.color = "palegreen";
		this.letter = "";
		this.temp = true;
	}

	clearTempLetter()
	{
		if(this.temp)
			this.letter = "";
	}
	
	freezeTempLetter()
	{
		if(this.letter == "" || !this.temp)
			return;
		this.temp = false;
		this.letterMultiplyer = 1;
		this.wordMultiplyer = 1;
	}

	setSpecial(s)
	{
		switch (s) {
			case cellTyp.normal:
				this.setSpecialValues(1,1,"palegreen");
				break;
			case cellTyp.dWord:
				this.setSpecialValues(1,2,"pink");
				break;
			case cellTyp.tWord:
				this.setSpecialValues(1,3,"lightcoral");
				break;
			case cellTyp.dLetter:
				this.setSpecialValues(2,1,"cyan");
				break;
			case cellTyp.tLetter:
				this.setSpecialValues(3,1,"deepskyblue");
				break;
			default:
				
		}
	}
	getLetter()
	{
		return this.letter;
	}	
	setSpecialValues(l,w,c)
	{
		this.letterMultiplyer = l;
		this.wordMultiplyer = w;
		this.color = c;
	}
	getColor() 
	{
		return this.color;
	}
}

const cellTyp = {
	normal: 1,
	dWord: 2, 
	tWord: 3, 
	dLetter: 4, 
	tLetter: 5
};
