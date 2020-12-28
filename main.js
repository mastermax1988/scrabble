table = document.createElement("table");
var cellArray = Array(15);
for(i = 0;i<15;i++)
{
	cellArray[i] = Array(15);
	tr = document.createElement("tr");
	tr.setAttribute("height", "40px");
	for(j=0;j<15;j++)
	{
		var cellObj = new Cell(i,j);
		tcell = document.createElement("td");
		tcell.setAttribute("width", "40px ");
		tcell.style.backgroundColor = cellObj.getColor();
		cellArray[i][j] = cellObj;
		tr.appendChild(tcell);
	}
	table.appendChild(tr);
}
document.body.appendChild(table);
