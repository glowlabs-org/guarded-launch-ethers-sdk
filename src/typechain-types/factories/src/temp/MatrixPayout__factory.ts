/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MatrixPayout,
  MatrixPayoutInterface,
} from "../../../src/temp/MatrixPayout";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "_uint",
        type: "uint160",
      },
    ],
    name: "castUintToAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "claimForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_gca",
        type: "address",
      },
    ],
    name: "findGCATotalSharesByAddress",
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
        name: "_gca",
        type: "address",
      },
      {
        internalType: "address[5]",
        name: "_gcas",
        type: "address[5]",
      },
    ],
    name: "findIndexOfGCA",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gcaNumber",
        type: "uint256",
      },
    ],
    name: "findTotalSharesOfGCA",
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
    name: "getActiveGcaRewardTrackers",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "lastUpdateTimestamp",
            type: "uint64",
          },
          {
            internalType: "uint192",
            name: "slasheableBalance",
            type: "uint192",
          },
        ],
        internalType: "struct GcaRewardTracker[]",
        name: "trackers",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllRealizedPayouts",
    outputs: [
      {
        internalType: "uint256[5]",
        name: "balances",
        type: "uint256[5]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPayoutMatrix",
    outputs: [
      {
        internalType: "uint256[5][5]",
        name: "matrix",
        type: "uint256[5][5]",
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
    name: "realizedPayout",
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
    name: "removeGCAZero",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gcaNumber",
        type: "uint256",
      },
    ],
    name: "sumOfAgentInPayoutMatrix",
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
    name: "testSetToEqual",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalShares",
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

const _bytecode =
  "0x608060405234801562000010575f80fd5b505f805460016001600160a01b031991821681178355805460029083168117825580546003908416811782558054600490851681178255805460059516851781556040805180820182526001600160401b0342811680835260208084018b8152988b526008808252935198516001600160c01b03908116680100000000000000009081029a85169a909a177fad67d757c34507f157cacfa2e3153e9f260a2244f30428821be7be64587ac55f55855180870187528381528083018d8152998d5285835251985181168a02988416989098177f6add646517a5b0f6793cd5891b7937d28a5b2981a5d88ebc7cd776088fea904155845180860186528281528082018c8152978c5284825251965188168902968316969096177f625b35f5e76f098dd7c3a05b10e2e5e78a4a01228d60c3b143426cdf36d2645555835180850185528181528087018b8152958b5283875251945187168802948216949094177f9321edea6e3be4df59a344b401fab4f888b556fda1f954244cff9204bad624b855825180840190935292825281840188815296909752959091529351925116029116177f91238f30f286c9a1c6e901c4eda3b214c381c846e3dbe48df95c21488e8e1fdb55620001dd620001e3565b620002ff565b6010600f600a5f805b838110156200022a57620002018186620002a4565b62000210600561c350620002c4565b901b82179150806200022290620002e4565b9050620001ec565b505f805b8381101562000281578060041480620002475750806009145b6200026e57620002588187620002a4565b62000267600461c350620002c4565b901b821791505b6200027981620002e4565b90506200022e565b50600591909155600655505050565b634e487b7160e01b5f52601160045260245ffd5b8082028115828204841417620002be57620002be62000290565b92915050565b5f82620002df57634e487b7160e01b5f52601260045260245ffd5b500490565b5f60018201620002f857620002f862000290565b5060010190565b6110ab806200030d5f395ff3fe608060405234801561000f575f80fd5b50600436106100cb575f3560e01c8063a10258bf11610088578063c1ec505511610063578063c1ec505514610188578063dac07746146101a7578063f155525d146101ba578063fe776163146101c2575f80fd5b8063a10258bf1461014d578063a7c4167914610162578063bd96b67914610175575f80fd5b806309d941ba146100cf5780633a46f37a146100fd5780633a98ef39146101125780635e90d648146101285780636a466d6b1461013b57806388d2b19014610145575b5f80fd5b6100e06100dd366004610d68565b90565b6040516001600160a01b0390911681526020015b60405180910390f35b6101056101d7565b6040516100f49190610d83565b61011a6102ed565b6040519081526020016100f4565b61011a610136366004610de4565b610375565b6101436103de565b005b610143610479565b610155610686565b6040516100f49190610dfb565b61011a610170366004610e7f565b61075e565b61011a610183366004610de4565b6107e7565b61011a610196366004610d68565b60076020525f908152604090205481565b61011a6101b5366004610d68565b6108de565b610143610936565b6101ca610b17565b6040516100f49190610f15565b60408051600580825260c082019092526060915f918291816020015b604080518082019091525f80825260208201528152602001906001900390816101f35790505090505f5b60058110156102e4575f80826005811061023957610239610f45565b01546001600160a01b0316146102d45760085f80836005811061025e5761025e610f45565b01546001600160a01b0316815260208082019290925260409081015f2081518083019092525467ffffffffffffffff81168252600160401b90046001600160c01b03169181019190915282518390859081106102bc576102bc610f45565b6020026020010181905250826102d190610f6d565b92505b6102dd81610f6d565b905061021d565b50908152919050565b6005546006545f918291825b600f8110156103315761ffff610310826010610f85565b84901c168461031f9190610f9c565b935061032a81610f6d565b90506102f9565b505f5b600a81101561036c5761ffff61034b826010610f85565b83901c168461035a9190610f9c565b935061036581610f6d565b9050610334565b50919392505050565b5f8061037f610686565b90505f805b60058110156103d65782816005811061039f5761039f610f45565b602002015185600581106103b5576103b5610f45565b60200201516103c49083610f9c565b91506103cf81610f6d565b9050610384565b509392505050565b6010600f600a5f805b8381101561041d576103f98186610f85565b610406600561c350610fc3565b901b821791508061041690610f6d565b90506103e7565b505f805b8381101561046a5780600414806104385750806009145b61045a576104468187610f85565b610453600461c350610fc3565b901b821791505b61046381610f6d565b9050610421565b50600591909155600655505050565b610481610936565b6005546006545f610491816107e7565b90505f61049e8484610b85565b75ffff0000000000000000ffffffffffffffffffffffff1994909416936bffff0000000000000000ffff19939093169290505f61c35060016104de610bfc565b6104e89190610fd6565b6104f29190610f85565b5f80546001600160a01b031916905560408051808201909152601481527373756d4f665a65726f536861726573203d20257360601b60208201529091506105399084610c47565b5f6105448484610fd6565b90505f5b600f8110156105c4575f61ffff610560836010610f85565b89901c169050805f0361057357506105b4565b5f8361057f8684610f85565b6105899190610fc3565b9050610596836010610f85565b61ffff901b1998909816976105ac836010610f85565b1b9790971796505b6105bd81610f6d565b9050610548565b505f5b600a811015610643575f61ffff6105df836010610f85565b88901c169050805f036105f25750610633565b5f836105fe8684610f85565b6106089190610fc3565b9050610615836010610f85565b61ffff901b19979097169661062b836010610f85565b1b9690961795505b61063c81610f6d565b90506105c7565b505f61064f8787610b85565b6106599084610fd6565b905061ffff871661066a8282610f9c565b61ffff1998909816909717600555505050600692909255505050565b61068e610d06565b6005545f5b600f8110156106e957600580820490808306906010840285901c61ffff16908690849081106106c4576106c4610f45565b602002015182600581106106da576106da610f45565b60200201525050600101610693565b506006545f5b600a811015610758575f6005820460030190505f6005838161071357610713610faf565b06905061ffff8360100285901c1686836005811061073357610733610f45565b6020020151826005811061074957610749610f45565b602002015250506001016106ef565b50505090565b5f805b60058110156107a85782816005811061077c5761077c610f45565b60200201516001600160a01b0316846001600160a01b0316036107a05790506107e1565b600101610761565b5060405162461bcd60e51b8152602060048201526009602482015268139bdd08119bdd5b9960ba1b604482015260640160405180910390fd5b92915050565b6005546006545f919082805b600f81101561085d575f610808600583610fc3565b90505f610816600584610fe9565b90508782148061082557508781145b1561084a5761ffff610838846010610f85565b87901c16846108479190610f9c565b93505b50508061085690610f6d565b90506107f3565b505f5b600a8110156108d5575f610875600583610fc3565b610880906003610f9c565b90505f61088e600584610fe9565b90508782148061089d57508781145b156108c25761ffff6108b0846010610f85565b86901c16846108bf9190610f9c565b93505b5050806108ce90610f6d565b9050610860565b50949350505050565b6040805160a08101918290525f91829161092491859190849060059082845b81546001600160a01b031681526001909101906020018083116108fd57505050505061075e565b905061092f81610375565b9392505050565b5f61093f610686565b90505f61094a6102ed565b9050670de0b6b3a76400005f5b6005811015610b11575f60085f80846005811061097657610976610f45565b01546001600160a01b0316815260208082019290925260409081015f90812082518084019093525467ffffffffffffffff8116808452600160401b9091046001600160c01b031693830193909352909250906109d29042610fd6565b90505f6109df8286610f85565b90505f8085600581106109f4576109f4610f45565b01546001600160a01b0316905080610a0f5750505050610b01565b5f610a1a868a610c90565b90505f88610a288386610f85565b610a329190610fc3565b90505f6301e13380610a448784610f85565b610a4e9190610fc3565b90505f610a5b8284610fd6565b6001600160a01b0386165f90815260076020526040812080549293508492909190610a87908490610f9c565b909155505067ffffffffffffffff42168852602088018051829190610aad908390610ffc565b6001600160c01b039081169091526001600160a01b039096165f9081526008602090815260409091208a5191909a0151909616600160401b0267ffffffffffffffff90961695909517909755505050505050505b610b0a81610f6d565b9050610957565b50505050565b610b1f610d33565b5f5b6005811015610b815760075f808360058110610b3f57610b3f610f45565b01546001600160a01b0316815260208101919091526040015f2054828260058110610b6c57610b6c610f45565b6020020152610b7a81610f6d565b9050610b21565b5090565b5f805f5b600f811015610bc15761ffff610ba0826010610f85565b86901c1682610baf9190610f9c565b9150610bba81610f6d565b9050610b89565b505f5b600a8110156103d65761ffff610bdb826010610f85565b85901c1682610bea9190610f9c565b9150610bf581610f6d565b9050610bc4565b5f805b6005811015610b81575f808260058110610c1b57610c1b610f45565b01546001600160a01b031614610c3757610c3482610f6d565b91505b610c4081610f6d565b9050610bff565b610c8c8282604051602401610c5d929190611023565b60408051601f198184030181529190526020810180516001600160e01b03166309710a9d60e41b179052610ce6565b5050565b5f805f5b60058110156103d657838160058110610caf57610caf610f45565b60200201518560058110610cc557610cc5610f45565b6020020151610cd49083610f9c565b9150610cdf81610f6d565b9050610c94565b80516a636f6e736f6c652e6c6f67602083015f808483855afa5050505050565b6040518060a001604052806005905b610d1d610d33565b815260200190600190039081610d155790505090565b6040518060a001604052806005906020820280368337509192915050565b6001600160a01b0381168114610d65575f80fd5b50565b5f60208284031215610d78575f80fd5b813561092f81610d51565b602080825282518282018190525f919060409081850190868401855b82811015610dd7578151805167ffffffffffffffff1685528601516001600160c01b0316868501529284019290850190600101610d9f565b5091979650505050505050565b5f60208284031215610df4575f80fd5b5035919050565b610320810181835f805b6005808210610e145750610e51565b835185845b83811015610e37578251825260209283019290910190600101610e19565b50505060a094909401935060209290920191600101610e05565b5050505092915050565b8035610e6681610d51565b919050565b634e487b7160e01b5f52604160045260245ffd5b5f8060c08385031215610e90575f80fd5b8235610e9b81610d51565b91506020603f84018513610ead575f80fd5b60405160a0810181811067ffffffffffffffff82111715610ed057610ed0610e6b565b6040528060c0860187811115610ee4575f80fd5b8387015b81811015610f0657610ef981610e5b565b8352918401918401610ee8565b50505080925050509250929050565b60a0810181835f5b6005811015610f3c578151835260209283019290910190600101610f1d565b50505092915050565b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b5f60018201610f7e57610f7e610f59565b5060010190565b80820281158282048414176107e1576107e1610f59565b808201808211156107e1576107e1610f59565b634e487b7160e01b5f52601260045260245ffd5b5f82610fd157610fd1610faf565b500490565b818103818111156107e1576107e1610f59565b5f82610ff757610ff7610faf565b500690565b6001600160c01b0381811683821601908082111561101c5761101c610f59565b5092915050565b604081525f83518060408401525f5b8181101561104f5760208187018101516060868401015201611032565b505f606082850101526060601f19601f830116840101915050826020830152939250505056fea2646970667358221220ee8614ce823b5d577454d4da1ec4269b762671155c4a314b29c64d87496e406964736f6c63430008150033";

type MatrixPayoutConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MatrixPayoutConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MatrixPayout__factory extends ContractFactory {
  constructor(...args: MatrixPayoutConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MatrixPayout> {
    return super.deploy(overrides || {}) as Promise<MatrixPayout>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MatrixPayout {
    return super.attach(address) as MatrixPayout;
  }
  override connect(signer: Signer): MatrixPayout__factory {
    return super.connect(signer) as MatrixPayout__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MatrixPayoutInterface {
    return new utils.Interface(_abi) as MatrixPayoutInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MatrixPayout {
    return new Contract(address, _abi, signerOrProvider) as MatrixPayout;
  }
}