import os

def a(c):
	d=0
	if 10<=c%100<=20:d="th"
	d=d if type(d)==str else(["st","nd","rd"][(c%10)-1]if 1<=c%10<=3 else"th")
	return"".join([f"{e}"for e in[c,d]])

b = 1
print("---")
print("# Quicklinks to codes:\n")
while b <= 22:
	print(f"\t- [December {a(b)}](/codes/{str(b).zfill(2)}.js)")
	b += 1
print("---")