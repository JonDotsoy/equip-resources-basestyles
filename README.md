# equip-resources-basestyles
Shared resources for component implementation.

[![npm](https://goo.gl/CuVcGV)](https://www.npmjs.com/package/equip-resources-basestyles)
[![npm](https://goo.gl/0ojMSs)](https://www.npmjs.com/package/equip-resources-basestyles)
![Develo By 3s SpA](https://goo.gl/yeo8X3)

## Styles CSS
### How Use

> We develop this styles with [PostCSS][], [PostCSS-import][], [PreCSS][] and [CSSNext][]. But of course the files no use all tools. So good luck.
>
> — [@JonDotsoy][]

```css
@import "equip-resources-basestyles";

.my_class_with_color {
  color: var(--md-red-500); /* (ง ͠° ͟ل͜ ͡°)ง a variable with material design */
}

.my_box {
  box-shadow: var(--md-z-depth-1);
  &:hover {
    box-shadow: var(--md-z-depth-2);
  }
}
```

### Overview

- **z-depth**: In material design, everything should have a certain z-depth that determines how far raised or close to the page the element is. See more [materializecss#shadow](http://materializecss.com/shadow.html).
    + [`z-depth.css`](https://github.com/JonDotsoy/equip-resources-basestyles/blob/master/css/z-depth.css)
- **Colors**: A series of colors. Ho!! And also [material design](https://www.npmjs.com/package/material-colors).
    + [`colors.css`](https://github.com/JonDotsoy/equip-resources-basestyles/blob/master/css/colors.css)
    + [`colors.var.css`](https://github.com/shuhei/material-colors/blob/master/dist/colors.var.css) *(Variables Material Design)*
- **familyRoboto**: all family to roboto. See on [fonts google](https://fonts.google.com/?query=roboto).
    + `font-family: 'Roboto', sans-serif;`
    + `font-family: 'Roboto Condensed', sans-serif;`
    + `font-family: 'Roboto Slab', serif;`
    + `font-family: 'Roboto Mono', monospace;`
- **reset.css**: Use this to work without browser junk.

### Load Resouces Images
![Preview Images](./assets/previewicons.png)

All images resources is load from [`images/`](https://github.com/JonDotsoy/equip-resources-basestyles/tree/master/images) directory.

#### With PostCSS (`equip-image(nameResource)`)
Is possible load this images with postcss, only is required a plugin from this module.

**File with Postcss**

```javascript
postcss([
  require('postcss-import')(),
  require('equip-resources-basestyles')(),
  require('postcss-inline-svg')(),
])
```

> Learn more how use PostCSS on [here](https://github.com/postcss/postcss#usage).

and in your **file css**.

```css
.my-image {
  background-image: svg-load(equip-image('ic_add_alert_black_24px'));
}
```

You obtain Something similar to this:

```css
.my-image{
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg fill='%23000000' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E %3Cpath d='M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z'/%3E %3C/svg%3E");
}
```

## LICENSE
![CC BY-SA 4.0](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)

Esta obra está bajo una [Licencia Creative Commons Atribución-CompartirIgual 4.0 Internacional](http://creativecommons.org/licenses/by-sa/4.0/).

[@JonDotsoy]: https://github.com/jondotsoy
[PostCSS-import]: https://github.com/postcss/postcss-import
[PostCSS]: https://github.com/postcss/postcss
[PreCSS]: https://github.com/jonathantneal/precss
[CSSNext]: http://cssnext.io/
