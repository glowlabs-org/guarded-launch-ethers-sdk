import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC721Errors, IERC721ErrorsInterface } from "../../../../../../lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol/IERC721Errors";
export declare class IERC721Errors__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): IERC721ErrorsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC721Errors;
}
