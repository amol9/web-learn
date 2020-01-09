#!/bin/bash

#while true; do echo `./count.sh 10` | nc -l 8000; done
while true; do cat response.http | nc -l 8000 -N; done