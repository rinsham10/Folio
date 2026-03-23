export const generateCSS = () => `
  :root {
    --bg-color: #ffffff;
    --text-primary: #111827;
    --text-secondary: #4b5563;
    --accent: #000000;
    --border: #e5e7eb;
    --font: 'Helvetica Neue', Arial, sans-serif;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  
  body {
    background-color: var(--bg-color);
    color: var(--text-primary);
    font-family: var(--font);
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
  }

  .wrapper {
    max-width: 700px;
    margin: 0 auto;
    padding: 60px 24px;
  }

  .header {
    text-align: center;
    margin-bottom: 60px;
  }

  .name {
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 8px;
    color: var(--accent);
  }

  .role {
    font-size: 1.1rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 24px;
  }

  .bio {
    font-size: 1.1rem;
    color: var(--text-secondary);
  }

  .links {
    margin-top: 24px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .links a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    transition: border-bottom-color 0.2s;
  }

  .links a:hover {
    border-bottom-color: var(--accent);
  }

  .section {
    margin-bottom: 60px;
  }

  .section-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 24px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-secondary);
    border-bottom: 1px solid var(--border);
    padding-bottom: 8px;
  }

  .education-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .education-item {
    margin-bottom: 8px;
  }

  .edu-degree {
    font-size: 1.1rem;
    font-weight: 600;
  }

  .edu-school {
    color: var(--text-secondary);
  }

  .edu-year {
    color: var(--text-secondary);
    font-size: 0.85rem;
    font-style: italic;
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .skill-item {
    background: #f3f4f6;
    color: var(--text-primary);
    padding: 6px 12px;
    font-size: 0.9rem;
    border-radius: 4px;
  }

  .project-list {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .project-title {
    font-size: 1.35rem;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .project-tech {
    font-size: 0.85rem;
    color: var(--text-secondary);
    margin-bottom: 12px;
    font-style: italic;
  }

  .project-desc {
    color: var(--text-secondary);
    margin-bottom: 12px;
  }

  .project-link {
    display: inline-block;
    color: var(--accent);
    font-weight: 600;
    text-decoration: none;
    border-bottom: 1px solid var(--accent);
  }

  .footer {
    text-align: center;
    margin-top: 80px;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
`;

export const generateExportableHTML = (data, isExport = false) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.personal.name} | ${data.personal.role}</title>
  ${isExport ? '<link rel="stylesheet" href="style.css">' : `<style>${generateCSS()}</style>`}
</head>
<body>
  <div class="wrapper">
    <header class="header">
      <h1 class="name">${data.personal.name || 'Your Name'}</h1>
      <div class="role">${data.personal.role || 'Your Role'}</div>
      <p class="bio">${data.personal.bio || 'Your short bio goes here.'}</p>
      
      <div class="links">
        ${data.personal.email ? `<a href="mailto:${data.personal.email}">Email</a>` : ''}
        ${data.personal.github ? `<a href="${data.personal.github}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
        ${data.personal.linkedin ? `<a href="${data.personal.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>` : ''}
      </div>
    </header>

    <main>
      ${data.skills && data.skills.length > 0 ? `
        <section class="section">
          <h2 class="section-title">Skills</h2>
          <div class="skills-list">
            ${data.skills.map(skill => skill.trim() ? `<span class="skill-item">${skill}</span>` : '').join('')}
          </div>
        </section>
      ` : ''}

      ${data.education && data.education.length > 0 ? `
        <section class="section">
          <h2 class="section-title">Education</h2>
          <div class="education-list">
            ${data.education.map(edu => edu.degree.trim() ? `
              <article class="education-item">
                <h3 class="edu-degree">${edu.degree}</h3>
                <div class="edu-school">${edu.school} <span class="edu-year">- ${edu.year}</span></div>
              </article>
            ` : '').join('')}
          </div>
        </section>
      ` : ''}

      ${data.projects && data.projects.length > 0 ? `
        <section class="section">
          <h2 class="section-title">Selected Projects</h2>
          <div class="project-list">
            ${data.projects.map(proj => proj.title.trim() ? `
              <article class="project-item">
                <h3 class="project-title">${proj.title}</h3>
                ${proj.techStack ? `<div class="project-tech">${proj.techStack}</div>` : ''}
                <p class="project-desc">${proj.description}</p>
                ${proj.link ? `<a href="${proj.link}" target="_blank" rel="noopener noreferrer" class="project-link">View Project →</a>` : ''}
              </article>
            ` : '').join('')}
          </div>
        </section>
      ` : ''}
    </main>

    <footer class="footer">
      © ${new Date().getFullYear()} ${data.personal.name}.
    </footer>
  </div>
</body>
</html>
`;
