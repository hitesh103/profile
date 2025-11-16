import Section from "@/components/section";

export default function Home() {
  return (
    <main>
      <h1>Hitesh Prajapati</h1>
      <p className="text-lg text-neutral-500">
        Backend Engineer • Event Platforms • Distributed Systems
      </p>

      <p className="mt-2">
        📧 hiteshsprajapati103@gmail.com • 📱 +91-7567121641 <br />
        🔗 https://hitesh.com • 🔗 github.com/hitesh • 🔗 LinkedIn
      </p>

      <Section title="Education">
        <p>
          <b>L.D. College of Engineering, Ahmedabad</b> — B.E. Electronics & Communication<br />
          CGPA: 8.6 / 10 (2020-2024)
        </p>
      </Section>

      <Section title="Experience">
        <div className="section-item">
          <b>Hopscotch India</b> — Backend Engineer (Aug 2024 – Present)
          <ul className="list-disc ml-5">
            <li>Replaced full-table sync with AWS SQS + Lambda event-driven pipeline.</li>
            <li>Built MCP server to access internal docs through Amazon Q CLI.</li>
            <li>Added business logic for product readiness & operational automation.</li>
          </ul>
        </div>

        <div className="section-item">
          <b>AllEvents.in</b> — Software Engineer (Dec 2024 – Aug 2024)
          <ul className="list-disc ml-5">
            <li>Built distributed ingestion architecture using Docker Swarm & Portainer.</li>
            <li>Implemented RabbitMQ-driven scraping pipeline using Playwright.</li>
            <li>Developed spam filtering & fuzzy-match dedupe using Elasticsearch.</li>
          </ul>
        </div>

        <div className="section-item">
          <b>AllEvents.in</b> — Full Stack Intern (May 2023 – Nov 2023)
          <ul className="list-disc ml-5">
            <li>Automated affiliate event ingestion generating +11% revenue uplift.</li>
            <li>Built unsubscribe API handling 1000+ daily requests.</li>
          </ul>
        </div>
      </Section>

      <Section title="Projects">
        <ul className="list-disc ml-5">
          <li>
            <b>CodeBlend Realtime Editor</b> — React, WebSockets, 200ms latency sync.
          </li>
          <li>
            <b>Assign It</b> — Redis-cached backend for assignment workflows.
          </li>
          <li>
            <b>WriteNow</b> — MERN collaborative notes app with Socket.io.
          </li>
          <li>
            <b>Question Paper Generator</b> — Exam generator using Node + Mongo.
          </li>
        </ul>
      </Section>

      <Section title="Programming Skills">
        <p>
          <b>Languages:</b> C++, PHP, JavaScript, Java, C <br />
          <b>Tech:</b> Node.js, Express.js, Next.js, Redis, Docker, Elasticsearch
        </p>
      </Section>
    </main>
  );
}
