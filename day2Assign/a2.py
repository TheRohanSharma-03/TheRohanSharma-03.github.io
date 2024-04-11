# 2)using switch ….case   display whether accepted character is vowel or not.

vowels = input("Enter thr alphabet: ")
alphabet = 'aeiouAEIOU'
if vowels in alphabet:
    print("Congratulation char is Vowel")
else:
    print("Try again!")