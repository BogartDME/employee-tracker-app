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
       (4, "Jerry", "Mccarty", 11, 1, NULL),
       (5, "Kevin", "Nova", 1, 19),
       (6, "Darren", "Ifurung", 4, 16),
       (7, "Melany", "Pietrowski", 5, NULL),
       (8, "Vincent", "Wells", 9, NULL), 
       (9, "Calvin", "Whitaker", 12, NULL),
       (10, "Jason", "Adams", 11, NULL),
       (11, "Tim, Whitaker", 10, NULL),
       (12, "Aaron", "Murtaugh", 7, NULL),
       (13, "Charles", "Warden", 6, NULL),
       (14, "Michael", "Smith", 2, 2),
       (15, "Antony", "Rodriguez", 5, NULL),
       (16, "Knick", "Byerlee", 4, NULL),
       (17, "Robert", "Mahon", 3, 1),
       (18, "Justin", "Redeker", 1, 19),
       (19, "Gerry", "Brown", 1, NULL),
       (20, "Douglas", "Pietrowski", 3, 1),
       (21, "Aaron", "Wells", 8, 3);


