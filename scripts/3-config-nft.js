import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xbBbc4e598AD2c96abf7c9Da04A1654a28b0224e0",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Sol Medallion",
        description: "This Medallion gives you access to the ManchasDAO",
        image: readFileSync("scripts/assets/sol.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()