import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDecimals, IDecimalsInterface } from "../../../src/EarlyLiquidity.sol/IDecimals";
export declare class IDecimals__factory {
    static readonly abi: ({
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
    })[];
    static createInterface(): IDecimalsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDecimals;
}
