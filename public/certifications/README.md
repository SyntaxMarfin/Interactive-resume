# Certification PDFs

This directory is for storing your certification PDF files that can be downloaded from your interactive resume.

## How to Add Your Certification PDFs

1. Place your certification PDF files in this directory
2. Use the following naming convention:
   - `aws-cloud-solutions-architect-associate.pdf` - For AWS Cloud Solutions Architect Associate certification
   - `google-data-analytics.pdf` - For Google Data Analytics certification
   - Or use a similar naming pattern for other certifications

## Current Certifications

The resume is configured to display and provide download links for:

1. AWS Cloud Solutions Architect Associate
2. Google Data Analytics Certificate

## Adding New Certifications

To add a new certification to your resume:

1. Place the PDF file in this directory
2. Edit the `certifications` array in `src/app/components/Resume.tsx` to add your new certification
3. Follow the existing pattern for certification objects

Example:
```typescript
{
    name: "Your New Certification",
    issuer: "Certification Provider",
    date: "2023",
    pdfPath: "/certifications/your-certification-filename.pdf",
    icon: <FiAward />, // Choose an appropriate icon
    bgColor: "bg-purple-500" // Choose an appropriate background color
}
``` 