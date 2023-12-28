"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnifapV2Router__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_factory",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "Expired",
        type: "error",
    },
    {
        inputs: [],
        name: "InsufficientAmountA",
        type: "error",
    },
    {
        inputs: [],
        name: "InsufficientAmountB",
        type: "error",
    },
    {
        inputs: [],
        name: "SafeTransferFromFailed",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenA",
                type: "address",
            },
            {
                internalType: "address",
                name: "tokenB",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amountADesired",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountBDesired",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountAMin",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountBMin",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
        ],
        name: "addLiquidity",
        outputs: [
            {
                internalType: "uint256",
                name: "amountA",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountB",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "liquidity",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "factory",
        outputs: [
            {
                internalType: "contract IUnifapV2Factory",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenA",
                type: "address",
            },
            {
                internalType: "address",
                name: "tokenB",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "liquidity",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountAMin",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountBMin",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
        ],
        name: "removeLiquidity",
        outputs: [
            {
                internalType: "uint256",
                name: "amountA",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountB",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "path",
                type: "address[]",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
        ],
        name: "swapExactTokensForTokens",
        outputs: [
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60a060405234801561000f575f80fd5b506040516116d13803806116d183398101604081905261002e9161003f565b6001600160a01b031660805261006c565b5f6020828403121561004f575f80fd5b81516001600160a01b0381168114610065575f80fd5b9392505050565b60805161160f6100c25f395f818160a4015281816101690152818161027d015281816103a50152818161057a01528181610aff01528181610b5001528181610d0501528181610da50152610e18015261160f5ff3fe608060405234801561000f575f80fd5b506004361061004a575f3560e01c806338ed17391461004e578063baa2abde14610077578063c45a01551461009f578063e8e33700146100de575b5f80fd5b61006161005c3660046111cb565b61010c565b60405161006e9190611265565b60405180910390f35b61008a6100853660046112a8565b610358565b6040805192835260208301919091520161006e565b6100c67f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161006e565b6100f16100ec366004611315565b610518565b6040805193845260208401929092529082015260600161006e565b606081428110156101645760405162461bcd60e51b815260206004820152601760248201527f556e696661705632526f757465723a204558504952454400000000000000000060448201526064015b60405180910390fd5b6101c17f0000000000000000000000000000000000000000000000000000000000000000898888808060200260200160405190810160405280939291908181526020018383602002808284375f9201919091525061067a92505050565b91508682600184516101d391906113a0565b815181106101e3576101e36113b9565b6020026020010151101561024d5760405162461bcd60e51b815260206004820152602b60248201527f556e69737761705632526f757465723a20494e53554646494349454e545f4f5560448201526a1514155517d05353d5539560aa1b606482015260840161015b565b61030f86865f818110610262576102626113b9565b905060200201602081019061027791906113cd565b336102f07f00000000000000000000000000000000000000000000000000000000000000008a8a5f8181106102ae576102ae6113b9565b90506020020160208101906102c391906113cd565b8b8b60018181106102d6576102d66113b9565b90506020020160208101906102eb91906113cd565b610814565b855f81518110610302576103026113b9565b60200260200101516108eb565b61034d828787808060200260200160405190810160405280939291908181526020018383602002808284375f92019190915250899250610a24915050565b509695505050505050565b5f80828042111561037c57604051630407b05b60e31b815260040160405180910390fd5b6040516334a2a5c360e11b81526001600160a01b038b811660048301528a811660248301525f917f0000000000000000000000000000000000000000000000000000000000000000909116906369454b8690604401602060405180830381865afa1580156103ec573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061041091906113ef565b905061041e8133838c610c05565b5060405163226bf2d160e21b81526001600160a01b0387811660048301525f9182918416906389afcb449060240160408051808303815f875af1158015610467573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061048b919061140a565b915091505f61049a8e8e610ca8565b5090508d6001600160a01b0316816001600160a01b0316146104bd5781836104c0565b82825b90975095508a8710156104e6576040516323d9bb0560e21b815260040160405180910390fd5b8986101561050757604051630d32418960e21b815260040160405180910390fd5b505050505097509795505050505050565b5f805f838042111561053d57604051630407b05b60e31b815260040160405180910390fd5b61054b8c8c8c8c8c8c610cd8565b6040516334a2a5c360e11b81526001600160a01b038f811660048301528e811660248301529296509094505f917f000000000000000000000000000000000000000000000000000000000000000016906369454b8690604401602060405180830381865afa1580156105bf573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105e391906113ef565b90506105f18d338388610c05565b506105fe8c338387610c05565b506040516335313c2160e11b81526001600160a01b038881166004830152821690636a627842906024016020604051808303815f875af1158015610644573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610668919061142c565b92505050985098509895505050505050565b60606002825110156106ce5760405162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a20494e56414c49445f504154480000604482015260640161015b565b815167ffffffffffffffff8111156106e8576106e8611443565b604051908082528060200260200182016040528015610711578160200160208202803683370190505b50905082815f81518110610727576107276113b9565b6020026020010181815250505f5b6001835161074391906113a0565b81101561080c575f8061079587868581518110610762576107626113b9565b6020026020010151878660016107789190611457565b81518110610788576107886113b9565b6020026020010151610f21565b6001600160701b031691506001600160701b031691506107cf8484815181106107c0576107c06113b9565b60200260200101518383610fd7565b846107db856001611457565b815181106107eb576107eb6113b9565b602002602001018181525050505080806108049061146a565b915050610735565b509392505050565b5f805f6108218585610ca8565b6040516bffffffffffffffffffffffff19606084811b8216602084015283901b16603482015291935091508690604801604051602081830303815290604052805190602001206040516020016108c99291906001600160f81b0319815260609290921b6bffffffffffffffffffffffff1916600183015260158201527ff53b18237738db0c12129e859ee0fb162ab02d4490376523b394ce689eae51de603582015260550190565b60408051601f1981840301815291905280516020909101209695505050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291515f9283929088169161094e91906114a4565b5f604051808303815f865af19150503d805f8114610987576040519150601f19603f3d011682016040523d82523d5f602084013e61098c565b606091505b50915091508180156109b65750805115806109b65750808060200190518101906109b691906114bf565b610a1c5760405162461bcd60e51b815260206004820152603160248201527f5472616e7366657248656c7065723a3a7472616e7366657246726f6d3a207472604482015270185b9cd9995c919c9bdb4819985a5b1959607a1b606482015260840161015b565b505050505050565b5f5b60018351610a3491906113a0565b811015610bff575f80848381518110610a4f57610a4f6113b9565b602002602001015185846001610a659190611457565b81518110610a7557610a756113b9565b6020026020010151915091505f610a8c83836110f1565b5090505f87610a9c866001611457565b81518110610aac57610aac6113b9565b602002602001015190505f80836001600160a01b0316866001600160a01b031614610ad857825f610adb565b5f835b915091505f60028a51610aee91906113a0565b8810610afa5788610b48565b610b487f0000000000000000000000000000000000000000000000000000000000000000878c610b2b8c6002611457565b81518110610b3b57610b3b6113b9565b6020026020010151610814565b90505f610b767f00000000000000000000000000000000000000000000000000000000000000008989610814565b604080515f8152602081019182905263022c0d9f60e01b9091529091506001600160a01b0382169063022c0d9f90610bb790879087908790602481016114de565b5f604051808303815f87803b158015610bce575f80fd5b505af1158015610be0573d5f803e3d5ffd5b5050505050505050505050508080610bf79061146a565b915050610a26565b50505050565b6040516323b872dd60e01b81526001600160a01b0384811660048301528381166024830152604482018390525f91908616906323b872dd906064016020604051808303815f875af1158015610c5c573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c8091906114bf565b905080610ca05760405163f405907160e01b815260040160405180910390fd5b949350505050565b5f80826001600160a01b0316846001600160a01b031610610cca578284610ccd565b83835b915091509250929050565b6040516334a2a5c360e11b81526001600160a01b03878116600483015286811660248301525f91829182917f0000000000000000000000000000000000000000000000000000000000000000909116906369454b8690604401602060405180830381865afa158015610d4c573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d7091906113ef565b6001600160a01b031603610e11576040516364e329cb60e11b81526001600160a01b03898116600483015288811660248301527f0000000000000000000000000000000000000000000000000000000000000000169063c9c65396906044016020604051808303815f875af1158015610deb573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e0f91906113ef565b505b5f80610e3e7f00000000000000000000000000000000000000000000000000000000000000008b8b610f21565b91509150816001600160701b03165f148015610e6157506001600160701b038116155b15610e7157879350869250610f14565b610e8e88836001600160701b0316836001600160701b031661118e565b9250868311610ec05784831015610eb857604051630d32418960e21b815260040160405180910390fd5b879350610f14565b610edd87826001600160701b0316846001600160701b031661118e565b935087841115610eef57610eef61152d565b85841015610f10576040516323d9bb0560e21b815260040160405180910390fd5b8692505b5050965096945050505050565b5f805f80610f2f8686610ca8565b915091505f80610f40898585610814565b6001600160a01b0316630902f1ac6040518163ffffffff1660e01b8152600401606060405180830381865afa158015610f7b573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f9f9190611557565b5091509150836001600160a01b0316886001600160a01b031614610fc4578082610fc7565b81815b909a909950975050505050505050565b5f80841161103b5760405162461bcd60e51b815260206004820152602b60248201527f556e697377617056324c6962726172793a20494e53554646494349454e545f4960448201526a1394155517d05353d5539560aa1b606482015260840161015b565b5f8311801561104957505f82115b6110a65760405162461bcd60e51b815260206004820152602860248201527f556e697377617056324c6962726172793a20494e53554646494349454e545f4c604482015267495155494449545960c01b606482015260840161015b565b5f6110b3856103e56115a3565b90505f6110c084836115a3565b90505f826110d0876103e86115a3565b6110da9190611457565b90506110e681836115ba565b979650505050505050565b5f80826001600160a01b0316846001600160a01b0316036111605760405162461bcd60e51b815260206004820152602360248201527f556e696661705632526f757465723a204944454e544943414c5f41444452455360448201526253455360e81b606482015260840161015b565b826001600160a01b0316846001600160a01b031610611180578284611183565b83835b909590945092505050565b5f8261119a83866115a3565b610ca091906115ba565b6001600160a01b03811681146111b8575f80fd5b50565b80356111c6816111a4565b919050565b5f805f805f8060a087890312156111e0575f80fd5b8635955060208701359450604087013567ffffffffffffffff80821115611205575f80fd5b818901915089601f830112611218575f80fd5b813581811115611226575f80fd5b8a60208260051b850101111561123a575f80fd5b602083019650809550505050611252606088016111bb565b9150608087013590509295509295509295565b602080825282518282018190525f9190848201906040850190845b8181101561129c57835183529284019291840191600101611280565b50909695505050505050565b5f805f805f805f60e0888a0312156112be575f80fd5b87356112c9816111a4565b965060208801356112d9816111a4565b955060408801359450606088013593506080880135925060a08801356112fe816111a4565b8092505060c0880135905092959891949750929550565b5f805f805f805f80610100898b03121561132d575f80fd5b8835611338816111a4565b97506020890135611348816111a4565b965060408901359550606089013594506080890135935060a0890135925060c0890135611374816111a4565b8092505060e089013590509295985092959890939650565b634e487b7160e01b5f52601160045260245ffd5b818103818111156113b3576113b361138c565b92915050565b634e487b7160e01b5f52603260045260245ffd5b5f602082840312156113dd575f80fd5b81356113e8816111a4565b9392505050565b5f602082840312156113ff575f80fd5b81516113e8816111a4565b5f806040838503121561141b575f80fd5b505080516020909101519092909150565b5f6020828403121561143c575f80fd5b5051919050565b634e487b7160e01b5f52604160045260245ffd5b808201808211156113b3576113b361138c565b5f6001820161147b5761147b61138c565b5060010190565b5f5b8381101561149c578181015183820152602001611484565b50505f910152565b5f82516114b5818460208701611482565b9190910192915050565b5f602082840312156114cf575f80fd5b815180151581146113e8575f80fd5b84815283602082015260018060a01b0383166040820152608060608201525f82518060808401526115168160a0850160208701611482565b601f01601f19169190910160a00195945050505050565b634e487b7160e01b5f52600160045260245ffd5b80516001600160701b03811681146111c6575f80fd5b5f805f60608486031215611569575f80fd5b61157284611541565b925061158060208501611541565b9150604084015163ffffffff81168114611598575f80fd5b809150509250925092565b80820281158282048414176113b3576113b361138c565b5f826115d457634e487b7160e01b5f52601260045260245ffd5b50049056fea2646970667358221220d28d349c497565602586e5c3557a71fc888347ea795ecc4315e9990cb918a35864736f6c63430008150033";
const isSuperArgs = (xs) => xs.length > 1;
class UnifapV2Router__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_factory, overrides) {
        return super.deploy(_factory, overrides || {});
    }
    getDeployTransaction(_factory, overrides) {
        return super.getDeployTransaction(_factory, overrides || {});
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
exports.UnifapV2Router__factory = UnifapV2Router__factory;
//# sourceMappingURL=UnifapV2Router__factory.js.map