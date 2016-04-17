#!/bin/bash

echo "Building app - START"

if [ -n "$1" ];
then  
  if "$1" = "first";
    then
      sudo npm -g install sails
    else
      echo "Sails already installed"
  fi
fi
echo "Instalowanie zaleznosci"
npm install
cp config/connections.default.js config/connections.js
echo "Genereowanie dokumentacji"
grunt jsdoc
echo "Odpalamy"
sails lift

