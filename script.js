"use strict";

  var eateryList = [
      "Burger Bros",
      "Bagel Talk",
      "La Rosa",
      "Mo's",
      "Tokio",
      "Lemon",
      "Ginger",
      "Sofra",
      "Applebee's",
      "Fireside Grill",
      "Sichuan Cottage",
      "Chipotle",
      "Noodles & Company"
      ];


  var donts = {
    ani : ["Tokio", "Sofra", "Applebee's", "Fireside Grill", "Sichuan Cottage"],
    barb : ["Lemon", "Mo's", "Chipotle", "Ginger", "Sofra"],
    bob : ["Lemon", "La Rosa"],
    erez : [],
    prahini : ["La Rosa","Lemon", "Ginger","Sofra"],
    jess : ["Lemon", "Ginger", "Sofra"],
    kym : [],
    melissa : ["Lemon", "Ginger", "Sofra"],
    rupesh : ["Tokio"]
  };
  
  var filteredList = eateryList;


  // show the list of eateries based on selected hungries
  function validate() {   
    document.getElementById("showOptions").innerHTML = '';
    var elements = document.getElementsByTagName('input');
    filteredList = eateryList;
    for (var i = 0; i < elements.length; i++) {
      var input = elements[i];
      var hungry =  elements[i].value; 

      if (input.checked && donts.hasOwnProperty(hungry) && donts[hungry].length > 0) {
        filteredList = filteredList.filter(function(val){
          return (donts[hungry].indexOf(val) === -1);
        });
      }
    }
    showOptions(filteredList);
    
  }
    
  // show a random eatery based on selected hungries  
  function randomOption() {
    document.getElementById("showOptions").innerHTML = '';
    var rand = Math.floor(Math.random() * filteredList.length);
    showOptions([filteredList[rand]]);
  }
  
  // show list of available eateries  
  function allOptions() {
    document.getElementById("showOptions").innerHTML = '';
    showOptions(eateryList);
  }

  // display function
  function showOptions(arr){
    var div = document.createElement('div');
    if (Array.isArray(arr) && arr.length > 0) {
      var ul = document.createElement('ul');
      for(var i = 0; i< arr.length; i++) {
        var li = document.createElement('li');
        var txt = document.createTextNode(arr[i]);
        li.appendChild(txt);
        ul.appendChild(li);
      }
      div.appendChild(ul);
    } else {
      txt = document.createTextNode("Something is not right");
      div.appendChild(txt);
    } 
    document.getElementById("showOptions").appendChild(div);
  }
  
