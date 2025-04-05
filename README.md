#------------------------ project overview --------------------------

Node.js CRUD API with JWT Authentication
This is a simple Express.js API that supports:

User registration and login using JWT
CRUD operations for tasks (Create, Read, Update, Delete)
MongoDB database integration
Full local testing using Postman or the included test.js script


Tech Stack

Node.js
Express
MongoDB (Local or Docker)
Mongoose
JWT (jsonwebtoken)
bcryptjs
dotenv
axios (for testing)

Project Structure

project/
├── models/
│   └── user.js
│   └── task.js
├── routes/
│   └── auth.js
│   └── tasks.js
├── middleware/
│   └── auth.js
├── .env
├── db.js
├── server.js
├── test.js  <-- Script to test full flow
└── README.md

#---------------------- finished project overview -------------------------

#---------------------- project setup ------------------------------

git clone https://github.com/your-username/your-repo.git
cd your-repo

npm install

Create a .env file in the root directory:
PORT=3000
MONGO_URI=mongodb://localhost:27017/taskdb
JWT_SECRET=f2131040143e3b7c4dbe10b61ac9804a10fcdc7602b7edfdfeae8a69266645d1

Run the Server
nodemon server.js

#-------------------------- finshed setup -----------------------------


#---------------------------- automated api testing ---------------------

Testing the API (Automated)
We’ve included a test script to simulate:

Registering a user
Logging in
Creating a task
Reading all tasks
Updating a task
Deleting a task

run this command to test locally "node test.js"

#------------------ finished testing api ---------------------------


#------------------- manual api testing ----------------------------

Manual Testing with Postman
Register a new user
POST http://localhost:3000/register
Body (JSON): {
  "email": "test@example.com",
  "password": "password123"
}

Login to get JWT token
POST http://localhost:3000/login
Body (JSON): same as above
→ Copy the token from the response

Create a Task
POST http://localhost:3000/tasks
Headers:
Authorization: Bearer <token>
Body (JSON): {
  "title": "Learn Node.js",
  "description": "Study Express and JWT Auth just got my first node js project done",
  "completed": false
}

Read Tasks
GET http://localhost:3000/tasks
Headers: same as above

Update a Task
PUT http://localhost:3000/tasks/:id
Headers: same as above
Body (JSON): {
  "title": "finished Learning Node.js",
  "description": "Study Express and JWT Auth just got my first node js project done",
  "completed": true
}

Delete a Task
DELETE http://localhost/tasks/:id
Headers: same as above

#----------------------- finished manual testing ----------------------------

#---------------------- how to run the project in docker compose ------------------------
docker compose up -d --build

now test the project by running the the "test.js" file 
node test.js it will give you output like shown below 

note:- before testing please create a new gmail 

✅ User registered
✅ Logged in, JWT token acquired
✅ Task created: {
  title: 'Test Task',
  description: 'This is a test task',
  completed: false,
  user: '67f09d8a2d7ec3a0a964c815',
  _id: '67f09d8a2d7ec3a0a964c818',
  __v: 0
}
📄 Tasks: [
  {
    _id: '67f09d8a2d7ec3a0a964c818',
    title: 'Test Task',
    description: 'This is a test task',
    completed: false,
    user: '67f09d8a2d7ec3a0a964c815',
    __v: 0
  }
]
✏️ Task updated: {
  _id: '67f09d8a2d7ec3a0a964c818',
  title: 'Updated Task Title',
  description: 'This is a test task',
  completed: true,
  user: '67f09d8a2d7ec3a0a964c815',
  __v: 0
}
🗑️ Task deleted
