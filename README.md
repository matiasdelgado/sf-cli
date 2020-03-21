sf
==

SFDX wrapper

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/sf.svg)](https://npmjs.org/package/sf)
[![CircleCI](https://circleci.com/gh/matiasdelgado/sf-cli/tree/master.svg?style=shield)](https://circleci.com/gh/matiasdelgado/sf-cli/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/sf.svg)](https://npmjs.org/package/sf)
[![License](https://img.shields.io/npm/l/sf.svg)](https://github.com/matiasdelgado/sf-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g sf
$ sf COMMAND
running command...
$ sf (-v|--version|version)
sf/0.0.0 darwin-x64 node-v10.13.0
$ sf --help [COMMAND]
USAGE
  $ sf COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`sf help [COMMAND]`](#sf-help-command)
* [`sf info`](#sf-info)
* [`sf log`](#sf-log)
* [`sf open`](#sf-open)
* [`sf switch`](#sf-switch)
* [`sf test`](#sf-test)

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

Display current scratch org url

```
USAGE
  $ sf info

OPTIONS
  -m, --markdown  Generates MD code
```

_See code: [src/commands/info.js](https://github.com/matiasdelgado/sf-cli/blob/v0.0.0/src/commands/info.js)_

## `sf log`

Describe the command here

```
USAGE
  $ sf log

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/log.js](https://github.com/matiasdelgado/sf-cli/blob/v0.0.0/src/commands/log.js)_

## `sf open`

Open a scratch org in the browser by username or by picking from the list of available orgs.

```
USAGE
  $ sf open

OPTIONS
  -d, --defaultOrg  Open default org
```

_See code: [src/commands/open.js](https://github.com/matiasdelgado/sf-cli/blob/v0.0.0/src/commands/open.js)_

## `sf switch`

Change the default scratch org

```
USAGE
  $ sf switch

OPTIONS
  -o, --open  Open the scratch org in the browser
```

_See code: [src/commands/switch.js](https://github.com/matiasdelgado/sf-cli/blob/v0.0.0/src/commands/switch.js)_

## `sf test`

Run tests by class or method name

```
USAGE
  $ sf test

OPTIONS
  -c, --classname=classname  Run tests in class
  -m, --method=method        Run test by method name
```

_See code: [src/commands/test.js](https://github.com/matiasdelgado/sf-cli/blob/v0.0.0/src/commands/test.js)_
<!-- commandsstop -->
