import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CarbonCreditAuction, CarbonCreditAuctionInterface } from "../../src/CarbonCreditAuction";
type CarbonCreditAuctionConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CarbonCreditAuction__factory extends ContractFactory {
    constructor(...args: CarbonCreditAuctionConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CarbonCreditAuction>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CarbonCreditAuction;
    connect(signer: Signer): CarbonCreditAuction__factory;
    static readonly bytecode = "0x6080604052348015600e575f80fd5b5060868061001b5f395ff3fe6080604052348015600e575f80fd5b50600436106026575f3560e01c80632d8d08de14602a575b5f80fd5b60386035366004603a565b50565b005b5f602082840312156049575f80fd5b503591905056fea2646970667358221220a559b0f2c467b660f74f8179dfa2e8a1bab336c61a472662765a30b9a53a8c0364736f6c63430008150033";
    static readonly abi: ({
        inputs: never[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): CarbonCreditAuctionInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CarbonCreditAuction;
}
export {};
