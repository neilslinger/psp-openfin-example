import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'material-ui/Slider';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {runApplication, inOpenfin} from './openfinUtils';

const node = document.getElementById("root");

function sliderChanged(event, newValue) {
    if (inOpenfin()) {
        fin.desktop.InterApplicationBus.publish("RangeFilter", {
            value: newValue
        });
    }
}

function clientChanged(event) {
  if (inOpenfin()) {
        fin.desktop.InterApplicationBus.publish("ClientFilter", {
            value: event.target.value
        });
    }
}

ReactDOM.render(
  <MuiThemeProvider>
  <div>
    <h3>Filter All Web Assembly Views</h3>
    <p>Each view is a separate browser window running our 
      streaming WASM data engine subscribing to a Web Socket 
      data stream.</p>
    <p>Each view listens to events sent over the OpenFin 
      message bus to apply filters.</p>
    <TextField
      hintText="Client name"
      onChange={clientChanged}
      />
    <Slider
      max={10}
      min={-10}
      step={0.5}
      onChange={sliderChanged}
    />
  </div>
</MuiThemeProvider>, node);


document.addEventListener('DOMContentLoaded', () => {
  if (inOpenfin()) {
    fin.desktop.main(() => {
      var screenHeight = 1050-25;
      var screenWidth = 1680;
      runApplication("Testing1", screenHeight/2, screenWidth/3, 25, 0);
      runApplication("Testing2", screenHeight/2, screenWidth/3, 25, screenWidth/3);
      runApplication("Testing3", screenHeight, screenWidth/3, 25, (2*screenWidth)/3);
      runApplication("Testing4", screenHeight/2, (2*screenWidth)/3, screenHeight/2, 0);
    });
  }
});

