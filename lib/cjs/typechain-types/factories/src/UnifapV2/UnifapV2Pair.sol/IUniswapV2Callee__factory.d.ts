import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUniswapV2Callee, IUniswapV2CalleeInterface } from "../../../../src/UnifapV2/UnifapV2Pair.sol/IUniswapV2Callee";
export declare class IUniswapV2Callee__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IUniswapV2CalleeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV2Callee;
}
