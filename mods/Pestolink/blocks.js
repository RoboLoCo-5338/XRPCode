//Pesto Link Controller: Credit Kavin Muralikrishnan FRC Team 5338 Roboloco
Blockly.Blocks['run_function_periodically'] = {
  init: function() {
    this.appendValueInput('AFTER')
    .appendField('Every')
    .setCheck('Number');
    this.appendDummyInput()
    .appendField('seconds,');
    this.appendStatementInput('DO')
    .appendField('Do');
    this.setInputsInline(true)
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(120);
  }
};


Blockly.Blocks['pestolink_get_controller_left_x']={
  init: function () {
    this.appendDummyInput()
      .appendField("Get Horizontal Value of Left Joystick");
    this.appendDummyInput()
      .appendField("On Controller");
    this.appendValueInput("controller_num")
      .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(true)
  }
};

Blockly.Blocks['pestolink_get_controller_left_y']={
  init: function () {
    this.appendDummyInput()
      .appendField("Get Vertical Value of Left Joystick");
    this.appendDummyInput()
      .appendField("On Controller");
    this.appendValueInput("controller_num")
      .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(true)
  }
};

Blockly.Blocks['pestolink_get_controller_right_x']={
  init: function () {
    this.appendDummyInput()
      .appendField("Get Horizontal Value of Right Joystick");
    this.appendDummyInput()
      .appendField("On Controller");
    this.appendValueInput("controller_num")
      .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(true)
  }
};

Blockly.Blocks['pestolink_get_controller_right_y']={
  init: function () {
    this.appendDummyInput()
      .appendField("Get Vertical Value of Right Joystick");
    this.appendDummyInput()
      .appendField("On Controller");
    this.appendValueInput("controller_num")
      .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(true)
  }
};

Blockly.Blocks['pestolink_is_a_pressed']={
  init: function () {
    this.appendDummyInput()
      .appendField("A Pressed");
    this.appendDummyInput()
      .appendField("On Controller");
    this.appendValueInput("controller_num")
      .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(true)
  }
};

Blockly.Blocks['pestolink_is_b_pressed']={
  init: function () {
    this.appendDummyInput()
      .appendField("B Pressed");
    this.appendDummyInput()
      .appendField("On Controller");
    this.appendValueInput("controller_num")
      .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(true)
  }
};

Blockly.Blocks['pestolink_is_x_pressed']={
  init: function () {
    this.appendDummyInput()
      .appendField("X Pressed");
    this.appendDummyInput()
      .appendField("On Controller");
    this.appendValueInput("controller_num")
      .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(true)
  }
};

Blockly.Blocks['pestolink_is_y_pressed']={
  init: function () {
    this.appendDummyInput()
      .appendField("Y Pressed");
    this.appendDummyInput()
      .appendField("On Controller");
    this.appendValueInput("controller_num")
      .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(true)
  }
};

Blockly.Blocks['pestolink_is_right_bumper_pressed']={
  init: function () {
    this.appendDummyInput()
      .appendField("Right Bumper Pressed");
    this.appendDummyInput()
      .appendField("On Controller");
    this.appendValueInput("controller_num")
      .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(true)
  }
};

Blockly.Blocks['pestolink_is_left_bumper_pressed']={
  init: function () {
    this.appendDummyInput()
      .appendField("Left Bumper Pressed");
    this.appendDummyInput()
      .appendField("On Controller");
    this.appendValueInput("controller_num")
      .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(true)
  }
};

Blockly.Blocks['pestolink_is_right_trigger_pressed']={
  init: function () {
    this.appendDummyInput()
      .appendField("Right Trigger Pressed");
    this.appendDummyInput()
      .appendField("On Controller");
    this.appendValueInput("controller_num")
      .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(true)
  }
};

Blockly.Blocks['pestolink_is_left_trigger_pressed']={
  init: function () {
    this.appendDummyInput()
      .appendField("Left Trigger Pressed");
    this.appendDummyInput()
      .appendField("On Controller");
    this.appendValueInput("controller_num")
      .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(true)
  }
};

Blockly.Blocks['pestolink_get_axis'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Get Pesto Link Axis");
    this.appendValueInput("axis")
      .setCheck("Number")
    this.appendDummyInput()
      .appendField("On Controller");
    this.appendValueInput("controller_num")
      .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip("Get a specific axis from Pesto Link");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['pestolink_get_button'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Is Pesto Link Button Pressed");
    this.appendValueInput("num")
      .setCheck("Number")
    this.appendDummyInput()
      .appendField("On Controller");
    this.appendValueInput("controller_num")
      .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip("Get the pressed state of a specific button from Pesto Link");
    this.setHelpUrl("");
  }
}