#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Navigate to the directory where the script is located (optional, assumes execution from project root)
# cd "$(dirname "$0")"

echo "--- Installing dependencies ---"
# Use npm ci for cleaner, faster, and more reliable builds in CI environments
# If package-lock.json is not present or you prefer npm install, you can use that.
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

echo "--- Building the project ---"
npm run build

# Environment variables can be set here if needed, e.g.:
# export NODE_ENV=production
# export PORT=9000

echo "--- Starting the application on port 9000 ---"
# The package.json start script already specifies port 9000, but we can override or ensure it here
npm start -- -p 9000
