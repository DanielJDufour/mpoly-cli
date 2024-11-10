const fs = require("fs");
const mpoly = require("mpoly");

const args = Array.from(process.argv);

const filepath = args[args.length - 1];

const geojson = JSON.parse(fs.readFileSync(filepath, "utf-8"));

const geometry = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "MultiPolygon",
    coordinates: mpoly.get(geojson)
  }
};

console.log(JSON.stringify(geometry.geometry));
