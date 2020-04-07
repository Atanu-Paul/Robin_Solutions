# 1) Write a program to find greatest common divisor (GCD) or highest common factor (HCF) of given two numbers.

def hcf(x,y):
    if x > y:
        small_val = y
    else:
        small_val = x
    for i in range(1, small_val+1):
        if(x % i == 0) and (y % i == 0):
            hcf = i    
    return hcf

N1 = int(input("1st number : "))
N2 = int(input("2nd number : "))

print("The hcf or gcd of the two numbers entered " , N1, "and", N2, "is", hcf(N1,N2))

