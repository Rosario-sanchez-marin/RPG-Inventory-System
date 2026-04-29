// Database: rpg_game
// Collection: players
// Goal: Find high-level players and list their loot

const highLevelQuery = { 
    // YOUR FILTER HERE
};

const inventoryProjection = { 
    // YOUR PROJECTION HERE
};

// Execution hint for MongoDB Shell
db.players.find(highLevelQuery, inventoryProjection);
