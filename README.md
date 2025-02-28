# Google Sheet Server

The **Google Sheet Server** is the backend for a Google Sheets Clone, built using **Node.js, Express, and TypeScript**. It provides a structured API to manage users, sheets, grids, rows, columns, and cells efficiently.

## 🚀 Project Setup

### 1️⃣ Clone the repository
```sh
git clone https://github.com/hemantsingh0557/googleSheetServer.git
cd googleSheetServer
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Set up environment variables
Create a `.env` file in the root directory and add:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Run the server
For development:
```sh
npm run dev
```
For production:
```sh
npm start
```

## 🔗 API Endpoints

### **Authentication** (User Routes)
- `POST /api/user/sign-in` → User login
- `POST /api/user/sign-up` → User registration

### **Sheet Management**
- `POST /api/sheet/create` → Create a new sheet
- `GET /api/sheet/:sheetId/detail` → Get sheet details
- `GET /api/sheet/list` → Get list of all sheets
- `PUT /api/sheet/:sheetId/update` → Update sheet
- `DELETE /api/sheet/:sheetId/remove` → Delete sheet

### **Grid Operations**
- `GET /api/grid/:gridId/detail` → Get grid details
- `GET /api/grid/:gridId/search` → Search within a grid
- `POST /api/grid/:sheetId/create` → Create a new grid
- `POST /api/grid/:gridId/duplicate` → Duplicate a grid
- `PUT /api/grid/:gridId/update` → Update grid
- `DELETE /api/grid/:gridId/remove` → Remove a grid

### **Row Operations**
- `POST /api/row/:gridId/create` → Add a new row
- `PUT /api/row/:rowId/update` → Update row
- `DELETE /api/row/:gridId/row` → Remove a row

### **Column Operations**
- `POST /api/column/:gridId/create` → Add a new column
- `PUT /api/column/:columnId/update` → Update column
- `DELETE /api/column/:gridId/column` → Remove a column

### **Cell Operations**
- `POST /api/cell/:gridId/create` → Create a cell
- `POST /api/cell/:gridId/duplicate` → Duplicate cells
- `POST /api/cell/:cellId/copypaste` → Copy-paste cell
- `PUT /api/cell/:gridId/insert/column` → Insert a column in grid
- `PUT /api/cell/:gridId/insert/row` → Insert a row in grid
- `PUT /api/cell/:cellId/update` → Update a cell
- `DELETE /api/cell/:cellId/cell` → Remove a cell

### **Health Check**
- `GET /api/health-check` → Check server health

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js, TypeScript
- **Database:** MongoDB
- **Authentication:** JWT
- **Hosting:** Vercel

## 📜 License
This project is licensed under the MIT License.
