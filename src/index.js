import app from "./app.js"
import { sequelize } from "./db/db.js"

async function main() {
    try {
        await sequelize.sync({ force: false})
        app.listen(8000);
        console.log("Server is lintening on port", 8000);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();