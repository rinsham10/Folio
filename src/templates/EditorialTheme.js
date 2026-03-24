// src/templates/EditorialTheme.js

export const generateCSS = () => `
  :root {
    --bg-color: #fdfbf7;
    --card-bg: #ffffff;
    --text-primary: #171717;
    --text-secondary: #52525b;
    --accent: #171717;
    --accent-light: #e5e5e5;
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Lato', system-ui, sans-serif;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  
  body {
    background-color: var(--bg-color);
    color: var(--text-primary);
    font-family: var(--font-body);
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
  }

  /* Layout */
  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 5%;
  }

  /* Hero Section */
  .hero {
    padding: 120px 0 80px;
    border-bottom: 1px solid var(--accent-light);
  }

  .hero-name {
    font-family: var(--font-heading);
    font-size: 5rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 20px;
    letter-spacing: -0.02em;
    color: var(--text-primary);
  }

  .hero-role {
    font-size: 1.4rem;
    font-weight: 300;
    color: var(--text-secondary);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  .hero-bio {
    font-size: 1.25rem;
    max-width: 700px;
    color: var(--text-primary);
    font-weight: 400;
    line-height: 1.8;
    margin-bottom: 40px;
  }

  /* Social Icons */
  .social-links {
    display: flex;
    gap: 16px;
  }

  .social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid var(--accent-light);
    color: var(--text-primary);
    transition: all 0.3s ease;
    background: transparent;
  }

  .social-btn svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }

  .social-btn:hover {
    background: var(--text-primary);
    color: var(--bg-color);
    border-color: var(--text-primary);
    transform: translateY(-3px);
  }

  /* Section Styling */
  .section {
    padding: 80px 0;
    border-bottom: 1px solid var(--accent-light);
  }

  .section:last-of-type {
    border-bottom: none;
  }

  .section-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 48px;
  }

  .section-icon {
    width: 32px;
    height: 32px;
    color: var(--text-primary);
  }

  .section-title {
    font-family: var(--font-heading);
    font-size: 2.25rem;
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: -0.01em;
  }

  /* Skills */
  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .skill-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 24px;
    background: var(--card-bg);
    border: 1px solid var(--accent-light);
    border-radius: 8px;
    font-weight: 500;
    font-size: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .skill-card::before {
    content: '';
    width: 6px;
    height: 6px;
    background: var(--text-primary);
    border-radius: 50%;
  }

  .skill-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.06);
    border-color: #d4d4d8;
  }

  /* Projects */
  .projects-list {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .project-card {
    background: var(--card-bg);
    padding: 40px;
    border-radius: 12px;
    border: 1px solid var(--accent-light);
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.03);
    transition: all 0.3s ease;
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px -5px rgba(0,0,0,0.08);
  }

  .project-title {
    font-family: var(--font-heading);
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .project-tech {
    display: inline-block;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-secondary);
    margin-bottom: 20px;
  }

  .project-desc {
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 24px;
  }

  .project-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-weight: 600;
    text-decoration: none;
    font-size: 0.95rem;
    padding-bottom: 4px;
    border-bottom: 1px solid var(--text-primary);
    transition: opacity 0.2s ease;
  }

  .project-link:hover {
    opacity: 0.7;
  }

  /* Education */
  .edu-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .edu-item {
    padding-left: 24px;
    border-left: 2px solid var(--text-primary);
  }

  .edu-degree {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .edu-school {
    font-size: 1.1rem;
    color: var(--text-primary);
    margin-bottom: 4px;
    font-weight: 500;
  }

  .edu-year {
    font-size: 0.95rem;
    color: var(--text-secondary);
  }

  /* Footer */
  .footer {
    text-align: center;
    padding: 60px 0;
    color: var(--text-secondary);
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    .hero { padding: 80px 0 60px; }
    .hero-name { font-size: 3.5rem; }
    .hero-role { font-size: 1.1rem; }
    .hero-bio { font-size: 1.1rem; }
    .section { padding: 60px 0; }
    .project-card { padding: 24px; }
  }
`;

// Helper SVGs
const iconSocialGitHub = `<svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>`;
const iconSocialLinkedIn = `<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;
const iconSocialEmail = `<svg viewBox="0 0 24 24"><path d="M12 12.713l11.985-8.713h-23.97l11.985 8.713zm0 2.574l-12-8.725v13.438h24v-13.438l-12 8.725z"/></svg>`;

const iconSkills = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`;
const iconProjects = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`;
const iconEdu = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`;

export const generateExportableHTML = (data, isExport = false) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.personal.name} | ${data.personal.role}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
  ${isExport ? '<link rel="stylesheet" href="style.css">' : `<style>${generateCSS()}</style>`}
</head>
<body>
  <div class="container">
    <header class="hero">
      <h1 class="hero-name">${data.personal.name || 'Your Name'}</h1>
      <div class="hero-role">${data.personal.role || 'Your Role'}</div>
      <p class="hero-bio">${data.personal.bio || 'Your short bio goes here.'}</p>
      
      <div class="social-links">
        ${data.personal.email ? `<a href="mailto:${data.personal.email}" class="social-btn" title="Email">${iconSocialEmail}</a>` : ''}
        ${data.personal.github ? `<a href="${data.personal.github}" target="_blank" rel="noopener noreferrer" class="social-btn" title="GitHub">${iconSocialGitHub}</a>` : ''}
        ${data.personal.linkedin ? `<a href="${data.personal.linkedin}" target="_blank" rel="noopener noreferrer" class="social-btn" title="LinkedIn">${iconSocialLinkedIn}</a>` : ''}
      </div>
    </header>

    <main>
      ${data.skills && data.skills.length > 0 ? `
        <section class="section">
          <div class="section-header">
            <div class="section-icon">${iconSkills}</div>
            <h2 class="section-title">Areas of Expertise</h2>
          </div>
          <div class="skills-grid">
            ${data.skills.map(skill => skill.trim() ? `
              <div class="skill-card">${skill}</div>
            ` : '').join('')}
          </div>
        </section>
      ` : ''}

      ${data.projects && data.projects.length > 0 ? `
        <section class="section">
          <div class="section-header">
            <div class="section-icon">${iconProjects}</div>
            <h2 class="section-title">Selected Works</h2>
          </div>
          <div class="projects-list">
            ${data.projects.map(proj => proj.title.trim() ? `
              <article class="project-card">
                <h3 class="project-title">${proj.title}</h3>
                ${proj.techStack ? `<div class="project-tech">${proj.techStack}</div>` : ''}
                <p class="project-desc">${proj.description}</p>
                ${proj.link ? `<a href="${proj.link}" target="_blank" rel="noopener noreferrer" class="project-link">View Project &rarr;</a>` : ''}
              </article>
            ` : '').join('')}
          </div>
        </section>
      ` : ''}

      ${data.education && data.education.length > 0 ? `
        <section class="section">
          <div class="section-header">
            <div class="section-icon">${iconEdu}</div>
            <h2 class="section-title">Education</h2>
          </div>
          <div class="edu-list">
            ${data.education.map(edu => edu.degree.trim() ? `
              <div class="edu-item">
                <h3 class="edu-degree">${edu.degree}</h3>
                <div class="edu-school">${edu.school}</div>
                <div class="edu-year">${edu.year}</div>
              </div>
            ` : '').join('')}
          </div>
        </section>
      ` : ''}
    </main>

  </div>
</body>
</html>
`;
