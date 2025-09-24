<<<<<<< HEAD
# Society Management System

Welcome to the Society Management System project! This web-based application helps manage visitor data and events within a society. It allows administrators to efficiently store and sort visitor information, and create events that are visible to all site visitors.

## Features

- **Visitor Management**: 
  - Store and manage data of visitors entering the society.
  - Admin can view and sort visitor data by date, time, block, room, and other criteria.

- **Event Management**:
  - Admin can create new events.
  - All visitors to the site can view the events created by the admin.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**:  Node.js, Express.js
- **Database**: MongoDB
- **Version Control**: Git, GitHub

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**
    ```bash
    git clone https://github.com/Nandkishor786/society-management-system.git
    cd society-management-system
    ```

2. **Install dependencies**
    - For the server:
        ```bash
        cd server
        npm install
        ```
    - For the client:
        ```bash
        cd ../client
        npm install
        ```

3. **Set up the environment variables**
    - Create a `.env` file in the `server` directory and add the following variables:
        ```env
MONGO_URI=mongodb://127.0.0.1:27017/SMS
JWT_SECRET=9f375458759983c7071a6d08a380f060bc28dd666a69de8c18345029054d46fa6578d1253ef629a3e2c93313ff769570dbeb0e265a5089220b80324d744e76f1
PORT=5000

        ```
   
   - Create a `.env` file in the `client` directory and add the following variables:
        ```env
        VITE_PORT=your_PORT
        ```

5. **Run the application**
    - Start the backend server:
        ```bash
        cd server
        npm start
        ```
    - Start the frontend server:
        ```bash
        cd ../client
        npm run dev
        ```

## Usage

- **Admin Dashboard**:
  - Log in with admin credentials.
  - View, sort, and manage visitor data.
  - Create new events.

- **Public View**:
  - All society members can view the list of events created by the admin.
  - All the visitors fills the visitors form.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards and includes appropriate tests.





=======
# MinorProject
Secure Awas: A Smart Entry Management System for Rural Societies
>>>>>>> 85e434742f6c5ba8fec4539f85b05e0f7ea76c02
