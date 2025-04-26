// === File: src/components/Contact.js ===
import { FaEnvelope } from 'react-icons/fa';

export function Contact() {
  return (
    <section id="contact" className="my-12">
      <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
      <p className="flex items-center gap-2">
        <FaEnvelope />
        <a href="mailto:asadzia@gmail.com" className="hover:underline">
          asadzia@gmail.com
        </a>
      </p>
    </section>
  );
}
