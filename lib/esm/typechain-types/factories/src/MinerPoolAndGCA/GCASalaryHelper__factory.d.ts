import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { GCASalaryHelper, GCASalaryHelperInterface } from "../../../src/MinerPoolAndGCA/GCASalaryHelper";
export declare class GCASalaryHelper__factory {
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
    static createInterface(): GCASalaryHelperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GCASalaryHelper;
}
