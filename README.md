# 👨‍💻 Rajesh K - Personal Portfolio

A modern, responsive, and interactive personal portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**. This portfolio showcases my projects, skills, experience, and journey as a Full-Stack Developer and Community Builder.

## 🚀 Live Demo

[Check out the live site here!](https://personal-portfolio-rk.netlify.app/) *(Replace with your actual deployed URL if different)*

## ✨ Features

-   **🎨 Modern Design**: Sleek dark/light themed UI styled with **Tailwind CSS**.
-   **⚡ Fast & Responsive**: Built with **Vite** for lightning-fast performance and fully responsive across all devices (Mobile, Tablet, Desktop).
-   **✨ Smooth Animations**: Engaging entrance and scroll animations powered by **GSAP (GreenSock Animation Platform)**.
-   **🖼️ Interactive Gallery**: A categorized photo gallery with a custom **Lightbox** feature to showcase community events and volunteering.
-   **📧 Contact Form**: Functional contact form integrated with **EmailJS** for direct messaging.
-   **🛠️ Tech Stack Showcase**: categorized skills section with hover effects.
-   **💼 Services & Experience**: Detailed sections for professional services, work experience timeline, and awards.

## 🛠️ Tech Stack

-   **Frontend**: React (v18), TypeScript
-   **Build Tool**: Vite
-   **Styling**: Tailwind CSS, PostCSS
-   **Animations**: GSAP (ScrollTrigger)
-   **Icons**: Lucide React
-   **Email Service**: EmailJS
-   **Deployment**: Netlify / Vercel (Recommended)

## 📂 Project Structure

```bash
src/
├── assets/         # Images, icons, and static files (Resume, Logo, etc.)
├── components/     # Reusable UI components (Hero, About, Projects, etc.)
├── App.tsx         # Main application component routing sections
├── main.tsx        # Entry point
└── index.css       # Global styles and Tailwind imports
```

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Rajesh-k11/Personal-Portfolio-RK.git
    cd Personal-Portfolio-RK
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables**
    Create a `.env` file in the root directory and add your EmailJS credentials:
    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 📦 Build for Production

To build the project for deployment:

```bash
npm run build
```

The output files will be in the `dist` folder.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Rajesh-k11/Personal-Portfolio-RK/issues).

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 👤 Author

**Rajesh K**

-   **GitHub**: [@Rajesh-k11](https://github.com/Rajesh-k11)
-   **LinkedIn**: [Rajesh K](https://www.linkedin.com/in/rajeshk1102/)
-   **Twitter**: [@The_rajesh_](https://x.com/The_rajesh_)
-   **Email**: [rajeshkanthasamy11@gmail.com](mailto:rajeshkanthasamy11@gmail.com)

## 📄 License

This project is open source and available under the information [MIT License](LICENSE).

---
*Built with ❤️ by Rajesh K*
