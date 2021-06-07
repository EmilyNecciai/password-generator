# password-generator
Password Generator - Project 3 for GW Bootcamp
Live site: 

Final Screenshot: 
![Placeholder]()

## Requirements of the Project: 
(To be duplicated in Issues.)

### User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

### Acceptance Criteria
GIVEN I need a new, secure password:

- WHEN I click the button to generate a password THEN I am presented with a series of prompts for password criteria

- WHEN prompted for password criteria THEN I select which criteria to include in the password

- WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters

- WHEN prompted for character types to include in the password THEN I choose lowercase, uppercase, numeric, and/or special characters

- WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected

- WHEN all prompts are answered THEN a password is generated that matches the selected criteria

- WHEN the password is generated THEN the password is either displayed in an alert or written to the page

## Mock-Up
The following image shows the web application's appearance and functionality:
![Mockup](https://github.com/EmilyNecciai/password-generator/blob/main/assets/img/pwd-gen-mockup.png)

## Pseudo

### Criteria Function
1. Prompt 1: Length (8 - 128) with error and loop for invalid entries and convert from number to string
2. Confirm 1: Include Lowercase Letters? 
3. Confirm 2: Include Lowercase Letters? 
4. Confirm 3: Include Numbers?
5. Confirm 4: Include Special Characters?

6. If all confirms = "" or Null, throw alert and re-run confirm function. 

### Password Generator Function

1. Take variable from prompt 1 to determine length (loop)
2. Randomly select from each of the arrays with confirmTrue value until loop in step 1 is complete (Math Random)
3. Concatenate/sum all randomly selected characters (function)
4. Shuffle order of concatenated characters
5. Return password

