#2) Write the code for binary search without using loops. [optional]

def binarySearch(arr,start_index,last_index,num):
  mid=int((start_index+last_index)/2)

  if(start_index>last_index and arr[mid]!=num):
    print("Error")
  elif (num>arr[mid]):
    start_index=mid+1
    binarySearch(arr,start_index,last_index,num)
  elif (num<arr[mid]):
    last_index=mid-1
    binarySearch(arr,start_index,last_index,num)
  else:
    print('Number at Index:'+str(mid))

arr=[2,5,8,1,4,9]
print(arr)
arr.sort()
print(arr)
num=8
start_index=0
last_index=len(arr)-1
binarySearch(arr,start_index,last_index,num)
© 2020 GitHub, Inc.