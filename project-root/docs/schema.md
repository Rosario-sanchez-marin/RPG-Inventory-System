# Diagrama de relaciones - RPG Inventory System

```mermaid   
```mermaid
erDiagram
  PLAYER ||--o{ INVENTORY : owns
  INVENTORY ||--o{ ITEM : contains
  MAP ||--o{ ITEM : locates
  MAP ||--o{ PLAYER : hosts

  PLAYER {
    int id
    string name
    int birthdate
    string email
    int level
    int password
  }

  INVENTORY {
    int id
    int capacity
  }

  ITEM {
    int id
    string type
    string name
    int damage
    int durability
    string effect
    int duration
  }

  MAP {
    int id
    string name
    string region
    string x-coordinate
    string y-coordinate
  }
```







