# love.thread

<b><i>
Allows you to work with threads.

Threads are separate Lua environments, running in parallel to the main code.
As their code runs separately, they can be used to compute complex operations without adversely affecting the frame rate of the main thread. However, as they are separate environments, they cannot access the variables and functions of the main thread, and communication between threads is limited.

All LÖVE objects (userdata) are shared among threads so you'll only have to send their references across threads. You may run into concurrency issues if you manipulate an object on multiple threads at the same time.

When a Thread is started, it only loads love.data, love.filesystem, and love.thread module. Every other module has to be loaded with require.
<b></i>

## Functions

| Name                                                         | Description                                                                         |
|--------------------------------------------------------------|-------------------------------------------------------------------------------------|
| [newThread](https://love2d.org/wiki/love.thread.newThread)   | Creates a new Thread from a filename, string or FileData object containing Lua code |
| [newChannel](https://love2d.org/wiki/love.thread.newChannel) | Creates a new unnamed thread channel                                                |
| [getChannel](https://love2d.org/wiki/love.thread.getChannel) | Creates or retrieves a named thread channel                                         |

## Types

### Thread

<b><i>
A Thread is a chunk of code that can run in parallel with other threads. Data can be sent between different threads with Channel objects
</b></i>

See also:
* [Object](api/love?id=Object)
* [love.thread.newThread](https://love2d.org/wiki/love.thread.newThread)

| Name                                                  | Description                                     |
|-------------------------------------------------------|-------------------------------------------------|
| [start](https://love2d.org/wiki/Thread:start)         | Starts the thread                               |
| [wait](https://love2d.org/wiki/Thread:wait)           | Wait for a thread to finish                     |
| [getError](https://love2d.org/wiki/Thread:getError)   | Retrieves the error string from the thread      |
| [isRunning](https://love2d.org/wiki/Thread:isRunning) | Returns whether the thread is currently running |

### Channel

<b><i>
An object which can be used to send and receive data between different threads.
</b></i>

See also:
* [Object](api/love?id=Object)
* [love.thread.newChannel](https://love2d.org/wiki/love.thread.newChannel)

| Name                                                           | Description                                                                       |
|----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [push](https://love2d.org/wiki/Channel:push)                   | Send a message to a thread Channel                                                |
| [supply](https://love2d.org/wiki/Channel:supply)               | Send a message to a thread Channel and wait for a thread to accept it             |
| [pop](https://love2d.org/wiki/Channel:pop)                     | Retrieve the value of a Channel message                                           |
| [demand](https://love2d.org/wiki/Channel:demand)               | Wait for and retrieve the value of a Channel message                              |
| [peek](https://love2d.org/wiki/Channel:peek)                   | Receive a message from a thread Channel, but leave it in the queue                |
| [getCount](https://love2d.org/wiki/Channel:getCount)           | Retrieves the number of messages in the Channel queue                             |
| [hasRead](https://love2d.org/wiki/Channel:hasRead)             | Gets whether a pushed value has been popped or otherwise removed from the Channel |
| [clear](https://love2d.org/wiki/Channel:clear)                 | Clears all the messages in the Channel queue                                      |
| [performAtomic](https://love2d.org/wiki/Channel:performAtomic) | Executes the specified function atomically with respect to this Channel           |
