import fs from 'fs';
import parseJson from './parseJson.js';
import parseYaml from './parseYaml.js';

const parse = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  if (filePath.endsWith('.json')) {
    return parseJson(fileContent);
  }
  if (filePath.endsWith('.yml') || filePath.endsWith('.yaml')) {
    return parseYaml(fileContent);
  } return 'Eror file does not contain extension .json .yml .yaml';
};

export default parse;
