INSERT INTO department (id, title)
VALUES (001, "defense"),
       (002, "maintenence"),
       (003, "lord vaders entourage"),
       (004, "laundry");

INSERT INTO roles (id, title, salary, department_id)
VALUES (001, "stormtrooper", 30000.00, 001),
       (002, "tie fighter pilot", 40000.00, 001),
       (003, "gunner", 25000.00, 001),
       (004, "droid repair", 30000.00, 002),
       (005, "compactor services", 24000.00, 002),
       (006, "console repair", 30000.00, 002),
       (007, "personal armor buffer", 40000.00, 003),
       (008, "bacta bath operator", 28000.00, 003),
       (009, "respitory therapist", 50000.00, 003),
       (010, "armor polisher", 20000.00, 003),
       (011, "wash/dryer operator", 20000.00, 004),
       (012, "carbon hole repair", 24000.00, 004);

INSERT INTO employee (id, first_name, last_name, roles_id, manager_id)
VALUES (001, "Charles", "Beatty", 003, NULL),
       (002, "Yon", "Bermudez", 002, NULL ),
       (003, "Denart", "Ifurung", 008, NULL ), 
       (004, "Jerry", "Mccarty", 011, 001, NULL),
       (005, "Kevin", "Nova", 001, 019),
       (006, "Darren", "Ifurung", 004, 016),
       (007, "Melany", "Pietrowski", 005, NULL),
       (008, "Vincent", "Wells", 009, NULL), 
       (009, "Calvin", "Whitaker", 0012, NULL),
       (010, "Jason", "Adams", 011, NULL),
       (011, "Tim, Whitaker", 010, NULL),
       (012, "Aaron", "Murtaugh", 007, NULL),
       (013, "Charles", "Warden", 006, NULL),
       (014, "Michael", "Smith", 002, 002),
       (015, "Antony", "Rodriguez", 005, NULL),
       (016, "Knick", "Byerlee", 004, NULL),
       (017, "Robert", "Mahon", 003, 001),
       (018, "Justin", "Redeker", 001, 019),
       (019, "Gerry", "Brown", 001, NULL),
       (020, "Douglas", "Pietrowski", 003, 001),
       (021, "Aaron", "Wells", 008, 003);


