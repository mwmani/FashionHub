import fs from 'fs';

export async function writeCSV(data: any[], fileName: string) {
  const headers = Object.keys(data[0]).join(',');
  const rows = data.map(obj => Object.values(obj).join(',')).join('\n');
  fs.writeFileSync(fileName, `${headers}\n${rows}`);
}
