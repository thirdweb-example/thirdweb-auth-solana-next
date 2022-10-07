'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdk = require('../../../dist/sdk-c920a901.cjs.dev.js');
var web3_js = require('@solana/web3.js');
var fs = require('fs');
var os = require('os');
var path = require('path');
var yaml = require('yaml');
var storage = require('@thirdweb-dev/storage');
require('../../../dist/defineProperty-a2d146a9.cjs.dev.js');
require('bn.js');
require('ethers');
require('zod');
require('@metaplex-foundation/js');
require('@metaplex-foundation/mpl-token-metadata');
require('@project-serum/anchor');
require('buffer/');
require('bs58');
require('eventemitter3');
require('tiny-invariant');
require('tweetnacl');
require('uuid');
require('@solana/spl-token');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefault(fs);
var os__default = /*#__PURE__*/_interopDefault(os);
var path__default = /*#__PURE__*/_interopDefault(path);
var yaml__default = /*#__PURE__*/_interopDefault(yaml);

/**
 * @internal
 */

function getConfig() {
  // Path to Solana CLI config file
  const CONFIG_FILE_PATH = path__default["default"].resolve(os__default["default"].homedir(), ".config", "solana", "cli", "config.yml");
  const configYml = fs__default["default"].readFileSync(CONFIG_FILE_PATH, {
    encoding: "utf8"
  });
  return yaml__default["default"].parse(configYml);
}
/**
 * Load and parse the Solana CLI config file to determine which payer to use
 */

function getPayer() {
  try {
    const config = getConfig();

    if (!config.keypair_path) {
      throw new Error("Missing keypair path");
    }

    return createKeypairFromFile(config.keypair_path);
  } catch (err) {
    console.warn("Failed to create keypair from CLI config file, falling back to new random keypair");
    return web3_js.Keypair.generate();
  }
}
/**
 * Create a Keypair from a secret key stored in file as bytes' array
 */

function createKeypairFromFile(filePath) {
  const secretKeyString = fs__default["default"].readFileSync(filePath, {
    encoding: "utf8"
  });
  const secretKey = Uint8Array.from(JSON.parse(secretKeyString));
  return web3_js.Keypair.fromSecretKey(secretKey);
}

/**
 * Create an SDK instance using the local configuration generated by the Solana CLI
 *
 * @example
 * ```jsx
 * import { createThirdwebSDK } from "@thirdweb-dev/sdk/solana";
 *
 * // Select the network to create the SDK on
 * const sdk = createThirdwebSDK("devnet");
 * ```
 *
 * @public
 */

function createThirdwebSDK(network) {
  let storage$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new storage.ThirdwebStorage();
  const payer = getPayer();
  const signer = {
    publicKey: payer.publicKey,
    secretKey: payer.secretKey
  };
  const sdk$1 = sdk.ThirdwebSDK.fromNetwork(network, storage$1);
  sdk$1.wallet.connect(signer);
  return sdk$1;
}

exports.createThirdwebSDK = createThirdwebSDK;