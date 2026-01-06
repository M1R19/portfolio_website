// Modal content data
const modalData = {
  about: `
    <div class="about-header">
      <div class="about-avatar">
        <img src="assets/avatars/avtar3.jpeg" alt="Soham Bhingarde" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
      </div>
      <div class="about-info">
        <h2>Soham Bhingarde</h2>
        <p class="subtitle">NY-based financial and economics analyst</p>
      </div>
    </div>
    <div class="about-bio">
      <p>hello! i'm soham, an economics student and analyst.</p>
      <p>I...</p>
      <ul class="skills-list">
        <li>analyze <a href="#">data and financial statements</a>,</li>
        <li>create <a href="#">policies</a>,</li>
        <li>understand risks and mitigate environmental factors, and</li>
        <li>love diving deep into economic research!</li>
      </ul>
      <div class="contact-cta">
        interested in working with me? send me an email at <a href="mailto:sohambhingarde1@gmail.com">sohambhingarde1@gmail.com</a>! :)
      </div>
    </div>
    <div class="section-divider"></div>
    <div class="section-title">Education</div>
    <div class="info-item">
      <h4>Master of Arts in Economics</h4>
      <p>SUNY University at Buffalo • 2026</p>
    </div>
    <div class="info-item">
      <h4>Bachelor of Arts in Economics</h4>
      <p>SUNY University at Buffalo • Magna Cum Laude 2023</p>
    </div>
    <div class="section-divider"></div>
    <div class="section-title">Other Interests</div>
    <div class="info-item">
      <p>🎭 Poetry • 🎮 Gaming • 🎨 Painting • 🎹 Piano • ⚽ Soccer</p>
    </div>
    <div class="section-divider"></div>
    <div class="section-title">Language Proficiency</div>
    <div class="info-item">
      <p>I have native fluency in <strong>English</strong>, <strong>Marathi</strong>, and <strong>Hindi</strong>, and can speak conversational <strong>Spanish</strong>.</p>
    </div>
  `,
  
  links: `
    <div class="links-grid">
      <a href="https://github.com/M1R19?tab=projects" target="_blank" class="link-item">
        <div class="link-icon"><svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></div>
        <span class="link-name">github</span>
      </a>
      <a href="https://www.linkedin.com/in/soham-bhingarde" target="_blank" class="link-item">
        <div class="link-icon"><svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></div>
        <span class="link-name">linkedin</span>
      </a>
      <a href="https://figma.com/@42b82a3d_a70f_4" target="_blank" class="link-item">
        <div class="link-icon"><svg viewBox="0 0 24 24"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg></div>
        <span class="link-name">figma</span>
      </a>
      <a href="https://drive.google.com/file/d/1YourResumeIDHere/view" target="_blank" class="link-item">
        <div class="link-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg></div>
        <span class="link-name">resume</span>
      </a>
    </div>
    <div class="links-note">💡 Click any link above to visit</div>
  `,
  
  work: `
    <div class="work-grid">
      <div class="work-item">
        <h4>🏦 Mutual Bank Strategic Financial Analysis</h4>
        <p>Led a comprehensive strategic analysis and financial statement review for a mutual bank, developing pricing strategies for new lending products, restructuring existing offerings to strengthen margins, and recommending corporate governance frameworks and technology investments to enhance customer experience and operational efficiency.</p>
        <div class="work-tags">
          <span class="work-tag">Strategic Analysis</span>
          <span class="work-tag">Financial Analysis</span>
          <span class="work-tag">Pricing Strategy</span>
          <span class="work-tag">Corporate Governance</span>
          <span class="work-tag">Banking</span>
        </div>
        <a href="https://option-static-84138238.figma.site/" target="_blank" class="work-link">🔗 View Dashboard</a>
      </div>
      <div class="work-item">
        <h4>🎓 Universal Pre-K in the United States: Economic Returns and Policy Trade-Offs</h4>
        <p>Conducted a public economics policy analysis evaluating whether the federal government should provide nationwide universal Pre-K. The project synthesizes evidence on education outcomes, crime reduction, labor force participation, and long-term economic returns, while examining equity–efficiency trade-offs and political feasibility under a federal–state shared funding model.</p>
        <div class="work-tags">
          <span class="work-tag">Policy Analysis</span>
          <span class="work-tag">Public Economics</span>
          <span class="work-tag">Research</span>
          <span class="work-tag">Cost-Benefit Analysis</span>
          <span class="work-tag">Education Policy</span>
        </div>
        <a href="https://cyan-oasis-73804028.figma.site/" target="_blank" class="work-link">🔗 View Dashboard</a>
      </div>
      <div class="work-item">
        <h4>📊 Income and Health in the U.S.: Evidence from IPUMS CPS Data</h4>
        <p>Analyzed large-scale IPUMS CPS data to examine the income–health gradient in the United States. Used regression analysis and data visualization to show how income varies across self-reported health categories, controlling for insurance coverage and disability status, highlighting persistent socioeconomic health disparities.</p>
        <div class="work-tags">
          <span class="work-tag">Data Analysis</span>
          <span class="work-tag">Econometrics</span>
          <span class="work-tag">Health Economics</span>
          <span class="work-tag">IPUMS CPS</span>
          <span class="work-tag">Regression Analysis</span>
        </div>
        <a href="https://knee-act-88328082.figma.site/" target="_blank" class="work-link">🔗 View Dashboard</a>
      </div>
      <div class="work-item">
        <h4>🔐 Technology Risk Management Case Study — Financial Institutions</h4>
        <p>Evaluated key technology-related risks facing a financial institution, including cybersecurity, operational resilience, and AI governance. Assessed cost effectiveness, technical feasibility, and risk mitigation strategies, and developed recommendations to strengthen long-term financial and operational stability.</p>
        <div class="work-tags">
          <span class="work-tag">Risk Management</span>
          <span class="work-tag">Cybersecurity</span>
          <span class="work-tag">AI Governance</span>
          <span class="work-tag">Financial Institutions</span>
          <span class="work-tag">Operational Resilience</span>
        </div>
      </div>
    </div>
  `,
  
  tools: `
    <div class="tools-section">
      <div class="tools-category">
        <h4>📊 Data Analysis & Visualization</h4>
        <div class="tools-list">
          <span class="tool-item">Python</span>
          <span class="tool-item">R</span>
          <span class="tool-item">Stata</span>
          <span class="tool-item">SQL</span>
          <span class="tool-item">Excel</span>
          <span class="tool-item">Google Sheets</span>
          <span class="tool-item">Tableau</span>
          <span class="tool-item">Minitab</span>
        </div>
      </div>
      <div class="tools-category">
        <h4>💻 Programming & Web</h4>
        <div class="tools-list">
          <span class="tool-item">Python</span>
          <span class="tool-item">HTML</span>
          <span class="tool-item">CSS</span>
        </div>
      </div>
      <div class="tools-category">
        <h4>📝 Writing & Presentations</h4>
        <div class="tools-list">
          <span class="tool-item">LaTeX</span>
          <span class="tool-item">Microsoft Word</span>
          <span class="tool-item">PowerPoint</span>
          <span class="tool-item">Access</span>
        </div>
      </div>
      <div class="tools-category">
        <h4>🎨 Design & Prototyping</h4>
        <div class="tools-list">
          <span class="tool-item">Figma</span>
        </div>
      </div>
    </div>
  `,
  
  faq: `
    <div class="faq-container">
      <div class="faq-item" onclick="toggleFaq(this)">
        <button class="faq-question">what kind of roles are you interested in?<span class="faq-chevron">▼</span></button>
        <div class="faq-answer"><div class="faq-answer-inner">Economic research, financial analysis, policy analysis, consulting, and roles involving data-driven decision-making and risk analysis.</div></div>
      </div>
      <div class="faq-item" onclick="toggleFaq(this)">
        <button class="faq-question">do you work more on theory or data?<span class="faq-chevron">▼</span></button>
        <div class="faq-answer"><div class="faq-answer-inner">Mostly data. I use economic theory as a foundation, but my work emphasizes empirical analysis, real-world datasets, and practical applications.</div></div>
      </div>
      <div class="faq-item" onclick="toggleFaq(this)">
        <button class="faq-question">where are you based?<span class="faq-chevron">▼</span></button>
        <div class="faq-answer"><div class="faq-answer-inner">I'm based in New York and open to remote, hybrid, or on-site opportunities.</div></div>
      </div>
      <div class="faq-item" onclick="toggleFaq(this)">
        <button class="faq-question">can you collaborate on research or projects?<span class="faq-chevron">▼</span></button>
        <div class="faq-answer"><div class="faq-answer-inner">Yes. I'm open to collaborative research, case studies, and analytical projects—especially those involving economics, public policy, or financial systems.</div></div>
      </div>
      <div class="faq-item" onclick="toggleFaq(this)">
        <button class="faq-question">what's your preferred work style?<span class="faq-chevron">▼</span></button>
        <div class="faq-answer"><div class="faq-answer-inner">I enjoy structured problem-solving, independent research with periodic collaboration, and communicating complex findings clearly.</div></div>
      </div>
    </div>
  `,
  
  contact: `
    <div class="contact-section">
      <div class="contact-avatar">
        <img src="assets/avatars/avtar4.jpeg" alt="Soham">
      </div>
      <p class="contact-email">email me at: <a href="mailto:sohambhingarde1@gmail.com">sohambhingarde1@gmail.com</a></p>
      <p class="contact-note">or press the button below to open your mail app.</p>
      <a href="mailto:sohambhingarde1@gmail.com"><button class="email-btn">send me an email!</button></a>
    </div>
  `
};
