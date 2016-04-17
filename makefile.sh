#!/bin/bash

echo "Building app - START"

if "$1" = "first"
then
  sudo npm -g install sails
else
  echo "Sails already installed"
fi
npm install
cp config/connections.default.js config/connections.js
sails lift

