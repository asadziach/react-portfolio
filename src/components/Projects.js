// === File: src/components/Projects.js ===
export function Projects() {
  return (
    <section id="projects" className="my-12">
      <h2 className="text-2xl font-semibold mb-4">Hobbyist Projects</h2>
      <p>
        Explore my hardware and ML projects on Hackster.io:
        <a
          href="https://www.hackster.io/asadzia"
          className="text-blue-600 hover:underline ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          hackster.io/asadzia
        </a>
      </p>
    </section>
  );
}