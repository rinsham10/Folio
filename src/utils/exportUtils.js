import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { generateExportableHTML as genModernHTML, generateCSS as genModernCSS } from '../templates/ModernTheme';
import { generateExportableHTML as genMinimalHTML, generateCSS as genMinimalCSS } from '../templates/MinimalTheme';
import { generateExportableHTML as genBentoHTML, generateCSS as genBentoCSS } from '../templates/BentoTheme';
import { generateExportableHTML as genEditorialHTML, generateCSS as genEditorialCSS } from '../templates/EditorialTheme';

export const downloadPortfolioData = async (data, templateId) => {
  const zip = new JSZip();

  let htmlContent;
  let cssContent;

  console.log("Exporting with templateId:", templateId);

  switch (templateId) {
    case 'modern':
      htmlContent = genModernHTML(data, true);
      cssContent = genModernCSS();
      break;
    case 'bento':
      htmlContent = genBentoHTML(data, true);
      cssContent = genBentoCSS();
      break;
    case 'editorial':
      htmlContent = genEditorialHTML(data, true);
      cssContent = genEditorialCSS();
      break;
    case 'minimal':
      htmlContent = genMinimalHTML(data, true);
      cssContent = genMinimalCSS();
      break;
    default:
      console.warn("Unknown templateId, falling back to Modern:", templateId);
      htmlContent = genModernHTML(data, true);
      cssContent = genModernCSS();
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
    saveAs(content, `portfolio-${templateId}.zip`);
  } catch (error) {
    console.error("Failed to generate zip file:", error);
    alert("There was an error generating your portfolio. Please try again.");
  }
};
