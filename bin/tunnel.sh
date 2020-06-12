#!/bin/sh

# shellcheck disable=SC2124
SERVER="$@"

# shellcheck disable=SC2039
if [[ -z "${PORT}" ]]; then
  SERVER_PORT=3322
else
  SERVER_PORT="${PORT}"
fi

echo "\033[0;32m";
echo ""
echo "################################################"
echo "## Welcome to Macron Tunnel  -  SSH companion ##"
echo "################################################"

echo "\033[0;33m";
echo "Forwarding the local port: $SERVER_PORT to the remote port of: $SERVER_PORT."
echo "GUI can be accessed on http://localhost:$SERVER_PORT"
echo ""
if [ "$SERVER_PORT" == 3322 ]; then
echo "If you want to change the port, define the PORT variable first e.g. PORT=9000 macrontunnel"
echo ""
fi
echo "Remember to run 'macron' from the correct SSH user!"
echo "\033[0m";
COMMAND="ssh -L $SERVER_PORT:localhost:$SERVER_PORT $SERVER"

echo "$COMMAND"
echo ""

$COMMAND
