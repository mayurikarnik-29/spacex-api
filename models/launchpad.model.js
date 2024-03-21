var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ImageSchema = new Schema({
  large: {
    type: String,
  },
  small: {
    type: String,
  },
});
var LaunchpadSchema = new Schema(
  {
    details: {
      type: String,
    },
    full_name: {
      type: String,
    },
    id: {
      type: String,
    },
    images: {
      type: ImageSchema,
    },
    latitude: {
      type: Number,
    },
    launch_attempts: {
      type: Number,
    },
    launch_successes: {
      type: Number,
    },
    launches: [{ type: String }],
    locality: {
      type: String,
    },
    longitude: {
      type: Number,
    },
    name: {
      type: String,
    },
    region: {
      type: String,
    },

    rockets: [{ type: String }],
    status: {
      type: String,
    },
    timezone: {
      type: String,
    },
  },
  { collection: "launchpad" },
);

module.exports = mongoose.model("Launchpad", LaunchpadSchema);
