# Diagrama de relaciones - RPG Inventory System

```mermaid   

erDiagram
    PLAYER {
        string playerName
        int level
    }
    ITEM {
        string type
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







