SELECT * FROM `alves-vinicius-lima`.Movie;

-----------------------------------------------------------------------------------------------------------------------

 --                                           FIM DA ATIVIDADE

-- *******************************************************************************************************************

--                                          INÍCIO DA ATIVIDADE  

-- ********************************************************************************************************************
-- EXERCÍCIO 06 - APROFUNDAMENDO-SQL

-- a)Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que
--   indique a data limite em que o filme será passado no cinema.
ALTER TABLE Movie ADD playing_limit_date DATE;
-----------------------------------------------------------------------------------------------------------------
-- b)Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, 
--   como, por exemplo, uma avaliação `8.5`.
ALTER TABLE Movie CHANGE rating rating DOUBLE;
-----------------------------------------------------------------------------------------------------------------
-- c)Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído.
SELECT * FROM `alves-vinicius-lima`.Movie;
-----------------------------------------------------------------
UPDATE Movie
SET playing_limit_date = "2020-08-19"
WHERE id = 2;
-----------------------------------------------------------------
UPDATE Movie
SET playing_limit_date = "2022-09-18"
WHERE id = 3;
---------------------------------------------------------------------------------------------------------------------
-- d)Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse 
--   filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.
DELETE FROM Movie WHERE id = "004";
----------------------------------------------
UPDATE Movie
SET synopsis = "Filme bacana."
WHERE id = "004";
-- R. O comando roda normalmente, mas não muda nada pelo fato de já ter excluido o filme com essa ID.
-----------------------------------------------------------------------------------------------------------------------

 --                                      FIM DA ATIVIDADE

-- *******************************************************************************************************************