print ('Bem vindo a loja do Lorenzo Teixeira de Souza RU:3959991\n')

listaProdutos = []

#início da def cadastrarProduto.
def cadastrarProduto(codigo):
  print ('Você selecionou a opção de cadastrar produto.')
  print ('O código do produto é: {:0>3}'.format(codigo))
  nome = input ('Digite o nome do produto: ')
  fabricante = input ('Digite o fabricante do produto: ')
  valor = float ( input ('Digite o valor R$ do produto: '))
  dicionarioProdutos = {'codigo'   : codigo,
                     'nome' : nome,
                     'fabricante': fabricante,
                     'valor': valor}
  listaProdutos.append(dicionarioProdutos.copy())
#fim da def cadastrarProduto.
  
#início da def consultarProduto.
def consultarProdutos():
  while True:
    try:
      print ('Você selecionou a opção de consultar produtos.')
      opConsultar = int ( input ('Digite a opção desejada:\n1- Consultar todos os produtos\n2- Consultar produtos por código\n3- Consultar produtos por fabricante\n4- Retornar\n->'))
      if opConsultar == 1:
        print ('-' * 20)
        for produtos in listaProdutos:
            for key, value in produtos.items():
              print ('{} : {}'.format(key,value))
            print ('-' * 20)
      elif opConsultar == 2:
        print ('Você selecionou a opção produtos por código.')
        entrada = int ( input ('Digite o código: '))
        print ('-' * 20)
        for produtos in listaProdutos:
          if(produtos['codigo'] == entrada):
            for key, value in produtos.items():
              print ('{} : {}'.format(key,value))
            print ('-' * 20)
      elif opConsultar == 3:
        print ('Você selecionou a opção produtos por fabricante.')
        entrada = input ('Digite o fabricante: ')
        print ('-' * 20)
        for produtos in listaProdutos:
          if(produtos['fabricante'] == entrada):
            for key, value in produtos.items():
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
#fim da def consultarProduto.
      
#início da def removerProduto.
def removerProduto():
    print ('Você selecionou o remover produto.')
    entrada = int ( input ('Digite o código do produto que deseja remover: '))
    for produtos in listaProdutos:
      if(produtos['codigo'] == entrada):
        listaProdutos.remove(produtos)
    else:
      print ('Você removeu o produto.')
registroProdutos = 0
while True:
    try:
      opcao = int ( input ('Digite a opção desejada:\n1- Cadastrar produtos\n2- Consultar produtos\n3- Remover produtos\n4- Sair\n->'))
      if opcao == 1: 
        registroProdutos = registroProdutos + 1
        cadastrarProduto(registroProdutos)
      elif opcao == 2:
        consultarProdutos()
      elif opcao == 3:
        removerProduto()
      elif opcao == 4:
        print ('Programa finalizado.')
        break
      else:
        print ('Digite somente uma das opções do Menu.')
        continue
    except ValueError:
        print ('Por favor, digite um número válido.')
#fim da def removerProduto.