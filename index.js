const express = require("express"),
  app = express(),
  lyricsFinder = require("lyrics-finder");

const isAuthorized = (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth === process.env.AUTHPASS) {
    next();
  } else {
    res.status(401);
    res.send("You do not have permission to access this page.");
  }
};

app.get("/", isAuthorized, async (req, res) => {
  res
    .status(404)
    .json({
      error:
        "You must put a music like this: https://lyricsfinder.api.nevylish.fr/All I Want For Christmas Is You - Mariah Carey",
    });
});

app.get("/:request", isAuthorized, async (req, res) => {
  const lyricsToFind = req.params.request;
  let lyrics = await lyricsFinder(lyricsToFind);

  if (lyrics) res.status(200).json({ lyrics: lyrics });
  else res.status(404).json({ error: "Lyrics not found." });
});

app.listen(3000);
