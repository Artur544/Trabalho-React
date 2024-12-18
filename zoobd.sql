CREATE TABLE `proprietarios` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `nome` varchar(255) DEFAULT NULL,
    `email` varchar(255) DEFAULT NULL,
    `endereco` varchar(255) DEFAULT NULL,
    UNIQUE (email),
    PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `produtos` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `descricao` varchar(255) DEFAULT NULL,
    `quantidade` int(11) DEFAULT NULL,
    `valor` double DEFAULT NULL,
    `proprietario_id` integer NOT NULL,
    FOREIGN KEY (proprietario_id) references proprietarios(id),     
    PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;