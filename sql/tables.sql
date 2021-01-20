CREATE TABLE users(
       id int NOT NULL primary key AUTO_INCREMENT comment 'primary key',
       name varchar(255) NOT NULL,
       email varchar(255) NOT NULL,
       password varchar(255) NOT NULL,
       role int NOT NULL,
       created_time DATETIME COMMENT 'created tiem',
       updated_time DATETIME COMMENT 'updated tiem'
);

CREATE TABLE roles(
       id int NOT NULL primary key AUTO_INCREMENT comment 'primary key',
       role varchar(255) NOT NULL,
       created_time DATETIME COMMENT 'created tiem',
       updated_time DATETIME COMMENT 'updated tiem'
);

CREATE TABLE posts(
       id int NOT NULL primary key AUTO_INCREMENT comment 'primary key',
       user int NOT NULL,
       title varchar(255) NOT NULL,
       content varchar(255) NOT NULL,
       created_time DATETIME COMMENT 'created tiem',
       updated_time DATETIME COMMENT 'updated tiem'
);

alter table
       users
add
       foreign key(role) references roles(id);

alter table
       posts
add
       foreign key(user) references users(id);