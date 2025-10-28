const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("/*splat", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});
const PORT = process.env.PORT || 10000;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));
