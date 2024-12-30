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
* [`sf autocomplete [SHELL]`](#sf-autocomplete-shell)
* [`sf code`](#sf-code)
* [`sf delete`](#sf-delete)
* [`sf deploy`](#sf-deploy)
* [`sf help [COMMAND]`](#sf-help-command)
* [`sf info`](#sf-info)
* [`sf list`](#sf-list)
* [`sf log`](#sf-log)
* [`sf login`](#sf-login)
* [`sf logout`](#sf-logout)
* [`sf open`](#sf-open)
* [`sf pull`](#sf-pull)
* [`sf switch [ALIAS]`](#sf-switch-alias)
* [`sf test [SUBJECT]`](#sf-test-subject)
* [`sf version`](#sf-version)

## `sf autocomplete [SHELL]`

Display autocomplete installation instructions.

```
USAGE
  $ sf autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  (zsh|bash|powershell) Shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  Display autocomplete installation instructions.

EXAMPLES
  $ sf autocomplete

  $ sf autocomplete bash

  $ sf autocomplete zsh

  $ sf autocomplete powershell

  $ sf autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v3.2.14/src/commands/autocomplete/index.ts)_

## `sf code`

Push/pull source code

```
USAGE
  $ sf code [-l] [-p]

FLAGS
  -l, --pull  Pull from scratch org
  -p, --push  Push to scratch org

DESCRIPTION
  Push/pull source code
```

_See code: [src/commands/code.js](https://github.com/matiasdelgado/sf-cli/blob/v3.2.0/src/commands/code.js)_

## `sf delete`

Delete scratch org

```
USAGE
  $ sf delete [-s]

FLAGS
  -s, --select  Select scratch org to delete

DESCRIPTION
  Delete scratch org
```

_See code: [src/commands/delete.js](https://github.com/matiasdelgado/sf-cli/blob/v3.2.0/src/commands/delete.js)_

## `sf deploy`

Push source code

```
USAGE
  $ sf deploy

DESCRIPTION
  Push source code
```

_See code: [src/commands/deploy.js](https://github.com/matiasdelgado/sf-cli/blob/v3.2.0/src/commands/deploy.js)_

## `sf help [COMMAND]`

Display help for sf.

```
USAGE
  $ sf help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for sf.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.19/src/commands/help.ts)_

## `sf info`

Display current scratch org information

```
USAGE
  $ sf info [-a <value>] [-m]

FLAGS
  -a, --alias=<value>  Alias or username
  -m, --markdown       Generates MD code

DESCRIPTION
  Display current scratch org information
```

_See code: [src/commands/info.js](https://github.com/matiasdelgado/sf-cli/blob/v3.2.0/src/commands/info.js)_

## `sf list`

List all available scratch orgs.

```
USAGE
  $ sf list

DESCRIPTION
  List all available scratch orgs.
```

_See code: [src/commands/list.js](https://github.com/matiasdelgado/sf-cli/blob/v3.2.0/src/commands/list.js)_

## `sf log`

Show remote logs

```
USAGE
  $ sf log [-d]

FLAGS
  -d, --debug  Show debug messages only

DESCRIPTION
  Show remote logs
```

_See code: [src/commands/log.js](https://github.com/matiasdelgado/sf-cli/blob/v3.2.0/src/commands/log.js)_

## `sf login`

Log in to scratch org

```
USAGE
  $ sf login -a <value> -u <value>

FLAGS
  -a, --alias=<value>  (required) Alias or username
  -u, --url=<value>    (required) Instance URL

DESCRIPTION
  Log in to scratch org
```

_See code: [src/commands/login.js](https://github.com/matiasdelgado/sf-cli/blob/v3.2.0/src/commands/login.js)_

## `sf logout`

Log out from scratch org

```
USAGE
  $ sf logout -a <value>

FLAGS
  -a, --alias=<value>  (required) Alias or username

DESCRIPTION
  Log out from scratch org
```

_See code: [src/commands/logout.js](https://github.com/matiasdelgado/sf-cli/blob/v3.2.0/src/commands/logout.js)_

## `sf open`

Open the default scratch org in the browser or by picking from the list of available orgs.

```
USAGE
  $ sf open [-a <value>] [-s]

FLAGS
  -a, --alias=<value>  Alias or username of the org to open
  -s, --select         Select scratch org to open

DESCRIPTION
  Open the default scratch org in the browser or by picking from the list of available orgs.
```

_See code: [src/commands/open.js](https://github.com/matiasdelgado/sf-cli/blob/v3.2.0/src/commands/open.js)_

## `sf pull`

Pull source code

```
USAGE
  $ sf pull

DESCRIPTION
  Pull source code
```

_See code: [src/commands/pull.js](https://github.com/matiasdelgado/sf-cli/blob/v3.2.0/src/commands/pull.js)_

## `sf switch [ALIAS]`

Change the default scratch org

```
USAGE
  $ sf switch [ALIAS] [-o]

FLAGS
  -o, --open  Open the scratch org in the browser

DESCRIPTION
  Change the default scratch org
```

_See code: [src/commands/switch.js](https://github.com/matiasdelgado/sf-cli/blob/v3.2.0/src/commands/switch.js)_

## `sf test [SUBJECT]`

Run tests by class or method name

```
USAGE
  $ sf test [SUBJECT]

DESCRIPTION
  Run tests by class or method name
```

_See code: [src/commands/test.js](https://github.com/matiasdelgado/sf-cli/blob/v3.2.0/src/commands/test.js)_

## `sf version`

```
USAGE
  $ sf version [--json] [--verbose]

FLAGS
  --verbose  Show additional information about the CLI.

GLOBAL FLAGS
  --json  Format output as json.

FLAG DESCRIPTIONS
  --verbose  Show additional information about the CLI.

    Additionally shows the architecture, node version, operating system, and versions of plugins that the CLI is using.
```

_See code: [@oclif/plugin-version](https://github.com/oclif/plugin-version/blob/v2.2.18/src/commands/version.ts)_
<!-- commandsstop -->
