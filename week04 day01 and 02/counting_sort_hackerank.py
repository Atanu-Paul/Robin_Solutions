#  https://www.hackerrank.com/challenges/countingsort4/problem

n = int(input())
ar = []
for i in range(0,n) :
    data = input().strip().split(' ')
    ar.append((int(data[0]), data[1]))

c = [0]*100
for a in ar :
    c[a[0]] += 1
    
c1 = [0]*100
for x in range(1,100) :
    c1[x] = c1[x-1] + c[x-1]

s = ['-']*n
for i in range(0,n) :
    if i >= n/2 :
        s[c1[ar[i][0]]] = ar[i][1]
    c1[ar[i][0]] += 1
    
print(' '.join(s))