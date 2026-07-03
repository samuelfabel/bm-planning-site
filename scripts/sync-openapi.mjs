import { copyFileSync, existsSync } from 'node:fs';

const LOCAL_SPEC = '../bm-planning/server/internal/api/openapi/openapi.yaml';
const DEST = 'public/openapi.yaml';

if (existsSync(LOCAL_SPEC)) {
  copyFileSync(LOCAL_SPEC, DEST);
  console.log('Synced OpenAPI from ../bm-planning');
} else if (existsSync(DEST)) {
  console.log('Using committed public/openapi.yaml');
} else {
  console.error('Missing OpenAPI spec — clone bm-planning alongside or commit public/openapi.yaml');
  process.exit(1);
}
