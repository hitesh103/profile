import Section from "@/components/section";

export default function Home() {
  return (
    <main>
      {/* Header */}
      <div className="text-center mb-16">
        <h1>Hitesh Prajapati</h1>
        <p className="text-xl text-gray-600 mb-6">
          Backend Engineer • Event Platforms • Distributed Systems
        </p>
        <p className="text-lg text-gray-500 mb-8">
          Building scalable systems that handle millions of events and transactions
        </p>
        
        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="mailto:hiteshsprajapati103@gmail.com" className="contact-item">
            <span>📧</span>
            <span>hiteshsprajapati103@gmail.com</span>
          </a>
          <a href="tel:+917567121641" className="contact-item">
            <span>📱</span>
            <span>+91-7567121641</span>
          </a>
          <a href="https://github.com/hitesh103" target="_blank" rel="noopener noreferrer" className="contact-item">
            <span>🔗</span>
            <span>github.com/hitesh103</span>
          </a>
          <a href="https://linkedin.com/in/hitesh103" target="_blank" rel="noopener noreferrer" className="contact-item">
            <span>💼</span>
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Download Resume Button */}
        <a href="/resume.pdf" download className="btn-primary">
          <span>📄</span>
          <span className="ml-2">Download Resume</span>
        </a>
      </div>

      {/* Tech Stack */}
      <Section title="Tech Stack">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-3">Languages & Frameworks</h4>
            <div className="flex flex-wrap">
              {['Node.js', 'JavaScript', 'TypeScript', 'PHP', 'C++', 'Java', 'Python'].map(tech => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-3">Databases & Infrastructure</h4>
            <div className="flex flex-wrap">
              {['Redis', 'MongoDB', 'PostgreSQL', 'Elasticsearch', 'Docker', 'AWS', 'RabbitMQ'].map(tech => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Tools & Platforms</h4>
            <div className="flex flex-wrap">
              {['Docker Swarm', 'Portainer', 'Playwright', 'Socket.io', 'Express.js', 'Next.js'].map(tech => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section title="Professional Experience">
        <div className="section-item">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Backend Engineer</h3>
              <p className="text-lg text-blue-600 font-medium">Hopscotch India</p>
            </div>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Aug 2024 – Present</span>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">▶</span>
              <span>Architected event-driven pipeline using <strong>AWS SQS + Lambda</strong>, replacing full-table sync and reducing processing time by 70%</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">▶</span>
              <span>Built custom <strong>MCP server</strong> integration for Amazon Q CLI, enabling seamless access to internal documentation</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">▶</span>
              <span>Implemented business logic for product readiness workflows and operational automation systems</span>
            </li>
          </ul>
        </div>

        <div className="section-item">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Software Engineer</h3>
              <p className="text-lg text-blue-600 font-medium">AllEvents.in</p>
            </div>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Dec 2023 – Aug 2024</span>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">▶</span>
              <span>Designed distributed ingestion architecture using <strong>Docker Swarm & Portainer</strong>, handling 10K+ events daily</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">▶</span>
              <span>Built <strong>RabbitMQ-driven scraping pipeline</strong> with Playwright, achieving 95% data accuracy</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">▶</span>
              <span>Developed spam filtering & fuzzy-match deduplication using <strong>Elasticsearch</strong>, reducing duplicate events by 85%</span>
            </li>
          </ul>
        </div>

        <div className="section-item">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Full Stack Intern</h3>
              <p className="text-lg text-blue-600 font-medium">AllEvents.in</p>
            </div>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">May 2023 – Nov 2023</span>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">▶</span>
              <span>Automated affiliate event ingestion system generating <strong>+11% revenue uplift</strong> through improved data flow</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">▶</span>
              <span>Built high-performance unsubscribe API handling <strong>1000+ daily requests</strong> with Redis caching</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Projects */}
      <Section title="Featured Projects">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="project-card">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900">CodeBlend Realtime Editor</h3>
              <a href="https://github.com/hitesh103/codeblend" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <span>🔗</span>
              </a>
            </div>
            <p className="text-gray-600 mb-4">Collaborative code editor with real-time synchronization</p>
            <ul className="space-y-2 text-sm text-gray-700 mb-4">
              <li>• Real-time collaboration with <strong>200ms latency</strong></li>
              <li>• WebSocket-based sync with conflict resolution</li>
              <li>• Multi-language syntax highlighting</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="tech-badge">React</span>
              <span className="tech-badge">WebSockets</span>
              <span className="tech-badge">Node.js</span>
            </div>
          </div>

          <div className="project-card">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900">Assign It</h3>
              <a href="https://github.com/hitesh103/assign-it" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <span>🔗</span>
              </a>
            </div>
            <p className="text-gray-600 mb-4">Assignment management system with Redis caching</p>
            <ul className="space-y-2 text-sm text-gray-700 mb-4">
              <li>• Redis-cached backend for <strong>sub-100ms</strong> response times</li>
              <li>• Role-based access control system</li>
              <li>• Automated deadline notifications</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Redis</span>
              <span className="tech-badge">MongoDB</span>
            </div>
          </div>

          <div className="project-card">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900">WriteNow</h3>
              <a href="https://github.com/hitesh103/writenow" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <span>🔗</span>
              </a>
            </div>
            <p className="text-gray-600 mb-4">Collaborative notes app with real-time sync</p>
            <ul className="space-y-2 text-sm text-gray-700 mb-4">
              <li>• Real-time collaborative editing with Socket.io</li>
              <li>• Rich text editor with markdown support</li>
              <li>• Version history and conflict resolution</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="tech-badge">MERN</span>
              <span className="tech-badge">Socket.io</span>
              <span className="tech-badge">MongoDB</span>
            </div>
          </div>

          <div className="project-card">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900">Question Paper Generator</h3>
              <a href="https://github.com/hitesh103/qpg" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <span>🔗</span>
              </a>
            </div>
            <p className="text-gray-600 mb-4">Automated exam paper generation system</p>
            <ul className="space-y-2 text-sm text-gray-700 mb-4">
              <li>• AI-powered question selection algorithm</li>
              <li>• PDF generation with custom templates</li>
              <li>• Question bank management system</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">MongoDB</span>
              <span className="tech-badge">PDF.js</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Education */}
      <Section title="Education">
        <div className="section-item">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Bachelor of Engineering</h3>
              <p className="text-lg text-blue-600 font-medium">Electronics & Communication</p>
              <p className="text-gray-600">L.D. College of Engineering, Ahmedabad</p>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2020-2024</span>
              <p className="text-lg font-bold text-green-600 mt-2">CGPA: 8.6/10</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <div className="text-center mt-16 pt-8 border-t border-gray-200">
        <p className="text-gray-600 mb-4">Let's build something amazing together!</p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:hiteshsprajapati103@gmail.com" className="link-hover">Email</a>
          <a href="https://github.com/hitesh103" target="_blank" rel="noopener noreferrer" className="link-hover">GitHub</a>
          <a href="https://linkedin.com/in/hitesh103" target="_blank" rel="noopener noreferrer" className="link-hover">LinkedIn</a>
        </div>
      </div>
    </main>
  );
}
