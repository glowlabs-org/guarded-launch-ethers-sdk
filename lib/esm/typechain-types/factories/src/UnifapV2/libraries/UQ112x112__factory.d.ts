import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UQ112x112, UQ112x112Interface } from "../../../../src/UnifapV2/libraries/UQ112x112";
type UQ112x112ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UQ112x112__factory extends ContractFactory {
    constructor(...args: UQ112x112ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<UQ112x112>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): UQ112x112;
    connect(signer: Signer): UQ112x112__factory;
    static readonly bytecode = "0x6092610033600b8282823980515f1a607314602757634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106032575f3560e01c80633bf7a83e146036575b5f80fd5b6040600160701b81565b6040516001600160e01b03909116815260200160405180910390f3fea2646970667358221220d05d5fa831e679c97b6477c6ed8ce54416b8a6c46de532720c33c8ac0b6d712f64736f6c63430008150033";
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
    static createInterface(): UQ112x112Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): UQ112x112;
}
export {};
