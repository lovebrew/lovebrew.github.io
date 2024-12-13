# Debugging with GDB

## Nintendo 3DS

To debug crashes in LÖVE Potion, you'll need to use `gdb` in combination with the Rosalina menu. Follow these steps to set up the debugger:

### Step 1: Set Up the Rosalina Debugger
1. Open the Rosalina Menu on the console and navigate to `Debugger Options`.
2. Enable the Debugger and make note of the IP address for the system.
3. Enable the option `Force-debug next application at launch`.
4. Once these changes are made, exit the Rosalina menu completely.

### Step 2: Prepare for Debugging
1. Navigate the terminal to the working directory to where the compiled LÖVE Potion ELF binary is located. This is essential for loading the correct debug symbols.
```bash
cd path/to/build/directory
```

### Step 3: Start gdb
1. Run `gdb` by entering the following command in the terminal:
```bash
/opt/devkitpro/devkitARM/bin/arm-none-eabi-gdb
```
2. Once `gdb` starts, load the ELF binary for LÖVE Potion by running:
```bash
file lovepotion.elf
```

### Step 4: Connect to the Console
1. Connect `gdb` to the console by running:
```bash
target remote {ip}:4003
```

Replace `{ip}` with the IP address from earlier (e.g., `target remote 192.168.3.30:4003`).

2. After confirming the connection is established, run LÖVE Potion.

### Step 5: Start Debugging
1. In the `gdb` terminal, type the following to continue execution:
```bash
continue
```

2. When the program hits an interrupt (e.g., a segfault), gdb will pause execution. At this point, type the following command to generate a backtrace:
```bash
backtrace
```

3. `gdb` will output the backtrace in the terminal, showing you the stack frames leading to the crash. This information will help you diagnose the issue and identify the exact location in the code where the crash occurred.

## Nintendo Switch

### Step 1: Set Up atmosphère

1. On the microSD card, create a file (or if it exists, modify it) called `system_settings.ini` under the `/atmosphere/config` directory. Add the following to the config file:
```ini
[atmosphere]
enable_htc = u8!0x0
enable_standalone_gdbstub = u8!0x1
```

2. Reboot the console for this to take affect.

### Step 2: Prepare for Debugging
1. Navigate the terminal to the working directory to where the compiled LÖVE Potion ELF binary is located. This is essential for loading the correct debug symbols.
```bash
cd path/to/build/directory
```

### Step 3: Start gdb
1. Run `gdb` by entering the following command in the terminal:
```bash
/opt/devkitpro/devkitA64/bin/aarch64-none-elf-gdb
```

### Step 4: Connect to the Console
1. Connect `gdb` to the console by running:
```bash
target extended-remote {ip}:22225
```

Replace `{ip}` with the IP address of the console (e.g., `target remote 192.168.3.30:22225`).

2. Find the hbloader process via `info os processes`.
3. Attach to the process id found from the previous step.
4. Run `continue` as attaching to the running process will pause.

### Step 5: Start Debugging
1. Run the LÖVE Potion binary on console.
2. Load the ELF binary for LÖVE Potion by running:
```bash
share .
```
3. Continue execution of the application with `continue`.
4. When the program hits an interrupt (e.g., a segfault), gdb will pause execution. At this point, type the following command to generate a backtrace:
```bash
backtrace
```
5. `gdb` will output the backtrace in the terminal, showing you the stack frames leading to the crash. This information will help you diagnose the issue and identify the exact location in the code where the crash occurred.

## Useful GDB Commands

| **Command**         | **Purpose**                                                       | **Use**                                                        | **Why it's helpful**                                                                 |
|---------------------|-------------------------------------------------------------------|----------------------------------------------------------------|--------------------------------------------------------------------------------------|
| `backtrace` (or `bt`) | Displays the call stack (function calls leading to the crash)     | `backtrace` or `bt`                                            | Shows the sequence of function calls that led to the crash, helping to pinpoint the issue. |
| `bt full`            | Displays the call stack along with local variables in each frame  | `bt full`                                                      | Provides additional context by showing the local variables in each stack frame, aiding deeper diagnosis. |
| `continue` (or `c`)   | Resumes the program’s execution after a breakpoint or interrupt    | `continue` or `c`                                              | Continues program execution until it encounters another breakpoint or crash.         |
| `list`               | Displays the source code around the current line or function      | `list`                                                         | Useful for viewing the code at the current location of the crash.                    |
| `info locals`        | Shows local variables in the current function                     | `info locals`                                                  | Allows inspection of local variables to identify issues with the function’s state.   |
| `info registers`     | Displays the current state of CPU registers                       | `info registers`                                               | Provides insight into the CPU state at the time of the crash.                        |
| `frame`              | Switches to a specific stack frame                                | `frame <frame-number>`                                         | Lets you navigate through the call stack to inspect individual function calls.       |
| `print`              | Prints the value of a variable or expression                      | `print <variable-name>` or `print <expression>`                | Helps to inspect the value of variables or evaluate expressions during debugging.    |
| `quit`               | Exits the `gdb` session                                           | `quit`                                                         | Cleanly exits the `gdb` session after finishing the debugging process.              |
| `break` (or `b`)     | Sets a breakpoint at a specific line or function                  | `break <function-name>` or `break <file-name>:<line-number>`    | Stops execution at specific points in the code to inspect behavior or crashes.       |
| `step` (or `s`)      | Steps into the next function call or line of code                  | `step` or `s`                                                  | Steps into function calls to inspect their behavior during execution.               |
| `next` (or `n`)      | Steps over the next function call (executes it without stepping in) | `next` or `n`                                                  | Skips over function calls, useful for moving through code without diving into functions. |
