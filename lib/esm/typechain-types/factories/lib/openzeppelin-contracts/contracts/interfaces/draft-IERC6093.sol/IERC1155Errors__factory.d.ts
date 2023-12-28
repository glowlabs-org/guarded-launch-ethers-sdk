import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC1155Errors, IERC1155ErrorsInterface } from "../../../../../../lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol/IERC1155Errors";
export declare class IERC1155Errors__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): IERC1155ErrorsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC1155Errors;
}
