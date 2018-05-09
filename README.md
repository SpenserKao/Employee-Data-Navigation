# Employee Data Navigation
An application to navigate hypothetical employee data.

## Implemented features
Following four views have been implemented:
   - Full employees list
   - Hierarchical relationship among employees
   - Employee without manager
   - Manager who is not a valid employee

## Installation
Go to GitHub where the codes are reposited [1], click "Clone or download" button on the right to download Zip for installation locally.

## Execution
Once installed locally, open index.html file with Firefox or Microsoft Edge.
Google Chrome is not supported, due to following error "Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https." 

## Technologies in use
### AngularJS
Angular JS ver 1.2.0 has been utilised in this application, noteworthily following directives have been employed:
   - ng-app - designates the root element of the application and is typically placed near the root element of the page - e.g. on the <body> or <html> tags
   - ng-controller - attaches a controller class to the view
   - ng-show - enables conditional display of selected image's details 
   - ng-repeat - implements images thumbnail
   - ng-model - binds view into model required by an input that specifies keywords (tags) for search
   - ng-switch & ng-switch-when - conditionally swaps DOM structure on your template based on a scope expression
   - ng-selected - sets the selected attribute on the element
   - ng-change - evaluates the given expression when the user changes the input

## Design of employee data input
Simplistic JSON-based flat files have been facilitated as inputs for employee data.

## Test cases
Two JSON-based flat files have been built to covern differenct scenarios.
   - employeeData.json - contains indentical content as examplied in the Momenton-provided requirement document
   - employeeData-depth5.json - currently used as a test case, a superset of above file, covering following extra scenarios:
      - Manager who is not a valid employee - this isn't covered in the original requirement document
      - Multiple topmost managers, rather than just one CEO, can also be handled
      - Hierarchy level has been extended to five

## ToDo
| item | Description | Implemented? (Y/N) |
| ---:|:-------------|:-----:|
|1| To generically determine number of td (HTML term: table cell) elemnts in order to allow unlimted hierarchy levels. Currently it is  fixed as five. | N |

## Reference
[1] https://github.com/SpenserKao/Employee-Data-Navigation<br/>

