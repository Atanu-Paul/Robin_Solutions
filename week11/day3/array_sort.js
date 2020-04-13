const arr1=[-3,8,7,6,5,-4,3,2,1]
const arr2=[]
let min= arr1[0]
let pos;
var max=arr1[0]

for (i=0;i<arr1.length;i++){
  if(max<arr1[i]){
    max=arr1[i]
  }
}
for (var i=0;i<arr1.length;i++){
  for (let j=0;j<arr1.length;j++){
    if(arr1[j]!=''){
      if(min>arr1[j]){
        min=arr1[j]
        pos=j
      }
    }
  }
arr2[i]=min
arr1[pos]=''
min=max
}
console.log(arr2)
