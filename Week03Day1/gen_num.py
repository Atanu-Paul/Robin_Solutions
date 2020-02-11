#Write a Python script to generate and print a dictionary that contains a number (between 1 and n) in the form (x, x*x).
num=int(input("Enter a number :"))
dic=dict()
for i in range(1,num+1):
  dic[i]=i*i
print(dic)