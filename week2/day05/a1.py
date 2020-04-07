# 1) Given a sorted array of integers A(0 based index) of size N, find the starting and ending position of a given integer B in array A.
# Your algorithm runtime complexity must be in the order of O(log n). Return an array of size 2, such that first element = starting position of B in A and second element = ending position of B in A, if B is not found in A return [-1, -1].

# Input 1:
#     A = [5, 7, 7, 8, 8, 10]
#     B = 8
# Output 1:
#     [3, 4]
# Explanation 1:
#     First occurence of 8 in A is at index 3
#     Second occurence of 8 in A is at index 4
#     ans = [3, 4]

# Input 2:
#     A = [5, 17, 100, 111]
#     B = 3
# Output 2:
#     [-1, -1]


#program

arr = []
n = int(input("Enter the number of elements:  "))
    

for i in range(0,n):
    ele = int(input("Enter the element:  "))
    arr.append(ele)
print(arr)


var_x = int(input("enter the number to be found:  "))
final_list = []

#for starting position:
for j in range(len(arr)):
    if arr[j] == var_x:
        final_list.append(j)


#for ending position:
for k in range(-(len(arr)),0,-1):
    if arr[k] == var_x:
        final_list.append(k)


if var_x  in arr:
    print(final_list)
else:
    print([-1,-1])

        
