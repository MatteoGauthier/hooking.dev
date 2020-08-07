---
date: "2020-08-07"
name: "useBoolean"
stars: 128
description: "Methods to control a boolean state"
source: "https://github.com/ecomfe/react-hooks/tree/master/packages/boolean"
---

# @huse/boolean

Control `boolean` state

## Installation

`yarn add @huse/boolean`

## useBoolean

```jsx
import {useBoolean} from '@huse/boolean';

const [value, {on, off, toggle}] = useBoolean(true);

on(); // set value to true
off(); // set value to false
toggle(); // revert value
```
