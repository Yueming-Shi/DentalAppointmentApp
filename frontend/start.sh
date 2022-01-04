#!/usr/bin/env bash
echo "Starting frontend..."
cd /services/frontend
nohup node index.js >frontend.log 2>&1 &
tail -f frontend.log
