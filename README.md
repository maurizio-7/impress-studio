# Kuleni

A modern business website for Kuleni, helping Zambian businesses establish a professional digital presence through business profiles, branding (including custom websites), and NFC/QR digital business cards.

## Features

- Responsive modern design with a custom brand palette and typography
- Home page with business overview
- Services page with feature breakdowns per offering
- Portfolio showcasing previous work
- Contact page with a working enquiry form (saves to a database, sends an email notification)
- React Router navigation
- Reusable React components
- Mobile-friendly layout

## Built With

**Frontend**

- React + Vite
- React Router
- Tailwind CSS v4

**Backend** (`backend/`)

- Express
- PostgreSQL (`pg`)
- Resend (email notifications)

**Hosting**

- Frontend: Vercel
- Backend + database: Render

## Services Offered

- Business Profiles
- Business Branding (including website design & development)
- Digital Business Cards (NFC + QR)
- Custom Solutions

## Installation

Clone the repository:

```bash
git clone https://github.com/maurizio-7/impress-studio.git
cd impress-studio
```

Install frontend dependencies:

```bash
npm install
```

Start the frontend dev server:

```bash
npm run dev
```

### Backend setup

The contact form talks to a separate Express server in `backend/`. To run it locally:

```bash
cd backend
npm install
cp .env.example .env   # fill in your own DB credentials, RESEND_API_KEY, NOTIFY_EMAIL
npm start
```

See `.env.example` (both at the project root and in `backend/`) for the environment variables each side expects.

## Future Improvements

- CMS for portfolio management
- Blog for SEO
- Client testimonials / social proof near the point of conversion
- User authentication
- Admin dashboard
- Analytics integration

## Purpose

This project was created to help businesses in Zambia establish a professional digital presence through affordable, modern branding solutions.

GitHub: https://github.com/maurizio-7
