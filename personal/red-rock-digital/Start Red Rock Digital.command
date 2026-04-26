#!/bin/bash

# ─── Red Rock Digital — Local Dev Server ────────────────────────────────────
# Double-click this file in Finder to start the Next.js dev server.
# ────────────────────────────────────────────────────────────────────────────

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PORT=3002
export PATH="$HOME/.nvm/versions/node/v24.14.1/bin:/opt/homebrew/bin:$PATH"

clear
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "       Red Rock Digital — Dev Server"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo " Local:   http://localhost:$PORT"
echo ""
echo " Changes save automatically — just refresh"
echo " the browser to see updates."
echo ""
echo " Press Ctrl+C to stop the server."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Open Safari after a short delay so the server is ready
(sleep 2 && open -a Safari "http://localhost:$PORT") &

cd "$SCRIPT_DIR"
npm run dev -- --port $PORT
