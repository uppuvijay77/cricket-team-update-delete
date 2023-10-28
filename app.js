const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();
app.use(express.json());
const dbPath = path.join(__dirname, "cricketTeam.db");
let db = null;
const initiazeDBAndServer = async () => {
  try {
    db = await open({
      fileName: dbPath,
      driver: sqlite3.Database,
      console.log(driver);
    });
    
    app.listen(3000, () => {
      console.log("Server is running at http://localhost:3000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};
initiazeDBAndServer();

app.get("/players/", async (request, response) => {
  const getPlayerQuery = ` SELECT * FROM cricket_team ORDER BY player_id;`;
  const playersArray = await db.all(getPlayerQuery);
  response.send(playersArray);
});
