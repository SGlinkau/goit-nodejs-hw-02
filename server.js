const app = require("./app");

app.listen(3000, () => {
  console.log(
    "Server running. To access api and list of contacts visit ► http://localhost:3000/api/contacts"
  );
});
