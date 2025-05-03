const PY = Blockly.Python;
//Pesto Link Controller: Credit Kavin Muralikrishnan FRC Team 5338 Roboloco
Blockly.Python['pestolink_get_controller_left_x'] = function (block) {
  PY.definitions_['import_random']='import random\n ';
  PY.definitions_['import_pestolink']='\nfrom machine import Pin\nimport bluetooth\nfrom pestolink import PestoLinkAgent\n\nletters_passcode="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"\nrobot_name = ("".join(random.choice(letters_passcode) for i in range(5)))\npestolink = PestoLinkAgent(robot_name)\nprint("The name of your robot is " + robot_name)'
  var controller = Blockly.Python.valueToCode(block, 'controller_num', Blockly.Python.ORDER_ATOMIC);
  var code = `pestolink.get_axis(0, ${controller})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pestolink_get_controller_left_y'] = function (block) {
  PY.definitions_['import_random']='import random\n ';
  PY.definitions_['import_pestolink']='\nfrom machine import Pin\nimport bluetooth\nfrom pestolink import PestoLinkAgent\n\nletters_passcode="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"\nrobot_name = ("".join(random.choice(letters_passcode) for i in range(5)))\npestolink = PestoLinkAgent(robot_name)\nprint("The name of your robot is " + robot_name)'
  var controller = Blockly.Python.valueToCode(block, 'controller_num', Blockly.Python.ORDER_ATOMIC);
  var code = `-pestolink.get_axis(1, ${controller})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pestolink_get_controller_right_x'] = function (block) {
  PY.definitions_['import_random']='import random\n ';
  PY.definitions_['import_pestolink']='\nfrom machine import Pin\nimport bluetooth\nfrom pestolink import PestoLinkAgent\n\nletters_passcode="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"\nrobot_name = ("".join(random.choice(letters_passcode) for i in range(5)))\npestolink = PestoLinkAgent(robot_name)\nprint("The name of your robot is " + robot_name)'
  var controller = Blockly.Python.valueToCode(block, 'controller_num', Blockly.Python.ORDER_ATOMIC);
  var code = `pestolink.get_axis(2, ${controller})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pestolink_get_controller_right_y'] = function (block) {
  PY.definitions_['import_random']='import random\n ';
  PY.definitions_['import_pestolink']='\nfrom machine import Pin\nimport bluetooth\nfrom pestolink import PestoLinkAgent\n\nletters_passcode="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"\nrobot_name = ("".join(random.choice(letters_passcode) for i in range(5)))\npestolink = PestoLinkAgent(robot_name)\nprint("The name of your robot is " + robot_name)'
  var controller = Blockly.Python.valueToCode(block, 'controller_num', Blockly.Python.ORDER_ATOMIC);
  var code = `-pestolink.get_axis(3, ${controller})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pestolink_is_a_pressed'] = function (block) {
  PY.definitions_['import_random']='import random\n ';
  PY.definitions_['import_pestolink']='\nfrom machine import Pin\nimport bluetooth\nfrom pestolink import PestoLinkAgent\n\nletters_passcode="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"\nrobot_name = ("".join(random.choice(letters_passcode) for i in range(5)))\npestolink = PestoLinkAgent(robot_name)\nprint("The name of your robot is " + robot_name)'
  var controller = Blockly.Python.valueToCode(block, 'controller_num', Blockly.Python.ORDER_ATOMIC);
  var code = `pestolink.get_button(0, ${controller})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pestolink_is_b_pressed'] = function (block) {
  PY.definitions_['import_random']='import random\n ';
  PY.definitions_['import_pestolink']='\nfrom machine import Pin\nimport bluetooth\nfrom pestolink import PestoLinkAgent\n\nletters_passcode="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"\nrobot_name = ("".join(random.choice(letters_passcode) for i in range(5)))\npestolink = PestoLinkAgent(robot_name)\nprint("The name of your robot is " + robot_name)'
  var controller = Blockly.Python.valueToCode(block, 'controller_num', Blockly.Python.ORDER_ATOMIC);
  var code = `pestolink.get_button(1, ${controller})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pestolink_is_y_pressed'] = function (block) {
  PY.definitions_['import_random']='import random\n ';
  PY.definitions_['import_pestolink']='\nfrom machine import Pin\nimport bluetooth\nfrom pestolink import PestoLinkAgent\n\nletters_passcode="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"\nrobot_name = ("".join(random.choice(letters_passcode) for i in range(5)))\npestolink = PestoLinkAgent(robot_name)\nprint("The name of your robot is " + robot_name)'
  var controller = Blockly.Python.valueToCode(block, 'controller_num', Blockly.Python.ORDER_ATOMIC);
  var code = `pestolink.get_button(3, ${controller})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pestolink_is_x_pressed'] = function (block) {
  PY.definitions_['import_random']='import random\n ';
  PY.definitions_['import_pestolink']='\nfrom machine import Pin\nimport bluetooth\nfrom pestolink import PestoLinkAgent\n\nletters_passcode="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"\nrobot_name = ("".join(random.choice(letters_passcode) for i in range(5)))\npestolink = PestoLinkAgent(robot_name)\nprint("The name of your robot is " + robot_name)'
  var controller = Blockly.Python.valueToCode(block, 'controller_num', Blockly.Python.ORDER_ATOMIC);
  var code = `pestolink.get_button(2, ${controller})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pestolink_is_left_bumper_pressed'] = function (block) {
  PY.definitions_['import_random']='import random\n ';
  PY.definitions_['import_pestolink']='\nfrom machine import Pin\nimport bluetooth\nfrom pestolink import PestoLinkAgent\n\nletters_passcode="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"\nrobot_name = ("".join(random.choice(letters_passcode) for i in range(5)))\npestolink = PestoLinkAgent(robot_name)\nprint("The name of your robot is " + robot_name)'
  var controller = Blockly.Python.valueToCode(block, 'controller_num', Blockly.Python.ORDER_ATOMIC);
  var code = `pestolink.get_button(4, ${controller})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pestolink_is_right_bumper_pressed'] = function (block) {
  PY.definitions_['import_random']='import random\n ';
  PY.definitions_['import_pestolink']='\nfrom machine import Pin\nimport bluetooth\nfrom pestolink import PestoLinkAgent\n\nletters_passcode="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"\nrobot_name = ("".join(random.choice(letters_passcode) for i in range(5)))\npestolink = PestoLinkAgent(robot_name)\nprint("The name of your robot is " + robot_name)'
  var controller = Blockly.Python.valueToCode(block, 'controller_num', Blockly.Python.ORDER_ATOMIC);
  var code = `pestolink.get_button(5, ${controller})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pestolink_is_left_trigger_pressed'] = function (block) {
  PY.definitions_['import_random']='import random\n ';
  PY.definitions_['import_pestolink']='\nfrom machine import Pin\nimport bluetooth\nfrom pestolink import PestoLinkAgent\n\nletters_passcode="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"\nrobot_name = ("".join(random.choice(letters_passcode) for i in range(5)))\npestolink = PestoLinkAgent(robot_name)\nprint("The name of your robot is " + robot_name)'
  var controller = Blockly.Python.valueToCode(block, 'controller_num', Blockly.Python.ORDER_ATOMIC);
  var code = `pestolink.get_button(6, ${controller})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pestolink_is_right_trigger_pressed'] = function (block) {
  PY.definitions_['import_random']='import random\n ';
  PY.definitions_['import_pestolink']='\nfrom machine import Pin\nimport bluetooth\nfrom pestolink import PestoLinkAgent\n\nletters_passcode="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"\nrobot_name = ("".join(random.choice(letters_passcode) for i in range(5)))\npestolink = PestoLinkAgent(robot_name)\nprint("The name of your robot is " + robot_name)'
  var controller = Blockly.Python.valueToCode(block, 'controller_num', Blockly.Python.ORDER_ATOMIC);
  var code = `pestolink.get_button(7, ${controller})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['pestolink_get_axis'] = function (block) {
  PY.definitions_['import_random']='import random\n ';
  PY.definitions_['import_pestolink']='\nfrom machine import Pin\nimport bluetooth\nfrom pestolink import PestoLinkAgent\n\nletters_passcode="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"\nrobot_name = ("".join(random.choice(letters_passcode) for i in range(5)))\npestolink = PestoLinkAgent(robot_name)\nprint("The name of your robot is " + robot_name)'
  var axis = Blockly.Python.valueToCode(block, 'axis', Blockly.Python.ORDER_ATOMIC);
  var controller = Blockly.Python.valueToCode(block, 'controller_num', Blockly.Python.ORDER_ATOMIC);
  var code = `pestolink.get_axis(${axis}, ${controller})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['pestolink_get_button'] = function (block) {
  PY.definitions_['import_random']='import random\n ';
  PY.definitions_['import_pestolink']='\nfrom machine import Pin\nimport bluetooth\nfrom pestolink import PestoLinkAgent\n\nletters_passcode="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"\nrobot_name = ("".join(random.choice(letters_passcode) for i in range(5)))\npestolink = PestoLinkAgent(robot_name)\nprint("The name of your robot is " + robot_name)'
  var button = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  var controller = Blockly.Python.valueToCode(block, 'controller_num', Blockly.Python.ORDER_ATOMIC);
  var code = `pestolink.get_button(${button}, ${controller})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};