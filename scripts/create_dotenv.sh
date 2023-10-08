#!/bin/bash

# Check if exactly three parameters are provided
if [ $# -ne 3 ]; then
    echo "Usage: $0 <NODE_ENV> <MONGO_URI> <PORT>"
    exit 1
fi

# Assign parameters to variables
NODE_ENV=$1
MONGO_URI=$2
PORT=$3

# Write to .env file
echo "NODE_ENV=$NODE_ENV" > .env
echo "MONGO_URI=$MONGO_URI" >> .env
echo "PORT=$PORT" >> .env

echo "Parameters written to .env file:"
# cat .env
