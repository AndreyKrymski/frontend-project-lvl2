const func2 = (massiv) => {
  massiv.sort((a, b) => {
    if (a.slice(3) < b.slice(3)) {
      return -1;
    }
    if (a.slice(3) > b.slice(3)) {
      return 1;
    } return 0;
  });
  return `{\n${massiv.join('\n')}\n}`;
};
export default func2;
