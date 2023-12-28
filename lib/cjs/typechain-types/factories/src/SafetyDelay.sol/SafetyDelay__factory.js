"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SafetyDelay__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_vetoCouncil",
                type: "address",
            },
            {
                internalType: "address",
                name: "_minerPool",
                type: "address",
            },
        ],
        stateMutability: "payable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address",
            },
        ],
        name: "AddressEmptyCode",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "AddressInsufficientBalance",
        type: "error",
    },
    {
        inputs: [],
        name: "AlreadyWithdrawnFromHolding",
        type: "error",
    },
    {
        inputs: [],
        name: "CallerMustBeVetoCouncilMember",
        type: "error",
    },
    {
        inputs: [],
        name: "DelayStillOnCooldown",
        type: "error",
    },
    {
        inputs: [],
        name: "FailedInnerCall",
        type: "error",
    },
    {
        inputs: [],
        name: "MinerPoolAlreadySet",
        type: "error",
    },
    {
        inputs: [],
        name: "NetworkIsFrozen",
        type: "error",
    },
    {
        inputs: [],
        name: "OnlyMinerPoolCanAddHoldings",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "SafeERC20FailedOperation",
        type: "error",
    },
    {
        inputs: [],
        name: "WithdrawalNotReady",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint192",
                name: "amount",
                type: "uint192",
            },
        ],
        name: "HoldingAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint192",
                name: "amount",
                type: "uint192",
            },
        ],
        name: "HoldingClaimed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "vetoAgent",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "NetworkDelay",
        type: "event",
    },
    {
        inputs: [],
        name: "DEFAULT_DELAY",
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
        name: "FIVE_WEEKS",
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
        name: "MINER_POOL",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "NINETY_DAYS",
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
        name: "VETO_COUNCIL",
        outputs: [
            {
                internalType: "contract IVetoCouncil",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "VETO_HOLDING_DELAY",
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
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint192",
                name: "amount",
                type: "uint192",
            },
        ],
        name: "addHolding",
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
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "claimHoldingSingleton",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "user",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                ],
                internalType: "struct ClaimHoldingArgs[]",
                name: "args",
                type: "tuple[]",
            },
        ],
        name: "claimHoldings",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "delayNetwork",
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
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "holdings",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint192",
                        name: "amount",
                        type: "uint192",
                    },
                    {
                        internalType: "uint64",
                        name: "expirationTimestamp",
                        type: "uint64",
                    },
                ],
                internalType: "struct Holding",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "isNetworkFrozen",
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
        inputs: [],
        name: "minimumWithdrawTimestamp",
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
];
const _bytecode = "0x60c0604052604051610bfd380380610bfd83398101604081905261002291610054565b6001600160a01b039182166080521660a052610085565b80516001600160a01b038116811461004f575f80fd5b919050565b5f8060408385031215610065575f80fd5b61006e83610039565b915061007c60208401610039565b90509250929050565b60805160a051610b496100b45f395f81816101e4015261029301525f818161018a01526103d50152610b495ff3fe608060405234801561000f575f80fd5b50600436106100cb575f3560e01c80636334295c1161008857806396c273251161006357806396c27325146101c4578063c6d13825146101cc578063d203d5a0146101df578063e372c90014610206575f80fd5b80636334295c14610171578063659495a01461017b5780637a64718914610185575f80fd5b80630ba36e2a146100cf578063250415c2146100e85780632d7202d1146101005780634036ff2e146101085780634710707e146101495780634cc2cb671461015e575b5f80fd5b5f54421060405190151581526020015b60405180910390f35b6100f26277f88081565b6040519081526020016100df565b6100f25f5481565b61011b61011636600461088f565b610210565b6040805182516001600160c01b0316815260209283015167ffffffffffffffff1692810192909252016100df565b61015c61015736600461088f565b610274565b005b61015c61016c3660046108c0565b610288565b6100f2622e248081565b6100f262093a8081565b6101ac7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100df565b61015c6103c0565b61015c6101da36600461097d565b6104ee565b6101ac7f000000000000000000000000000000000000000000000000000000000000000081565b6100f26276a70081565b6040805180820182525f80825260209182018190526001600160a01b03858116825260018352838220908516825282528290208251808401909352546001600160c01b0381168352600160c01b900467ffffffffffffffff16908201525b92915050565b5f544210610283838383610540565b505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102c8576102c863258e325f60e11b610631565b6001600160a01b038084165f908152600160209081526040808320938616835292905290812080548392906103079084906001600160c01b0316610a67565b92506101000a8154816001600160c01b0302191690836001600160c01b0316021790555062093a804261033a9190610a8e565b6001600160a01b038481165f81815260016020908152604080832094881680845294825291829020805467ffffffffffffffff96909616600160c01b026001600160c01b0396871617905590519385168452919290917fae545d17d6faf72c4c01b498f7cce7af390ab49fccfba315036e414af2a29e10910160405180910390a3505050565b6040516375ebee2960e11b81523360048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063ebd7dc5290602401602060405180830381865afa158015610422573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104469190610aa1565b61045a5761045a637ec0374560e01b610631565b5f8054908190036104af576104726277f88042610a8e565b5f55604080513381524260208201527f337b6c2d86ade4ff07f8f386b280cdd2414d551ade60595e13d20d349b633de9910160405180910390a150565b804210156104e1575f6104c24283610ac0565b9050622e24808111156104df576104df631fbe780560e11b610631565b505b6104726277f88042610a8e565b5f8054421082519091505f5b8181101561053a575f84828151811061051557610515610ad3565b60200260200101519050610531815f0151826020015186610540565b506001016104fa565b50505050565b6001600160a01b038381165f9081526001602090815260408083209386168352928152908290208251808401909352546001600160c01b0381168352600160c01b900467ffffffffffffffff1690820181905261059d9083610639565b6001600160a01b038085165f90815260016020908152604080832093871683529290529081205580516105dc90849086906001600160c01b0316610693565b80516040516001600160c01b0390911681526001600160a01b0380851691908616907fc061323b879f183a20cdba85c0bf51c12ac3149240980e63f4590c28a350a9279060200160405180910390a350505050565b805f5260045ffd5b8167ffffffffffffffff1642101561065b5761065b630f2ca6e760e01b610631565b6276a70061067367ffffffffffffffff841642610ac0565b101561068f57801561068f5761068f633bc996a960e01b610631565b5050565b604080516001600160a01b03848116602483015260448083018590528351808403909101815260649092019092526020810180516001600160e01b031663a9059cbb60e01b179052610283918591905f906106f090841683610742565b905080515f141580156107145750808060200190518101906107129190610aa1565b155b1561028357604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b606061074f83835f610756565b9392505050565b60608147101561077b5760405163cd78605960e01b8152306004820152602401610739565b5f80856001600160a01b031684866040516107969190610ae7565b5f6040518083038185875af1925050503d805f81146107d0576040519150601f19603f3d011682016040523d82523d5f602084013e6107d5565b606091505b50915091506107e58683836107ef565b9695505050505050565b606082610804576107ff8261084b565b61074f565b815115801561081b57506001600160a01b0384163b155b1561084457604051639996b31560e01b81526001600160a01b0385166004820152602401610739565b508061074f565b80511561085b5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b80356001600160a01b038116811461088a575f80fd5b919050565b5f80604083850312156108a0575f80fd5b6108a983610874565b91506108b760208401610874565b90509250929050565b5f805f606084860312156108d2575f80fd5b6108db84610874565b92506108e960208501610874565b915060408401356001600160c01b0381168114610904575f80fd5b809150509250925092565b634e487b7160e01b5f52604160045260245ffd5b6040805190810167ffffffffffffffff811182821017156109465761094661090f565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156109755761097561090f565b604052919050565b5f602080838503121561098e575f80fd5b823567ffffffffffffffff808211156109a5575f80fd5b818501915085601f8301126109b8575f80fd5b8135818111156109ca576109ca61090f565b6109d8848260051b0161094c565b818152848101925060069190911b8301840190878211156109f7575f80fd5b928401925b81841015610a485760408489031215610a14575f8081fd5b610a1c610923565b610a2585610874565b8152610a32868601610874565b81870152835260409390930192918401916109fc565b979650505050505050565b634e487b7160e01b5f52601160045260245ffd5b6001600160c01b03818116838216019080821115610a8757610a87610a53565b5092915050565b8082018082111561026e5761026e610a53565b5f60208284031215610ab1575f80fd5b8151801515811461074f575f80fd5b8181038181111561026e5761026e610a53565b634e487b7160e01b5f52603260045260245ffd5b5f82515f5b81811015610b065760208186018101518583015201610aec565b505f92019182525091905056fea26469706673582212205db96953eb36cb5cec5a147e14306f6efbf5e7549876fb9e02d7f1b70a559cbc64736f6c63430008150033";
const isSuperArgs = (xs) => xs.length > 1;
class SafetyDelay__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_vetoCouncil, _minerPool, overrides) {
        return super.deploy(_vetoCouncil, _minerPool, overrides || {});
    }
    getDeployTransaction(_vetoCouncil, _minerPool, overrides) {
        return super.getDeployTransaction(_vetoCouncil, _minerPool, overrides || {});
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
exports.SafetyDelay__factory = SafetyDelay__factory;
//# sourceMappingURL=SafetyDelay__factory.js.map