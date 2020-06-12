#!/bin/bash

echo ""
echo "################################################"
echo "## Welcome to Macron Tunnel -  SSH companion ##"
echo "################################################"
echo ""

SERVER="$@"

echo "Forwarding the local port: 9876 to the remote port of: 9876."
echo "GUI can be accessed on http://localhost:9876"
echo ""
echo "Remember to run 'macron' from the correct SSH user!"
echo ""

COMMAND="ssh -L 9876:localhost:9876 $SERVER"

echo $COMMAND
echo ""

$COMMAND
