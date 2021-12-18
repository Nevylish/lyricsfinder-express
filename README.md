# Lyricsfinder with Expressjs
🎵 Use lyrics-finder module with another ip address if your host's is blocked.

## How to use it?
This project allows to return the lyrics of a music in json with expressjs. It can be useful if you need to retrieve the lyrics of a music but your ip address is blocked.

Let's say you host it on repl.it, with the node-fetch module you can simply fetch the content.
<br>*By default you must put a variable environment with a password to access the link, you can simply remove it (but I do not recommend it)*

```js
        const fetch = require('node-fetch');

        let query = "All I Want For Christmas Is You - Mariah Carey";
        let lyrics = "";

        fetch(`https://lyricsfinder-express.nevylish.repl.co/lyricsfinder/${query}`, {
            method: "GET",
            headers: {
                "Authorization": `${process.env.AUTHPASS}`
            }
            }).then((response) => {
                return response.json()
            })
            .then(async (data) => {
                if (!data.lyrics) {
                    throw new Error('Lyrics not found.');
                }
                
                // Lyrics find !
                lyrics = data.lyrics;

            })
            .catch((err) => {
                throw new Error(err);
            });
```

## Run the project
[![Run on Repl.it](https://repl.it/badge/github/Nevylish/lyricsfinder-express)](https://repl.it/github/Nevylish/lyricsfinder-express)
