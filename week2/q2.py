#https://www.hackerrank.com/challenges/alphabet-rangoli/problem


n = int(input("Enter the size  "))

for x in range(-(n-1), n):

    for y in range(-2*(n-1), 2*(n-1)+1):

        if y % 2 == 0 and (abs(y//2)+abs(x)) < n:
            print(chr(abs(y//2)+abs(x)+ord('a')),end = " ")
        else:
            print("-", end = " ")
    print()







