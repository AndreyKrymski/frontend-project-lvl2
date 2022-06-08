import plain from "./plain.js";
import stylish from "./stylish.js";

const format = (difference, type) => {
  let result;
  if (type === "stylish") {
    result = stylish(difference);
  } else if (type === "plain") {
    result = plain(difference);
  } else {
    result = "Eror file does not contain extension .json .yml .yaml";
  }
  return result;
};

export default format;
