# ⚽ Goals Football Academy

> **Where Kathmandus's next footballers are made.**

A modern, responsive football academy website built with **Next.js and TypeScript**, created to present Goals Football Academy's training programs, coaching team, facilities, success stories, and player development opportunities through a clean and professional digital experience.

---

## ✨ Overview

**Goals Football Academy** is a modern web experience designed for a football academy focused on structured player development and competitive football training.

The website provides prospective players and parents with an organized way to explore the academy, understand its programs, meet the coaching team, discover available facilities, read success stories, and take the next step toward joining the academy.

The project emphasizes:

* Strong visual identity
* Clear information architecture
* Responsive design
* Accessible navigation
* Conversion-focused calls to action
* Scalable Next.js architecture

---

## 🚀 Key Features

### 🏠 Home

A visually engaging landing page that introduces the academy with:

* Strong hero messaging
* Academy introduction
* Primary call-to-action buttons
* Football-focused visual design
* Clear navigation to important sections

### ℹ️ About

Provides information about the academy, its philosophy, and its approach toward football development.

### 🏃 Programs

Showcases the academy's training and development pathways, helping players understand the available opportunities.

### 👨‍🏫 Coaches

Dedicated section highlighting the coaching team and their role in player development.

### 🏟️ Facilities

Presents the academy's training environment and facilities.

### 🏆 Success Stories

Highlights player development and achievements to demonstrate the academy's impact and pathway.

### 📩 Contact

Provides visitors with a dedicated section for getting in touch with the academy.

### ⚽ Join Now

A dedicated conversion-focused page for visitors interested in joining the academy.

---

## 🛠️ Tech Stack

| Technology       | Purpose                                      |
| ---------------- | -------------------------------------------- |
| **Next.js**      | React framework and application architecture |
| **React**        | Component-based UI development               |
| **TypeScript**   | Type-safe development                        |
| **CSS**          | Styling and responsive layouts               |
| **Node.js**      | JavaScript runtime                           |
| **npm**          | Package management                           |
| **Git & GitHub** | Version control and source management        |

---

## 📁 Project Structure

```text
goals-nextjs/
│
├── app/
│   ├── about/
│   ├── coaches/
│   ├── contact/
│   ├── facilities/
│   ├── join-now/
│   ├── programs/
│   ├── success-stories/
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   └── Reusable UI components
│
├── lib/
│   └── Application utilities and supporting logic
│
├── public/
│   └── Static assets and media
│
├── .env.example
├── .gitignore
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── package-lock.json
└── README.md
```

The application follows the **Next.js App Router architecture**, with individual routes organized inside the `app` directory.

---

## 🎨 Design & User Experience

The website follows a modern sports-oriented visual language built around:

* Bold display typography
* Deep green brand tones
* Warm accent colors
* High-impact football imagery
* Generous whitespace
* Clear visual hierarchy
* Strong call-to-action elements
* Minimal and intuitive navigation

The interface is designed to communicate the academy's core values of **discipline, development, performance, and ambition**.

---

## 📱 Responsive Experience

The website is designed to provide a consistent experience across different screen sizes:

* Desktop
* Laptop
* Tablet
* Mobile

Responsive layouts ensure that navigation, typography, imagery, content sections, and interactive elements remain usable across devices.

---

## 🧩 Application Routes

| Route              | Purpose                        |
| ------------------ | ------------------------------ |
| `/`                | Academy homepage               |
| `/about`           | About the academy              |
| `/programs`        | Training programs              |
| `/coaches`         | Coaching team                  |
| `/facilities`      | Academy facilities             |
| `/success-stories` | Player success stories         |
| `/contact`         | Contact information            |
| `/join-now`        | Academy registration / joining |

---

## ⚙️ Getting Started

### Prerequisites

Make sure the following are installed on your system:

* **Node.js**
* **npm**
* **Git**

Verify your installation:

```bash
node --version
npm --version
git --version
```

### 1. Clone the repository

```bash
git clone https://github.com/aakritiikarna/goals-nextjs.git
```

### 2. Navigate to the project

```bash
cd goals-nextjs
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

If the project requires environment variables, create a local environment file based on the provided example:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Add the required values to `.env.local`.

> **Never commit `.env.local` or other files containing private credentials or API keys.**

### 5. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 📜 Available Scripts

| Command         | Description                           |
| --------------- | ------------------------------------- |
| `npm run dev`   | Starts the development server         |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Starts the production server          |
| `npm run lint`  | Runs the project's linting checks     |

---

## 🔐 Environment Variables

Environment-specific configuration should be stored in `.env.local`.

A template is provided through:

```text
.env.example
```

Environment files containing secrets should remain local and must not be committed to GitHub.

---

## 🌐 Deployment

This Next.js application can be deployed to modern JavaScript hosting platforms that support Next.js.

A typical production workflow is:

```bash
npm install
npm run build
npm run start
```

Before deployment, ensure that all required environment variables are configured in the hosting environment.

---

## 🔮 Future Enhancements

The project can be extended into a complete academy management platform with features such as:

* Online player registration
* Player and parent accounts
* Training schedule management
* Online fee/payment integration
* Player performance tracking
* Coach dashboard
* Admin dashboard
* Dynamic program management
* Trial booking system
* Contact form integration
* Automated email notifications
* CMS-powered content management
* Backend/API integration

---

## 🎯 Project Goals

The primary objectives of this project are to:

1. Establish a professional digital presence for a football academy.
2. Provide clear information about programs and development pathways.
3. Create an engaging experience for prospective players and parents.
4. Maintain a scalable and maintainable Next.js architecture.
5. Provide a foundation that can evolve into a full academy management platform.

---

## 📸 Preview

### Homepage

The homepage features a bold hero section, academy branding, football imagery, and clear conversion-focused actions such as **Book a Free Trial** and **See Our Pathway**.

---

## 👩‍💻 Author

**Aakriti Karna**

GitHub: [@aakritiikarna](https://github.com/aakritiikarna)

Project Repository: [goals-nextjs](https://github.com/aakritiikarna/goals-nextjs)

---

## 📄 License

This project is developed for **educational, portfolio, and demonstration purposes**.

For commercial use, redistribution, or production deployment, appropriate licensing and content permissions should be established.

---

<p align="center">
  Built with ⚽, Next.js & TypeScript
</p>
