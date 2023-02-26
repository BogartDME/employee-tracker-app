INSERT INTO department (title)
VALUES ( "defense"),
       ( "maintenence"),
       ( "lord vaders entourage"),
       ( "laundry");

INSERT INTO roles (title, salary, department_id)
VALUES ("stormtrooper", 30000.00, 1),
       ("tie fighter pilot", 40000.00, 1),
       ("gunner", 25000.00, 1),
       ("droid repair", 30000.00, 2),
       ("compactor services", 24000.00, 2),
       ("console repair", 30000.00, 2),
       ("personal armor buffer", 40000.00, 3),
       ("bacta bath operator", 28000.00, 3),
       ("respitory therapist", 50000.00, 3),
       ("armor polisher", 20000.00, 3),
       ("wash/dryer operator", 20000.00, 4),
       ("carbon hole repair", 24000.00, 4);

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES ("Charles", "Beatty", 3, NULL),
       ("Yon", "Bermudez", 2, NULL),
       ("Denart", "Ifurung", 8, NULL ), 
       ("Jerry", "Mccarty", 11, NULL),
       ("Kevin", "Nova", 1, 101),
       ("Darren", "Ifurung", 4, 102),
       ("Melany", "Pietrowski", 5, NULL),
       ("Vincent", "Wells", 9, 103), 
       ("Calvin", "Whitaker", 12, 104),
       ("Jason", "Adams", 11, NULL),
       ("Tim", "Whitaker", 10, NULL),
       ("Aaron", "Murtaugh", 7, NULL),
       ("Charles", "Warden", 6, NULL),
       ("Michael", "Smith", 2, NULL),
       ("Antony", "Rodriguez", 5, NULL),
       ("Knick", "Byerlee", 4, NULL),
       ("Robert", "Mahon", 3, NULL),
       ("Justin", "Redeker", 1, NULL),
       ("Gerry", "Brown", 1, NULL),
       ("Douglas", "Pietrowski", 3, NULL),
       ("Aaron", "Wells", 8, NULL);


