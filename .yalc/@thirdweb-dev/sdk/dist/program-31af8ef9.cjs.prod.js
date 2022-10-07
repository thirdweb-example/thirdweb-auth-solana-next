'use strict';

var defineProperty = require('./defineProperty-b8983092.cjs.prod.js');
var js = require('@metaplex-foundation/js');
var anchor = require('@project-serum/anchor');
var web3_js = require('@solana/web3.js');
require('bn.js');
require('ethers');
require('zod');

/**
 * Dynamic interface for interacting with Solana programs.
 *
 * @example
 * ```jsx
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
 *
 * const sdk = ThirdwebSDK.fromNetwork("devnet");
 * sdk.wallet.connect(signer);
 *
 * // Get the interface for your program
 * const program = await sdk.getProgram("{{contract_address}}");
 * ```
 *
 * @public
 */

class Program {
  constructor(programAddress, idl, connection, wallet) {
    defineProperty._defineProperty(this, "program", void 0);

    defineProperty._defineProperty(this, "publicKey", void 0);

    defineProperty._defineProperty(this, "accountType", "program");

    defineProperty._defineProperty(this, "network", void 0);

    this.publicKey = new web3_js.PublicKey(programAddress);
    this.network = js.resolveClusterFromConnection(connection);
    anchor.setProvider(new anchor.AnchorProvider(connection, wallet.getSigner(), {}));
    this.program = new anchor.Program(idl, programAddress);
    wallet.events.on("connected", () => {
      anchor.setProvider(new anchor.AnchorProvider(connection, wallet.getSigner(), {}));
    });
    wallet.events.on("disconnected", () => {
      // identity will be guest in this case
      anchor.setProvider(new anchor.AnchorProvider(connection, wallet.getSigner(), {}));
    });
  }
  /**
   * Call a function on this program
   * @param functionName - Name of the function to call
   * @param args - Arguments to pass to the function including accounts, data, and signers
   * @returns result of the contract call
   *
   * @example
   * ```jsx
   * const counterAccount = Keypair.generate();
   * await program.call("increment", {
   *   // We need to pass in the public keys of any accounts to interact with
   *   accounts: {
   *     counterAccount: counterAccount.publicKey.toBase58(),
   *   },
   *   // As well as the arguments to pass to the data parameters
   *   data: ["..."],
   *   // And the signer of the account that will be signing the message
   *   signers: [counterAccount]
   * })
   * ```
   */


  async call(functionName, args) {
    const fn = this.program.methods[functionName];

    if (!fn) {
      throw new Error(`Function ${functionName} not found`);
    }

    const fnWithArgs = args.data ? fn(...args.data) : fn();
    return await fnWithArgs.accounts(args.accounts).signers(args.signers || []).rpc();
  }
  /**
   * Read account data associated with this program
   * @param accountName - The name of the account type to fetch the data of
   * @param address - The address of the specific account to fetch
   * @returns - The data of the requested account
   *
   * @example
   * ```jsx
   * const accountAddress = "...";
   * // Get the counterAccount at specified address
   * const counterAccount = await program.fetch("counterAccount", accountaddress);
   * ```
   */


  async fetch(accountName, address) {
    const account = this.program.account[accountName];

    if (!account) {
      throw new Error(`Account ${account} not found`);
    }

    return await account.fetch(address);
  }

}

exports.Program = Program;
