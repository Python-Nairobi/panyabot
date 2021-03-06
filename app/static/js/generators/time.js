/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Python.variables');

goog.require('Blockly.Python');

Blockly.Python['time_delay'] = function(block) {
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_NONE) || '0';
  // delay for the prescribed amount of time
  var code = 'Panya.PanyaDelay('+"\'"+value_time+""+"\')\n";
  if (!Blockly.Python.definitions_['import_panya']) {
  Blockly.Python.definitions_['import_panya'] = 'import panya\nPanya=panya.Panya()';
  }
  return code;
};
