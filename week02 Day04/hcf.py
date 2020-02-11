#Write a program to find greatest common divisor (GCD) or highest common factor (HCF) of given two numbers.

#first defined function x,y
import math
def cal_cf(x,y):
  # checking if its one value is smaller or not and assigning it to the variable
  if x>y:
    smaller=y
  else:
    smaller=x
    #running a for loop to check 
  for i in range(1,smaller+1):
    if((x%i==0)and(y%i==0)):
      hcf=i
  return hcf

x=78
y=94
print("The HCF is:", math.gcd(x,y))
print("The HCF is :",cal_cf(x,y) )