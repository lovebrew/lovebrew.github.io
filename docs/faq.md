---
hide_title: true
---

# Frequently Asked Questions

### Can I run my LÖVE game?

LÖVE Potion is designed to be API compatible with the LÖVE framework, so in most cases, yes, you can run your LÖVE game using LÖVE Potion. However, it's important to note that there are minor differences between LÖVE Potion and the standard LÖVE framework. These differences are detailed and addressed within the ['Compatibility'](/docs/compatibility/general.md) category of our documentation.

### Can I run my game via emulation?

No, running LÖVE Potion through emulation is not recommended or supported. Emulation can introduce reliability issues that may affect the performance and behavior of the application, as it is designed to run optimally on real hardware environments. For accurate testing and usage, it is strongly advised to use physical device platforms such as Nintendo 3DS, Switch, or Wii U. If you do not have access to hardware, consider seeking assistance from a friend who does.

### Are _installable_ versions of my game possible?

No, creating an "installable" version of your game (e.g. CIA or NSP) is not supported with LÖVE Potion. The permissions required to run homebrew applications via the Homebrew Menu on both Nintendo 3DS and Switch are sufficient. Installing games through other means is not endorsed, as it may involve tools associated with piracy. Additionally, there are no valid justifications for having installable games, including claims of convenience on the home menu.

### Do I need to build LÖVE Potion from source?

No, you do not need to build the project from source manually. We provide a bundler service specifically designed to address this issue. The Bundler automatically integrates your game into the executable, allowing it to be runnable without requiring a separate game directory. For more details about how the Bundler works and its benefits, please visit [its respective page](/docs/bundler/overview.md).

### Are shaders supported?

No, shaders are not supported in LÖVE Potion due to their complexity and the requirement for pre-compilation into specific formats. On Nintendo 3DS, users would need to learn how to use the picasso shader assembly language, which is more intricate compared to using GLSL (OpenGL Shading Language).

### Could I get my game officially licensed by Nintendo?

No, games created with LÖVE Potion cannot be officially licensed by Nintendo. LÖVE Potion utilizes homebrew tools, which Nintendo does not endorse for official licensing. If you are interested in obtaining official licensing for your game, you would need to sign up for the Nintendo Developer Program. However, this process involves waiving rights to homebrew-related work and signing a Non-Disclosure Agreement (NDA) for the tools provided by Nintendo, which can introduce legal complexities.
