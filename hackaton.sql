create database hackaton ;
\c hackaton ;
create table levels(
	idlevels serial primary key ,
	name_level  varchar(30)
);
insert into levels values (1,'primaire') , (2,'secondaire') , (3,'lycee') , (4,'universitaire') ;
create table sexe(
	idsexe serial primary key ,
	name_sexe varchar(20)
);
insert into sexe values (1,'homme') , (2 , 'femme') ;
create table users(
    iduser serial primary key ,
    name_user varchar(30) ,
	prenom_user varchar(30),
    email varchar(30),
    mot_de_passe varchar(30),
	levels int  references levels(idlevels),
	sexe int references sexe(idsexe),
    naissance date ,
	photo varchar(40) ,
    connexion int 
);
insert into users values(default,'admin','admin','admin@gmail.com','0000',null,null,'2005-04-27','00.jpg',0);
insert into users values(default , 'navalona' , 'andy' , 'andyrakotonavalona0@gmail.com','ainss',4,1,'2005-05-27','00.jpg',0);

create table CATEGORIE(
    idcategorie serial primary key , 
	iduser int references users(iduser), 
	nom varchar(20)
) ;
insert into categorie values(default , 1 , ' sport') , (default , 1 , 'art') , (default , 1 , 'task') , (default , 1 , 'study') ; 
create table tache(
    idtache serial primary key ,
	nom varchar(20) ,
	iduser int references users(iduser),
	details varchar(60),
	couleur varchar(20),
	categorie int references categorie(idcategorie) ,  
	idstatus int ,
	etat int default 0
);
create table sous_tache(
    idsous_tache serial primary key ,
	nom varchar(20),        
	idtache int references tache(idtache), 
	details varchar(60),
	debut Timestamp,
	fin Timestamp ,
	estimation Timestamp
);
create table preference(
    idpreference serial primary key ,
    iduser int references users(iduser) ,
    THEME varchar(20) ,
    noti int default 0 
) ;	

create table pic 
(
	idtache int references tache(idtache),
	pic varchar(30)
);

select tache.idtache , tache.nom , tache.categorie , tache.couleur , tache.details , tache.etat , tache.idstatus , sous_tache.debut  from tache join sous_tache 
	on (tache.idtache = sous_tache.idtache) where sous_tache.nom = '%s%' or tache.nom like '%s%' or sous_tache.details like '%s%' or tache.details like '%s%'  
	
select * from categorie  where iduser = 1  ;
	


	

