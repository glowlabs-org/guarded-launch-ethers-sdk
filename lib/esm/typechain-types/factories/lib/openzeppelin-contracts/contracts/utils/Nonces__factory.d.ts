import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Nonces, NoncesInterface } from "../../../../../lib/openzeppelin-contracts/contracts/utils/Nonces";
export declare class Nonces__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
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
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): NoncesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Nonces;
}
