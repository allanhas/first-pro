n=int(input())
list=[]
if n < 10:
    n=n*10
    while True:
        a=n//10
        b=n%10

        c=a+b

        d=int(str(b)+str(c))
        list.append(d)

        if a!=d:
            n=d


            a=n//10
            b=n%10

            c=a+b

            d=int(str(b)+str(c))
            list.append(d)


        else: 
            break
    print(len(list))

else:
    while True:
        a=n//10
        b=n%10

        c=a+b

        d=int(str(b)+str(c))
        list.append(d)

        if a!=d:
            n=d

            a=n//10
            b=n%10

            c=a+b

            d=int(str(b)+str(c))
            list.append(d)

        
            




        else: 
            break
    print(len(list))





