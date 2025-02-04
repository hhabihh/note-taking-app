# JotNote - A Note Taking App

This is a note taking app built with HTML, CSS, and Node.js, EJS and MongoDB.

## File Structure

```
project-root/
├── node_modules/
├── public/
│   ├── css
│   │    └── main.css
│   └── img
│        ├── human-1.png
│        ├── human-2.png
│        ├── logo_jotNote.png
│        └── notes.png
├── server/
│   ├── config/
│   │    └── db.js
│   ├── controller/
│   │    ├── dashboardController.js
│   │    ├── mainController.js
│   ├── middleware/
│   │    └── checkAuth.js
│   ├── models/
│   │    ├── Notes.js
│   │    └── User.js
│   ├── routes/
│   │    ├── auth.js
│   │    ├── dashboard.js
│   │    └── index.js
│   ├── views/
│   │    ├── dashboard/
│   │    │   ├── add.ejs
│   │    │   ├── index.ejs
│   │    │   ├── search.ejs
│   │    │   └── view-note.ejs
│   │    ├── layouts/
│   │    │   ├── dashboard.ejs
│   │    │   ├── front-page.ejs
│   │    │   └── main.ejs
│   │    ├── partials/
│   │    │   ├── footer.ejs
│   │    │   ├── header-dashboard.ejs
│   │    │   └── header.ejs
│   │    ├── 404.ejs
│   │    ├── about.ejs
│   │    └── index.ejs
│   ├── .env
│   ├── app.js
│   ├── package-lock.json
│   ├── package.json
└───└── README.md
```

## How to Run the App

1. **Clone the repository:**
   ```sh
   git clone git@github.com:Circuit-Stream-LMS/movie-ratings-app.git
   cd project-root
   ```

2. **Install the dependencies:**
   ```sh
   npm install
   ```

3. **Run the application:**
   ```sh
   npm start
   ```

4. **Open your web browser and go to:**
   ```
   http://localhost:3000
   ```

## Next Steps: Create an account and start creating notes

    a. Sign up but getting authorised with a Google account
    b. Add a new note
    c. Delete a note
    d. Update a note
    e. Search notes
    f. Logout
    g. Enjoy! Keep all your private notes PRIVATE!
