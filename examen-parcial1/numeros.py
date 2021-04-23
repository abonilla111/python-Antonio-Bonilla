#Antonio Bonilla
#numeros.py
n = input ("Ingresar numero: ")
print (n)

numero = int(n)

if (numero == 0):
  print ("0")
elif (numero > 0):
  print ("POSITIVO")
elif (numero < 0):
  print ("NEGATIVO")
else:
  print ("ERROR")
