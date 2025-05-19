🌍 World of Instruments - App Documentation
📱 Overview

World of Instruments is a Progressive Web App (PWA) designed to teach users about musical instruments in an interactive and visual way. Users can view images, hear instrument sounds, and read descriptions—all from a clean, mobile-friendly interface.
🚀 Features

    Interactive Canvas that displays instrument images and descriptions

    Sound Playback: Hear what each instrument sounds like

    Responsive Layout: Works well on phones, tablets, and desktops

    PWA Install Option: Add it to your home screen for a native app experience

    Offline Support: View content without an internet connection after it's loaded

📥 How to Install the App

    Open the app link:
    👉 World of Instruments

    You may see a small "Install App" button — click it.

    Alternatively, in Chrome on mobile, open the menu (⋮) and tap “Add to Home Screen.”

🧠 How to Use

    Choose an instrument from the buttons below the canvas.

    The canvas will display an image and description of the instrument.

    A sound associated with that instrument will automatically play.

📁 Folder Structure

World-Of-Instruments/
├── audio/            # mp3 files for instrument sounds
├── css/              # styling
├── data/             # JSON data about instruments
├── images/           # instrument images and icon
├── js/               # app and functionality scripts
├── index.html        # main app interface
├── manifest.json     # PWA metadata
├── service-worker.js # offline support
└── promo.html        # promotional page

🖼️ Screenshots

    (Insert screenshots in the promo page, but feel free to copy 1–2 images here too)

📎 Link to Promo Page

👉 Promo & Download Instructions
🧑‍💻 Programmer Documentation

    📁 Save as: docs/programmer-doc.md or README-programmer.md

🧑‍💻 Programmer Documentation – World of Instruments
🗂️ Tech Stack

    HTML5 / CSS3 / JavaScript

    Canvas API

    JSON (data structure)

    PWA (Manifest + Service Worker)

📦 Data Structure – instruments.json

{
  "instruments": [
    {
      "title": "Trumpet",
      "description": "A brass instrument...",
      "image": "images/trumpet.jpg",
      "audio": "audio/trumpet.mp3"
    }
  ]
}

🔧 To Add a New Instrument:

    Add the new .jpg file to the images/ folder.

    Add the .mp3 file to the audio/ folder.

    In data/instruments.json, add another object inside the "instruments" array:

{
  "title": "Flute",
  "description": "A woodwind instrument...",
  "image": "images/flute.jpg",
  "audio": "audio/flute.mp3"
}

The app automatically loads all items listed in instruments.json.
🛠️ Adding Offline Support

Update the service-worker.js cache array:

caches.open('instrument-cache').then(cache => {
  return cache.addAll([
    './audio/flute.mp3',
    './images/flute.jpg'
  ]);
});

📥 Deployment

    Ensure your repo is set to publish via GitHub Pages (main branch → /root)

    Push all changes and visit:
    https://<username>.github.io/World-Of-Instruments/
