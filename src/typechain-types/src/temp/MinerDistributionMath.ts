/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export declare namespace MinerDistributionMath {
  export type WeeklyRewardStruct = {
    inheritedFromLastWeek: boolean;
    amountInBucket: BigNumberish;
    amountToDeduct: BigNumberish;
  };

  export type WeeklyRewardStructOutput = [boolean, BigNumber, BigNumber] & {
    inheritedFromLastWeek: boolean;
    amountInBucket: BigNumber;
    amountToDeduct: BigNumber;
  };
}

export interface MinerDistributionMathInterface extends utils.Interface {
  functions: {
    "BUCKET_DURATION()": FunctionFragment;
    "GENESIS_TIMESTAMP()": FunctionFragment;
    "OFFSET_LEFT()": FunctionFragment;
    "OFFSET_RIGHT()": FunctionFragment;
    "TOTAL_VESTING_PERIODS()": FunctionFragment;
    "addToCurrentBucket(uint256)": FunctionFragment;
    "currentBucket()": FunctionFragment;
    "getRewards(uint256,uint256)": FunctionFragment;
    "lastUpdatedBucket()": FunctionFragment;
    "reward(uint256)": FunctionFragment;
    "rewards(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BUCKET_DURATION"
      | "GENESIS_TIMESTAMP"
      | "OFFSET_LEFT"
      | "OFFSET_RIGHT"
      | "TOTAL_VESTING_PERIODS"
      | "addToCurrentBucket"
      | "currentBucket"
      | "getRewards"
      | "lastUpdatedBucket"
      | "reward"
      | "rewards"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BUCKET_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "GENESIS_TIMESTAMP",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "OFFSET_LEFT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "OFFSET_RIGHT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TOTAL_VESTING_PERIODS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addToCurrentBucket",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentBucket",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRewards",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpdatedBucket",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewards",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "BUCKET_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GENESIS_TIMESTAMP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "OFFSET_LEFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "OFFSET_RIGHT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TOTAL_VESTING_PERIODS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addToCurrentBucket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentBucket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getRewards", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdatedBucket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;

  events: {};
}

export interface MinerDistributionMath extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MinerDistributionMathInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BUCKET_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<[BigNumber]>;

    OFFSET_LEFT(overrides?: CallOverrides): Promise<[BigNumber]>;

    OFFSET_RIGHT(overrides?: CallOverrides): Promise<[BigNumber]>;

    TOTAL_VESTING_PERIODS(overrides?: CallOverrides): Promise<[BigNumber]>;

    addToCurrentBucket(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currentBucket(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRewards(
      start: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[MinerDistributionMath.WeeklyRewardStructOutput[]]>;

    lastUpdatedBucket(overrides?: CallOverrides): Promise<[BigNumber]>;

    reward(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[MinerDistributionMath.WeeklyRewardStructOutput]>;

    rewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber] & {
        inheritedFromLastWeek: boolean;
        amountInBucket: BigNumber;
        amountToDeduct: BigNumber;
      }
    >;
  };

  BUCKET_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;

  OFFSET_LEFT(overrides?: CallOverrides): Promise<BigNumber>;

  OFFSET_RIGHT(overrides?: CallOverrides): Promise<BigNumber>;

  TOTAL_VESTING_PERIODS(overrides?: CallOverrides): Promise<BigNumber>;

  addToCurrentBucket(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currentBucket(overrides?: CallOverrides): Promise<BigNumber>;

  getRewards(
    start: BigNumberish,
    end: BigNumberish,
    overrides?: CallOverrides
  ): Promise<MinerDistributionMath.WeeklyRewardStructOutput[]>;

  lastUpdatedBucket(overrides?: CallOverrides): Promise<BigNumber>;

  reward(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<MinerDistributionMath.WeeklyRewardStructOutput>;

  rewards(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber, BigNumber] & {
      inheritedFromLastWeek: boolean;
      amountInBucket: BigNumber;
      amountToDeduct: BigNumber;
    }
  >;

  callStatic: {
    BUCKET_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;

    OFFSET_LEFT(overrides?: CallOverrides): Promise<BigNumber>;

    OFFSET_RIGHT(overrides?: CallOverrides): Promise<BigNumber>;

    TOTAL_VESTING_PERIODS(overrides?: CallOverrides): Promise<BigNumber>;

    addToCurrentBucket(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    currentBucket(overrides?: CallOverrides): Promise<BigNumber>;

    getRewards(
      start: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<MinerDistributionMath.WeeklyRewardStructOutput[]>;

    lastUpdatedBucket(overrides?: CallOverrides): Promise<BigNumber>;

    reward(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<MinerDistributionMath.WeeklyRewardStructOutput>;

    rewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber] & {
        inheritedFromLastWeek: boolean;
        amountInBucket: BigNumber;
        amountToDeduct: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    BUCKET_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;

    OFFSET_LEFT(overrides?: CallOverrides): Promise<BigNumber>;

    OFFSET_RIGHT(overrides?: CallOverrides): Promise<BigNumber>;

    TOTAL_VESTING_PERIODS(overrides?: CallOverrides): Promise<BigNumber>;

    addToCurrentBucket(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currentBucket(overrides?: CallOverrides): Promise<BigNumber>;

    getRewards(
      start: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastUpdatedBucket(overrides?: CallOverrides): Promise<BigNumber>;

    reward(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    rewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BUCKET_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    GENESIS_TIMESTAMP(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    OFFSET_LEFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    OFFSET_RIGHT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TOTAL_VESTING_PERIODS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addToCurrentBucket(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currentBucket(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRewards(
      start: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastUpdatedBucket(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reward(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
