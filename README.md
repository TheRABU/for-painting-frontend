# Painting Express

Welcome to the Painting Express, a web application built using the MERN stack (MongoDB, Express, React, Node.js). This platform allows users to explore various categories of arts and crafts, view details after logging in, and manage their own listings.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Authentication**: Login, signup using email and password, and social login (Google, GitHub).
- **Product Management**: Users can add, update, and delete their own products.
- **Responsive Design**: Fully responsive design using Tailwind CSS.
- **Interactive UI**: Smooth animations and interactions with AOS and Lottie.
- **Notifications**: Real-time notifications using react-toastify.
- **Alerts**: Elegant alerts and confirmations using SweetAlert2.

## Demo

[Link to live demo](#) (https://my-paint-new.web.app/)

## Installation

### Prerequisites

- Node.js (version 14 or above)
- MongoDB (running instance or cloud database)

### Steps

1. **Clone the repository**
    ```sh
    git clone https://github.com/programming-hero-web-course-4/B9A10-client-side-TheRABU.git
    cd B9A10-client-side-TheRABU.git
    ```

2. **Install server dependencies**
    ```sh
    cd Server
    npm install
    ```

3. **Install client dependencies**
    ```sh
    cd ../Client
    npm install
    ```

4. **Setup environment variables**

    Create a `.env` file in the `server` directory and add your environment variables:

    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    GITHUB_CLIENT_ID=your_github_client_id
    GITHUB_CLIENT_SECRET=your_github_client_secret
    ```

5. **Run the server**

    ```sh
    cd server
    npm start
    ```

6. **Run the client**

    ```sh
    cd ../client
    npm run dev
    ```

    Your application should now be running on `http://localhost:3000` for the client and `http://localhost:5000` for the server.

## Usage

1. **Visit the home page** to browse various categories of arts and crafts.
2. **Login or Signup** to view product details and manage your own listings.
3. **Add a new product** by navigating to "My Listed Craft" and clicking "Add New Product".
4. **Edit or Delete your products** from the "My Listed Craft" page.

## Dependencies

### Client
* Packages used
- `@material-tailwind/react`: UI components library
- `aos`: Animate on scroll library
- `dotenv`: Loads environment variables
- `firebase`: Firebase for authentication
- `localforage`: Offline storage
- `lottie-react`: Lottie animations for React
- `match-sorter`: Simple, expected, and deterministic best-match sorting of an array in JavaScript
- `pagedone`: Page transition management
- `react`: React library
- `react-dom`: React DOM library
- `react-icons`: Icons library for React
- `react-router-dom`: Declarative routing for React
- `react-simple-typewriter`: Typing animations for React
- `react-toastify`: Notification library
- `sort-by`: Sort items
- `sweetalert2`: Beautiful alerts and popups
- `swiper`: Touch slider

### Development

- `@types/react`, `@types/react-dom`: TypeScript types for React
- `@vitejs/plugin-react`: Vite plugin for React
- `autoprefixer`: Parse CSS and add vendor prefixes
- `daisyui`: Tailwind CSS components
- `eslint`: Linting utility for JavaScript and JSX
- `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`: ESLint plugins for React
- `postcss`: Transform CSS with JavaScript
- `tailwindcss`: Utility-first CSS framework
- `vite`: Frontend build tool

## Development

### Code Structure

- `client`: Contains the React frontend
  - `src`: Main source directory
    - `components`: Reusable components
    - `pages`: Page components
    - `services`: Services for API calls
    - `styles`: Styling files
    - `App.js`: Main app component
    - `index.js`: Entry point for React
- `server`: Contains the Express backend
  - `controllers`: Route handlers
  - `models`: Mongoose models
  - `routes`: API routes
  - `app.js`: Express app setup
  - `server.js`: Server entry point

### Scripts

- **Start the client**: `npm run dev` (from the `client` directory)
- **Start the server**: `npm start` (from the `server` directory)
- **Lint code**: `npm run lint` (from the root or respective directories)

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [mdfazlerabbi114@gmail.com](mailto:mdfazlerabbi114@gmail.com)

Project Link: https://my-paint-new.web.app
