# DevOps Backend

A Node.js Express API with MongoDB, containerized with Docker and automated CI/CD pipeline.

## Features

- ✅ Express.js REST API
- ✅ MongoDB database
- ✅ Docker & Docker Compose
- ✅ GitHub Actions CI/CD
- ✅ Environment configuration with dotenv

## Prerequisites

- Node.js 18+
- Docker Desktop
- Git

## Local Setup

### 1. Clone Repository
```bash
git clone https://github.com/Sravanigaju/devops-backend.git
cd devops-backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create .env file
```bash
echo "MONGO_URI=mongodb://localhost:27017/devops-backend" > .env
echo "PORT=5000" >> .env
```

### 4. Run Locally (without Docker)
```bash
npm run dev
```

## Docker Setup

### Build and Run Containers
```bash
docker-compose up --build
```

The app will be available at: `http://localhost:8000`

### Stop Containers
```bash
docker-compose down
```

## API Endpoints

### Create User
```http
POST http://localhost:8000/user
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Get All Users
```http
GET http://localhost:8000/users
```

## Project Structure

```
.
├── index.js              # Main application file
├── models/
│   └── User.js          # Mongoose User schema
├── Dockerfile           # Docker image configuration
├── docker-compose.yml   # Multi-container orchestration
├── package.json         # Dependencies and scripts
├── .env                 # Environment variables
└── .github/
    └── workflows/
        └── ci-cd.yml    # GitHub Actions CI/CD pipeline
```

## CI/CD Pipeline

GitHub Actions automatically:
- Installs dependencies
- Runs linter (ESLint)
- Runs tests
- Builds Docker image

**Triggered on:** Every push to `master` or `main` branch

View workflow status: [GitHub Actions](https://github.com/Sravanigaju/devops-backend/actions)

## Scripts

```bash
npm run dev      # Start server
npm start        # Start server (production)
npm test         # Run tests
npm run lint     # Run ESLint
```

## Environment Variables

| Variable   | Description              | Example                              |
|-----------|--------------------------|--------------------------------------|
| MONGO_URI  | MongoDB connection string | `mongodb://localhost:27017/db-name` |
| PORT       | Server port              | `5000` or `8000`                    |

## Technologies Used

- **Runtime:** Node.js 18
- **Framework:** Express.js
- **Database:** MongoDB
- **Container:** Docker & Docker Compose
- **CI/CD:** GitHub Actions
- **Linter:** ESLint

## License

ISC

## Author

Sravani Gajula (sravanigajula99@gmail.com)
