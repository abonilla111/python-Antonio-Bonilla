#placeholdres.py

name = "mary" 
age = "19"
city = "Orizaba"
state = "Veracruz"
country = "Mexico"

message = "my name is %s, years old \n"
print  message%("name, age") 

message = "\tMy names is %s, \n\tI am %s years old\n\tI am from %s %s, %s"
print message%(name, age, city, state, country) 
