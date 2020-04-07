
s1 = int(input("Enter s1 marks"))
s2 = int(input("Enter s2 marks"))
s3 = int(input("Enter s3 marks"))
s4 = int(input("Enter s4 marks"))
s5 = int(input("Enter s5 marks"))
perc = (s1 + s2 + s3 + s4 + s5)/5
if(perc >= 90):
    print("A")
elif(70 < perc < 90):
    print("B")
elif(50 < perc < 70):
    print("C")
elif(30 < perc < 50):
    print("D")
else:
    print("E")
