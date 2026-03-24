# Diagrama de relaciones - RPG Inventory System

```mermaid   

erDiagram
    PLAYER {
        string player_id PK
        string playerName
        int level
    }
    ITEM {
        string item_id PK
        string type
        string player_id FK
    }
    SWORD {
        int damage
        int durability
    }
    POTION {
        string effect
        int duration
    }
    MAP {
        string coordinates
    }

    PLAYER ||--o{ ITEM : has
    ITEM ||--|{ SWORD : is_a
    ITEM ||--|{ POTION : is_a
    ITEM ||--|{ MAP : is_a

```







