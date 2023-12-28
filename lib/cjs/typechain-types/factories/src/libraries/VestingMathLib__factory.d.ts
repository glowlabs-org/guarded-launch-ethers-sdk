import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VestingMathLib, VestingMathLibInterface } from "../../../src/libraries/VestingMathLib";
type VestingMathLibConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class VestingMathLib__factory extends ContractFactory {
    constructor(...args: VestingMathLibConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<VestingMathLib>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): VestingMathLib;
    connect(signer: Signer): VestingMathLib__factory;
    static readonly bytecode = "0x60bb610034600b8282823980515f1a60731461002857634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106032575f3560e01c80639b7b152b146036575b5f80fd5b603c604e565b60405190815260200160405180910390f35b605a62093a806064605d565b81565b8082028115828204841417607f57634e487b7160e01b5f52601160045260245ffd5b9291505056fea2646970667358221220ae8c702203f2abe5350a95d098fdbaede0314f20c5237363a6c18762cf4a59ec64736f6c63430008150033";
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): VestingMathLibInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): VestingMathLib;
}
export {};
