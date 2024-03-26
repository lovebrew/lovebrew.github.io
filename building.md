?> Please read everything carefully. Follow all necessary links and read those thoroughly. They contain important information.

## Getting Started

In order to start contributing, you will need to follow [the instructions on the devkitPro Wiki](https://devkitpro.org/wiki/Getting_Started) for setting up a development environment. If you have an existing pacman installation (e.g. msys2 or Linux) then [refer to this section on the devkitPro Wiki](https://devkitpro.org/wiki/devkitPro_pacman#Customising_Existing_Pacman_Install)

### Dependencies

Once the environment is set up, open your terminal and sync the package listing:

<!-- tabs:start -->

#### **Windows (msys2)**

```bash
pacman -Syu
```

#### **Unix-like (Linux, macOS)**

```bash
sudo (dkp-)pacman -Syu
```

<!-- tabs:end -->

Once the packages have syncronized, run the following:

<!-- tabs:start -->

#### **Windows (msys2)**

```bash
pacman -S switch-dev 3ds-dev wiiu-dev¹
```

#### **Unix-like (Linux, macOS)**

```bash
sudo (dkp-)pacman -S switch-dev 3ds-dev devkit-env wiiu-dev¹
```

<!-- tabs:end -->

¹This is only applicable to LÖVE Potion 3.x

!> The following information is for development purposes only! Do not build LÖVE Potion directly if you don't understand programming or are not going to contribute. It only leads to [fragmentation](https://en.wikipedia.org/wiki/Market_fragmentation). If you wish to package your game for distribution, please see [Game Distribution](packaging)

Next, clone the repository. If you are contributing code, [please fork and then clone locally](https://help.github.com/articles/fork-a-repo/). Afterwards, using the terminal, change your directory to where LÖVE Potion was cloned:

```bash
cd LovePotion
```

Install the required portlibs:

<!-- tabs:start -->

#### **Windows (msys2)**

```bash
# 3DS
pacman -S --needed - < platform/ctr/pkglist.txt

# Switch
pacman -S --needed - < platform/hac/pkglist.txt

# Wii U
pacman -S --needed - < platform/cafe/pkglist.txt
```

#### **Unix-like (Linux, macOS)**

```bash
# 3DS
sudo (dkp-)pacman -S --needed - < platform/ctr/pkglist.txt

# Switch
sudo (dkp-)pacman -S --needed - < platform/hac/pkglist.txt

# 3DS
sudo (dkp-)pacman -S --needed - < platform/cafe/pkglist.txt
```

<!-- tabs:end -->

Once everything finishes installing, run the following, depending on the console:

- 3DS: /opt/devkitpro/portlibs/3ds/bin/arm-none-eabi-cmake -S . -B build
- Switch: /opt/devkitpro/portlibs/switch/bin/aarch64-none-elf-cmake -S . -B build
- Wii U: /opt/devkitpro/portlibs/wiiu/bin/powerpc-eabi-cmake -S . -B build

## Pull Requests

### Naming

When you open a new [pull request](https://help.github.com/articles/about-pull-requests/), please give it an easy to recognize name such as `fix-filesystem-reading` . This will help track down [when a defect occurs](https://sqa.stackexchange.com/a/20258) in the event of it being merged (after approval) from a future commit.

### Brace Style

Curly braces ({}) should always be [Allman style](https://pbs.twimg.com/media/CXlB_kpVAAA0pDM.png) for consistency. However, if a statement is only a single-line long, please omit the braces:

```cpp
if (something)
    printf("Woah!");
else if (otherThing)
    printf("Amazing!");
else
    printf("Welp");

for (size_t i = 0; i < 10; i++)
    printf("Count is %zu", i);
```

### Variable & Function Names

- Variable names should be in camelCase.
- Class names and their functions should be PascalCase.
  - Examples: `JoystickModule` versus `Channel`.
- Lua wrapper functions should be placed in a respective `Wrap_{type}` namespace.
  - These functions will also be in camelCase.

## Debugging Crashes

If your changes happen to be crashing the console, you can use a few tools to find the backtrace and find where the real problem is.

### brewDebug

One solution is to [use brewDebug](https://github.com/TurtleP/brewDebug) with the PC and LR addresses. It can also use luma3ds and atmosphère logs that are dumped to parse these and find the issue.

You will need to install either the `devkitARM` or `devkitA64` packages from devkitpro-pacman. These will provide special addr2line binaries that work with Nintendo 3DS and Nintendo Switch, respectively. In order for luma3ds logs to be parsed, you will also need the [luma3ds exceptions parser](https://github.com/LumaTeam/luma3ds_exception_dump_parser).

Please follow the readme documentation on the repository for further instructions.

### GDB

There is a special tool called gdb which provides better in-depth analysis of these crashes. It attaches remotely to the console while it is running.

#### Nintendo 3DS

!> You will need to install `devkitARM-gdb` from devkitpro-pacman.

You will have to open the rosalina menu and navigate to `Debugger Options`. Inside this menu, enable the Debugger and make note of the IP address for your system. Next, enable `Force-debug next application at launch`.

Once this is done, close the menu fully and in the terminal, run `/opt/devkitpro/devkitARM/bin/arm-none-eabi-gdb`. This will load the program. Run `file "path/to/ELF.elf"` where the path is to the compiled LÖVE Potion ELF binary. This is so we can have debug symbols loaded in and our backtrace can figure things out.

Execute `target remote {ip}:4003`, where `{ip}` is the console IP address, e.g. `target remote 192.168.3.30:4003`. Once it confirms it has been attached, run LÖVE Potion, then type `continue` and hit enter. Once it hits the interrupt for the segfault, type `bt` and hit enter, it will populate the backtrace in the terminal and you can figure out what went wrong from there.

#### Nintendo Switch

!> You will need to install `devkitA64-gdb` from devkitpro-pacman.

You will need to be running atmosphère 1.2.4 or higher. Create a file (or if it exists, modify it) called `system_settings.ini` under the `/atmosphere/config` config directory. Add the following to the config file:

```ini
[atmosphere]
enable_htc = u8!0x0
enable_standalone_gdbstub = u8!0x1
```

You will need to reboot your console in order for it to take affect.

Once rebooted, title override whatever game you want. In your terminal, run `/opt/devkitpro/devkitA64/bin/aarch64-none-elf-gdb`. You will need to know your console's IP address. It can be found by pressing `y` on the right JoyCon, via the NetLoader functionality of hbmenu.

With the address known, run the following commands:

1. `target extended-remote {ip}:22225`
   - e.g. `target extended-remote 192.168.3.30:22225`
2. `info os processes`
   - Lists the process IDs running on the console, find hbloader
3. `attach {pid}`
   - e.g. `attach 136` -- the pid should be from step #2
4. Execute the LÖVE Potion binary on console

gdb will immediately break once LÖVE Potion is loaded. Run `share {path/to/elf_file}`. The path does not require to be the \*.elf itself. This will load the symbols in and you can debug further. You will want to most likely enter the `continue` command until the app crashes. For more details see [this GitHub gist](https://gist.github.com/nolberto82/2ad4235627b56cae769872e903f7c1b9#appendix), primarily the alternate backtrace located further down, which will be super useful.
