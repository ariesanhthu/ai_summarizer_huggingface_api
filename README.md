# Hugging Face API Integration with Next.js 15 & TypeScript

This project demonstrates how to integrate the **Hugging Face API** into a **Next.js 15** application using **TypeScript**. The example provided fetches a **text summary** from the Hugging Face `facebook/bart-large-cnn` model.

---

## 🚀 Features
- ✅ **Next.js 15 with TypeScript**
- ✅ **API Route for Hugging Face**
- ✅ **Axios for API Requests**
- ✅ **Client-Side UI for Summarization**
- ✅ **Environment Variables for Security**

---

## 📦 Installation

### 1️⃣ Clone the repository
```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Create `.env.local` file
Set up your Hugging Face API key:
```env
HUGGING_FACE_API_KEY=your_hugging_face_api_token
```
🔴 **Do not commit this file to GitHub!**

---

## 🚀 Running the Project
```sh
npm run dev
```
Then, open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 📂 Project Structure
```
📦 your-repo
├── 📁 app
│   ├── 📁 api
│   │   ├── 📁 huggingface
│   │   │   ├── 📄 route.ts  # API Route for Hugging Face
│   ├── 📄 page.tsx  # Main Page
├── 📁 components
│   ├── 📄 HuggingFace.tsx  # Summarization UI
├── 📄 .env.local.example  # Example Env File
├── 📄 package.json
├── 📄 README.md
```

---

## 🔧 API Route (`app/api/huggingface/route.ts`)

Handles communication with Hugging Face API:
