#!/usr/bin/env node

"use strict";
var path = require('path');
var fs = require('fs');
var lib = path.join(path.dirname(fs.realpathSync(__filename)), '../dist');

require(lib+'/cli.js').init();
