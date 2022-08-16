print ('Bem vindo a pizzaria do Lorenzo Teixeira de Souza RU:3959991\n')

#cardápio.
print ('**************Cardápio**************\n')

print ("|Cod| |  Sabor       |  |   Valor  |")

print ("| 1 | |  Queijo      |  |  R$1,00  |")

print ("| 2 | |  Carne       |  |  R$10,00 |")

print ("| 3 | |  Calabresa   |  |  R$8,00  |")

print ("| 4 | |  Presunto    |  |  R$6,00  |")

print ("| 5 | |  Milho       |  |  R$3,00  |")

print ("| 6 | |  Chocolate   |  |  R$5,00  |")

print ("| 7 | |  Morango     |  |  R$7,00  |")   

valorTotal=0

opcao777=1

while(opcao777==1):

   codigo = int ( input ('\nDigite o número do sabor escolhido: '))  

#sempre que for escolhido mais um sabor, o valor total irá aumentando.
   if codigo == 1:

       valorTotal += 1

       print ('Você pediu uma Pizza sabor Queijo, o valor fica R$1,00')

   elif codigo == 2:

       valorTotal += 10

       print ('Você pediu uma Pizza sabor Carne, o valor fica R$10,00')

   elif codigo == 3:

       valorTotal += 8

       print ('Você pediu uma Pizza sabor Calabresa, o valor fica R$8,00')

   elif codigo == 4:

       valorTotal += 6

       print ('Você pediu uma Pizza sabor Presunto, o valor fica R$6,00')

   elif codigo == 5:

       valorTotal += 3

       print ('Você pediu uma Pizza sabor Milho, o valor fica R$3,00')

   elif codigo == 6:

       valorTotal+=5

       print ('Você pediu uma Pizza sabor Chocolate, o valor fica R$5,00')

   elif codigo == 7:

       valorTotal+=7

       print ('Você pediu uma Pizza sabor Morango, o valor fica R$7,00')

   else:

       print ('Este número de sabor não existe, digite um número válido')

       continue

   opcao777 = int (input ('Deseja fazer um novo pedido?\n1 - SIM\n0 - NÃO\n'))

#cálculo final.  
print ('O total a ser pago é: R$ {:.2f}'.format(valorTotal))