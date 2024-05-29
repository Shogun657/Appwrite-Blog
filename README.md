# Blog Website

## Overview

This project is a blog website built using React for the frontend, with Appwrite handling the backend services, and the entire application is deployed on Vercel. The website allows users to create, read, update, and delete blog posts, manage user authentication, and perform other typical blogging functionalities.

## Features

- **User Authentication**: Sign up, login, and logout functionalities powered by Appwrite.
- **CRUD Operations**: Create, read, update, and delete blog posts.
- **Responsive Design**: Optimized for various device sizes.
- **Deployment**: Deployed on Vercel for scalability and performance.

## Technologies Used

- **Frontend**: React, HTML, CSS
- **Backend**: Appwrite
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js installed on your local machine
- Appwrite instance set up (can be local or remote)
- Vercel account for deployment

### Installation

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/your-username/blog-website.git
   cd blog-website
   ```

2. **Install Dependencies**:

   ```sh
   npm install
   ```

3. **Setup Environment Variables**:

   Create a `.env` file in the root directory and add the following environment variables:

   ```env
   REACT_APP_APPWRITE_ENDPOINT=https://your-appwrite-endpoint
   REACT_APP_APPWRITE_PROJECT_ID=your-appwrite-project-id
   REACT_APP_APPWRITE_API_KEY=your-appwrite-api-key
   ```

4. **Run the Application Locally**:

   ```sh
   npm start
   ```

   The application should now be running on `http://localhost:3000`.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.
