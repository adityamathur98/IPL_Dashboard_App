const mongoose = require("mongoose");

const iplMatchesSchema = mongoose.Schema({
  id: String,
  team_banner_url: String,
  latest_match_details: Object,
  recent_matches: Array,
});

const matchDetails = mongoose.model(
  "iplMatches",
  iplMatchesSchema,
  "iplMatches"
);

module.exports = matchDetails;
