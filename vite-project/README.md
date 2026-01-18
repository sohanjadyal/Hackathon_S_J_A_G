# Rural Health Access Assistant

## 🩺 Problem Statement
**Lack of Access to Healthcare in Underserved Communities**

In many rural and underserved areas, people struggle to:
- Know which healthcare facilities are available nearby  
- Decide *where to go* based on their symptoms  
- Access updated, reliable information about public healthcare resources  

This project aims to **bridge that gap** using a simple, accessible web application.

---

## 🚀 Project Overview
This is a **full‑stack MERN application** that helps users:
- Enter symptoms and get basic care guidance
- View nearby healthcare facilities (clinics, PHCs, hospitals)
- Read important health notices

It also provides an **Admin interface** to manage healthcare data, reflecting how **local health workers or NGOs** could maintain real‑world information.

---

## 🧱 Tech Stack

### Frontend
- React (Vite)
- React Router
- Fetch API

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

---

## 📁 Project Structure

```text
backend/
  ├── config/
  │   └── db.js
  ├── models/
  │   ├── Clinic.js
  │   └── Notice.js
  ├── routes/
  │   ├── clinics.js
  │   ├── notices.js
  │   └── symptoms.js
  ├── server.js
  └── .env

vite-project/   ← Frontend
  ├── src/
  │   ├── components/
  │   │   ├── SymptomForm.jsx
  │   │   ├── ClinicList.jsx
  │   │   ├── Noticeboard.jsx
  │   │   ├── Admin.jsx
  │   │   ├── AddClinic.jsx
  │   │   └── AddNotice.jsx
  │   ├── api.js
  │   └── App.jsx
  └── package.json


## 🔜 Planned Next Steps

---

## 1️⃣ Data Strategy (High Priority)
Instead of manual entry:

Use open government health datasets (India)

Optionally enrich with NGO / community clinics

Import data into MongoDB

Keep Admin panel for local updates

This ensures the system is:

Scalable

Ethical

Aligned with underserved communities

## 2️⃣ Intelligent Symptom → Clinic Logic
Symptoms determine recommended care type:

Clinic / PHC

Hospital (emergency)

Clinics will be:

Filtered or highlighted

Prioritized based on relevance

This turns the app into a decision‑support tool.

## 3️⃣ UX & Impact Improvements

Clear guidance messages

Highlight recommended facilities

Simple, low‑cognitive‑load interface

Optimized for first‑time or low‑literacy users

---

🏁 Current Status

✅ Full MERN stack working

✅ Admin + User flows implemented

✅ MongoDB connected and stable

🟡 Data seeding & intelligence layer in progress

---

## 👥 Notes for Aryan

---

Backend and frontend are stable

Avoid refactoring structure without discussion

Next focus areas:

Data sourcing

Symptom‑based logic

Underserved‑community alignment

---
