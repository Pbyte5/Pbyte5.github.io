# Lians's Portfolio

Personal portfolio showcasing web development projects. Includes a main page with information about me, my services and projects, and a pet social media project called **Soft Paws**.

## Project Structure

```
project/
├── index.html                  # Portfolio main page
├── README.md
├── views/
│   └── pets.html               # Project: Soft Paws (pet social media)
├── src/
│   ├── stylesheet/
│   │   ├── stylesheet-portfolio.css   # Portfolio styles
│   │   ├── stylesheet-pet-store.css   # Soft Paws styles
│   │   ├── left-nav.css               # Side navigation styles
│   │   ├── reset.css                  # Global CSS reset
│   │   ├── responsive-index.css       # Portfolio responsive styles
│   │   └── responsive-pet.css         # Soft Paws responsive styles
│   └── js/
│       └── scripts.js                 # Hamburger menu logic
└── public/
    ├── icons/
    │   ├── python-icon.svg
    │   ├── html-icon.svg
    │   └── css-icon.svg
    └── img/
        ├── dog1.png
        ├── dog2.png
        ├── dog3.png
        └── dog4.jpg
```

## Pages

### index.html — Portfolio
- **About** section: personal introduction
- **Projects** section: project cards with links
- **Services** section: technologies I work with (Python, HTML, CSS)
- **Contact** section: contact form

### views/pets.html — Soft Paws
A social media platform for pet lovers. Features:
- Side navigation menu (Messages, Notifications, Create, Profile, Settings)
- Stories with pet photos
- Post feed with likes, comments and share buttons
- Contacts sidebar with online status
- Hamburger menu for mobile devices

## Technologies

- HTML5
- CSS3 (Grid, Flexbox, Media Queries)
- Vanilla JavaScript

## How to Run

Open with a local server so styles load correctly. In VS Code, install the **Live Server** extension and click `Go Live`.

> Opening the HTML file directly from the file explorer may cause styles not to load due to absolute paths.

## Author

**Lians** — Software development student  
© 2025 Lians. All rights reserved.
