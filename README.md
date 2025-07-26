# **🦸 Marvel Superhero API**  
*A simple Express.js REST API for managing superhero characters*  

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=nodedotjs)  ![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express)  ![ES Modules](https://img.shields.io/badge/ES_Modules-ECMAScript-blue)  

## **📖 Description**  
Learn Express.js fundamentals with this beginner-friendly API that:  
✔️ Uses modern **ES Modules** 
✔️ Follows **MVC-like structure** (Routes → Controllers → Services)  
✔️ Implements **CRUD operations** (Create, Read, Update, Delete)  
✔️ Stores data in **JSON files** (no database required)  

Perfect for understanding REST APIs before diving into databases!  

---

## **🚀 Quick Start**  

1. **Clone & Install**  
```bash
git clone https://github.com/colombefioren/EXPRESS-PRACTICE.git
cd your-project/server
npm install
```

2. **Run the Server**  
```bash
npm run server
```

---

## **🔌 API Endpoints**  

| Method | Endpoint             | Description                     |
|--------|----------------------|---------------------------------|
| GET    | `/characters`        | Get all superheroes             |
| GET    | `/characters/:id`    | Get a single superhero          |
| POST   | `/characters`        | Create a new superhero          |
| PUT    | `/characters/:id`    | Update/create a superhero       |
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

---