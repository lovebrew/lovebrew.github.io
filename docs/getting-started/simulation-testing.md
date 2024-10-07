---
hide_title: true
---

# Simulation Testing

:::info

While simulation testing does provide the benefit of testing games without hardware, it is still highly recommended to test everything on-device.

:::

## Overview

Simulation testing with LÖVE Potion provides a convenient method for developers to test games without physical hardware. This approach leverages the LÖVE framework and the [nëst library](https://github.com/lovebrew/nest) to [simulate](https://stackoverflow.com/questions/1584617/simulator-or-emulator-what-is-the-difference) console-specific features.

For more console-specific considerations and compatibility details, [refer to the 'Compatibility' section](/docs/compatibility/general.md).

## Using LÖVE and nëst for Testing

LÖVE Potion supports API compatibility with LÖVE (currently 12.0), allowing developers to use LÖVE itself for testing their games. Additionally, the nëst library enhances testing by adjusting window sizing to match console displays and simulating touchscreen functionality. Certain console-specific functionality is also provided.
