# 3) Write a Python function that accepts a string and calculate the number of upper case letters and lower case letters.

n = input("Enter the string : ")
def string(a):
    upper_case = 0
    lower_case = 0
    for x in a:
        if(x.isupper()):
            upper_case = upper_case + 1
        elif(x.islower()):
            lower_case = lower_case + 1
        else:
            pass
    print("The string is : ", n)
    print("The total number of upper case letters in this string are : ", upper_case)
    print("The total number of lower case letters in this string are : ", lower_case)

string(n)