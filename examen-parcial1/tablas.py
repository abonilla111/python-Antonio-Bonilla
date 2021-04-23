#Antonio Bonilla
#tablas.py
n = input ("Pon un numero: ")
numero = int (n)

if (numero > 0):
  for i in range (numero, (numero * 7), numero):
    print (i)
elif (numero < 0):
  print ("ERROR")
