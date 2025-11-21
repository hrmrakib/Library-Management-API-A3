import app from "./app";
import config from "./app/config";
import { connectDB } from "./app/utils/db";

const port = config.PORT;

async function main() {
  await connectDB();

  const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

main();
