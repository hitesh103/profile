'use client'

export default function Home() {
  const downloadPDF = () => {
    window.print();
  };

  return (
    <div className="columns" style={{paddingTop: '20px'}}>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media print {
            body { 
              font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
              font-size: 12px !important;
              line-height: 1.4 !important;
              color: #000 !important;
              background: white !important;
            }
            .no-print { display: none !important; }
            .fa { display: none !important; }
            a { color: #000 !important; text-decoration: none !important; }
            .columns { padding-top: 0 !important; }
            .column { padding: 0.5rem !important; }
            .title { font-size: 24px !important; margin-bottom: 8px !important; }
            .subtitle { font-size: 14px !important; }
            .heading h3 { font-size: 16px !important; margin: 12px 0 6px 0 !important; }
            .content { margin-bottom: 8px !important; }
            ul { margin-top: 4px !important; }
            li { margin-bottom: 4px !important; }
            .level { margin-bottom: 6px !important; }
            .print-contact { display: block !important; }
          }
          .print-contact { display: none; }
        `
      }} />
      
      <div className="column is-8 is-offset-2">
        
        <div className="level content is-marginless">
          <p className="title is-2">Hitesh Prajapati</p>
          <p className="subtitle is-5 no-print">
            <a href="mailto:hiteshsprajapati103@gmail.com" className="icon"><i className="fa fa-envelope-square" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/hitesh103/" className="icon"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
            <a href="https://github.com/hitesh103" className="icon"><i className="fa fa-github-square" aria-hidden="true"></i></a>
            <button onClick={downloadPDF} className="icon" style={{border: 'none', background: 'none', cursor: 'pointer'}}><i className="fa fa-download" aria-hidden="true"></i></button>
          </p>
          <p className="subtitle is-5 print-contact">
            📧 hiteshsprajapati103@gmail.com • 💼 linkedin.com/in/hitesh103 • 🔗 github.com/hitesh103
          </p>
        </div>

        <div className="content">
          <span className="heading"><h3>Education</h3></span>
          <div className="level">
            <p className="is-marginless">L.D. College of Engineering, Ahmedabad<br/><span className="content is-marginless" style={{fontSize: '0.8rem'}}>Bachelor of Electronics & Communication Engineering; CGPA 7.9/10</span></p>
            <p style={{textAlign: 'right', fontSize: '0.8rem'}}>Ahmedabad, India<br/><span className="content is-marginless">Jun 2020 - May 2024</span></p>
          </div>
        </div>

        <div className="content">
          <span className="heading"><h3>Experience</h3></span>
          
          <div className="level is-marginless">
            <p className="is-marginless">Hopscotch India<br/><span className="content is-marginless" style={{fontSize: '0.8rem'}}>Software Engineer</span></p>
            <p style={{textAlign: 'right', fontSize: '0.8rem'}}>Bangalore, India<br/><span className="content is-marginless">Aug 2024 - Present</span></p>
          </div>
          <ul style={{marginTop: '0.2em', listStyleType: 'circle'}}>
            <li className="content is-marginless" style={{fontSize: '0.8rem'}}>
              <span className="heading is-marginless">
                Event-Driven Product Sync Pipeline
                <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>Java Spring Boot AWS SQS Lambda Elasticsearch</span>
              </span>
              Replaced manual full-table sync job (100+ DB queries/sec) with an event-driven pipeline. Product creation now pushes an event to SQS → triggers Lambda → updates Elasticsearch in real time. Reduced sync load by >90% and eliminated stale product entries on storefront.
            </li>
            <li className="content is-marginless" style={{fontSize: '0.8rem'}}>
              <span className="heading is-marginless">
                MCP Server Integration for Internal Knowledge Access
                <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>Java Spring Boot Confluence API</span>
              </span>
              Built a unified MCP server that connects internal documentation to AI tools (Amazon Q, etc.). Developers & business teams can now query service flows and warehouse logic directly via AI. Reduced internal support queries by 60%.
            </li>
            <li className="content is-marginless" style={{fontSize: '0.8rem'}}>
              <span className="heading is-marginless">
                Internal CRM & Warehouse Tools
                <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>Java React</span>
              </span>
              Developed internal tools to automate product status changes, warehouse workflows, and repetitive tasks. Improved business team productivity by ~85% and eliminated manual coordination.
            </li>
          </ul>

          <div className="level is-marginless">
            <p className="is-marginless">AllEvents.in<br/><span className="content is-marginless" style={{fontSize: '0.8rem'}}>Software Engineer</span></p>
            <p style={{textAlign: 'right', fontSize: '0.8rem'}}>Ahmedabad, India<br/><span className="content is-marginless">Dec 2023 - Aug 2024</span></p>
          </div>
          <ul style={{marginTop: '0.2em', listStyleType: 'circle'}}>
            <li className="content is-marginless" style={{fontSize: '0.8rem'}}>
              <span className="heading is-marginless">
                Distributed Scraper Control Platform
                <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>Docker Swarm Portainer</span>
              </span>
              Built a centralized dashboard where developers can start, stop, and create scraper containers on demand. Connected unused servers via Docker Swarm to avoid new infra cost — deployment reduced from hours → minutes.
            </li>
            <li className="content is-marginless" style={{fontSize: '0.8rem'}}>
              <span className="heading is-marginless">
                Event-Driven Scraping Architecture
                <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>RabbitMQ Playwright Node.js</span>
              </span>
              Designed scalable scraper pipeline: Scanner → Queue → Workers. Scraped 70–80K events/day, with fault-tolerant retry logic and parallel processing.
            </li>
            <li className="content is-marginless" style={{fontSize: '0.8rem'}}>
              <span className="heading is-marginless">
                Anti-Detection Scraper Framework
                <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>Playwright Proxy Rotation</span>
              </span>
              Created internal GitHub template with rotating proxies, fingerprinting, random user agents, and human-like delays. Achieved 95% undetected scraping success across Facebook, Eventbrite, BookMyShow, Ticketmaster, etc.
            </li>
            <li className="content is-marginless" style={{fontSize: '0.8rem'}}>
              <span className="heading is-marginless">
                Internal Developer Documentation System
                <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>Documentation Platform</span>
              </span>
              Introduced and implemented a unified internal docs upload system for engineering teams. Bootstrapped documentation culture — first engineer to start and push internal tech docs, now used org-wide.
            </li>
            <li className="content is-marginless" style={{fontSize: '0.8rem'}}>
              <span className="heading is-marginless">
                Event Deduplication & Spam Filtering
                <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>Elasticsearch Fuzzy Matching</span>
              </span>
              Built a similarity-based deduplication system to detect near-duplicate events across multiple sources. Redirected duplicates to the original event page, reduced spam events and stale listings. Improved event data quality and reduced duplicate listings by ~85%.
            </li>
            <li className="content is-marginless" style={{fontSize: '0.8rem'}}>
              <span className="heading is-marginless">
                AI Ad Manager
                <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>Vue.js Meta Ads API</span>
              </span>
              Built AI tool that auto-generates targeting audience & budget based on historical event performance. Users only review & publish to Facebook/WhatsApp — 90% reduction in ad setup time.
            </li>
            <li className="content is-marginless" style={{fontSize: '0.8rem'}}>
              <span className="heading is-marginless">
                Custom Website Builder Automation
                <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>Automation CRM</span>
              </span>
              Automated deployment for client-branded event pages from CRM. Enabled testing without dev involvement, eliminating manual deployment work.
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
              Integrated 3rd-party affiliate APIs to automatically ingest event listings into AllEvents. Increased affiliate revenue contribution by +11% (~₹17 lakh/month).
            </li>
            <li className="content is-marginless" style={{fontSize: '0.8rem'}}>
              <span className="heading is-marginless">
                High-Performance Unsubscribe API
                <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>Redis Express.js</span>
              </span>
              Built caching-based unsubscribe API handling 1000+ requests/day with &lt;100ms latency. Fully GDPR-compliant tokenized workflow.
            </li>
            <li className="content is-marginless" style={{fontSize: '0.8rem'}}>
              <span className="heading is-marginless">
                MySQL Connection Pool Optimization
                <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>PHP AWS RDS</span>
              </span>
              Fixed connection saturation issue caused by persistent PHP connections. Added RDS Proxy + long-query killer job → eliminated outages and reduced DB stress.
            </li>
          </ul>
        </div>

        <div className="content">
          <span className="heading"><h3>Projects</h3></span>
          
          <p className="heading is-marginless">
            CodeBlend — Real-Time Code Editor
            <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>React WebSockets Node.js</span>
          </p>
          <p style={{fontSize: '0.8rem'}}>Collaborative editor with real-time presence, conflict resolution, and sub-200ms sync latency.</p>
          
          <p className="heading is-marginless">
            WriteNow — Collaborative Notes
            <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>MERN Socket.io</span>
          </p>
          <p style={{fontSize: '0.8rem'}}>Rich-text editor with markdown, versioning, and multi-user live editing.</p>
          
          <p className="heading is-marginless">
            Question Paper Generator
            <span style={{marginLeft: '5px', fontSize: '10px', fontFamily: 'monospace', color: '#00d1b2'}}>Node.js MongoDB PDF.js</span>
          </p>
          <p style={{fontSize: '0.8rem'}}>Auto-generates exam papers using difficulty scoring and question bank tagging.</p>
        </div>

        <div className="content">
          <span className="heading"><h3>Skills</h3></span>
          <p className="heading is-marginless">Languages</p>
          <p style={{fontSize: '0.8rem'}}>
            Java, JavaScript, TypeScript, Node.js, C++, PHP
          </p>

          <p className="heading is-marginless">Frameworks</p>
          <p style={{fontSize: '0.8rem'}}>
            Spring Boot, Express.js, React, Next.js, Socket.io, Playwright
          </p>

          <p className="heading is-marginless">Databases & Infrastructure</p>
          <p style={{fontSize: '0.8rem'}}>
            PostgreSQL, MongoDB, Redis, Elasticsearch, Docker, AWS, RabbitMQ, Docker Swarm, Portainer, EC2, SQS, Lambda, Cloudflare Workers and Pages, Cloudflare R2
          </p>
        </div>

        <footer className="footer no-print" style={{background: 'inherit'}}>
          <div className="content has-text-centered">
            <p>
              <a className="icon" href="https://github.com/hitesh103/profile">
                <i className="fa fa-github"></i>
              </a>
              <button onClick={downloadPDF} className="icon" style={{border: 'none', background: 'none', cursor: 'pointer'}}>
                <i className="fa fa-download" aria-hidden="true"></i>
              </button>
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}
