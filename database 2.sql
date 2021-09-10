CREATE TABLE "koalas" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(30),
    "gender" varchar(1),
    "age" int,
    "ready_to_transfer" varchar(1),
    "notes" varchar (100)
);

INSERT INTO "koalas" ("name", "gender", "age", "ready_to_transfer", "notes")
VALUES('Scotty', 'M', 4, 'Y', 'Born in Guatemala'),
('Jean', 'F', 5, 'Y', 'Allergic to lots of lava'),
('Ororo', 'F', 7, 'N', 'Love listening to Paula (Abdul)'),
('Logan', 'M', 15, 'N', 'Loves the sauna'),
('Charlie', 'M', 9, 'Y', 'Favorite band is Nirvana'),
('Betsy', 'F', 4, 'Y', 'Has a pet iguana');