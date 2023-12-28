"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UQ112x112__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "Q112",
        outputs: [
            {
                internalType: "uint224",
                name: "",
                type: "uint224",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x6092610033600b8282823980515f1a607314602757634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106032575f3560e01c80633bf7a83e146036575b5f80fd5b6040600160701b81565b6040516001600160e01b03909116815260200160405180910390f3fea2646970667358221220d05d5fa831e679c97b6477c6ed8ce54416b8a6c46de532720c33c8ac0b6d712f64736f6c63430008150033";
const isSuperArgs = (xs) => xs.length > 1;
class UQ112x112__factory extends ethers_1.ContractFactory {
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
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.UQ112x112__factory = UQ112x112__factory;
//# sourceMappingURL=UQ112x112__factory.js.map