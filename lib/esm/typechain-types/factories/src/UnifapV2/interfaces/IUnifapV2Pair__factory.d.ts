import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUnifapV2Pair, IUnifapV2PairInterface } from "../../../../src/UnifapV2/interfaces/IUnifapV2Pair";
export declare class IUnifapV2Pair__factory {
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
    static createInterface(): IUnifapV2PairInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUnifapV2Pair;
}
