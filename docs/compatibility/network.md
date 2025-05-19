# Network Capability

:::info

    lua-enet is not available at this time.

:::

## luasocket

LÖVE Potion includes [luasocket](https://github.com/lunarmodules/luasocket) out of the box, just like standard LÖVE. It provides basic networking capabilities such as TCP and UDP communication. While it's lower-level than some dedicated networking libraries, it's more than sufficient for implementing chat systems, connecting to servers, or building simple multiplayer features. Best of all, luasocket works cross-platform—on consoles, desktop, and mobile—making it ideal for shared networking code across all targets.

For an example of usage, visit [the LÖVE Wiki page](https://love2d.org/wiki/Tutorial:Networking_with_UDP).

## lua-https

[lua-https](https://github.com/love2d/lua-https) provides HTTPS support for LÖVE. It is included by default in LÖVE 12, but not in earlier versions. For LÖVE 11.x and below, users must manually load the shared library to use it. In LÖVE Potion, lua-https comes bundled and works out of the box, relying on curl for HTTPS functionality. This makes it easy to securely fetch online game data like player stats or leaderboards, access web services for cloud saves or authentication, download assets safely over HTTPS, send telemetry or analytics data, and even integrate in-game chat or messaging features through secure web APIs.
