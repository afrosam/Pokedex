import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import mp3_file from './audio/Level_Up_Pokemon_Red.mp3';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

var inpButton = document.querySelector(".searchBox > form").lastChild;
var LgLight = document.getElementById('big-button');
var smallLights = document.querySelectorAll('#side-buttons > *');
var bottomButton = document.querySelector('.infoBottom > div');
var toggle = false;
var lvlUp = new Audio(mp3_file);
lvlUp.volume = 0.1;
console.log(bottomButton);
// console.log(smallLights);

function activateSmLights() {
    bottomButton.classList.toggle('smLights');
    if (toggle) {
        smallLights[1].classList.toggle('smLights');
        toggle = false;
    } else {
        smallLights[0].classList.toggle('smLights');
        smallLights[2].classList.toggle('smLights');
        toggle = true;
    }
}

function activateLgLights() {
    LgLight.classList.add('lgLight');
}

inpButton.addEventListener('mousedown', (event) => {
    inpButton.style.backgroundColor = '#dc0a2d';
    inpButton.style.borderBottom = '2px solid #222';
    inpButton.style.borderTop = '2px solid #222';
    inpButton.style.borderLeft = '2px solid #222';
    inpButton.style.borderRight = '2px solid #222';
 });
 inpButton.addEventListener('mouseup', (event) => {
   inpButton.style.backgroundColor = '#666';
   inpButton.style.borderBottom = '4px solid #222';
   inpButton.style.borderTop = '2px solid #222';
   inpButton.style.borderLeft = '2px solid #222';
   inpButton.style.borderRight = '2px solid #222';
 });
 inpButton.addEventListener('click', (event) => {
     lvlUp.play();
     activateSmLights();
     activateLgLights();
 })

 LgLight.addEventListener('animationend', () => {
    LgLight.classList.toggle('lgLight');
 });
 
document.addEventListener('animationend', () => {

    smallLights.forEach((ele) => {
        if (ele.classList.contains('smLights')) {
           ele.classList.remove('smLights');
        }
    });
});