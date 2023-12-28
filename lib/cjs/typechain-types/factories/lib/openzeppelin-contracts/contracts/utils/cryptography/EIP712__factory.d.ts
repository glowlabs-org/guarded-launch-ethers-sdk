import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { EIP712, EIP712Interface } from "../../../../../../lib/openzeppelin-contracts/contracts/utils/cryptography/EIP712";
export declare class EIP712__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        anonymous: boolean;
        inputs: never[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): EIP712Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): EIP712;
}
