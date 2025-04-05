# 🛠️ Node.js CRUD API with JWT Authentication

A full-featured Express.js REST API for user authentication and task management with MongoDB. This project supports:

- ✅ User Registration & Login using JWT
- 🧾 Secure Task CRUD Operations (Create, Read, Update, Delete)
- 🗄️ MongoDB Integration via Mongoose
- 🔐 Password Hashing using bcrypt
- 🔬 Local + Docker support
- 🧪 Automated and Manual API Testing

---

## 🚀 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Local or Docker)
- **ORM**: Mongoose
- **Auth**: JWT (jsonwebtoken), bcryptjs
- **Env Mgmt**: dotenv
- **Testing**: Axios

---

## 📁 Project Structure

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Sidd-hass/nodejs-crud-api.git ###  Take pull from master branch if you have any doubt please use this link git clone -b master https://github.com/Sidd-hass/nodejs-crud-api.git . 
cd nodejs-crud-api

### 2. setup the enviorment
3. Create Environment Variables
In the root directory, create a .env file:

enviorment variable

# MONGO_URI=mongodb://localhost:27018/jwt-auth
MONGO_URI=mongodb://mongo:27017/taskdb
JWT_SECRET=f2131040143e3b7c4dbe10b61ac9804a10fcdc7602b7edfdfeae8a69266645d1
PORT=3000


### 3. Install node dependecy
npm install ### to test the api is working or not for that i have created the test.js file after running docker compose you can test it using the node test.js file

### 3. run the application using the docker
docker compose up -d --build

### 4.now test the api using the two methods first using javascript test.js script run this command in terminal or use bat file
node test.js 

📩 Make sure to use a fresh email every time for testing registration.


🧪 Test in Docker
Once running, test the app with:

node test.js
Sample Output:
✅ User registered
✅ Logged in, JWT token acquired
✅ Task created: { ... }
📄 Tasks: [ ... ]
✏️ Task updated: { ... }
🗑️ Task deleted


🧪 Manual API Testing with Thunder Client / Postman
You can test this API locally using Thunder Client (VS Code) or Postman.

🔐 1. Register User
POST http://localhost/register

Request Body:
{
  "email": "user@example.com",
  "password": "password123"
}
🔑 2. Login User
POST http://localhost/login

Request Body:
{
  "email": "user@example.com",
  "password": "password123"
}
Response Example:
{
  "token": "your_jwt_token_here"
}
Save the token to use in the following protected routes.

📝 3. Create Task
POST http://localhost/tasks

Headers:
Authorization: Bearer <your_jwt_token>
Request Body:
{
  "title": "Learn Docker",
  "description": "Study containerization"
}
📋 4. Get All Tasks
GET http://localhost/tasks

Headers:
Authorization: Bearer <your_jwt_token>
🛠️ 5. Update a Task
PUT http://localhost/tasks/:id

Headers:
Authorization: Bearer <your_jwt_token>
Request Body:
{
  "title": "Learn Docker Deeply",
  "description": "Focus on volumes and networks"
}
Replace :id with the actual task ID you received from the GET request.

🗑️ 6. Delete a Task
DELETE http://localhost/tasks/:id

Headers:
Authorization: Bearer <your_jwt_token>
Replace :id with the actual task ID to delete it.