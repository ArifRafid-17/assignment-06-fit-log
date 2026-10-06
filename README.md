<div align="center">

# 🏋️ FitLog

**Train with intent. Log every set.**

A dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![daisyUI](https://img.shields.io/badge/daisyUI-5-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)

</div>

---

## 📖 About

**FitLog** is a workout-planning web app built with Next.js. It gives you a library of lifts covering every major muscle group, lets you build a personal training plan from them, and keeps your favorite exercises saved for quick access. The interface is dark-themed with a neon-lime accent, designed to stay out of your way in the gym.

## 🛠️ Technologies Used

| Category | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI Library | [React 19](https://react.dev) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) + [daisyUI 5](https://daisyui.com) |
| Fonts | [Geist](https://vercel.com/font) via `next/font` |
| Linting | ESLint with `eslint-config-next` |

## ✨ Key Features

1. **Workout Library** – Browse a curated collection of twelve lifts that cover every major muscle group.
2. **My Plan** – Lock exercises into today's plan and build your training routine in one place.
3. **Saved Exercises** – Bookmark your favorite lifts so they're always a tap away.
4. **Live Counters** – The navbar tracks how many exercises are in your plan and your saved list at a glance.
5. **Dark, Responsive UI** – A sleek dark theme with neon-lime accents that looks sharp on mobile, tablet, and desktop.

## 🚀 Getting Started

**Prerequisites:** Node.js 20.9 or newer.

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd assignment-06-fit-log

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint the codebase with ESLint |

## 📁 Project Structure

```
app/
├── components/
│   ├── Banner.tsx      # Hero banner
│   └── Navbar.tsx      # Navigation with Plan / Saved counters
├── workout/
│   └── page.tsx        # Workout library
├── layout.tsx          # Root layout, fonts, navbar
├── page.tsx            # Home page
└── globals.css         # Tailwind + daisyUI theme
```

## 📄 License

This project was created for educational purposes.

---

<div align="center">

Built with 💪 by **Ariful Islam Rafid**

</div>
