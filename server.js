import corsAnywhere from "cors-anywhere";

const host = "localhost";
const port = 8080;

// Tworzymy serwer proxy CORS
corsAnywhere
  .createServer({
    originWhitelist: [], // Akceptuje wszystkie źródła
  })
  .listen(port, host, () => {
    console.log(`CORS Anywhere server running at http://${host}:${port}`);
  });
