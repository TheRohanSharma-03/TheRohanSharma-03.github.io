# 5)accept marks from the user. Using if…….elif….  Else,  display whether result is  fail, pass,      second class , first class, Distinction etc.

sub1 = int(input("Enter the number of 1st Sub: "))
sub2 = int(input("Enter the number of 2nd Sub: "))
sub3 = int(input("Enter the number of 3rd Sub: "))
sub4 = int(input("Enter the number of 4th Sub: "))
sub5 = int(input("Enter the number of 5th Sub: "))

total = (sub1 + sub2 + sub3 + sub4 + sub5)
print(total)

percent = (total/500)*100
print(percent)

if percent >=60:
    print("Congratulation! You have a First Division, Distinction")
elif percent >=48 and percent <=59:
    print("You have a Second Divison")
elif percent >=35 and percent <=47:
    print("You have a Third Divison")
else:
    print("Fail, Better Luck Next Time!")