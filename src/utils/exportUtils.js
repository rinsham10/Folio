import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { generateExportableHTML as genModernHTML, generateCSS as genModernCSS } from '../templates/ModernTheme';
import { generateExportableHTML as genMinimalHTML, generateCSS as genMinimalCSS } from '../templates/MinimalTheme';

export const downloadPortfolioData = async (data, templateId) => {
  const zip = new JSZip();

  let htmlContent;
  let cssContent;

  if (templateId === 'modern') {
    htmlContent = genModernHTML(data, true);
    cssContent = genModernCSS();
  } else {
    htmlContent = genMinimalHTML(data, true);
    cssContent = genMinimalCSS();
  }

  // Add files to zip
  zip.file("index.html", htmlContent);
  zip.file("style.css", cssContent);

  // Add a README file
  const readmeContent = `# ${data.personal.name}'s Portfolio

This portfolio was generated using the Student Developer Portfolio Builder.

To deploy this portfolio:
1. You can host this folder on GitHub Pages, Vercel, Netlify, or any static hosting service.
2. Just make sure \`index.html\` and \`style.css\` are in the root directory.

Enjoy!`;
  zip.file("README.md", readmeContent);

  // Generate a Blob object and download it
  try {
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "portfolio.zip");
  } catch (error) {
    console.error("Failed to generate zip file:", error);
    alert("There was an error generating your portfolio. Please try again.");
  }
};
