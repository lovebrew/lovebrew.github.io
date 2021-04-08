?> Please read everything carefully. Follow all necessary links and read those thoroughly. They contain important information.

## Getting Started

In order to start contributing, you will need to follow [the instructions on the devkitPro wiki](https://devkitpro.org/wiki/Getting_Started) for setting up a development environment.

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
pacman -S switch-dev 3ds-dev
```
#### **Unix-like (Linux, macOS)**
```bash
sudo (dkp-)pacman -S switch-dev 3ds-dev devkit-env
```
<!-- tabs:end -->

!> The following information is for development purposes only! Do not build LÖVE Potion directly if you don't understand programming or are not going to contribute. It only leads to [fragmentation](https://en.wikipedia.org/wiki/Market_fragmentation). If you wish to package your game for distribution, please see [Game Distribution](packaging)

Next, clone the repository. If you are contributing code, [please fork and then clone locally](https://help.github.com/articles/fork-a-repo/). Afterwards, using the terminal, change your directory to where LÖVE Potion was cloned:

```bash
cd LovePotion
```

Install the required portlibs:

<!-- tabs:start -->

#### **Windows (msys2)**
```bash
pacman -S --needed - < pkglist.txt
```

#### **Unix-like (Linux, macOS)**
```bash
sudo (dkp-)pacman -S --needed - < pkglist.txt
```
<!-- tabs:end -->

Once everything finishes installing, run `make`. You can specify more jobs to allocate via `make -j{CPU_CORES}` where {CPU_CORES} is the amount of processor cores your CPU has. It is recommended to use MAX_CORES minus one.

## Pull Requests

### Naming

When you open a new [pull request](https://help.github.com/articles/about-pull-requests/), please give it an easy to recognize name such as `fix-filesystem-reading`. This will help track down [when a defect occurs](https://sqa.stackexchange.com/a/20258) in the event of it being merged (after approval) from a future commit.

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

- Variable names should be in camelCase
- Class names should be in Titlecase
    - Functions should be as CamelCase
- Lua wrapper functions should be treated like class Function names
