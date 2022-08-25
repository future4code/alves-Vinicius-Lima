CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
-- a) Explique o que é uma chave estrangeira
-- R. É o campo que estabelece uma relação entre duas tabelas.
--------------------------------------------------------------------------------------------------------------
-- b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes
INSERT INTO Rating (id,comment,rate,movie_id)
VALUES (
	001,
    "Muito violento",
    4.5,
    1
);
-------------------------------------------------------------------------------------------------------------
-- c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido).
--    Anote e explique o resultado da query.
INSERT INTO Rating (id,comment,rate,movie_id)
VALUES(
	002,
    "Muito Bom!",
    8.5,
    8
);
-- R. Não criou porque não tem nenhum filme com o ID inserido.
--------------------------------------------------------------------------------------------------------------
-- d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
ALTER TABLE Movie DROP COLUMN rating;
--------------------------------------------------------------------------------------------------------------
-- e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
DELETE FROM Movie
WHERE title = "Se Eu Fosse Você";
-- R. Não deu para apagar pelo fato de ter um comentátio, e uma avaliação sobre o filme
--    vindo de outro lugar, para que pudesse dar certo, eu teria que apagar primeiro 
--    a lista do comentário e avaliação para depois apagar o filme.









