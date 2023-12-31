"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnifapV2Pair__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "AlreadyInitialized",
        type: "error",
    },
    {
        inputs: [],
        name: "BalanceOverflow",
        type: "error",
    },
    {
        inputs: [],
        name: "InsufficientLiquidity",
        type: "error",
    },
    {
        inputs: [],
        name: "InsufficientLiquidityBurned",
        type: "error",
    },
    {
        inputs: [],
        name: "InsufficientLiquidityMinted",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidAmount",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidConstantProductFormula",
        type: "error",
    },
    {
        inputs: [],
        name: "NotInitializing",
        type: "error",
    },
    {
        inputs: [],
        name: "SafeTransferFailed",
        type: "error",
    },
    {
        inputs: [],
        name: "SwapToSelf",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
        ],
        name: "Burn",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint64",
                name: "version",
                type: "uint64",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
        ],
        name: "Mint",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount0Out",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount1Out",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
        ],
        name: "Swap",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint112",
                name: "reserve0",
                type: "uint112",
            },
            {
                indexed: false,
                internalType: "uint112",
                name: "reserve1",
                type: "uint112",
            },
        ],
        name: "Sync",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [],
        name: "DOMAIN_SEPARATOR",
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
        name: "MINIMUM_LIQUIDITY",
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
        name: "SELECTOR",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
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
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "allowance",
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
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
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
        name: "balanceOf",
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
        name: "blockTimestampLast",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
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
        ],
        name: "burn",
        outputs: [
            {
                internalType: "uint256",
                name: "amount0",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount1",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getReserves",
        outputs: [
            {
                internalType: "uint112",
                name: "",
                type: "uint112",
            },
            {
                internalType: "uint112",
                name: "",
                type: "uint112",
            },
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_token0",
                type: "address",
            },
            {
                internalType: "address",
                name: "_token1",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
        ],
        name: "mint",
        outputs: [
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
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
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
        name: "nonces",
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
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
            },
        ],
        name: "permit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "price0CumulativeLast",
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
        name: "price1CumulativeLast",
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
        name: "reserve0",
        outputs: [
            {
                internalType: "uint112",
                name: "",
                type: "uint112",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "reserve1",
        outputs: [
            {
                internalType: "uint112",
                name: "",
                type: "uint112",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount0Out",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount1Out",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "swap",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "sync",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "token0",
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
        name: "token1",
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
        name: "totalSupply",
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
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
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
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60e0604052600160065534801562000015575f80fd5b50604051806040016040528060088152602001672ab734b330b82b1960c11b815250604051806040016040528060058152602001642aa724ab1960d91b8152506012825f9081620000679190620001d3565b506001620000768382620001d3565b5060ff81166080524660a0526200008c62000099565b60c0525062000315915050565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f5f604051620000cb91906200029b565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806200015c57607f821691505b6020821081036200017b57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115620001ce575f81815260208120601f850160051c81016020861015620001a95750805b601f850160051c820191505b81811015620001ca57828155600101620001b5565b5050505b505050565b81516001600160401b03811115620001ef57620001ef62000133565b620002078162000200845462000147565b8462000181565b602080601f8311600181146200023d575f8415620002255750858301515b5f19600386901b1c1916600185901b178555620001ca565b5f85815260208120601f198616915b828110156200026d578886015182559484019460019091019084016200024c565b50858210156200028b57878501515f19600388901b60f8161c191681555b5050505050600190811b01905550565b5f808354620002aa8162000147565b60018281168015620002c55760018114620002db5762000309565b60ff198416875282151583028701945062000309565b875f526020805f205f5b85811015620003005781548a820152908401908201620002e5565b50505082870194505b50929695505050505050565b60805160a05160c051611e4e620003405f395f610b7001525f610b3b01525f6102c50152611e4e5ff3fe608060405234801561000f575f80fd5b50600436106101a1575f3560e01c80635a3d5493116100f3578063a9059cbb11610093578063d21220a71161006e578063d21220a714610434578063d505accf14610447578063dd62ed3e1461045a578063fff6cae914610484575f80fd5b8063a9059cbb146103ec578063ba9a7a56146103ff578063c5700a0214610408575f80fd5b806370a08231116100ce57806370a082311461037e5780637ecebe001461039d57806389afcb44146103bc57806395d89b41146103e4575f80fd5b80635a3d5493146103485780635a76f25e146103515780636a6278421461036b575f80fd5b806318160ddd1161015e5780633644e515116101395780633644e515146102f9578063443cb4bc14610301578063485cc9551461032c5780635909c0d51461033f575f80fd5b806318160ddd1461029657806323b872dd146102ad578063313ce567146102c0575f80fd5b8063022c0d9f146101a5578063053c238d146101ba57806306fdde03146101ff5780630902f1ac14610214578063095ea7b3146102485780630dfe16811461026b575b5f80fd5b6101b86101b336600461198a565b61048c565b005b6101e17f30c48a3182a8fd8d0bb81fae287ce1ff431f570071c871a23bc371ebcd6d979181565b6040516001600160e01b031990911681526020015b60405180910390f35b61020761093d565b6040516101f69190611a16565b61021c6109c8565b604080516001600160701b03948516815293909216602084015263ffffffff16908201526060016101f6565b61025b610256366004611a61565b6109f2565b60405190151581526020016101f6565b60075461027e906001600160a01b031681565b6040516001600160a01b0390911681526020016101f6565b61029f60025481565b6040519081526020016101f6565b61025b6102bb366004611a89565b610a5e565b6102e77f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016101f6565b61029f610b38565b600954610314906001600160701b031681565b6040516001600160701b0390911681526020016101f6565b6101b861033a366004611ac2565b610b92565b61029f600a5481565b61029f600b5481565b60095461031490600160701b90046001600160701b031681565b61029f610379366004611af3565b610cc1565b61029f61038c366004611af3565b60036020525f908152604090205481565b61029f6103ab366004611af3565b60056020525f908152604090205481565b6103cf6103ca366004611af3565b610f38565b604080519283526020830191909152016101f6565b61020761117f565b61025b6103fa366004611a61565b61118c565b61029f6103e881565b60095461041f90600160e01b900463ffffffff1681565b60405163ffffffff90911681526020016101f6565b60085461027e906001600160a01b031681565b6101b8610455366004611b0c565b6111ef565b61029f610468366004611ac2565b600460209081525f928352604080842090915290825290205481565b6101b861142d565b6006546001146104b75760405162461bcd60e51b81526004016104ae90611b79565b60405180910390fd5b6002600655841515806104c957505f84115b6105235760405162461bcd60e51b815260206004820152602560248201527f556e697377617056323a20494e53554646494349454e545f4f55545055545f416044820152641353d5539560da1b60648201526084016104ae565b5f8061052d6109c8565b5091509150816001600160701b0316871080156105525750806001600160701b031686105b6105a85760405162461bcd60e51b815260206004820152602160248201527f556e697377617056323a20494e53554646494349454e545f4c495155494449546044820152605960f81b60648201526084016104ae565b6007546008545f9182916001600160a01b039182169190811690891682148015906105e55750806001600160a01b0316896001600160a01b031614155b6106295760405162461bcd60e51b8152602060048201526015602482015274556e697377617056323a20494e56414c49445f544f60581b60448201526064016104ae565b8a1561063a5761063a828a8d611505565b891561064b5761064b818a8c611505565b86156106b3576040516304347a1760e21b81526001600160a01b038a16906310d1e85c906106859033908f908f908e908e90600401611b9d565b5f604051808303815f87803b15801561069c575f80fd5b505af11580156106ae573d5f803e3d5ffd5b505050505b6040516370a0823160e01b81523060048201526001600160a01b038316906370a0823190602401602060405180830381865afa1580156106f5573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107199190611be8565b6040516370a0823160e01b81523060048201529094506001600160a01b038216906370a0823190602401602060405180830381865afa15801561075e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107829190611be8565b925050505f89856001600160701b031661079c9190611c13565b83116107a8575f6107c5565b6107bb8a6001600160701b038716611c13565b6107c59084611c13565b90505f6107db8a6001600160701b038716611c13565b83116107e7575f610804565b6107fa8a6001600160701b038716611c13565b6108049084611c13565b90505f82118061081357505f81115b61086b5760405162461bcd60e51b8152602060048201526024808201527f556e697377617056323a20494e53554646494349454e545f494e5055545f414d60448201526313d5539560e21b60648201526084016104ae565b5f610877836003611c26565b610883866103e8611c26565b61088d9190611c13565b90505f61089b836003611c26565b6108a7866103e8611c26565b6108b19190611c13565b90506108c96001600160701b03808916908a16611c26565b6108d690620f4240611c26565b6108e08284611c26565b101561091d5760405162461bcd60e51b815260206004820152600c60248201526b556e697377617056323a204b60a01b60448201526064016104ae565b505061092b84848888611598565b50506001600655505050505050505050565b5f805461094990611c3d565b80601f016020809104026020016040519081016040528092919081815260200182805461097590611c3d565b80156109c05780601f10610997576101008083540402835291602001916109c0565b820191905f5260205f20905b8154815290600101906020018083116109a357829003601f168201915b505050505081565b6009546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b335f8181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610a4c9086815260200190565b60405180910390a35060015b92915050565b6001600160a01b0383165f9081526004602090815260408083203384529091528120545f198114610ab757610a938382611c13565b6001600160a01b0386165f9081526004602090815260408083203384529091529020555b6001600160a01b0385165f9081526003602052604081208054859290610ade908490611c13565b90915550506001600160a01b038085165f81815260036020526040908190208054870190555190918716905f80516020611df983398151915290610b259087815260200190565b60405180910390a3506001949350505050565b5f7f00000000000000000000000000000000000000000000000000000000000000004614610b6d57610b6861173a565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0e8054600160401b900460ff1615808015610bda57508154600167ffffffffffffffff909116105b158015610bfe5750303b158015610bfc5750815467ffffffffffffffff166001145b155b15610c1b5760405162dc149f60e41b815260040160405180910390fd5b815467ffffffffffffffff191660011782558015610c4557815460ff60401b1916600160401b1782555b600780546001600160a01b038087166001600160a01b03199283161790925560088054928616929091169190911790558015610cbb57815460ff60401b19168255604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050565b5f600654600114610ce45760405162461bcd60e51b81526004016104ae90611b79565b60026006556007546040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa158015610d2f573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d539190611be8565b6008546040516370a0823160e01b81523060048201529192505f916001600160a01b03909116906370a0823190602401602060405180830381865afa158015610d9e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610dc29190611be8565b6009549091505f90610ddd906001600160701b031684611c13565b6009549091505f90610dff90600160701b90046001600160701b031684611c13565b90506002545f03610e3c576103e8610e1f610e1a8385611c26565b6117d2565b610e299190611c13565b9450610e375f6103e8611876565b610e98565b600954600254610e95916001600160701b031690610e5a9085611c26565b610e649190611c89565b600954600254600160701b9091046001600160701b031690610e869085611c26565b610e909190611c89565b6118cd565b94505b845f03610eb857604051633489be7560e21b815260040160405180910390fd5b610ec28686611876565b600954610ee690859085906001600160701b0380821691600160701b900416611598565b856001600160a01b03167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d412139688586604051610f2191815260200190565b60405180910390a250506001600655509092915050565b5f80600654600114610f5c5760405162461bcd60e51b81526004016104ae90611b79565b60026006556007546040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa158015610fa7573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fcb9190611be8565b6008546040516370a0823160e01b81523060048201529192505f916001600160a01b03909116906370a0823190602401602060405180830381865afa158015611016573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061103a9190611be8565b305f90815260036020526040902054600954919250906001600160701b03166110638483611c26565b61106d9190611c89565b600954909550600160701b90046001600160701b031661108d8383611c26565b6110979190611c89565b93508415806110a4575083155b156110c25760405163749383ad60e01b815260040160405180910390fd5b6110cc30826118e4565b6007546110e3906001600160a01b03168787611505565b6008546110fa906001600160a01b03168786611505565b61112d6111078685611c13565b6111118685611c13565b6009546001600160701b0380821691600160701b900416611598565b856001600160a01b03167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca58260405161116891815260200190565b60405180910390a250506001600655509092909150565b6001805461094990611c3d565b335f908152600360205260408120805483919083906111ac908490611c13565b90915550506001600160a01b0383165f81815260036020526040908190208054850190555133905f80516020611df983398151915290610a4c9086815260200190565b4284101561123f5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064016104ae565b5f600161124a610b38565b6001600160a01b038a81165f8181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f1981840301815282825280516020918201205f84529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015611352573d5f803e3d5ffd5b5050604051601f1901519150506001600160a01b038116158015906113885750876001600160a01b0316816001600160a01b0316145b6113c55760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b60448201526064016104ae565b6001600160a01b039081165f9081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b6007546040516370a0823160e01b8152306004820152611503916001600160a01b0316906370a0823190602401602060405180830381865afa158015611475573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114999190611be8565b6008546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa1580156114df573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111119190611be8565b565b60405163a9059cbb60e01b81526001600160a01b038381166004830152602482018390525f919085169063a9059cbb906044016020604051808303815f875af1158015611554573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906115789190611c9c565b905080610cbb5760405163fb7f507960e01b815260040160405180910390fd5b6001600160701b0384118015906115b657506001600160701b038311155b6115f85760405162461bcd60e51b8152602060048201526013602482015272556e697377617056323a204f564552464c4f5760681b60448201526064016104ae565b5f61160864010000000042611cbb565b6009549091505f9061162790600160e01b900463ffffffff1683611cce565b90505f8163ffffffff1611801561164657506001600160701b03841615155b801561165a57506001600160701b03831615155b156116e7578063ffffffff166116828561167386611943565b6001600160e01b03169061195b565b6001600160e01b03166116959190611c26565b600a5f8282546116a59190611cf2565b909155505063ffffffff81166116be8461167387611943565b6001600160e01b03166116d19190611c26565b600b5f8282546116e19190611cf2565b90915550505b506009805463ffffffff909216600160e01b026001600160e01b036001600160701b03968716600160701b026001600160e01b031990941696909716959095179190911794909416929092179092555050565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f5f60405161176a9190611d05565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b60b581600160881b81106117eb5760409190911b9060801c5b690100000000000000000081106118075760209190911b9060401c5b65010000000000811061181f5760109190911b9060201c5b630100000081106118355760089190911b9060101c5b62010000010260121c80820401600190811c80830401811c80830401811c80830401811c80830401811c80830401811c80830401901c908190048111900390565b8060025f8282546118879190611cf2565b90915550506001600160a01b0382165f818152600360209081526040808320805486019055518481525f80516020611df983398151915291015b60405180910390a35050565b5f8183106118db57816118dd565b825b9392505050565b6001600160a01b0382165f908152600360205260408120805483929061190b908490611c13565b90915550506002805482900390556040518181525f906001600160a01b038416905f80516020611df9833981519152906020016118c1565b5f610a58600160701b6001600160701b038416611da1565b5f6118dd6001600160701b03831684611dd3565b80356001600160a01b0381168114611985575f80fd5b919050565b5f805f805f6080868803121561199e575f80fd5b85359450602086013593506119b56040870161196f565b9250606086013567ffffffffffffffff808211156119d1575f80fd5b818801915088601f8301126119e4575f80fd5b8135818111156119f2575f80fd5b896020828501011115611a03575f80fd5b9699959850939650602001949392505050565b5f6020808352835180828501525f5b81811015611a4157858101830151858201604001528201611a25565b505f604082860101526040601f19601f8301168501019250505092915050565b5f8060408385031215611a72575f80fd5b611a7b8361196f565b946020939093013593505050565b5f805f60608486031215611a9b575f80fd5b611aa48461196f565b9250611ab26020850161196f565b9150604084013590509250925092565b5f8060408385031215611ad3575f80fd5b611adc8361196f565b9150611aea6020840161196f565b90509250929050565b5f60208284031215611b03575f80fd5b6118dd8261196f565b5f805f805f805f60e0888a031215611b22575f80fd5b611b2b8861196f565b9650611b396020890161196f565b95506040880135945060608801359350608088013560ff81168114611b5c575f80fd5b9699959850939692959460a0840135945060c09093013592915050565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b60018060a01b038616815284602082015283604082015260806060820152816080820152818360a08301375f81830160a090810191909152601f909201601f19160101949350505050565b5f60208284031215611bf8575f80fd5b5051919050565b634e487b7160e01b5f52601160045260245ffd5b81810381811115610a5857610a58611bff565b8082028115828204841417610a5857610a58611bff565b600181811c90821680611c5157607f821691505b602082108103611c6f57634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52601260045260245ffd5b5f82611c9757611c97611c75565b500490565b5f60208284031215611cac575f80fd5b815180151581146118dd575f80fd5b5f82611cc957611cc9611c75565b500690565b63ffffffff828116828216039080821115611ceb57611ceb611bff565b5092915050565b80820180821115610a5857610a58611bff565b5f80835481600182811c915080831680611d2057607f831692505b60208084108203611d3f57634e487b7160e01b86526022600452602486fd5b818015611d535760018114611d6857611d93565b60ff1986168952841515850289019650611d93565b5f8a8152602090205f5b86811015611d8b5781548b820152908501908301611d72565b505084890196505b509498975050505050505050565b6001600160e01b03828116828216818102831692918115828504821417611dca57611dca611bff565b50505092915050565b5f6001600160e01b0383811680611dec57611dec611c75565b9216919091049291505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122013e979c257cb527c70cecac69d3310b55358216cf4e927092294d96be831d7d164736f6c63430008150033";
const isSuperArgs = (xs) => xs.length > 1;
class UnifapV2Pair__factory extends ethers_1.ContractFactory {
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
exports.UnifapV2Pair__factory = UnifapV2Pair__factory;
//# sourceMappingURL=UnifapV2Pair__factory.js.map