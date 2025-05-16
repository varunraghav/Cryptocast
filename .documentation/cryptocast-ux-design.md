## Layout Structure
- **Floating Header**
  - Left: coin/watchlist selector dropdown  
  - Center: app title/logo  
  - Right: global settings (mode toggle, profile menu)  
- **Primary Viewport**
  - Full-width area beneath header  
  - Displays one main widget at a time (default: sentiment time-series)  
- **Bottom Dock**
  - Horizontal strip of 3–5 thumbnail panels (distribution, leaderboard, raw tweets, alerts)  
  - Click a thumbnail to promote it to the Primary Viewport  

## Core Components
- **Widget Panels**
  - Time-series chart with overlay controls  
  - Sentiment-distribution bar/pie chart  
  - Top-influencer leaderboard  
  - Raw-tweet list with metadata tags  
  - Alerts-summary mini-dashboard  
- **Floating Alert Toggle**
  - “⚡ Alerts” button in header opens modal  
- **Mode Toggle**
  - Light / Dark switch in header  
- **Dock Thumbnails**
  - Interactive previews; tooltips on hover  

## Interaction Patterns
- **View Cycling**
  - Arrow keys or swipe gestures cycle through dock panels  
- **Panel Expansion**
  - Double-click or tap-hold a thumbnail to full-screen  
- **Drill-Down**
  - Click chart points or tweet items to open detailed overlay  
- **Alert Configuration**
  - Click “⚡ Alerts” → 3-step modal (select, rules, delivery)  

## Visual Design Elements & Color Scheme
- **Dark Mode (primary)**
  - Deep-space black background  
  - Glowing data lines: neon teal (positive), amber (negative)  
  - White text, light-gray labels  
- **Light Mode (secondary)**
  - White background  
  - Dark-gray data lines with blue/red accents  
  - Dark text, medium-gray labels  
- **Minimal Chrome**
  - Thin separators, no heavy borders  
  - Subtle drop shadows for dock thumbnails  

## Mobile, Web App, Desktop Considerations
- **Desktop-First**
  - Full keyboard/mouse support; hover states  
  - Resizable window support  
- **Tablet**
  - Touch gestures (swipe/drag to cycle views)  
  - Scrollable dock if overflow  
- **Mobile**
  - Header collapses into hamburger menu  
  - Dock thumbnails as swipeable carousel  
  - Primary Viewport remains full-screen  

## Typography
- **Font Family**: Sans-serif (e.g. Inter or Roboto)  
- **Headings**: 18 px bold  
- **Body**: 14 px regular  
- **Numeric Data**: Monospaced font for precision  
- **Spacing**: Line-height 1.5; generous padding  

## Accessibility
- **Contrast**: WCAG AA compliance in both modes  
- **Keyboard**: Visible focus outlines; full tab navigation  
- **Screen-Reader**: ARIA labels on header controls, thumbnails, charts  
- **Color-Blind**: Shape or icon markers in charts in addition to color  
