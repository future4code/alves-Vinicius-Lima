# EXERCÍCIO 05
 
 CREATE TABLE Movie (
 id VARCHAR(255) PRIMARY KEY,
 title VARCHAR(255) NOT NULL UNIQUE,
 synopsis TEXT NOT NULL,
 release_Date DATE NOT NULL,
 rating INT NOT NULL
 );
 
 #a) *Escreva a query que cria essa tabela. Para sinopse, 
 #    utilize o tipo `TEXT`, pesquise sobre ele se precisar. 
 #    Explique a query resumidamente.*

#     Crie 4 filmes com as seguintes informações:*

# 1-
	INSERT INTO Movie (id,title,synopsis,release_Date,rating)
    VALUES(
     001,
     "Se Eu Fosse Você",
     "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
     "2006-01-06",
     7
    );
    
# 2- 
	INSERT INTO Movie (id,title,synopsis,release_Date,rating)
    VALUES(
     002,
     "Doce de mãe",
     "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
     "2012-12-27",
     10
    );
    
# 3-
	INSERT INTO Movie (id,title,synopsis,release_Date,rating)
    VALUES(
     003,
     "Dona Flor e Seus Dois Maridos",
     "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
     "2017-11-02",
     8
    );
    
# 4-
	INSERT INTO Movie (id, title, synopsis, release_Date, rating) 
	VALUES(
	 004,
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);

#---------------------------------------------------------------------------------------------------------------------
# EXERCÍCIO 06 

#a) Retorne o id, título e avaliação a partir de um id específico;

SELECT id,title,rating FROM Movie 
WHERE id = 002;
#----------------------------------------------------------------------------------------------------------
#b) Retorne um filme a partir de um nome específico;

SELECT * FROM Movie
WHERE title = "Deus é Brasileiro";
#----------------------------------------------------------------------------------------------------------
#c) Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`

SELECT id,title,synopsis FROM Movie
WHERE rating >= 7;
#-----------------------------------------------------------------------------------------------------------
# EXERCÍCIO 07

#Escreva uma query que:

#a) Retorna um filme cujo título contenha a palavra `vida`

SELECT * FROM Movie
WHERE (title LIKE "%vida%");
#-----------------------------------------------------------------------------------------------------
#b) Realize a pesquisa de um filme, ou seja: 
#   pesquise se o termo de busca está contido no título ou na sinopse. 
#   Utilize qualquer `TERMO DE BUSCA` para exemplificar.

SELECT * FROM Movie
WHERE (title LIKE "%doce%" OR synopsis LIKE "%férias%");
#-------------------------------------------------------------------------------------------------------
#c) Procure por todos os filmes que já tenham lançado

SELECT * FROM Movie
WHERE release_Date <= "2022-08-22";
#------------------------------------------------------------------------------------------------------
#d) Procure por algum filme que já tenha lançado, com o termo de busca 
#   contido no título ou sinopse e com a avaliação maior do que `7`.

SELECT * FROM Movie
WHERE (release_Date <= "2022-08-22" AND title LIKE "%Deus%" OR synopsis LIKE "%casada%" AND rating > 7);






















