# equip-resources-basestyles
Shared resources for component implementation.

## Styles CSS
### How Use

> We develop this styles with PostCSS, PreCSS and CSSNext. But of course the files no use all tools. So good luck.
> — [@JonDotsoy][]

```css
/*
Other recomendables dependencies that you incorporate within the resources.
 - reset.css
 - material-colors
 */
@import "../node_modules/reset.css/reset.css";
@import "../node_modules/material-colors/dist/colors.var.css";

@import "../equip-resources-basestyles/css/colors.css";
@import "../equip-resources-basestyles/css/z-depth.css";
@import "../equip-resources-basestyles/css/familyRoboto.css";
```

### Overview

 - **z-depth**: In material design, everything should have a certain z-depth that determines how far raised or close to the page the element is. See more [materializecss#shadow](http://materializecss.com/shadow.html)
 - **Colors**: A series of colors. Ho!! And also [material design](https://www.npmjs.com/package/material-colors).
 - **familyRoboto**: all family to roboto. See on [fonts google](https://fonts.google.com/?query=roboto)
 - **reset.css**: Use this to work without browser junk.


### Icons SVG
> `(☞ﾟ∀ﾟ)☞` Sorry comming soon.

## LICENSE
![(CC) by-sa](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)

Esta obra está bajo una [Licencia Creative Commons Atribución-CompartirIgual 4.0 Internacional](http://creativecommons.org/licenses/by-sa/4.0/).

[@JonDotsoy]: https://github.com/jondotsoy
