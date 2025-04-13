# 3D Portfolio

A modern, interactive 3D portfolio website built with React, Three.js, and GSAP. Features stunning 3D models, smooth animations, and responsive design.

## ✨ Features

- Interactive 3D room scene with dynamic lighting
- Animated tech stack showcases with 3D models
- Smooth scrolling animations using GSAP
- Professional experience timeline with glowing cards
- Project showcase with animated transitions
- Contact form with 3D computer model
- Responsive design for all devices
- Social media integration
- Performance optimized 3D rendering

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend framework
- [Three.js](https://threejs.org/) - 3D graphics
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [React Three Drei](https://github.com/pmndrs/drei) - Useful helpers for React Three Fiber
- [GSAP](https://greensock.com/gsap/) - Professional animations
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [EmailJS](https://www.emailjs.com/) - Contact form handling
- [Vite](https://vitejs.dev/) - Build tool

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/3d_portfolio.git
```

2. Install dependencies:

```bash
cd 3d_portfolio
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:

```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components
├── sections/         # Main page sections
├── constants/        # Static data and configurations
└── models/          # 3D model components
```

## 🎨 Key Components

- **Hero Section**: Features an interactive 3D room scene
- **Work Showcase**: Displays portfolio projects with animations
- **Experience Timeline**: Interactive work history with glowing cards
- **Tech Stack**: 3D models of technologies and skills
- **Contact Section**: 3D computer model with contact form

## ⚡ Performance Optimization

- Lazy loading of 3D models
- Optimized textures and geometries
- Efficient animation management with GSAP
- Responsive 3D scene quality based on device capabilities

## 📱 Responsive Design

- Desktop-first approach with responsive breakpoints
- Mobile-optimized 3D scenes
- Adaptive layouts for different screen sizes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
