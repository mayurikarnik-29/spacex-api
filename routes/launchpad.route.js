module.exports = function (app) {
  var mongoose = require("mongoose"),
    Launchpad = mongoose.model("Launchpad");

  app.post("/launchpads", async (req, res) => {
    try {
      let { query, options } = req.body;
      if (!options?.page) options.page = 1;
      if (!options?.limit) options.limit = 10;
      const limit = parseInt(options.limit);
      const page = parseInt(options.page);
      const skip = (page - 1) * limit;

      const docs = await Launchpad.find().limit(limit).skip(skip);
      const totalDocs = await Launchpad.countDocuments();

      const previous_pages = page - 1;
      const next_pages = Math.ceil((totalDocs - skip) / limit);

      return res.send({
        page: page,
        limit: limit,
        docs: docs,
        prevPage: previous_pages,
        nextPage: next_pages,
        totalDocs: totalDocs,

      })
    } catch (error) {
      console.log("error", error)
      return res.status(400).json({ error: error })
    }
  });
};
