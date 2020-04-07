# 2) Take integer inputs from user until he/she presses q ( Ask to press q to quit after every integer input ). 
# Print average and product of all numbers.

total = 0
sum_of_the_numbers  = 0
prod = 1
x = 1

while(x != "q"):
  print("Enter the number")

  x = input("{Enter 'q' if you want to quit} : ")
  
  if(x == "q"):
  
    print( )
  
  else:
  
    total += 1
  
    sum_of_the_numbers = sum_of_the_numbers + int(x)
  
    avg =  (sum_of_the_numbers) / (total)
  
    prod = prod * int(x)

print('Average of the numbers is :', avg)

print('Product of the numbers is :', prod)




