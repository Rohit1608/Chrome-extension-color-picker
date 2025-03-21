# Color Picker Extension

A simple Chrome extension that uses the [EyeDropper API](https://developer.mozilla.org/docs/Web/API/EyeDropper) to pick a color from any webpage and copy its hex value to your clipboard.

## Features

- Pick a color using the EyeDropper.
- Display the selected color in the popup.
- Copy the color code to the clipboard.

## Installation

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions`.
3. Enable **Developer Mode**.
4. Click **Load unpacked** and select the extension folder.

## Usage

1. Navigate to any regular webpage (e.g., `https://example.com`).
2. Click the extension icon.
3. In the popup, click **Pick color**.
4. Select a color with the EyeDropper.
5. The chosen color will display in the popup and be copied to your clipboard.

## Files Overview

- `manifest.json`: Extension configuration.
- `popup.html`, `popup.css`, `popup.js`: Popup UI and functionality.
- `background.js`: Background service worker.
- `images/`: Extension icons.


