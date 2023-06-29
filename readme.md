# API for start of database for novel tomato varieties

`tomatoes` is for university students studying the natural sciences to log novel tomato varieties bred and propagated through their studies 

### WIREFRAME



##

Contents
=========

* [Purpose] (#purpose) 
* [Technologies_Used] (#technologies-used)
* [Technical_Challenges] (#technical-challenges)
* [How_To_Run] (#how-to-run)


### Purpose 

This is a basic API for a database for logging novel tomato varieties bred and propagated by university students around the world. 
Every year we have new varieties of tomato that get bred in academic institutions. We at University of X need a centralized database for students of natural sciences all around the world to log and document novel tomato varieties.

### Technologies_Used
 
 MERN, Javascript, dotenv, jest, supertest, morgan, artillery 
 VS Code, Postman, GitHub, Trello, ERD Charts

### Technical_Challenges 

The programmer unwittingly created another application in the server.js file, which essentially blocked Postman from accessing the routes. After some time spent debugging, the programmer discovered they had to delete and rearrange just a few lines in the server.js to make a proper connection between the app.js and server.js files. 

### How to Install App 

- Open terminal and type `mkdir tomatoes_API` in root folder. Press enter. 
- Clone from Tomatoes repo: `git clone git@github.com:TJCole03/Tomatoes.git `
- 
- `npm init -y` in terminal 
- `npm i ` on the following global installations: bcrypt, dotenc, express, jsonwebtoken, mongoose, morgan, nodemon. 
- `npm i [item] -D` on the following for dev dependencies: artillery, jest, mongodb-memory-server, supertest
- Starting server: `npm run dev` 

### Running on Postman 

- OPEN POSTMAN 
- Set request type to HTTP 
- Set text to JSON 
- Set the data to raw 
- CREATING FIRST TOMATO (POST)
- In search bar, type http://localhost:3002/tomatoes and set method to POST on left 
- Select "Body" underneath search bar 
- Use the following syntax for the json body: 

    {   
        "variety": "string",
        "skinColor": "string",
        "breed": "string",
        "plantType": "string",
        "plantHeight": number,
        "fruitShape": "string"
    }

- All properties are required for validation. If no available property, assign 'n/a' for property. 
- OPTIONAL PROPERTIES: 
    - leafType, and fleshColor 
- Optional properties can be inserted anywhere in the json body as long as the user follows syntax 
- After the user inserts the desired properties, hit send
- User will recieve an object like this in their body: 

{
    "tomato": {
        "variety": "Chianti Rose",
        "skinColor": "Deep Pink",
        "fleshColor": "Deep Pink",
        "breed": "Open Pollinated",
        "leafType": "potato",
        "plantType": "Indeterminate",
        "plantHeight": 5,
        "fruitShape": "Beefsteak",
        "_id": "649cb10b1f75b9020bef4640",
        "__v": 0
    }
}

- DISPLAYING/READING TOMATOES (GET)

- In search bar, change POST to GET in the dropdown box on left
- This displays the tomato the user created plus all tomatoes to be created in the future
- Find any tomato and highlight the line of numbers and letters next to "_id": WITHOUT the quotation marks. This is the id tag.
- Paste the id tag after a '/' in the search bar. It should look like this: 

    http://localhost:3002/tomatoes/649cb10b1f75b9020bef4640

- Press send once completed 
- The user now has only one tomato selected by its id

- UPDATING TOMATOES (UPDATE)

- Now that the user has selected a single tomato item they can add, remove, or change properties as they see fit 
- Change GET to PUT in the dropdown box on left 
- In json body, select and delete and insert desired properties
- After completion, press send 
- The user will now recieve and updated version of their tomato

- DELETING TOMATOES (DESTROY) 

- Change PUT to DELETE in dropdown box on left 
- Press send 
- User has now deleted their tomato 
