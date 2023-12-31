/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { utils, Contract, ContractFactory } from "ethers";
const _abi = [
    {
        inputs: [],
        name: "MaxPriceGreaterThanNextPrice",
        type: "error",
    },
    {
        inputs: [],
        name: "NextNotInList",
        type: "error",
    },
    {
        inputs: [],
        name: "PrevNotInList",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "receiveGCC",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x6080604052348015600e575f80fd5b5060868061001b5f395ff3fe6080604052348015600e575f80fd5b50600436106026575f3560e01c80632d8d08de14602a575b5f80fd5b60386035366004603a565b50565b005b5f602082840312156049575f80fd5b503591905056fea2646970667358221220a559b0f2c467b660f74f8179dfa2e8a1bab336c61a472662765a30b9a53a8c0364736f6c63430008150033";
const isSuperArgs = (xs) => xs.length > 1;
export class CarbonCreditAuction__factory extends ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static bytecode = _bytecode;
    static abi = _abi;
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
//# sourceMappingURL=CarbonCreditAuction__factory.js.map