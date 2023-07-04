#!/bin/bash

json_data='{
"id": 6,
"title": "Test title new",
"description": "Test description.",
"done": false
}'

curl -i -H "Content-Type: application/json" \
    -X POST -d "$json_data" \
    http://localhost:3000/todos

