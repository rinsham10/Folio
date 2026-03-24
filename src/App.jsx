import React, { useState, useEffect } from 'react';
import './App.css';
import { Download, Monitor, Smartphone, Tablet, ArrowLeft } from 'lucide-react';
import { generateExportableHTML as modernHTML } from './templates/ModernTheme';
import { generateExportableHTML as minimalHTML } from './templates/MinimalTheme';
import { generateExportableHTML as bentoHTML } from './templates/BentoTheme';
import { generateExportableHTML as editorialHTML } from './templates/EditorialTheme';
import { downloadPortfolioData } from './utils/exportUtils';

function App() {
  const [view, setView] = useState('landing'); // 'landing' or 'builder'
  const [templateId, setTemplateId] = useState('modern'); // 'modern' or 'minimal'

  const [activeTab, setActiveTab] = useState('basic');
  const [previewMode, setPreviewMode] = useState('desktop'); // desktop, tablet, mobile

  // Central State
  const [data, setData] = useState({
    personal: {
      name: 'John Doe',
      role: 'Full Stack Developer',
      bio: 'Passionate student developer building modern web experiences. Seeking exciting opportunities to learn and grow.',
      email: 'john@example.com',
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe'
    },
    skills: ['JavaScript', 'React', 'Node.js', 'CSS', 'Python'],
    education: [
      {
        degree: 'B.S. in Computer Science',
        school: 'University of Technology',
        year: '2020 - 2024'
      }
    ],
    projects: [
      {
        title: 'Portfolio Builder',
        description: 'A no-code tool to generate stunning developer portfolios.',
        techStack: 'React, Vite, Vanilla CSS',
        link: 'https://github.com/johndoe/portfolio-builder'
      }
    ]
  });

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      personal: { ...prev.personal, [name]: value }
    }));
  };

  const addSkill = () => {
    setData(prev => ({
      ...prev,
      skills: [...prev.skills, '']
    }));
  };

  const updateSkill = (index, value) => {
    const newSkills = [...data.skills];
    newSkills[index] = value;
    setData(prev => ({ ...prev, skills: newSkills }));
  };

  const removeSkill = (index) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const addEducation = () => {
    setData(prev => ({
      ...prev,
      education: [...prev.education, { degree: '', school: '', year: '' }]
    }));
  };

  const updateEducation = (index, field, value) => {
    const newEdu = [...data.education];
    newEdu[index][field] = value;
    setData(prev => ({ ...prev, education: newEdu }));
  };

  const removeEducation = (index) => {
    setData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const addProject = () => {
    setData(prev => ({
      ...prev,
      projects: [...prev.projects, { title: '', description: '', techStack: '', link: '' }]
    }));
  };

  const updateProject = (index, field, value) => {
    const newProjects = [...data.projects];
    newProjects[index][field] = value;
    setData(prev => ({ ...prev, projects: newProjects }));
  };

  const removeProject = (index) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index)
    }));
  };

  const handleExport = async () => {
    await downloadPortfolioData(data, templateId);
  };

  // Generate the live HTML for the iframe with debounce to prevent flashing
  const getHtmlContent = (id, d) => {
    switch(id) {
      case 'minimal': return minimalHTML(d);
      case 'bento': return bentoHTML(d);
      case 'editorial': return editorialHTML(d);
      case 'modern':
      default: return modernHTML(d);
    }
  };

  const [htmlContent, setHtmlContent] = useState(() => getHtmlContent(templateId, data));

  useEffect(() => {
    const timer = setTimeout(() => {
      setHtmlContent(getHtmlContent(templateId, data));
    }, 400);
    return () => clearTimeout(timer);
  }, [data, templateId]);

  if (view === 'landing') {
    return (
      <div className="landing-page">
        <header className="landing-header">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '10px' }}>
            <Monitor size={56} color="var(--accent-color)" />
            <div style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '4px', color: 'var(--text-primary)' }}>FOLIO</div>
          </div>
          <h1>Portfolio Builder</h1>
          <p>Create a stunning, fully-responsive static developer portfolio in minutes. No coding required. Select a design to start.</p>
        </header>

        <section className="template-selection">
          <h2>Select a Template</h2>
          <div className="template-grid">
            <div
              className={`template-card ${templateId === 'modern' ? 'selected' : ''}`}
              onClick={() => setTemplateId('modern')}
            >
              <h3>Modern Dark</h3>
              <p>A sleek, premium dark-mode aesthetic with glassmorphism elements.</p>
            </div>
            <div
              className={`template-card ${templateId === 'minimal' ? 'selected' : ''}`}
              onClick={() => setTemplateId('minimal')}
            >
              <h3>Clean Minimal</h3>
              <p>An elegant, bright, and typography-focused light-mode design.</p>
            </div>
            <div
              className={`template-card ${templateId === 'bento' ? 'selected' : ''}`}
              onClick={() => setTemplateId('bento')}
            >
              <h3>Bento Grid</h3>
              <p>A structured, modern dashboard feel using responsive grid layouts.</p>
            </div>
            <div
              className={`template-card ${templateId === 'editorial' ? 'selected' : ''}`}
              onClick={() => setTemplateId('editorial')}
            >
              <h3>Creative Editorial</h3>
              <p>A visually rich, design-focused portfolio with expressive typography and elegant spacing.</p>
            </div>
          </div>
          <button
            className="btn-primary btn-large"
            onClick={() => setView('builder')}
          >
            Start Building
          </button>
        </section>
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* SIDEBAR FOR INPUTS */}
      <aside className="sidebar">
        <div className="sidebar-header" style={{ cursor: 'pointer' }} onClick={() => setView('landing')}>
          <ArrowLeft size={20} color="var(--text-secondary)" />
          <h1 style={{ fontSize: '16px' }}>Back to Templates</h1>
        </div>

        <div className="tabs">
          <button
            className={`tab ${activeTab === 'basic' ? 'active' : ''}`}
            onClick={() => setActiveTab('basic')}
          >
            Basic Info
          </button>
          <button
            className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
          <button
            className={`tab ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
          <button
            className={`tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
        </div>

        <div className="sidebar-content">
          {activeTab === 'basic' && (
            <div className="form-section">
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" name="name" value={data.personal.name} onChange={handlePersonalChange} placeholder="John Doe" />
              </div>
              <div className="input-group">
                <label>Role</label>
                <input type="text" name="role" value={data.personal.role} onChange={handlePersonalChange} placeholder="e.g. Frontend Developer" />
              </div>
              <div className="input-group">
                <label>Bio (Short description)</label>
                <textarea name="bio" value={data.personal.bio} onChange={handlePersonalChange} placeholder="A short bio about yourself..." />
              </div>
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" name="email" value={data.personal.email} onChange={handlePersonalChange} placeholder="john@example.com" />
              </div>
              <div className="input-group">
                <label>GitHub URL</label>
                <input type="url" name="github" value={data.personal.github} onChange={handlePersonalChange} placeholder="https://github.com/..." />
              </div>
              <div className="input-group">
                <label>LinkedIn URL</label>
                <input type="url" name="linkedin" value={data.personal.linkedin} onChange={handlePersonalChange} placeholder="https://linkedin.com/in/..." />
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="form-section">
              {data.skills.map((skill, index) => (
                <div key={index} className="input-group" style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => updateSkill(index, e.target.value)}
                    placeholder="e.g. React"
                  />
                  <button className="btn-danger" onClick={() => removeSkill(index)}>X</button>
                </div>
              ))}
              <button className="btn-secondary" onClick={addSkill} style={{ width: '100%' }}>+ Add Skill</button>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="form-section">
              {data.education.map((edu, index) => (
                <div key={index} className="card">
                  <div className="card-header">
                    <span className="card-title">Education #{index + 1}</span>
                    <button className="btn-danger" onClick={() => removeEducation(index)}>Remove</button>
                  </div>
                  <div className="input-group">
                    <label>Degree / Certificate</label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                      placeholder="e.g. B.S. in Computer Science"
                    />
                  </div>
                  <div className="input-group">
                    <label>School / Institution</label>
                    <input
                      type="text"
                      value={edu.school}
                      onChange={(e) => updateEducation(index, 'school', e.target.value)}
                      placeholder="e.g. University of Technology"
                    />
                  </div>
                  <div className="input-group">
                    <label>Year(s)</label>
                    <input
                      type="text"
                      value={edu.year}
                      onChange={(e) => updateEducation(index, 'year', e.target.value)}
                      placeholder="e.g. 2020 - 2024"
                    />
                  </div>
                </div>
              ))}
              <button className="btn-secondary" onClick={addEducation} style={{ width: '100%' }}>+ Add Education</button>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="form-section">
              {data.projects.map((proj, index) => (
                <div key={index} className="card">
                  <div className="card-header">
                    <span className="card-title">Project #{index + 1}</span>
                    <button className="btn-danger" onClick={() => removeProject(index)}>Remove</button>
                  </div>
                  <div className="input-group">
                    <label>Project Title</label>
                    <input
                      type="text"
                      value={proj.title}
                      onChange={(e) => updateProject(index, 'title', e.target.value)}
                      placeholder="e.g. E-Commerce App"
                    />
                  </div>
                  <div className="input-group">
                    <label>Description</label>
                    <textarea
                      value={proj.description}
                      onChange={(e) => updateProject(index, 'description', e.target.value)}
                      placeholder="What did you build?"
                    />
                  </div>
                  <div className="input-group">
                    <label>Tech Stack</label>
                    <input
                      type="text"
                      value={proj.techStack || ''}
                      onChange={(e) => updateProject(index, 'techStack', e.target.value)}
                      placeholder="e.g. React, Vite, Node.js"
                    />
                  </div>
                  <div className="input-group">
                    <label>Project Link</label>
                    <input
                      type="url"
                      value={proj.link}
                      onChange={(e) => updateProject(index, 'link', e.target.value)}
                      placeholder="https://..."
                    />
                  </div>
                </div>
              ))}
              <button className="btn-secondary" onClick={addProject} style={{ width: '100%' }}>+ Add Project</button>
            </div>
          )}
        </div>

        <div className="sidebar-footer">
          <button className="btn-primary" onClick={handleExport} style={{ width: '100%' }}>
            <Download size={18} />
            Export Portfolio
          </button>
        </div>
      </aside>

      {/* MAIN PREVIEW AREA */}
      <main className="preview-area">
        <div className="preview-header">
          <div style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 500 }}>
            Live Preview
          </div>
          <div className="preview-controls">
            <button
              className={`preview-btn ${previewMode === 'mobile' ? 'active' : ''}`}
              onClick={() => setPreviewMode('mobile')}
            >
              <Smartphone size={16} />
            </button>
            <button
              className={`preview-btn ${previewMode === 'tablet' ? 'active' : ''}`}
              onClick={() => setPreviewMode('tablet')}
            >
              <Tablet size={16} />
            </button>
            <button
              className={`preview-btn ${previewMode === 'desktop' ? 'active' : ''}`}
              onClick={() => setPreviewMode('desktop')}
            >
              <Monitor size={16} />
            </button>
          </div>
        </div>

        <div className={`iframe-container ${previewMode}`}>
          <iframe
            title="Portfolio Preview"
            className="preview-iframe"
            srcDoc={htmlContent}
            sandbox="allow-scripts"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
