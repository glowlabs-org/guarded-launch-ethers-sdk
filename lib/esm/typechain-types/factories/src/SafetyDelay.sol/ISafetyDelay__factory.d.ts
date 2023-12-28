import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISafetyDelay, ISafetyDelayInterface } from "../../../src/SafetyDelay.sol/ISafetyDelay";
export declare class ISafetyDelay__factory {
    static readonly abi: ({
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): ISafetyDelayInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISafetyDelay;
}
