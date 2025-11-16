import Section from "@/components/section";

export default function Home() {
  return (
    <main>
      <h1>Hitesh Prajapati</h1>
      <p className="text-lg text-neutral-600 mb-1">
        Backend Engineer • Event Platforms • Distributed Systems
      </p>
      
      <p className="mb-6">
        📧 <a href="mailto:hiteshsprajapati103@gmail.com">hiteshsprajapati103@gmail.com</a> • 
        📱 <a href="tel:+917567121641">+91-7567121641</a> • 
        🔗 <a href="https://github.com/hitesh103" target="_blank" rel="noopener noreferrer">github.com/hitesh103</a> • 
        💼 <a href="https://linkedin.com/in/hitesh103" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>

      <Section title="Education">
        <div className="section-item">
          <p>
            <strong>L.D. College of Engineering, Ahmedabad</strong> — B.E. Electronics & Communication<br />
            CGPA: 8.6 / 10 (2020-2024)
          </p>
        </div>
      </Section>

      <Section title="Experience">
        <div className="section-item">
          <p><strong>Hopscotch India</strong> — Backend Engineer (Aug 2024 – Present)</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Replaced full-table sync with AWS SQS + Lambda event-driven pipeline, reducing processing time by 70%</li>
            <li>Built MCP server integration for Amazon Q CLI to access internal documentation</li>
            <li>Implemented business logic for product readiness workflows and operational automation</li>
          </ul>
        </div>

        <div className="section-item">
          <p><strong>AllEvents.in</strong> — Software Engineer (Dec 2023 – Aug 2024)</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Built distributed ingestion architecture using Docker Swarm & Portainer, handling 10K+ events daily</li>
            <li>Implemented RabbitMQ-driven scraping pipeline with Playwright, achieving 95% data accuracy</li>
            <li>Developed spam filtering & fuzzy-match deduplication using Elasticsearch, reducing duplicates by 85%</li>
          </ul>
        </div>

        <div className="section-item">
          <p><strong>AllEvents.in</strong> — Full Stack Intern (May 2023 – Nov 2023)</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Automated affiliate event ingestion system generating +11% revenue uplift</li>
            <li>Built unsubscribe API handling 1000+ daily requests with Redis caching</li>
          </ul>
        </div>
      </Section>

      <Section title="Projects">
        <div className="section-item">
          <p>
            <strong><a href="https://github.com/hitesh103/codeblend" target="_blank" rel="noopener noreferrer">CodeBlend Realtime Editor</a></strong> — 
            Collaborative code editor with real-time synchronization using React, WebSockets. Achieved 200ms latency sync with conflict resolution.
          </p>
        </div>
        
        <div className="section-item">
          <p>
            <strong><a href="https://github.com/hitesh103/assign-it" target="_blank" rel="noopener noreferrer">Assign It</a></strong> — 
            Assignment management system with Redis-cached backend for sub-100ms response times. Features role-based access control.
          </p>
        </div>
        
        <div className="section-item">
          <p>
            <strong><a href="https://github.com/hitesh103/writenow" target="_blank" rel="noopener noreferrer">WriteNow</a></strong> — 
            MERN collaborative notes app with Socket.io real-time sync, rich text editor, and version history.
          </p>
        </div>
        
        <div className="section-item">
          <p>
            <strong><a href="https://github.com/hitesh103/qpg" target="_blank" rel="noopener noreferrer">Question Paper Generator</a></strong> — 
            Automated exam paper generation system with AI-powered question selection and PDF generation using Node.js + MongoDB.
          </p>
        </div>
      </Section>

      <Section title="Programming Skills">
        <div className="section-item">
          <p>
            <strong>Languages:</strong> JavaScript, TypeScript, Node.js, PHP, C++, Java, Python<br />
            <strong>Databases:</strong> Redis, MongoDB, PostgreSQL, Elasticsearch<br />
            <strong>Tools & Platforms:</strong> Docker, AWS, RabbitMQ, Socket.io, Express.js, Next.js, Playwright
          </p>
        </div>
      </Section>

      <div className="mt-8 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          <a href="/resume.pdf" download className="text-blue-600 hover:underline">Download Resume (PDF)</a>
        </p>
      </div>
    </main>
  );
}
