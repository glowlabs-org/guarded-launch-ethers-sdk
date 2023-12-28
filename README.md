# Glow Labs ABIs

This repository contains the addresses and abis related to the glow labs guarded launch.

## Install

`npm install @glowlabs-org/guarded-launch-ethers-sdk`

## Requirements

- Node version >= 16

## Example Usage

```typescript
import { ethers } from "ethers";
import {
  type CarbonCreditDescendingPriceAuction,
  CarbonCreditDescendingPriceAuction__factory,
  type EarlyLiquidity,
  EarlyLiquidity__factory,
  GCCGuardedLaunch__factory,
  type GCCGuardedLaunch,
  GlowGuardedLaunch__factory,
  type Governance,
  Governance__factory,
  type GrantsTreasury,
  GrantsTreasury__factory,
  type ImpactCatalyst,
  ImpactCatalyst__factory,
  type MinerPoolAndGCA,
  MinerPoolAndGCA__factory,
  type SafetyDelay,
  SafetyDelay__factory,
  type USDG,
  USDG__factory,
  type VetoCouncil,
  VetoCouncil__factory,
  addresses,
  GlowGuardedLaunch,
} from "@glowlabs-org/guarded-launch-ethers-sdk";

const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/<INFURA_API_KEY>"
);

const auction: CarbonCreditDescendingPriceAuction =
  CarbonCreditDescendingPriceAuction__factory.connect(
    addresses.auction,
    provider
  );
const earlyLiquidity: EarlyLiquidity = EarlyLiquidity__factory.connect(
  addresses.earlyLiquidity,
  provider
);
const gccGuardedLaunch: GCCGuardedLaunch = GCCGuardedLaunch__factory.connect(
  addresses.gccGuardedLaunch,
  provider
);
const glowGuardedLaunch: GlowGuardedLaunch = GlowGuardedLaunch__factory.connect(
  addresses.glowGuardedLaunch,
  provider
);
const governance: Governance = Governance__factory.connect(
  addresses.governance,
  provider
);
const grantsTreasury: GrantsTreasury = GrantsTreasury__factory.connect(
  addresses.grantsTreasury,
  provider
);
const impactCatalyst: ImpactCatalyst = ImpactCatalyst__factory.connect(
  addresses.impactCatalyst,
  provider
);
const minerPoolAndGCA: MinerPoolAndGCA = MinerPoolAndGCA__factory.connect(
  addresses.minerPoolAndGCA,
  provider
);
const safetyDelay: SafetyDelay = SafetyDelay__factory.connect(
  addresses.safetyDelay,
  provider
);
const usdg: USDG = USDG__factory.connect(addresses.usdg, provider);
const vetoCouncil: VetoCouncil = VetoCouncil__factory.connect(
  addresses.vetoCouncil,
  provider
);

/**
 * Use the typechain bindings to interact with the contracts
 */
```

## Contributions

For contributions, feel free to open a PR or raise an issue.
