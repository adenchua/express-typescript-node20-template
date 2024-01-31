import fs from "fs";
import path from "path";
import { JsonObject } from "swagger-ui-express";
import YAML from "yaml";

const getSwaggerDocument = (): JsonObject => {
  const API_DOCUMENTATION_PATH = "../docs/openapi.yaml"; // relative location to this file
  const swaggerYamlFile = fs.readFileSync(path.resolve(__dirname, API_DOCUMENTATION_PATH), "utf8");
  const result: JsonObject = YAML.parse(swaggerYamlFile) as JsonObject;

  return result;
};

export default { getSwaggerDocument };
