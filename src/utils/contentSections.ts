export interface ContentSection {
  type: 'markdown' | 'component';
  id?: string;
  layout?: 'prose' | 'wide' | 'full-width';
  component?: string;
  data?: Record<string, any>;
  content?: string;
}

export interface SectionConfig {
  type: 'markdown' | 'component';
  id?: string;
  layout?: 'prose' | 'wide' | 'full-width';
  component?: string;
  [key: string]: any;
}

/**
 * Parse markdown content by section markers and combine with section configuration
 */
export function parseContentSections(
  markdownContent: string,
  sectionConfigs: SectionConfig[] = []
): ContentSection[] {
  if (!markdownContent && (!sectionConfigs || sectionConfigs.length === 0)) {
    return [];
  }

  // If no section configs provided, treat entire content as single prose section
  if (!sectionConfigs || sectionConfigs.length === 0) {
    return [{
      type: 'markdown',
      layout: 'prose',
      content: markdownContent
    }];
  }

  // Split content by section markers (<!-- Section: sectionId -->)
  const sectionMarkerRegex = /<!--\s*Section:\s*([\w-]+)\s*-->/gi;
  const contentParts = markdownContent.split(sectionMarkerRegex);
  
  // First part is content before any markers
  const contentSections: { [key: string]: string } = {};
  
  // Parse content sections
  for (let i = 1; i < contentParts.length; i += 2) {
    const sectionId = contentParts[i].trim();
    const sectionContent = contentParts[i + 1] ? contentParts[i + 1].trim() : '';
    if (sectionContent) { // Only store non-empty content
      contentSections[sectionId] = sectionContent;
    }
  }

  // If there's content before the first marker, assign it to first markdown section
  if (contentParts[0] && contentParts[0].trim()) {
    const firstMarkdownSection = sectionConfigs.find(s => s.type === 'markdown');
    if (firstMarkdownSection && firstMarkdownSection.id) {
      contentSections[firstMarkdownSection.id] = contentParts[0].trim();
    }
  }

  // Build final sections array with validation
  const sections: ContentSection[] = [];
  
  for (const config of sectionConfigs) {
    if (config.type === 'markdown') {
      const content = config.id ? contentSections[config.id] || '' : markdownContent;
      
      // Only include markdown sections with actual content
      if (content && content.trim()) {
        sections.push({
          type: 'markdown',
          id: config.id,
          layout: config.layout || 'prose',
          content: content
        });
      } else if (process.env.NODE_ENV === 'development') {
        console.warn(`Empty markdown section detected: ${config.id || 'unnamed'}`);
      }
    } else if (config.type === 'component') {
      // Validate component configuration
      if (!config.component) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Component section missing component name:', config);
        }
        continue;
      }
      
      const { type, component, ...data } = config;
      sections.push({
        type: 'component',
        component: config.component,
        data: data
      });
    }
  }

  return sections;
}

/**
 * Get layout container classes based on layout type
 */
export function getLayoutClasses(layout: string = 'prose'): string {
  switch (layout) {
    case 'wide':
      return 'max-w-6xl mx-auto px-6 lg:px-8';
    case 'full-width':
      return 'w-full';
    case 'prose':
    default:
      return 'max-w-4xl mx-auto px-6 lg:px-8';
  }
}

/**
 * Get prose styling classes based on layout type
 */
export function getProseClasses(layout: string = 'prose'): string {
  const baseClasses = 'prose prose-lg max-w-none prose-headings:font-light prose-headings:tracking-tight prose-p:font-light prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:underline';
  
  switch (layout) {
    case 'wide':
      return `${baseClasses} prose-xl`;
    case 'full-width':
      return `${baseClasses} prose-2xl`;
    case 'prose':
    default:
      return baseClasses;
  }
}

/**
 * Process markdown content to HTML using remark
 */
export async function processMarkdownToHTML(markdownContent: string): Promise<string> {
  if (!markdownContent || !markdownContent.trim()) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Empty markdown content passed to processMarkdownToHTML');
    }
    return '';
  }

  try {
    // Use dynamic import to load markdown processor
    const { remark } = await import('remark');
    const { default: remarkHtml } = await import('remark-html');
    
    // Process markdown to HTML
    const result = await remark()
      .use(remarkHtml, { sanitize: false })
      .process(markdownContent.trim());
    
    const htmlOutput = result.toString();
    
    // Validate the output
    if (!htmlOutput || htmlOutput.trim() === '') {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Markdown processing returned empty HTML for content:', markdownContent.substring(0, 100));
      }
      return createFallbackHTML(markdownContent);
    }
    
    return htmlOutput;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error processing markdown:', error, 'Content:', markdownContent.substring(0, 100));
    }
    return createFallbackHTML(markdownContent);
  }
}

/**
 * Create fallback HTML for failed markdown processing
 */
function createFallbackHTML(content: string): string {
  // Simple paragraph wrapping with line break handling
  const paragraphs = content
    .split('\n\n')
    .filter(p => p.trim())
    .map(p => p.trim().replace(/\n/g, '<br>'))
    .map(p => `<p>${p}</p>`)
    .join('');
  
  return `<div class="markdown-fallback">${paragraphs}</div>`;
}