#!/bin/bash
git fetch origin
git merge
npm install --production
npm start