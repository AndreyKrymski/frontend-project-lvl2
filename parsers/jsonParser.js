import fs from 'fs';
import jsYaml from 'js-yaml';

const jsonParser = (filePath) => {
  if (filePath.endsWith('.json')) {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    return data;
  }
  if (filePath.endsWith('.yml') || filePath.endsWith('.yaml')) {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = jsYaml.load(fileContents);
    return data;
  }
  return 'Eror file does not contain extension .json .yml .yaml';
};
export default jsonParser;
