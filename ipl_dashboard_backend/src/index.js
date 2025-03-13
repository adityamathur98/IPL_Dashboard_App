const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const iplTeams = require("../models/iplTeamsModel");
const matchDetails = require("../models/iplMatchesModel");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;

const initializeDbAndServer = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDb Connected");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on Port ${PORT}`);
    });
  } catch (error) {
    console.log(`Error connecting to mongodb ${error}`);
    process.exit(1);
  }
};

//get Teams Api
app.get("/ipl", async (request, response) => {
  try {
    const data = await iplTeams.findOne();

    if (data) {
      response.json(data.teams);
    } else {
      response.json({ message: "No Data Found" });
    }
  } catch (error) {
    response.status(500).json({ error: "Failed to Fetch IPL Teams Data" });
  }
});

//get Team Details
app.get("/ipl/:id", async (request, response) => {
  try {
    const teamId = request.params.id;
    const teamData = await matchDetails.findOne({ id: teamId });

    if (teamData) {
      response.json(teamData);
    } else {
      response.status(404).json({ message: "Team Not Found" });
    }
  } catch (error) {
    response.status(500).json({ error: "Failed to fetch IPL Team Details" });
  }
});

initializeDbAndServer();
