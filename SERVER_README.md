# The Phone Cave Catalog App - Backend

## Description

The backend for The Phone Cave Catalog App is a simple Node.js server built with Express to provide phone data for the frontend. It serves as the API to retrieve information about phones from the catalog.

## Features

- **/phones GET:** Retrieve a list of all phones.
- **/phones/:id GET:** Retrieve details for a specific phone based on its ID.

## Tech Stack

- **Server:** Node.js, Express
- **Data:** Fake phone data stored in `phones.json`
- **Communication:** REST API

## How to Use

1. Clone the repository.
2. Navigate to the `backend` folder.
3. Install dependencies using `npm install`.
4. Start the server with `npm start`.
5. The server will run on `http://localhost:3001`.

## Project Structure

- `backend/`: Node.js server source code.
  - `phones.json`: Fake data representing the phone catalog.
  - `server.js`: Main server file.
  - `package.json`: Dependency configuration.

## Important Notes

- This is a simple backend for the purpose of providing phone data.
- Fake data is used from `phones.json`. In a real-world scenario, you would connect to a database.
- Make sure to run the frontend alongside the backend for a complete app experience.

Feel free to customize and expand upon this backend as needed. If you have any questions or improvements, don't hesitate to reach out!

---

**Note:** This README is a basic template. Customize it based on your actual project structure, features, and preferences.
