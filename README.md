# EHT Project

An interactive visualization of the Event Horizon Telescope (EHT) network. The current prototype is a Jupyter notebook that:

- will map 11 telescopes on an interactive map/globe created by plotly;
- calculates projected baselines for a selected observing target; and
- visualizes instantaneous UV coverage.

## Run the prototype locally

Python 3.11 or newer is recommended.

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
jupyter lab
```

Open `UV instantaneous.ipynb` in JupyterLab and run its cells from top to bottom.

## Website direction

The notebook is the prototype for the internals of the future website. The repository now also includes a static website foundation that can be hosted on GitHub Pages. Calculations and Plotly views can be moved incrementally into `app.js` or additional JavaScript modules.

To preview the website locally, open `index.html` in a browser. After the files are pushed, select **GitHub Actions** as the deployment source under the repository's **Settings → Pages** screen.
## Repository layout

```text
.
├── .github/workflows/      # Automatic GitHub Pages deployment
├── UV instantaneous.ipynb  # Current visualization prototype
├── index.html              # Website structure and content
├── styles.css              # Website appearance and responsive layout
├── app.js                  # Browser behavior and future visualization logic
├── requirements.txt        # Python dependencies for local development
└── README.md
```

## Data note

The telescope coordinates and elevations are currently stored directly in the notebook.
