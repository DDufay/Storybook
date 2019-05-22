- npm install
- npm run storybook 

go to localhost:9001


------
# Storybook
## Importer un composant  
### Architecture du composant:
- MonComposant
    - Style
        - MonStyle.scss
    - Component
        - MonItem.js

Ajouter un stories.js à la racine du composant.
#### Exemple

`SmileyComponent`
- SmileyComponent
    - Component
        - GoodSmiley.js
        - BadSmiley.js
    - Style
        - smiley.scss
    - stories.js

Stories.js
```
import {storiesOf} from "@storybook/react";
import React from "react";
import GoodSmiley from "./GoodSmiley";
import BadSmiley from "./BadSmiley";

storiesOf('Smiley', module)
    .add('Good Smiley', () => <GoodSmiley/>)
    .add('Bad smiley', () => <BadSmiley/>)
;
```        

## Links
- https://storybook.js.org/
- https://storybook.js.org/docs/guides/guide-react/
- ... 