# Cool Blog

Cool Blog is a full-stack web application that allows users to write and publish articles on various topics. The front-end is built with React and uses React Router DOM for routing, Formik and Yup for form building and validation, and axios for fetching data from the back-end. The back-end is built with Express and Node.js, using MongoDB for the database. The server uses cors to enable cross-origin requests and bcrypt to hash and salt passwords.

The application implements CRUD functionality for creating, reading, updating, and deleting articles. Users can create an account, sign in, and write and publish articles on the platform. The application uses local storage to store the user's session token securely, which is then used to authenticate and authorize the user for protected routes.

The application is easy to install and run locally. To get started, simply clone the repository and install the project's dependencies with npm install. Then, start the development server with npm run dev, and the front-end can be accessed at http://localhost:3000 and the back-end at http://localhost:5000/api.

Contributions to the project are welcome! If you'd like to contribute, please follow the steps outlined in the Contributing section below.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- React
- Express
- Node.js
- MongoDB
- axios
- react-router-dom
- Formik
- Yup
- cors
- bcrypt

## Installation

1. Clone the repository.
2. Navigate to the project directory in your terminal.
3. Run npm install to install the project's dependencies.

## Usage

1. Navigate to the project directory in your terminal.
2. Run npm run dev to start the development server.
3. Open http://localhost:3000 in your web browser to view the front-end.
4. Use an API development tool such as Postman to test the back-end routes at http://localhost:5000/api.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
