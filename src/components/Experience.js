// === File: src/components/Experience.js ===
export function Experience() {
  return (
    <section id="experience" className="my-12">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold">
            Product Owner & Architect — Siemens Digital Industries Software
          </h3>
          <p className="italic">Jul 2021 – Present | Lahore, Pakistan</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              Lead Android & Middleware teams serving German luxury car OEMs;
              manage RFQs, compliance matrices and PI Planning in SAFe.
            </li>
            <li>
              Built Generative‑AI code‑review bot cutting review time by 30% and
              a test‑case generator shrinking validation effort by 60%.
            </li>
            <li>
              Achieved Automotive SPICE® Level 2 for Android Automotive OS
              middleware.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}