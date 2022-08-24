SELECT * FROM `alves-vinicius-lima`.Actor;
SET SQL_SAFE_UPDATES = 0;
------------------------------------------------------------------------------------------------
-- EXERCÍCIO 01
-- Leia os comandos abaixo e indique o que eles fazem. Não os rode nas tabelas desse projeto! 
-- Explique o que elas fariam se fossem rodadas.  
-- Você, provavelmente, terá que fazer algumas pesquisas para responder

-- a)ALTER TABLE Actor DROP COLUMN salary;
-- R. Esse comando iria apagar a coluna de salários dos atores.
-----------------------------------------------------------------------------------------------------
-- b)ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
-- R. Esse comando iria alterar o nome GENDER para SEX na coluna do gênero.
-----------------------------------------------------------------------------------------------------
-- c)ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
-- R. Esse comando só iria mudar a quantidade de caracteres que poderia ser inserido de 6 para 255.
-----------------------------------------------------------------------------------------------------
-- d)Agora,  altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
------------------------------------------------------------------------------------------------------
-- EXERCÍCIO 02

-- a)Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`
UPDATE Actor
SET name = "Patríck", birth_date = "1982-03-27"
WHERE id= "003";
-------------------------------------------------------------------------------------------------------
-- b)Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`.
--   Então, escreva outra query para voltar ao nome anterior.
UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "006";
----------------------------------
UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "006"; 
---------------------------------------------------------------------------------------------------------
-- c)Escreva uma query que atualize todas as informações do ator com o id `005`
UPDATE Actor
SET name = "Fábio Santos" , salary = 8000000, birth_date = "1995-06-24", gender = "male"
WHERE id = "005";
----------------------------------------------------------------------------------------------------------
-- d)Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo).
--   Teste, anote e explique o resultado.
UPDATE Actor
SET name = "Fábio Santos"
WHERE id = "010";
-- R. Deu certo, só que na tabela não aparece nada, não entendi muito bem o porquê isso acontece.
----------------------------------------------------------------------------------------------------------
-- EXERCÍCIO 03

-- a)Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
-----------------------------------------------------------------------------------------------------------------
-- b)Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000; 
-----------------------------------------------------------------------------------------------------------------
-- EXERCÍCIO 04

-- a)Escreva uma query que pegue o maior salário de todos os atores e atrizes
SELECT MAX(salary) FROM Actor;
-----------------------------------------------------------------------------------------------
-- b)Escreva uma query que pegue o menor salário das atrizes
SELECT MIN(salary) FROM Actor WHERE gender = "female";
-----------------------------------------------------------------------------------------------
-- c)Escreva uma query que pegue a quantidade de atrizes
SELECT COUNT(*) FROM Actor WHERE gender = "female";
-----------------------------------------------------------------------------------------------
-- d)Escreva uma query que pegue a soma de todos os salários
SELECT SUM(salary) FROM Actor;
-----------------------------------------------------------------------------------------------
-- EXERCÍCIO 05

-- a)Releia a última query. Teste-a. Explique o resultado com as suas palavras
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
-- R. Essa query me retorna a quantidade de pessoas baseado no gênero cadastrado.
---------------------------------------------------------------------------------------------------------------
-- b)Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
SELECT id,name FROM Actor ORDER BY name DESC;
---------------------------------------------------------------------------------------------------------------
-- c)Faça uma query que retorne todos os atores ordenados pelo salário
SELECT * FROM Actor
ORDER BY salary;
----------------------------------------------------------------------------------------------------------------
-- d)Faça uma query que retorne os atores com os três maiores salarios
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
----------------------------------------------------------------------------------------------------------------
-- e)Faça uma query que retorne a média de salário por gênero
SELECT AVG(salary),gender FROM Actor
GROUP BY gender;
-----------------------------------------------------------------------------------------------------------------
-- EXERCÍCIO 06















