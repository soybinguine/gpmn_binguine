//Create an instance of CSInterface first. Not only this jsx but also evalScript()
(function () {
    'use strict';

});

var csInterface = new CSInterface();
var sayHiButton = document.getElementById('say-hi-button');
var sayByeButton = document.getElementById('say-bye-button');
var sayYeahButton = document.getElementById('say-yeah-button');
sayHiButton.addEventListener('click', sayHi);
sayByeButton.addEventListener('click', sayBye);
sayYeahButton.addEventListener('click', sayYeah);

function sayHi() {
    console.log('run');
    csInterface.evalScript('factGPMN()');
}

function sayBye() {
    console.log('run');
    csInterface.evalScript('chucGPMN()');
}
function sayYeah() {
    console.log('run');
    csInterface.evalScript('tulieuGPMN()');
}