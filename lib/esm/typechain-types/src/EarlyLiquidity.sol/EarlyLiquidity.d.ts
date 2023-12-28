import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface EarlyLiquidityInterface extends utils.Interface {
    functions: {
        "GLOW_TOKEN()": FunctionFragment;
        "HOLDING_CONTRACT()": FunctionFragment;
        "MINER_POOL()": FunctionFragment;
        "MIN_TOKEN_INCREMENT()": FunctionFragment;
        "TOTAL_INCREMENTS_TO_SELL()": FunctionFragment;
        "USDC_DECIMALS()": FunctionFragment;
        "USDC_TOKEN()": FunctionFragment;
        "buy(uint256,uint256)": FunctionFragment;
        "getCurrentPrice()": FunctionFragment;
        "getPrice(uint256)": FunctionFragment;
        "totalSold()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "GLOW_TOKEN" | "HOLDING_CONTRACT" | "MINER_POOL" | "MIN_TOKEN_INCREMENT" | "TOTAL_INCREMENTS_TO_SELL" | "USDC_DECIMALS" | "USDC_TOKEN" | "buy" | "getCurrentPrice" | "getPrice" | "totalSold"): FunctionFragment;
    encodeFunctionData(functionFragment: "GLOW_TOKEN", values?: undefined): string;
    encodeFunctionData(functionFragment: "HOLDING_CONTRACT", values?: undefined): string;
    encodeFunctionData(functionFragment: "MINER_POOL", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_TOKEN_INCREMENT", values?: undefined): string;
    encodeFunctionData(functionFragment: "TOTAL_INCREMENTS_TO_SELL", values?: undefined): string;
    encodeFunctionData(functionFragment: "USDC_DECIMALS", values?: undefined): string;
    encodeFunctionData(functionFragment: "USDC_TOKEN", values?: undefined): string;
    encodeFunctionData(functionFragment: "buy", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCurrentPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPrice", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalSold", values?: undefined): string;
    decodeFunctionResult(functionFragment: "GLOW_TOKEN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "HOLDING_CONTRACT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MINER_POOL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_TOKEN_INCREMENT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "TOTAL_INCREMENTS_TO_SELL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "USDC_DECIMALS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "USDC_TOKEN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSold", data: BytesLike): Result;
    events: {
        "Purchase(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Purchase"): EventFragment;
}
export interface PurchaseEventObject {
    buyer: string;
    glwReceived: BigNumber;
    totalUSDCSpent: BigNumber;
}
export type PurchaseEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], PurchaseEventObject>;
export type PurchaseEventFilter = TypedEventFilter<PurchaseEvent>;
export interface EarlyLiquidity extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EarlyLiquidityInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        GLOW_TOKEN(overrides?: CallOverrides): Promise<[string]>;
        HOLDING_CONTRACT(overrides?: CallOverrides): Promise<[string]>;
        MINER_POOL(overrides?: CallOverrides): Promise<[string]>;
        MIN_TOKEN_INCREMENT(overrides?: CallOverrides): Promise<[BigNumber]>;
        TOTAL_INCREMENTS_TO_SELL(overrides?: CallOverrides): Promise<[BigNumber]>;
        USDC_DECIMALS(overrides?: CallOverrides): Promise<[BigNumber]>;
        USDC_TOKEN(overrides?: CallOverrides): Promise<[string]>;
        buy(increments: BigNumberish, maxCost: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getCurrentPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        getPrice(incrementsToPurchase: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSold(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    GLOW_TOKEN(overrides?: CallOverrides): Promise<string>;
    HOLDING_CONTRACT(overrides?: CallOverrides): Promise<string>;
    MINER_POOL(overrides?: CallOverrides): Promise<string>;
    MIN_TOKEN_INCREMENT(overrides?: CallOverrides): Promise<BigNumber>;
    TOTAL_INCREMENTS_TO_SELL(overrides?: CallOverrides): Promise<BigNumber>;
    USDC_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;
    USDC_TOKEN(overrides?: CallOverrides): Promise<string>;
    buy(increments: BigNumberish, maxCost: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getCurrentPrice(overrides?: CallOverrides): Promise<BigNumber>;
    getPrice(incrementsToPurchase: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    totalSold(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        GLOW_TOKEN(overrides?: CallOverrides): Promise<string>;
        HOLDING_CONTRACT(overrides?: CallOverrides): Promise<string>;
        MINER_POOL(overrides?: CallOverrides): Promise<string>;
        MIN_TOKEN_INCREMENT(overrides?: CallOverrides): Promise<BigNumber>;
        TOTAL_INCREMENTS_TO_SELL(overrides?: CallOverrides): Promise<BigNumber>;
        USDC_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;
        USDC_TOKEN(overrides?: CallOverrides): Promise<string>;
        buy(increments: BigNumberish, maxCost: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getCurrentPrice(overrides?: CallOverrides): Promise<BigNumber>;
        getPrice(incrementsToPurchase: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        totalSold(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Purchase(address,uint256,uint256)"(buyer?: string | null, glwReceived?: null, totalUSDCSpent?: null): PurchaseEventFilter;
        Purchase(buyer?: string | null, glwReceived?: null, totalUSDCSpent?: null): PurchaseEventFilter;
    };
    estimateGas: {
        GLOW_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;
        HOLDING_CONTRACT(overrides?: CallOverrides): Promise<BigNumber>;
        MINER_POOL(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_TOKEN_INCREMENT(overrides?: CallOverrides): Promise<BigNumber>;
        TOTAL_INCREMENTS_TO_SELL(overrides?: CallOverrides): Promise<BigNumber>;
        USDC_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;
        USDC_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;
        buy(increments: BigNumberish, maxCost: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getCurrentPrice(overrides?: CallOverrides): Promise<BigNumber>;
        getPrice(incrementsToPurchase: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        totalSold(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        GLOW_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        HOLDING_CONTRACT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MINER_POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_TOKEN_INCREMENT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        TOTAL_INCREMENTS_TO_SELL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        USDC_DECIMALS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        USDC_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        buy(increments: BigNumberish, maxCost: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getCurrentPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPrice(incrementsToPurchase: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}