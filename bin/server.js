#!/usr/bin/env node
const path = require('path');
const next = require('next/dist/cli/next-start.js')
const appDirectory = path.resolve(__dirname, '../')
const port = process.env.PORT || 3322;

process.env.NODE_ENV = 'production';

next.nextStart([appDirectory, '--port', port]);
