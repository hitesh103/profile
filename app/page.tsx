export default function Home() {
  return (
    <div className="columns" style={{paddingTop: '20px'}}>
      <div className="column is-8 is-offset-2">
        
        <div className="level content is-marginless">
          <p className="title is-2">Hitesh Prajapati</p>
          <p className="subtitle is-5">
            <a href="mailto:hiteshsprajapati103@gmail.com" className="icon"><i className="fa fa-envelope-square" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/hitesh103/" className="icon"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
            <a href="https://github.com/hitesh103" className="icon"><i className="fa fa-github-square" aria-hidden="true"></i></a>
            <a href="/resume.pdf" className="icon" download><i className="fa fa-download" aria-hidden="true"></i></a>
          </p>
        </div>

        <div className="content">
          <span className="heading"><h3>Education</h3></span>
          <div className="level">
            <p className="is-marginless">L.D. College of Engineering, Ahmedabad<br/><span className="content is-marginless" style={{fontSize: '0.8rem'}}>Bachelor of Electronics & Communication Engineering; CGPA 8.6/10</span></p>
            <p style={{textAlign: 'right', fontSize: '0.8rem'}}>Ahmedabad, India<br/><span className="content is-marginless">Jun 2020 - May 2024</span></p>
          </div>
        </div>

        <div className="content">
          <span className="heading"><h3>Experience</h3></span>
          
          <div className="level is-marginless">
            <p className="is-marginless">Hopscotch India<br/><span className="content is-marginless" style={{fontSize: '0.8rem'}}>Backend Engineer</span></p>
            <p style={{textAlign: 'right', fontSize: '0.8rem'}}>Remote<br/><span className="content is-marginless">Aug 2024 - Present</span></p>
          </div>
          <ul style={{marginTop: '0.2em', listStyleType: 'circle'}}>
            <li className="content is-marginless" style={{fontSize: '0.8rem'}}>
              <span className="heading is-marginless">
                Event-Driven Pipeline Architecture
                <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>AWS SQS Lambda Node.js</span>
              </span>
              Replaced full-table sync with AWS SQS + Lambda event-driven pipeline, reducing processing time by 70%. Built scalable architecture handling millions of events with real-time processing capabilities.
            </li>
            <li className="content is-marginless" style={{fontSize: '0.8rem'}}>
              <span className="heading is-marginless">
                MCP Server Integration
                <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>TypeScript Amazon Q CLI</span>
              </span>
              Built custom MCP server integration for Amazon Q CLI, enabling seamless access to internal documentation and improving developer productivity by 40%.
            </li>
            <li className="content is-marginless" style={{fontSize: '0.8rem'}}>
              <span className="heading is-marginless">
                Operational Automation
                <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>Node.js Redis</span>
              </span>
              Implemented business logic for product readiness workflows and operational automation systems, reducing manual intervention by 85%.
            </li>
          </ul>

          <div className="level is-marginless">
            <p className="is-marginless">AllEvents.in<br/><span className="content is-marginless" style={{fontSize: '0.8rem'}}>Software Engineer</span></p>
            <p style={{textAlign: 'right', fontSize: '0.8rem'}}>Ahmedabad, India<br/><span className="content is-marginless">Dec 2023 - Aug 2024</span></p>
          </div>
          <ul style={{marginTop: '0.2em', listStyleType: 'circle'}}>
            <li className="content is-marginless" style={{fontSize: '0.8rem'}}>
              <span className="heading is-marginless">
                Distributed Ingestion Architecture
                <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>Docker Swarm Portainer</span>
              </span>
              Designed distributed ingestion architecture using Docker Swarm & Portainer, handling 10K+ events daily with 99.9% uptime and horizontal scaling capabilities.
            </li>
            <li className="content is-marginless" style={{fontSize: '0.8rem'}}>
              <span className="heading is-marginless">
                RabbitMQ Scraping Pipeline
                <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>RabbitMQ Playwright Node.js</span>
              </span>
              Built RabbitMQ-driven scraping pipeline with Playwright, achieving 95% data accuracy and processing 50K+ web pages daily with intelligent retry mechanisms.
            </li>
            <li className="content is-marginless" style={{fontSize: '0.8rem'}}>
              <span className="heading is-marginless">
                Spam Filtering & Deduplication
                <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>Elasticsearch Fuzzy Matching</span>
              </span>
              Developed spam filtering & fuzzy-match deduplication using Elasticsearch, reducing duplicate events by 85% and improving data quality across the platform.
            </li>
          </ul>

          <div className="level is-marginless">
            <p className="is-marginless">AllEvents.in<br/><span className="content is-marginless" style={{fontSize: '0.8rem'}}>Full Stack Intern</span></p>
            <p style={{textAlign: 'right', fontSize: '0.8rem'}}>Ahmedabad, India<br/><span className="content is-marginless">May 2023 - Nov 2023</span></p>
          </div>
          <ul style={{marginTop: '0.2em', listStyleType: 'circle'}}>
            <li className="content is-marginless" style={{fontSize: '0.8rem'}}>
              <span className="heading is-marginless">
                Affiliate Event Ingestion
                <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>Node.js MongoDB</span>
              </span>
              Automated affiliate event ingestion system generating +11% revenue uplift through improved data flow and real-time synchronization with partner APIs.
            </li>
            <li className="content is-marginless" style={{fontSize: '0.8rem'}}>
              <span className="heading is-marginless">
                High-Performance Unsubscribe API
                <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>Redis Express.js</span>
              </span>
              Built unsubscribe API handling 1000+ daily requests with Redis caching, achieving sub-100ms response times and GDPR compliance.
            </li>
          </ul>
        </div>

        <div className="content">
          <span className="heading"><h3>Projects</h3></span>
          
          <p className="heading is-marginless">
            CodeBlend Realtime Editor
            <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>React WebSockets Node.js</span>
          </p>
          <p style={{fontSize: '0.8rem'}}>Collaborative code editor with real-time synchronization achieving 200ms latency sync. Built with React frontend, WebSocket-based backend, and conflict resolution algorithms for seamless multi-user editing experience.</p>
          
          <p className="heading is-marginless">
            Assign It - Assignment Management
            <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>Node.js Redis MongoDB</span>
          </p>
          <p style={{fontSize: '0.8rem'}}>Assignment management system with Redis-cached backend achieving sub-100ms response times. Features role-based access control, automated deadline notifications, and real-time progress tracking.</p>
          
          <p className="heading is-marginless">
            WriteNow - Collaborative Notes
            <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>MERN Socket.io</span>
          </p>
          <p style={{fontSize: '0.8rem'}}>MERN stack collaborative notes application with Socket.io real-time synchronization. Includes rich text editor, version history, conflict resolution, and markdown support for seamless collaboration.</p>
          
          <p className="heading is-marginless">
            Question Paper Generator
            <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>Node.js MongoDB PDF.js</span>
          </p>
          <p style={{fontSize: '0.8rem'}}>Automated exam paper generation system with AI-powered question selection algorithms. Features PDF generation with custom templates, question bank management, and difficulty level balancing.</p>
        </div>

        <div className="content">
          <span className="heading"><h3>Skills</h3></span>
          <p className="heading is-marginless">Languages</p>
          <p style={{fontSize: '0.8rem'}}>
            JavaScript, TypeScript, Node.js, PHP, C++, Java, Python, C
          </p>

          <p className="heading is-marginless">Databases & Infrastructure</p>
          <p style={{fontSize: '0.8rem'}}>
            Redis, MongoDB, PostgreSQL, Elasticsearch, Docker, AWS, RabbitMQ
          </p>

          <p className="heading is-marginless">Frameworks & Tools</p>
          <p style={{fontSize: '0.8rem'}}>
            Express.js, Next.js, React, Socket.io, Playwright, Docker Swarm, Portainer
          </p>
        </div>

        <footer className="footer" style={{background: 'inherit'}}>
          <div className="content has-text-centered">
            <p>
              <a className="icon" href="https://github.com/hitesh103/profile">
                <i className="fa fa-github"></i>
              </a>
              <a href="/resume.pdf" className="icon" download>
                <i className="fa fa-download" aria-hidden="true"></i>
              </a>
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}
