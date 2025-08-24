
# QA Portfolio (ISTQB)

Static website portfolio to showcase your profile, projects, experience, and 1:1 booking.

### Structure

```
index.html
assets/
	css/style.css
	js/main.js
templates/
	automation/
		playwright-js/
		selenium-java/
		postman-api/
		cypress-js/
```

### Running Locally

Since this is a static site, simply open `index.html` in your browser or use a simple local server.

PowerShell (Windows):

```powershell
cd d:\personal-portofolio
python -m http.server 8000
```

Then open http://localhost:8000

### Cal.com Integration

1. Create or log in to your account at https://cal.com
2. Note your username (e.g., `hendrichqa`).
3. (Optional) Create a dedicated 1:1 Event Type.
4. In the Event Type, add a custom question: `Mobile Phone` (Single-line Text, Required).
5. Open `assets/js/main.js` and update:
	 ```js
	 const calUsername = "your-username";
	 const eventType = ""; // fill with event type ID if needed.
	 ```
6. Save and refresh the page. The pre-booking form will prefill name/email & put phone in notes.

### Personalization

Find and replace placeholders like `[Your Name]`, `USERNAME`, or experience text in `index.html` as needed.

### Automation Templates

- Playwright JavaScript: `templates/automation/playwright-js/`
- Selenium + TestNG Java: `templates/automation/selenium-java/`
- Postman Collection: `templates/automation/postman-api/`
- Cypress JavaScript: `templates/automation/cypress-js/`

You can add other projects by copying the card structure in the Projects section (`index.html`).

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
