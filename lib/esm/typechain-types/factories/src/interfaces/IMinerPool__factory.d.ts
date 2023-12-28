import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMinerPool, IMinerPoolInterface } from "../../../src/interfaces/IMinerPool";
export declare class IMinerPool__factory {
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
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): IMinerPoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMinerPool;
}
