const app = require("./app/app");

app.listen(app.get("port"), function () {
       console.log("Server starting successfully in port " + app.get("port"));
       console.log("http://localhost:" + app.get("port"));
});
