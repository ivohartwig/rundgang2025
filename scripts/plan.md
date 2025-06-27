1. Create /scripts folder and initialise README
Make sure a top-level `/scripts` directory exists; add a short `README.md` explaining what the screenshot script does and how to run it.  
2. Add Playwright to the project
Run `npm install --save-dev playwright` (Chromium is downloaded automatically).  
Commit the updated `package.json`/`package-lock.json`.  
3. Add “screenshot-projects.mjs” script
Create `/scripts/screenshot-projects.mjs` (ES-module syntax fits the existing `"type":"module"` in package.json).  
Key sections:  

```js
#!/usr/bin/env node
import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'csv-parse/sync';           // add `csv-parse` dev-dependency
```

Parse CLI flags for optional output folder / concurrency.  
4. Read every CSV in /src/data/projects
Use `fs.readdir` to list files ending in `.csv` under `/src/data/projects`.  
For each file, read contents and parse with `csv-parse/sync({ delimiter: '|', columns: true, skip_empty_lines: true })`.  
Fallback to comma delimiter when pipe not found to support current files.  
5. Extract URL and build unique screenshot IDs
From each record pick `project_url` (fall back to `student_repository_url` if missing).  
Build an ID like `${path.basename(csvFile, '.csv')}_${row.github_username || i}` and sanitise to filesystem-safe chars.  
6. Launch Playwright Chromium with denied permissions
```js
const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1024, height: 1024 },
  permissions: []          // start with no granted permissions
});
context.on('page', p => {
  p.on('dialog', d => d.dismiss().catch(()=>{}));
  p.on('request', r => {
     if (['getUserMedia','media'].includes(r.resourceType())) r.abort();
  });
});
```  
Automatically reject camera/microphone permission requests using `page.on('request')` or `page.grantPermissions([])`.  
7. Navigate, wait, and capture 1024×1024 PNG
For each URL:  

```js
const page = await context.newPage();
try {
  await page.goto(url, { timeout: 30000, waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);                // extra settle time
  await page.screenshot({ path, type: 'png' });
  console.log('✅', id);
} catch (err) {
  console.error('❌', id, err.message);
  failed.push({ id, url, err: err.message });
} finally {
  await page.close();
}
```  
8. Organise output directory
Create `/screenshots` at project root.  
Inside, one sub-folder per CSV (e.g. `screenshots/a-generative-graphic-novel-grades-1750141106_clean/`).  
Save files as `<uniqueId>.png`.  
Add `screenshots/` to `.gitignore`.  
9. Log progress and errors
Write a summary JSON (or CSV) of failures to `screenshots/errors-YYYYMMDD.json`.  
Print a live progress bar or simple console counter.  
Exit with non-zero code if any failures.  
10. Add npm script and usage docs
In `package.json` add  

```json
"scripts": {
  "screenshots": "node ./scripts/screenshot-projects.mjs"
}
```  

Update `/scripts/README.md`:  

1. `npm install`  
2. `npm run screenshots` (optionally with env vars).  

Document optional flags for output dir or resume.  