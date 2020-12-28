f = open("./OfficialScrabbleWordListGerman.txt","r")
lines = f.readlines()
f.close()
w = open("./wordarray.js","w")
w.write("words = [")
for line in lines:
	w.write("'" + line.strip("\n") + "'" + ",")
w.write("'']")
