#!/bin/bash

JSTMP="
import React from 'react';
import './style.css';



export default class $1 extends React.Component {


  render() { 
    return ();
  }
}"

mkdir src/components/$1 &&
touch src/components/$1/index.js && touch src/components/$1/style.css &&
echo "$JSTMP" >> ./src/components/$1/index.js