CREATE DATABASE Clippers;

USE Clippers;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	email VARCHAR(45),
	senha VARCHAR(45));


create table timeCampeao (
	idtimeCampeao INT PRIMARY KEY AUTO_INCREMENT,
	nomeTimeCampeao VARCHAR(45)
);


CREATE TABLE previsoes (
	idPrevisoes INT PRIMARY KEY AUTO_INCREMENT,
	placar VARCHAR(45),
	nomeTime VARCHAR(45),
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
	fktimeCampeao INT,
	FOREIGN KEY (fktimeCampeao) REFERENCES timeCampeao(id)
);