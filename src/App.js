// === File: src/App.js ===
import { Header } from './components/Header';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import './App.css';

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-slate-50 min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto px-4">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center py-6 text-sm text-gray-500">© {new Date().getFullYear()} Asad Zia</footer>
    </div>
  );
}