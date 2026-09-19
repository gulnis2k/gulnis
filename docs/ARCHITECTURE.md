# Architecture

## Application Architecture
- **Framework**: Next.js App Router
- **Routing**: Single-page application approach using anchor links for navigation.
- **Styling**: Tailwind CSS with custom theme variables.

## Data Flow
```mermaid
graph TD
    Sanity[Sanity CMS Studio] -->|Content Editors| Data[(Product Data)]
    Data -->|Fetch API| Next[Next.js App]
    Next -->|Renders| UI[Frontend UI]
    UI -->|Clicks Order| WA[WhatsApp API]
```

## Component Architecture
- Reusable UI elements (Buttons, Cards, Section Headings).
- Client components only where necessary (filtering, interactive elements).
