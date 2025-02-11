# Portfolio v1

A stylish and responsive portfolio website highlighting projects, skills, and career achievements, built with React, TailwindCSS, and Framer Motion.

## 🚀 Live Demo

[View Portfolio](https://lewismcguiredev.netlify.app/)

## 📌 Features

- **Lazy Loading**: Implements `react-intersection-observer` for smooth content loading.
- **Framer Motion Animations**: Adds engaging animations to elements.
- **Dark Mode**: Users can toggle between light and dark themes.
- **Timeline Display**: Uses `react-chrono` to visualize career milestones.
- **Project Showcase**: Highlights key projects with technologies used.
- **Contact Form Integration**: Uses getform.io to handle form submissions seamlessly.

## 🛠 Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS, Framer Motion
- **Utilities**: React Icons, React Chrono, Intersection Observer
- **Build Tools**: Vite, ESLint, PostCSS

## ⚡ Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Mchumbles/portfolio-v1.git
   cd portfolio-v1
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the development server:**
   ```sh
   npm run dev
   ```
4. **Build for production:**
   ```sh
   npm run build
   ```

## 📩 Contact Form Integration

This project uses Getform.io for handling form submissions.

Simply submit the form, and Getform.io captures the data.

No backend needed—view submissions in the Getform.io dashboard.

Replace the action URL in Contact.tsx with your Getform endpoint:

```sh
<form action="YOUR_GETFORM_ENDPOINT" method="POST">
```

## 🤝 Contributions

Feel free to fork and contribute! Open a pull request for suggestions and improvements.

## 📝 License

This project is licensed under the MIT License.
