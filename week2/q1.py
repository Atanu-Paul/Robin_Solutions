#Using range and for loop, print all multiples of 5, 7, 11 from 1 to 1001

print("Multiples of 5 are:")
for n in range(1,1000):
    if(n % 5 == 0):
         print(n, end = "  ")
print( )


print("Multiples of 7 are:")
for n in range(1,1000):
    if(n % 7 == 0):
         print(n, end = "  ")
print( )

print("Multiples of 11 are:")
for n in range(1,1000):
    if(n % 11 == 0):
         print(n, end = "  ")
print( )


    