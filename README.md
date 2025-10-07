# Bookmark Landing Page

This project is a fully responsive landing page for the fictional "Bookmark" application, built with Next.js and styled with Tailwind CSS. It was created as a solution to the Bookmark landing page challenge on Frontend Mentor.

The live site can be viewed here: Bookmark Landing Page

## Tech Stack

*   **Framework**: Next.js (App Router)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS v4 (alpha)
*   **Linting/Formatting**: ESLint & Prettier

## Features & Implementation Details

This project is built with a component-based architecture, making it modular and maintainable. Below is a breakdown of the key components and the techniques used to build them.

### 1. Global Styles & Theming
*   **Tailwind CSS v4**: The project leverages the new CSS-first approach of Tailwind CSS v4.
*   **`@theme`**: All design tokens (colors, font sizes, spacing, shadows) are defined as CSS custom properties within a `@theme` block in `globals.css` for a centralized and maintainable styling system.
*   **`@utility`**: Custom text presets and layout utilities were created to enforce typographic consistency and DRY principles.
*   **Font Optimization**: The 'Rubik' font is loaded and optimized using `next/font` for improved performance.

### 2. Navigation & Mobile Menu
*   **State Management**: The open/closed state of the mobile menu is managed globally using React Context (`MenuBarProvider`).
*   **Body Scroll Lock**: A `useEffect` hook is used to prevent body scrolling when the mobile menu is active, improving the user experience on mobile devices.
*   **Dynamic SVG Styling**: The logo's colors are dynamically changed for the mobile menu overlay. This was achieved by removing hardcoded `fill` attributes from the SVG and controlling the colors with CSS classes that are conditionally applied based on the menu's state.

### 3. Hero Section
*   **Responsive Layout**: The section uses Flexbox to switch from a vertical layout on mobile to a `flex-row-reverse` layout on desktop.
*   **Decorative Background Shape**: The large blue "pill" shape in the background is a `div` positioned absolutely. Its size is defined using viewport width (`vw`) units and an `aspect-ratio` to ensure it scales proportionally. On larger screens, responsive prefixes (`md:`) are used to cap its size with `max-width` and `max-height` for a controlled desktop appearance.

### 4. Features (Tabbed Interface)
*   **Interactive Tabs**: Built as a client component (`"use client"`) that uses the `useState` hook to track the currently selected feature.
*   **Conditional Styling**: The active tab has a `.selected` class applied, which is used to display an orange underline.
*   **CSS Pseudo-element**: The underline is created with an `::after` pseudo-element, which is horizontally centered using the `transform: translateX(-50%)` technique.
*   **Dynamic Content**: The illustration, title, and description change dynamically based on the selected tab's state.
*   **Text Formatting**: Multi-line titles are rendered by respecting newline characters (`\n`) in the source string, enabled by the `white-space: pre-line;` CSS property.

### 5. Download Section
*   **Staggered Layout**: On large screens, the download cards are arranged in a staggered vertical layout. This is achieved purely with CSS by targeting the second and third cards using the `:nth-child()` selector and applying a responsive `margin-top` (`lg:mt-8`, `lg:mt-16`).

### 6. FAQ (Accordion)
*   **Semantic HTML**: The accordion is built using the native HTML `<details>` and `<summary>` elements, ensuring it is accessible out-of-the-box.
*   **Custom Icon Styling**: The default dropdown marker is hidden, and a custom arrow icon is added with a `::after` pseudo-element.
*   **CSS Masking**: To change the icon's color on open, the SVG is used as a CSS `mask`. This allows the `background-color` of the pseudo-element to be changed, which is a flexible way to control SVG colors in different states.
*   **CSS Transforms**: The arrow icon smoothly rotates 180 degrees when the accordion is opened using `transform: rotate(180deg)`.

### 7. Call to Action (Email Form)
*   **Form Validation**: The email input includes client-side validation that runs on form submission.
*   **State Management**: The form uses `useState` to manage the input's value and any validation error messages.
*   **Conditional Rendering & Styling**: If the email format is invalid, an error message and icon are conditionally rendered. An `.error` class is applied to the input's wrapper, which adds a red border and background to provide clear visual feedback to the user.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18 or later)
*   npm, yarn, or pnpm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your-username/bookmark-landing-page.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Run the development server
    ```sh
    npm run dev
    ```

Open http://localhost:3000 with your browser to see the result.

