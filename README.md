# 🎯 GoPratle Assignment — Event Requirement Posting System

A modern full-stack web application that allows users to create and submit event hiring requirements using a dynamic multi-step form.

---

## 🚀 Live Demo

🔗 Frontend: https://gopratle-seven.vercel.app/
🔗 Backend API: https://gopratle-l1d4.onrender.com 

---

## 🧱 Tech Stack

### Frontend
- Next.js (App Router)
- React
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)

---

## 🎯 Features (As Required)

### ✅ Step 1 — Event Basics
- Event Name
- Event Type
- Single Date OR Date Range
- Location
- Optional Venue
- Category Selection:
  - Event Planner
  - Performer
  - Crew

---

### ✅ Step 2 & 3 — Dynamic Fields
Form dynamically adapts based on selected category:

#### 🟢 Planner
- Budget
- Guest Count
- Services Needed

#### 🔵 Performer
- Genre
- Duration
- Equipment Needed

#### 🟡 Crew
- Crew Size
- Roles Required
- Shift Duration

---

### ✅ Step 4 — Submission
- Review structured event summary
- Submit data to backend API
- Data stored in MongoDB with category separation

---

## 🌟 Bonus Features (Added)

### 💡 Multi-Step UX Flow
- Smooth step navigation (Next / Back)
- Progress indicator

---

### 💡 Dynamic Form System
- Real-time field rendering based on category
- Clean data structure

---

### 💡 Draft Persistence
- Auto-save form data using localStorage
- Prevents data loss on refresh

---

### 💡 Date Range Toggle
- Switch between single date and date range
- Conditional UI rendering

---

### 💡 Validation System
- Required field validation
- Error messages
- Date consistency handling

---

### 💡 Modern UI (Tailwind)
- Dark theme
- Glassmorphism card UI
- Responsive layout
- Hover effects & transitions

---

### 💡 Clean Summary UI
- Replaced raw JSON with structured event summary
- User-friendly display

---

### 💡 Submission UX
- Loading state
- Disabled submit button
- Success feedback

---

### 💡 Reset Flow
- After submission:
  - Form resets automatically
  - Returns to Step 1
  - Clears saved draft

---

## 🧪 API Structure

### POST `/api/events`

```json
{
  "name": "Event Name",
  "type": "Wedding",
  "location": "City",
  "venue": "Optional",
  "category": "planner",
  "details": {
    "budget": "10000"
  }
}
