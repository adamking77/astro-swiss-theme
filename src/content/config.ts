import { defineCollection, z } from 'astro:content';

// Schema for individual report sections
const sectionSchema = z.object({
  component: z.enum([
    'ExecutiveSummary',
    'PerformanceMetrics', 
    'RegionalPerformance',
    'TechnologyStack',
    'DataVisualization',
    'FinancialHighlights',
    'ClientInsights',
    'MarketAnalysis',
    'IndustryTrends',
    'FutureOutlook'
  ]),
  key: z.string(),
  data: z.any().optional(),
});

// Schema for SEO metadata
const seoSchema = z.object({
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  ogImage: z.string().optional(),
  ogType: z.string().default('article'),
  canonicalUrl: z.string().optional(),
}).optional();

const reportsCollection = defineCollection({
  type: 'data', // Using 'data' type for JSON files
  schema: z.object({
    // Core identification
    id: z.string(),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens only"),
    
    // Content metadata
    title: z.string().min(1, "Title is required").max(200, "Title must be under 200 characters"),
    subtitle: z.string().min(1, "Subtitle is required").max(300, "Subtitle must be under 300 characters"),
    description: z.string().min(1, "Description is required").max(500, "Description must be under 500 characters"),
    
    // Publishing information
    author: z.string().min(1, "Author is required"),
    publishDate: z.string(), // Could be enhanced with z.date() if using ISO dates
    category: z.enum([
      'Strategic',
      'Technology', 
      'Financial',
      'Market Research',
      'Performance',
      'Regional',
      'Industry Analysis'
    ]),
    tags: z.array(z.string()).min(1, "At least one tag is required").max(10, "Maximum 10 tags allowed"),
    readTime: z.string().regex(/^\d+\s+min\s+read$/, "Read time must be in format 'X min read'"),
    
    // Display options
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
    
    // Dynamic content structure
    sections: z.array(sectionSchema).min(1, "At least one section is required").optional(),
    sectionData: z.record(z.string(), z.any()).optional(),
    
    // SEO and social metadata
    seo: seoSchema,
    
    // Additional metadata for template reuse
    templateVersion: z.string().default('1.0'),
    lastModified: z.string().optional(),
  }),
});

export const collections = {
  reports: reportsCollection,
};