"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockSalaryHelper__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_startingAgents",
                type: "address[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "CannotSetNonceToZero",
        type: "error",
    },
    {
        inputs: [],
        name: "HashesNotUpdated",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidGCAHash",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidRelaySignature",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidShares",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidUserIndex",
        type: "error",
    },
    {
        inputs: [],
        name: "SlashedAgentCannotClaimReward",
        type: "error",
    },
    {
        inputs: [],
        name: "CLAIM_PAYOUT_RELAY_PERMIT_TYPEHASH",
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
        inputs: [],
        name: "REWARDS_PER_SECOND_FOR_ALL",
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
        inputs: [],
        name: "SHARES_REQUIRED_PER_COMP_PLAN",
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
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "amountWithdrawnAtPaymentNonce",
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
        inputs: [],
        name: "claimGlowFromInflation",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "paymentNonce",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "activeGCAsAtPaymentNonce",
                type: "address[]",
            },
            {
                internalType: "uint256",
                name: "userIndex",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "claimFromInflation",
                type: "bool",
            },
            {
                internalType: "bytes",
                name: "sig",
                type: "bytes",
            },
        ],
        name: "claimPayout",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "relayer",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "paymentNonce",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "relayNonce",
                type: "uint256",
            },
        ],
        name: "createRelayDigest",
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
        inputs: [],
        name: "domainSeperatorV4Main",
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
        inputs: [],
        name: "genesisTimestampWithin",
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
                name: "user",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "paymentNonce",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "activeGCAsAtPaymentNonce",
                type: "address[]",
            },
            {
                internalType: "uint256",
                name: "userIndex",
                type: "uint256",
            },
        ],
        name: "getPayoutData",
        outputs: [
            {
                internalType: "uint256",
                name: "withdrawableAmount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "slashableAmount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountAlreadyWithdrawn",
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
                name: "",
                type: "address",
            },
        ],
        name: "isSlashed",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "nextRelayNonce",
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
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "paymentNonceToCompensationPlan",
        outputs: [
            {
                internalType: "uint32[5]",
                name: "",
                type: "uint32[5]",
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
                name: "nonce",
                type: "uint256",
            },
        ],
        name: "payoutNonceToGCAHash",
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
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferGlow",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801562000010575f80fd5b50604051620012b4380380620012b4833981016040819052620000339162000234565b8051819015620000ee578060405160200162000050919062000301565b60408051601f1981840301815291905280516020918201205f80805260059092527f05b8ccbb9d4d8fb16ea74ce3c29a41f1b461fbdaff4714a0d9a8eb05499746bc555b8151811015620000ec57620000a981620000f6565b5f8281527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb4960205260409020620000e29160056200012e565b5060010162000094565b505b505062000355565b62000100620001d0565b620186a081836005811062000119576200011962000341565b63ffffffff9092166020929092020152919050565b600183019183908215620001be579160200282015f5b838211156200018a57835183826101000a81548163ffffffff021916908363ffffffff160217905550926020019260040160208160030104928301926001030262000144565b8015620001bc5782816101000a81549063ffffffff02191690556004016020816003010492830192600103026200018a565b505b50620001cc929150620001ee565b5090565b6040518060a001604052806005906020820280368337509192915050565b5b80821115620001cc575f8155600101620001ef565b634e487b7160e01b5f52604160045260245ffd5b80516001600160a01b03811681146200022f575f80fd5b919050565b5f602080838503121562000246575f80fd5b82516001600160401b03808211156200025d575f80fd5b818501915085601f83011262000271575f80fd5b81518181111562000286576200028662000204565b8060051b604051601f19603f83011681018181108582111715620002ae57620002ae62000204565b604052918252848201925083810185019188831115620002cc575f80fd5b938501935b82851015620002f557620002e58562000218565b84529385019392850192620002d1565b98975050505050505050565b81515f9082906020808601845b83811015620003355781516001600160a01b0316855293820193908201906001016200030e565b50929695505050505050565b634e487b7160e01b5f52603260045260245ffd5b610f5180620003635f395ff3fe608060405234801561000f575f80fd5b5060043610610106575f3560e01c80634b359fc81161009e578063b799036c1161006e578063b799036c14610222578063e88a522714610254578063fbeec81f14610267578063fc43c2441461026e578063fded299514610298575f80fd5b80634b359fc8146101e057806369ec95e9146101f3578063940ea8f714610212578063a6ab5a541461021a575f80fd5b80632f6885b2116100d95780632f6885b214610186578063387bdeb6146101a65780633c3d9cb7146101b95780634456f229146101c1575f80fd5b806302e9660f1461010a57806316727a201461012757806320756d53146101555780632a0c7d181461015f575b5f80fd5b610114620186a081565b6040519081526020015b60405180910390f35b61013a610135366004610b42565b6102b7565b6040805193845260208401929092529082015260600161011e565b61015d6104a8565b005b6101147f5c1edfbd8d37c567a5ff069ded6de286a7c1eb363cb354e0177a53c24fab88e981565b610199610194366004610b9f565b6104b1565b60405161011e9190610bbf565b61015d6101b4366004610bf5565b610530565b61011461053b565b6101146101cf366004610c1d565b60066020525f908152604090205481565b61015d6101ee366004610c4a565b610549565b610114610201366004610d58565b5f9081526005602052604090205490565b610114610642565b61011461064a565b610244610230366004610c1d565b60046020525f908152604090205460ff1681565b604051901515815260200161011e565b610114610262366004610d6f565b610664565b5f54610114565b61011461027c366004610bf5565b600360209081525f928352604080842090915290825290205481565b6101146102a6366004610d58565b5f9081526002602052604090205490565b5f805f60055f8881526020019081526020015f205486866040516020016102df929190610d9f565b604051602081830303815290604052805190602001201461030a5761030a63188d7f4f60e01b610718565b85858581811061031c5761031c610dde565b90506020020160208101906103319190610c1d565b6001600160a01b0316886001600160a01b031614610359576103596340630df760e11b610718565b5f85815b818110156103b8575f8a81526001602090815260408083208484529091529020876005811061038e5761038e610dde565b60088104919091015460079091166004026101000a900463ffffffff16929092019160010161035d565b506001600160a01b038a165f9081526003602090815260408083208c8452825280832054600292839052908320549095509190816103f78d6001610e06565b81526020019081526020015f20549050805f03610415575042610422565b61041f8142610720565b90505b5f61042d8383610e19565b90505f82421115610445576104428342610e19565b90505b5f610453620186a087610e2c565b90505f8161046e62093a8069021e19e0c9bab2400000610e43565b610478908a610e2c565b6104829190610e43565b90506104908185858c610737565b909b5099505050505050505050955095509592505050565b6104af5f80fd5b565b6104b9610ac1565b5f838152600160209081526040808320858452909152808220815160a08101928390529290916005918390855b82829054906101000a900463ffffffff1663ffffffff16815260200190600401906020826003010492830192600103820291508084116104e6579050505050505090505b92915050565b6105375f80fd5b5050565b5f61054461053b565b905090565b6001600160a01b0387165f9081526004602052604090205460ff16156105795761057963e30d913760e01b610718565b336001600160a01b038816146105e0576001600160a01b0387165f90815260066020526040812080546105bd9133918a91856105b483610e62565b91905055610664565b90506105ca888284610872565b6105de576105de630db8ee1160e41b610718565b505b81156105ed576105ed5f80fd5b5f806105fc89898989896102b7565b9250509150818161060d9190610e06565b6001600160a01b038a165f9081526003602090815260408083208c84529091529020556106375f80fd5b505050505050505050565b5f6105445f80fd5b61066162093a8069021e19e0c9bab2400000610e43565b81565b5f8061066e6108d1565b604080517f5c1edfbd8d37c567a5ff069ded6de286a7c1eb363cb354e0177a53c24fab88e960208201526001600160a01b03881691810191909152606081018690526080810185905260a001604051602081830303815290604052805190602001206040516020016106f792919061190160f01b81526002810192909252602282015260420190565b60408051808303601f19018152919052805160209091012095945050505050565b805f5260045ffd5b5f81831061072e5781610730565b825b9392505050565b5f808061074862093a806064610e2c565b6107528688610e06565b111561077d5761076662093a806064610e2c565b6107708688610e06565b61077a9190610e19565b90505b858111156107885750845b5f6107938289610e2c565b90505f6107a08389610e19565b90505f6107b162093a806064610e2c565b8a6107bd8a6001610e06565b6107c79190610e2c565b6107d19190610e43565b90505f6107e262093a806064610e2c565b8b6107ed8b8d610e06565b6107f79190610e2c565b6108019190610e43565b90508a81111561080e5750895b5f600261081b8385610e06565b6108259086610e2c565b61082f9190610e43565b90505f61083c8d8d610e2c565b90506108488287610e06565b98506108548982610e19565b97506108608a8a610e19565b98505050505050505094509492505050565b5f805f61087f85856108da565b5090925090505f81600381111561089857610898610e7a565b1480156108b65750856001600160a01b0316826001600160a01b0316145b806108c757506108c7868686610923565b9695505050505050565b5f61054461053b565b5f805f8351604103610911576020840151604085015160608601515f1a610903888285856109f9565b95509550955050505061091c565b505081515f91506002905b9250925092565b5f805f856001600160a01b03168585604051602401610943929190610eb0565b60408051601f198184030181529181526020820180516001600160e01b0316630b135d3f60e11b179052516109789190610ee9565b5f60405180830381855afa9150503d805f81146109b0576040519150601f19603f3d011682016040523d82523d5f602084013e6109b5565b606091505b50915091508180156109c957506020815110155b80156108c757508051630b135d3f60e11b906109ee9083016020908101908401610f04565b149695505050505050565b5f80807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115610a3257505f91506003905082610ab7565b604080515f808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015610a83573d5f803e3d5ffd5b5050604051601f1901519150506001600160a01b038116610aae57505f925060019150829050610ab7565b92505f91508190505b9450945094915050565b6040518060a001604052806005906020820280368337509192915050565b80356001600160a01b0381168114610af5575f80fd5b919050565b5f8083601f840112610b0a575f80fd5b50813567ffffffffffffffff811115610b21575f80fd5b6020830191508360208260051b8501011115610b3b575f80fd5b9250929050565b5f805f805f60808688031215610b56575f80fd5b610b5f86610adf565b945060208601359350604086013567ffffffffffffffff811115610b81575f80fd5b610b8d88828901610afa565b96999598509660600135949350505050565b5f8060408385031215610bb0575f80fd5b50508035926020909101359150565b60a0810181835f5b6005811015610bec57815163ffffffff16835260209283019290910190600101610bc7565b50505092915050565b5f8060408385031215610c06575f80fd5b610c0f83610adf565b946020939093013593505050565b5f60208284031215610c2d575f80fd5b61073082610adf565b634e487b7160e01b5f52604160045260245ffd5b5f805f805f805f60c0888a031215610c60575f80fd5b610c6988610adf565b965060208801359550604088013567ffffffffffffffff80821115610c8c575f80fd5b610c988b838c01610afa565b909750955060608a0135945060808a013591508115158214610cb8575f80fd5b90925060a08901359080821115610ccd575f80fd5b818a0191508a601f830112610ce0575f80fd5b813581811115610cf257610cf2610c36565b604051601f8201601f19908116603f01168101908382118183101715610d1a57610d1a610c36565b816040528281528d6020848701011115610d32575f80fd5b826020860160208301375f60208483010152809550505050505092959891949750929550565b5f60208284031215610d68575f80fd5b5035919050565b5f805f60608486031215610d81575f80fd5b610d8a84610adf565b95602085013595506040909401359392505050565b5f8184825b85811015610dd3576001600160a01b03610dbd83610adf565b1683526020928301929190910190600101610da4565b509095945050505050565b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b8082018082111561052a5761052a610df2565b8181038181111561052a5761052a610df2565b808202811582820484141761052a5761052a610df2565b5f82610e5d57634e487b7160e01b5f52601260045260245ffd5b500490565b5f60018201610e7357610e73610df2565b5060010190565b634e487b7160e01b5f52602160045260245ffd5b5f5b83811015610ea8578181015183820152602001610e90565b50505f910152565b828152604060208201525f8251806040840152610ed4816060850160208701610e8e565b601f01601f1916919091016060019392505050565b5f8251610efa818460208701610e8e565b9190910192915050565b5f60208284031215610f14575f80fd5b505191905056fea26469706673582212209b3be26c29f26f2469c8fc0b90a5e89c20b784da03a7eb940fbfc41baf8c0d7c64736f6c63430008150033";
const isSuperArgs = (xs) => xs.length > 1;
class MockSalaryHelper__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_startingAgents, overrides) {
        return super.deploy(_startingAgents, overrides || {});
    }
    getDeployTransaction(_startingAgents, overrides) {
        return super.getDeployTransaction(_startingAgents, overrides || {});
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
exports.MockSalaryHelper__factory = MockSalaryHelper__factory;
//# sourceMappingURL=MockSalaryHelper__factory.js.map