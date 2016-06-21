# f7-angular-components-and-ui.router-boilerplate

This project integrates [Framework7](http://framework7.io) with [AngularJS 1.5.* components]() and [Angular UI-Router](https://angular-ui.github.io/ui-router/site/#/api/ui.router). It serves as a base project to create apps for mobile/desktop environments.

- Components are placed in `/components` folder

- Angular initializacion and configuration and Angular services are located in `/js` folder

- Each componet has associated an Angular **.html** template and a Javascript **.js** file where the controller logic resides

- For example, there is a **f7Accordion** component defined in `/components/f7Accordion/`. You can use this component in any view (html file) using this custom tag:`<f7-accordion></f7-accordion>`. You can also adapt the behavior and look to your needs modifing the  component files: `/components/f7Accordion/f7Accordion.js` and `/components/f7Accordion/f7Accordion.html`

- Each subcomponent included in other component are placed in a subdirectory except when the subcomponent is used in several places. This is for component reusability. For example, **f7SpeedDial** is only used in **f7Popup** component, so it will be placed in `/components/f7Popup/f7SpeedDial`

- The html layout has responsive design using media queries. It adapts to phone/tablet/desktop screens

- Components allow to define css styles in the component html template for encapsulation

- The project uses AngularJS UI-Router and ui-views, not Framework7 router. The F7 router is disabled.





>**With this project all existing angular 1.* directives and code can be used***. 
>
>**Also can be used JQuery plugins**



# Demostration


- [FOR DESKTOP (big screen size)](https://yagolopez.github.io/f7-angular-components-and-ui.router/#/)

- [FOR MOBILE (small screen size)](https://yagolopez.github.io/f7-angular-components-and-ui.router/iframe/iframe.html)