/*
app.post("/players/", async (request, response) => {
  const playerDetails = request.body;
  let { player_Id, player_Name, jersey_Number, role_ } = playerDetails;

  const updatePlayerQuery = ` INSERT INTO cricket_team (playerId, playerName, jerseyNumber, role)
    VALUES ( ${player_Id}, '${player_Name}', ${jersey_Number}, '${role_})'`;

  const dbresponse = await db.run(updatePlayerQuery);
  response.send(dbresponse);
});

app.get("/players/:playerId/", async (request, response) => {
  let { playerId } = request.params;
  const getPlayerQuery = ` SELECT * FROM cricket_team WHERE playerId = playerId`;
  const playersArray = await db.get(getPlayerQuery);
  response.send(playersArray);
});

app.put("/players/:playerId/", async (request, response) => {
  let { playerId } = request.params;
  let playerDetails = request.body;

  let { playerId, playerName, jerseyNumber, role } = playerDetails;

  const updatePlayerQueryNew = ` UPDATE  cricket_team
    SET
    playerName = ${playerName}
    jerseyNumber = ${jerseyNumber},
    role = '${role})'
    WHERE 
    playerId = ${playerId}`;
  await db.run(updatePlayerQueryNew);
  response.send("player updated successfully");
});

app.delete("/players/:playerId/", async (request, response) => {
  let { playerId } = request.params;
  const deleteQuery = ` DELETE FROM cricket_team WHERE playerId = playerId`;
  await db.run(deleteQuery);
  response.send("player deleted");
});

module.exports = app;*/
