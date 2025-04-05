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
git clone https://github.com/Sidd-hass/nodejs-crud-api.git
cd nodejs-crud-api

### 2. setup the enviorment
3. Create Environment Variables
In the root directory, create a .env file:

enviorment variable

PORT=3000
MONGO_URI=mongodb://localhost:27017/taskdb
JWT_SECRET=f2131040143e3b7c4dbe10b61ac9804a10fcdc7602b7edfdfeae8a69266645d1


### 3. Install node dependecy
npm install

### 3. run the application using the docker
docker compose up -d --build

### 4.now test the api using the two methods first using javascript test.js script run this command in terminal or use bat file
node test.js 
.\test.bat 

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