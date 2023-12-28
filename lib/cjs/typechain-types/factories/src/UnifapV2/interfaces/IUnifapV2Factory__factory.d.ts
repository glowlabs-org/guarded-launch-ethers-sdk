import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUnifapV2Factory, IUnifapV2FactoryInterface } from "../../../../src/UnifapV2/interfaces/IUnifapV2Factory";
export declare class IUnifapV2Factory__factory {
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
    static createInterface(): IUnifapV2FactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUnifapV2Factory;
}
