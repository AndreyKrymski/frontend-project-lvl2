import fs from 'fs';

const jsonParser = (filePath) => {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  return data;
};
export default jsonParser;
