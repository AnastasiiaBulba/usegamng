# DIY Doll Factory Website

A modern, responsive multi-page website for the DIY Doll Factory game, built with pure HTML, CSS, and JavaScript.

## 🎮 Game Overview

DIY Doll Factory is an exciting running game where players collect doll parts, customize their creations, and build unique doll collections. Players run across colorful platforms, gather accessories, and manage their own doll factory.

## 🌟 Features

### Design & Layout

- **Mobile-first responsive design** with breakpoints at 360px, 768px, and 1280px
- **Flexbox-based layout** for modern, flexible designs
- **CSS variables** for consistent theming and easy customization
- **Smooth animations** and hover effects throughout
- **Modern typography** using system fonts (Arial, Times New Roman)

### Technical Implementation

- **Pure HTML, CSS, and JavaScript** - no external dependencies
- **Dynamic content loading** from JSON files
- **Component-based architecture** with separate header and footer files
- **Cookie banner** with localStorage persistence
- **Form validation** with real-time feedback
- **Responsive iframe integration** for the game

### Pages & Sections

#### Homepage (`index.html`)

- **Hero Section**: Eye-catching introduction with game overview
- **Features**: Four key game features with icons
- **How to Play**: Game controls and objectives
- **Game Section**: Embedded iframe with the actual game
- **Drawing Tools**: Information about diverse collection paths
- **Reviews**: Player testimonials loaded from JSON

#### News Page (`baby-log.html`)

- **Factory Updates**: Game updates and new features
- **Adventure Chronicles**: Player stories and experiences
- **Read More functionality**: Expandable content sections
- **Content loaded from JSON** with fallback defaults

#### Contact Page (`baby-contacts.html`)

- **Contact Information**: Email, phone, and location
- **Interactive Map**: Google Maps integration
- **Contact Form**: Name, phone, and message fields
- **Form Validation**: Real-time validation with error messages
- **Success Feedback**: Confirmation messages after submission

#### Legal Pages

- **Disclaimer** (`baby-disclaimer.html`): Legal disclaimers and terms
- **Cookie Policy** (`baby-cookies.html`): Detailed cookie usage information
- **Privacy Policy** (`baby-privacy.html`): Comprehensive privacy information

## 📁 File Structure

```
usegamng/
├── index.html                 # Homepage
├── baby-log.html             # News page
├── baby-contacts.html        # Contact page
├── baby-disclaimer.html      # Disclaimer
├── baby-cookies.html         # Cookie Policy
├── baby-privacy.html         # Privacy Policy
├── components/
│   ├── header.html           # Header component
│   └── footer.html           # Footer component
├── css/
│   ├── common.css            # Shared styles and variables
│   ├── index.css             # Homepage styles
│   ├── baby-log.css          # News page styles
│   ├── baby-contacts.css     # Contact page styles
│   └── legal.css             # Legal pages styles
├── js/
│   ├── builder.js            # Header/footer loader
│   ├── cookie-banner.js      # Cookie banner management
│   ├── index.js              # Homepage functionality
│   ├── baby-log.js           # News page functionality
│   └── baby-contacts.js      # Contact form handling
├── data/
│   ├── reviews.json          # Player reviews
│   ├── updates.json          # Game updates (fallback)
│   └── diaries.json          # Player stories (fallback)
└── image/
    ├── favic.jpg             # Favicon
    ├── hiro3.jpg             # Hero image
    ├── sect_one.jpg          # How to play image
    ├── sect_two.jpg          # Features image
    ├── new.jpg               # News images
    ├── new2.jpg
    └── new3.jpg
```

## 🎨 Design System

### Color Palette

- **Primary**: `#ff6b9d` (Pink)
- **Secondary**: `#4ecdc4` (Teal)
- **Accent**: `#ffe66d` (Yellow)
- **Text Dark**: `#2c3e50` (Dark Blue)
- **Text Light**: `#7f8c8d` (Gray)
- **Background Light**: `#f8f9fa` (Light Gray)
- **Background White**: `#ffffff` (White)

### Typography

- **Primary Font**: Arial, sans-serif
- **Secondary Font**: Times New Roman, serif
- **Responsive sizing** with mobile-first approach

### Spacing System

- **XS**: 0.5rem
- **SM**: 1rem
- **MD**: 1.5rem
- **LG**: 2rem
- **XL**: 3rem
- **XXL**: 4rem

## 🚀 Key Features

### Component Architecture

- **Separate header and footer files** for easy maintenance
- **Dynamic loading** with fallback support
- **Centralized management** of common elements
- **Error handling** for component loading failures

### Cookie Management

- **Automatic banner** on first visit
- **localStorage persistence** to prevent repeat displays
- **Accept button** functionality
- **Responsive design** for all screen sizes

### Dynamic Content Loading

- **JSON-based content** for easy updates
- **Fallback content** when JSON files are unavailable
- **Error handling** for failed requests
- **Progressive enhancement** approach

### Form Validation

- **Real-time validation** on blur events
- **Custom error messages** for each field type
- **Visual feedback** with border color changes
- **Success confirmation** after submission

### Responsive Design

- **Mobile-first approach** starting at 360px
- **Flexible layouts** using Flexbox
- **Adaptive typography** and spacing
- **Touch-friendly** interface elements

## 🎯 Game Integration

### Iframe Implementation

- **Responsive sizing** that adapts to viewport
- **No scrolling** on mobile devices
- **Fullscreen support** for optimal gaming experience
- **Cross-origin security** considerations

### Game Features Highlighted

- **Endless Running**: Platform-based gameplay
- **Customization**: Doll parts and accessories
- **Factory Building**: Management mechanics
- **Collection System**: Organization and completion

## 📱 Mobile Optimization

### Touch-Friendly Design

- **Large touch targets** (minimum 44px)
- **Smooth scrolling** and animations
- **Optimized loading** for mobile networks
- **Battery-efficient** animations

### Performance

- **Minimal JavaScript** for faster loading
- **Optimized images** for mobile bandwidth
- **Efficient CSS** with minimal repaints
- **Progressive loading** of content

## 🔧 Technical Details

### Browser Support

- **Modern browsers** (Chrome, Firefox, Safari, Edge)
- **Mobile browsers** (iOS Safari, Chrome Mobile)
- **Progressive enhancement** for older browsers

### Performance Optimizations

- **Minimal DOM manipulation**
- **Efficient event handling**
- **Optimized CSS selectors**
- **Lazy loading** for non-critical content

### Security Considerations

- **XSS prevention** through proper escaping
- **CSRF protection** for forms
- **Content Security Policy** ready
- **Secure cookie handling**

## 📞 Contact Information

- **Email**: connection@usegamng.com
- **Phone**: +1 (604) 555-9876
- **Location**: 1234 West Georgia Street, Vancouver, BC V6E 4M8, Canada

## 📄 Legal Information

All legal pages are comprehensive and cover:

- **Privacy protection** and data handling
- **Cookie usage** and management
- **Legal disclaimers** and terms
- **User rights** and responsibilities

## 🎨 Customization

The website is designed for easy customization:

- **CSS variables** for color and spacing changes
- **Modular JavaScript** for feature additions
- **JSON-based content** for easy updates
- **Component-based architecture** for consistent header and footer

---

Built with ❤️ for the DIY Doll Factory gaming community.
