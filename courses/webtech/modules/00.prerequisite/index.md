---
duration: 1h to 3h
---

# Prerequisites

## HTML, CSS, JavaScript

* **JavaScript** is used to control the behavior of different elements. Learn JavaScript:
  * https://www.codecademy.com/learn/introduction-to-javascript
  * https://openclassrooms.com/en/courses/6175841-apprenez-a-programmer-avec-javascript
* **HTML** provides the basic structure of sites, which is enhanced and modified by other technologies like CSS and JavaScript. Learn HTML:
  * https://www.codecademy.com/learn/learn-html
* **CSS** is used to control presentation, formatting, and layout. Learn CSS:
  * https://www.codecademy.com/learn/learn-css

## Terminal

* Most useful developer tool
* Any number of customizations
* On Windows: Linux Bash Shell, Powershell, Git Bash
* On MacOS / Linux: native

[Bash base commands](https://www.educative.io/blog/bash-shell-command-cheat-sheet)

## Vi(m)

* Bash text editor
* Use `:` to enter command mode
  * `w` to write file
  * `q` to quit
  * `q!` to quit without saving
  * 'x' to write & quit
* Use `/` to search for text
* Use `i` to enter edit mode and `esc` to exit it
* `vimtutor` is the best tutorial to learn

## Client VS Server

* Two parts of a distributed computing model:
  * Client requests the info and displays it
  * Server processes the request and services the result
* We will do server work + a bit of client side

## The IP protocol

* Send data from one computer to another over a network (ex: client/server)
* Use of IPV4 addresses (ex: 172.16.254.1), IPV6 also available but not much used
* Data packaged in IP packets with 2 sections
  * Header: IP version, addresses, TTL, ...
  * Data: the packet's content

## The HTTP protocol

* Application protocol for transmitting hypermedia documents (HTML)
* Two types of messages: *requests* & *responses*
* HTTP message split between *headers* & *body*
* HTTP response always contains
  * the *protocol* (HTTP/1.1)
  * a *status code* (200, 404, ...)
  * a *status text* (page not found)

## SSL/TLS & HTTPS

(Secure Sockets Layer / Transport Layer Security)
* Establish an encrypted link over a network
* Exchange of public & private keys to secure the exchange
  * Server sends SSL certificate + public key
  * Client checks the certificate & answers with an encrypted session key
  * Client & server exchange messages encrypted with the keys to authenticate
* SSL certif has been certified by a renowned authority
* HTTPS: HTTP secured with SSL/TLS

## SSH - Secure shell

* Cryptographic network protocol to operate network services securely over an unsecured network
* Exchange of public & private keys to secure the exchange
  * Client has the private key
  * Server needs to have the associated public key
  * Client & server exchange messages encrypted with the keys to authenticate

## The SFTP protocol

* Send files over SSH
* ex: deploy website to a server
* SFTP apps: FileZilla, Cyberduck, WinSCP, ...

## Git

* Distributed version control
* Users keep entire code & history locally, can make any change without internet
* Users create snapshots of current code (`commit`) associated to a hash code
* Users `push` commited code to the remote git server
* Multiple users can work on the same git project
* When two users modify the same code they have to `merge` the two codes

## Git commands

* `git init`: initialize a git repository
* `git status`: show the current status of the local git repo
* `git clone`: download a repository locally
* `git add [files]`: add the files to the git index
* `git commit -m "[message]"`: create a commit
* `git push -u origin master`: push commits to the distant repo
* `git pull`: pull changes from the distant repo

[Git cheatsheet](https://git-tower.com/blog/git-cheat-sheet/)

## Git platforms / tools

* Hosting:
  * Github.com: free public repository hosting
  * Bitbucket.com: free public / private repository hosting
  * Gitlab: install your own git server anywhere, free public / private hosting

* Use:
  * GitX (Mac) / GitG (Linux)
  * GitHub (Mac/Win/Linux)
  * SourceTree (Mac/Win/Linux)
  * Fork (Mac/Win)
  * GitKraken (Mac/Win/Linux)
  * Your terminal!

## Editors, IDE

As a developer, the terminal being your partner and the editor is your best friend: 

* [Vim](https://www.vim.org/) (Linux, MacOS, Windows)   
  Free, one of the most powerful, many will say the most powerful, single file or project oriented.
* [VsCode](https://code.visualstudio.com/) (Linux, MacOS, Windows)   
  Free most popular editor, most active community and plugins development
* [Atom](https://atom.io/) (Linux, MacOS, Windows)   
  Free project oriented, minimalist and productive UI (my day to day favorit editor), slow and memory hungry
* [Sublime Text](https://www.sublimetext.com/) (Linux, MacOS, Windows)   
  Free, very fast, single file or project oriented
* [BBedit](https://www.barebones.com/products/bbedit/) (MacOS)   
  Free version very powerful, very fast
* [Notepad++](https://notepad-plus-plus.org/) Windows)   
  Free, almost a Windows standard, powerful and fast
* [WebStorm](https://www.jetbrains.com/webstorm/) (Linux, MacOS, Windows)
  Licensed, 30 days trial
* ...

## Unit Testing

* Method to test individual parts of a program to show that each is correct
* Goals:
  * Source of trust
  * Find problems early in the development phase
  * Facilitate refactoring
  * Simplify integration
  * Documentation
* What is not tested is not supported
* Limited, should always be coupled with other tests
* Platforms: [GitHub Actions](https://github.com/features/actions), Jenkins, Circle CI, GitLab pipelines, ...

## Programation paradigms

* "A way of programming"
* Common paradigms:
  * Declarative: the program describes its desired results without explicitly listing commands or steps.
  * Imperative: the control flow is an explicit sequence of commands.
  * Functional: the computation proceeds by function calls, no global state
  * Object-oriented: everything is an object, functions are methods and are executed with the object's context
  * Event-driven: the control flow is triggered and determined by async actions

## StackOverflow

* Huge data source
* Reactive community
* Any subject
* Lots of answered questions (> 1M !)
* Don’t forget the source code !

## JSON

- JSON is a subset of JavaScript, JavaScript is built upon JSON
- Data format

Valid JavaScript:

```js
const user = {
  firstname: 'Lucky',
  lastname: `Luke`,
  "password": "secret",
  age: 42,
  mood: 0.9,
  languages: ['en', ['fr_FR', 'fr_CA'] , , ],
  level: null,
  friends: undefined,
};
```

Valid JSON:

```json
{
  "firstname": "Lucky",
  "lastname": "Luke",
  "password": "secret",
  "age": 42,
  "mood": 0.9,
  "languages": ["en", ["fr_FR", "fr_CA"]],
  "level": null
}
```

## Node.js Installation

* Linux / MacOS, don't use the installer or your package manager.
* We want to be able to switch between multiple Node.js versions.
* We want Node.js to be installed inside your home directory, with an administrative permissions (no `sudo`).
* Use [`n-install`](https://github.com/mklement0/n-install), a variation of [`n`](https://github.com/tj/n).
* Readme the `n-install` readme file (as a rule of thumb, always read the readme), it explains the reasons of using it and list the requirements.


## Learning

* [Kahn academy](https://www.khanacademy.org/)   
  Free, it is a non-profit relying on donations.
* [Codecademy](https://www.codecademy.com)   
  Free with a commercial offering.

## For next week

* Select a teammates to work by groups of 2 and only groups of 2, no exception (beside one if the number of students is odd)
* Create a private Git repository on GitHub and be ready to share the link during the course.
* Gain knowledge in all the prerequisites above:
  * Confortable in JavaScript, CSS, HTML and termain usage.
  * Master the Markdown format, be ready to respect its syntax with care.
  * Basic knowledge in Git, SSH, Vim, networking, HTTP and REST apis.
* Download a Linux VM or setup the computer for dual boot (recommanded with 8GB of RAM).
* Set up the Linux machine including an IDE, Linux tools, ...
* Install Node.js with n-install (`curl -L https://git.io/n-install | bash`, git, gcc and curl must be installed), for those choosing the Windows path, you can stick with the official installer.
* Subscribe to the group repository
