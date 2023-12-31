/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        inputs: [],
        name: "AlreadyEndorsedWeek",
        type: "error",
    },
    {
        inputs: [],
        name: "CallerNotGCA",
        type: "error",
    },
    {
        inputs: [],
        name: "CallerNotGCC",
        type: "error",
    },
    {
        inputs: [],
        name: "CallerNotVetoCouncilMember",
        type: "error",
    },
    {
        inputs: [],
        name: "ContractsAlreadySet",
        type: "error",
    },
    {
        inputs: [],
        name: "GCAContractAlreadySet",
        type: "error",
    },
    {
        inputs: [],
        name: "GCACouncilElectionsCannotBeVetoed",
        type: "error",
    },
    {
        inputs: [],
        name: "InsufficientNominations",
        type: "error",
    },
    {
        inputs: [],
        name: "InsufficientRatifyOrRejectVotes",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidSpendNominationsOnProposalSignature",
        type: "error",
    },
    {
        inputs: [],
        name: "MaxGCAEndorsementsReached",
        type: "error",
    },
    {
        inputs: [],
        name: "MaxSlashesInGCAElection",
        type: "error",
    },
    {
        inputs: [],
        name: "MaximumNumberOfGCAS",
        type: "error",
    },
    {
        inputs: [],
        name: "MostPopularProposalNotSelected",
        type: "error",
    },
    {
        inputs: [],
        name: "NominationCostGreaterThanAllowance",
        type: "error",
    },
    {
        inputs: [],
        name: "OnlyGCAElectionsCanBeEndorsed",
        type: "error",
    },
    {
        inputs: [],
        name: "ProposalAlreadyExecuted",
        type: "error",
    },
    {
        inputs: [],
        name: "ProposalAlreadyVetoed",
        type: "error",
    },
    {
        inputs: [],
        name: "ProposalDoesNotExist",
        type: "error",
    },
    {
        inputs: [],
        name: "ProposalExpired",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
        ],
        name: "ProposalHasNotExpired",
        type: "error",
    },
    {
        inputs: [],
        name: "ProposalIdDoesNotMatchMostPopularProposal",
        type: "error",
    },
    {
        inputs: [],
        name: "ProposalIsVetoed",
        type: "error",
    },
    {
        inputs: [],
        name: "ProposalNotInitialized",
        type: "error",
    },
    {
        inputs: [],
        name: "ProposalNotMostPopular",
        type: "error",
    },
    {
        inputs: [],
        name: "ProposalsMustBeExecutedSynchonously",
        type: "error",
    },
    {
        inputs: [],
        name: "RFCPeriodNotEnded",
        type: "error",
    },
    {
        inputs: [],
        name: "RatifyOrRejectPeriodEnded",
        type: "error",
    },
    {
        inputs: [],
        name: "RatifyOrRejectPeriodNotEnded",
        type: "error",
    },
    {
        inputs: [],
        name: "SpendNominationsOnProposalSignatureExpired",
        type: "error",
    },
    {
        inputs: [],
        name: "VetoCouncilElectionsCannotBeVetoed",
        type: "error",
    },
    {
        inputs: [],
        name: "VetoCouncilProposalCreationOldMemberCannotEqualNewMember",
        type: "error",
    },
    {
        inputs: [],
        name: "VetoMemberCannotBeNullAddress",
        type: "error",
    },
    {
        inputs: [],
        name: "WeekMustHaveEndedToAcceptRatifyOrRejectVotes",
        type: "error",
    },
    {
        inputs: [],
        name: "WeekNotFinalized",
        type: "error",
    },
    {
        inputs: [],
        name: "WeekNotStarted",
        type: "error",
    },
    {
        inputs: [],
        name: "ZeroAddressNotAllowed",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "proposer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "requirementsHash",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "nominationsUsed",
                type: "uint256",
            },
        ],
        name: "ChangeGCARequirementsProposalCreation",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "proposer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address[]",
                name: "agentsToSlash",
                type: "address[]",
            },
            {
                indexed: false,
                internalType: "address[]",
                name: "newGCAs",
                type: "address[]",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "proposalCreationTimestamp",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "nominationsUsed",
                type: "uint256",
            },
        ],
        name: "GCACouncilElectionOrSlashCreation",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "proposer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "nominationsUsed",
                type: "uint256",
            },
        ],
        name: "GrantsProposalCreation",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "weekId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
        ],
        name: "MostPopularProposalSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
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
        name: "NominationsUsedOnProposal",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "week",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "enum IGovernance.ProposalType",
                name: "proposalType",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "success",
                type: "bool",
            },
        ],
        name: "ProposalExecution",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "weekId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "vetoer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
        ],
        name: "ProposalVetoed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "proposer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "rfcHash",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "nominationsUsed",
                type: "uint256",
            },
        ],
        name: "RFCProposalCreation",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "requirementsHash",
                type: "bytes32",
            },
        ],
        name: "RFCProposalExecuted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "voter",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "numVotes",
                type: "uint256",
            },
        ],
        name: "RatifyCast",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "voter",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "numVotes",
                type: "uint256",
            },
        ],
        name: "RejectCast",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "proposer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "oldAgent",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAgent",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "slashOldAgent",
                type: "bool",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "nominationsUsed",
                type: "uint256",
            },
        ],
        name: "VetoCouncilElectionOrSlash",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "weekId",
                type: "uint256",
            },
        ],
        name: "endorseGCAProposal",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "weekId",
                type: "uint256",
            },
        ],
        name: "executeProposalAtWeek",
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
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "grantNominations",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "syncProposals",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
export class IGovernance__factory {
    static abi = _abi;
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
//# sourceMappingURL=IGovernance__factory.js.map