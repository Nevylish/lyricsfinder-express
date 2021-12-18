const express = require('express'),
  app = express()
  lyricsFinder = require('lyrics-finder');

const isAuthorized = (req,res, next) => {
  const auth = req.headers.authorization;
    if (auth === process.env.AUTHPASS) {
      next();
    } else {
      res.status(401);
      res.send("Tu n'as pas la permission d'accéder à cette page.");
    }
}

app.use(express.json());

app.get('/lyricsfinder/:request', isAuthorized, async (req, res) => {
  const lyricsToFind = req.params.request;
  let lyrics = await lyricsFinder(lyricsToFind)
  res.status(200).json({lyrics: lyrics})
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
});