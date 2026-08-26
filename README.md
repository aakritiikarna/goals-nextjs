# ⚽ Goals Football Academy

> **Where Kathmandu's next footballers are made.**

**Goals Football Academy** is a full-stack football academy management platform built to provide a modern digital experience for players, parents, coaches, and academy administrators.

The platform combines a **Next.js frontend** with a **Django REST Framework backend**, connected to a database and supported by an administrative dashboard for managing academy operations, users, programs, and application data.

---

## 🚀 Overview

Goals Football Academy is designed to bridge the gap between a professional academy website and a functional academy management system.

The public-facing website allows users to:

* Explore the academy
* Learn about training programs
* View coaches
* Explore facilities
* Read player success stories
* Submit enquiries
* Apply to join the academy

Behind the frontend, the Django-powered backend provides APIs, authentication, database management, and administrative functionality through a dedicated dashboard.

The project is structured to be scalable from a marketing website into a complete academy management platform.

---

## 🏗️ Architecture

```text
                    ┌──────────────────────┐
                    │      User / Admin    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Next.js Frontend   │
                    │   React + TypeScript  │
                    └──────────┬───────────┘
                               │
                         REST API
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Django Backend     │
                    │ Django REST Framework│
                    └──────────┬───────────┘
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
             ▼                 ▼                 ▼
       ┌───────────┐    ┌──────────────┐   ┌─────────────┐
       │ Database  │    │ Authentication│   │ Admin       │
       │           │    │ & Authorization│   │ Dashboard   │
       └───────────┘    └──────────────┘   └─────────────┘
```

---

# ✨ Key Features

## 🌐 Public Website

The Next.js frontend provides a modern, responsive academy website with dedicated sections for:

* Home
* About
* Programs
* Coaches
* Facilities
* Success Stories
* Contact
* Join Now

The interface focuses on strong visual hierarchy, responsive layouts, clear navigation, and conversion-focused calls to action.

---

## 👤 User Management

The backend provides user-related functionality through Django and Django REST Framework.

Potential platform capabilities include:

* User registration
* Authentication
* Login/logout
* Role-based access
* User profile management
* Secure API access

---

## 📋 Academy Programs

Academy programs can be managed through the backend and presented dynamically through the frontend.

Programs can contain information such as:

* Program name
* Age group
* Training level
* Description
* Schedule
* Availability
* Program status

---

## 👨‍🏫 Coach Management

The platform includes a dedicated coaches section for presenting academy coaching staff.

Coach information can be managed through the backend and displayed through the frontend.

---

## 🏟️ Facilities

The facilities section allows the academy to showcase its training environment and infrastructure.

---

## 🏆 Success Stories

The platform provides a dedicated area for showcasing player achievements and academy success stories.

---

## 📝 Join Now / Applications

The **Join Now** functionality provides a pathway for prospective players to express their interest in joining the academy.

Application-related information can be processed and managed through the backend.

---

# 📊 Admin Dashboard

A dedicated dashboard is included for academy administration and management.

The dashboard provides a centralized interface for managing application data and academy operations.

Depending on the configured permissions, administrators can manage:

* Users
* Players
* Applications
* Programs
* Coaches
* Facilities
* Success stories
* Academy content
* Administrative data

This separates the public-facing experience from internal academy management.

---

# 🔌 Backend API

The backend is built using:

* **Python**
* **Django**
* **Django REST Framework**

The REST API acts as the communication layer between the Next.js frontend and the database.

```text
Next.js
   │
   │ HTTP / REST API
   ▼
Django REST Framework
   │
   ▼
Business Logic
   │
   ▼
Database
```

This architecture keeps the frontend and backend independently maintainable and allows the API to support future mobile applications or other clients.

---

# 🗄️ Database

The application uses a relational database connected to the Django backend.

Database-backed functionality allows the platform to persist:

* User information
* Academy applications
* Programs
* Coaches
* Facilities
* Success stories
* Other application data

Django ORM is used to interact with the database.

---

# 🔐 Authentication & Security

The backend is designed around Django's authentication and API security capabilities.

Security-related functionality includes:

* Authentication
* Authorization
* Protected API endpoints
* Role-based access where applicable
* Environment-based secret configuration
* Secure credential handling

Sensitive configuration should be stored using environment variables rather than committed to the repository.

---

# 💳 External Services & Integrations

The backend is structured to support external services and integrations where required, including:

* Payment processing
* Cloud-based media storage
* Object storage
* Email/API integrations

API credentials and service configuration should be stored in environment variables.

---

# 🛠️ Technology Stack

## Frontend

| Technology     | Purpose                          |
| -------------- | -------------------------------- |
| **Next.js**    | Frontend framework               |
| **React**      | UI development                   |
| **TypeScript** | Type-safe JavaScript development |
| **CSS**        | Styling and responsive design    |

## Backend

| Technology                | Purpose                      |
| ------------------------- | ---------------------------- |
| **Python**                | Backend programming language |
| **Django**                | Backend framework            |
| **Django REST Framework** | REST API development         |
| **Django ORM**            | Database interaction         |

## Infrastructure & Services

| Technology                           | Purpose                                       |
| ------------------------------------ | --------------------------------------------- |
| **PostgreSQL / Relational Database** | Persistent data storage                       |
| **Git**                              | Version control                               |
| **GitHub**                           | Source code management                        |
| **Cloud Storage**                    | Media/file storage where configured           |
| **Payment APIs**                     | Online payment functionality where configured |

---

# 📁 Project Structure

```text
goals-nextjs/
│
├── frontend/
│   │
│   ├── app/
│   │   ├── about/
│   │   ├── coaches/
│   │   ├── contact/
│   │   ├── facilities/
│   │   ├── join-now/
│   │   ├── programs/
│   │   ├── success-stories/
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   ├── lib/
│   ├── public/
│   ├── package.json
│   └── next.config.mjs
│
├── backend/
│   │
│   ├── apps/
│   │   ├── accounts/
│   │   ├── admin_panel/
│   │   ├── downloads/
│   │   ├── licensing/
│   │   ├── orders/
│   │   └── themes/
│   │
│   ├── config/
│   ├── private_media/
│   ├── manage.py
│   ├── requirements.txt
│   └── .env.example
│
└── README.md
```

> The exact directory names may vary depending on the current implementation.

---

# ⚙️ Getting Started

## Prerequisites

Install the following:

* Node.js
* npm
* Python 3.14+
* Git
* Database server required by the project

Verify:

```bash
node --version
npm --version
python --version
git --version
```

---

# 🖥️ Frontend Setup

Navigate to the frontend project:

```bash
cd goals-nextjs
```

Install dependencies:

```bash
npm install
```

Create the required environment file if applicable:

```text
.env.local
```

Start the development server:

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:3000
```

---

# 🐍 Backend Setup

Navigate to the backend:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

Install backend dependencies:

```bash
python -m pip install --upgrade pip
pip install -r requirements.txt
```

Configure the required environment variables using:

```text
.env.example
```

Create your local `.env` configuration and provide the required database and service credentials.

Run database migrations:

```bash
python manage.py migrate
```

Check the Django project:

```bash
python manage.py check
```

Start the backend:

```bash
python manage.py runserver
```

The Django API will normally be available at:

```text
http://127.0.0.1:8000
```

---

# 🔄 Running the Full Application

Run the backend and frontend in separate terminals.

### Terminal 1 — Django

```bash
cd backend
venv\Scripts\activate
python manage.py runserver
```

### Terminal 2 — Next.js

```bash
npm run dev
```

Application:

```text
Frontend → http://localhost:3000
Backend  → http://127.0.0.1:8000
```

The Next.js application communicates with the Django backend through REST API endpoints.

---

# 📜 Available Frontend Scripts

```bash
npm run dev
```

Starts the Next.js development server.

```bash
npm run build
```

Creates the production build.

```bash
npm run start
```

Starts the production server.

```bash
npm run lint
```

Runs linting checks.

---

# 📜 Available Backend Commands

```bash
python manage.py check
```

Checks the Django project for configuration issues.

```bash
python manage.py migrate
```

Applies database migrations.

```bash
python manage.py makemigrations
```

Creates migrations after model changes.

```bash
python manage.py runserver
```

Starts the Django development server.

---

# 📱 Responsive Design

The frontend is designed to provide a consistent experience across:

* Desktop
* Laptop
* Tablet
* Mobile

The interface adapts navigation, typography, imagery, content sections, and interactive components according to screen size.

---

# 🎨 Design System

The website uses a modern football-oriented visual identity featuring:

* Bold typography
* Deep green tones
* Warm accent colors
* High-quality football imagery
* Strong visual hierarchy
* Generous spacing
* Minimal navigation
* Prominent calls to action

The design aims to communicate:

**Performance · Discipline · Development · Ambition**

---

# 🔮 Future Development

The platform can be further expanded with:

* Player dashboards
* Parent dashboards
* Coach dashboards
* Training attendance
* Player performance analytics
* Match management
* Training schedules
* Online fee payments
* Subscription management
* Automated email notifications
* Push notifications
* Advanced role-based permissions
* Mobile application
* Advanced analytics
* Content management system
* Deployment automation

---

# 🎯 Project Objectives

The project was developed with the following goals:

1. Build a professional digital presence for a football academy.
2. Create a modern and responsive user experience.
3. Connect a Next.js frontend to a Django REST backend.
4. Implement persistent database-driven functionality.
5. Provide an administrative dashboard for academy management.
6. Establish a scalable architecture for future features.
7. Separate frontend presentation from backend business logic and data management.

---

# 🌐 Deployment Architecture

A production deployment can be structured as:

```text
                    Internet
                       │
                       ▼
              ┌─────────────────┐
              │    Next.js      │
              │    Frontend     │
              └────────┬────────┘
                       │
                    REST API
                       │
                       ▼
              ┌─────────────────┐
              │     Django      │
              │      API        │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │    Database     │
              └─────────────────┘
```

This architecture allows the frontend, backend, and database layers to be deployed and scaled independently.

---

# 👩‍💻 Author

**Aakriti Karna**

GitHub:
https://github.com/aakritiikarna

Repository:
https://github.com/aakritiikarna/goals-nextjs

---

# 📄 License

This project is developed for **educational, portfolio, and demonstration purposes**.

All project-specific branding, imagery, and content should be used in accordance with their respective ownership and licensing terms.

---

<p align="center">
  <strong>Goals Football Academy</strong><br/>
  Built with Next.js · Django · REST API · Database
</p>
