# dont mind this, just a way to precreate the codes.
import os

count = 1
while count <= 22:
	os.system(f"touch {str(count).zfill(2)}.js") # laziness at its prime lol
	count += 1