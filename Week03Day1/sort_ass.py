#Write a Python program to sort (ascending and descending) a dictionary by value. [use sorted()]

import operator
d = {'a':1,'b':2,'c':3}
print('Original dictionary : ',d)
sorted_d = sorted(d.items(), key=operator.itemgetter(1))
print('Dictionary in ascending order by value : ',sorted_d)
sorted_d = dict( sorted(d.items(), key=operator.itemgetter(1),reverse=True))
print('Dictionary in descending order by value : ',sorted_d)
