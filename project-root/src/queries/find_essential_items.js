// Database: rpg_game
// Collection: players
// Goal: Find high-level players and list their loot

const highLevelQuery = { 
    // filter
};

const inventoryProjection = { 
    // projection
};

// Execution hint for MongoDB Shell
db.players.find(highLevelQuery, inventoryProjection);
