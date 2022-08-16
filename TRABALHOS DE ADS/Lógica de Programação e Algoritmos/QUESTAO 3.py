print('Bem vindo ao restaurante do Lorenzo Teixeira de Souza RU:3959991\n')

#início da def volumeFeijoada.
def volumeFeijoada():
    while True:
      print("Menu volume de feijoada")
      try:
        volumeF = int ( input ('Digite o volume (em ml) que deseja de feijoada: ') )
        if 300 <= volumeF <= 5000:
          return volumeF * 0.08
        else:
            print('Não aceitamos porções menor que 300 ml e maior que 5000 ml \nDigite novamente uma quantidade válida.')
            continue
      except:
        print('Você digitou o volume com valor não numérico \nPor favor, digite novamente.')
        continue
# fim da def volumeFeijoada.

#início da def opcaoFeijoada.
def opcaoFeijoada():
    while True:
     print("Menu opcao de feijoada")
     try:
        opcao = ( input ('Selecione a opção: \nb - Básica  (Feijão + paiol + costelinha)\np - Premium (Feijão + paiol + costelinha + partes de porco)\ns - Suprema (Feijão + paiol + costelinha + partes do porco + charque + calabresa + bacon)\n'))
        if(opcao == 'b'):
         return 1
        elif(opcao == 'p'):
         return 1.25
        elif(opcao == 's'):
         return 1.5
        else:
            print('Não aceitamos a opção inserida. Digite novamente uma opção válida.')
            continue
     except:
       print('Você digitou uma opção que não existe. \nPor favor, digite novamente.')
       continue
# fim da def opcaoFeijoada.

#início da def acompanhamentoFeijoada.
def acompanhamentoFeijoada():
    while True:
     print("Menu acompanhamento da feijoada")
     try:
        acompanhamento = ( input ('Selecione o acompanhamento: \n0 - Não desejo mais acompanhamentos (encerrar pedido)\n1 - 200g de arroz\n2 - 50g de farofa especial\n3 - 100g de couve cozida\n4 - 1 laranja descascada\n'))
        if(acompanhamento == '0'):
         return 0
        elif(acompanhamento == '1'):
         return 5
        elif(acompanhamento == '2'):
         return 6
        elif(acompanhamento == '3'):
         return 7
        elif (acompanhamento == '4'):
            return 3
        else:
            print('Você digitou um acompanhamento que não existe. Digite novamente uma opção válida.')
            continue
     except:
       print('Você digitou um acompanhamento que não existe.\nPor favor, digite novamente.')
       continue
# fim da def acompanhamentoFeijoada.

#cálculo final.
v = volumeFeijoada()
o = opcaoFeijoada()
a = acompanhamentoFeijoada()
total = (v * o * a);

print('O total a pagar é de: R$ {:.2f}'.format(total))