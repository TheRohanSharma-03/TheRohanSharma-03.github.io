# 8) accept a character and display whether it is upper case or lower case or not an alphabet.

char = input("Enter the text: ")

if char.isalpha():
    if char.islower():
        print("Charcter is Lower case: ")
    else:
        print("Character is Upercase")
else:
    print("Character is not an alphabet")