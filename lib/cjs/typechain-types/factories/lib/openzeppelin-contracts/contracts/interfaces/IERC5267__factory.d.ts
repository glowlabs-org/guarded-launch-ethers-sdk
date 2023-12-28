import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC5267, IERC5267Interface } from "../../../../../lib/openzeppelin-contracts/contracts/interfaces/IERC5267";
export declare class IERC5267__factory {
    static readonly abi: ({
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
    static createInterface(): IERC5267Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC5267;
}
