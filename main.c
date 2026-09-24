#include <stdio.h>
#include <stdlib.h>

/*
Manon Coulon - ePortfolio (single-file React component)
Instructions:
1. This is a single-file React component using Tailwind CSS classes.
2. To run: create a React app (Vite or Create React App), install Tailwind, then replace App.jsx with this file.
3. The file exports the default React component. Customize text, images, and links as needed.

Features included:
- Hero section with CTA
- About (education + background)
- Role models (3 profiles)
- International mobility projects (3 aligned projects)
- Projects / Research highlights
- Skills & Interests
- Contact form (front-end only)
- Downloadable resume placeholder
*/



const roleModels = [
  {
    name: 'Claire Dubois',
    title: 'Smart Mobility Engineer — Alstom',
    location: 'France / Europe',
    blurb:
      'Works on autonomous & connected transport systems, focusing on control and safety for sustainable urban mobility.',
    mobility: 'European internship (Germany) on control systems for sustainable urban mobility.'
  },
  {
    name: 'Dr. Alejandro Ruiz',
    title: 'Researcher — Fraunhofer Institute',
    location: 'Germany',
    blurb:
      'Research on renewable energy integration and smart grids. Strong expertise in system optimization and simulation.',
    mobility: 'Research exchange in the Netherlands/Denmark to study smart grid integration with renewables.'
  },
  {
    name: 'Yuki Tanaka',
    title: 'Robotics Engineer — Toyota',
    location: 'Japan',
    blurb:
      'Develops mechatronic and embedded systems for autonomous vehicles and advanced robotics.',
    mobility: 'Internship or research project in Japan on robotics and embedded systems for autonomous vehicles.'
  }
];

const mobilityProjects = [
  {
    title: 'Control Systems Internship (Germany)',
    align: 'Aligned with Claire Dubois — smart mobility & autonomous transport',
    details:
      'Work with a European OEM or research lab on control algorithms for connected vehicles and urban transport solutions.'
  },
  {
    title: 'Smart Grids Research Exchange (Netherlands/Denmark)',
    align: 'Aligned with Dr. Alejandro Ruiz — renewable integration & smart grids',
    details:
      'Join a research group to model and test energy management strategies that maximize renewable penetration in urban areas.'
  },
  {
    title: 'Robotics & Embedded Systems Project (Japan)',
    align: 'Aligned with Yuki Tanaka — robotics & mechatronics',
    details:
      'Participate in an industry-academic project on autonomous vehicle perception, real-time embedded control, or mechatronic integration.'
  }
];

export default function EPortfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="bg-white shadow">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Manon Coulon</h1>
            <p className="text-sm text-gray-600">3rd-year student — ENSEEIHT (3EA) • Electronics · Energy · Automation</p>
          </div>
          <nav className="space-x-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#rolemodels" className="hover:underline">Role Models</a>
            <a href="#mobility" className="hover:underline">Mobility</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="bg-gradient-to-tr from-indigo-50 to-white rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-extrabold">Engineering solutions for a connected, sustainable future</h2>
              <p className="mt-4 text-gray-700">I combine electronics, control systems and energy management to design smarter mobility, resilient grids and intelligent embedded systems.</p>
              <div className="mt-6 flex gap-4">
                <a href="#contact" className="inline-block px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium">Contact me</a>
                <a href="#projects" className="inline-block px-5 py-2 rounded-lg border border-gray-200 text-sm">See projects</a>
              </div>
            </div>

            <div className="w-48 h-48 bg-white rounded-xl shadow flex items-center justify-center">
              <div className="text-center">
                <div className="w-28 h-28 bg-gray-200 rounded-full mb-2" />
                <p className="text-sm">Photo placeholder</p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mb-8">
          <h3 className="text-2xl font-semibold">About me</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div>
              <p>
                I graduated from a French baccalaureate (specialties: Mathematics & Physics) and completed two years of preparatory classes (MPSI → PSI) at Lycée Thiers, Marseille. I’m now studying in the 3EA department at ENSEEIHT, where I focus on electronics, electrical energy and automation.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>Areas of interest: Autonomous & connected vehicles, Robotics, Mechatronics, Embedded systems, Renewable energies, Smart grids</li>
                <li>Technical skills: Circuit design, MATLAB/Simulink, C/C++ for embedded, Python, Control theory</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Career targets</h4>
              <p className="mt-2 text-sm text-gray-700">I aim to work at the intersection of energy and mobility — building systems that are efficient, safe and sustainable. I’m especially motivated by international experiences that broaden my technical and cultural perspective.</p>

              <div className="mt-4">
                <a href="/resume.pdf" download className="text-sm inline-block px-4 py-2 border rounded-lg">Download resume (placeholder)</a>
              </div>
            </div>
          </div>
        </section>

        {/* Role models */}
        <section id="rolemodels" className="mb-8">
          <h3 className="text-2xl font-semibold">Role models</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            {roleModels.map((r) => (
              <article key={r.name} className="bg-white rounded-xl p-4 shadow">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full" />
                  <div>
                    <h4 className="font-semibold">{r.name}</h4>
                    <p className="text-xs text-gray-500">{r.title} — {r.location}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-700">{r.blurb}</p>
                <p className="mt-3 text-xs text-indigo-600">Mobility idea: {r.mobility}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Mobility projects */}
        <section id="mobility" className="mb-8">
          <h3 className="text-2xl font-semibold">International mobility projects</h3>
          <div className="mt-4 space-y-4">
            {mobilityProjects.map((m) => (
              <div key={m.title} className="bg-white rounded-xl p-4 shadow">
                <h4 className="font-semibold">{m.title}</h4>
                <p className="text-sm text-gray-700 mt-2">{m.details}</p>
                <p className="mt-2 text-xs text-gray-500">Alignment: {m.align}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-8">
          <h3 className="text-2xl font-semibold">Selected projects & experiments</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-4 shadow">
              <h4 className="font-semibold">TIPE: Temperature & Photovoltaic Efficiency</h4>
              <p className="mt-2 text-sm text-gray-700">Experimental measurements (temperature, irradiance, voltage, current) and thermal/energy modeling to evaluate cooling strategies: ventilation, water circulation and fins.</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow">
              <h4 className="font-semibold">Embedded Systems: Motor Control Lab</h4>
              <p className="mt-2 text-sm text-gray-700">Design and implement real-time control for brushless DC motors using microcontrollers and sensor fusion.</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-8">
          <h3 className="text-2xl font-semibold">Skills & Tools</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {['C/C++ embedded', 'MATLAB/Simulink', 'Python', 'SPICE & Circuit Design', 'Control Systems', 'IoT & Sensors'].map((s) => (
              <span key={s} className="px-3 py-1 rounded-full bg-white shadow text-sm">{s}</span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-8">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-4 shadow">
              <p className="text-sm">Interested in collaborating or offering internships? Reach out!</p>
              <ul className="mt-3 text-sm text-gray-700">
                <li>Email: manon.coulon@example.com (placeholder)</li>
                <li>LinkedIn: linkedin.com/in/manoncoulon (placeholder)</li>
                <li>Location: Toulouse, France</li>
              </ul>
            </div>
            <form className="bg-white rounded-xl p-4 shadow">
              <label className="text-sm">Your name</label>
              <input className="block w-full mt-1 p-2 border rounded" placeholder="Name" />
              <label className="text-sm mt-3">Message</label>
              <textarea className="block w-full mt-1 p-2 border rounded" rows={4} placeholder="Hi Manon..." />
              <button type="button" className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded">Send (front-end only)</button>
            </form>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>Built with ❤️ — ENSEEIHT 3EA • Contact: manon.coulon@example.com</p>
        </footer>
      </main>
    </div>
  );
}
