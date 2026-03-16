# Diagrama de relaciones - RPG Inventory System

```mermaid
CREATE TABLE MAP (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    region VARCHAR(100),
    x_coordinate VARCHAR(50),
    y_coordinate VARCHAR(50)
);

CREATE TABLE PLAYER (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    birthdate DATE,
    email VARCHAR(100),
    level INT,
    password VARCHAR(100),
    map_id INT,
    FOREIGN KEY (map_id) REFERENCES MAP(id)
);

CREATE TABLE INVENTORY (
    id INT PRIMARY KEY,
    capacity INT,
    player_id INT,
    FOREIGN KEY (player_id) REFERENCES PLAYER(id)
);

CREATE TABLE ITEM (
    id INT PRIMARY KEY,
    type VARCHAR(50),
    name VARCHAR(100),
    damage INT,
    durability INT,
    effect VARCHAR(100),
    duration INT,
    inventory_id INT,
    map_id INT,
    FOREIGN KEY (inventory_id) REFERENCES INVENTORY(id),
    FOREIGN KEY (map_id) REFERENCES MAP(id)
);
    
```







