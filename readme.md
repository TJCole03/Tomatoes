# API for start of database for novel tomato varieties
-------------------------------------------------------------------------------------------
`tomatoes` is for university students studying the natural sciences to log novel tomato varieties bred and propagated through their studies 

### WIREFRAME
-------------------------------------------------------------------------------------------
![General Users](./imgs/Tomato_General_User_Landing_Page.png)
![Login](./imgs/Student_Admin_Login.png)
![Main Menu](./imgs/Main_Menu_Student_Admin.png)
![New Variety](./imgs/Input_Tomatoes.png)
![Update Variety](./imgs/Update_Tomato.png)
![ERD](./imgs/tomato_erd.png)


Contents!
=========

* [Purpose] (#purpose) 
* [Technologies_Used] (#technologies-used)
* [Technical_Challenges] (#technical-challenges)
* [How_to_Install_App] (#how-to-install-app)
* [User_Create_Login_and_Logout_in_Postman] (#postman-user)
* [Running_CRUD_Functionality_on_Postman] (#postman-CRUD)
* [Running_Tests] (#running-tests)


### Purpose 
-------------------------------------------------------------------------------------------
This is a basic API for a database for logging novel tomato varieties bred and propagated by university students around the world. 
Every year we have new varieties of tomato that get bred in academic institutions. I want to make a centralized database for university students to share their new findings with each other and fellow researchers. 


### Technologies_Used
 ------------------------------------------------------------------------------------------
 MERN, Javascript, dotenv, jest, supertest, morgan, artillery 
 VS Code, Postman, GitHub, Trello, ERD Charts

### Technical_Challenges 
-------------------------------------------------------------------------------------------
The programmer unwittingly created another application in the server.js file, which essentially blocked Postman from accessing the routes. After some time spent debugging, the programmer discovered they had to delete and rearrange just a few lines in the server.js to make a proper connection between the app.js and server.js files. 

### How_to_Install_App 
-------------------------------------------------------------------------------------------
- Open terminal and type `mkdir tomatoes_API` in root folder. Press enter. 
- `cd tomatoes_API`
- Clone from Tomatoes repo. Type command: `git clone git@github.com:TJCole03/Tomatoes.git`
- Type command: `code .` 
### In_VS_Code_Terminal
- Type command: `cd Tomatoes` to get terminal to root folder, `Tomatoes`
- Type command: `touch .env` to make your .env file
- In .env file, add MONGO_URI and SECRET values 
- Type command: `npm i` in terminal 

- To run server and start app in dev mode: Type command: `npm run dev` See messages: `Michael Phelps eats 3002 calories at breakfast` and `My Old Nanny Grows Oranges` 
        - User is now connected to server and MongoDB

- To start app outside of dev mode, type `npm run start`

### User_Create_Login_and_Logout_in_Postman
-------------------------------------------------------------------------------------------
- In VS Code, in clear terminal, run command `npm run dev` to start the server on port 3002
- OPEN POSTMAN 
- Set request type to HTTP 
- Set text to JSON 
- Set the data to raw 

- CREATE USER 
- Set the request to `POST` in search bar
- Type URL: `http://localhost:3002/user` This is the route for creating a user.

- Use following syntax and key-values for json body: 

        {
            "userName": "Bob Hope", 
            "email": "Bob@Hope.com", 
            "password": "5678", 
            "isLoggedIn": true 
        }

- User receives an object like the following in the output: 


        "newUser": {
            "userName": "Bob Hope",
            "email": "Bob@Hope.com",
            "password": "$2b$08$4QYmXtsowXYHI9t04sIXA.XjW8fRpF1H4Y0M58Tg0gtqDTSztf6T6",
            "isLoggedIn": true,
            "_id": "649e25acffac690492c82f52",
            "__v": 0
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDllMjVhY2ZmYWM2OTA0OTJjODJmNTIiLCJpYXQiOjE2ODgwODU5MzJ9.MnNs1bp3RhCTwq33nmAeiqTE6ve6vaeZ-VhjNJbrRw4"


- LOGGING IN 
- User must put '/login' to end of URL in search bar: 
        
    `http://localhost:3002/user/login`
- Press `Enter` or `Send`
- User will receive "message": "Login Successful" at bottom of output: 


        "user": {
            "_id": "649e25acffac690492c82f52",
            "userName": "Bob Hope",
            "email": "Bob@Hope.com",
            "password": "$2b$08$4QYmXtsowXYHI9t04sIXA.XjW8fRpF1H4Y0M58Tg0gtqDTSztf6T6",
            "isLoggedIn": true,
            "__v": 0
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDllMjVhY2ZmYWM2OTA0OTJjODJmNTIiLCJpYXQiOjE2ODgwODYxNDh9.h46dx9frBUm5E_zeXq_YbznzzeApmAPJ4zw5v1v0KbU",
        "message": "Login Successful!"


- LOGGING OUT 
- User must highlight the value of `_id` and copy (NO QUOTATION MARKS)
- User must change `/login`to `/logout`: (DO NOT PRESS ENTER/SEND)
    `http://localhost:3002/user/logout/649e25acffac690492c82f52` 
- User must highlight the token in json object in output and copy (NO QUOTATION MARKS) 
- User must click on `Auth`  underneath nearch bar, and under `Type` in dropbox select `Bearer Token`
- User must paste the token in textbox that appears on right hand side of form
- Click `Send` or press `Enter` 
- User will recieve the following output: 

        "user": {
            "_id": "649e25acffac690492c82f52",
            "userName": "Bob Hope",
            "email": "Bob@Hope.com",
            "password": "$2b$08$FqTNk6NisQZWNSL6wduVceJnuvh6I2uykgpU9mmWukvwQhvPKgySy",
            "isLoggedIn": false,
            "__v": 0
        },
        "message": "Logged Out"

- User has successfully created, logged in, and logged out a new user

### Running_CRUD_Functionality_on_Postman 
-------------------------------------------------------------------------------------------
- In VS Code, in clear terminal, run command `npm run dev` to start the server on port `3002`
- OPEN POSTMAN 
- Set request type to `HTTP` 
- Set text to `JSON` 
- Set the data to raw 

- CREATING FIRST TOMATO (POST)
- In search bar, type `http://localhost:3002/tomatoes` and set method to POST on left 
- Select "Body" underneath search bar 
- Use the following syntax and key-values for the json body: 

        {   
            "variety": "string",
            "skinColor": "string",
            "breed": "string",
            "plantType": "string",
            "plantHeight": number,
            "fruitShape": "string"
        }

- All properties are required for validation. If no available property, assign `n/a` for property. 
- OPTIONAL PROPERTIES: 
    - `leafType`, and `fleshColor` 
- Optional properties can be inserted anywhere in the json body as long as the user follows syntax 
- After the user inserts the desired properties, hit send
- User will recieve an object like this in their body: 


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


- DISPLAYING/READING TOMATOES (GET)

- In search bar, change `POST` to `GET` in the dropdown box on left
- This displays the tomato the user created plus all tomatoes to be created in the future
- Find any tomato and highlight the line of numbers and letters next to "_id": WITHOUT the quotation marks. This is the id tag.
- Paste the id tag after a '/' in the search bar. It should look like this: 

    `http://localhost:3002/tomatoes/649cb10b1f75b9020bef4640`

- Press send once completed 
- The user now has only one tomato selected by its id

- UPDATING TOMATOES (UPDATE)

- Now that the user has selected a single tomato item they can add, remove, or change properties as they see fit 
- Change `GET` to `PUT` in the dropdown box on left 
- In json body, select and delete and insert desired properties
- After completion, press send 
- The user will now recieve and updated version of their tomato

- DELETING TOMATOES (DESTROY) 

- Change `PUT` to `DELETE` in dropdown box on left 
- Press send 
- User has now deleted their tomato 

- User has successfully Created, Read, Updated, and Destroyed a tomato

### Running_Tests 

- ROUTE TESTS: 

- Type Command: `control+C` to stop server on port 3002. 
- Type command: `npm run test`
        - User can now see all 8 tests between two different models passing 


- ARTILLERY TEST: 
- Type command: `control+C` to end testing in terminal 
- Navigate to the boxed-in, right-pointed arrow with `zsh` adjacent. It is on the top bar of the terminal towards the right.
    - Click and select `Split Terminal`
- In one terminal, type command: `npm run dev` to open server
- In the new terminal, type command: `npm run load` to run artillery test 
    - User can now see the latency of the `POST` function on their system



