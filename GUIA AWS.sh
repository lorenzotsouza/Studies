// IAM
É a ferramenta utilizada para criação, configuração e administração
de logins na AWS.
Ao abrir o dashboard do IAM, teremos as opções User groups, para criar grupos. User, para criar usuários
e adminsitrar as permissões que os mesmos tem.

// Configuração da AWS CLI
Abra o GIT bash, digite:
$ aws
Verifique se o executável está correto. agora digite:
$ aws configure
Irá solicitar a access key e sua secret access key.
Irá lhe perguntar o nome padrão da sua região. [ sa-east-1 (são paulo) ]
Formato padrão: json
Agora digite:
$ aws iam list-users
Os usuários existentes serão listados.
Concluimos que foi instalado com sucesso ao obter o retorno de todos os usuários.

* os comandos de terminal do linux funcionam no GIT bash e na AWS *