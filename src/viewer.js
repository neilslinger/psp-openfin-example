import React from 'react';
import ReactDOM from 'react-dom';
import LocalDataViewer from './pspLocalDataViewer';
import {inOpenfin} from './openfinUtils';

const node = document.getElementById("root");

var askChangeFilter = [];
var clientFilter = [];

function renderViewer(filters=[], rowPivots=["client"]) {
    ReactDOM.render(
        <LocalDataViewer
            index="rowId"
            row-pivots={JSON.stringify([
                rowPivots
            ])}
            filters={JSON.stringify(
                filters
            )}
            />, node);
}

renderViewer();

if (inOpenfin()) {
    fin.desktop.InterApplicationBus.subscribe("*", "RangeFilter", function (message, uuid) {      
        askChangeFilter = ["chg", ">", message.value];
        var filters = clientFilter.length > 0 ? [askChangeFilter].concat([clientFilter]) : [askChangeFilter];
        return renderViewer(filters);
    });
    fin.desktop.InterApplicationBus.subscribe("*", "ClientFilter", function (message, uuid) {
        clientFilter = ["client", "contains", message.value];
        var filters = askChangeFilter.length > 0 ? [clientFilter].concat([askChangeFilter]) : [clientFilter];
        return renderViewer(filters);
    });
}