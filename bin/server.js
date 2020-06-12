#!/usr/bin/env node
const path = require('path');
const next = require('next/dist/cli/next-start.js')
const appDirectory = path.resolve(__dirname, '../')

process.env.NODE_ENV = 'production';

next.nextStart([appDirectory]);