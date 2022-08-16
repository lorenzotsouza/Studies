print ('Bem vindo a loja do Lorenzo Teixeira de Souza RU:3959991\n')

valororiginal = float (input ('Digite o valor do produto: R$ '))

quantidade = int (input ('Digite a quantidade do produto: '))

if 0 <= quantidade < 10:

    desconto = 0

elif 10 <= quantidade < 100:

    desconto = 0.7

elif 100 <= quantidade < 1000:

     desconto = 0.70

else:

   desconto = 0.25

#cálculo final.
semdesconto = valororiginal * quantidade

comdesconto = semdesconto - semdesconto * desconto

#o valor com desconto não está aparecendo o desconto ao lado, para a pessoa ver quanto economizou.
print (' O valor sem desconto fica R$ {:.2f}'.format(semdesconto))

print (' O valor com desconto fica R$ {:.2f}'.format(comdesconto, desconto))

print ('Agradecemos a preferência!')