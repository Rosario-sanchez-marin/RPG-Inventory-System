# Diagrama de relaciones - RPG Inventory System

```mermaid   

erDiagram
  PLAYER ||--o{ INVENTORY : owns
  INVENTORY ||--o{ ITEM : contains
  MAP ||--o{ ITEM : locates
  MAP ||--o{ PLAYER : hosts

  PLAYER {
    int id PK
    string name
    date birthdate
    string email
    int level
    string password
    int map_id FK
  }

  INVENTORY {
    int id PK
    int capacity
    int player_id FK
  }

  ITEM {
    int id PK
    string type
    string name
    int damage
    int durability
    string effect
    int duration
    int inventory_id FK
    int map_id FK
  }

  MAP {
    int id PK
    string name
    string region
    string x_coordinate
    string y_coordinate
  }
```







