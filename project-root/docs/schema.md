# Diagrama de relaciones - RPG Inventory System

```mermaid   

erDiagram
    PLAYER {
        string player_id PK
        string playerName
        int level
    }
    INVENTORY {
        string item_id PK
        string type
        int quantity
        int damage
        int durability
        string effect
        int duration
    }

    PLAYER ||--o{ INVENTORY : has

```







