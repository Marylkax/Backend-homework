const express = require("express");
const app = express();

//see requests to backend on console
app.use((req, res, next) => {
  console.log("New request made");
  next();
});

app.use(express.json());

app.use("/get", require("./routes/get"));
//currently have 20 characters stored in rickandmort.json

app.use("/delete", require("./routes/delete"));
app.use("/add", require("./routes/add"));
app.use("/update", require("./routes/update"));

const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// if port set use it, using environment
