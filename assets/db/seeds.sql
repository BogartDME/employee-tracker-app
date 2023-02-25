INSERT INTO department (id, name)
VALUES (1, "defense"),
       (2, "maintenence"),
       (3, "lord vader's entourage"),
       (4, "laundry");

INSERT INTO roles (id, title, salary)
VALUES (1, "stormtrooper", 30000.00);
       (2, "tie fighter pilot", 40000.00),
       (3, "gunner", 25000.00),
       (4, "droid repair", 30000.00),
       (5, "compactor services", 24000.00),
       (6, "console repair", 30000.00),
       (7, "personal armor buffer", 40000.00),
       (8, "bacta bath operator", 28000.00),
       (9, "respitory therapist", 50000.00),
       (10, "armor polisher", 20000.00),
       (11, "wash/dryer operator", 20000.00),
       (12, "carbon hole repair", 24000.00);

INSERT INTO employee (id, first_name, last_name, roles_id, manager_id)
VALUES (1, "Charles", "Beatty", 3, NULL);
       (2, "Yon", "Bermudez", 2, NULL ),
       (3, "Denart", "Ifurung", 8, NULL ), 
       (4, "Jerry", "Mccarty", 11, 1),
       (5, "Kevin", "Nova", 1, 1),
       (6, "Darren", "Ifurung", 4),
       (7, "Melany", "Pietrowski", 5),
       (8, "Vincent", "Wells", 9), 
       (9, "Calvin", "Whitaker"),
       (10, "Jason", "Adams"),
       (11, "Tim, Whitaker"),
       (12, "Aaron", "Murtaugh"),
       (13, "Charles", "Warden"),
       (14, "Michael", "Smith"),
       (15, "Antony", "Rodriguez"),
       (16, "Knick", "Byerlee"),
       (17, "Robert", "Mahon"),
       (18, "Justin", "Redeker"),
       (19, "Gerry", "Brown"),
       (20, "Douglas", "Pietrowski"),
       (21, "Aaron", "Wells");


