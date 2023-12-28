import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC20Errors, IERC20ErrorsInterface } from "../../../../../../lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol/IERC20Errors";
export declare class IERC20Errors__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): IERC20ErrorsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC20Errors;
}
