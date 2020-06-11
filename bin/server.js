#!/usr/bin/env node
process.env.NODE_ENV = 'production';

const next = require('next/dist/cli/next-start')

next.nextStart();
