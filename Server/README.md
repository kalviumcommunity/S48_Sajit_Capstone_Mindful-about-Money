# Mindful About Money (Backend)

This repository contains the backend codebase for the Mindful About Money application. The backend is built using [Node.js](https://nodejs.org/) and the [Express.js](https://expressjs.com/) framework.

## Features

- **User Authentication**: Secure user registration, login, and token-based authentication.
- **User Management**: CRUD operations for user profiles and account settings.
- **Budget Management**: Create, update, and delete budgets for different categories.
- **Expense Tracking**: Record and manage expenses, with automatic categorization and bank account linking.
- **Educational Resources**: Serve educational content, articles, and tutorials on financial topics.
- **Newsletter**: Manage newsletter subscriptions and send periodic newsletters with financial tips and market updates.
- **Analytics**: Provide data and reports for user spending patterns, budget adherence, and financial progress.

## Technologies Used

- **Back-end**: [Node.js](https://nodejs.org/), [Express](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Authentication**: [JSON Web Tokens (JWT)](https://jwt.io/)
- **Additional Libraries**: [bcrypt](https://www.npmjs.com/package/bcrypt), [axios](https://www.npmjs.com/package/axios), [dotenv](https://www.npmjs.com/package/dotenv), [joi](https://www.npmjs.com/package/joi), [nodemon](https://www.npmjs.com/package/nodemon)

## Getting Started

1. Clone the repository:

```
git clone https://github.com/kalviumcommunity/S48_Sajit_Capstone_Mindful-about-Money.git
```

2. Install dependencies:

```
cd Server
npm install
```

3. Set up the environment variables:

Create a `.env` file in the root directory and add the necessary environment variables (e.g., MongoDB connection string, JWT secret, etc.).

4. Start the development server:

```
npm start
```

The server will be running at `http://localhost:3000`.

## API Documentation

The API documentation for the backend is available at [/api-docs](http://localhost:3000/api-docs) when running the development server.

## Contributing

Contributions are welcome! If you have any ideas, bug reports, or feature requests, please open an issue on the project's GitHub repository. If you'd like to contribute code, follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add your commit message'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Create a pull request

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JSON Web Tokens (JWT)](https://jwt.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [axios](https://www.npmjs.com/package/axios)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [joi](https://www.npmjs.com/package/joi)
- [nodemon](https://www.npmjs.com/package/nodemon)
