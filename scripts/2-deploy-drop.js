import {ethers} from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x1D389e7536CE852cEe89495acdd9810004e93cB0");

(async () => {
    try {
      const bundleDropModule = await app.deployBundleDropModule({
        // The collection's name, ex. CryptoPunks
        name: "Manchas DAO pass",
        // A description for the collection.
        description: "A DAO in honor of the best Chihuahua ever",
        // The image for the collection that will show up on OpenSea.
        image: readFileSync("scripts/assets/manchas.jpg"),
        // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
        // if not charging people for the drop, so we'll pass in the 0x0 address
        // set this to your own wallet address if you want to charge for the drop.
        primarySaleRecipientAddress: ethers.constants.AddressZero,
      });

      console.log(
        "✅ Successfully deployed bundleDrop module, address:",
        bundleDropModule.address,
      );
      console.log(
        "✅ bundleDrop metadata:",
        await bundleDropModule.getMetadata(),
      );
    } catch (error) {
      console.log("failed to deploy bundleDrop module", error);
    }
  })()

  //bundledrop address 0xbBbc4e598AD2c96abf7c9Da04A1654a28b0224e0