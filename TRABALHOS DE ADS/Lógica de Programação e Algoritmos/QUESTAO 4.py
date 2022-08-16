print ('Bem vindo a loja do Lorenzo Teixeira de Souza RU:3959991\n')

#poderia ser adicionado uma opção que mostra uma lista com as peças já cadastradas.
listaPecas = []

#cadastrar peça.
def cadastrarPeca(codigo):
  print ('Você selecionou a opção de cadastrar peça.')
  print ('O código da peça é: {:0>3}'.format(codigo))
  nome = input ('Digite o nome da peça: ')
  fabricante = input ('Digite o fabricante da peça: ')
  valor = float ( input ('Digite o valor R$ da peça: '))
  dicionarioPecas = {'codigo'   : codigo,
                         'nome' : nome,
                         'fabricante': fabricante,
                         'valor': valor}
  listaPecas.append(dicionarioPecas.copy())

#consultar peça.
def consultarPeca():
  while True:
    try:
      print ('Você selecionou a opção de consultar peças.')
      opConsultar = int ( input ('Digite a opção desejada:\n1- Consultar todas as peças\n2- Consultar peças por código\n3- Consultar peças por fabricante\n4- Retornar\n-->'))
      if opConsultar == 1:
        print ('-' * 20)
        for pecas in listaPecas:
            for key, value in pecas.items():
              print ('{} : {}'.format(key,value))
            print ('-' * 20)
      elif opConsultar == 2:
        print ('Você selecionou a opção peças por código.')
        entrada = int ( input ('Digite o código: '))
        print ('-' * 20)
        for pecas in listaPecas:
          if(pecas['codigo'] == entrada):
            for key, value in pecas.items():
              print ('{} : {}'.format(key,value))
            print ('-' * 20)
      elif opConsultar == 3:
        print ('Você selecionou a opção peças por fabricante.')
        entrada = input ('Digite o fabricante: ')
        print ('-' * 20)
        for pecas in listaPecas:
          if(pecas['fabricante'] == entrada):
            for key, value in pecas.items():
              print ('{} : {}'.format(key,value))
            print ('-' * 20)
      elif opConsultar == 4:
        break
      else:
        print ('Por favor, digite somente o solicitado.')
        continue
    except ValueError:
      print ('Por favor, digite um número válido.')
      continue

#remover peça.
def removerPeca():
    print ('Você selecionou o remover peça.')
    entrada = int ( input ('Digite o código da peça que deseja remover: '))
    for pecas in listaPecas:
      if(pecas['codigo'] == entrada):
        listaPecas.remove(pecas)
    else:
      print ('Você removeu a peça.')
registroPecas = 0
while True:
    try:
      opcao = int ( input ('Digite a opção desejada:\n1- Cadastrar peças\n2- Consultar peças\n3- Remover peças\n4- Sair\n-->'))
      if opcao == 1: 
        registroPecas = registroPecas + 1
        cadastrarPeca(registroPecas)
      elif opcao == 2:
        consultarPeca()
      elif opcao == 3:
        removerPeca()
      elif opcao == 4:
        print ('Programa finalizado.')
        break
      else:
        print ('Digite somente uma das opções do Menu.')
        continue
    except ValueError:
        print ('Por favor, digite um número válido.')