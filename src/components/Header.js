import { FaLinkedin } from 'react-icons/fa';

export function Header() {
  return (
    <header className="bg-white shadow mb-8">
      <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-2 text-center">Asad Zia</h1>
        <p className="text-center text-lg text-gray-600">
          Chief Android Officer | Automotive & Android Innovator | ASPICE Expert
        </p>
        <a
          href="https://www.linkedin.com/in/asadziach/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-blue-600 hover:underline"
        >
          <FaLinkedin /> Connect on LinkedIn
        </a>
      </div>
    </header>
  );
}
