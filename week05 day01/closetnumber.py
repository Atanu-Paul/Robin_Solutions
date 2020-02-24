# https://www.hackerrank.com/challenges/closest-numbers/problem
def closestNumbers(arr):
    arr.sort()
    arr1 = []
    diff = 1000000000000001
    for i in range(1, len(arr)):
        d = abs(arr[i]-arr[i-1])
        if d < diff:
            arr1 = [arr[i-1], arr[i]]
            diff = d
        elif d == diff:
            arr1.extend([arr[i-1], arr[i]])

    return arr1


if __name__ == '__main__':
    #n = int(input())
    n = 4

    # arr = list(map(int, input().rstrip().split()))
    arr = [5, 4, 3, 2]

    result = closestNumbers(arr)
    print(result)
