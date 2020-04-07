#Print multiplication table of 14

a = int(input("enter the number whose table is to printed"))
b = int(input("enter the limit for the table"))
for x in range(1,b+1):
    print(a,"X", x, "=", a*x)
