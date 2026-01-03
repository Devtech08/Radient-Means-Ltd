# Radiant Means Ltd. - Corporate & Healthcare Platform

This is a Next.js web application for a diversified services company, Radiant Means Ltd., which also features an integrated and comprehensive healthcare platform.

The application serves as both the corporate face for Radiant Means Ltd. and a functional portal for patients and doctors to manage healthcare services.

## Key Features

### Corporate Site
- **Home Page:** A modern landing page introducing Radiant Means Ltd.
- **About Us:** Information about the company's mission, goals, and values.
- **Services:** A detailed look at the various services offered by the company.
- **Contact Us:** A contact form and company contact details.
- **Why Choose Us:** Highlighting the company's strengths and experience.

### Healthcare Platform
- **Dual User Roles:** Separate dashboards and features for Patients and Doctors.
- **Authentication:** Secure login and registration for patients and doctors.
- **AI Symptom Checker:** An intelligent tool to help patients identify a potential medical specialist based on their symptoms.
- **Find a Doctor:** A searchable and filterable directory of doctors.
- **Appointment Booking:** A complete system for patients to book appointments with doctors.
- **Patient Dashboard:** Patients can view upcoming appointments and access other services.
- **Doctor Dashboard:** Doctors can manage appointment requests, view upcoming appointments, and see patient information.
- **Real-time Chat:** Secure messaging between patients and doctors.
- **Medical Records:** Patients can view their medical history and records.
- **Online Pharmacy:** A mock interface for browsing and ordering medications.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **AI/Generative:** [Google's Genkit](https://firebase.google.com/docs/genkit)
- **Forms:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Authentication:** [Firebase Authentication](https://firebase.google.com/docs/auth)

## Getting Started

Follow these steps to get the project running locally.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root of the project and add your Firebase configuration details:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=...
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
   NEXT_PUBLIC_FIREBASE_APP_ID=...
   ```

### Running the Development Server

To start the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

This project was developed by Dravok Technologies.
