# College Management System

A simple Node.js/Express and MongoDB backend for managing college students.

## Getting Started

Follow these steps to set up the project locally:

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd student-management
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up Environment Variables
Copy the `.env.example` file to a new file named `.env`:
```bash
cp .env.example .env
```
*(On Windows PowerShell: `copy .env.example .env`)*

### 4. Database Setup
Make sure you have **MongoDB** installed and running locally on port `27017`.

### 5. Run the Application
Start the development server with nodemon:
```bash
npm run dev
```

## API Endpoints

### Students
- **GET** `/api/students` - Get all students
- **POST** `/api/students` - Add a new student
- **PUT** `/api/students/:id` - Update a student
- **DELETE** `/api/students/:id` - Delete a student

## Collaboration Workflow

1. **Pull latest changes**: Always run `git pull origin main` before starting.
2. **Create a branch**: `git checkout -b feature/your-feature-name`
3. **Commit changes**: `git add .` and `git commit -m "Describe your changes"`
4. **Push and PR**: Push your branch and open a Pull Request on GitHub.