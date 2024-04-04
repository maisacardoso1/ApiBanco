CREATE TABLE Chamado 
(	IdChamado int,
	DataChamado Date,
	NomeCliente Varchar(50),
	Descricao Varchar(100)
);

INSERT INTO Chamado VALUES
(1, '2023-09-21', 'Maria', 'Avalia��o Servi�o'),
(2, '2024-02-14', 'Pedro', 'Verificar Documentos');


SELECT * FROM Chamado