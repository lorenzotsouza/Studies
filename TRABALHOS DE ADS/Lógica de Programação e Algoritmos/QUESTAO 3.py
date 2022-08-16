print('Bem vindo ao restaurante do Lorenzo Teixeira de Souza RU:3959991\n')

#não consigo fazer o programa dizer que não pode menos de 300 e nem mais de 5000, ele está aceitando estes valores errados. Também está dizendo que não pode o valor 500, entre outros, de forma errônea.

#volume.
def volumeObjeto():
    while True:
     try:
        volume = int ( input ('Digite o volume (em ml) que deseja de feijoada: ') )
        v = volume
        if(v < 300):
          return 'Não é aceito.'
        elif(v >= 300) and (v <= 5000):
          return volume * 0.08
        elif(v > 5000):
          return 'Não é aceito.'
        else:
            print('Não aceitamos volume menor que 300 ml e maior que 5000 ml \nDigite novamente uma quantidade válida.')
            continue
     except ValueError:
        print('Você digitou o volume com valor não numérico \nPor favor, digite novamente.')
        continue

#opção.
def opcaoObjeto():
    while True:
     try:
        opcao = ( input ('Selecione a opção: \nb - Básica  (Feijão + paiol + costelinha)\np - Premium (Feijão + paiol + costelinha + partes de porco)\ns - Suprema (Feijão + paiol + costelinha + partes do porco + charque + calabresa + bacon)\n'))
        o = opcao
        if(o == 'b'):
         return 1
        elif(o == 'p'):
         return 1.25
        elif(o == 's'):
         return 1.5
        else:
            print('Não aceitamos a opção inserida. Digite novamente uma opção válida.')
            continue
     except ValueError:
       print('Você digitou uma opção que não existe. \nPor favor, digite novamente.')
       continue

#acompanhamento.
def acompanhamentoObjeto():
    while True:
     try:
        acompanhamento = ( input ('Selecione o acompanhamento: \n0 - Não desejo mais acompanhamentos (encerrar pedido)\n1 - 200g de arroz\n2 - 50g de farofa especial\n3 - 100g de couve cozida\n4 - 1 laranja descascada\n'))
        a = acompanhamento
        if(a == '0'):
         return 0
        elif(a == '1'):
         return 5
        elif(a == '2'):
         return 6
        elif(a == '3'):
         return 7
        elif (a == '4'):
            return 3
        else:
            print('Você digitou um acompanhamento que não existe. Digite novamente uma opção válida.')
            continue
     except ValueError:
       print('Você digitou um acompanhamento que não existe.\nPor favor, digite novamente.')
       continue

#problema no cálculo final, algumas combinações estão dando erro no código.
vol = volumeObjeto()
opc = opcaoObjeto()
aco = acompanhamentoObjeto()
total = (vol*opc*aco);

print('O total a pagar é de: R$ {:.2f}'.format(total))