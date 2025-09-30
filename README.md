# 🎥 Zyoom Clone - Video Conferencing Application

A full-stack video conferencing application built with Next.js, replicating core Zoom functionality. This project is developed primarily for **study purposes** to demonstrate modern web development practices, real-time communication, secure authentication, and third-party API integrations.

---

## 🚀 Project Overview

This project is a comprehensive video conferencing platform that enables users to create instant meetings, schedule future meetings, manage recordings, and host personal meeting rooms. It showcases the integration of modern web technologies with real-time video/audio streaming capabilities, secure authentication flows, and a polished user interface.

---

## ✨ Features

* **Secure Authentication:** Complete user authentication system with Clerk, including signup, login, and session management.
* **Instant Meetings:** Start a video meeting immediately with a single click and share the meeting link with participants.
* **Schedule Meetings:** Plan and schedule meetings for future dates with customizable settings.
* **Meeting Recordings:** Access, view, and manage recordings of past meetings.
* **Personal Room:** Each user gets a dedicated personal meeting space with a unique room ID.
* **Previous Meetings:** View history and details of all past meetings.
* **Participant Management:** Control meeting access and manage participants during live sessions.
* **Real-time Video/Audio:** High-quality video and audio streaming powered by GetStream.
* **Screen Sharing:** Share your screen during meetings for presentations and collaboration.
* **Meeting Controls:** Mute/unmute audio, enable/disable video, and other essential meeting controls.
* **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices.
* **Modern UI/UX:** Clean, intuitive interface with smooth animations and interactions.

---

## 🛠️ Technologies Used

### **Frontend**
* **Next.js 14:** React framework with App Router for server-side rendering and optimal performance.
* **TypeScript:** Strongly typed programming language that builds on JavaScript.
* **Tailwind CSS:** Utility-first CSS framework for rapid and responsive UI development.
* **shadcn/ui:** Re-usable component library built with Radix UI and Tailwind CSS.
* **React Hooks:** For state management and side effects.

### **Backend/Services**
* **Next.js API Routes:** Serverless API endpoints for backend logic.
* **Clerk:** Complete user authentication and management platform.
* **GetStream:** Real-time video and audio streaming SDK with WebRTC.

### **Deployment**
* **Vercel:** Recommended platform for deploying Next.js applications (optimized for performance).

### **Development Tools**
* **ESLint:** Code linting for maintaining code quality.
* **Prettier:** Code formatter for consistent code style.
* **Git:** Version control system.

---

## ⚙️ Setup and Installation

Follow these steps to get the project up and running on your local machine.

### **Prerequisites**

Before you begin, ensure you have the following installed:
* **Node.js** (v18 or higher recommended)
* **npm** or **yarn** package manager
* **Git** for version control
* A **Clerk account** (free tier available at [clerk.com](https://clerk.com))
* A **GetStream account** (free tier available at [getstream.io](https://getstream.io))

---

### **1. Clone the Repository**

```bash
git clone https://github.com/yourusername/zyoom-clone.git
cd zyoom-clone
```

---

### **2. Install Dependencies**

```bash
npm install
# or
yarn install
```

---

### **3. Set Up Environment Variables**

Create a `.env.local` file in the root directory and add the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# GetStream Video
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key_here
STREAM_SECRET_KEY=your_stream_secret_key_here

# Base URL (for production deployment)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

**How to get your API keys:**

* **Clerk Keys:**
  1. Sign up at [clerk.com](https://clerk.com)
  2. Create a new application
  3. Navigate to API Keys section
  4. Copy your publishable and secret keys

* **GetStream Keys:**
  1. Sign up at [getstream.io](https://getstream.io)
  2. Create a new app
  3. Go to Dashboard and copy your API key and secret

---

### **4. Run the Development Server**

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

### **5. Build for Production**

```bash
npm run build
npm start
# or
yarn build
yarn start
```

---

## 📚 What I Learned

Through building this project, I gained hands-on experience with:

* ✅ **Next.js App Router:** Understanding the latest Next.js 14 architecture, server components, and file-based routing system.
* ✅ **Authentication Implementation:** Implementing secure user authentication flows with Clerk, including protected routes and session management.
* ✅ **Real-time Communication:** Integrating WebRTC-based video/audio streaming with GetStream SDK for live meetings.
* ✅ **TypeScript Best Practices:** Writing type-safe code with interfaces, types, and proper type definitions.
* ✅ **State Management:** Managing complex application state across multiple components.
* ✅ **Third-party API Integration:** Working with external APIs and SDKs (Clerk, GetStream) and handling their documentation.
* ✅ **Responsive Design Patterns:** Creating mobile-first, responsive layouts using Tailwind CSS utility classes.
* ✅ **Component Architecture:** Building reusable, maintainable React components with proper separation of concerns.
* ✅ **Environment Configuration:** Managing sensitive API keys and environment-specific configurations.
* ✅ **Modern React Patterns:** Utilizing React Hooks (useState, useEffect, useContext) and custom hooks.
* ✅ **Error Handling:** Implementing proper error handling and user feedback mechanisms.
* ✅ **Full-stack Development Flow:** Understanding the complete development cycle from frontend to backend integration.

---

## 📸 Screenshots

> **Note:** Add screenshots of your application here to showcase different features:
> - Home page
> - Meeting room interface
> - Scheduled meetings page
> - Previous meetings/recordings
> - Personal room

---

## 🚀 Deployment

This application is optimized for deployment on **Vercel**:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy!

---

## 🙏 Credits & Acknowledgments

This project was built following the comprehensive tutorial by **JavaScript Mastery**. Special thanks to the JS Mastery team for creating such detailed and educational content.

* **Tutorial:** [Build and Deploy a Zoom Clone](https://www.youtube.com/watch?v=R8CIO1DZ2b8)
* **Channel:** [JavaScript Mastery](https://www.youtube.com/@javascriptmastery)
* **Instructor:** Adrian Hajdin

### **Technologies & Services:**
* [Next.js](https://nextjs.org/) - The React Framework
* [Clerk](https://clerk.com/) - Authentication & User Management
* [GetStream](https://getstream.io/) - Video & Audio Streaming
* [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
* [shadcn/ui](https://ui.shadcn.com/) - Component Library

---

## 📝 License

This project is open source and available for educational purposes. Feel free to use it as a reference for your learning journey.

---

## 🤝 Contributing

While this is primarily a learning project, suggestions and feedback are welcome! Feel free to:
- Open an issue for bugs or questions
- Submit a pull request for improvements
- Share your own learnings and experiences

---

## 📧 Contact

If you have any questions about this project or want to connect:

* **GitHub:** [@yourusername](https://github.com/yourusername)
* **LinkedIn:** [Your Name](https://linkedin.com/in/yourprofile)
* **Email:** your.email@example.com

---

**Built with 💙 as a learning project | Full-stack development journey**

*If you're also learning web development, feel free to fork this repository and use it as a reference for your own projects!*
