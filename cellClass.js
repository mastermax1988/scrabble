class Cell 
{
	constructor(x,y)
	{
		this.x = x;
		this.y = y;
	}
	getColor() 
	{
		return this.x==7  && this.y==7 ? "red" : "gray";
	}
}
