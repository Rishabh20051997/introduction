const path = require('path');

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path:path.resolve(__dirname, "dist"),
  }
}