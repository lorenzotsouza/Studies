// CREATE DATABASE + nome, cria o banco de dados.
CREATE DATABASE escola;

// DROP DATABASE + nome, deleta o banco de dados.
DROP DATABASE escola;

// USE + nome, seleciona o banco de dados para receber os comandos.
USE escola;

// CREATE TABLE + nome, cria uma tabela.
// INTEGER = números inteiros, positivo ou negativos.
// TEXT = uma string.
// DATE = a data em ANO-MES-DIA (YYYY-MM-DD)
// REAL = valor decimal.
CREATE TABLE estudantes (
   id INTEGER PRIMARY KEY,
   nome TEXT,
   quantidade INTEGER
);

// VARCHAR() permite apenas a quantidade de caracteres informados dentro do parenteses.
//nome VARCHAR(15);

// SELECT + * ou nome específico, seleciona quais dados desejamos marcar para um comando.
// FROM indica de onde queremos os dados.
SELECT * FROM estudantes; ( irá selecionar tudo da tabela estudantes )

// INSERT INTO insere dados na tabela informada.
// VALUES inserimos estes dados entre parenteses.
INSERT INTO estudantes VALUES (id, nome, idade) 
(1, 'Lorenzo Souza', 90);

// ALTER TABLE permite alterar os dados de uma tabela, ALTER TABLE + nome da tabela.
ALTER TABLE estudantes 
// ADD COLUMN ou ADD ROW adiciona uma coluna ou linha respectivamente na tabela.
ADD COLUMN twitter_handle TEXT; 
ADD ROW twitter_handle TEXT; 
ALTER TABLE estudantes ADD COLUMN profissao VARCHAR(50);

// Permite que colunas sejam atualizadas com excessão das que possuem chave primária.
SET SQL_SAFE_UPDATES = 0;

// UPDATE atualiza uma tabela existente.
// SET indica o que desejamos adicionar.
// WHERE indica onde desejamos adicionar este dado.
UPDATE estudantes 
SET twitter_handle = '@lorenzotsouza' 
WHERE id = 4; 

// DELETE FROM = deleta o conteúdo do local escolhido.
// IS NULL = retorna verdadeiro quando o valor não existe (NULL), do contrário, retorna falso.
DELETE FROM estudantes 
WHERE twitter_handle IS NULL;

// ORDER BY = ordena os valores da coluna.
// SUM = soma quantidades.
// DESC = ordena do maior para o menor.
// ASC = ordena do menor para o maior.

// Exemplo de loja de tênis.
CREATE TABLE shoes (id INTEGER PRIMARY KEY, model TEXT, quantity INTEGER, price INTEGER, quality TEXT);
INSERT INTO shoes VALUES(1, "A", 10, 150, "old");
INSERT INTO shoes VALUES(2, "B", 15, 250, "not so good");
INSERT INTO shoes VALUES(3, "C", 25, 100, "good");
INSERT INTO shoes VALUES(4, "D", 10, 350, "new");
INSERT INTO shoes VALUES(5, "E", 10, 200, "good");
INSERT INTO shoes VALUES(6, "A", 20, 100, "poor");
INSERT INTO shoes VALUES(7, "B", 10, 150, "bad");
INSERT INTO shoes VALUES(8, "C", 30, 75, "bad");
INSERT INTO shoes VALUES(9, "D", 10, 150, "bad");
INSERT INTO shoes VALUES(10, "E", 10, 150, "perfect");
INSERT INTO shoes VALUES(11, "A", 10, 100, "normal");
INSERT INTO shoes VALUES(12, "B", 20, 100, "normal");
INSERT INTO shoes VALUES(13, "C", 15, 100, "normal");
INSERT INTO shoes VALUES(14, "D", 20, 200, "normal");
INSERT INTO shoes VALUES(15, "E", 10, 150, "normal");

CREATE TABLE country(model TEXT PRIMARY KEY, country TEXT);
INSERT INTO country VALUES("A", "Brasil");
INSERT INTO country VALUES("B", "China");
INSERT INTO country VALUES("C", "Italy");
INSERT INTO country VALUES("D", "Germany");
INSERT INTO country VALUES("E", "USA");

// Selecionamos tudo e ordenamos por preço, do mais caro para o mais barato.
SELECT * FROM shoes
ORDER BY price DESC;

// Tabela para adicionar endereços.
CREATE TABLE enderecos (
   id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
   rua VARCHAR(100),
   numero VARCHAR(5),
   pessoa_id INT NOT NULL,
   FOREIGN KEY (pessoa_id) REFERENCES pessoas(id)
);

INSERT INTO enderecos (rua, numero, pessoa_id)
VALUES ("Rua dos Amores", "1372", "1");

INSERT INTO enderecos (rua, numero, pessoa_id)
VALUES ("Rua dos Amores", "1375", "2");

// INNER JOIN - trará todos resultados que tenha relação com o FROM informado.
SELECT pessoas.nome, endereços.*
FROM pessoas
JOIN enderecos ON pessoas.id = enderecos.pessoas_id;
// LEFT JOIN - trará todos os resultados que tenha relação com a tabela da esquerda.
// RIGHT JOIN - trará todos os resultados que tenha relação com a tabela da direita.

// Temos uma tabela com pessoas e seus salários e o analista
// deseja analisar os salários dessas pessoas mas,
// ele não entende de SQL e o nome da coluna/linha está estranho,
// utilizamos o ALIAS(AS) na nossa função, assim o resultado fica com o nome desejado. exemplo:
SELECT * FROM pessoas;
SELECT SUM(soldo) AS soma_dos_salarios FROM pessoas;