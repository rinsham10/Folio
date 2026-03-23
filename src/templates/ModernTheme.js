// Pure Vanilla CSS for the exported portfolio
export const generateCSS = () => `
  :root {
    --primary-color: #0f172a;
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --accent: #3b82f6;
    --accent-hover: #2563eb;
    --bg-card: #1e293b;
    --border: #334155;
    --font: 'Inter', system-ui, -apple-system, sans-serif;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  
  body {
    background-color: var(--primary-color);
    color: var(--text-main);
    font-family: var(--font);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px;
  }

  header {
    padding: 80px 0 60px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 60px;
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;
    letter-spacing: -0.05em;
    margin-bottom: 20px;
    background: linear-gradient(135deg, #f8fafc 0%, #94a3b8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .role {
    font-size: 1.25rem;
    color: var(--accent);
    font-weight: 600;
    margin-bottom: 20px;
  }

  .bio {
    font-size: 1.125rem;
    color: var(--text-muted);
    max-width: 600px;
    margin-bottom: 30px;
  }

  .links {
    display: flex;
    gap: 16px;
  }

  .links a {
    color: var(--text-main);
    text-decoration: none;
    padding: 10px 20px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .links a:hover {
    border-color: var(--accent);
    background: var(--accent);
  }

  section {
    margin-bottom: 60px;
  }

  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  h2::after {
    content: "";
    height: 1px;
    flex: 1;
    background: var(--border);
  }

  .education-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .education-item {
    background: var(--bg-card);
    border: 1px solid var(--border);
    padding: 16px;
    border-radius: 8px;
  }
  
  .education-item:hover{
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    border-color: var(--border);
  }

  .edu-degree {
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 4px;
  }

  .edu-school {
    color: var(--accent);
    font-size: 0.95rem;
    font-weight: 500;
  }

  .edu-year {
    color: var(--text-muted);
    font-size: 0.85rem;
  }

  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .skill-badge {
    background: var(--bg-card);
    border: 1px solid var(--border);
    padding: 8px 16px;
    border-radius: 30px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: transform 0.2s ease, border-color 0.2s ease;
  }

  .skill-badge:hover {
    transform: translateY(-2px);
    border-color: var(--accent);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 24px;
  }

  .project-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display: flex;
    flex-direction: column;
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    border-color: var(--border);
  }

  .project-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .project-tech {
    font-size: 0.85rem;
    color: var(--accent);
    margin-bottom: 12px;
    font-weight: 500;
  }

  .project-desc {
    color: var(--text-muted);
    font-size: 0.95rem;
    margin-bottom: 24px;
    flex: 1;
  }

  .project-link {
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .project-link:hover {
    color: var(--accent-hover);
  }

  footer {
    text-align: center;
    padding: 40px 0;
    color: var(--text-muted);
    font-size: 0.9rem;
    border-top: 1px solid var(--border);
    margin-top: 80px;
  }

  @media (max-width: 600px) {
    h1 { font-size: 2.25rem; }
    .projects-grid { grid-template-columns: 1fr; }
  }
`;

// Generates the raw HTML content (without CSS inline if exportToZip is true, 
// otherwise with a <style> tag for the live preview iframe context)
export const generateExportableHTML = (data, isExport = false) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.personal.name} | ${data.personal.role}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  ${isExport ? '<link rel="stylesheet" href="style.css">' : `<style>${generateCSS()}</style>`}
</head>
<body>
  <div class="container">
    <header>
      <h1>${data.personal.name || 'Your Name'}</h1>
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
        <section>
          <h2>Skills</h2>
          <div class="skills-grid">
            ${data.skills.map(skill => skill.trim() ? `<div class="skill-badge">${skill}</div>` : '').join('')}
          </div>
        </section>
      ` : ''}

      ${data.education && data.education.length > 0 ? `
        <section>
          <h2>Education</h2>
          <div class="education-list">
            ${data.education.map(edu => edu.degree.trim() ? `
              <div class="education-item">
                <div class="edu-degree">${edu.degree}</div>
                <div class="edu-school">${edu.school}</div>
                <div class="edu-year">${edu.year}</div>
              </div>
            ` : '').join('')}
          </div>
        </section>
      ` : ''}

      ${data.projects && data.projects.length > 0 ? `
        <section>
          <h2>Projects</h2>
          <div class="projects-grid">
            ${data.projects.map(proj => proj.title.trim() ? `
              <div class="project-card">
                <div class="project-title">${proj.title}</div>
                ${proj.techStack ? `<div class="project-tech">${proj.techStack}</div>` : ''}
                <div class="project-desc">${proj.description}</div>
                ${proj.link ? `<a href="${proj.link}" target="_blank" rel="noopener noreferrer" class="project-link">View Project →</a>` : ''}
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
