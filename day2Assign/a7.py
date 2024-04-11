# 7) accept numbers till user enters 0 and display the total of all the numbers entered.

total = 0
while True:

    number = int(input("Enter the Number: "))
    if number == 0:
        break
    total+=number
print("Total Number is: ", total)