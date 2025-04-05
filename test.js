import axios from 'axios';

// const BASE_URL = 'http://localhost:3000';
const BASE_URL = 'http://localhost'; // assuming NGINX is up
const user = {
  email: 'gmail@example.com',  // change the user before testing 
  password: 'password123'
};

let token = '';
let createdTaskId = '';

// Register User
const register = async () => {
  try {
    await axios.post(`${BASE_URL}/register`, user);
    console.log('✅ User registered');
  } catch (err) {
    console.log('⚠️  User may already exist');
  }
};

// Login User
const login = async () => {
  const res = await axios.post(`${BASE_URL}/login`, user);
  token = res.data.token;
  console.log('✅ Logged in, JWT token acquired');
};

// Create Task
const createTask = async () => {
  const task = {
    title: 'Test Task',
    description: 'This is a test task'
  };

  const res = await axios.post(`${BASE_URL}/tasks`, task, {
    headers: { Authorization: `Bearer ${token}` }
  });

  createdTaskId = res.data._id;
  console.log('✅ Task created:', res.data);
};

// Get Tasks
const getTasks = async () => {
  const res = await axios.get(`${BASE_URL}/tasks`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  console.log('📄 Tasks:', res.data);
};

// Update Task
const updateTask = async () => {
  const updated = {
    title: 'Updated Task Title',
    completed: true
  };

  const res = await axios.put(`${BASE_URL}/tasks/${createdTaskId}`, updated, {
    headers: { Authorization: `Bearer ${token}` }
  });

  console.log('✏️ Task updated:', res.data);
};

// Delete Task
const deleteTask = async () => {
  await axios.delete(`${BASE_URL}/tasks/${createdTaskId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  console.log('🗑️ Task deleted');
};

// Run Test Sequence
const runTests = async () => {
  await register();
  await login();
  await createTask();
  await getTasks();
  await updateTask();
  await deleteTask();
};

runTests();
