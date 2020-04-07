# 4) Write a Python function that takes a number as a parameter and check the number is prime or not. 

n = int(input())
def prime(num):
    if num > 1:
        for i in range(2,num):
            if(num % i == 0):
                print("The number is not a prime number : ", end = " ")
                break
        else:
            print("The number is a prime number : ", end = " ")
        print(n)

prime(n)
