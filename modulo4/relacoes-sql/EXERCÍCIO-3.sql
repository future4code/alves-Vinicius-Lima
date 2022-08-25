CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
-- a) Explique, com as suas palavras, essa tabela
-- R. Essa tabela criando uma movie_id do mesmo modo que foi criado na tabela Movie
--    da mesma forma o actor_id foi criado igual esta na tabela Actor.
--    E o FOREIGN está pegando esses atributos que foram criados nessa tabela e 
--    está referenciando (REFERENCES) com os atributos feitos nas tabelas mencionadas acima.
--    (Movie) e (Actor).
------------------------------------------------------------------------------------------------------------------
-- b) Crie, ao menos, 6 relações nessa tabela
INSERT INTO MovieCast(movie_id,actor_id)
VALUES (
	2,
    "004"
);
INSERT INTO MovieCast(movie_id,actor_id)
VALUES (
	1,
    "001"
);
INSERT INTO MovieCast(movie_id,actor_id)
VALUES (
	1,
    "003"
);
INSERT INTO MovieCast(movie_id,actor_id)
VALUES (
	2,
    "001"
);
INSERT INTO MovieCast(movie_id,actor_id)
VALUES (
	3,
    "001"
);
INSERT INTO MovieCast(movie_id,actor_id)
VALUES (
	3,
    "006"
);
-----------------------------------------------------------------------------------------------------------------
-- c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
INSERT INTO MovieCast(movie_id,actor_id)
VALUES(
	1,
    "009"
);
-- R. Não criou, porque o ID do ator não existe, essa aplicação passou por todos IDs dos atores,
--    e não encontrou nenhum "009", por isso não foi possível criar essa relação. 
------------------------------------------------------------------------------------------------------------------
-- d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query
DELETE FROM Actor 
WHERE name = "Juliana Paes";
-- R. Não apagou porque ela está relacionada a algum filme, para conseguir apagar essa atriz, teria que
--    apagar esse relacionamento que ela tem com o filme para depois conseguir apagar ela.
---------------------------------------------------------------------------------------------------------------------

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;


-- a) Explique, com suas palavras, a query acima. O que é o operador `ON`?
-- R. O operador ON é basicamente a condição ou de onde vai pegar as informações pedidas.
--------------------------------------------------------------------------------------------------------------------
-- b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.
SELECT title,Movie.id, Rating.rate FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;
















