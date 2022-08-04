# JavaScript-Password-Generator
Before I begin my assignment I make a new repository in GitHub named "JavaScript-Password-Generator".
Next I cloned my repository with GitBash to my computer.
Now that I have my repository cloned I open up Visual Studio Code.
For this assignment i'm fully working on the JavaScript to create the application to generate a random password after a selection of questions.
We are given the starter code for the HTML, CSS, and a little bit of the JavaScript
I copy them over to my new VS Code from our challenge secetion.
I first needed to come up with my variables I need for generating the password.
My Variables array's are numeric characters, special characters, lower case and upper case letters.
Next I needed to create the window propts for the user to answer.
The window propts contains questions like "Do you want capital letters?", "Do you want lower case letters?", "Do you want any special symbols?", "Would you like numbers?".
Another window prompt I needed to create was for the user to select the length of the password.
The password was set for a length of 8-128 characters. If they selected less than eight a alart will appear leting the user know they need a minimum of eight characters.
Now that i have all my window propts made out I build my function for the arrays.
I create my index = math.floor (math.random()* options.length)
This function will help generate random selections from my arrays created.
Now that I have created the random slection next comes the users selection part.
When the user answers the propt questions the console.log will pick up true or false which states if they like the selection of questions in their generated password.
Now I created the loop for the selections of my arrays.
The loop will state for the selection of arrays to start at the zero position for the random selection.
After that it will help push the final password generated to the display selection of the screen. 
Next I opened up my browser and tested the application.
After double checking everything I was ready to push my work onto my GitHub.
Using GitBash I opened up my file, using git commit -m, and git push I got my assigment onto GitHub.
Now that I have pushed it I went to settings, git pages, and created my deployed URL.
I already to submit my assignment now!
I go onto the bootcamp website under module 3 and submit my two URL links.
One link is my deployed link and the other is my URL to my GitHub repository.

DEPLOYED URL:  https://jmizis.github.io/JavaScript-Password-Generator/
