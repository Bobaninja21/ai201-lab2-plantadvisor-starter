# Plant Advisor Local Site

This folder contains a self-contained static version of the Plant Advisor app that runs entirely in the browser. Plant data and seasonal guidance are embedded directly in `app.js`, so the page works without fetching external JSON files.

## Files

- `index.html` — main web page
- `styles.css` — page styling
- `app.js` — app logic and local plant lookup

## Run locally

1. Open `index.html` in your web browser.
2. Ask a question about a plant from the list or choose one of the example prompts.

### Notes

- The app uses embedded local data inside `app.js`.
- No server or external API key is required.
- Supported plants are listed in the sidebar.

## Example use

- `How do I care for my pothos?`
- `My snake plant looks droopy. Is it overwatered?`
- `What should I do for my monstera in winter?`

## Troubleshooting

If the page does not load:

- Ensure `app.js` and `styles.css` are in the same folder as `index.html`.
- Open the browser developer console to inspect any missing file errors.
