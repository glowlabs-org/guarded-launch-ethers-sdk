import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC20, IERC20Interface } from "../../../../src/UnifapV2/interfaces/IERC20";
export declare class IERC20__factory {
    static readonly abi: {
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
    }[];
    static createInterface(): IERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC20;
}
