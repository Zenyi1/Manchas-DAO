import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x1D389e7536CE852cEe89495acdd9810004e93cB0");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      name: "MANCHASCASH",
      symbol: "SMOLDOG",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();