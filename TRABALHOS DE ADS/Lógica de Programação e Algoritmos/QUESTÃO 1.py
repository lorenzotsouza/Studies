print ('Bem vindo a loja do Lorenzo Teixeira de Souza RU:3959991\n')

valororiginal = float (input ('Digite o valor do produto: R$ '))

quantidade = int (input ('Digite a quantidade do produto: '))

if 0 <= quantidade <= 4:

    desconto = 0

elif 5 <= quantidade <= 19:

    desconto = 0.03

elif 20 <= quantidade <= 99:

    desconto = 0.06

else:

    desconto = 0.10

# Cálculo final.
semdesconto = valororiginal * quantidade

comdesconto = semdesconto - semdesconto * desconto

# O valor com desconto não está aparecendo o desconto ao lado, para a pessoa ver quanto economizou.
print (' O valor sem desconto fica R$ {:.2f}'.format(semdesconto))

print (' O valor com desconto fica R$ {:.2f}'.format(comdesconto, desconto))

print ('Agradecemos a preferência!')