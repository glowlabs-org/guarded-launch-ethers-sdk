import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUniswapRouterV2, IUniswapRouterV2Interface } from "../../../src/interfaces/IUniswapRouterV2";
export declare class IUniswapRouterV2__factory {
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
    static createInterface(): IUniswapRouterV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapRouterV2;
}
