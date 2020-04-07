# 1)Write a Python program to sort (ascending and descending) a dictionary by value. [use sorted()]

import operator

d = { }
n = int(input("How many entries? : "))

for i in range(n):
    
    key = input("Enter the key: ") 
    
    value = input("Enter the value: ")
    
    d[key] = value

#sorting done using sorted() method.

#ascending order
sorted_d = sorted(d.items(), key=operator.itemgetter(1))

#descending order
sorted_d_rev = dict(sorted(d.items(), key=operator.itemgetter(1), reverse= True))

print("The ascending order is : ", sorted_d)
print("The descending order is : ", sorted_d_rev)
