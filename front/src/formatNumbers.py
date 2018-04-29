file = open("numbers.js","r")
i = 0
for line in file:
    print('"'+line[:len(line)-1]+'":'+str(i)+',')
    i= i+1
