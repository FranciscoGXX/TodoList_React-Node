
create table public.USERS(
	ID SERIAL primary key,
	DATA_ENTERED DATE not null default CURRENT_TIMESTAMP,
	DELETED BOOLEAN not null default FALSE,
	USERNAME VARCHAR(255) unique not null,
	password VARCHAR(255) unique 
)


CREATE TABLE public.tasks (
	id_task serial NOT NULL,
	date_entered date DEFAULT CURRENT_TIMESTAMP NULL,
	deleted boolean DEFAULT FALSE NOT NULL,
	task_name varchar NOT NULL,
	status boolean DEFAULT FALSE NOT NULL,
	CONSTRAINT tasks_pk PRIMARY KEY (id_task)
);


ALTER TABLE public.tasks 
ADD COLUMN fk_user INTEGER;


alter table  public.tasks 
add constraint task_user
foreign key (fk_user)
references public.users(ID)