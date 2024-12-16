sf
==

SFDX wrapper

<!-- [![Version](https://img.shields.io/npm/v/sf.svg)](https://npmjs.org/package/sf) -->
[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/matiasdelgado/sf-cli/tree/master.svg?style=shield)](https://circleci.com/gh/matiasdelgado/sf-cli/tree/master)
[![License](https://img.shields.io/npm/l/sf.svg)](https://github.com/matiasdelgado/sf-cli/blob/master/LICENSE)

<!-- toc -->
* [Installation](#installation)
* [Commands](#commands)
<!-- tocstop -->

# Installation
Make sure [Salesforce DX CLI](https://developer.salesforce.com/tools/sfdxcli) is installed in your system.
```
brew tap matiasdelgado/sf-cli
brew install sf-cli
```

# Commands
<!-- commands -->
* [`sf `](#sf-)
* [`sf autocomplete [SHELL]`](#sf-autocomplete-shell)
* [`sf code`](#sf-code)
* [`sf delete`](#sf-delete)
* [`sf help [COMMAND]`](#sf-help-command)
* [`sf info`](#sf-info)
* [`sf list`](#sf-list)
* [`sf log`](#sf-log)
* [`sf open`](#sf-open)
* [`sf switch`](#sf-switch)
* [`sf test`](#sf-test)

## `sf autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ sf autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ sf autocomplete
  $ sf autocomplete bash
  $ sf autocomplete zsh
  $ sf autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.1.5/src/commands/autocomplete/index.ts)_

## `sf code`

Push/pull source code

```
USAGE
  $ sf code

OPTIONS
  -l, --pull  Pull from scratch org
  -p, --push  Push to scratch org
```

_See code: [src/commands/code.js](https://github.com/matiasdelgado/sf-cli/blob/v3.1.0/src/commands/code.js)_

## `sf delete`

Delete scratch org

```
USAGE
  $ sf delete

OPTIONS
  -s, --select  Select scratch org to delete
```

_See code: [src/commands/delete.js](https://github.com/matiasdelgado/sf-cli/blob/v3.1.0/src/commands/delete.js)_

## `sf help [COMMAND]`

display help for sf

```
USAGE
  $ sf help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `sf info`

Display current scratch org information

```
USAGE
  $ sf info

OPTIONS
  -a, --alias=alias  Alias or username
  -m, --markdown     Generates MD code
```

_See code: [src/commands/info.js](https://github.com/matiasdelgado/sf-cli/blob/v3.1.0/src/commands/info.js)_

## `sf list`

List all available scratch orgs.

```
USAGE
  $ sf list
```

_See code: [src/commands/list.js](https://github.com/matiasdelgado/sf-cli/blob/v3.1.0/src/commands/list.js)_

## `sf log`

Show remote logs

```
USAGE
  $ sf log

OPTIONS
  -d, --debug  Show debug messages only
```

_See code: [src/commands/log.js](https://github.com/matiasdelgado/sf-cli/blob/v3.1.0/src/commands/log.js)_

## `sf open`

Open the default scratch org in the browser or by picking from the list of available orgs.

```
USAGE
  $ sf open

OPTIONS
  -s, --select  Select scratch org to open
```

_See code: [src/commands/open.js](https://github.com/matiasdelgado/sf-cli/blob/v3.1.0/src/commands/open.js)_

## `sf switch`

Change the default scratch org

```
USAGE
  $ sf switch

OPTIONS
  -o, --open  Open the scratch org in the browser
```

_See code: [src/commands/switch.js](https://github.com/matiasdelgado/sf-cli/blob/v3.1.0/src/commands/switch.js)_

## `sf test`

Run tests by class or method name

```
USAGE
  $ sf test

OPTIONS
  -s, --subject=subject  Run method or class test
```

_See code: [src/commands/test.js](https://github.com/matiasdelgado/sf-cli/blob/v3.1.0/src/commands/test.js)_
<!-- commandsstop -->
