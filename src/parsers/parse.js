import fs from 'fs';
import parseJson from './parseJson.js';
import parseYaml from './parseYaml.js';

const parse = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  let result;
  if (filePath.endsWith('.json')) {
    result = parseJson(fileContent);
  } else if (filePath.endsWith('.yml') || filePath.endsWith('.yaml')) {
    result = parseYaml(fileContent);
  } else {
    result = 'Eror file does not contain extension .json .yml .yaml';
  }
  return result;
};

export default parse;
