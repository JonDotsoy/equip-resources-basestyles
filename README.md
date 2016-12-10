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


### Icons SVG
> `(☞ﾟ∀ﾟ)☞` Sorry comming soon.

## LICENSE
![CC BY-SA 4.0](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)

Esta obra está bajo una [Licencia Creative Commons Atribución-CompartirIgual 4.0 Internacional](http://creativecommons.org/licenses/by-sa/4.0/).

[@JonDotsoy]: https://github.com/jondotsoy
[PostCSS-import]: https://github.com/postcss/postcss-import
[PostCSS]: https://github.com/postcss/postcss
[PreCSS]: https://github.com/jonathantneal/precss
[CSSNext]: http://cssnext.io/
