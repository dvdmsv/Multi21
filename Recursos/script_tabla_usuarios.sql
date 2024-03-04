create table usuarios(
	id int primary key auto_increment,
    username varchar(20) not null unique,
    password varchar(32) not null,
    admin boolean default false
)