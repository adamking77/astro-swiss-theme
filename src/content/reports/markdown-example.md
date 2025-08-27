---
id: "markdown-example"
slug: "markdown-example"
title: "Complete Markdown Formatting Guide"
subtitle: "Demonstrating all available Markdown features in reports"
description: "A comprehensive guide showing how to use all Markdown formatting options within the Astro Swiss Theme for professional reports."
author: "Astro Team"
publishDate: "June 2025"
category: "Technology"
tags: ["Markdown", "Formatting", "Guide", "Documentation"]
readTime: "10 min read"
featured: true
templateVersion: "1.0"
components:
  - type: "ContentSplit"
    leftTitle: "Advanced Analytics"
    leftDescription: "Our comprehensive analysis framework combines quantitative data modeling with qualitative market insights to deliver actionable business intelligence that drives strategic decision-making and operational excellence."
    rightTitle: "Key Methodologies"
    rightItems:
      - title: "Data Mining & Pattern Recognition"
        description: "Advanced algorithms identify hidden patterns in large datasets, revealing trends and correlations that inform strategic planning."
        meta: "Phase 1"
      - title: "Predictive Modeling"
        description: "Statistical models forecast future trends and outcomes, enabling proactive business strategies and risk mitigation."
        meta: "Phase 2"
      - title: "Market Sentiment Analysis"
        description: "Natural language processing techniques analyze market sentiment from multiple sources to gauge consumer behavior."
        meta: "Phase 3"
    reversed: false
  - type: "MinimalList"
    title: "Implementation Framework"
    numbered: true
    items:
      - title: "Discovery & Requirements Gathering"
        description: "Comprehensive stakeholder interviews and system analysis to understand current capabilities and future needs."
        meta: "2-3 weeks"
      - title: "Technical Architecture Design"
        description: "Create scalable, maintainable system architecture that supports both current requirements and future growth."
        meta: "1-2 weeks"
      - title: "Pilot Implementation"
        description: "Deploy limited scope pilot to validate approach, identify issues, and refine processes before full rollout."
        meta: "3-4 weeks"
      - title: "Full Deployment & Training"
        description: "Complete system deployment with comprehensive user training and change management support."
        meta: "2-3 weeks"
---

# Complete Markdown Formatting Guide

This comprehensive report demonstrates **all** available Markdown formatting options within the Astro Swiss Theme. It serves as both a reference guide and a showcase of how to create professional, well-formatted reports.

## Text Formatting

### Basic Text Styles

- **Bold text** - Use double asterisks or double underscores
- *Italic text* - Use single asterisk or single underscore
- ~~Strikethrough text~~ - Use double tildes
- `Inline code` - Use backticks for technical terms
- **_Combination formatting_** - Combine bold and italic

### Superscript and Subscript

This is regular text with super^script^ and sub~script~ text.

## Headings

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

Alternative heading styles:

Heading 1
=========

Heading 2
---------

## Lists

### Ordered Lists

1. First item
2. Second item
   1. Sub-item
   2. Another sub-item
3. Third item

### Unordered Lists

- First item
- Second item
  - Sub-item
  - Another sub-item
- Third item

### Task Lists

- [x] Completed task
- [ ] Incomplete task
- [ ] Another incomplete task

## Code

### Inline Code

Use `const example = true;` for inline code references.

### Code Blocks

```javascript
// JavaScript example
function calculateMetrics(data) {
  const results = data.map(item => ({
    id: item.id,
    value: item.value * 2,
    processed: true
  }));
  
  return results.filter(item => item.value > 100);
}
```

```python
# Python example
def process_data(data):
    results = []
    for item in data:
        if item['value'] > 100:
            results.append(item)
    return results
```

```json
{
  "name": "astro-swiss-theme",
  "version": "1.0.0",
  "description": "A professional Astro theme with Swiss design principles"
}
```

## Tables

| Feature        | Status | Priority | Estimated Time |
| -------------- | ------ | -------- | -------------- |
| Markdown Support | ✅ Complete | High | 2 weeks |
| Chart Integration | ✅ Complete | High | 3 weeks |
| CMS Integration | 🔄 In Progress | Medium | 4 weeks |
| Mobile Optimization | ⏳ Planned | Low | 2 weeks |

### Alignment in Tables

| Left Align | Center Align | Right Align |
| :--------- | :----------: | ----------: |
| Value 1    |   Value 2    |      Value 3 |
| Value 4    |   Value 5    |      Value 6 |

## Links and References

### External Links

[Visit Astro's website](https://astro.build)

### Internal References

- [Text Formatting](#text-formatting)
- [Headings](#headings)
- [Lists](#lists)

### Reference Links

This is a [reference link][ref1] and another [reference link][ref2].

[ref1]: https://example.com
[ref2]: https://astro.build

## Images

![Alt text](https://placehold.co/600x400?text=Example+Image)

## Blockquotes

> "Markdown is intended to be as easy-to-read and easy-to-write as is feasible."
> 
> — John Gruber, Creator of Markdown

### Nested Blockquotes

> This is a blockquote
>
> > This is a nested blockquote
>
> Back to the first blockquote

## Horizontal Rules

---

***

___

## Special Elements

### Emojis

Astro is awesome! 🚀✨

### Escaping Characters

\*This text is not italic\*

### Abbreviations

*[HTML]: Hyper Text Markup Language
*[W3C]: World Wide Web Consortium

The HTML specification is maintained by the W3C.

## Embedded Charts

The Astro Swiss Theme supports embedding interactive charts from external charting services using iframe embed codes. Here's a real example using GraphZen:

<ChartWrapper 
  id="revenue-projections"
  title="Revenue (₺) projections for GraphZen"
  description="Revenue by year for each scenario"
  embedUrl="https://graph-zen.app?embed=true&config=eyJ0aXRsZSI6IlJldmVudWUgKOKCrCkgcHJvamVjdGlvbnMgZm9yIEdyYXBoWmVuIiwic3VidGl0bGUiOiJSZXZlbnVlIGJ5IHllYXIgZm9yIGVhY2ggc2NlbmFyaW8iLCJ0eXBlIjoibGluZSIsImRhdGEiOlt7InNjZW5hcmlvIjoiWWVhciAxIENvbnNlcnZhdGl2ZSIsInZhbHVlIjoxODAwMDB9LHsic2NlbmFyaW8iOiJZZWFyIDIgR3Jvd3RoIFNjZW5hcmlvIiwidmFsdWUiOjM2MDAwMH0seyJzY2VuYXJpbyI6IlllYXIgMyBTY2FsZSBTY2VuYXJpbyIsInZhbHVlIjo2OTAwMDB9XSwiZGltZW5zaW9ucyI6eyJ3aWR0aCI6MTkyMCwiaGVpZ2h0IjoxMDgwLCJwcmVzZXQiOiJHb29nbGUgU2xpZGVzIC8gUG93ZXJQb2ludCIsImFzcGVjdFJhdGlvIjoiMTY6OSJ9LCJ0aGVtZSI6eyJwYWxldHRlIjp7ImlkIjoiY29ycG9yYXRlLXJlZmluZWQiLCJuYW1lIjoiQ29ycG9yYXRlIiwiY29sb3JzIjpbIiM0MzM4Q0EiLCIjMDM2OUExIiwiIzA0Nzg1NyIsIiNCNDUzMDkiLCIjQjkxQzFDIl0sInR5cGUiOiJjb2xvcmZ1bCJ9LCJib3JkZXJTdHlsZSI6Im5vbmUiLCJib3JkZXJDb2xvciI6IiM2QjcyODAiLCJjb3JuZXJTdHlsZSI6InJvdW5kZWQiLCJiYWNrZ3JvdW5kIjoiYmxhY2siLCJzb3J0SGlnaFRvTG93IjpmYWxzZSwic2hvd0RhdGFMYWJlbHMiOnRydWUsInNob3dQZXJjZW50YWdlcyI6ZmFsc2UsInNob3dHcmlkTGluZXMiOnRydWUsImFiYnJldmlhdGlvbiI6ImF1dG8iLCJkZWNpbWFsUGxhY2VzIjoiYXV0byIsImZpeGVkRGVjaW1hbENvdW50IjowfSwibXVsdGlTZXJpZXMiOnRydWUsInNlcmllcyI6W3sibmFtZSI6IkRhdGFzZXQgMSIsImRhdGEiOlt7InNjZW5hcmlvIjoiWWVhciAxIENvbnNlcnZhdGl2ZSIsInZhbHVlIjoxODAwMDB9LHsic2NlbmFyaW8iOiJZZWFyIDIgR3Jvd3RoIFNjZW5hcmlvIiwidmFsdWUiOjM2MDAwMH0seyJzY2VuYXJpbyI6IlllYXIgMyBTY2FsZSBTY2VuYXJpbyIsInZhbHVlIjo2OTAwMDB9XX0seyJuYW1lIjoiRGF0YXNldCAyIiwiZGF0YSI6W3sic2NlbmFyaW8iOiJDYXRlZ29yeSBBIiwidmFsdWUiOjY3MDAwLCJkaXNwbGF5VmFsdWUiOiI2N2sifSx7InNjZW5hcmlvIjoiQ2F0ZWdvcnkgQiIsInZhbHVlIjoyNDgwMDAsImRpc3BsYXlWYWx1ZSI6IjI0OGsifSx7InNjZW5hcmlvIjoiQ2F0ZWdvcnkgQyIsInZhbHVlIjo1NzUwMDAsImRpc3BsYXlWYWx1ZSI6IjU3NWsifV19XX0="
  height="500px" />

You can also embed charts directly using HTML iframes in Markdown:

<div class="responsive-iframe-wrapper">
  <iframe src="https://graph-zen.app?embed=true&config=eyJ0aXRsZSI6IlJldmVudWUgKOKCrCkgcHJvamVjdGlvbnMgZm9yIEdyYXBoWmVuIiwic3VidGl0bGUiOiJSZXZlbnVlIGJ5IHllYXIgZm9yIGVhY2ggc2NlbmFyaW8iLCJ0eXBlIjoibGluZSIsImRhdGEiOlt7InNjZW5hcmlvIjoiWWVhciAxIENvbnNlcnZhdGl2ZSIsInZhbHVlIjoxODAwMDB9LHsic2NlbmFyaW8iOiJZZWFyIDIgR3Jvd3RoIFNjZW5hcmlvIiwidmFsdWUiOjM2MDAwMH0seyJzY2VuYXJpbyI6IlllYXIgMyBTY2FsZSBTY2VuYXJpbyIsInZhbHVlIjo2OTAwMDB9XSwiZGltZW5zaW9ucyI6eyJ3aWR0aCI6MTkyMCwiaGVpZ2h0IjoxMDgwLCJwcmVzZXQiOiJHb29nbGUgU2xpZGVzIC8gUG93ZXJQb2ludCIsImFzcGVjdFJhdGlvIjoiMTY6OSJ9LCJ0aGVtZSI6eyJwYWxldHRlIjp7ImlkIjoiY29ycG9yYXRlLXJlZmluZWQiLCJuYW1lIjoiQ29ycG9yYXRlIiwiY29sb3JzIjpbIiM0MzM4Q0EiLCIjMDM2OUExIiwiIzA0Nzg1NyIsIiNCNDUzMDkiLCIjQjkxQzFDIl0sInR5cGUiOiJjb2xvcmZ1bCJ9LCJib3JkZXJTdHlsZSI6Im5vbmUiLCJib3JkZXJDb2xvciI6IiM2QjcyODAiLCJjb3JuZXJTdHlsZSI6InJvdW5kZWQiLCJiYWNrZ3JvdW5kIjoiYmxhY2siLCJzb3J0SGlnaFRvTG93IjpmYWxzZSwic2hvd0RhdGFMYWJlbHMiOnRydWUsInNob3dQZXJjZW50YWdlcyI6ZmFsc2UsInNob3dHcmlkTGluZXMiOnRydWUsImFiYnJldmlhdGlvbiI6ImF1dG8iLCJkZWNpbWFsUGxhY2VzIjoiYXV0byIsImZpeGVkRGVjaW1hbENvdW50IjowfSwibXVsdGlTZXJpZXMiOnRydWUsInNlcmllcyI6W3sibmFtZSI6IkRhdGFzZXQgMSIsImRhdGEiOlt7InNjZW5hcmlvIjoiWWVhciAxIENvbnNlcnZhdGl2ZSIsInZhbHVlIjoxODAwMDB9LHsic2NlbmFyaW8iOiJZZWFyIDIgR3Jvd3RoIFNjZW5hcmlvIiwidmFsdWUiOjM2MDAwMH0seyJzY2VuYXJpbyI6IlllYXIgMyBTY2FsZSBTY2VuYXJpbyIsInZhbHVlIjo2OTAwMDB9XX0seyJuYW1lIjoiRGF0YXNldCAyIiwiZGF0YSI6W3sic2NlbmFyaW8iOiJDYXRlZ29yeSBBIiwidmFsdWUiOjY3MDAwLCJkaXNwbGF5VmFsdWUiOiI2N2sifSx7InNjZW5hcmlvIjoiQ2F0ZWdvcnkgQiIsInZhbHVlIjoyNDgwMDAsImRpc3BsYXlWYWx1ZSI6IjI0OGsifSx7InNjZW5hcmlvIjoiQ2F0ZWdvcnkgQyIsInZhbHVlIjo1NzUwMDAsImRpc3BsYXlWYWx1ZSI6IjU3NWsifV19XX0=" width="100%" height="100%" frameborder="0"></iframe>
</div>

## Mathematical Expressions

When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are:

$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$

## Definition Lists

Astro
: A modern static site builder that delivers faster websites.

Markdown
: A lightweight markup language with plain text formatting syntax.

## Footnotes

This is a sentence with a footnote[^1].

[^1]: This is the footnote content.

## Alerts and Callouts

> **Note:** This is an important note that readers should pay attention to.

> **Tip:** This is a helpful tip for implementing the features discussed.

> ⚠️ **Warning:** This is a critical warning about potential issues.

> **Important:** This is crucial information.

> **Caution:** This requires careful consideration.

## Best Practices Summary

1. **Maintain heading hierarchy** - Use proper heading levels (H1, H2, H3) for document structure
2. **Use lists appropriately** - Choose ordered vs unordered lists based on content type
3. **Format code correctly** - Use language identifiers for syntax highlighting
4. **Organize data clearly** - Present tabular data in well-formatted tables
5. **Emphasize key points** - Use formatting to draw attention to important information
6. **Embed visualizations** - Use ChartWrapper components to enhance data presentation

By following these best practices, you can create professional reports that effectively communicate complex information to your audience.