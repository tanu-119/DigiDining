Sure! Here's a **detailed and professional README description** for your DigiDining project, including clear explanations of the purpose, features, technologies, deployment, and screenshot placeholders.

---

# 🍽️ DigiDining – Online Food Ordering App

**DigiDining** is a responsive and full-stack food ordering web application designed for restaurants and cafés that want to simplify their menu browsing and ordering process. Customers can explore dishes, add items to a cart, place orders, and view their order history using just their phone number—no login required.

---

## 📌 Project Overview

DigiDining simulates a digital restaurant experience with the following capabilities:

- 📋 **Digital Menu** – An interactive display of dishes with images, prices, and descriptions.
- 🛒 **Smart Cart** – Add, update, or remove items from a cart before placing an order.
- 📞 **Order Without Account** – Users simply enter their name and phone number to place orders.
- 📜 **Order History Lookup** – Retrieve past orders using a phone number.
- 📡 **Deployed Full Stack** – React + Express + MongoDB hosted on [Render](https://render.com).

---

## 🎯 Core Features

### ✅ Menu Display
- Renders food items with prices and names dynamically from the backend.
- Users can browse items without registration.

### 🛒 Cart Management
- Items can be added, updated, or removed from the cart.
- The cart dynamically calculates the total cost.

### 📦 Order Placement
- Collects name, phone number, and selected items.
- Validates empty cart submissions.
- Sends order data securely to the backend API.

### 🧾 Order History
- Users can retrieve past orders based on phone number.
- Useful for frequent customers to re-order quickly.

### 🔄 Live Deployment
- Backend and frontend are deployed separately using Render with proper CORS configuration.

---

## 🖼️ Screenshots

> 💡 **Tip:** Add actual screenshots in a `screenshots/` folder and reference them like below.

### 1. 📋 Home Page (Menu Overview)
![Home Page](./screenshots/homepage.png)

### 2. 🛒 Cart Page
![Cart](./screenshots/cart.png)

### 3. 📝 Order Form
![Order Form](./screenshots/order-form.png)

### 4. 📜 Order History Page
![Order History](./screenshots/order-history.png)

---

## 🧰 Tech Stack

### Frontend:
- React.js (Vite)
- React Router
- Axios for HTTP Requests
- Tailored CSS / Custom styling

### Backend:
- Node.js with Express
- MongoDB Atlas with Mongoose
- CORS & dotenv for secure environment configuration

### Deployment:
- **Frontend**: [Render](https://render.com) → `https://digidining-frontend.onrender.com`
- **Backend**: [Render](https://render.com) → `https://digidining.onrender.com`

---

## 🔐 CORS Policy Fix

To allow secure communication between frontend and backend:

```js
app.use(cors({
  origin: 'https://digidining-frontend.onrender.com'
}));
```

Ensure this middleware is applied **before** any route declaration.

---

---

## 📞 How to Use

1. 🖥️ **Clone the repository**  
   `git clone https://github.com/your-username/digidining.git`

2. 🔧 **Install dependencies**  
   - For frontend: `cd frontend && npm install`
   - For backend: `cd backend && npm install`

3. 🔑 **Add `.env` to backend with:**
   ```
   MONGODB_URI=your-mongodb-connection-string
   PORT=5000
   ```

4. ▶️ **Start servers**  
   - Backend: `npm run start`
   - Frontend: `npm run dev`

---
