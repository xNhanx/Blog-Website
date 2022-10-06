module.exports = function truncate(string, maxLength = 100, ending = "...") {
  if (!string || typeof string !== "string") return "";

  if (string <= maxLength) return string;

  return string.substring(0, maxLength - ending.length) + ending;
};
