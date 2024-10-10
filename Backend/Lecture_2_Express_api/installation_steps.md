## Steps
* Open terminal in the folder where you have your server

```bash
npm init -y
npm i express
npm i --save-dev nodemon
```

* to use nodemon -> go to the package.json and inside the scripts add
* this lines
```json
"scripts": {
    "start": "npx nodemon index.js"
  }
```