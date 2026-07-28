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

This notebook currently is the prototype for the internals of the future website.
## Repository layout

```text
.
├── UV instantaneous.ipynb  # Current visualization prototype
├── requirements.txt        # Python dependencies for local development
└── README.md
```

## Data note

The telescope coordinates and elevations are currently stored directly in the notebook.

