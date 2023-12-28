import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC20Permit, ERC20PermitInterface } from "../../../../../../../lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Permit";
export declare class ERC20Permit__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
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
        anonymous?: undefined;
    })[];
    static createInterface(): ERC20PermitInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20Permit;
}
