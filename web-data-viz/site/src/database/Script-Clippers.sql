CREATE DATABASE Clippers;

USE Clippers;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	email VARCHAR(45),
	senha VARCHAR(45));
    

SELECT * FROM usuario;
-- CREATE TABLE previsoes (idPrevisoes INT PRIMARY KEY AUTO_INCREMENT,placar VARCHAR(45),nomeTime VARCHAR(45),fkUsuario INT,FOREIGN KEY (fkUsuario) REFERENCES usuario(id),fktimeCampeao INT,FOREIGN KEY (fktimeCampeao) REFERENCES timeCampeao(id));

