# Educational Consultancy Dashboard

A web-based dashboard system for an educational consultancy. It includes separate dashboards for students and admins, providing functionality for managing study materials, announcements, and user accounts.

## Features

### **Student Dashboard**
- View scheduled meetings.
- Access study materials.
- See important announcements.

### **Admin Dashboard**
- Manage content (add/edit/delete study materials and announcements).
- Monitor student accounts and activities.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: CSS
- **Authentication**: JWT (for backend) and hardcoded credentials for testing.

## How to Use

### **1. Clone the Repository**

### **2. Install Dependencies**

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd ../frontend
npm install
```

### **3. Set Up Environment Variables**

#### Backend `.env` file:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/dashboard
JWT_SECRET=your_jwt_secret_key
```

### **4. Start the Project**

#### Start Backend
```bash
cd backend
node server.js
```

#### Start Frontend
```bash
cd ../frontend
npm start
```

### **5. Test Credentials**
- **Admin Login**:
  - Email: `admin@example.com`
  - Password: `admin123`
- **Student Login**:
  - Email: `student@example.com`
  - Password: `student123`
