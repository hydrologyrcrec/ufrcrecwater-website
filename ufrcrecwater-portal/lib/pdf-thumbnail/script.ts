import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publications: string[] = [
  "dc1179b7-ae0e-4c6b-bb1c-8a4fb60a09b1",
  "d26b6172-b521-45ac-9a19-0d5d810c3dd1",
  "e9cb4d91-405f-4704-afdd-ddf1e80051b4",
  "c2564de1-2794-41a5-a706-4ec6015e0437",
  "95183e68-e4a9-452f-91ea-c717ff4fcc19",
  "bffcf024-4ae7-4e63-8c4e-735220b6f31a",
  "8b25d626-1734-47f1-8bc6-c368bc7feddc",
  "8525cf0b-c383-4eef-a6ef-0d58d71027d8",
  "60329ba3-06ff-4ae6-bb9f-516faeb9a02b",
  "40275dcb-7730-4d7a-9dc7-8d35b40c2452",
  "32959258-f193-4260-b544-9cbb26dca2d1",
  "1a8bf131-6cdd-42bb-863c-034fc26987eb",
  "18fd933a-c7b9-4a68-8a00-cb1f87e8233c",
  "cda7a1d9-91f1-4058-bda3-b02d7bdea0c1"
];

const PDF_DIR = '/Users/akhilreddy/Downloads/Publications';
const OUTPUT_DIR = path.join(__dirname, 'thumbnails');

async function ensureOutputDir() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
}

async function convertPdfToThumbnail(pdfId: string): Promise<void> {
  const pdfPath = path.join(PDF_DIR, `${pdfId}.pdf`);
  const outputPath = path.join(OUTPUT_DIR, `${pdfId}.jpg`);
  
  try {
    // Use macOS's built-in sips command - no dependencies needed
    // Convert first page to JPG at 800px width
    const command = `sips -s format jpeg -Z 800 "${pdfPath}" --out "${outputPath}"`;
    
    await execAsync(command);
    
    const stats = await fs.stat(outputPath);
    console.log(`✓ ${pdfId}: Generated (${Math.round(stats.size / 1024)}KB)`);
    
  } catch (err) {
    console.error(`✗ ${pdfId}: Failed -`, err);
  }
}

async function generateAllThumbnails() {
  console.log(`Starting thumbnail generation for ${publications.length} PDFs...\n`);
  
  await ensureOutputDir();
  
  // Process sequentially to avoid overwhelming the system
  for (const id of publications) {
    await convertPdfToThumbnail(id);
  }
  
  console.log(`\n✓ Done! Thumbnails saved to: ${OUTPUT_DIR}`);
}

generateAllThumbnails();