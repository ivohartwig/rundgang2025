import fs from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import { parseArgs } from 'node:util';

const { positionals } = parseArgs({
	allowPositionals: true,
	options: {},
});

if (!positionals[0]) {
	console.error('Usage: node add-uuid.js <csv-file>');
	process.exit(1);
}

const filePath = path.resolve(positionals[0]);
if (!fs.existsSync(filePath)) {
	console.error(`File not found: ${filePath}`);
	process.exit(1);
}

const lines = fs.readFileSync(filePath, 'utf-8').split('\n');
if (lines.length < 2) process.exit(0);
const header = lines[0].split(',');
const idIdx = header.findIndex((h) => h.replace(/"/g, '') === 'id');
if (idIdx === -1) {
	console.error('No id column found.');
	process.exit(1);
}

let changed = false;
const newLines = [lines[0]];
for (let i = 1; i < lines.length; ++i) {
	if (!lines[i].trim()) continue;
	const cols = lines[i].split(',');
	if (cols.length !== header.length) {
		console.warn(`Malformed row at line ${i + 1}:`, lines[i]);
		continue;
	}
	if (!cols[idIdx] || cols[idIdx].replace(/"/g, '').trim() === '') {
		cols[idIdx] = `"${randomUUID()}"`;
		changed = true;
	}
	newLines.push(cols.join(','));
}
if (changed) {
	fs.writeFileSync(filePath, newLines.join('\n'));
	console.log(`Updated: ${filePath}`);
} else {
	console.log('No changes made.');
}
