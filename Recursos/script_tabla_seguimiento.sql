create table seguimiento_pilotos(
	id int primary key auto_increment,
  username varchar(20),
  piloto varchar(20),
  foreign key (username) references usuarios(username) on delete cascade
)
