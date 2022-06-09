import jsYaml from 'js-yaml';

const parseYaml = (fileContent) => {
  const data = jsYaml.load(fileContent);
  return data;
};

export default parseYaml;
