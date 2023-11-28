CREATE DATABASE Clippers;

USE Clippers;

CREATE DATABASE Clippers;

USE Clippers;

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45)
);

CREATE TABLE previsoes (
    idPrevisoes INT PRIMARY KEY AUTO_INCREMENT,
    placar VARCHAR(45),
    nomeTime VARCHAR(45),
    fkid INT,
    FOREIGN KEY (fkid) REFERENCES usuario(id)
);

CREATE TABLE timeCampeao (
    idtime INT PRIMARY KEY AUTO_INCREMENT,
    nometimecampeao VARCHAR(45),
    fkid INT,
    FOREIGN KEY (fkid) REFERENCES usuario(id),
    fkPrevisoes INT,
    FOREIGN KEY (fkPrevisoes) REFERENCES previsoes(idPrevisoes)
);

select * from usuario;
select * from previsoes;
select * from timeCampeao;

-- Exibir time favorito ao titulo de acordo com o usuario
SELECT usuario.id, usuario.nome, usuario.email, timeCampeao.idtime, timeCampeao.nometimecampeao
FROM usuario
JOIN timeCampeao ON usuario.id = timeCampeao.fkid;





