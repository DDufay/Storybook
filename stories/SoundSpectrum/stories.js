import {storiesOf} from "@storybook/react";
import React from "react";
import {SoundSpectrum} from 'sound-spectrum/src/components/SoundSpectrum';

storiesOf('Sound spectrum', module)
    .add('Sound spectrum', () => <SoundSpectrum url='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' />)
;
