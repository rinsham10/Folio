export const generateCSS = () => `
  :root {
    --bg-gradient: linear-gradient(135deg, #0f172a 0%, #312e81 50%, #4c1d95 100%);
    --glass-bg: rgba(255, 255, 255, 0.05);
    --glass-border: rgba(255, 255, 255, 0.1);
    --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.7);
    --accent: #a8b1ff;
    --font: 'Inter', system-ui, -apple-system, sans-serif;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  
  body {
    background: var(--bg-gradient);
    background-size: 200% 200%;
    animation: gradientMove 15s ease infinite;
    color: var(--text-primary);
    font-family: var(--font);
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
    padding: 40px 20px;
    display: flex;
    justify-content: center;
  }

  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .wrapper {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 50px;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    box-shadow: var(--glass-shadow);
  }

  .header {
    text-align: center;
    margin-bottom: 50px;
    padding: 40px 20px;
    background: var(--glass-bg);
    border-radius: 20px;
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .header:hover {
    transform: translateY(-5px);
  }

  .name {
    font-size: 3.5rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
    color: var(--text-primary);
  }

  .role {
    font-size: 1.1rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 24px;
    font-weight: 300;
  }

  .bio {
    font-size: 1.15rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
    font-weight: 300;
  }

  .links {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .links a {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 500;
    padding: 10px 24px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--glass-border);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--accent);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  .links a:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    color: var(--accent);
  }

  .links a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  .section {
    margin-bottom: 50px;
    padding: 30px;
    background: var(--glass-bg);
    border-radius: 20px;
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    animation: fadeIn 0.8s ease forwards;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .section-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 24px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--accent);
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 12px;
  }

  .education-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .education-item {
    background: rgba(255, 255, 255, 0.02);
    padding: 20px;
    border-radius: 16px;
    border: 1px solid var(--glass-border);
    transition: all 0.3s ease;
  }

  .education-item:hover {
    transform: translateY(-4px);
    box-shadow: var(--glass-shadow);
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .edu-degree {
    font-size: 1.15rem;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .edu-school {
    color: var(--text-secondary);
  }

  .edu-year {
    color: var(--accent);
    font-size: 0.85rem;
    font-weight: 500;
    opacity: 0.8;
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .skill-item {
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-primary);
    padding: 8px 16px;
    font-size: 0.95rem;
    border-radius: 30px;
    border: 1px solid var(--glass-border);
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }

  .skill-item:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.15);
    border-color: var(--accent);
    box-shadow: 0 0 15px rgba(168, 177, 255, 0.2);
  }

  .project-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .project-item {
    background: rgba(255, 255, 255, 0.02);
    padding: 24px;
    border-radius: 16px;
    border: 1px solid var(--glass-border);
    transition: all 0.3s ease;
  }

  .project-item:hover {
    transform: translateY(-5px) scale(1.01);
    box-shadow: var(--glass-shadow);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .project-title {
    font-size: 1.35rem;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .project-tech {
    font-size: 0.85rem;
    color: var(--accent);
    margin-bottom: 12px;
    font-weight: 500;
    letter-spacing: 0.05em;
  }

  .project-desc {
    color: var(--text-secondary);
    margin-bottom: 16px;
    line-height: 1.6;
  }

  .project-link {
    display: inline-flex;
    align-items: center;
    color: var(--text-primary);
    font-weight: 500;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--glass-border);
    transition: all 0.3s ease;
  }

  .project-link:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--accent);
    color: var(--accent);
    transform: translateX(4px);
  }

  .footer {
    text-align: center;
    margin-top: 60px;
    font-size: 0.9rem;
    color: var(--text-secondary);
    padding-top: 20px;
    border-top: 1px solid var(--glass-border);
  }

  @media (max-width: 768px) {
    body {
      padding: 0;
    }
    .wrapper {
      margin: 0;
      border-radius: 0;
      border: none;
      padding: 30px 20px;
    }
    .name {
      font-size: 2.5rem;
    }
    .links {
      flex-direction: column;
      gap: 12px;
    }
    .project-item:hover {
      transform: translateY(-2px);
    }
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
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;800&display=swap" rel="stylesheet">
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

    
  </div>
</body>
</html>
`;
