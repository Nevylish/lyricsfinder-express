# Lyricsfinder with Expressjs
🎵 Use [lyrics-finder](https://github.com/alias-rahil/lyrics-searcher) module with another ip address if your host's is blocked.

## How to use it?
This project allows to return the lyrics of a music in json with expressjs. It can be useful if you need to retrieve the lyrics of a music but your ip address is blocked.

Let's say you host it on repl.it (their ip are not yet blocked), with the node-fetch module you can simply fetch the content.
<br>*By default you must put a variable environment with a password to access the link, you can simply remove it by not putting any (but I do not recommend it)*

```js
        // Javascript example
        const fetch = require('node-fetch');

        let query = "All I Want For Christmas Is You - Mariah Carey",
            lyrics;
        
        // Replace this link with your own
        fetch(`https://lyricsfinder.api.nevylish.fr/${query}`, {
            method: "GET",
            headers: {
                "Authorization": `${process.env.AUTHPASS}`
            }
            }).then(response => {
                return response.json();
            })
            .then(data => {
                if (!data.lyrics) {
                    throw new Error('Lyrics not found.');
                }
                
                // Lyrics find !
                lyrics = data.lyrics;
                console.log(data);

            })
            .catch(err => {
                throw new Error(err);
            });
```
Output:
```json
{
  "lyrics": "I don't want a lot for Christmas\nThere is just one thing I need\nI don't care about the presents underneath the Christmas tree\nI just want you for my own\nMore than you could ever know\nMake my wish come true\nAll I want for Christmas is you\nYeah\n\nI don't want a lot for Christmas\nThere is just one thing I need (and I)\nDon't care about the presents underneath the Christmas tree\nI don't need to hang my stocking there upon the fireplace\nSanta Claus won't make me happy with a toy on Christmas Day\n\nI just want you for my own\nMore than you could ever know\nMake my wish come true\nAll I want for Christmas is you\nYou, baby\n\nOh, I won't ask for much this Christmas\nI won't even wish for snow (and I)\nI'm just gonna keep on waiting underneath the mistletoe\nI won't make a list and send it to the North Pole for Saint Nick\nI won't even stay awake to hear those magic reindeer click\n\n'Cause I just want you here tonight\nHolding on to me so tight\nWhat more can I do?\nOh, baby, all I want for Christmas is you\nYou, baby\n\nOh-oh, all the lights are shining so brightly everywhere (so brightly, baby)\nAnd the sound of children's laughter fills the air (oh, oh, yeah)\nAnd everyone is singing (oh, yeah)\nI hear those sleigh bells ringing\nSanta, won't you bring me the one I really need? (Yeah, oh)\nWon't you please bring my baby to me?\n\nOh, I don't want a lot for Christmas\nThis is all I'm asking for\nI just wanna see my baby standing right outside my door\n\nOh, I just want you for my own\nMore than you could ever know\nMake my wish come true\nOh, baby, all I want for Christmas is you\nYou, baby\n\nAll I want for Christmas is you, baby\nAll I want for Christmas is you, baby\nAll I want for Christmas is you, baby\nAll I want for Christmas (all I really want) is you, baby\nAll I want (I want) for Christmas (all I really want) is you, baby"
}
```

## Run the project on Repl.it
Click here to run the project ➜ [![Run on Repl.it](https://repl.it/badge/github/Nevylish/lyricsfinder-express)](https://repl.it/github/Nevylish/lyricsfinder-express)

**How to add variable environment:**<br>
![image](https://user-images.githubusercontent.com/36775882/146649227-eadbf585-acab-473f-8e73-891db072b15a.png)

