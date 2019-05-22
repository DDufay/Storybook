import {storiesOf} from "@storybook/react";
import React from "react";
import GoodSmiley from "./GoodSmiley";
import BadSmiley from "./BadSmiley";

storiesOf('Smiley', module)
    .add('Good Smiley', () => <GoodSmiley/>)
    .add('Bad smiley', () => <BadSmiley/>)
;