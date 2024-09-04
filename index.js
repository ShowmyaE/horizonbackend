const express = require('express')
const app = express()
const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
const path = require('path')
const cors = require("cors");



app.use(cors());
app.use(express.json())

const dbPath = path.join(__dirname, 'demodb.db')
let db = null

const initializeDbAndServer = async () => {
    try {
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        })
        app.listen(5000, () => {
            console.log('Server Running at http://localhost:5000')
        })
    } catch (error) {
        console.log(`DB Error : ${error.message}`)
        process.exit(1)
    }
}
initializeDbAndServer()


app.get('/movies', async (req, res) => {
    // const createTable=`CREATE TABLE movies(
    //   id INTEGER PRIMARY KEY AUTOINCREMENT,
    //   title TEXT NOT NULL,
    //   poster TEXT NOT NULL,
    //   description TEXT NOT NULL
    
            
    //   );`
    //  const createData=await db.run(createTable);
    // const insertquery=`INSERT INTO movies(title,poster,description)
    // VALUES ('The Dark Knight','https://en.wikipedia.org/wiki/The_Matrix#/media/File:The_Matrix_Poster.jpg','When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.')`;
    // const insertData=await db.run(insertquery)
        
        const query = `SELECT * FROM movies `
        const userDbDetails =  await db.all(query);
            console.log('DB value', userDbDetails);
            res.send(userDbDetails)

})

app.get('/tvshows', async (req, res) => {
    // const createTable=`CREATE TABLE tvshows(
    //   id INTEGER PRIMARY KEY AUTOINCREMENT,
    //   title TEXT NOT NULL,
    //   poster TEXT NOT NULL,
    //   description TEXT NOT NULL
    
            
    //   );`
    //  const createData=await db.run(createTable);
    // const insertquery=`INSERT INTO tvshows(title,poster,description)
    // VALUES ('The Crown','https://en.wikipedia.org/wiki/The_Matrix#/media/File:The_Matrix_Poster.jpg','A chronicle of the reign of Queen Elizabeth II of the United Kingdom.')`;
    // const insertData=await db.run(insertquery)
        
        const query = `SELECT * FROM tvshows `
        const userDbDetails =  await db.all(query);
            console.log('DB value', userDbDetails);
            res.send(userDbDetails)

})

app.get('/sports', async (req, res) => {
    // const createTable=`CREATE TABLE sports(
    //   id INTEGER PRIMARY KEY AUTOINCREMENT,
    //   title TEXT NOT NULL,
    //   image TEXT NOT NULL,
    //   description TEXT NOT NULL
    
            
    //   );`
    //  const createData=await db.run(createTable);
    // const insertquery=`INSERT INTO sports(title,image,description)
    // VALUES ('Cricket','https://en.wikipedia.org/wiki/The_Matrix#/media/File:The_Matrix_Poster.jpg','A bat-and-ball game played between two teams of eleven players each on a circular field.')`;
    // const insertData=await db.run(insertquery)
        
        const query = `SELECT * FROM sports `
        const userDbDetails =  await db.all(query);
            console.log('DB value', userDbDetails);
            res.send(userDbDetails)

})

app.get('/live', async (req, res) => {
    // const createTable=`CREATE TABLE live(
    //   id INTEGER PRIMARY KEY AUTOINCREMENT,
    //   title TEXT NOT NULL,
    //   image TEXT NOT NULL,
    //   description TEXT NOT NULL
    
            
    //   );`
    //  const createData=await db.run(createTable);
    // const insertquery=`INSERT INTO live(title,image,description)
    // VALUES ('E-Sports Tournament','https://en.wikipedia.org/wiki/The_Matrix#/media/File:The_Matrix_Poster.jpg','Tune in to watch the thrilling e-sports tournament live.')`;
    // const insertData=await db.run(insertquery)
        
        const query = `SELECT * FROM live `
        const userDbDetails =  await db.all(query);
            console.log('DB value', userDbDetails);
            res.send(userDbDetails)

})