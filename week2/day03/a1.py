#https://www.hackerrank.com/challenges/find-second-maximum-number-in-a-list/problem

n = int(input())
arr = map(int, input().split())

arr = list(set(list(arr)))
ar = len(arr)
arr = sorted(arr)
print(arr[ar-2])
    