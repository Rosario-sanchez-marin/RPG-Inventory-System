// Function to get a player's level without their ID
async function getPlayerLevel(playerName) {
  const query = { "playerName": playerName };
  const projection = { "level": 1, "_id": 0 };

  // This is where you put the logic
  return await db.collection('players').findOne(query, { projection });
}

// Function to find players with a specific item type
async function getPlayersByItemType(itemType) {
  const query = { "inventory.type": itemType };
  
  return await db.collection('players').find(query).toArray();
}
