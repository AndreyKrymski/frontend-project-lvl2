import plain from "./plain.js";
import stylish from "./stylish.js";

const formatDifference = (difference, format) => {
  let result;
  if (format === "stylish") {
    result = stylish(difference);
  } else if (format === "plain") {
    result = plain(difference);
  } else {
    result = "Eror file does not contain extension .json .yml .yaml";
  }
  return result;
};

export default formatDifference;
