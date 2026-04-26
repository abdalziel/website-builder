# Claude Design Action Items
# claude.ai/design
# ─────────────────────────────────────────────────────────────

## 1. LOGO MARK  ← Start here
Goal: A logo mark for "Red Rock Digital" using diagonal angular rock
      slab formations with white negative-space cuts between them.

Reference images to upload:
  - Church logo (red square badge with diagonal strata slabs)
  - Official Red Rocks Amphitheatre logo (organic diagonal rock formations)

Prompt to use:
  "Create a logo mark for a web design company called Red Rock Digital
  based in Colorado. Use the visual language from these two reference logos
  — diagonal angular rock slab formations with white negative-space cuts
  between them, tilted about 35 degrees. Color: rust red #C4442B.
  I want a square badge version AND a standalone version without a container.
  Keep it clean and geometric, not overly organic. Export as SVG."

Deliverable: SVG file → give to Claude Code to drop into nav + favicon


## 2. HERO SECTION BACKGROUND
Goal: A Red Rocks-inspired background texture/illustration for the hero.

Current: Solid dark canyon color (#1C1208) with a subtle CSS grid overlay.
Upgrade: A stylized rock formation silhouette or strata texture that feels
         like you're looking up at Red Rocks from the stage.

Prompt idea:
  "Design a dark background hero section for a Colorado web design company.
  Use a subtle Red Rocks Amphitheatre silhouette or layered rock strata
  texture. Colors: deep canyon dark (#1C1208) with rust red (#C4442B)
  accents. Should feel cinematic and Colorado without being too literal."

Deliverable: SVG or image asset → replace hero background


## 3. COLOR PALETTE REFINEMENT
Goal: Validate or improve the current palette before finalizing.

Current palette:
  --color-rust:        #C4442B  (primary)
  --color-rust-dark:   #A33820
  --color-rust-light:  #E05A3A
  --color-canyon:      #1C1208  (dark bg)
  --color-sandstone:   #E8D0A0  (warm accent)
  --color-cream:       #FAF7F2  (light bg)
  --color-stone:       #8B7355  (body text/secondary)

Prompt idea:
  "Evaluate and refine this color palette for a Colorado web design brand
  called Red Rock Digital. The brand should evoke the Red Rocks Amphitheatre
  — rust red rock, warm sandstone, deep canyon shadows, Colorado sky.
  Suggest any adjustments for contrast, warmth, or visual hierarchy."

Deliverable: Updated hex values → plug into globals.css


## 4. SERVICES SECTION CARD DESIGN
Goal: More distinctive pricing card styling than the current plain white cards.

Prompt idea:
  "Design a pricing card for a web design service. Three tiers: Basecamp,
  Ascent, Summit. The middle card (Ascent) should be highlighted. Use a
  Colorado/mountain aesthetic with rust red (#C4442B) accents on a dark
  canyon background (#1C1208). Clean, modern, professional."

Deliverable: Visual reference → implement in Services.tsx


## 5. ABOUT SECTION PHOTO TREATMENT
Goal: A styled frame or treatment for the about section headshot photo.

Prompt idea:
  "Design a photo frame treatment for an about section. Colorado brand,
  rust red accent color. Could use angular/geometric crop, rock strata
  border detail, or subtle layered effect. Should feel personal but
  on-brand."

Deliverable: CSS treatment or SVG frame → implement in About.tsx


# ─────────────────────────────────────────────────────────────
# WORKFLOW NOTE
# Do logo (#1) first — everything else (favicon, nav, hero)
# depends on having the final mark locked in.
# Once SVG is back, give to Claude Code for implementation.
# ─────────────────────────────────────────────────────────────
