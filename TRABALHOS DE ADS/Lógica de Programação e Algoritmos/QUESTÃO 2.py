print ('Bem vindo a pizzaria do Lorenzo Teixeira de Souza RU:3959991\n')

# Cardápio.
print ('                           Cardápio\n')

print ("|  Cod  | |      Sabor      |  |           Valor por tamanho            |")

print ("|  21   | |    Napolitana   |  |  Média - R$ 20,00 / Grande - R$ 26,00  |")

print ("|  22   | |    Margherita   |  |  Média - R$ 20,00 / Grande - R$ 26,00  |")
 
print ("|  23   | |    Calabresa    |  |  Média - R$ 25,00 / Grande - R$ 32,50  |")

print ("|  24   | |    Toscana      |  |  Média - R$ 30,00 / Grande - R$ 39,00  |")

print ("|  25   | |    Portuguesa   |  |  Média - R$ 30,00 / Grande - R$ 39,00  |")   

valorTotal=0

opcao777=1

while(opcao777==1):

   codigo = int ( input ('\nDigite o número do sabor escolhido: '))  

# Sempre que for escolhido mais um sabor, o valor total irá aumentando.
   if codigo == 21:

       valorTotal += 20

       print ('Você pediu uma Pizza sabor Napolitana.')

   elif codigo == 22:

       valorTotal += 20

       print ('Você pediu uma Pizza sabor Margherita.')

   elif codigo == 23:

       valorTotal += 25

       print ('Você pediu uma Pizza sabor Calabresa.')

   elif codigo == 24:

       valorTotal += 30

       print ('Você pediu uma Pizza sabor Toscana.')

   elif codigo == 25:

       valorTotal += 30

       print ('Você pediu uma Pizza sabor Portuguesa.')

   else:

       print ('Este número de sabor não existe, digite um número válido')

       continue

   opcao777 = int (input ('Deseja fazer um novo pedido?\n1 - SIM\n0 - NÃO\n'))

# Cálculo final.  
print ('O total a ser pago é: R$ {:.2f}'.format(valorTotal))