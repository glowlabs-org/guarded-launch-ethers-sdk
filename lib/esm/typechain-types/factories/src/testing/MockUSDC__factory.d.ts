import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockUSDC, MockUSDCInterface } from "../../../src/testing/MockUSDC";
type MockUSDCConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockUSDC__factory extends ContractFactory {
    constructor(...args: MockUSDCConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockUSDC>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockUSDC;
    connect(signer: Signer): MockUSDC__factory;
    static readonly bytecode = "0x61016060405234801562000011575f80fd5b50604051806040016040528060048152602001635553444360e01b81525080604051806040016040528060018152602001603160f81b815250604051806040016040528060048152602001635553444360e01b815250604051806040016040528060048152602001635553444360e01b815250816003908162000095919062000287565b506004620000a4828262000287565b50620000b69150839050600562000164565b61012052620000c781600662000164565b61014052815160208084019190912060e052815190820120610100524660a0526200015460e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a08201525f9060c00160405160208183030381529060405280519060200120905090565b60805250503060c05250620003c0565b5f60208351101562000183576200017b836200019c565b905062000196565b8162000190848262000287565b5060ff90505b92915050565b5f80829050601f81511115620001d2578260405163305a27a960e01b8152600401620001c991906200034f565b60405180910390fd5b8051620001df826200039c565b179392505050565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806200021057607f821691505b6020821081036200022f57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111562000282575f81815260208120601f850160051c810160208610156200025d5750805b601f850160051c820191505b818110156200027e5782815560010162000269565b5050505b505050565b81516001600160401b03811115620002a357620002a3620001e7565b620002bb81620002b48454620001fb565b8462000235565b602080601f831160018114620002f1575f8415620002d95750858301515b5f19600386901b1c1916600185901b1785556200027e565b5f85815260208120601f198616915b82811015620003215788860151825594840194600190910190840162000300565b50858210156200033f57878501515f19600388901b60f8161c191681555b5050505050600190811b01905550565b5f6020808352835180828501525f5b818110156200037c578581018301518582016040015282016200035e565b505f604082860101526040601f19601f8301168501019250505092915050565b805160208083015191908110156200022f575f1960209190910360031b1b16919050565b60805160a05160c05160e051610100516101205161014051610fb7620004125f395f6107f001525f6107c301525f61073801525f61071001525f61066b01525f61069501525f6106bf0152610fb75ff3fe608060405234801561000f575f80fd5b50600436106100fb575f3560e01c806370a0823111610093578063a457c2d711610063578063a457c2d714610202578063a9059cbb14610215578063d505accf14610228578063dd62ed3e1461023b575f80fd5b806370a08231146101a45780637ecebe00146101cc57806384b0196e146101df57806395d89b41146101fa575f80fd5b8063313ce567116100ce578063313ce567146101655780633644e51514610174578063395093511461017c57806340c10f191461018f575f80fd5b806306fdde03146100ff578063095ea7b31461011d57806318160ddd1461014057806323b872dd14610152575b5f80fd5b61010761024e565b6040516101149190610d36565b60405180910390f35b61013061012b366004610d6a565b6102de565b6040519015158152602001610114565b6002545b604051908152602001610114565b610130610160366004610d92565b6102f7565b60405160068152602001610114565b61014461031a565b61013061018a366004610d6a565b610328565b6101a261019d366004610d6a565b610349565b005b6101446101b2366004610dcb565b6001600160a01b03165f9081526020819052604090205490565b6101446101da366004610dcb565b610357565b6101e7610374565b6040516101149796959493929190610de4565b6101076103b6565b610130610210366004610d6a565b6103c5565b610130610223366004610d6a565b610420565b6101a2610236366004610e78565b61042d565b610144610249366004610ee5565b610563565b60606003805461025d90610f16565b80601f016020809104026020016040519081016040528092919081815260200182805461028990610f16565b80156102d45780601f106102ab576101008083540402835291602001916102d4565b820191905f5260205f20905b8154815290600101906020018083116102b757829003601f168201915b5050505050905090565b5f336102eb81858561058d565b60019150505b92915050565b5f3361030485828561059f565b61030f858585610602565b506001949350505050565b5f61032361065f565b905090565b5f336102eb81858561033a8383610563565b6103449190610f4e565b61058d565b6103538282610788565b5050565b6001600160a01b0381165f908152600760205260408120546102f1565b5f6060805f805f60606103856107bc565b61038d6107e9565b604080515f80825260208201909252600f60f81b9b939a50919850469750309650945092509050565b60606004805461025d90610f16565b5f33816103d28286610563565b90508381101561041357604051632983c0c360e21b81526001600160a01b038616600482015260248101829052604481018590526064015b60405180910390fd5b61030f828686840361058d565b5f336102eb818585610602565b834211156104515760405163313c898160e11b81526004810185905260240161040a565b5f7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c988888861049c8c6001600160a01b03165f90815260076020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090505f6104f682610816565b90505f61050582878787610842565b9050896001600160a01b0316816001600160a01b03161461054c576040516325c0072360e11b81526001600160a01b0380831660048301528b16602482015260440161040a565b6105578a8a8a61058d565b50505050505050505050565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205490565b61059a838383600161086e565b505050565b5f6105aa8484610563565b90505f1981146105fc57818110156105ee57604051637dc7a0d960e11b81526001600160a01b0384166004820152602481018290526044810183905260640161040a565b6105fc84848484035f61086e565b50505050565b6001600160a01b03831661062b57604051634b637e8f60e11b81525f600482015260240161040a565b6001600160a01b0382166106545760405163ec442f0560e01b81525f600482015260240161040a565b61059a838383610940565b5f306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480156106b757507f000000000000000000000000000000000000000000000000000000000000000046145b156106e157507f000000000000000000000000000000000000000000000000000000000000000090565b610323604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a08201525f9060c00160405160208183030381529060405280519060200120905090565b6001600160a01b0382166107b15760405163ec442f0560e01b81525f600482015260240161040a565b6103535f8383610940565b60606103237f00000000000000000000000000000000000000000000000000000000000000006005610a66565b60606103237f00000000000000000000000000000000000000000000000000000000000000006006610a66565b5f6102f161082261065f565b8360405161190160f01b8152600281019290925260228201526042902090565b5f805f8061085288888888610b0f565b9250925092506108628282610bd7565b50909695505050505050565b6001600160a01b0384166108975760405163e602df0560e01b81525f600482015260240161040a565b6001600160a01b0383166108c057604051634a1406b160e11b81525f600482015260240161040a565b6001600160a01b038085165f90815260016020908152604080832093871683529290522082905580156105fc57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161093291815260200190565b60405180910390a350505050565b6001600160a01b03831661096a578060025f82825461095f9190610f4e565b909155506109da9050565b6001600160a01b0383165f90815260208190526040902054818110156109bc5760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161040a565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b0382166109f657600280548290039055610a14565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610a5991815260200190565b60405180910390a3505050565b606060ff8314610a8057610a7983610c8f565b90506102f1565b818054610a8c90610f16565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab890610f16565b8015610b035780601f10610ada57610100808354040283529160200191610b03565b820191905f5260205f20905b815481529060010190602001808311610ae657829003601f168201915b505050505090506102f1565b5f80807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115610b4857505f91506003905082610bcd565b604080515f808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015610b99573d5f803e3d5ffd5b5050604051601f1901519150506001600160a01b038116610bc457505f925060019150829050610bcd565b92505f91508190505b9450945094915050565b5f826003811115610bea57610bea610f6d565b03610bf3575050565b6001826003811115610c0757610c07610f6d565b03610c255760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610c3957610c39610f6d565b03610c5a5760405163fce698f760e01b81526004810182905260240161040a565b6003826003811115610c6e57610c6e610f6d565b03610353576040516335e2f38360e21b81526004810182905260240161040a565b60605f610c9b83610ccc565b6040805160208082528183019092529192505f91906020820181803683375050509182525060208101929092525090565b5f60ff8216601f8111156102f157604051632cd44ac360e21b815260040160405180910390fd5b5f81518084525f5b81811015610d1757602081850181015186830182015201610cfb565b505f602082860101526020601f19601f83011685010191505092915050565b602081525f610d486020830184610cf3565b9392505050565b80356001600160a01b0381168114610d65575f80fd5b919050565b5f8060408385031215610d7b575f80fd5b610d8483610d4f565b946020939093013593505050565b5f805f60608486031215610da4575f80fd5b610dad84610d4f565b9250610dbb60208501610d4f565b9150604084013590509250925092565b5f60208284031215610ddb575f80fd5b610d4882610d4f565b60ff60f81b881681525f602060e081840152610e0360e084018a610cf3565b8381036040850152610e15818a610cf3565b606085018990526001600160a01b038816608086015260a0850187905284810360c086015285518082528387019250908301905f5b81811015610e6657835183529284019291840191600101610e4a565b50909c9b505050505050505050505050565b5f805f805f805f60e0888a031215610e8e575f80fd5b610e9788610d4f565b9650610ea560208901610d4f565b95506040880135945060608801359350608088013560ff81168114610ec8575f80fd5b9699959850939692959460a0840135945060c09093013592915050565b5f8060408385031215610ef6575f80fd5b610eff83610d4f565b9150610f0d60208401610d4f565b90509250929050565b600181811c90821680610f2a57607f821691505b602082108103610f4857634e487b7160e01b5f52602260045260245ffd5b50919050565b808201808211156102f157634e487b7160e01b5f52601160045260245ffd5b634e487b7160e01b5f52602160045260245ffdfea2646970667358221220776e9a59d998c95e6cad9086bfec6dca144ff43f75872725ee821bbe130ce6ab64736f6c63430008150033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
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
        stateMutability?: undefined;
        outputs?: undefined;
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
    static createInterface(): MockUSDCInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockUSDC;
}
export {};