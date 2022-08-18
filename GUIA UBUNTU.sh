Ctrl + Alt + T = abre o terminal.
Ctrl + L = limpa o terminal.
Setas para cima e para baixo, mostra os comandos já digitados.
Shift + Ctrl + C = copia no terminal.
Shift + Ctrl + V = cola no terminal.

Lista de comandos:
man + comando = manual do comando.
whoami = nome do usuário.
~ = diretório home.
$ = usuário normal.
# = usuário root (admin).
pwd = mostra o diretório atual.
ls (listagem) = mostra as pastas do diretório atual.
ls -l = mostras a estrutura de permissões.
ls -A = mostra todos os arquivos ocultos.
cd (change directory) = muda a pasta que está o terminal.
Exemplo: ir para a pasta "Downloads" = tester@virtual-machine:~$ cd Downloads.
mkdir (make directory) = cria uma pasta.
Exemplo: tester@virtual-machine:~$ mkdir 'Games'
rmdir (remove directory) = deleta uma pasta.
Exemplo: tester@virtual-machine:~$ rmdir 'Games'
cp = copiar arquivos.
mv = mover arquivos.
rm = deletar arquivos.
# sudo + comando = executa o comando como administrador do sistema. (pedirá senha)
Exemplo: tester@virtual-machine:~$ sudo ifconfig
ifconfig = mostra o ip da máquina.
apt-get = gerenciamento de pacotes.
apt list --upgradable = mostra as atualizações disponíveis.
apt update = atualiza os pacotes do sistema.
apt full-upgrade = atualiza o sistema por completo, removendo, instalando e atualizando tudo.
ps = visualizar programas que estão sendo executados no sistema.