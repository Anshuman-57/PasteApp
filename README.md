# PasteApp

PasteApp is a simple web application for creating, viewing, editing, and managing text pastes. Built with React, Redux Toolkit, Vite, and TailwindCSS.

## Features

- Create new pastes with a title and content
- Edit and update existing pastes
- View individual pastes
- Delete and copy pastes
- Search pastes by title
- Share pastes (UI only)
- Persistent storage using localStorage
- Responsive UI with TailwindCSS

## Tech Stack

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [React Hot Toast](https://react-hot-toast.com/)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd pasteapp
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

Start the development server:
```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
```

### Linting

```sh
npm run lint
```

## Project Structure

```
pasteapp/
  ├── public/
  ├── src/
  │   ├── assets/
  │   ├── components/
  │   ├── redux/
  │   ├── App.jsx
  │   ├── main.jsx
  │   └── store.js
  ├── index.html
  ├── package.json
  └── vite.config.js
