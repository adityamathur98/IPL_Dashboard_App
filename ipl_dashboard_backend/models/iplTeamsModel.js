const mongoose = require("mongoose");

const iplTeamSchema = mongoose.Schema({
  teams: [
    {
      name: String,
      id: String,
      team_image_url: String,
    },
  ],
});

const iplTeams = mongoose.model("iplTeams", iplTeamSchema, "iplTeams");

module.exports = iplTeams;
