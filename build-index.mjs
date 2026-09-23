import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const dir = dirname(fileURLToPath(import.meta.url));
let html = readFileSync(join(dir, "generated-page(18).html"), "utf8");

const contentReplacements = [
  [
    '<meta name="description" content="MeStudio — the living visual archive of Adam Knoxville.">',
    '<meta name="description" content="After Rain — the living visual archive of a London photo agency.">',
  ],
  ["<title>MeStudio — Adam Knoxville</title>", "<title>After Rain — Photo Agency</title>"],
  ['aria-label="MeStudio home"', 'aria-label="After Rain home"'],
  [">mestudio<", ">after rain<"],
  ["MeStudio archive / London / 2026", "After Rain archive / London / 2026"],
  [
    'aria-label="Adam Knoxville wearing a dark cap"',
    'aria-label="After Rain photographer wearing a dark cap"',
  ],
  [
    `            Maya Chen
            <br>
            Photographer / visual storyteller`,
    `            After Rain
            <br>
            Photo agency / visual storyteller`,
  ],
  [
    "MeStudio is the state I build in— a place for unfinished",
    "After Rain is the state we build in— a place for unfinished",
  ],
  ["MESTUDIO", "AFTER RAIN"],
  ["<span>Maya Chen Archive — 2016–2026</span>", "<span>After Rain Archive — 2016–2026</span>"],
  [
    'alt="Maya Chen and Sarah in Studio 204"',
    'alt="After Rain team and Sarah in Studio 204"',
  ],
  ["Studio 204, London / Sarah &amp; Maya", "Studio 204, London / Sarah &amp; team"],
  [
    "Maya talks about finding light, capturing stillness, and shaping",
    "After Rain talks about finding light, capturing stillness, and shaping",
  ],
  ["<p class=\"mt-4 text-lg\">by Adam Knoxville</p>", "<p class=\"mt-4 text-lg\">by After Rain</p>"],
  [
    'alt="Portrait of Adam Knoxville"',
    'alt="Portrait of After Rain photographer"',
  ],
  [`              I’m Maya Chen`, `              After Rain`],
  ['alt="Adam Knoxville signature"', 'alt="After Rain signature"'],
  ["Contact Maya Chen", "Contact After Rain"],
  ['data-copy="hello@mayachen.photo"', 'data-copy="hello@afterrain.dev"'],
  [">hello@mayachen.photo<", ">hello@afterrain.dev<"],
  ["© 2026 MeStudio by Maya Chen. All images, all rights.", "© 2026 After Rain. All images, all rights."],
];

for (const [from, to] of contentReplacements) {
  html = html.split(from).join(to);
}

html = html.replace(/MeStudio/g, "After Rain");
html = html.replace(/mestudio/g, "after rain");
html = html.replace(/Maya Chen/g, "After Rain");
html = html.replace(/Adam Knoxville/g, "After Rain");
html = html.replace(/mayachen\.photo/g, "afterrain.dev");

writeFileSync(join(dir, "index.html"), html, "utf8");
console.log("Wrote index.html (" + html.length + " bytes)");
