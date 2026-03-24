export const generateCSS = () => `
  :root {
    --bg-color: #f1f5f9;
    --card-bg: #ffffff;
    --text-primary: #0f172a;
    --text-secondary: #64748b;
    --accent: #6366f1;
    --accent-hover: #4f46e5;
    --border: #e2e8f0;
    --font: 'Inter', system-ui, -apple-system, sans-serif;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  
  body {
    background-color: var(--bg-color);
    background-image: 
      radial-gradient(#cbd5e1 1px, transparent 1px),
      radial-gradient(#cbd5e1 1px, transparent 1px);
    background-size: 40px 40px;
    background-position: 0 0, 20px 20px;
    color: var(--text-primary);
    font-family: var(--font);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    padding: 60px 20px;
    min-height: 100vh;
  }

  .bento-container {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    grid-auto-flow: dense;
  }

  .bento-card {
    background: var(--card-bg);
    border-radius: 32px;
    padding: 40px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 20px 25px -5px rgba(0, 0, 0, 0.02);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    border: 1px solid rgba(226, 232, 240, 0.8);
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }

  .bento-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 4px;
    background: linear-gradient(90deg, transparent, transparent);
    transition: background 0.4s ease;
  }

  .bento-card:hover {
    transform: translateY(-4px) scale(1.01);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
    border-color: rgba(226, 232, 240, 1);
  }

  /* Specific Card Accents on Hover */
  .card-profile:hover::before { background: linear-gradient(90deg, #6366f1, #a855f7); }
  .card-projects:hover::before { background: linear-gradient(90deg, #3b82f6, #0ea5e9); }
  .card-skills:hover::before { background: linear-gradient(90deg, #10b981, #34d399); }
  .card-education:hover::before { background: linear-gradient(90deg, #f59e0b, #fbbf24); }
  .card-contact:hover::before { background: linear-gradient(90deg, #ec4899, #f43f5e); }

  /* Structural Classes */
  .card-profile { grid-column: span 2; grid-row: span 1; justify-content: center; }
  .card-skills { grid-column: span 1; grid-row: span 1; }
  .card-projects { grid-column: span 2; grid-row: span 2; }
  .card-education { grid-column: span 1; grid-row: span 1; }
  .card-contact { grid-column: span 1; grid-row: span 1; justify-content: space-between; }

  .section-title {
    font-size: 1.15rem;
    font-weight: 800;
    margin-bottom: 28px;
    color: var(--text-primary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: inline-block;
  }

  /* Profile Card Styles */
  .profile-name {
    font-size: 3.5rem;
    font-weight: 900;
    letter-spacing: -0.04em;
    margin-bottom: 16px;
    line-height: 1.1;
    background: linear-gradient(135deg, #0f172a 0%, #475569 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .profile-role {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 20px;
    background: #f8fafc;
    border-radius: 99px;
    font-size: 1.05rem;
    font-weight: 600;
    color: #475569;
    margin-bottom: 24px;
    border: 1px solid var(--border);
  }

  .profile-role::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 12px rgba(16, 185, 129, 0.6);
  }

  .profile-bio {
    font-size: 1.15rem;
    color: var(--text-secondary);
    max-width: 90%;
    line-height: 1.7;
    font-weight: 400;
  }

  /* Skills Card Styles */
  .skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .skill-badge {
    background: #ffffff;
    color: var(--text-primary);
    padding: 10px 18px;
    border-radius: 12px;
    font-size: 0.95rem;
    font-weight: 600;
    border: 1px solid var(--border);
    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
    transition: all 0.2s ease;
  }

  .skill-badge:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.04);
  }

  /* Projects */
  .projects-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }

  .project-item {
    background: #f8fafc;
    padding: 24px;
    border-radius: 20px;
    border: 1px solid #f1f5f9;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
  }

  .project-item:hover {
    background: #ffffff;
    border-color: #e2e8f0;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
    transform: translateY(-2px);
  }

  .project-title {
    font-weight: 800;
    font-size: 1.25rem;
    margin-bottom: 8px;
  }

  .project-tech {
    font-size: 0.8rem;
    color: var(--accent);
    margin-bottom: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .project-desc {
    color: var(--text-secondary);
    font-size: 1rem;
    margin-bottom: 20px;
    flex: 1;
    line-height: 1.6;
  }

  .project-link {
    display: inline-flex;
    align-items: center;
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 700;
    font-size: 0.95rem;
    padding-bottom: 2px;
    border-bottom: 2px solid transparent;
    transition: border-color 0.2s ease;
    align-self: flex-start;
  }

  .project-link:hover {
    border-color: var(--text-primary);
  }

  /* Education */
  .edu-list {
    display: flex;
    flex-direction: column;
  }

  .edu-item {
    border-left: 2px solid #e2e8f0;
    padding-left: 24px;
    position: relative;
    padding-bottom: 28px;
  }

  .edu-item:last-child {
    padding-bottom: 0;
    border-left-color: transparent;
  }

  .edu-item::before {
    content: '';
    position: absolute;
    left: -7px;
    top: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ffffff;
    border: 3px solid var(--accent);
  }

  .edu-degree {
    font-weight: 800;
    font-size: 1.1rem;
    margin-bottom: 4px;
    line-height: 1.2;
  }

  .edu-school {
    color: var(--text-secondary);
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 6px;
  }

  .edu-year {
    display: inline-block;
    font-size: 0.8rem;
    color: var(--accent);
    font-weight: 700;
    background: #eff6ff;
    padding: 4px 10px;
    border-radius: 99px;
  }

  /* Contact Links */
  .social-links {
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 100%;
    justify-content: center;
  }

  .social-links a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 24px;
    background: #f8fafc;
    border-radius: 16px;
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 600;
    font-size: 1.05rem;
    transition: all 0.3s ease;
    border: 1px solid transparent;
  }

  .social-links a span:last-child {
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
  }

  .social-links a:hover {
    background: var(--text-primary);
    color: #ffffff;
    border-color: var(--text-primary);
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  }

  .social-links a:hover span:last-child {
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 1024px) {
    .bento-container {
      grid-template-columns: repeat(2, 1fr);
    }
    .card-profile { grid-column: span 2; }
    .card-skills { grid-column: span 1; }
    .card-education { grid-column: span 1; }
    .card-projects { grid-column: span 2; }
    .card-contact { grid-column: span 2; }
  }

  @media (max-width: 640px) {
    .bento-container {
      grid-template-columns: 1fr;
      gap: 16px;
    }
    body { padding: 20px 12px; }
    .bento-card { padding: 24px; border-radius: 24px; }
    .card-profile, .card-skills, .card-projects, .card-education, .card-contact {
      grid-column: span 1;
    }
    .profile-name { font-size: 2.25rem; }
  }
`;

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
  <div class="bento-container">
    
    <!-- Profile Card (Large) -->
    <article class="bento-card card-profile">
      <h1 class="profile-name">${data.personal.name || 'Your Name'}</h1>
      <div class="profile-role">${data.personal.role || 'Your Role'}</div>
      <p class="profile-bio">${data.personal.bio || 'Your short bio goes here.'}</p>
    </article>

    <!-- Skills Card (Medium) -->
    ${data.skills && data.skills.length > 0 ? `
    <article class="bento-card card-skills">
      <h2 class="section-title">Skills</h2>
      <div class="skills-container">
        ${data.skills.map(skill => skill.trim() ? `<span class="skill-badge">${skill}</span>` : '').join('')}
      </div>
    </article>
    ` : ''}

    <!-- Projects Card (Large) -->
    ${data.projects && data.projects.length > 0 ? `
    <article class="bento-card card-projects">
      <h2 class="section-title">Projects</h2>
      <div class="projects-list">
        ${data.projects.map(proj => proj.title.trim() ? `
          <div class="project-item">
            <h3 class="project-title">${proj.title}</h3>
            ${proj.techStack ? `<div class="project-tech">${proj.techStack}</div>` : ''}
            <p class="project-desc">${proj.description}</p>
            ${proj.link ? `<a href="${proj.link}" target="_blank" rel="noopener noreferrer" class="project-link">View Project →</a>` : ''}
          </div>
        ` : '').join('')}
      </div>
    </article>
    ` : ''}

    <!-- Education Card (Medium) -->
    ${data.education && data.education.length > 0 ? `
    <article class="bento-card card-education">
      <h2 class="section-title">Education</h2>
      <div class="edu-list">
        ${data.education.map(edu => edu.degree.trim() ? `
          <div class="edu-item">
            <div class="edu-degree">${edu.degree}</div>
            <div class="edu-school">${edu.school}</div>
            <div class="edu-year">${edu.year}</div>
          </div>
        ` : '').join('')}
      </div>
    </article>
    ` : ''}

    <!-- Contact Card (Small) -->
    <article class="bento-card card-contact">
      <h2 class="section-title">Connect</h2>
      <div class="social-links">
        ${data.personal.email ? `<a href="mailto:${data.personal.email}"><span>Email Me</span> <span>→</span></a>` : ''}
        ${data.personal.github ? `<a href="${data.personal.github}" target="_blank" rel="noopener noreferrer"><span>GitHub</span> <span>→</span></a>` : ''}
        ${data.personal.linkedin ? `<a href="${data.personal.linkedin}" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span> <span>→</span></a>` : ''}
      </div>
    </article>

  </div>
</body>
</html>
`;
