/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { utils, Contract, ContractFactory } from "ethers";
const _abi = [
    {
        inputs: [],
        name: "CannotSetNonceToZero",
        type: "error",
    },
    {
        inputs: [],
        name: "HashMismatch",
        type: "error",
    },
    {
        inputs: [],
        name: "HashesNotUpdated",
        type: "error",
    },
    {
        inputs: [],
        name: "MaxSevenVetoCouncilMembers",
        type: "error",
    },
    {
        inputs: [],
        name: "MemberNotFound",
        type: "error",
    },
    {
        inputs: [],
        name: "ShiftHasNotStarted",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "member",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "PayoutClaimed",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "amountAlreadyWithdrawnFromPaymentNonce",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "member",
                type: "address",
            },
        ],
        name: "memberStatus",
        outputs: [
            {
                components: [
                    {
                        internalType: "bool",
                        name: "isActive",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "isSlashed",
                        type: "bool",
                    },
                    {
                        internalType: "uint8",
                        name: "indexInArray",
                        type: "uint8",
                    },
                ],
                internalType: "struct Status",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "paymentNonce",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
            },
        ],
        name: "paymentNonceToShiftStartTimestamp",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "paymentNonceTomembersHash",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "member",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "members",
                type: "address[]",
            },
        ],
        name: "payoutData",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "vetoCouncilMembers",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405260015f55348015610013575f80fd5b506108ca806100215f395ff3fe608060405234801561000f575f80fd5b506004361061007a575f3560e01c8063ce32a66711610058578063ce32a66714610162578063d01793521461018a578063fbeec81f146101b4578063fded2995146101bc575f80fd5b806363e4a0b01461007e57806364afef301461009c578063b05da28514610135575b5f80fd5b6100866101db565b6040516100939190610617565b60405180910390f35b61010c6100aa36600461067e565b60408051606080820183525f80835260208084018290529284018190526001600160a01b039490941684526001825292829020825193840183525460ff8082161515855261010082048116151592850192909252620100009004169082015290565b604080518251151581526020808401511515908201529181015160ff1690820152606001610093565b61015461014336600461069e565b60096020525f908152604090205481565b604051908152602001610093565b6101756101703660046106c9565b610224565b60408051928352602083019190915201610093565b6101546101983660046107a4565b600b60209081525f928352604080842090915290825290205481565b6101545f5481565b6101546101ca36600461069e565b5f908152600a602052604090205490565b6040805160e081019182905260609161021f919060029060079082845b81546001600160a01b031681526001909101906020018083116101f857505050505061023e565b905090565b5f806102318585856102fc565b915091505b935093915050565b60408051600780825261010082019092526060915f91906020820160e0803683370190505090505f805b60078110156102f357610297858260078110610286576102866107cc565b60200201516001600160a01b031490565b6102eb578481600781106102ad576102ad6107cc565b60200201518383815181106102c4576102c46107cc565b60200260200101906001600160a01b031690816001600160a01b0316815250508160010191505b600101610268565b50815292915050565b6001600160a01b0383165f908152600160205260408120548190610100900460ff161561032d57505f905080610236565b5f805f8061033c898989610364565b93509350935093505f80610352868686866104d4565b909c909b509950505050505050505050565b5f805f8060095f8781526020019081526020015f20548560405160200161038b91906107e0565b60405160208183030381529060405280519060200120146103b6576103b6633f4d605360e01b61060f565b5f805b865181101561040557886001600160a01b03168782815181106103de576103de6107cc565b60200260200101516001600160a01b0316036103fd5760019150610405565b6001016103b9565b508061041b5761041b631fdd7d6360e01b61060f565b5084515f9061043762093a8069010f0cf064dd59200000610832565b6104419190610832565b5f888152600a60208190526040822054929350816104608b6001610851565b81526020019081526020015f20549050805f1461049457610481814261086a565b945061048d828261086a565b95506104a1565b61049e824261086a565b95505b50506001600160a01b0388165f908152600b602090815260408083208a8452909152902054909450905093509350935093565b5f80806104e562093a80606461087d565b6104ef8688610851565b111561051a5761050362093a80606461087d565b61050d8688610851565b610517919061086a565b90505b858111156105255750845b5f610530828961087d565b90505f61053d838961086a565b90505f61054e62093a80606461087d565b8a61055a8a6001610851565b610564919061087d565b61056e9190610832565b90505f61057f62093a80606461087d565b8b61058a8b8d610851565b610594919061087d565b61059e9190610832565b90508a8111156105ab5750895b5f60026105b88385610851565b6105c2908661087d565b6105cc9190610832565b90505f6105d98d8d61087d565b90506105e58287610851565b98506105f1898261086a565b97506105fd8a8a61086a565b98505050505050505094509492505050565b805f5260045ffd5b602080825282518282018190525f9190848201906040850190845b818110156106575783516001600160a01b031683529284019291840191600101610632565b50909695505050505050565b80356001600160a01b0381168114610679575f80fd5b919050565b5f6020828403121561068e575f80fd5b61069782610663565b9392505050565b5f602082840312156106ae575f80fd5b5035919050565b634e487b7160e01b5f52604160045260245ffd5b5f805f606084860312156106db575f80fd5b6106e484610663565b92506020808501359250604085013567ffffffffffffffff80821115610708575f80fd5b818701915087601f83011261071b575f80fd5b81358181111561072d5761072d6106b5565b8060051b604051601f19603f83011681018181108582111715610752576107526106b5565b60405291825284820192508381018501918a83111561076f575f80fd5b938501935b828510156107945761078585610663565b84529385019392850192610774565b8096505050505050509250925092565b5f80604083850312156107b5575f80fd5b6107be83610663565b946020939093013593505050565b634e487b7160e01b5f52603260045260245ffd5b81515f9082906020808601845b838110156108125781516001600160a01b0316855293820193908201906001016107ed565b50929695505050505050565b634e487b7160e01b5f52601160045260245ffd5b5f8261084c57634e487b7160e01b5f52601260045260245ffd5b500490565b808201808211156108645761086461081e565b92915050565b818103818111156108645761086461081e565b80820281158282048414176108645761086461081e56fea26469706673582212203f3f760ee0dfac06f81f5d6134ea8e731bb1040c0e856cd23478aae4f3ed6cd064736f6c63430008150033";
const isSuperArgs = (xs) => xs.length > 1;
export class VetoCouncilSalaryHelper__factory extends ContractFactory {
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
//# sourceMappingURL=VetoCouncilSalaryHelper__factory.js.map