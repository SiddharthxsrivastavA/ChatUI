# Project Overview

This project is a responsive web application featuring a dynamic navigation bar and chat interface, designed with user experience and functionality in mind. The navigation bar includes a prominent logo with a visually distinct separator, while the chat interface is optimized to handle a large number of messages gracefully. The layout ensures all components fit within the viewport, creating a seamless and visually appealing user experience.

## Key Features

1. **Navigation Bar Enhancements:**
   - Introduced a vertical separator between the logo and navigation items using the `Separator` component.
   - Adjusted the text size of navigation items with `text-sm` for better visual hierarchy.
   - Maintained consistency in the design with a dark background and rounded corners.

2. **Dynamic Chat Area:**
   - Designed to handle a large number of messages by enabling automatic scrolling when the content exceeds the visible area.
   - Ensured accessibility with a responsive layout that adjusts to varying screen sizes.
   - Implemented a height that adapts to the viewport while considering the header and footer.

3. **Full-Page Layout Optimization:**
   - Adjusted the main container to use `h-screen` for full viewport height.
   - Resolved issues of the footer extending outside the screen by fine-tuning margins and spacing.
   - Enhanced overall consistency with background and design elements.

## Challenges Faced

1. **Maintaining Design Hierarchy:**
   - Ensuring the logo remains prominent while other navigation elements are visually distinct but secondary in focus.

2. **Handling Dynamic Chat Content:**
   - Ensuring smooth scrolling behavior and accessibility when the number of messages exceeds the visible area.
   - Balancing responsiveness with maintaining a visually cohesive design.

3. **Responsive Layout:**
   - Adapting the layout to fit various screen sizes without breaking the design.
   - Adjusting the footer and chat area dynamically to ensure they remain within the viewport at all times.

4. **Consistency in Design:**
   - Aligning colors, margins, and rounded corners across components to create a unified look and feel.

---

Despite these challenges, the project successfully implements a robust and user-friendly interface with a focus on responsiveness, functionality, and design consistency.



















This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
