# **🦸 Marvel Superhero API & Admin Dashboard**  

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=nodedotjs)  ![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express)  ![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)  ![ES Modules](https://img.shields.io/badge/ES_Modules-ECMAScript-blue)  

## **📖 Description**  
This project includes:
- **Express.js API** (backend)
- **React Admin Dashboard** (frontend)

**Backend Features:**

✔️ Modern **ES Modules** implementation  
✔️ **MVC-like structure** (Routes → Controllers → Services)  
✔️ Full **CRUD operations** (Create, Read, Update, Delete)  
✔️ Data persistence in **JSON files** (no database required)  

**Frontend Features:**

✔️ Beautiful admin interface                      
✔️ Search, pagination, and filtering  
✔️ Responsive design for all devices  

---

## **🚀 Quick Start**  

### **Option 1: Use Live Deployment (Recommended)**
The application is already deployed on Render:⚡ [API URL](https://express-practice-nqjt.onrender.com/characters)

### **Option 2: Run Locally**

1. **Clone the repository**
```bash
git clone https://github.com/colombefioren/EXPRESS-PRACTICE.git
cd EXPRESS-PRACTICE
```

2. **Run Backend (Express API)**
```bash
cd server
npm install
npm run dev
# API will run on http://localhost:4000
```

3. **Run Frontend (React Dashboard)**
```bash
cd client
npm install
npm run dev
# Frontend should normally run on http://localhost:5173
```

---

## **🔌 API Endpoints**  

| Method | Endpoint             | Description                     |
|--------|----------------------|---------------------------------|
| GET    | `/characters`        | Get all superheroes             |
| GET    | `/characters/:id`    | Get a single superhero          |
| POST   | `/characters`        | Create a new superhero          |
| PUT    | `/characters/:id`    | Update a superhero              |
| DELETE | `/characters/:id`    | Delete a superhero              |

**Example Response (GET /characters/1):**  
```json
{
  "id": 1,
  "name": "Spider-Man",
  "realName": "Peter Parker",
  "universe": "Earth-616"
}
```
