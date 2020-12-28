function generateCell(i,j)
{
	var obj = {};
	obj.x = i;
	obj.y = j;
	obj.getX = function() { return obj.x;};
	obj.getY = function() { return obj.y;};
	obj.getColor = function()
	{
		return obj.x==7 && obj.y==7 ? "red": "gray";
	}
	return obj;
}
