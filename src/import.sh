#!/bin/bash

#-d database
#-c collection

for i in ./*.csv 
do
  mongoimport -d test -c vaccine --type csv --headerline --file $i --upsert
done
