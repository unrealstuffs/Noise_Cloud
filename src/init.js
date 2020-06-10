import app from "./app";

const handleListening = () =>
    console.log(`✅  Listening on: http://localhost:4000`);

app.listen("4000", handleListening);
