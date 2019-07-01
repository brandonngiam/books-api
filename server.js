const app = require("./app");
const { sequelize } = require("./models");
const createBooksAndAuthors = require("./seed");

const port = process.env.PORT || 5555;

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(() => {
  //call some seed function
  if (eraseDatabaseOnSync) createBooksAndAuthors();

  app.listen(port, () => {
    if (process.env.NODE_ENV === "production") {
      console.log(`Server is running on Heroku with port number ${port}`);
    } else {
      console.log(`Server is running on http://localhost:${port}`);
    }
  });
});
