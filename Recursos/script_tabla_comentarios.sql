create table comentarios_temporada_curso(
    id int PRIMARY key AUTO_INCREMENT,
    username varchar(20) not null,
    carrera int not null,
    texto varchar(200) not null,
    fecha varchar(20),
    eliminado boolean default false,
    FOREIGN KEY (username) REFERENCES usuarios(username) on DELETE CASCADE
);
