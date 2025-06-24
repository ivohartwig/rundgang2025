TITLE: Importing and Using the animate() Method in Anime.js
DESCRIPTION: Basic syntax for importing and using the animate() method from Anime.js to create animations. The example shows how to target elements and define animation parameters.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimation.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

const animation = animate(targets, parameters);
```

----------------------------------------

TITLE: Installing Anime.js with NPM
DESCRIPTION: This snippet demonstrates how to install Anime.js using NPM, a package manager for JavaScript. This approach is commonly used in projects that utilize bundlers like Vite or esbuild for module management.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationgetting-startedinstallation.md#2025-04-18_snippet_0

LANGUAGE: shell
CODE:
```
npm install animejs
```

----------------------------------------

TITLE: Basic Anime.js Animation Configuration
DESCRIPTION: Demonstrates the basic structure of an Anime.js animation configuration using a CSS selector target. Shows various animation properties including translation, scaling, opacity, duration, delay, easing, looping, and callback functions.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtargets.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
animate(
'.square',
{
  translateX: 100,
  scale: 2,
  opacity: .5,
  duration: 400,
  delay: 250,
  ease: 'out(3)',
  loop: 3,
  alternate: true,
  autoplay: false,
  onBegin: () => {},
  onLoop: () => {},
  onUpdate: () => {},
});
```

----------------------------------------

TITLE: Manipulating Timeline in Anime.js
DESCRIPTION: Shows how to create a timeline with default settings and add multiple animations to it. The example demonstrates using labels, adding animations with different positions, and chaining timeline methods.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimeline.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimeline } from 'animejs';

const tl = createTimeline({ defaults: { duration: 750 } });

tl.label('start')
  .add('.square', { x: '15rem' }, 500)
  .add('.circle', { x: '15rem' }, 'start')
  .add('.triangle', { x: '15rem', rotate: '1turn' }, '<-=500');
```

----------------------------------------

TITLE: Using Anime.js ES6 Modules from local file
DESCRIPTION: This code shows how to import Anime.js as an ES6 module after downloading the library directly from GitHub and placing it in your project directory. The script tag includes the 'type=module' attribute to treat the code as a module.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationgetting-startedinstallation.md#2025-04-18_snippet_4

LANGUAGE: html
CODE:
```
<script type="module">
  import { animate } from './path/to/anime.esm.min.js';
</script>
```

----------------------------------------

TITLE: Using Anime.js Stagger Functionality in JavaScript
DESCRIPTION: This snippet demonstrates how to use the `stagger` function from Anime.js to create animations where multiple elements move sequentially. The `stagger` function takes a value and optional parameters to determine the start times for the animations of each element. This allows for visually appealing effects where elements animate one after another rather than simultaneously.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationstagger.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { animate, stagger } from 'animejs';\n\nanimate('.square', {\n  x: '17rem',\n  scale: stagger([1, .1]),\n  delay: stagger(100),\n});
```

----------------------------------------

TITLE: Creating Complex Animations with Keyframes and Property-Specific Parameters
DESCRIPTION: Example demonstrating how to use the animate() method with keyframes, property-specific parameters, function-based values, easing, looping, and delays. Shows advanced animation configuration options.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimation.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

animate('span', {
  // Property keyframes
  y: [
    { to: '-2.75rem', ease: 'outExpo', duration: 600 },
    { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
  ],
  // Property specific parameters
  rotate: {
    from: '-1turn',
    delay: 0
  },
  delay: (_, i) => i * 50, // Function based value
  ease: 'inOutCirc',
  loopDelay: 1000,
  loop: true
});
```

----------------------------------------

TITLE: Comparing WAAPI and JavaScript Animations with Anime.js
DESCRIPTION: This code demonstrates how to create animations using both the Web Animation API and standard JavaScript approaches in Anime.js. It includes a CPU-blocking timer to showcase how WAAPI animations remain smooth even when the main thread is busy.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apihardware-accelerated-animations.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, waapi, createTimer, utils } from 'animejs';

const [ $block ] = utils.$('.button');

const waapiAnim = waapi.animate('.waapi.square', {
  translate: 270,
  rotate: 180,
  alternate: true,
  loop: true,
  ease: 'cubicBezier(0, 0, .58, 1)',
});

const jsAnim = animate('.js.square', {
  x: 270,
  rotate: 180,
  ease: 'cubicBezier(0, 0, .58, 1)',
  alternate: true,
  loop: true,
});

const blockCPUTimer = createTimer({
  onUpdate: () => {
    const end = Date.now() + 100;
    while(Date.now() < end) {
      Math.random() * Math.random();
    }
  },
  autoplay: false
});

let isBusy = false;

const toggleCPU = () => {
  blockCPUTimer[isBusy ? 'pause' : 'play']();
  $block.innerText = (isBusy ? 'block' : 'free') + ' CPU';
  isBusy = !isBusy;
}

$block.addEventListener('click', toggleCPU);
```

----------------------------------------

TITLE: Configuring Animation Callbacks in Anime.js
DESCRIPTION: This snippet demonstrates how to set up various animation callbacks in Anime.js. It includes settings for animation properties like duration, delay, easing, and looping, along with placeholder callback functions.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-callbacks.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
animate('.square', {
  translateX: 100,
  scale: 2,
  opacity: .5,
  duration: 400,
  delay: 250,
  ease: 'out(3)',
  loop: 3,
  alternate: true,
  autoplay: false,
  onBegin: () => {},
  onLoop: () => {},
  onUpdate: () => {},
});
```

----------------------------------------

TITLE: HTML Structure for AnimeJS Animation Demo
DESCRIPTION: HTML structure showing the target elements for the animation example. Contains a container with multiple nested square elements that will be animated.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtargetsdom-elements.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div id="selector-demo">
  <div class="medium row">
    <div class="square"></div>
  </div>
  <div class="medium row">
    <div class="square"></div>
  </div>
  <div class="medium row">
    <div class="square"></div>
  </div>
</div>
```

----------------------------------------

TITLE: React Component with Anime.js Integration
DESCRIPTION: This React component utilizes Anime.js to animate a logo. It imports necessary modules from both Anime.js and React, including animate, createScope, createSpring, createDraggable, useEffect, useRef, and useState. The useEffect hook sets up the Anime.js scope and animations. A click handler demonstrates triggering animations defined within the scope.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationgetting-startedusing-with-react.md#2025-04-18_snippet_0

LANGUAGE: jsx
CODE:
```
import { animate, createScope, createSpring, createDraggable } from 'animejs';
import { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const root = useRef(null);
  const scope = useRef(null);
  const [ rotations, setRotations ] = useState(0);

  useEffect(() => {
  
    scope.current = createScope({ root }).add( scope => {
    
      // Every anime.js instances declared here are now scopped to <div ref={root}>

      // Created a bounce animation loop
      animate('.logo', {
        scale: [
          { to: 1.25, ease: 'inOut(3)', duration: 200 },
          { to: 1, ease: createSpring({ stiffness: 300 }) }
        ],
        loop: true,
        loopDelay: 250,
      });
      
      // Make the logo draggable around its center
      createDraggable('.logo', {
        container: [0, 0, 0, 0],
        releaseEase: createSpring({ stiffness: 200 })
      });

      // Register function methods to be used outside the useEffect
      scope.add('rotateLogo', (i) => {
        animate('.logo', {
          rotate: i * 360,
          ease: 'out(4)',
          duration: 1500,
        });
      });

    });

    // Properly cleanup all anime.js instances declared inside the scope
    return () => scope.current.revert()

  }, []);

  const handleClick = () => {
    const i = rotations + 1;
    setRotations(i);
    // Animate logo rotation on click using the method declared inside the scope
    scope.current.methods.rotateLogo(i);
  };

  return (
    <div ref={root}>
      <div className="large centered row">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <div className="medium row">
        <fieldset className="controls">
        <button onClick={handleClick}>rotations: {rotations}</button>
        </fieldset>
      </div>
    </div>
  )
}

export default App;
```

----------------------------------------

TITLE: Implementing Reverse Animation with Anime.js
DESCRIPTION: Creates an animation that moves squares horizontally with a staggered delay, and implements a reverse function triggered by a button click. The animation uses the inOutSine easing function and can be reversed through a click event listener.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-methodsreverse.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, utils, stagger } from 'animejs';

const [ $reverseButton ] = utils.$('.reverse');

const animation = animate('.square', {
  x: '17rem',
  ease: 'inOutSine',
  delay: stagger(100),
});

const reverseAnimation = () => animation.reverse();

$reverseButton.addEventListener('click', reverseAnimation);
```

----------------------------------------

TITLE: Importing Anime.js methods as ES6 modules
DESCRIPTION: This code snippet shows how to import specific Anime.js methods as ES6 modules. This is necessary when using Anime.js with bundlers like Vite or esbuild after installing it via NPM.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationgetting-startedinstallation.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';
```

----------------------------------------

TITLE: Importing Anime.js using ES Modules
DESCRIPTION: Shows how to import Anime.js modules using ES Modules syntax with the import statement. This method is suitable for modern JavaScript environments that support module syntax.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationgetting-startedimports.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
import {
  animate,
  createTimeline,
  createTimer,
  // ...other methods
} from 'animejs';
```

----------------------------------------

TITLE: Comparing WAAPI and JavaScript Animations in Anime.js
DESCRIPTION: Demonstrates side-by-side comparison of WAAPI animation versus JavaScript animation using Anime.js. The WAAPI example uses hardware acceleration to animate CSS properties, while the JavaScript example manipulates object data with more control options and renders the values to the DOM.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiwhen-to-use-waapi.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, waapi, utils } from 'animejs';

// WAAPI Animation

waapi.animate('.waapi.square', {
  x: '17rem',
  rotate: 180,
  loop: 3,
  alternate: true,
});

// JS Animation

const data = { x: '0rem', rotate: '0deg' }
const [ $log ] = utils.$('code');

animate(data, {
  x: 17,
  rotate: 180,
  modifier: utils.round(0),
  loop: 3,
  alternate: true,
  onRender: () => $log.innerHTML = JSON.stringify(data)
});
```

LANGUAGE: html
CODE:
```
<div class="medium row">
  <div class="square waapi"></div>
</div>
<div class="small row"></div>
<pre class="medium centered row">
  <code>{"x": '0rem',"rotate":"0deg"}</code>
</pre>
```

----------------------------------------

TITLE: Configuring Draggable Settings in Anime.js
DESCRIPTION: Example showing how to create a draggable element with custom settings including snap points, axis constraints, container padding, and event handlers. The code demonstrates various configuration options available in the createDraggable() method.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-settings.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
createDraggable('.square', {
  x: { snap: 100 },
  y: { snap: 50 },
  modifier: utils.wrap(-200, 0),
  containerPadding: 10,
  releaseStiffness: 40,
  releaseEase: 'out(3)',
  onGrab: () => {},
  onDrag: () => {},
  onRelease: () => {},
});
```

----------------------------------------

TITLE: Initializing Animatable in AnimeJS
DESCRIPTION: Basic syntax for importing and creating an Animatable instance which can be used to animate properties efficiently.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimatable.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createAnimatable } from 'animejs';

const animatable = createAnimatable(targets, parameters);
```

----------------------------------------

TITLE: Animating with Percentage-Based Keyframes in AnimeJS
DESCRIPTION: Creates an animation using keyframes that define multiple property values at specific percentage points of the animation. The animation will transition between each keyframe based on their percentage positions over the specified duration.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationkeyframes.md#2025-04-18_snippet_3

LANGUAGE: javascript
CODE:
```
animate('.square', {
  keyframes: {
    '0%'  : { x: 0,   y: 0   },
    '50%' : { x: 100, y: 100 },
    '100%': { x: 200, y: 200 },
  },
  duration: 3000,
}
```

----------------------------------------

TITLE: Initializing Basic AnimeJS Animation in JavaScript
DESCRIPTION: Demonstrates the basic syntax for creating an animation using AnimeJS. Shows how to initialize an animation with targets and parameters, and lists the available animation properties that can be accessed.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-properties.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const animation = animate(targets, parameters);
          ┌────────────┐
animation.│targets     │
animation.│currentTime ├─ Properties
animation.│duration    │
          └────────────┘
```

----------------------------------------

TITLE: Defining Function-Based Animation Values with AnimeJS
DESCRIPTION: Example of how to use function-based values in AnimeJS animations. This snippet shows how to access target element attributes, use index and length parameters, and implement random values for various animation properties.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-value-typesfunction-based.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

animate('.square', {
  x: $el => /** @type {HTMLElement} */($el).getAttribute('data-x'),
  y: (_, i) => 50 + (-50 * i),
  scale: (_, i, l) => (l - i) * .75,
  rotate: () => utils.random(-360, 360),
  borderRadius: () => `+=${utils.random(0, 8)}`,
  duration: () => utils.random(1200, 1800),
  delay: () => utils.random(0, 400),
  ease: 'outElastic(1, .5)',
});
```

----------------------------------------

TITLE: Anime.js Stagger Grid Animation
DESCRIPTION: This JavaScript code uses Anime.js to animate a grid of square elements. The `stagger` function is used to delay the animation of each square based on its position in a 11x4 grid. The `animateGrid` function is called repeatedly to create a continuous animation loop.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationstaggerstagger-parametersstagger-grid.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, stagger } from 'animejs';

const $squares = utils.$('.square');

function animateGrid() {
  animate($squares, {
    scale: [
      { to: [0, 1.25] },
      { to: 0 }
    ],
    boxShadow: [
      { to: '0 0 1rem 0 currentColor' },
      { to: '0 0 0rem 0 currentColor' }
    ],
    delay: stagger(100, {
      grid: [11, 4],
      from: utils.random(0, 11 * 4)
    }),
    onComplete: animateGrid
  });
}

animateGrid();
```

----------------------------------------

TITLE: SVG Shape Morphing Animation Implementation in JavaScript
DESCRIPTION: Demonstrates how to create an animated morphing effect between two SVG polygons using Anime.js. The code includes a random point generator function and animation setup with recursive calls for continuous morphing.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationsvgmorphto.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, svg, utils } from 'animejs';

const [ $path1, $path2 ] = utils.$('polygon');

function animateRandomPoints() {
  // Update the points attribute on #path-2
  utils.set($path2, { points: generatePoints() });
  // Morph the points of #path-1 into #path-2
  animate($path1, {
    points: svg.morphTo($path2),
    ease: 'inOutCirc',
    duration: 500,
    onComplete: animateRandomPoints
  });
}

// Start the animation
animateRandomPoints();

// A function to generate random points on #path-2 on each iteration
// For demo purpose only
function generatePoints() {
  const total = utils.random(4, 64);
  const r1 = utils.random(4, 56);
  const r2 = 56;
  const isOdd = n => n % 2;
  let points = '';
  for (let i = 0, l = isOdd(total) ? total + 1 : total; i < l; i++) {
    const r = isOdd(i) ? r1 : r2;
    const a = (2 * Math.PI * i / l) - Math.PI / 2;
    const x = 152 + utils.round(r * Math.cos(a), 0);
    const y = 56 + utils.round(r * Math.sin(a), 0);
    points += `${x},${y} `;
  }
  return points;
}
```

----------------------------------------

TITLE: Configuring Timeline Playback Settings in Anime.js
DESCRIPTION: This example demonstrates how to configure timeline playback settings in the createTimeline() function call. It shows various options including defaults for animations, loop count, alternate direction, autoplay setting, and callback functions.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-playback-settings.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
createTimeline({
  defaults: {
    ease: 'out(3)',
    duration: 500,
  },
  loop: 3,
  alternate: true,
  autoplay: false,
  onBegin: () => {},
  onLoop: () => {},
  onUpdate: () => {},
});
```

----------------------------------------

TITLE: Configuring Animation Duration in AnimeJS
DESCRIPTION: Demonstrates setting both global and property-specific duration values in an animation configuration. Shows how to animate position and rotation with different durations.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-parametersduration.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

const animation = animate('.square', {
  x: '17rem',
  rotate: {
    to: 360,
    duration: 1500, // Local duration only applied to rotate property
  },
  duration: 3000,  // Global duration applied to all properties
  loop: true,
  alternate: true
});
```

----------------------------------------

TITLE: Creating a Bounce Animation Loop
DESCRIPTION: This snippet demonstrates creating a looping bounce animation using Anime.js's `animate` function.  It targets elements with the class `.logo.js` and animates their `scale` property with custom easing functions and durations. The animation loops indefinitely with a specified delay.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationgetting-startedusing-with-vanilla-js.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
// Created a bounce animation loop
animate('.logo.js', {
  scale: [
    { to: 1.25, ease: 'inOut(3)', duration: 200 },
    { to: 1, ease: createSpring({ stiffness: 300 }) }
  ],
  loop: true,
  loopDelay: 250,
});
```

----------------------------------------

TITLE: Setting Animation Values in Anime.js
DESCRIPTION: Demonstrates different ways to specify animation values in Anime.js including direct values, function-based values, relative values, and property objects with 'from' values.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-value-types.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
animate('.square', {
  x: '6rem', 
  y: $el => $el.dataset.y, 
  scale: '+=.25', 
  opacity: {
    from: .4, 
  },
});
```

----------------------------------------

TITLE: Setting Global Default Duration in AnimeJS
DESCRIPTION: Code showing how to change the default animation duration globally by updating the engine.defaults object. This affects all animations that don't specify a duration.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-playback-settingsduration.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.duration = 500;
```

----------------------------------------

TITLE: Importing and Using the WAAPI Version of Anime.js
DESCRIPTION: Shows how to import and use the Web Animation API (WAAPI) powered version of Anime.js, which is more lightweight (3KB) compared to the standard JavaScript version (10KB).
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimation.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { waapi } from 'animejs';

const animation = waapi.animate(targets, parameters);
```

----------------------------------------

TITLE: Creating a Timeline in Anime.js
DESCRIPTION: Demonstrates how to import and create a timeline using the createTimeline function from Anime.js. The timeline can be used to synchronize animations, timers, and functions.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimeline.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline } from 'animejs';

const timeline = createTimeline(parameters);
```

----------------------------------------

TITLE: Animating Elements with Scroll-based Autoplay - JavaScript/Anime.js
DESCRIPTION: This JavaScript snippet utilizes Anime.js to animate a square element's position and rotation based on scrolling within a specified container. The animation links its progress to the scroll position with a smooth easing effect, providing dynamic feedback to the user's scrolling action.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-synchronisation-modessmooth-scroll.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { animate, onScroll } from 'animejs';

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: .25,
    debug: true,
  })
});
```

----------------------------------------

TITLE: Adding Labels to AnimeJS Timeline in JavaScript
DESCRIPTION: This snippet demonstrates how to create a timeline and add labels at specific time positions. It then uses these labels to add animations to different elements at the labeled positions.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodslabel.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline } from 'animejs';

const tl = createTimeline()
.label('circle', 0)
.label('square', 500)
.label('triangle', 1000)
.add('.square', {
  x: '17rem',
  duration: 500,
}, 'square')
.add('.circle', {
  x: '13rem',
  duration: 1000,
}, 'circle')
.add('.triangle', {
  x: '15rem',
  rotate: '1turn',
  duration: 500,
}, 'triangle');
```

----------------------------------------

TITLE: Complex Keyframe Animation with Multiple Properties - JavaScript
DESCRIPTION: Shows a comprehensive example of keyframe animation with multiple properties including translation, scaling, and rotation. Includes various animation parameters like duration, easing, and looping.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationkeyframestween-values-keyframes.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
animate('.square', {
  translateX: ['0rem', 0, 17, 17, 0, 0],
  translateY: ['0rem', -2.5, -2.5, 2.5, 2.5, 0],
  scale: [1, 1, .5, .5, 1, 1],
  rotate: { to: 360, ease: 'linear' },
  duration: 3000,
  ease: 'inOut', // ease applied between each keyframes if no ease defined
  playbackEase: 'ouIn(5)', // ease applied accross all keyframes
  loop: true,
});
```

----------------------------------------

TITLE: Creating a Timeline with Various Position Types in Anime.js
DESCRIPTION: This example demonstrates how to create an Anime.js timeline with different time position strategies. It creates a timeline with labeled positions, absolute positioning (at 500ms), label-based positioning ('start'), and relative positioning ('<-=250') for different elements.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetime-position.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline } from 'animejs';

const tl = createTimeline()
.label('start', 0)
.add('.square', {
  x: '15rem',
  duration: 500,
}, 500)
.add('.circle', {
  x: '15rem',
  duration: 500,
}, 'start')
.add('.triangle', {
  x: '15rem',
  rotate: '1turn',
  duration: 500,
}, '<-=250');
```

----------------------------------------

TITLE: Using onBegin Callback in Anime.js Animation
DESCRIPTION: This code snippet shows how to create an animation using Anime.js and implement the onBegin callback. The callback updates a DOM element with the animation's 'began' status when it starts.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-callbacksonbegin.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

const [ $value ] = utils.$('.value');

const animation = animate('.circle', {
  x: '16rem',
  delay: 1000, // Delays the onBegin() callback by 1000ms
  onBegin: self => $value.textContent = self.began
});
```

----------------------------------------

TITLE: Using onComplete Callback in Anime.js Animation
DESCRIPTION: Shows how to implement the onComplete callback in an Anime.js animation. This example creates an animation that moves an element with class 'circle', loops twice with alternating direction, and updates text content when the animation completes.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-callbacksoncomplete.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

const [ $value ] = utils.$('.value');

const animation = animate('.circle', {
  x: '16rem',
  delay: 500,
  loop: 2,
  alternate: true,
  onComplete: self => $value.textContent = self.completed
});
```

----------------------------------------

TITLE: Implementing Complex Keyframe Animation with Anime.js
DESCRIPTION: Demonstrates creating a complex animation sequence using keyframes in Anime.js. The animation includes multiple properties (x, y, scale, rotate) with individual timing, easing, and delay parameters for each keyframe. The animation is set to loop with a total duration of 3000ms.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationkeyframestween-parameters-keyframes.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

animate('.square', {
  x: [
    { to: '17rem', duration: 700, delay: 400 },
    { to: 0, duration: 700, delay: 800 },
  ],
  y: [
    { to: '-2.5rem', ease: 'out', duration: 400 },
    { to: '2.5rem', duration: 800, delay: 700 },
    { to: 0, ease: 'in', duration: 400, delay: 700 },
  ],
  scale: [
    { to: .5, duration: 700, delay: 400 },
    { to: 1, duration: 700, delay: 800 },
  ],
  rotate: { to: 360, ease: 'linear' },
  duration: 3000,
  ease: 'inOut', // ease applied between each keyframes if no ease defined
  playbackEase: 'ouIn(5)', // ease applied accross all keyframes
  loop: true,
});
```

LANGUAGE: html
CODE:
```
<div class="medium row">
  <div class="square"></div>
</div>
```

----------------------------------------

TITLE: Adding Animations and Timers to Anime.js Timeline
DESCRIPTION: This example demonstrates how to create a timeline and add labels, timers, and animations to it. It shows how to reference labels as position markers and update DOM elements during animation.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodsadd.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $value ] = utils.$('.value');

const tl = createTimeline()
// Add labels
.label('start timer 1', 0)
.label('animate circle', 1000)
.label('start timer 2', 2000)
// Add Timer
.add({
  duration: 1000,
  onUpdate: self => $value.innerHTML = self.currentTime,
}, 'start timer 1')
// Add Animation
.add('.circle', {
  duration: 2000,
  x: '16rem',
}, 'animate circle')
// Add Timer
.add({
  duration: 1000,
  onUpdate: self => $value.innerHTML = self.currentTime,
}, 'start timer 2');
```

----------------------------------------

TITLE: Comparing AnimeJS WAAPI adapter with native Web Animation API
DESCRIPTION: This code snippet compares the syntax of AnimeJS's WAAPI adapter with the equivalent native Web Animation API implementation. While AnimeJS uses 'loop: 3', the native WAAPI uses 'iterations: 4' to achieve the same effect.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiapi-differences-with-native-waapiiterations.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
// Anime.js
waapi.animate('.square', {
  x: 100,
  loop: 3
});

// WAAPI equivalent
const targets = document.querySelectorAll('.square');

targets.forEach(($el, i) => {
  $el.animate({
    translate: '100px',
  }, {
    fill: 'forwards',
    duration: 1000,
    iterations: 4
  })
});
```

----------------------------------------

TITLE: Adding Functions to Timeline in Anime.js
DESCRIPTION: Demonstrates how to add callback functions to a timeline at specific time positions using the call() method. The example selects DOM elements using utils.$() and updates their innerHTML at different timestamps (0ms, 800ms, and 1200ms).
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinecall-functions.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $functionA ] = utils.$('.function-A');
const [ $functionB ] = utils.$('.function-B');
const [ $functionC ] = utils.$('.function-C');

const tl = createTimeline()
.call(() => $functionA.innerHTML = 'A', 0)
.call(() => $functionB.innerHTML = 'B', 800)
.call(() => $functionC.innerHTML = 'C', 1200);
```

----------------------------------------

TITLE: Accessing Animation Methods in Anime.js
DESCRIPTION: Demonstrates several animation control methods that can be called on an animation instance, including pause(), play(), and restart().
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-methods.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
animation.pause()
animation.play()
animation.restart()
```

----------------------------------------

TITLE: Animating with ScrollObserver in Anime.js - JavaScript
DESCRIPTION: This JavaScript snippet uses Anime.js to animate elements based on scroll events. It utilizes the ScrollObserver to define callbacks that are triggered at certain scroll positions. The snippet requires Anime.js and targets elements within a specified container on the y-axis. It supports multiple callbacks for handling enter, leave, and update events.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-callbacks.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
animate('.square', {
  x: 100,
  autoplay: onScroll({
    container: '.container',
    target: '.section',
    axis: 'y',
    enter: 'bottom top',
    leave: 'top bottom',
    sync: true,
    onEnter: () => {},
    onLeave: () => {},
    onUpdate: () => {}
  })
});
```

----------------------------------------

TITLE: Configuring Animation Playback Settings in AnimeJS
DESCRIPTION: Example showing how to set various animation properties including playback settings like loop, alternate, and autoplay in an AnimeJS animation. This demonstrates the structure of an animation declaration with highlighted playback settings.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-playback-settings.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
animate('.square', {
  translateX: 100,
  scale: 2,
  opacity: .5,
  duration: 400,
  delay: 250,
  ease: 'out(3)',
  loop: 3,          
  alternate: true,  
  autoplay: false,  
  onBegin: () => {},
  onLoop: () => {},
  onUpdate: () => {},
});
```

----------------------------------------

TITLE: Using Anime.js UMD Modules from local file
DESCRIPTION: This code shows how to import Anime.js as an UMD module after downloading the library directly from GitHub and placing it in your project directory. The script tag includes the 'type=module' attribute to treat the code as a module.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationgetting-startedinstallation.md#2025-04-18_snippet_5

LANGUAGE: html
CODE:
```
<script type="module">
  import { animate } from './path/to/anime.esm.min.js';
</script>
```

----------------------------------------

TITLE: Defining Animatable Properties in Anime.js
DESCRIPTION: This code snippet demonstrates how to define animatable properties in Anime.js using the animate() function. The example shows how to animate translateX, scale, and opacity properties along with animation configuration options like duration, delay, easing, looping, and callbacks.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimatable-properties.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
animate('.square', {
  translateX: 100,
  scale: 2,
  opacity: .5,
  duration: 400,
  delay: 250,
  ease: 'out(3)',
  loop: 3,
  alternate: true,
  autoplay: false,
  onBegin: () => {},
  onLoop: () => {},
  onUpdate: () => {},
});
```

----------------------------------------

TITLE: HTML Structure for AnimeJS Getter Demo
DESCRIPTION: This HTML structure creates the interface for the interactive demonstration. It includes elements to display the x and y coordinates of the circle as it follows mouse movement.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimatableanimatable-methodsgetters.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large row">
  <div class="col">
    <div class="large row">
      <pre class="large log row">
        <span class="label">x</span>
        <span class="coords x value">0</span>
      </pre>
    </div>
  </div>
  <div class="col" style="flex: .25; z-index: 3;">
    <div class="large centered row">
      <div class="circle"></div>
    </div>
  </div>
  <div class="col">
    <div class="large row">
      <pre class="large log row">
        <span class="label">y</span>
        <span class="coords y value">0</span>
      </pre>
    </div>
  </div>
</div>
<div class="medium centered row">
  <span class="label">Move cursor around</span>
</div>
```

----------------------------------------

TITLE: Implementing playbackEase Animation in Anime.js (JavaScript)
DESCRIPTION: Demonstrates how to animate an element with keyframes while applying a global easing function across all keyframes using the playbackEase parameter. This example creates a looping animation with multiple position, rotation, and scale changes.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-playback-settingsplaybackease.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

animate('.square', {
  keyframes: [
    { y: '-2.5rem', duration: 400 },
    { x: '17rem', rotate: 180, scale: .5 },
    { y: '2.5rem' },
    { x: 0, rotate: 360, scale: 1 },
    { y: 0, duration: 400 }
  ],
  duration: 4000,
  playbackEase: 'inOut(3)', // this ease is applied accross all keyframes
  loop: true,
});
```

----------------------------------------

TITLE: Implementing onLoop Callback in an Anime.js Timeline
DESCRIPTION: Demonstrates how to create a timeline with an onLoop callback that increments and displays a counter for each completed loop. The timeline animates three shapes with a loop delay and updates the DOM with the loop count.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-callbacksonloop.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let loops = 0;

const tl = createTimeline({
  defaults: { duration: 500 },
  loopDelay: 500,
  loop: true,
  onLoop: self => $value.textContent = ++loops
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' })
.add('.square', { x: '15rem' });
```

----------------------------------------

TITLE: Animating CSS Variables with Anime.js
DESCRIPTION: This code demonstrates how to set and animate CSS variables using Anime.js. It shows how to initialize variables including one applied to a pseudo-element, and then animate those variables. The example includes changing border radius, translation, and scaling of a pseudo-element.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimatable-propertiescss-variables.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

// Set the CSS variables as properties on the animated elements
utils.set('.square', {
  '--radius': '4px',
  '--x': '0rem',
  '--pseudo-el-after-scale': '1', // applied to the pseudo element "::after"
  borderRadius: 'var(--radius)',
  translateX: 'var(--x)',
});

// Animate the values of the CSS variables
animate('.square', {
  '--radius': '20px',
  '--x': '16.5rem',
  '--pseudo-el-after-scale': '1.55' // Animates the ":after" pseudo element of the element
});
```

----------------------------------------

TITLE: Configuring Global Default for onUpdate Callback in AnimeJS
DESCRIPTION: This snippet demonstrates how to change the default onUpdate callback globally for all animations using the engine.defaults object in AnimeJS.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-callbacksonupdate.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.onUpdate = self => console.log(self.id);
```

----------------------------------------

TITLE: Implementing Timeline.play() Method in Anime.js
DESCRIPTION: This code snippet demonstrates how to create a timeline with multiple animations and control it using the play() method. It creates a timeline with three animations for different shapes and attaches a click event listener to a play button.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodsplay.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $playButton ] = utils.$('.play');

const tl = createTimeline({
  autoplay: false
})
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const playTimeline = () => tl.play();

$playButton.addEventListener('click', playTimeline);
```

----------------------------------------

TITLE: Anime.js Stagger Modifier with boxShadow
DESCRIPTION: This JavaScript snippet demonstrates the use of the stagger modifier in Anime.js to control the box-shadow of multiple elements. It defines a function that modifies the staggered value to generate different box-shadow offsets based on the input value. The animation is set to loop indefinitely.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationstaggerstagger-parametersstagger-modifier.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, stagger } from 'animejs';

animate('.square', {
  boxShadow: [
    { to: stagger([1, .25], {
        modifier: v => `0 0 ${v * 30}px ${v * 20}px currentColor`,
        from: 'center'
      })
    },
    { to: 0 },
  ],
  delay: stagger(100, { from: 'center' }),
  loop: true
});
```

----------------------------------------

TITLE: Using seek() Method in Anime.js Animation
DESCRIPTION: This snippet demonstrates how to use the seek() method in an Anime.js animation. It creates an animation for squares, implements play/pause functionality, and allows seeking to specific times using a range input.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-methodsseek.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, utils, stagger } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $playPauseButton ] = utils.$('.play-pause');

const updateButtonLabel = animation => {
  $playPauseButton.textContent = animation.paused ? 'Play' : 'Pause';
}

const animation = animate('.square', {
  x: '17rem',
  ease: 'inOutSine',
  duration: 1750,
  delay: stagger(250),
  autoplay: false,
  onUpdate: self => {
    $range.value = self.currentTime;
    updateButtonLabel(self);
  },
  onComplete: updateButtonLabel,
});

const seekAnimation = () => animation.seek(+$range.value);

const playPauseAnimation = () => {
  if (animation.paused) {
    animation.play();
  } else {
    animation.pause();
    updateButtonLabel(animation);
  }
}

$range.addEventListener('input', seekAnimation);
$playPauseButton.addEventListener('click', playPauseAnimation);
```

----------------------------------------

TITLE: Anime.js Stagger Example
DESCRIPTION: This example demonstrates how to use the `stagger` function in Anime.js to create staggered animations. It shows different options for staggering, including `start`, `from`, `reversed`, `ease`, and `grid` parameters.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationstaggerstagger-value-types.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
stagger(
  /*───────────────────*/
  '1rem',
  /*───────────────────*/
  {
    start: 100,
    from: 2,
    reversed: false,
    ease: 'outQuad',
    grid: [8, 8],
  }
);
```

----------------------------------------

TITLE: Complete Anime.js Animation with Percentage-based Keyframes
DESCRIPTION: A comprehensive example showing how to animate an element using percentage-based keyframes with the Anime.js library. It demonstrates multiple keyframes with different properties, custom easing, and animation configuration options.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationkeyframespercentage-based-keyframes.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

animate('.square', {
  keyframes: {
    '0%'  : { x: '0rem', y: '0rem', ease: 'out' },
    '13%' : { x: '0rem', y: '-2.5rem', },
    '37%' : { x: '17rem', y: '-2.5rem', scale: .5 },
    '63%' : { x: '17rem', y: '2.5rem', scale: .5 },
    '87%' : { x: '0rem', y: '2.5rem', scale: 1 },
    '100%': { y: '0rem', ease: 'in' }
  },
  rotate: { to: 360, ease: 'linear' },
  duration: 3000,
  ease: 'inOut', // ease applied between each keyframes if no ease defined
  playbackEase: 'ouIn(5)', // ease applied accross all keyframes
  loop: true,
});
```

----------------------------------------

TITLE: Configuring Animatable Properties in AnimeJS
DESCRIPTION: Demonstrates how to set both specific and global animation properties using createAnimatable. Shows configuration of unit types, duration, and easing for individual properties as well as global settings.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimatableanimatable-settings.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
createAnimatable(targets, {
  x: {
    unit: 'rem',
    duration: 400,
    ease: 'out(4)'
  },
  y: 200,
  rotate: 1000,
  ease: 'out(2)'
});
```

----------------------------------------

TITLE: Creating Draggable Elements with Container Boundaries in Anime.js
DESCRIPTION: This snippet demonstrates how to create draggable elements with specified container boundaries using Anime.js. It shows two examples: one using a CSS selector to define the container, and another using an array of numerical values.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-settingscontainer.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
});

createDraggable('.circle', {
  container: [-16, 80, 16, 0],
});
```

----------------------------------------

TITLE: Creating Timeline Instance in Anime.js
DESCRIPTION: Demonstrates how to create a Timeline instance with parameters that provides control over animation timing and progression.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methods.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const timeline = createTimeline(parameters);
```

----------------------------------------

TITLE: Animating with Individual Property Parameters using Anime.js WAAPI
DESCRIPTION: This code demonstrates how to animate multiple properties with individual parameter configurations. Each property can have its own specific to/from values, ease function, and duration while sharing global animation parameters.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiimprovements-to-the-web-animation-apiindividual-property-parameters.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
waapi.animate('.square', {
  y: {
    to: [0, -30, 0],
    ease: 'out(4)',
    duration: 1000,
  },
  rotate: { from: -180, to: 0, ease: 'out(3)' },
  scale: { to: [.65, 1, .65], ease: 'inOut(3)' },
  duration: 500,
  delay: stagger(75),
  loop: true,
});
```

----------------------------------------

TITLE: Implementing Various Loop Behaviors in Anime.js
DESCRIPTION: Shows different ways to implement loop behaviors in Anime.js animations including basic looping with a specified count, looping with alternating direction, looping with reversed animation, and infinite looping. Each example moves an element 17.5rem along the x-axis with different loop configurations.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-playback-settingsloop.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

animate('.loop', {
  x: '17.5rem',
  loop: 3,
});

animate('.loop-alternate', {
  x: '17.5rem',
  loop: 3,
  alternate: true,
});

animate('.loop-reverse', {
  x: '17.5rem',
  loop: 3,
  reversed: true,
});

animate('.loop-infinity', {
  x: '17.5rem',
  loop: true, // Or Infinity
});
```

----------------------------------------

TITLE: Using Anime.js Global Object from local file
DESCRIPTION: This snippet demonstrates how to use Anime.js as a global object after downloading the library and including it in your HTML. It accesses the animate function from the global anime object.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationgetting-startedinstallation.md#2025-04-18_snippet_6

LANGUAGE: html
CODE:
```
<script src="path/to/anime.iife.min.js"></script>

<script>
  const { animate } = anime;
</script>
```

----------------------------------------

TITLE: Animating CSS Transforms with AnimeJS
DESCRIPTION: Demonstrates two methods of animating CSS transforms using AnimeJS: direct property animation with JavaScript and WAAPI method. Shows how to use individual transform properties and the recommended WAAPI approach for direct transform animations.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimatable-propertiescss-transforms.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, waapi } from 'animejs';

animate('.square', {
  x: '15rem', // TranslateX shorthand
  scale: 1.25,
  skew: -45,
  rotate: '1turn',
});

// the WAAPI version is recommanded if you want to animate the transform property directly
waapi.animate('.square', {
  transform: 'translateX(15rem) scale(1.25) skew(-45deg) rotate(1turn)',
});
```

----------------------------------------

TITLE: Animating SVG Polygon Points with Anime.js
DESCRIPTION: Example of animating an SVG polygon shape by modifying its points attribute in a looping animation. The animation transitions between different polygon shapes and alternates back and forth.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimatable-propertiessvg-attributes.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
animate('polygon', {
  points: '64 68.64 8.574 100 63.446 67.68 64 4 64.554 67.68 119.426 100',
  alternate: true,
  loop: true
});
```

----------------------------------------

TITLE: Setting Default onRender Callback Globally in Anime.js
DESCRIPTION: This snippet demonstrates how to set a default onRender callback globally for all Anime.js animations by updating the engine.defaults object.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-callbacksonrender.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.onRender = self => console.log(self.id);
```

----------------------------------------

TITLE: Using revert() Method to Cancel and Revert AnimeJS Animations in JavaScript
DESCRIPTION: This snippet demonstrates how to create a staggered animation with AnimeJS and implement revert() and restart() functionality through button clicks. It imports required functions from AnimeJS, sets up a staggered animation on multiple square elements, and attaches event listeners to buttons that control the animation state.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-methodsrevert.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, utils, stagger } from 'animejs';

const [ $revertButton ] = utils.$('.revert');
const [ $restartButton ] = utils.$('.restart');

// Set an initial translateX value
utils.set('.square', { x: '17rem' });

const animation = animate('.square', {
  x: 0,
  alternate: true,
  ease: 'inOutSine',
  loop: true,
  delay: stagger(100),
});

const revertAnimation = () => animation.revert();
const restartAnimation = () => animation.restart();

$revertButton.addEventListener('click', revertAnimation);
$restartButton.addEventListener('click', restartAnimation);
```

----------------------------------------

TITLE: Animating Elements with Function-based Values using Anime.js
DESCRIPTION: This snippet shows how to use Anime.js to animate multiple '.square' elements with function-based values for translation, rotation, and scaling. It also demonstrates the use of the stagger function for delayed animations.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiimprovements-to-the-web-animation-apifunction-based-values.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
waapi.animate('.square', {
  translate: () => `${utils.random(10, 17)}rem`,
  rotate: () => utils.random(-180, 180),
  scale: (_, i) => .25 + (i * .25),
  delay: stagger(100)
});
```

----------------------------------------

TITLE: Animating Element with Scroll Synchronization using Anime.js in JavaScript
DESCRIPTION: This snippet demonstrates how to animate an element's properties and synchronize its playback with the scroll position using Anime.js. It utilizes the 'animate' function and 'onScroll' method, with set parameters for scroll tracking and sync. Required dependencies include Anime.js and a scroll container element.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-synchronisation-modesplayback-progress.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { animate, onScroll } from 'animejs';

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: true,
    debug: true,
  })
});
```

----------------------------------------

TITLE: Configuring Global and Local Tween Parameters in Anime.js
DESCRIPTION: This example demonstrates how to set both global and local tween parameters in an Anime.js animation. Global parameters (duration, delay, ease, loop, alternate) apply to all properties, while local parameters can be defined for specific properties to override the global settings.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-parameters.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
animate('.square', {
  x: {
    to: 100,
    delay: 0,
    ease: 'inOut(4)'
  },
  scale: 1,
  opacity: .5,
  duration: 400,
  delay: 250,
  ease: 'out(3)',
  loop: 3,
  alternate: true,
});
```

----------------------------------------

TITLE: Converting Spring Easing Function to WAAPI Compatible Linear Easing
DESCRIPTION: Basic example showing how to convert a spring easing function to WAAPI compatible linear easing. It imports the necessary functions from anime.js, creates a spring with specified stiffness, and converts it to a linear easing function for WAAPI.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiwaapi-convertease.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { waapi, createSpring } from 'animejs';

const spring = createSpring({ stiffness: 12 });

const linearEasing = waapi.convertEase(spring.ease);
```

----------------------------------------

TITLE: Implementing onBeforeUpdate Callback in AnimeJS Animation
DESCRIPTION: This example shows how to use the onBeforeUpdate callback in an AnimeJS animation. It animates a circle element, updates a counter, and modifies the animation based on its progress. The callback is executed before each frame update.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-callbacksonbeforeupdate.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let mult = 1;
let updates = 0;

const animation = animate('.circle', {
  x: '16rem',
  loopDelay: 1500,
  modifier: v => mult * v,
  loop: true,
  alternate: true,
  onBeforeUpdate: self => {
    $value.textContent = ++updates;
    // Update the mult value just before updating the tweens
    mult = 1 - self.iterationProgress;
  }
});
```

----------------------------------------

TITLE: Creating a Manual Timeline with Playback Control in Anime.js
DESCRIPTION: Example of creating a timeline with autoplay disabled that requires manual playback control. The code sets up a timeline with animation sequences for multiple elements and adds a click event listener to a play button.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-playback-settingsautoplay.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $paused ] = utils.$('.paused');
const [ $play ] = utils.$('.play');

const tl = createTimeline({
  autoplay: false,
  onUpdate: self => $paused.innerHTML = !!self.paused,
  onComplete: self => $paused.innerHTML = !!self.paused
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '-=500')
.add('.square', { x: '15rem' }, '-=500');

const playTl = () => tl.paused ? tl.restart() : tl.play();

$play.addEventListener('click', playTl);
```

----------------------------------------

TITLE: HTML Structure for CSS Variables Animation Demo
DESCRIPTION: HTML markup showing the structure used for demonstrating CSS variable animations. It consists of three rows, each containing a square element that will be animated using the CSS variables.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimatable-propertiescss-variables.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="medium row">
  <div class="css-variables square"></div>
</div>
<div class="medium row">
  <div class="css-variables square"></div>
</div>
<div class="medium row">
  <div class="css-variables square"></div>
</div>
```

----------------------------------------

TITLE: Applying Stagger Effects with Anime.js in JavaScript
DESCRIPTION: The JavaScript snippet demonstrates how to apply stagger effects using Anime.js, which includes altering the y-position of elements in a staggered manner with ease functions. Dependencies include Anime.js, and it manipulates DOM elements with the class '.square'. The primary inputs are element selectors and stagger configurations. The result is a smooth animation of movement and delay.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationstaggerstagger-parametersstagger-ease.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { animate, stagger } from 'animejs';

animate('.square', {
  y: stagger(['2.75rem', '-2.75rem'], { ease: 'inOut(3)' }),
  delay: stagger(100, { ease: 'inOut(3)' }),
});
```

----------------------------------------

TITLE: Creating and Adding Animations to a Timeline in AnimeJS
DESCRIPTION: Code example that demonstrates creating a timeline in AnimeJS and using both sync() and add() methods to add animations. This showcases how to create external animations and synchronize them with a timeline as well as adding animations directly to a timeline with various parameters.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelineadd-animations.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline, animate } from 'animejs';

const circleAnimation = animate('.circle', {
  x: '15rem'
});

const tl = createTimeline()
.sync(circleAnimation)
.add('.triangle', {
  x: '15rem',
  rotate: '1turn',
  duration: 500,
  alternate: true,
  loop: 2,
})
.add('.square', {
  x: '15rem',
});
```

----------------------------------------

TITLE: Implementing Timeline Reverse Animation with Anime.js
DESCRIPTION: Creates an animation timeline with sequential animations for multiple elements and implements a reverse functionality triggered by a button click. The timeline animates circle, triangle, and square elements along the x-axis with different delays.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodsreverse.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $reverseButton ] = utils.$('.reverse');

const tl = createTimeline()
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const reverseTimeline = () => tl.reverse();

$reverseButton.addEventListener('click', reverseTimeline);
```

----------------------------------------

TITLE: Implementing Motion Path Animation with Anime.js
DESCRIPTION: Demonstrates how to animate an element along a motion path using Anime.js, including both the element animation and path drawing animation.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationsvgcreatemotionpath.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate, svg } from 'animejs';

// Animate the transforms properties of .car the motion path values
const carAnimation = animate('.car', {
  ease: 'linear',
  duration: 5000,
  loop: true,
  ...svg.createMotionPath('path')
});

// Line drawing animation following the motion path values
// For demo aesthetic only
animate(svg.createDrawable('path'), {
  draw: '0 1',
  ease: 'linear',
  duration: 5000,
  loop: true
});
```

----------------------------------------

TITLE: Using Anime.js with Async/Await
DESCRIPTION: Shows how to use Anime.js animations with async/await pattern. The function returns the animation which can be awaited to continue execution after completion.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiapi-differences-with-native-waapifinished.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
async function waitForAnimationToComplete() {
  return animate(target, {
    translate: '100px',
    duration: 500,
  });
}

const asyncAnimation = await waitForAnimationToComplete();
```

----------------------------------------

TITLE: Animating Elements with Scroll Observer in Anime.js
DESCRIPTION: This snippet imports essential functions from the Anime.js library and uses the animate function to animate elements with the class '.square'. The animations are triggered by scroll events, defined by the minimum and maximum thresholds for entering and leaving the viewport.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-thresholdsmin-max.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, onScroll, utils } from 'animejs';

utils.$('.square').forEach($square => {
  animate($square, {
    x: '15rem',
    rotate: '1turn',
    duration: 2000,
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      container: '.scroll-container',
      sync: 1,
      enter: 'max bottom',
      leave: 'min top',
      debug: true
    })
  });
});
```

----------------------------------------

TITLE: HTML Structure for Anime.js Pause Demo
DESCRIPTION: HTML structure for demonstrating the pause functionality in Anime.js. It includes square elements that will be animated and a pause button to control the animation.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-methodspause.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button pause">Pause</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: Using Timeline cancel() Method with AnimeJS
DESCRIPTION: Demonstrates how to create a timeline with multiple animations and implement cancel functionality. The code creates a timeline that animates three shapes, then sets up event handlers for cancel and play buttons.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodscancel.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $cancelButton ] = utils.$('.cancel');
const [ $playButton ] = utils.$('.play');

const tl = createTimeline({
  loop: true,
  alternate: true,
})
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const cancelTimeline = () => tl.cancel();
const playTimeline = () => tl.play();

$cancelButton.addEventListener('click', cancelTimeline);
$playButton.addEventListener('click', playTimeline);
```

----------------------------------------

TITLE: Creating Looped Timeline Animation
DESCRIPTION: Demonstrates creating a timeline animation with infinite loops and a loop counter callback. The animation moves three shapes sequentially with overlapping timing.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-playback-settingsloop.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $loops ] = utils.$('.loops');

let loops = 0;

const tl = createTimeline({
  loop: true,
  onLoop: self => $loops.innerHTML = ++loops,
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '-=500')
.add('.square', { x: '15rem' }, '-=500');
```

----------------------------------------

TITLE: Creating Motion Path Parameters in Anime.js
DESCRIPTION: Creates pre-defined Tween parameter objects that animate along an SVG path's coordinates and inclination, returning translateX, translateY, and rotate properties.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationsvgcreatemotionpath.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const { translateX, translateY, rotate } = svg.createMotionPath(path);
```

----------------------------------------

TITLE: Using Anime.js from CDN as Global object
DESCRIPTION: This snippet shows how to include Anime.js from a CDN as a global object. This approach makes Anime.js functions available directly in the global scope.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationgetting-startedinstallation.md#2025-04-18_snippet_3

LANGUAGE: html
CODE:
```
<script src="https://cdn.jsdelivr.net/npm/animejs@4.0.0/lib/anime.iife.min.js"></script>

<script>
  const { animate } = anime;
</script>
```

----------------------------------------

TITLE: Implementing Staggered Timeline Animations with Anime.js
DESCRIPTION: This example demonstrates how to use the stagger function in Anime.js to position animations with consistent delays between targets. It creates a timeline with staggered animations that include callbacks which are also staggered for each target.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationstaggertimeline-positions-staggering.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline, stagger, utils } from 'animejs';

const tl = createTimeline();

const onComplete = ({ targets }) => {
  utils.set(targets, { color: 'var(--hex-red)' });
}

tl
.add('.circle', { x: '15rem', onComplete })
.label('circle completes')
.add(['.triangle', '.square'], {
  x: '15rem',
  onComplete, // Callbacks are aslo staggered
}, stagger(500, { start: 'circle completes-=500' }));
```

----------------------------------------

TITLE: Using Animatable with Mouse Movement in AnimeJS
DESCRIPTION: A complete example demonstrating how to use Animatable to create smooth animations that follow mouse movement. The snippet creates an animatable square that responds to cursor position with customized easing and duration.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimatable.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createAnimatable, utils } from 'animejs';

const $demos = document.querySelector('#docs-demos');
const $demo = $demos.querySelector('.docs-demo.is-active');

let bounds = $demo.getBoundingClientRect();
const refreshBounds = () => bounds = $demo.getBoundingClientRect();

const animatableSquare = createAnimatable('.square', {
  x: 500, // Define the x duration to be 500ms
  y: 500, // Define the y duration to be 500ms
  ease: 'out(3)',
});

const onMouseMove = e => {
  const { width, height, left, top } = bounds;
  const hw = width / 2;
  const hh = height / 2;
  const x = utils.clamp(e.clientX - left - hw, -hw, hw);
  const y = utils.clamp(e.clientY - top - hh, -hh, hh);
  animatableSquare.x(x); // Animate the x value in 500ms
  animatableSquare.y(y); // Animate the y value in 500ms
}

window.addEventListener('mousemove', onMouseMove);
$demos.addEventListener('scroll', refreshBounds);
```

----------------------------------------

TITLE: Animating SVG Filter Effects with Anime.js
DESCRIPTION: Example of animating SVG filter elements (feTurbulence and feDisplacementMap) by changing their baseFrequency and scale properties in a looping animation. This creates a dynamic displacement effect that alternates.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimatable-propertiessvg-attributes.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

animate(['feTurbulence', 'feDisplacementMap'], {
  baseFrequency: .05,
  scale: 15,
  alternate: true,
  loop: true
});
```

----------------------------------------

TITLE: Implementing onUpdate Callback in AnimeJS Animation
DESCRIPTION: This code creates an animation using AnimeJS, with an onUpdate callback that updates a DOM element's text content on each frame. It also demonstrates importing utilities and setting up loop and alternate options.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-callbacksonupdate.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let updates = 0;

const animation = animate('.circle', {
  x: '16rem',
  loopDelay: 1500,
  loop: true,
  alternate: true,
  onUpdate: self => $value.textContent = ++updates
});
```

----------------------------------------

TITLE: Creating Timeline with onComplete Callback in Anime.js
DESCRIPTION: This code creates a timeline using Anime.js, setting up animations for multiple elements. It demonstrates how to use the onComplete callback to update a DOM element when the timeline completes.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-callbacksoncomplete.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $value ] = utils.$('.value');

const tl = createTimeline({
  defaults: { duration: 500 },
  loop: 1,
  onComplete: self => $value.textContent = self.completed
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' })
.add('.square', { x: '15rem' });
```

----------------------------------------

TITLE: Defining a ScrollObserver Instance
DESCRIPTION: This snippet demonstrates how to initialize a ScrollObserver using the 'onScroll' function. The properties provided, such as 'target', 'linked', and 'repeat', allow the observer to manage and track the target element's scroll states. Dependencies include the Anime.js library. The function requires parameters detailing scroll behavior, and it outputs an instance with various scroll-related properties.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-properties.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
const scrollObserver = onScroll(parameters);
       ┌───────┐
scrollObserver.│target │
scrollObserver.│linked ├─ Properties
scrollObserver.│repeat │
       └───────┘
```

----------------------------------------

TITLE: Anime.js Scroll Animation Example
DESCRIPTION: This code snippet demonstrates the usage of Anime.js with scroll to trigger animations.  It defines a container element using `utils.$('.scroll-container')` and sets up an animation for elements with the class 'square', which moves them along the x-axis and rotates them when the container is scrolled.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscroll.md#2025-04-18_snippet_3

LANGUAGE: javascript
CODE:
```
import { animate, utils, onScroll } from 'animejs';

const [ container ] = utils.$('.scroll-container');
const debug = true;

// Animation

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  duration: 2000,
  alternate: true,
  loop: true,
  autoplay: onScroll({ container, debug })
});
```

----------------------------------------

TITLE: Creating Scoped Animations and Draggables in Anime.js
DESCRIPTION: This snippet initializes a new scope with media queries and default settings. It registers a constructor function that animates an element based on the media query match, using Anime.js to either animate the square or create a draggable element. It also returns a cleanup function to remove any added class when the scope reverts.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscopeadd-constructor-function.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { utils, animate, createScope, createDraggable } from 'animejs';

createScope({
  mediaQueries: { isSmall: '(max-width: 200px)' },
  defaults: { ease: 'linear' },
})
.add(self => {

  /* Media queries state are accessible on the matches property */
  const { isSmall } = self.matches;
  /* The $() utility method is also scoped */
  const [ $square ] = utils.$('.square');

  if (self.matches.isSmall) {
    /* Only animate the square when the iframe is small */
    animate($square, {
      rotate: 360,
      loop: true,
    });
  } else {
    /* Only create the draggable when the iframe is large enough */
    $square.classList.add('draggable');
    createDraggable($square, {
      container: document.body,
    });
  }
  
  return () => {
    /* Removes the class 'draggable' when the scope reverts itself */
    $square.classList.remove('draggable');
  }

});
```

----------------------------------------

TITLE: Anime.js Engine Control Methods
DESCRIPTION: Core engine methods for managing animation lifecycle, including update, pause, and resume functionality. These methods provide granular control over animation playback and engine state.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationengineengine-methods.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
engine.update()
engine.pause()
engine.resume()
```

----------------------------------------

TITLE: Implementing Stagger Range Values with AnimeJS
DESCRIPTION: This code demonstrates how to use the stagger function with range values to distribute animations evenly. It animates elements with class 'square' using staggered y-position values between '2.75rem' and '-2.75rem', and delays between 0 and 500 milliseconds.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationstaggerstagger-value-typesrange-value.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, stagger } from 'animejs';

animate('.square', {
  y: stagger(['2.75rem', '-2.75rem']),
  delay: stagger([0, 500]),
});
```

----------------------------------------

TITLE: Displaying Animated Object State in HTML
DESCRIPTION: This HTML snippet shows how the animated object's state is displayed in the DOM. It uses a pre-formatted code block to show the current values of the object's properties as they are being animated.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimatable-propertiesjavascript-object-properties.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<pre class="row large centered">
  <code>{"number":1337,"unit":"42%"}</code>
</pre>
```

----------------------------------------

TITLE: Animating JavaScript Object Properties with Anime.js
DESCRIPTION: This snippet shows how to use Anime.js to animate properties of a JavaScript object. It animates a 2D vector object, updating its x and y coordinates, and logs the changes to the DOM.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtargetsjavascript-objects.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

const [ $log ] = utils.$('code');

const vector2D = { x: 0, y: 0 };

animate(vector2D, {
  x: 100,
  y: 150,
  modifier: utils.round(0),
  onUpdate: () => $log.textContent = JSON.stringify(vector2D),
});
```

----------------------------------------

TITLE: Synchronizing WAAPI Animations with Anime.js Timeline
DESCRIPTION: Shows how to create WAAPI animations for different shapes and synchronize them to an Anime.js timeline using the sync() method with different positions. This allows precise control over when each animation starts within the timeline sequence.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinesync-waapi-animations.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline, waapi } from 'animejs';

const circle = waapi.animate('.circle', {
  x: '15rem',
});

const triangle = waapi.animate('.triangle', {
  x: '15rem',
  y: [0, '-1.5rem', 0],
  ease: 'out(4)',
  duration: 750,
});

const square = waapi.animate('.square', {
  x: '15rem',
  rotateZ: 360,
});

const tl = createTimeline()
.sync(circle, 0)
.sync(triangle, 350)
.sync(square, 250);
```

----------------------------------------

TITLE: Animating a Staggered Grid in JavaScript using Anime.js
DESCRIPTION: This code snippet creates an animated grid effect by utilizing the stagger functionality provided by the Anime.js library. It allows squares in the grid to animate along the x and y axes with staggered delays according to defined parameters. The animation is recursive, allowing for continuous motion.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationstaggerstagger-parametersstagger-grid-axis.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, stagger } from 'animejs';

const grid = [11, 4];
const $squares = utils.$('.square');

function animateGrid() {
  const from = utils.random(0, 11 * 4);
  animate($squares, {
    translateX: [
      { to: stagger('-.75rem', { grid, from, axis: 'x' }) },
      { to: 0, ease: 'inOutQuad', },
    ],
    translateY: [
      { to: stagger('-.75rem', { grid, from, axis: 'y' }) },
      { to: 0, ease: 'inOutQuad' },
    ],
    opacity: [
      { to: .5 },
      { to: 1 }
    ],
    delay: stagger(85, { grid, from }),
    onComplete: animateGrid
  });
}

animateGrid();
```

----------------------------------------

TITLE: Creating an Animation Instance in Anime.js
DESCRIPTION: Shows how to create an animation instance object using the animate function, which allows calling animation methods on the returned object.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-methods.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const animation = animate(target, parameters);
```

----------------------------------------

TITLE: Implementing Timeline Revert Animation with AnimeJS - JavaScript
DESCRIPTION: Demonstrates how to create and control an animation timeline with revert functionality using AnimeJS. Sets up initial positions for shapes, creates a looping timeline animation, and implements revert and restart button handlers.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodsrevert.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $revertButton ] = utils.$('.revert');
const [ $restartButton ] = utils.$('.restart');

// Set an initial x value
utils.set(['.circle', '.triangle', '.square'], { x: '15rem' });

const tl = createTimeline({
  loop: true,
  alternate: true,
})
.add('.circle',   { x: 0 })
.add('.triangle', { x: 0 }, 500)
.add('.square',   { x: 0 }, 1000);

const revertTimeline = () => tl.revert();
const restartTimeline = () => tl.restart();

$revertButton.addEventListener('click', revertTimeline);
$restartButton.addEventListener('click', restartTimeline);
```

----------------------------------------

TITLE: Importing Anime.js Modules
DESCRIPTION: This code snippet demonstrates how to import specific modules from the Anime.js library. These modules include `animate` for creating animations, `utils` for utility functions like selecting DOM elements, and `createSpring` for creating spring-based easing functions.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationgetting-startedusing-with-vanilla-js.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, utils, createSpring } from 'animejs';
```

----------------------------------------

TITLE: Importing and Using WAAPI with Anime.js
DESCRIPTION: Basic syntax for creating WAAPI-powered animations in Anime.js. This shows how to import the waapi module and use the animate() method with targets and parameters.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-api.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { waapi } from 'animejs';

const animation = waapi.animate(targets, parameters);
```

----------------------------------------

TITLE: Animating with Reverse Stagger in Anime.js
DESCRIPTION: This code snippet demonstrates the use of the stagger function in Anime.js to create a staggered animation effect that operates in reverse. The 'reversed' parameter is set to true, which alters the animation timing for each element. The expected input is a series of elements with the class 'square', and the output is an animation that translates each element to the right over specified delays.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationstaggerstagger-parametersstagger-reversed.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, stagger } from 'animejs';

animate('.square', {
  translateX: '17rem',
  delay: stagger(100, { reversed: true }),
});
```

----------------------------------------

TITLE: Animating Elements on Scroll with Anime.js in JavaScript
DESCRIPTION: This JavaScript snippet uses the Anime.js library to animate a '.square' element. The animation involves moving the element horizontally by '15rem' and rotating it one full turn. It is coupled with a scroll event handler that increments a display value each time the scrolling forward exceeds a specified threshold. The animation autoplays on scroll events triggered by the 'onScroll' method, with debug mode enabled for detailed interaction feedback. The 'onLeaveForward' callback function is utilized for counting the exits. Key dependencies include Anime.js and a structured HTML layout where elements with classes like '.value' and '.square' are manipulated.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-callbacksonleaveforward.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { animate, onScroll, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let exits = 0;

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: true,
    debug: true,
    onLeaveForward: () => $value.textContent = ++exits,
  })
});
```

----------------------------------------

TITLE: Applying Multiple Spring Animations Using WAAPI
DESCRIPTION: Demonstration of applying different spring animations to multiple elements using WAAPI. This snippet creates three spring animations with different stiffness values, selects elements with querySelector, and applies animations with different settings to each element.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiwaapi-convertease.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { waapi, createSpring } from 'animejs';

const springs = [
  createSpring({ stiffness: 100 }),
  createSpring({ stiffness: 150 }),
  createSpring({ stiffness: 200 })
]

document.querySelectorAll('#web-animation-api-waapi-convertease .demo .square').forEach(($el, i) => {
  $el.animate({
    translate: '17rem',
    rotate: '1turn',
  }, {
    easing: waapi.convertEase(springs[i].ease),
    delay: i * 250,
    duration: springs[i].duration,
    fill: 'forwards'
  });
});
```

----------------------------------------

TITLE: Creating and Using Anime.js Timer Instance
DESCRIPTION: Demonstrates how to create a timer instance and access its methods in Anime.js. The timer object provides various control methods for managing animation timing.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-methods.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const timer = createTimer(parameters);
timer.pause();
timer.play();
timer.restart();
```

----------------------------------------

TITLE: Creating Animation with Delay in Anime.js
DESCRIPTION: Shows how to apply a 500ms delay to a specific animation. This delay is applied to all properties in the animation, which moves and scales an element with the 'delay' class while looping and alternating.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-playback-settingsdelay.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

const playbackDelay = animate('.delay', {
  x: '16rem',
  scale: 1.8,
  delay: 500, // Global delay applied to all properties
  loop: true,
  alternate: true
});
```

----------------------------------------

TITLE: Timeline Seek Method Implementation in JavaScript
DESCRIPTION: Demonstrates implementation of timeline seek functionality using Anime.js. Creates a timeline with multiple animations and connects it to range input and play/pause button controls. Includes event listeners and state management for timeline control.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodsseek.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $playPauseButton ] = utils.$('.play-pause');

const updateButtonLabel = tl => {
  $playPauseButton.textContent = tl.paused ? 'Play' : 'Pause';
}

const tl = createTimeline({
  autoplay: false,
  onUpdate: self => {
    $range.value = self.currentTime;
    updateButtonLabel(self);
  },
  onComplete: updateButtonLabel,
})
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const seekTimeline = () => tl.seek(+$range.value);

const playPauseTimeline = () => {
  if (tl.paused) {
    tl.play();
  } else {
    tl.pause();
    updateButtonLabel(tl);
  }
}

$range.addEventListener('input', seekTimeline);
$playPauseButton.addEventListener('click', playPauseTimeline);
```

----------------------------------------

TITLE: Creating and Using an Animatable Instance in Anime.js
DESCRIPTION: This snippet demonstrates how to create an Animatable instance and use its methods to trigger animations. It shows the basic syntax for applying x and y transformations with optional parameters and using the revert() method.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimatableanimatable-methods.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const animatable = createAnimatable(target, parameters);
animatable.x(100)               
animatable.y(50, 500, 'out(2)') 
animatable.revert()             
```

----------------------------------------

TITLE: HTML Structure for Anime.js Animation Demo
DESCRIPTION: Provides the HTML structure for demonstrating the difference between normal and interpolated animations using Anime.js. It creates two clock elements with labels.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesinterpolate.md#2025-04-18_snippet_3

LANGUAGE: html
CODE:
```
<div class="x-large spaced-evenly row">
  <div class="col">
    <div class="clock normal"></div>
    <div class="label">normal</div>
  </div>
  <div class="col">
    <div class="clock interpolated"></div>
    <div class="label">interpolated [0,12]</div>
  </div>
</div>
```

----------------------------------------

TITLE: Implementing Time Staggering with AnimeJS
DESCRIPTION: Demonstrates how to use the stagger() function to create staggered animations with different delays and durations for multiple elements. The example shows importing required functions and creating an animation with staggered timing properties.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationstaggertime-staggering.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, stagger } from 'animejs';

animate('.square', {
  x: '17rem',
  delay: stagger(100),
  duration: stagger(200, { start: 500 }),
  loop: true,
  alternate: true
});
```

----------------------------------------

TITLE: Implementing onUpdate in an Anime.js Timeline
DESCRIPTION: Demonstrates how to use the onUpdate callback in a timeline to update a DOM element's content on every frame. The example creates a looping animation with multiple elements and tracks the number of updates.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-callbacksonupdate.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let updates = 0;

const tl = createTimeline({
  defaults: { duration: 500 },
  loopDelay: 250,
  loop: true,
  onUpdate: self => $value.textContent = ++updates
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '+=250')
.add('.square', { x: '15rem' }, '+=250');
```

----------------------------------------

TITLE: Implementing Timeline restart() Method in Anime.js
DESCRIPTION: This snippet demonstrates how to create a timeline with Anime.js and implement a restart button. The timeline animates three shapes sequentially with loop and alternate properties enabled. The restart() method resets the timeline to the beginning when a button is clicked.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodsrestart.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $restartButton ] = utils.$('.restart');

const tl = createTimeline({
  loop: true,
  alternate: true,
})
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const restartTimeline = () => tl.restart();

$restartButton.addEventListener('click', restartTimeline);
```

----------------------------------------

TITLE: Implementing Draggable Refresh Method in JavaScript with Anime.js
DESCRIPTION: This snippet demonstrates how to create a draggable element and implement a refresh function using Anime.js. It creates a draggable square with randomized snap and drag speed, and adds a refresh button to recalculate these values.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-methodsrefresh.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable, utils } from 'animejs';

const [ $refreshButton ] = utils.$('.refresh');

const draggable = createDraggable('.square', {
  snap: () => utils.random(0, 32, 0),
  dragSpeed: () => utils.random(.5, 1.5, 1),
});

const refreshDraggable = () => draggable.refresh();

$refreshButton.addEventListener('click', refreshDraggable);
```

----------------------------------------

TITLE: Creating a Draggable Instance in JavaScript with AnimeJS
DESCRIPTION: This snippet demonstrates how to create a draggable instance using the createDraggable function from AnimeJS. It takes a target element and optional parameters to configure the draggable behavior.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-properties.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const draggable = createDraggable(target, parameters);
```

----------------------------------------

TITLE: Implementing onRelease Callback with Anime.js Draggable
DESCRIPTION: Demonstrates how to create a draggable element with an onRelease callback that increments and displays a counter. The callback function executes whenever the draggable element is released after being grabbed.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-callbacksonrelease.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let releases = 0;

createDraggable('.square', {
  container: '.grid',
  onRelease: () => $value.textContent = ++releases
});
```

----------------------------------------

TITLE: Defining Anime.js Scope with Media Queries
DESCRIPTION: This JavaScript code snippet demonstrates how to define an anime.js scope with media queries. It imports `createScope` and `animate` from the animejs library and creates a scope with `mediaQueries` object, which maps arbitrary names (isSmall, isMedium, isLarge, reduceMotion) to media query definition strings. It then adds an animation to the scope that adjusts animation properties based on the matched media queries.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscopescope-parametersmediaqueries.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { createScope, animate } from 'animejs';

createScope({
  mediaQueries: {
    isSmall: '(max-width: 100px)',
    isMedium: '(min-width: 101px) and (max-width: 200px)',
    isLarge: '(min-width: 201px)',
    reduceMotion: '(prefers-reduced-motion)',
  }
})
.add(self => {

  const { isSmall, isMedium, isLarge, reduceMotion } = self.matches;
    
  utils.set('.square', { scale: isMedium ? .75 : isLarge ? 1 : .5 });
    
  animate('.square', {
    x: isSmall ? 0 : ['-35vw', '35vw'],
    y: isSmall ? ['-40vh', '40vh'] : 0,
    rotate: 360,
    loop: true,
    alternate: true,
    duration: reduceMotion ? 0 : isSmall ? 750 : 1250
  });

});
```

----------------------------------------

TITLE: Animating Logo Rotation on Click
DESCRIPTION: This snippet defines a function `rotateLogo` that increments a rotation counter and animates the rotation of the logo element when a button is clicked.  It updates the button's text to display the current rotation count. The animation uses Anime.js to rotate the logo with a specified easing and duration.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationgetting-startedusing-with-vanilla-js.md#2025-04-18_snippet_4

LANGUAGE: javascript
CODE:
```
// Animate logo rotation on click
const rotateLogo = () => {
  rotations++;
  $button.innerText = `rotations: ${rotations}`;
  animate($logo, {
    rotate: rotations * 360,
    ease: 'out(4)',
    duration: 1500,
  });
}
```

----------------------------------------

TITLE: Animating Element Position with Eased Scroll Synchronization - Anime.js - JavaScript
DESCRIPTION: This code snippet demonstrates how to use Anime.js to animate a '.square' element with easing functions based on the scroll position of a container. It utilizes the 'onScroll' callback to trigger animations as scrolling occurs, creating a dynamic visual effect. The code includes parameters for animation settings such as rotation, delay, and synchronization mode.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-synchronisation-modeseased-scroll.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, stagger, onScroll } from 'animejs';

animate('.square', {
  x: '12rem',
  rotate: '1turn',
  ease: 'linear',
  delay: stagger(100, { from: 'last' }),
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: 'inOutCirc',
    debug: true,
  })
});
```

----------------------------------------

TITLE: Creating Draggable Elements with Custom Easing - JavaScript
DESCRIPTION: This code snippet demonstrates how to create draggable elements using the Anime.js library. It allows for customization of the easing that takes effect when the draggable elements are released. The code utilizes the createDraggable function from Anime.js to assign draggable behavior to specified elements while setting the releaseEase property for the easing effect upon release.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-settingsreleaseease.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { createDraggable, createSpring } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  releaseEase: 'outElastic',
});

createDraggable('.circle', {
  container: '.grid',
  releaseEase: createSpring({
    stiffness: 150,
    damping: 15,
  })
});
```

----------------------------------------

TITLE: Creating and Managing Scope in Anime.js
DESCRIPTION: This JavaScript snippet demonstrates initializing a scope using 'createScope' in Anime.js. The 'scope' object contains properties and methods to manage DOM operations, constructor functions, media queries, and revertibles. Essential functions include getting default parameters, root elements, and media query matches. Dependencies include the Anime.js library version 4.0.0 or higher.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscopescope-properties.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const scope = createScope();
┌────────┐
scope.│methods │
scope.│root    ├─ Properties
scope.│matches │
└────────┘
```

----------------------------------------

TITLE: Creating a Staggered Animation with WAAPI
DESCRIPTION: Example of creating a staggered animation effect using WAAPI in Anime.js. This code animates span elements with a vertical translation, staggered delay, looping, and easing.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-api.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { waapi, stagger } from 'animejs';

waapi.animate('span', {
  translate: `0 -2rem`,
  delay: stagger(100),
  duration: 600,
  loop: true,
  alternate: true,
  ease: 'inOut(2)',
});
```

----------------------------------------

TITLE: Creating and Accessing Timeline Properties in Anime.js
DESCRIPTION: This snippet demonstrates how to create a timeline and access its properties in Anime.js. It shows the basic structure for creating a timeline with parameters and accessing various timeline properties.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-properties.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const timeline = createTimeline(parameters);
 timeline.labels
 timeline.currentTime
 timeline.duration
```

----------------------------------------

TITLE: Setting Global Default for Reversed Animation in AnimeJS
DESCRIPTION: Shows how to change the default value of the 'reversed' property globally by updating the engine.defaults object. This allows all animations to play backwards by default without specifying for each instance.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-playback-settingsreversed.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.reversed = true;
```

----------------------------------------

TITLE: Practical Animation Callback Example in Anime.js
DESCRIPTION: Complete example showing how to import Anime.js, create an animation, and update DOM content on completion.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-callbacksthen.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

const [ $value ] = utils.$('.value');

const animation = animate('.circle', {
  x: '16rem',
  delay: 500,
});

animation.then(() => $value.textContent = 'fulfilled');
```

----------------------------------------

TITLE: Using WAAPI with Scope for Media Queries in Anime.js
DESCRIPTION: Example of creating a scope for WAAPI animations with media queries handling. This demonstrates how to create responsive animations that respect user preferences like reduced motion.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiimprovements-to-the-web-animation-api.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
createScope({
  mediaQueries: { reduceMotion: '(prefers-reduced-motion)' }
})
.add(({ matches }) => {
  const { reduceMotion } = matches;
  waapi.animate('.square', {
    transform: reduceMotion ? ['100px', '100px'] : '100px',
    opacity: [0, 1],
  });
});
```

----------------------------------------

TITLE: Structuring HTML for Particle Animation and User Input
DESCRIPTION: This HTML snippet sets up the necessary structure for displaying the animated particles and a control input range slider. It assumes CSS for styling and layout management. The HTML includes a container for particles and a range input for dynamic frame rate adjustments.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationengineengine-parametersfps.md#2025-04-18_snippet_1

LANGUAGE: HTML
CODE:
```
<div class="large row container"></div>
<div class="medium row">
  <fieldset class="controls">
    <input type="range" min=0 max=240 value=60 step=1 class="range" />
  </fieldset>
</div>
```

----------------------------------------

TITLE: Using $ Utility Function in Anime.js
DESCRIPTION: Shows how to use the $ utility function to select elements and manipulate them. It demonstrates both global selection and scoped selection with createScope.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesdollar-sign.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const targetsArray = utils.$(targets);
```

----------------------------------------

TITLE: Using Timeline Refresh Method in AnimeJS
DESCRIPTION: This snippet demonstrates how to use the refresh() method with an AnimeJS timeline. It creates a timeline with random x-position animations for three shapes (circle, triangle, square) and sets up a button to refresh and restart the animation. The timeline also has a loop property with an onLoop callback that automatically refreshes the animations.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodsrefresh.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $refreshButton ] = utils.$('.refresh');

const tl = createTimeline({
  loop: true,
  onLoop: self => self.refresh()
})
.add('.circle',   { x: () => utils.random(0, 15) + 'rem' }, 0)
.add('.triangle', { x: () => utils.random(0, 15) + 'rem' }, 0)
.add('.square',   { x: () => utils.random(0, 15) + 'rem' }, 0);

const refreshTimeline = () => tl.refresh().restart();

$refreshButton.addEventListener('click', refreshTimeline);
```

----------------------------------------

TITLE: Implementing animateInView for Draggable Elements in Anime.js
DESCRIPTION: This snippet demonstrates how to create a draggable element and use the animateInView method to bring it back into the viewport. It includes event listener setup and initial positioning of the draggable element.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-methodsanimateinview.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable } from 'animejs';

const [ $animateInView ] = utils.$('.animate-button');

const draggable = createDraggable('.square', {
  container: '.grid',
});

const animateInView = () => {
  draggable.animateInView(400, 16);
}

// Set the draggable position outside the container
draggable.x = -24;
draggable.y = 72;

$animateInView.addEventListener('click', animateInView);
```

----------------------------------------

TITLE: Initializing Timeline Elements with init() in AnimeJS
DESCRIPTION: Demonstrates how to use the init() method to set initial values for timeline animations. The code creates a timeline with three elements (.square, .triangle, and .circle), each with a specific 'from' value, and uses init() to force rendering of their initial states.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodsinit.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline } from 'animejs';

const tl = createTimeline()
.add('.square',   { x: { from: '15rem' } })
.add('.triangle', { x: { from: '15rem' } }, 500)
.add('.circle',   { x: { from: '15rem' } }, 1000)
.init();
```

----------------------------------------

TITLE: Defining Percentage-based Keyframes in Anime.js
DESCRIPTION: Shows the basic syntax for percentage-based keyframes in Anime.js. Each keyframe defines animation properties at specific percentage points in the animation duration, with optional easing parameters.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationkeyframespercentage-based-keyframes.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
keyframes: {
  '25%' : { x: 100, y: 50, ease: 'out' },
  '50%' : { x: 200, y: 75, },
}
```

----------------------------------------

TITLE: AnimeJS Set Utility Implementation Example
DESCRIPTION: Demonstrates practical usage of utils.set() with dynamic values, stagger effects, and random color selection. Includes event listeners for setting and reverting styles on square elements.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesset.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { utils, stagger } from 'animejs';

const [ $set, $revert ] = utils.$('button');
const squares = utils.$('.square');
const colors = ['red', 'orange', 'yellow'];

let setter;

const setStyles = () => {
  setter = utils.set(squares, {
    borderRadius: '50%',
    y: () => utils.random(-1, 1) + 'rem',
    scale: stagger(.1, { start: .25, ease: 'out' }),
    color: () => `var(--hex-${utils.randomPick(colors)})`
  });
  $set.setAttribute('disabled', 'true');
  $revert.removeAttribute('disabled');
}

const revertStyles = () => {
  setter.revert();
  $set.removeAttribute('disabled');
  $revert.setAttribute('disabled', 'true');
}

$set.addEventListener('click', setStyles);
$revert.addEventListener('click', revertStyles);
```

----------------------------------------

TITLE: Anime.js Timer with Scroll
DESCRIPTION: This code snippet shows how to synchronize a timer with scrolling. It uses `createTimer` (assumed to be a custom function) and updates the inner HTML of an element with the class 'timer' to display the timer's current time, controlled by the scroll position of a container.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscroll.md#2025-04-18_snippet_4

LANGUAGE: javascript
CODE:
```
// Timer

const [ $timer ] = utils.$('.timer');

createTimer({
  duration: 2000,
  alternate: true,
  loop: true,
  onUpdate: self => {
    $timer.innerHTML = self.iterationCurrentTime
  },
  autoplay: onScroll({
    target: $timer.parentNode,
    container,
    debug
  })
});
```

----------------------------------------

TITLE: Creating a Complex Animation with Keyframes in Anime.js
DESCRIPTION: This example shows how to create a complex animation using keyframes in Anime.js. It animates a square element with multiple keyframes, including translations, scaling, and rotation. The animation also demonstrates the use of different easing functions and looping.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationkeyframesduration-based-keyframes.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

animate('.square', {
  keyframes: [
    { y: '-2.5rem', ease: 'out', duration: 400 },
    { x: '17rem', scale: .5, duration: 800 },
    { y: '2.5rem' }, // The duration here is 3000 / 5 = 600ms
    { x: 0, scale: 1, duration: 800 },
    { y: 0, ease: 'in', duration: 400 }
  ],
  rotate: { to: 360, ease: 'linear' },
  duration: 3000,
  ease: 'inOut', // ease applied between each keyframes if no ease defined
  playbackEase: 'ouIn(5)', // ease applied accross all keyframes
  loop: true,
});
```

----------------------------------------

TITLE: Implementing Timer Controls with AnimeJS
DESCRIPTION: Creates a timer instance with controls for resuming, pausing, and alternating playback. The timer updates a display element with the current iteration time every frame and loops continuously. Includes event listeners for button controls.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-methodsresume.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimer, utils } from 'animejs';

const [ $resumeButton, $pauseButton, $alternateButton ] = utils.$('.button');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  duration: 2000,
  onUpdate: self => $time.innerHTML = self.iterationCurrentTime,
  loop: true,
});

const resumeTimer = () => timer.resume();
const pauseTimer = () => timer.pause();
const alternateTimer = () => timer.alternate();

$resumeButton.addEventListener('click', resumeTimer);
$pauseButton.addEventListener('click', pauseTimer);
$alternateButton.addEventListener('click', alternateTimer);
```

----------------------------------------

TITLE: Anime.js ScrollObserver onLeave Callback
DESCRIPTION: This JavaScript code snippet demonstrates how to use the `onLeave` callback within Anime.js's `onScroll` function. It imports necessary modules from Anime.js, selects an HTML element with class 'value', initializes a counter, and animates a '.square' element based on scroll position. The `onLeave` callback increments the counter and updates the text content of the selected element when the square leaves the defined threshold.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-callbacksonleave.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { animate, onScroll, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let exits = 0;

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: true,
    debug: true,
    onLeave: () => $value.textContent = ++exits,
  })
});
```

----------------------------------------

TITLE: Async/Await Animation Pattern in Anime.js
DESCRIPTION: Demonstrates how to use async/await syntax with Anime.js animations for better flow control.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-callbacksthen.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
async function waitForAnimationToComplete() {
  return animate(target, {
    x: 100,
    duration: 500,
  });
}

const asyncAnimation = await waitForAnimationToComplete();
```

----------------------------------------

TITLE: Implementing Alternate Animation with Anime.js in JavaScript
DESCRIPTION: This snippet demonstrates how to use the alternate() method in Anime.js to toggle the playback direction of an animation. It creates an animation for multiple squares, moving them horizontally with a staggered delay, and sets up a button to trigger the alternate() method.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-methodsalternate.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, utils, stagger } from 'animejs';

const [ $alternateButton ] = utils.$('.button');

const animation = animate('.square', {
  x: '17rem',
  ease: 'inOutSine',
  loop: true,
  delay: stagger(100),
});

const alternateAnimation = () => animation.alternate();

$alternateButton.addEventListener('click', alternateAnimation);
```

----------------------------------------

TITLE: HTML Structure for Reversed Animation Examples
DESCRIPTION: HTML markup that creates containers for demonstrating normal and reversed animations. Each container includes a circle element that will be animated and a label indicating the reversed property value.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-playback-settingsreversed.md#2025-04-18_snippet_2

LANGUAGE: html
CODE:
```
<div class="medium row">
  <div class="circle dir-normal"></div>
  <div class="padded label">reversed: false</div>
</div>
<div class="medium row">
  <div class="circle dir-reverse"></div>
  <div class="padded label">reversed: true</div>
</div>
```

----------------------------------------

TITLE: Adding Animations and Managing Engine State with Anime.js
DESCRIPTION: This code snippet sets up a container where 150 animated particles are added, along with functionality to pause and resume the animation engine through button interactions. Dependencies include the Anime.js library, which provides animation utilities and engine control methods.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationengineengine-methodsresume.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { engine, animate, utils } from 'animejs';

const [ $container ] = utils.$('.container');
const [ $pause, $resume ] = utils.$('button');

function addAnimation() {
  const $particle = document.createElement('div');
  $particle.classList.add('particle');
  $container.appendChild($particle);
  animate($particle, {
    x: utils.random(-10, 10, 2) + 'rem',
    y: utils.random(-3, 3, 2) + 'rem',
    scale: [{ from: 0, to: 1 }, { to: 0 }],
    loop: true,
    delay: utils.random(0, 1000)
  });
}

for (let i = 0; i < 150; i++) addAnimation();

const resumeEngine = () => engine.resume();
const pauseEngine = () => engine.pause();

$pause.addEventListener('click', pauseEngine);
$resume.addEventListener('click', resumeEngine);

<div class="large row container"></div>
<div class="medium row">
  <fieldset class="controls">
    <button>Pause</button>
    <button>Resume</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: Creating Animated Cubes in Three.js with Anime.js - JavaScript
DESCRIPTION: This function creates and animates multiple cubes using Three.js and Anime.js. It establishes a timeline for animations, including random positions and rotations for each cube, and adds these cubes to the Three.js scene.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationengineengine-methodsupdate.md#2025-04-18_snippet_1

LANGUAGE: JavaScript
CODE:
```
function createAnimatedCube() {
  const cube = new THREE.Mesh(geometry, material);
  const x = utils.random(-10, 10, 2);
  const y = utils.random(-5, 5, 2);
  const z = [-10, 7];
  const r = () => utils.random(-Math.PI * 2, Math.PI * 2, 3);
  const duration = 4000;
  createTimeline({
    delay: utils.random(0, duration),
    defaults: { loop: true, duration, ease: 'inSine', },
  })
  .add(cube.position, { x, y, z }, 0)
  .add(cube.rotation, { x: r, y: r, z: r }, 0)
  .init();
  scene.add(cube);
}

for (let i = 0; i < 40; i++) {
  createAnimatedCube();
}

```

----------------------------------------

TITLE: Creating and Modifying Animation Frame Rate in AnimeJS
DESCRIPTION: Example showing how to create an animation with a specific frame rate and dynamically update it using a range input. The code initializes an animation with a frame rate of 60fps and allows changing it through a UI slider.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-playback-settingsframerate.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $fps ] = utils.$('.fps');

const animation = animate('.circle', {
  x: '16rem',
  loop: true,
  alternate: true,
  frameRate: 60,
});

const updateFps = () => {
  const { value } = $range;
  $fps.innerHTML = value;
  animation.fps = value;
}

$range.addEventListener('input', updateFps);
```

----------------------------------------

TITLE: Using Animatable Getters in AnimeJS
DESCRIPTION: This snippet demonstrates how to create an animatable object and use its properties as getter methods to retrieve current values. It creates a circle element that responds to mouse movement and displays its x and y coordinates.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimatableanimatable-methodsgetters.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createAnimatable, utils } from 'animejs';

const $demos = document.querySelector('#docs-demos');
const $demo = $demos.querySelector('.docs-demo.is-active');
const [ $x, $y ] = utils.$('.coords');
let bounds = $demo.getBoundingClientRect();
const refreshBounds = () => bounds = $demo.getBoundingClientRect();

const circle = createAnimatable('.circle', {
  x: 500,
  y: 500,
  ease: 'out(2)',
});

// Gets and log the current x and y values
circle.animations.x.onRender = () => {
  $x.innerHTML = utils.roundPad(circle.x(), 2);
  $y.innerHTML = utils.roundPad(circle.y(), 2);
}

const onMouseMove = e => {
  const { width, height, left, top } = bounds;
  const hw = width / 2;
  const hh = height / 2;
  const x = utils.clamp(e.clientX - left - hw, -hw, hw);
  const y = utils.clamp(e.clientY - top - hh, -hh, hh);
  // Sets x and y values
  circle.x(x);
  circle.y(y);
}

window.addEventListener('mousemove', onMouseMove);
$demos.addEventListener('scroll', refreshBounds);
```

----------------------------------------

TITLE: Animating Individual CSS Transforms with anime.js Web Animation API
DESCRIPTION: This example demonstrates how to use anime.js WAAPI module to animate individual transform properties on multiple elements. The code randomly positions and rotates square elements continuously by using function-based values for x, y, rotateX, and rotateY properties.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiimprovements-to-the-web-animation-apiindividual-css-transforms.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { waapi, utils } from 'animejs';

const $squares = utils.$('.square');

const animateSquares = () => {
  waapi.animate($squares, {
    x: () => utils.random(0, 17) + 'rem',
    y: () => utils.random(-1, 1) + 'rem',
    rotateX: () => utils.random(-90, 90),
    rotateY: () => utils.random(-90, 90),
    onComplete: () => animateSquares()
  });
}

animateSquares();
```

----------------------------------------

TITLE: Implementing Timer with Status Update in Anime.js
DESCRIPTION: Creates a timer using Anime.js createTimer function, updates a time display during the timer's progress, and changes a status message upon completion. This example showcases the use of onUpdate and then() methods.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-callbacksthen.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimer, utils } from 'animejs';

const [ $status ] = utils.$('.status');
const [ $time ] = utils.$('.time');

createTimer({
  duration: 2000,
  onUpdate: self => $time.innerHTML = self.currentTime,
})
.then(() => $status.innerHTML = 'fulfilled');
```

----------------------------------------

TITLE: Defining Duration-Based Keyframes in Anime.js
DESCRIPTION: This snippet demonstrates how to define duration-based keyframes in Anime.js. Each keyframe object can include an animatable property and tween parameters. The default duration of a keyframe is calculated by dividing the total animation duration by the number of keyframes.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationkeyframesduration-based-keyframes.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
keyframes: [
  { y: 50, ease: 'out', duration: 400 },
  { x: 75, scale: .5, duration: 800 },
]
```

----------------------------------------

TITLE: Creating and Adding Timer to AnimeJS Timeline
DESCRIPTION: This snippet demonstrates how to create a timeline and add timers using the add() method. It also shows how to synchronize an existing timer using the sync() method.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelineadd-timers.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline, createTimer, utils } from 'animejs';

const [ $timer01, $timer02, $timer03 ] = utils.$('.timer');

const timer1 = createTimer({
  duration: 1500,
  onUpdate: self => $timer01.innerHTML = self.currentTime,
});

const tl = createTimeline()
.sync(timer1)
.add({
  duration: 500,
  onUpdate: self => $timer02.innerHTML = self.currentTime,
})
.add({
  onUpdate: self => $timer03.innerHTML = self.currentTime,
  duration: 1000
});
```

----------------------------------------

TITLE: Converting Units in AnimeJS Animations with JavaScript
DESCRIPTION: Demonstrates how to use the animate() method to convert between different unit types during animation. The example shows converting from pixels to percentage, pixels to rem, and degrees to turns.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-value-typesunit-conversion-value.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

animate('.square', {
  width: '25%', // from '48px' to '25%',
  x: '15rem', // from '0px' to '15rem',
  rotate: '.75turn', // from `0deg` to '.75turn',
});
```

----------------------------------------

TITLE: Synchronizing Multiple Timelines in Anime.js
DESCRIPTION: This example demonstrates how to synchronize multiple timelines and animations in Anime.js. It creates a main timeline that syncs with two child timelines (tlA and tlB), with tlB starting 2000ms before the end of tlA due to the offset parameter.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinesync-timelines.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline, animate } from 'animejs';

const circleAnimation = animate('.circle', {
  x: '15rem'
});

const tlA = createTimeline()
.sync(circleAnimation)
.add('.triangle', {
  x: '15rem',
  duration: 2000,
})
.add('.square', {
  x: '15rem',
});

const tlB = createTimeline({ defaults: { duration: 2000 } })
.add(['.triangle', '.square'], {
  rotate: 360,
}, 0)
.add('.circle', {
  scale: [1, 1.5, 1],
}, 0);

const tlMain = createTimeline()
.sync(tlA)
.sync(tlB, '-=2000');
```

----------------------------------------

TITLE: Creating an Anime.js Scope with Media Queries (JavaScript)
DESCRIPTION: This code snippet demonstrates creating an Anime.js scope using the `createScope` function and defining media queries within it.  The scope is configured with `mediaQueries` for 'isSmall' and 'reduceMotion', which are then used to conditionally modify the animation based on the current viewport size and user preferences.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscope.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { animate, utils, createScope } from 'animejs';

createScope({
  mediaQueries: {
    isSmall: '(max-width: 200px)',
    reduceMotion: '(prefers-reduced-motion)',
  }
})
.add(self => {

  const { isSmall, reduceMotion } = self.matches;
  
  if (isSmall) {
    utils.set('.square', { scale: .5 });
  }
    
  animate('.square', {
    x: isSmall ? 0 : ['-35vw', '35vw'],
    y: isSmall ? ['-40vh', '40vh'] : 0,
    loop: true,
    alternate: true,
    duration: reduceMotion ? 0 : isSmall ? 750 : 1250
  });

});
```

----------------------------------------

TITLE: HTML Structure for Anime.js Alternate Animation Demo
DESCRIPTION: This HTML snippet provides the structure for the Anime.js alternate animation demo. It includes multiple rows with squares that will be animated, and a button to trigger the alternate() method.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-methodsalternate.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button">Alternate</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: Creating a Draggable Element with AnimeJS
DESCRIPTION: Demonstrates the basic usage of the createDraggable function. It takes a target (CSS selector or DOM element) and optional parameters to create a draggable element.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggable.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
const draggable = createDraggable(target, parameters);
```

----------------------------------------

TITLE: Creating a Timer with Callbacks in Anime.js
DESCRIPTION: This snippet demonstrates how to create a timer using the createTimer() function in Anime.js, including various callback functions. The timer is set to run for 1000 milliseconds, use frame-based timing, and loop indefinitely.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-callbacks.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
createTimer({
  duration: 1000,
  frameRate: true,
  loop: true,
  onBegin: () => {},
  onLoop: () => {},
  onUpdate: () => {},
});
```

----------------------------------------

TITLE: Configuring Anime.js Engine for Manual Updates - JavaScript
DESCRIPTION: This snippet disables the default animation loop in Anime.js, allowing for manual updates in projects using custom animation loops like Three.js. It initializes the engine and sets up the environment for rendering objects in Three.js while managing animations with Anime.js.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationengineengine-methodsupdate.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { engine, createTimeline, utils } from 'animejs';

// Prevents Anime.js from using its own loop
engine.useDefaultMainLoop = false;

const [ $container ] = utils.$('.container');
const color = utils.get($container, 'color');
const { width, height } = $container.getBoundingClientRect();

// Three.js setup, note that the global THREE object is defined globally
const renderer = new THREE.WebGLRenderer({ alpha: true });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 20);
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color, wireframe: true });

renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);
$container.appendChild(renderer.domElement);
camera.position.z = 5;

```

----------------------------------------

TITLE: Implementing Timer Seek Functionality with AnimeJS in JavaScript
DESCRIPTION: This snippet demonstrates how to create and control a timer using AnimeJS. It includes functions for seeking to a specific time, playing/pausing the timer, and updating the UI accordingly. The timer is created with a duration of 2000ms and includes callbacks for updates and completion.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-methodsseek.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimer, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $playPauseButton ] = utils.$('.play-pause');
const [ $time ] = utils.$('.time');

const updateButtonLabel = timer => {
  $playPauseButton.textContent = timer.paused ? 'Play' : 'Pause';
}

const timer = createTimer({
  duration: 2000,
  autoplay: false,
  onUpdate: self => {
    $range.value = self.currentTime;
    $time.innerHTML = self.currentTime;
    updateButtonLabel(self);
  },
  onComplete: updateButtonLabel,
});

const seekTimer = () => timer.seek(+$range.value);

const playPauseTimer = () => {
  if (timer.paused) {
    timer.play();
  } else {
    timer.pause();
    updateButtonLabel(timer);
  }
}

$range.addEventListener('input', seekTimer);
$playPauseButton.addEventListener('click', playPauseTimer);
```

----------------------------------------

TITLE: Animating with HSLA Color Values in Anime.js
DESCRIPTION: This example illustrates the use of HSLA color values in Anime.js animations. It targets an element with the class 'hsla' and animates its background color to 'hsla(44, 100%, 59%, .2)'.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-value-typescolor-value.md#2025-04-18_snippet_5

LANGUAGE: javascript
CODE:
```
animate('.hsla', {
  background: 'hsla(44, 100%, 59%, .2)',
});
```

----------------------------------------

TITLE: Creating and Adding Scopes
DESCRIPTION: This code creates two Anime.js scopes, `scope1` and `scope2`, associated with the '.row-1' and '.row-2' elements respectively. The `scopeConstructor` function is added to each scope, applying the defined animations and event listeners to the elements within each row.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscopescope-methodsrevert.md#2025-04-18_snippet_3

LANGUAGE: javascript
CODE:
```
const scope1 = createScope({ root: '.row-1' }).add(scopeConstructor);
const scope2 = createScope({ root: '.row-2' }).add(scopeConstructor);
```

----------------------------------------

TITLE: Using Modifier Functions with AnimeJS Animatable Elements
DESCRIPTION: This example demonstrates how to use modifier functions with AnimeJS's createAnimatable method. It creates two clock elements that rotate based on mouse position - one with a snapping modifier that rounds rotation to specific increments, and another with an inverting modifier that reverses the rotation direction.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimatableanimatable-settingsmodifier.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createAnimatable, utils, stagger } from 'animejs';

const PI = Math.PI;

const clock1 = createAnimatable('.clock-1', {
  rotate: { unit: 'rad' },
  modifier: utils.snap(PI / 10),
  duration: 0,
});

const clock2 = createAnimatable('.clock-2', {
  rotate: { unit: 'rad' },
  modifier: v => -v,
  duration: 0,
});

const rotateClock = (animatable) => {
  return e => {
    const [ $clock ] = animatable.targets;
    const { width, height, left, top } = $clock.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    animatable.rotate(Math.atan2(y, x) + PI / 2);
  }
}

const rotateClock1 = rotateClock(clock1);
const rotateClock2 = rotateClock(clock2);

const onMouseMove = e => {
  rotateClock1(e);
  rotateClock2(e);
}

window.addEventListener('mousemove', onMouseMove);
```

----------------------------------------

TITLE: Implementing Draggable Reset Functionality in JavaScript with Anime.js
DESCRIPTION: This snippet demonstrates how to create a draggable element and implement a reset function using Anime.js. It imports necessary functions, creates a draggable element, and sets up an event listener for a reset button.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-methodsreset.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable, utils } from 'animejs';

const [ $resetButton ] = utils.$('.reset');

const draggable = createDraggable('.square');

const resetDraggable = () => draggable.reset();

$resetButton.addEventListener('click', resetDraggable);
```

----------------------------------------

TITLE: Initializing Animation and Speed Control with Anime.js in JavaScript
DESCRIPTION: This snippet sets up an animation using Anime.js, creates a range input for speed control, and uses utils.sync() to update the animation speed. It demonstrates how to synchronize speed changes with the animation engine loop.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiessync.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $speed ] = utils.$('.speed');

const animation = animate('.circle', {
  x: '16rem',
  loop: true,
  alternate: true,
  playbackRate: 1,
});

const updateSpeed = () => {
  const { value } = $range;
  $speed.innerHTML = utils.roundPad(+value, 2);
  utils.sync(() => animation.speed = value);
}

$range.addEventListener('input', updateSpeed);
```

----------------------------------------

TITLE: Using play() Method with Event Listener in Anime.js
DESCRIPTION: This JavaScript snippet demonstrates how to create a paused animation with Anime.js and then use the play() method to start it when a button is clicked. It creates an animation that moves squares horizontally with a staggered delay.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-methodsplay.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, utils, stagger } from 'animejs';

const [ $playButton ] = utils.$('.play');

const animation = animate('.square', {
  x: '17rem',
  ease: 'inOutSine',
  delay: stagger(100),
  autoplay: false, // The animation is paused by default
});

const playAnimation = () => animation.play();

$playButton.addEventListener('click', playAnimation);
```

----------------------------------------

TITLE: Anime.js Scope Creation and Method Registration
DESCRIPTION: Creates an Anime.js scope, registers a method within it, and attaches an event listener to execute the method. The method accesses scope properties, specifically media query matches, to dynamically adjust animation parameters. Utilizes the `animejs` library.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscoperegister-method-function.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
import { utils, animate, createScope } from 'animejs';

const scope = createScope({
  mediaQueries: { isSmall: '(max-width: 200px)' },
})
.add(self => {

  /* Registering the method inside the scope allows access to the scope itself */
  self.add('onClick', (e) => {

    const { clientX, clientY } = e;
    const { isSmall } = self.matches;

    animate('.square', {
      rotate: isSmall ? '+=360' : 0,
      x: isSmall ? 0 : clientX - (window.innerWidth / 2),
      y: isSmall ? 0 : clientY - (window.innerHeight / 2),
      duration: isSmall ? 750 : 400,
    });
    
  });
  
  utils.set(document.body, {
    cursor: self.matches.isSmall ? 'alias' : 'crosshair'
  });
  
});

/* Methods can be called outside the scope */
document.addEventListener('click', scope.methods.onClick);
```

----------------------------------------

TITLE: Setting Global Modifiers in AnimeJS
DESCRIPTION: Shows how to change the default modifier globally by updating the engine.defaults object. This example demonstrates setting a global modifier that negates all animated values.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-parametersmodifier.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.modifier = v => -v; // Don't do this :D
```

----------------------------------------

TITLE: Defining Timeline Callbacks in AnimeJS
DESCRIPTION: This snippet demonstrates how to define timeline callbacks within the createTimeline() function in AnimeJS. It includes settings for defaults, loop, alternate, autoplay, and various callback functions.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-callbacks.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
createTimeline({
  defaults: {
    ease: 'out(3)',
    duration: 500,
  },
  loop: 3,
  alternate: true,
  autoplay: false,
  onBegin: () => {},
  onLoop: () => {},
  onUpdate: () => {},
});
```

----------------------------------------

TITLE: Using restart() Method with Anime.js
DESCRIPTION: This snippet demonstrates how to create an animation with Anime.js and implement a restart functionality. It animates squares with a staggered delay and provides a button that calls the restart() method when clicked.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-methodsrestart.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, utils, stagger } from 'animejs';

const [ $restartButton ] = utils.$('.restart');

const animation = animate('.square', {
  x: '17rem',
  direction: 'alternate',
  ease: 'inOutSine',
  loop: true,
  delay: stagger(100)
});

const restartAnimation = () => animation.restart();

$restartButton.addEventListener('click', restartAnimation);
```

----------------------------------------

TITLE: Implementing onResize Callback for Draggable Elements in Anime.js
DESCRIPTION: This snippet demonstrates how to use the onResize callback with createDraggable in Anime.js. It creates a draggable square and updates a counter each time the container or dragged target sizes change.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-callbacksonresize.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let resizes = 0;

createDraggable('.square', {
  container: '.grid',
  onResize: self => {
    $value.textContent = ++resizes;
  }
});
```

----------------------------------------

TITLE: Animating CSS Properties with Anime.js
DESCRIPTION: This example demonstrates how to animate various CSS properties including positioning, border radius, background color, and filter effects using Anime.js. It shows property naming conventions for properties with dashes, which can be written in camelCase or as strings.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimatable-propertiescss-properties.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

animate('.square', {
  left: 'calc(7.75rem * 2)',
  borderRadius: 64,
  'background-color': '#F9F640',
  filter: 'blur(5px)',
});
```

----------------------------------------

TITLE: Removing Targets from Anime.js Timeline
DESCRIPTION: Shows how to remove targets from an Anime.js timeline. The method accepts targets as a parameter.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodsremove.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
timeline.remove(targets);
```

----------------------------------------

TITLE: HTML Structure for Color Animation Examples in Anime.js
DESCRIPTION: This HTML snippet provides the structure for displaying the color animation examples. It creates a row of circular divs, each with a class corresponding to a different color format used in the animation examples.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-value-typescolor-value.md#2025-04-18_snippet_6

LANGUAGE: html
CODE:
```
<div class="large justified row">
  <div class="circle hex"></div>
  <div class="circle rgb"></div>
  <div class="circle hsl"></div>
  <div class="circle hexa"></div>
  <div class="circle rgba"></div>
  <div class="circle hsla"></div>
</div>
```

----------------------------------------

TITLE: Creating an Anime.js Scope Constructor
DESCRIPTION: The `scopeConstructor` function defines the animation logic and event listeners for elements within a scope. It selects elements with the class 'circle', adds animations to them, and attaches mouseenter and mouseleave event listeners.  The return value is a cleanup function that removes the event listeners, which is essential for the `revert` method to work correctly.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscopescope-methodsrevert.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
const scopeConstructor = scope => {
  const circles = utils.$('.circle');
    
  circles.forEach(($circle, i) => {
    animate($circle, {
      opacity: .25,
      loop: true,
      alternate: true,
      duration: 500,
      delay: i * 100,
      ease: 'inOut(3)',
    });
    $circle.addEventListener('mouseenter', onMouseEnter);
    $circle.addEventListener('mouseleave', onMouseLeave);
  });
  
  // Cleanup function to take care of removing event listeners on revert
  return () => {
    circles.forEach($circle => {
      // Anime.js instances are automatically reverted by the Scope
      $circle.removeEventListener('mouseenter', onMouseEnter);
      $circle.removeEventListener('mouseleave', onMouseLeave);
    });
  }
}
```

----------------------------------------

TITLE: Implementing Animation Refresh with AnimeJS in JavaScript
DESCRIPTION: This snippet demonstrates how to use the refresh() method in AnimeJS to update animated property values. It creates an animation with random values for position, rotation, and scale, and implements a button to refresh and restart the animation.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-methodsrefresh.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

const [ $refreshButton ] = utils.$('.refresh');

const animation = animate('.square', {
  x: () => utils.random(0, 17) + 'rem',
  y: () => utils.random(-1, 1) + 'rem',
  rotate: () => utils.random(-360, 360, 1),
  scale: () => utils.random(.1, 1.5, 2),
  duration: 750,
  loop: true,
  onLoop: self => self.refresh()
});

const refreshAnimation = () => animation.refresh().restart();

$refreshButton.addEventListener('click', refreshAnimation);
```

----------------------------------------

TITLE: Creating Draggable Element with Custom Trigger - JavaScript - Anime.js
DESCRIPTION: This code snippet demonstrates how to create a draggable element in Anime.js, specifying a different trigger element for dragging. It uses the createDraggable function to initialize the draggable behavior, where the trigger can be a CSS selector or a DOM element.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-settingstrigger.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable } from 'animejs';

createDraggable('.row', {
  trigger: '.circle',
});
```

----------------------------------------

TITLE: Using set() Method in Anime.js Timeline
DESCRIPTION: Demonstrates how to use the set() method in an Anime.js timeline to instantly set property values for different targets at specific times. The example creates a timeline and sets the x position of three different elements (.circle, .triangle, .square) at different time positions.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodsset.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline } from 'animejs';

const tl = createTimeline()
.set('.circle', { x: '15rem' })
.set('.triangle', { x: '15rem' }, 500)
.set('.square', { x: '15rem' }, 1000);
```

----------------------------------------

TITLE: Implementing Timer Alternation in AnimeJS
DESCRIPTION: This snippet demonstrates how to create and use a timer with the alternate() method in AnimeJS. It sets up a timer with a duration of 10 seconds, loops continuously, and updates a display element with the current iteration time. A button is set up to trigger the alternate() method, which reverses the playback direction.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-methodsalternate.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimer, utils } from 'animejs';

const [ $alternateButton ] = utils.$('.button');
const [ $iterationTime ] = utils.$('.iteration-time');

const timer = createTimer({
  duration: 10000,
  loop: true,
  onUpdate: self => {
    $iterationTime.innerHTML = self.iterationCurrentTime;
  }
});

const alternateTimer = () => timer.alternate();

$alternateButton.addEventListener('click', alternateTimer);
```

----------------------------------------

TITLE: Animating SVG drawing with anime.js
DESCRIPTION: Example of using anime.js to animate SVG elements with the createDrawable method. The animation transitions the draw property from no visibility to full visibility with easing, duration, and staggered delay effects.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationsvgcreatedrawable.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
import { animate, svg, stagger } from 'animejs';

animate(svg.createDrawable('.line'), {
  draw: ['0 0', '0 1', '1 1'],
  ease: 'inOutQuad',
  duration: 2000,
  delay: stagger(100),
  loop: true
});
```

----------------------------------------

TITLE: Adding Event Listeners to Buttons
DESCRIPTION: This snippet adds click event listeners to the buttons with the class 'revert'. When clicked, these buttons will trigger the `revertScope1` or `revertScope2` functions, reverting the animations and removing the event listeners associated with each scope.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscopescope-methodsrevert.md#2025-04-18_snippet_5

LANGUAGE: javascript
CODE:
```
$button1.addEventListener('click', revertScope1);
$button2.addEventListener('click', revertScope2);
```

----------------------------------------

TITLE: Animating with Tween Values Array in AnimeJS
DESCRIPTION: Creates an animation sequence using an array of values for the x and y properties. The animation will automatically transition between each value in the array over the specified duration.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationkeyframes.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
animate('.square', {
  x: [0, 100, 200],
  y: [0, 100, 200],
  duration: 3000,
}
```

----------------------------------------

TITLE: Basic Keyframe Animation Example - JavaScript
DESCRIPTION: Demonstrates a simple keyframe animation using array syntax to define the from and to values for the x property.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationkeyframestween-values-keyframes.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
animate(target: { x: [-100, 100] }); // Animate x from -100 to 100
```

----------------------------------------

TITLE: Animating with HEXA Color Values in Anime.js
DESCRIPTION: This example demonstrates how to use HEXA (HEX with alpha) color values in Anime.js animations. It targets an element with the class 'hexa' and animates its background color to '#FF4B4B33'.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-value-typescolor-value.md#2025-04-18_snippet_3

LANGUAGE: javascript
CODE:
```
animate('.hexa', {
  background: '#FF4B4B33',
});
```

----------------------------------------

TITLE: Adding Methods to Scope with Media Query Handling - JavaScript
DESCRIPTION: This snippet demonstrates how to create a Scope with Anime.js, registering methods to handle responsive interactions. It conditionally creates draggable and animatable behaviors for a circle element based on window size, and registers mouse and pointer event handlers to update its position and scale dynamically.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscopescope-methodsadd.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createScope, createAnimatable, createDraggable } from 'animejs';

const scope = createScope({
  mediaQueries: {
    isSmall: '(max-width: 200px)',
  }
})
.add(self => {

  const [ $circle ] = utils.$('.circle');
    
  if (self.matches.isSmall) {
    $circle.classList.add('draggable');
    self.circle = createDraggable($circle, {
      container: document.body,
    });
  } else {
    $circle.classList.remove('draggable');
    self.circle = createAnimatable($circle, {
      x: 500,
      y: 500,
      ease: 'out(3)'
    });
  }
  
  let win = { w: window.innerWidth, h: window.innerHeight };
  
  self.add('refreshBounds', () => {
    win.w = window.innerWidth;
    win.h = window.innerHeight;
  });
      
  self.add('onMouseMove', e => {
    if (self.matches.isSmall) return;
    const { w, h } = win;
    const hw = w / 2;
    const hh = h / 2;
    const x = utils.clamp(e.clientX - hw, -hw, hw);
    const y = utils.clamp(e.clientY - hh, -hh, hh);
    if (self.circle.x) {
      self.circle.x(x);
      self.circle.y(y);
    }
  });
  
  self.add('onPointerDown', e => {
    const { isSmall } = self.matches;
    animate($circle, {
      scale: [
        { to: isSmall ? 1.25 : .25, duration: isSmall ? 50 : 150 },
        { to: 1, duration: isSmall ? 250 : 500 },
      ]
    });
  });
});

window.addEventListener('resize', scope.methods.refreshBounds);
window.addEventListener('mousemove', scope.methods.onMouseMove);
document.addEventListener('pointerdown', scope.methods.onPointerDown);
```

----------------------------------------

TITLE: Basic Usage of createDraggable with CSS Selector
DESCRIPTION: Shows a simple example of creating a draggable element using a CSS selector '.square' as the target. This makes all elements with the class 'square' draggable.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggable.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
import { createDraggable } from 'animejs';

createDraggable('.square');
```

----------------------------------------

TITLE: Setting Animation Precision in Anime.js - JavaScript
DESCRIPTION: This snippet demonstrates how to set the precision of animated values in Anime.js. The 'engine.precision' property is adjusted based on user input, allowing for control over the rounding of decimal points in animations. A number higher than or equal to 0 enables rounding, while a negative number skips rounding altogether. The default precision is set to 4.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationengineengine-parametersprecision.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
engine.precision = 1; // values will be rounded to 1 decimal place ('120.7px')
```

LANGUAGE: javascript
CODE:
```
import { engine, animate, utils } from 'animejs';

const [ $container ] = utils.$('.container');
const [ $range ] = utils.$('.range');

for (let i = 0; i < 150; i++) {
  const $particle = document.createElement('div');
  $particle.classList.add('particle');
  $container.appendChild($particle);
  animate($particle, {
    x: utils.random(-10, 10, 2) + 'rem',
    y: utils.random(-3, 3, 2) + 'rem',
    scale: [{ from: 0, to: 1 }, { to: 0 }],
    delay: utils.random(0, 1000),
    loop: true,
  });  
}

function onInput() {
  engine.precision = this.value;
}

$range.addEventListener('input', onInput);
```

----------------------------------------

TITLE: Animating Elements with From Parameter in Animejs
DESCRIPTION: Demonstrates how to use the 'from' parameter to define starting values for various animation properties including opacity, translation, and rotation. The animation transitions from these specified values to their default target values.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-parametersfrom.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

animate('.square', {
  opacity: { from: .5 }, // Animate from .5 opacity to 1 opacity
  translateX: { from: '16rem' }, // From 16rem to 0rem
  rotate: {
    from: '-.75turn', // From -.75turn to 0turn
    ease: 'inOutQuad',
  },
});
```

----------------------------------------

TITLE: Using Numerical Values with AnimeJS Stagger Function in JavaScript
DESCRIPTION: This snippet demonstrates how to use the stagger function with numerical values to create incremental animations. It shows how to increase translateX by 5.75rem and delay by 100ms for each element in a sequence.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationstaggerstagger-value-typesnumerical-value.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, stagger } from 'animejs';

animate('.square', {
  // Increase translateX by 5.75rem for each elements
  x: stagger('5.75rem'),
  // Increase delay by 100ms for each elements
  delay: stagger(100)
});
```

----------------------------------------

TITLE: Rendering the Three.js Scene with Anime.js Integration - JavaScript
DESCRIPTION: This render function updates the Anime.js engine and renders the Three.js scene within a custom animation loop. It allows for real-time updates and ensures that animations are synchronized with the existing Three.js rendering.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationengineengine-methodsupdate.md#2025-04-18_snippet_2

LANGUAGE: JavaScript
CODE:
```
function render() {
  engine.update(); // Manually update Anime.js engine
  renderer.render(scene, camera); // Render Three.js scene
}

// Calls the builtin Three.js animation loop
renderer.setAnimationLoop(render);

```

----------------------------------------

TITLE: Creating a Draggable Element with Snap Parameters in Anime.js
DESCRIPTION: This code snippet demonstrates how to create a draggable element using Anime.js with various snap parameters. It shows how to set a global snap value applied to both axes, as well as a specific snap array for the x-axis only.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-axes-parameterssnap.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  snap: 56, // Global to both x and y
  x: { snap: [0, 200] }, // Specific to x 
});
```

----------------------------------------

TITLE: Implementing Timeline Animation with onPause Callback
DESCRIPTION: Complete example showing how to create an animation timeline with shape transformations and pause handling. Includes event listeners for animation control and target management.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-callbacksonpause.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $animateButton, $pauseButton, $removeButton ] = utils.$('.button');
const [ $value ] = utils.$('.value');
const shapes = utils.$('.shape');
const [ $triangle, $square, $circle ] = shapes;

let paused = 0;
let alternate = 0;
let tl;

const animateShapes = () => {
  alternate = !alternate;
  const x = (alternate ? 15 : 0) + 'rem';
  const rotate = (alternate ? 360 : -360);
  tl = createTimeline({
    defaults: { duration: 2000 },
    onPause: () => $value.textContent = ++paused
  })
  .add($circle, { x }, 0)
  .add($triangle, { x }, 0)
  .add($square, { x }, 0)
  .add(shapes, { rotate }, 0);
}

const pauseTL = () => {
  if (tl) tl.pause();
}

const removeTargets = () => {
  utils.remove(shapes);
}

animateShapes();

$animateButton.addEventListener('click', animateShapes);
$pauseButton.addEventListener('click', pauseTL);
$removeButton.addEventListener('click', removeTargets);
```

----------------------------------------

TITLE: Implementing Draggable Elements with Custom Drag Speeds in Anime.js
DESCRIPTION: This snippet demonstrates how to create draggable elements with different drag speeds using Anime.js. It shows two examples: one with increased speed and another with decreased speed.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-settingsdragspeed.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  dragSpeed: 2,
});

createDraggable('.circle', {
  container: '.grid',
  dragSpeed: .5,
});
```

----------------------------------------

TITLE: Using the snap utility function for value rounding in anime.js
DESCRIPTION: Demonstrates basic usage of the utils.snap function to round a number to the nearest increment or create a snapping function with a predefined increment parameter.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiessnap.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const snappedValue = utils.snap(value, increment);
const snapperFunction = utils.snap(increment);
```

----------------------------------------

TITLE: Adjusting Global Animation Speed with Anime.js in JavaScript
DESCRIPTION: This code snippet demonstrates setting the global speed of all animations in Anime.js to half speed, using the engine.speed parameter. It requires the Anime.js library and features a simple import statement.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationengineengine-parametersspeed.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
engine.speed = 0.5; // Run all animations at half speed
```

----------------------------------------

TITLE: Using then() with createTimer in Anime.js
DESCRIPTION: Demonstrates how to use the then() method with createTimer to execute a callback when the timer completes. This snippet shows both inline usage and async/await implementation.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-callbacksthen.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
createTimer({duration: 500}).then(callback);

async function waitForTimerToComplete() {
  return createTimer({ duration: 250 })
}

const asyncTimer = await waitForTimerToComplete();
```

----------------------------------------

TITLE: Creating a Timeline with Delay in Anime.js
DESCRIPTION: Demonstrates creating a timeline with a 2000ms delay and adding sequential animations for different elements. Also includes a timer function to log the delayed time.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-playback-settingsdelay.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimeline, createTimer, utils } from 'animejs';

const tl = createTimeline({
  delay: 2000,
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '-=500')
.add('.square', { x: '15rem' }, '-=500');

// For logging delayed time only

const [ $time ] = utils.$('.time');

createTimer({
  duration: 2000 + tl.duration,
  onUpdate: self => $time.innerHTML = (2000 - self.currentTime) * -1,
});
```

----------------------------------------

TITLE: HTML Structure for Anime.js play() Method Demo
DESCRIPTION: This HTML snippet defines the structure for demonstrating the play() method. It includes multiple rows with square elements that will be animated, and a control section with a play button that triggers the animation.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-methodsplay.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button play">Play</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: Configuring Draggable Component with Axes Parameters in AnimeJS
DESCRIPTION: This snippet demonstrates how to create a draggable element with specific configurations for x and y axes. It shows how to set different snap values for each axis, apply a modifier function, set container padding, adjust release animations, and handle events.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-axes-parameters.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
createDraggable('.square', {
  x: { snap: 100 },
  y: { snap: 50 },
  modifier: utils.wrap(-200, 0),
  containerPadding: 10,
  releaseStiffness: 40,
  releaseEase: 'out(3)',
  onGrab: () => {},
  onDrag: () => {},
  onRelease: () => {},
});
```

----------------------------------------

TITLE: Creating HTML Structure for Animation and Speed Control
DESCRIPTION: This HTML snippet provides the structure for displaying the animated circle, speed value, and range input for controlling the animation speed. It works in conjunction with the JavaScript code to create an interactive animation speed control interface.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiessync.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large row">
  <div class="circle"></div>
  <pre class="large log row">
    <span class="label">speed</span>
    <span class="speed value">1.00</span>
  </pre>
</div>
<div class="medium row">
  <fieldset class="controls">
    <input type="range" min=0 max=5 value=1 step=.01 class="range" />
  </fieldset>
</div>
```

----------------------------------------

TITLE: Initializing Anime.js Scope
DESCRIPTION: This code snippet initializes an Anime.js scope using the `createScope` function. It configures the scope with a root element selector, default animation properties (duration and easing), and media queries. The media queries are defined for mobile devices and reduced motion preference.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscopescope-parameters.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createScope, animate } from 'animejs';

createScope({
  root: '.section',
  defaults: {
    duration: 250,
    ease: 'out(4)',
  },
  mediaQueries: {
    mobile: '(max-width: 640px)',
    reducedMotion: '(prefers-reduced-motion)',
  }
})
.add( ctx => {
  const isMobile = ctx.matches.mobile;
  const reduceMotion = ctx.matches.reducedMotion;
  animate(targets, {
    x: isMobile ? 0 : '100vw',
    y: isMobile ? '100vh' : 0,
    duration: reduceMotion ? 0 : 750
  });
});
```

----------------------------------------

TITLE: Creating and Controlling Timeline with Dynamic Framerate in Anime.js
DESCRIPTION: This code creates an Anime.js timeline with an initial framerate of 60 fps and sets up event listeners to dynamically update the framerate based on user input. It animates multiple elements and allows real-time adjustment of the animation speed.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-playback-settingsframerate.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $fps ] = utils.$('.fps');

const tl = createTimeline({
  frameRate: 60,
  loop: true,
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '-=500')
.add('.square', { x: '15rem' }, '-=500');

const updateFps = () => {
  const { value } = $range;
  $fps.innerHTML = value;
  tl.fps = value;
}

$range.addEventListener('input', updateFps);
```

----------------------------------------

TITLE: HTML Structure for Animation Demo
DESCRIPTION: HTML markup for the animation demo interface, including display elements for duration value, animated squares, and a range input control for adjusting the animation duration.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-methodsstretch.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<pre class="large log row">
  <span class="label">total duration</span>
  <span class="value">0</span>
</pre>
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium centered row">
  <fieldset class="controls">
    <input type="range" min=100 max=2000 value=1000 step=100 class="seek range" />
  </fieldset>
</div>
```

----------------------------------------

TITLE: Implementing Draggable onSnap Callback in AnimeJS
DESCRIPTION: Creates a draggable element with snap functionality and a callback to count snap events. The code demonstrates how to use createDraggable with snap settings and update a counter display when snap events occur.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-callbacksonsnap.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let snaps = 0;

createDraggable('.square', {
  container: '.grid',
  snap: 16,
  modifier: utils.snap(16), // also snap the element while draggin
  onSnap: () => $value.textContent = ++snaps
});
```

----------------------------------------

TITLE: Creating Timeline with onBegin Callback in AnimeJS
DESCRIPTION: Demonstrates creating a timeline with a custom onBegin callback that updates DOM content. The timeline includes multiple animations with a 1000ms delay before the callback executes.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-callbacksonbegin.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $value ] = utils.$('.value');

const tl = createTimeline({
  delay: 1000, // Delays the onBegin() callback by 1000ms
  onBegin: self => $value.textContent = self.began
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' })
.add('.square', { x: '15rem' });
```

----------------------------------------

TITLE: HTML Structure for Draggable Element in Anime.js
DESCRIPTION: This HTML snippet shows the required DOM structure for implementing a draggable element. It includes a container with the 'grid' and 'square-grid' classes, and the draggable element with 'square' and 'draggable' classes.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-axes-parameterssnap.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large grid square-grid">
  <div class="square draggable"></div>
</div>
```

----------------------------------------

TITLE: Implementing Timer Loop Counter with AnimeJS
DESCRIPTION: Creates a timer with loop functionality that updates UI elements showing the loop count and current iteration time. Uses utility functions for DOM selection and implements both onLoop and onUpdate callbacks.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-callbacksonloop.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimer, utils } from 'animejs';

const [ $loops ] = utils.$('.loops');
const [ $time ] = utils.$('.time');

let loops = 0;

createTimer({
  loop: true,
  duration: 1000,
  onLoop: self => $loops.innerHTML = ++loops,
  onUpdate: self => $time.innerHTML = self.iterationCurrentTime,
});
```

----------------------------------------

TITLE: Animating Elements on Scroll with Enter Callback - Anime.js - JavaScript
DESCRIPTION: This snippet sets up an animation on a '.square' element that triggers when the user scrolls backward and meets a specified threshold. It updates a value displayed on the screen each time the enter threshold is met. The animation utilizes the onScroll method from the Anime.js library and requires the library to be imported. The key parameters include 'container' for the scrolling element and 'enter' defining the point where the callback is triggered.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-callbacksonenterbackward.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { animate, onScroll, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let entered = 0;

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: true,
    debug: true,
    onEnterBackward: () => $value.textContent = ++entered,
  })
});
```

----------------------------------------

TITLE: Applying Random Values to AnimeJS Animations
DESCRIPTION: Example showing how to use random utility to set dynamic properties for animation, including position, rotation, and scale transformations.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesrandom.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { utils } from 'animejs';

utils.set('.square', {
  x: () => utils.random(2, 18, 2) + 'rem',
  rotate: () => utils.random(0, 180),
  scale: () => utils.random(.25, 1.5, 3),
});
```

----------------------------------------

TITLE: Creating Rotatable Clock Animation with Radians in AnimeJS
DESCRIPTION: Demonstrates how to create an interactive clock animation using AnimeJS with radians as the rotation unit. The code tracks mouse movement to rotate a clock element, calculating angles using Math.atan2 and handling angle transitions across the full rotation range.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimatableanimatable-settingsunit.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createAnimatable, utils } from 'animejs';

const $demos = document.querySelector('#docs-demos');
const [ $clock ] = utils.$('.clock');
let bounds = $clock.getBoundingClientRect();
const refreshBounds = () => bounds = $clock.getBoundingClientRect();

const clock = createAnimatable($clock, {
  rotate: { unit: 'rad' }, // Set the unit to 'rad'
  duration: 400,
});

const { PI } = Math;
let lastAngle = 0
let angle = PI / 2;

const onMouseMove = e => {
  const { width, height, left, top } = bounds;
  const x = e.clientX - left - width / 2;
  const y = e.clientY - top - height / 2;
  const currentAngle = Math.atan2(y, x);
  const diff = currentAngle - lastAngle;
  angle += diff > PI ? diff - 2 * PI : diff < -PI ? diff + 2 * PI : diff;
  lastAngle = currentAngle;
  clock.rotate(angle); // Pass the new angle value in rad
}

window.addEventListener('mousemove', onMouseMove);
$demos.addEventListener('scroll', refreshBounds);
```

----------------------------------------

TITLE: Basic Interpolation in JavaScript using Anime.js
DESCRIPTION: Demonstrates how to use the interpolate utility function to calculate a value between two numbers based on a progress value. It also shows how to create an interpolation function for repeated use.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesinterpolate.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const interpolatedValue = utils.interpolate(start, end, progress);
const interpolatorFunction = utils.interpolate(start, end);
```

----------------------------------------

TITLE: Animating Elements with ScrollObserver in JavaScript
DESCRIPTION: The snippet demonstrates how to configure the ScrollObserver settings in animejs to animate elements when they enter or leave the viewport. Dependencies include the animejs library, and key parameters include container and target for the element selection, as well as axis for defining the scroll direction. The onEnter, onLeave, and onUpdate functions are used as hooks for respective scroll events.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-settings.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
animate('.square', {
  x: 100,
  autoplay: onScroll({
  ┌───────────────────────────────────────┌
  │ container: '.container', │
  │ target: '.section',      ├─ Settings
  │ axis: 'y',               │
  └──────────────────────────────────────────┌
    enter: 'bottom top',
    leave: 'top bottom',
    sync: true,
    onEnter: () => {},
    onLeave: () => {},
    onUpdate: () => {},
  })
});
```

----------------------------------------

TITLE: Initializing Draggable with Velocity Multiplier
DESCRIPTION: This code snippet demonstrates how to initialize the Anime.js draggable functionality with the `velocityMultiplier` setting.  It shows examples using both a static number (0 and 5) to control the post-release velocity of the dragged elements within a specified container.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-settingsvelocitymultiplier.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  velocityMultiplier: 0,
});

createDraggable('.circle', {
  container: '.grid',
  velocityMultiplier: 5,
});
```

----------------------------------------

TITLE: Configuring Draggable Axis Mapping with Anime.js
DESCRIPTION: Demonstrates how to create a draggable element with custom axis mapping. The x-axis movement is mapped to rotateY transformation and y-axis movement is mapped to z-index positioning. Includes initial setup of z-index using utils.set().
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-axes-parametersmapto.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable, utils } from 'animejs';

utils.set('.square', { z: 100 });

createDraggable('.square', {
  x: { mapTo: 'rotateY' },
  y: { mapTo: 'z' },
});
```

----------------------------------------

TITLE: Setting Default Timer Loop Callback in AnimeJS
DESCRIPTION: Shows how to globally configure the default onLoop callback by updating the engine defaults. The callback receives the timer instance as an argument.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-callbacksonloop.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.onLoop = self => console.log(self.id);
```

----------------------------------------

TITLE: Advanced Random Pick Implementation - JavaScript
DESCRIPTION: Shows how to use randomPick with AnimeJS utils.set() to randomly assign various properties including position, scale, color, and content to elements with the 'letter' class.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesrandom-pick.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { utils } from 'animejs';

utils.set('.letter', {
  x: () => utils.randomPick([5, 9, 13, 17]) + 'rem',
  scale: () => utils.randomPick([1, 1.25, 1.5, 1.75]),
  color: () => `var(--hex-${utils.randomPick(['red', 'orange', 'yellow'])})`,
  innerHTML: () => utils.randomPick('ABCD'),
});
```

----------------------------------------

TITLE: Implementing Timeline Completion with Anime.js in JavaScript
DESCRIPTION: This snippet demonstrates how to create a timeline using Anime.js, add animations to it, and implement a function to complete the timeline instantly. It also shows how to attach this function to a button click event.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodscomplete.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $completeButton ] = utils.$('.complete');

const tl = createTimeline({
  loop: true,
})
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const completeTimeline = () => tl.complete();

$completeButton.addEventListener('click', completeTimeline);
```

----------------------------------------

TITLE: HTML Structure for Composition Mode Demonstration in Anime.js
DESCRIPTION: This HTML structure creates a layout for demonstrating three different composition modes in Anime.js. It contains three squares with class names corresponding to their composition modes ('none', 'replace', and 'blend') and instructions for user interaction.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-parameterscomposition.md#2025-04-18_snippet_2

LANGUAGE: html
CODE:
```
<div class="large spaced-evenly row">
  <div class="col">
    <div class="centered row">
      <span class="label centered">none<br><br></span>
      <div class="square none"></div>
    </div>
  </div>
  <div class="col">
    <div class="centered row">
      <span class="label centered">replace<br><br></span>
      <div class="square replace"></div>
    </div>
  </div>
  <div class="col">
    <div class="centered row">
      <span class="label centered">blend<br><br></span>
      <div class="square blend"></div>
    </div>
  </div>
</div>

<div class="medium spaced-evenly centered row">
  <div class="label"><br><br>(Hover the squares)</div>
</div>
```

----------------------------------------

TITLE: Setting Global Default Composition Mode in Anime.js
DESCRIPTION: This snippet demonstrates how to change the default composition mode globally for all animations by updating the engine.defaults object in Anime.js.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-parameterscomposition.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.composition = 'blend';
```

----------------------------------------

TITLE: Creating Timers with onBegin Callback
DESCRIPTION: Shows how to create timers with custom onBegin callbacks and update DOM elements. Creates two timers: one with an onBegin callback to update status, and another to track and display the current time.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-callbacksonbegin.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimer, utils } from 'animejs';

const [ $status ] = utils.$('.status');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  delay: 2000,
  duration: 2000,
  onBegin: self => $status.innerHTML = 'true'
});

const logTimer = createTimer({
  duration: 4000,
  onUpdate: self => $time.innerHTML = timer.currentTime
});
```

----------------------------------------

TITLE: Implementing Mouse-tracking Animation with Revert Functionality - JavaScript
DESCRIPTION: Creates an interactive animation where circles follow mouse movement with staggered positioning. Includes functionality to revert the animation using a button click and handles cleanup of event listeners.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimatableanimatable-methodsrevert.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const $demos = document.querySelector('#docs-demos');
const $demo = $demos.querySelector('.docs-demo.is-active');
const [ $revertButton ] = utils.$('.revert');
let bounds = $demo.getBoundingClientRect();
const refreshBounds = () => bounds = $demo.getBoundingClientRect();

const circles = createAnimatable('.circle', {
  x: stagger(50, { from: 'center', start: 100 }),
  y: stagger(200, { from: 'center', start: 200 }),
  ease: 'out(4)',
});

const onMouseMove = e => {
  const { width, height, left, top } = bounds;
  const hw = width / 2;
  const hh = height / 2;
  const x = utils.clamp(e.clientX - left - hw, -hw, hw);
  const y = utils.clamp(e.clientY - top - hh, -hh, hh);
  circles.x(x).y(y);
}

const revertAnimatable = () => {
  window.removeEventListener('mousemove', onMouseMove);
  circles.revert();
}

$revertButton.addEventListener('click', revertAnimatable);
window.addEventListener('mousemove', onMouseMove);
$demos.addEventListener('scroll', refreshBounds);
```

----------------------------------------

TITLE: Implementing Animation Pause Functionality with Anime.js in JavaScript
DESCRIPTION: This code demonstrates how to create and pause an animation using Anime.js. It creates an animation that moves squares along the x-axis with staggered delays, and adds a pause button event listener to control the animation.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-methodspause.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, utils, stagger } from 'animejs';

const [ $pauseButton ] = utils.$('.pause');

const animation = animate('.square', {
  x: '17rem',
  alternate: true,
  ease: 'inOutSine',
  loop: true,
  delay: stagger(100),
});

const pauseAnimation = () => animation.pause();

$pauseButton.addEventListener('click', pauseAnimation);
```

----------------------------------------

TITLE: Creating Draggable Elements with Scroll Speed - JavaScript
DESCRIPTION: This code snippet demonstrates how to initialize a draggable square element with a specified scrolling speed within a designated container using the Anime.js library. The scroll speed is adjustable through a numerical value or a refreshable function.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-settingsscrollspeed.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.scroll-container',
  scrollSpeed: 2,
});
```

----------------------------------------

TITLE: HTML Structure for Draggable Element
DESCRIPTION: Defines the HTML structure required for the draggable functionality, including a container grid, a counter display, and the draggable square element.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-callbacksonsettle.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large padded grid square-grid">
  <pre class="large log row">
    <span class="label">stops</span>
    <span class="value">0</span>
  </pre>
  <div class="square draggable"></div>
</div>
```

----------------------------------------

TITLE: Applying Different Modifiers in AnimeJS Animations
DESCRIPTION: Demonstrates how to apply different modifiers to animations, including using utility functions and custom modifiers. Shows modifiers applied both globally to an animation and to specific properties.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-parametersmodifier.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

animate('.row:nth-child(1) .square', {
  x: '17rem',
  modifier: utils.round(0), // Round to 0 decimals
  duration: 4000,
});

animate('.row:nth-child(2) .square', {
  x: '85rem',
  modifier: v => v % 17,
  duration: 4000,
});

animate('.row:nth-child(3) .square', {
  x: '17rem',
  y: {
    to: '70rem',
    modifier: v => Math.cos(v) / 2, // Specific modifier to y property
  },
  duration: 4000,
});
```

----------------------------------------

TITLE: Creating Looped Timer with Counter Display
DESCRIPTION: Creates a timer that loops indefinitely, updates a loop counter, and displays the current iteration time. Uses utility functions for DOM selection and implements loop and update callbacks.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-playback-settingsloop.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimer, utils } from 'animejs';

const [ $loops ] = utils.$('.loops');
const [ $time ] = utils.$('.time');

let loops = 0;

createTimer({
  loop: true,
  duration: 1000,
  onLoop: () => $loops.innerHTML = ++loops,
  onUpdate: self => $time.innerHTML = self.iterationCurrentTime
});
```

----------------------------------------

TITLE: Animating Multiple Properties with Default Units in Anime.js WAAPI
DESCRIPTION: This example demonstrates animating multiple properties of an element using Anime.js WAAPI. It animates opacity, x-position, rotation, width, and height, relying on default units for numeric values.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiimprovements-to-the-web-animation-apidefault-units.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
import { waapi } from 'animejs';

waapi.animate('.square', {
  opacity: .5,
  x: 250,
  rotate: 45,
  width: 40,
  height: 40,
});
```

----------------------------------------

TITLE: Initializing ScrollObserver Instance
DESCRIPTION: Creates a ScrollObserver instance using the onScroll() function, which allows tracking and controlling scroll-related animations and interactions
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-methods.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const scrollObserver = onScroll(parameters);
```

----------------------------------------

TITLE: Basic MapRange Usage in JavaScript
DESCRIPTION: Demonstrates the basic usage of mapRange utility function to map a value from one range to another.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesmap-range.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const mappedValue = utils.mapRange(value, fromLow, fromHigh, toLow, toHigh);
const mapperFunction = utils.mapRange(fromLow, fromHigh, toLow, toHigh);
```

----------------------------------------

TITLE: Animating with clamp utility in Anime.js
DESCRIPTION: Shows how to use the clamp utility in animation settings. It compares a normal animation with a clamped animation using the clamp function as a modifier.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesclamp.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

animate('.normal', {
  rotate: '1turn',
  duration: 3000,
  loop: true,
  ease: 'inOut',
});

animate('.clamped', {
  rotate: '1turn',
  modifier: utils.clamp(.25, .75), // Used as a function
  duration: 3000,
  loop: true,
  ease: 'inOut',
});
```

----------------------------------------

TITLE: Setting Global Autoplay Default in Anime.js
DESCRIPTION: Shows how to change the default autoplay parameter value globally by updating the engine.defaults object in Anime.js.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-playback-settingsautoplay.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.autoplay = false;
```

----------------------------------------

TITLE: Implementing onSettle Callback with Anime.js Draggable
DESCRIPTION: Demonstrates how to create a draggable element with an onSettle callback that counts and displays the number of times the element has stopped moving. The callback is triggered when the dragged element comes to a complete stop after being released.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-callbacksonsettle.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let stops = 0;

createDraggable('.square', {
  container: '.grid',
  onSettle: () => $value.textContent = ++stops
});
```

----------------------------------------

TITLE: Implementing Staggered Animation with Custom Easing
DESCRIPTION: Example showing how to create a staggered animation with a custom power-based easing function. This snippet imports the required modules and animates multiple elements with a 100ms delay between each animation.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiapi-differences-with-native-waapieasing.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
import { waapi, stagger } from 'animejs';

waapi.animate('.square', {
  translate: '17rem',
  ease: 'inOut(6)',
  delay: stagger(100)
});
```

----------------------------------------

TITLE: Animation with onPause Callback Implementation in Anime.js
DESCRIPTION: Complete example showing how to implement the onPause callback in an animation. This creates an animation that moves a circle element horizontally while incrementing a counter each time the animation is paused via buttons or target removal.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-callbacksonpause.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

const [ $animateButton, $pauseButton, $removeButton ] = utils.$('.button');
const [ $value ] = utils.$('.value');
const [ $circle ] = utils.$('.circle');

let paused = 0;
let alternate = 0;
let animation;

const animateX = () => {
  alternate = !alternate;
  animation = animate($circle, {
    x: () => (alternate ? 16 : 0) + 'rem',
    duration: 2000,
    onPause: () => $value.innerHTML = ++paused,
  });
}

const pauseAnimation = () => {
  if (animation) animation.pause();
}

const removeTarget = () => {
  utils.remove($circle);
}

animateX();

$animateButton.addEventListener('click', animateX);
$pauseButton.addEventListener('click', pauseAnimation);
$removeButton.addEventListener('click', removeTarget);
```

----------------------------------------

TITLE: Linking an Animation with ScrollObserver in animejs
DESCRIPTION: This JavaScript snippet demonstrates how to create an animation using the animejs library and link it to a ScrollObserver instance. The ScrollObserver watches scroll events in a specified container and updates the animation accordingly. Dependencies include the animejs library imported using named imports. The main parameters include the target element for animation and scroll-related configuration in the onScroll function. The snippet assumes the presence of elements matching class selectors within an HTML structure.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-methodslink.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { animate, onScroll } from 'animejs';

const animation = animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
});

const scrollObserver = onScroll({
  container: '.scroll-container',
  enter: 'bottom-=50 top',
  leave: 'top+=60 bottom',
  sync: true,
  debug: true,
});

scrollObserver.link(animation);
```

----------------------------------------

TITLE: Setting Global Loop Delay in AnimeJS
DESCRIPTION: Demonstrates how to set the default loop delay globally for all animations using the engine.defaults object.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-playback-settingsplayback-loopdelay.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.loopDelay = 500;
```

----------------------------------------

TITLE: Practical Animation Example Using radToDeg in Anime.js
DESCRIPTION: Demonstrates a practical application of the radToDeg utility in an animation context. Creates two clock elements, one rotating in radians and the other in degrees, showing their synchronized rotation.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesrad-to-deg.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
import { animate, createAnimatable, utils } from 'animejs';

const degAnimatable = createAnimatable('.deg', {
  rotate: { unit: 'deg', duration: 0 }
});

const [ $rad ] = utils.$('.rad');

const degAnimation = animate($rad, {
  rotate: (Math.PI * 2) + 'rad',
  ease: 'linear',
  loop: true,
  onUpdate: () => {
    const radians = utils.get($rad, 'rotate', false);
    degAnimatable.rotate(utils.radToDeg(radians));
  }
});
```

----------------------------------------

TITLE: Implementing Draggable Revert Method with AnimeJS
DESCRIPTION: Demonstrates how to create a draggable element and implement revert functionality using AnimeJS. The code creates a draggable square element with buttons to revert it to its initial position and enable dragging.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-methodsrevert.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable, utils } from 'animejs';

const [ $revertButton ] = utils.$('.revert');
const [ $enableButton ] = utils.$('.enable');

const draggable = createDraggable('.square');

const revertDraggable = () => draggable.revert();
const enableDraggable = () => draggable.enable();

$revertButton.addEventListener('click', revertDraggable);
$enableButton.addEventListener('click', enableDraggable);
```

----------------------------------------

TITLE: Accessing Draggable Properties in JavaScript with AnimeJS
DESCRIPTION: This snippet shows how to access various properties of a draggable instance, such as progressX, progressY, and velocity. These properties provide information about the current state of the draggable element.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-properties.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
draggable.progressX
draggable.progressY
draggable.velocity
```

----------------------------------------

TITLE: Configuring Draggable Container Padding in Anime.js
DESCRIPTION: This snippet demonstrates how to create a draggable element with custom container padding using Anime.js. It sets up a draggable square within a grid container, specifying different padding values for each side.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-settingscontainerpadding.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  containerPadding: [ 16, 32, -16, 64], // top, right, bottom, left
  scrollThreshold: 0,
});
```

----------------------------------------

TITLE: Creating a Scoped Animation in Anime.js using JavaScript
DESCRIPTION: This snippet demonstrates how to use the `createScope` function from Anime.js to limit queries to a particular DOM subtree, defined by a CSS selector or a DOM element. Dependencies include the Anime.js library, and key functionality involves initializing animations within a defined scope.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscopescope-parametersroot.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createScope, animate } from 'animejs';

createScope({ root: '.row:nth-child(2)' })
.add(() => {
  animate('.square', {
    x: '17rem',
    loop: true,
    alternate: true
  });
});
```

----------------------------------------

TITLE: Anime.js Scroll Animation with Numeric Thresholds
DESCRIPTION: This JavaScript snippet uses Anime.js to create a scroll-triggered animation on an element with the class '.square'. The animation moves the element along the x-axis, rotates it, and sets its duration, easing, and loop properties.  The `onScroll` function is used to trigger the animation based on the scroll position of the element relative to the scroll container. The `enter` and `leave` properties define the scroll thresholds for triggering the animation.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-thresholdsnumeric-values.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { animate, onScroll } from 'animejs';

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  duration: 2000,
  alternate: true,
  loop: true,
  ease: 'inOutQuad',
  autoplay: onScroll({
    container: '.scroll-container',
    // -48px from the top of the target, 80px from the top of the container 
    enter: '80 -48',
    // 250% from the top of the target, 67.5% from the top of the container
    leave: '67.5% 250%',
    debug: true
  })
});
```

----------------------------------------

TITLE: Configuring Y-Axis Draggable Behavior with Anime.js
DESCRIPTION: This snippet demonstrates how to create draggable elements with different y-axis configurations using Anime.js. It shows enabling and disabling vertical movement for square elements.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-axes-parametersy.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable } from 'animejs';

createDraggable('.square.enabled', {
  y: true
});

createDraggable('.square.disabled', {
  y: false
});
```

----------------------------------------

TITLE: Configuring X-axis Draggable Behavior in Anime.js
DESCRIPTION: This example demonstrates how to enable or disable the x-axis dragging functionality using the 'createDraggable' function from Anime.js. It shows two implementations: one with x-axis enabled (default) and another with x-axis explicitly disabled.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-axes-parametersx.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable } from 'animejs';

createDraggable('.square.enabled', {
  x: true
});

createDraggable('.square.disabled', {
  x: false
});
```

----------------------------------------

TITLE: Using Custom Easing with Anime.js WAAPI
DESCRIPTION: Example demonstrating how to use the custom elastic easing function with Anime.js' WAAPI implementation. The ease parameter accepts an easing function and animates an element 100px horizontally.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiapi-differences-with-native-waapieasing.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
waapi.animate('.square', {
  x: 100,
  ease: eases.outElastic(1.25, .1)
});
```

----------------------------------------

TITLE: Setting Global Default onLoop Callback in Anime.js
DESCRIPTION: Shows how to change the default onLoop callback globally by updating the engine.defaults object. This example sets a function that logs the timeline's ID every time a loop completes.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-callbacksonloop.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.onLoop = self => console.log(self.id);
```

----------------------------------------

TITLE: Defining draw property values
DESCRIPTION: Examples of different draw property values that control how much of an SVG line is visible. The values range from 0 to 1, with pairs of numbers indicating the start and end points of visibility.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationsvgcreatedrawable.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
drawable.draw = '0 1';      |[———————————————————]|

                            0         .5
drawable.draw = '0 .5';     |[—————————]          |

                                 .25       .75
drawable.draw = '.25 .75';  |     [—————————]     |

                                      .5          1
drawable.draw = '.5 1';     |          [—————————]|

                                                1 1
drawable.draw = '1 1';      |                   []|
```

----------------------------------------

TITLE: Implementing Animatable Methods in Anime.js
DESCRIPTION: This code example shows a practical implementation of animatable methods in Anime.js. It creates an animatable circle element and uses methods to animate its position and background color based on mouse movement.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimatableanimatable-methodssetters.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createAnimatable, utils } from 'animejs';

const $demos = document.querySelector('#docs-demos');
const $demo = $demos.querySelector('.docs-demo.is-active');
let bounds = $demo.getBoundingClientRect();
const refreshBounds = () => bounds = $demo.getBoundingClientRect();

const circle = createAnimatable('.circle', {
  x: 0,
  y: 0,
  backgroundColor: 0,
  ease: 'outExpo',
});

const rgb = [164, 255, 79];

// Sets new durations and easings
circle.x(0, 500, 'out(2)');
circle.y(0, 500, 'out(3)');
circle.backgroundColor(rgb, 250);

const onMouseMove = e => {
  const { width, height, left, top } = bounds;
  const hw = width / 2;
  const hh = height / 2;
  const x = utils.clamp(e.clientX - left - hw, -hw, hw);
  const y = utils.clamp(e.clientY - top - hh, -hh, hh);
  rgb[0] = utils.mapRange(x, -hw, hw, 0, 164);
  rgb[2] = utils.mapRange(x, -hw, hw, 79, 255);
  circle.x(x).y(y).backgroundColor(rgb); // Update values
}

window.addEventListener('mousemove', onMouseMove);
$demos.addEventListener('scroll', refreshBounds);
```

----------------------------------------

TITLE: HTML Structure for Anime.js Timeline Demo
DESCRIPTION: This HTML snippet defines the structure for demonstrating the restart() method. It includes shape elements (triangle, square, circle) that will be animated by the timeline, and a control button to trigger the restart function.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodsrestart.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large row">
  <div class="medium pyramid">
    <div class="triangle"></div>
    <div class="square"></div>
    <div class="circle"></div>
  </div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button restart">Restart</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: Anime.js Scroll Animation with Relative Positions
DESCRIPTION: This JavaScript snippet uses Anime.js to animate a '.square' element when it enters and leaves a specified scroll container. The 'onScroll' function is used to trigger the animation based on scroll position, and relative values are applied to the 'enter' and 'leave' thresholds to define when the animation should start and stop.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-thresholdsrelative-position-values.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, onScroll } from 'animejs';

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  duration: 2000,
  alternate: true,
  loop: true,
  ease: 'inOutQuad',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'center+=1em top-=100%',
    leave: 'center-=1em bottom+=100%',
    debug: true
  })
});
```

----------------------------------------

TITLE: Animating Elements on Scroll using Anime.js - JavaScript
DESCRIPTION: This snippet demonstrates how to use Anime.js to animate elements when specific scroll events occur. It uses `animate` and `onScroll` functions from the Anime.js library and configures various animation settings such as `enter`, `leave`, and `autoplay`. The snippet requires Anime.js and appropriate HTML structure for the scroll container and elements.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-methodsrefresh.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { animate, onScroll } from 'animejs';

const scrollSettings = {
  enter: 20,
  leave: 60,
}

const animation = animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: () => `bottom-=${scrollSettings.enter} top`,
    leave: () => `top+=${scrollSettings.leave} bottom`,
    sync: .5,
    debug: true,
  })
});

animate(scrollSettings, {
  enter: 90,
  leave: 100,
  loop: true,
  alternate: true,
  modifier: utils.round(0),
  onUpdate: () => animation._autoplay.refresh()
});
```

----------------------------------------

TITLE: Toggling Engine Pause Behavior
DESCRIPTION: This snippet provides the functionality to toggle the 'pauseOnDocumentHidden' setting. It updates the engine's visibility behavior and modifies the button text accordingly to reflect the current state.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationengineengine-parameterspauseondocumenthidden.md#2025-04-18_snippet_2

LANGUAGE: JavaScript
CODE:
```
const toggleSetting = () => {
  const isPauseWhenHidden = engine.pauseOnDocumentHidden;
  if (isPauseWhenHidden) {
    engine.pauseOnDocumentHidden = false;
    $toggle.innerHTML = '○ Disabled (Switch tab to see the effect)';
  } else {
    engine.pauseOnDocumentHidden = true;
    $toggle.innerHTML = '● Enabled (Switch tab to see the effect)';
  }
}

$toggle.addEventListener('click', toggleSetting);
```

----------------------------------------

TITLE: HTML Structure for Anime.js onComplete Demo
DESCRIPTION: Shows the HTML markup structure used for demonstrating the onComplete callback. It includes a div with class 'circle' that will be animated, and a pre element that displays the completion status of the animation.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-callbacksoncomplete.md#2025-04-18_snippet_2

LANGUAGE: html
CODE:
```
<div class="large row">
  <div class="circle"></div>
  <pre class="large log row">
    <span class="label">completed</span>
    <span class="value">false</span>
  </pre>
</div>
```

----------------------------------------

TITLE: Animating Elements on Scroll Using Anime.js - JavaScript
DESCRIPTION: This code snippet sets up a scrolling animation using the Anime.js library, where an 'onEnterForward' callback updates a counter indicating how many times the target element has entered the viewport.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-callbacksonenterforward.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, onScroll, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let entered = 0;

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: true,
    debug: true,
    onEnterForward: () => $value.textContent = ++entered,
  })
});
```

----------------------------------------

TITLE: Anime.js ScrollObserver Thresholds Example
DESCRIPTION: This code snippet demonstrates how to use ScrollObserver with custom enter and leave thresholds to control an animation. The animation is triggered when the bottom of the container meets the top of the target and when the top of the container meets the bottom of the target.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-thresholds.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
animate('.square', {
  x: 100,
  autoplay: onScroll({

    container: '.container',
    target: '.section',
    axis: 'y',
  ┬─────────────────────┐
  │ enter: 'bottom top',     │─ Thresholds
  │ leave: 'top bottom',     │
  └─────────────────────┘
    sync: true,
    onEnter: () => {},
    onLeave: () => {},
    onUpdate: () => {},
  })
});
```

----------------------------------------

TITLE: Creating Animation Scopes with Anime.js in JavaScript
DESCRIPTION: This JavaScript snippet demonstrates how to create custom scopes with Anime.js, setting default animation properties like easing. The snippet iterates through row elements and applies a specific animation to child '.square' elements. It requires 'animejs' for animation functions and an element selection utility method 'utils.$'.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscopescope-parametersdefaults.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { createScope, animate } from 'animejs';

const rows = utils.$('.row');

rows.forEach(($row, i) => {
  createScope({
    root: $row,
    defaults: { ease: `out(${1 + i})` }
  })
  .add(() => {
    animate('.square', {
      x: '17rem',
      loop: true,
      alternate: true
    });
  });
});
```

----------------------------------------

TITLE: Animating with RGB Color Values in Anime.js
DESCRIPTION: This example shows how to use RGB color values in Anime.js animations. It targets an element with the class 'rgb' and animates its background color to 'rgb(255, 168, 40)'.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-value-typescolor-value.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
animate('.rgb',  {
  background: 'rgb(255, 168, 40)',
});
```

----------------------------------------

TITLE: Creating Draggable Elements with minVelocity in Anime.js
DESCRIPTION: This snippet demonstrates how to create draggable elements using Anime.js with different minVelocity settings. It shows two examples: one with default minVelocity and another with a custom value.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-settingsminvelocity.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  minVelocity: 0,
});

createDraggable('.circle', {
  container: '.grid',
  minVelocity: 10,
});
```

----------------------------------------

TITLE: Animating DOM Elements with AnimeJS
DESCRIPTION: Demonstrates how to target and animate single and multiple DOM elements using AnimeJS. Shows scaling a single element and moving multiple elements horizontally using querySelector and querySelectorAll.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtargetsdom-elements.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

const $demo = document.querySelector('#selector-demo');
const $squares = $demo.querySelectorAll('.square');

animate($demo, { scale: .75 });
animate($squares, { x: '23rem' });
```

----------------------------------------

TITLE: Implementing Shuffle Animation with Anime.js in JavaScript
DESCRIPTION: Shows a practical implementation of the shuffle utility in combination with other Anime.js functions. It sets up event listeners and animates shuffled elements on button click.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesshuffle.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { utils } from 'animejs';

const [ $shuffle ] = utils.$('button');
const squares = utils.$('.square');
const x = stagger('3.2rem');

// Initial squares x position
utils.set(squares, { x });

const shuffle = () => animate(utils.shuffle(squares), { x });

$shuffle.addEventListener('click', shuffle);
```

----------------------------------------

TITLE: Importing and Creating an AnimJS Timer in JavaScript
DESCRIPTION: This snippet demonstrates how to import the createTimer function from AnimJS and create a new timer with optional parameters. The createTimer function returns a Timer object.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimer.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimer } from 'animejs';

const timer = createTimer(parameters);
```

----------------------------------------

TITLE: Modifying Default onComplete Callback in Anime.js
DESCRIPTION: This snippet shows how to change the default onComplete callback globally for all Anime.js timers. It imports the engine from Anime.js and sets a new default function that logs the timer's ID.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-callbacksoncomplete.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.onComplete = self => console.log(self.id);
```

----------------------------------------

TITLE: Animating with Anime.js WAAPI Module
DESCRIPTION: Demonstrates the simplified syntax for animating an element using Anime.js WAAPI module. It applies a translation of 100 pixels to an element with the class 'circle'.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiimprovements-to-the-web-animation-apisensible-defaults.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
waapi.animate('.circle', { translate: '100px' });
```

----------------------------------------

TITLE: Creating Alternating Timer Animation with Loop Counter
DESCRIPTION: Shows how to create a timer animation with alternating direction and loop counting functionality. Includes loop and update callbacks to display current iteration count and time.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-playback-settingsalternate.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

const [ $loops ] = utils.$('.loops');
const [ $time ] = utils.$('.time');

let loops = 0;

createTimer({
  loop: true,
  duration: 1000,
  alternate: true,
  onLoop: () => $loops.innerHTML = ++loops,
  onUpdate: self => $time.innerHTML = self.iterationCurrentTime
});
```

----------------------------------------

TITLE: Importing Anime.js utilities and functions
DESCRIPTION: This snippet imports necessary functions and utilities from the Anime.js library, including `utils`, `stagger`, `createScope`, and `createTimeline`. These modules will be used to select elements, create animations with staggered delays, and manage animation scopes.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscopescope-methodsrevert.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { utils, stagger, createScope, createTimeline } from 'animejs';
```

----------------------------------------

TITLE: HTML Structure for Clock Animation Demo
DESCRIPTION: The HTML markup for the clock animation example. It defines two clock elements with labels, structured in a responsive grid layout. Each clock will demonstrate a different modifier behavior when animated.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimatableanimatable-settingsmodifier.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large centered row">
  <div class="col">
    <div class="clock clock-1"></div>
    <div class="label">snapped</div>
  </div>
  <div class="col">
    <div class="clock clock-2"></div>
    <div class="label">inverted</div>
  </div>
</div>
```

----------------------------------------

TITLE: Creating a Timeline with Default Parameters in Anime.js
DESCRIPTION: This example demonstrates how to create an Anime.js timeline with default parameters that will be applied to all animations within the timeline. The defaults include easing, duration, loop count, and direction settings.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-playback-settingsdefaults.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline } from 'animejs';

const tl = createTimeline({
  defaults: {
    ease: 'inOutExpo',
    duration: 500,
    loop: 2,
    reversed: true,
    alternate: true,
  }
})
.add('.square', { x: '15rem' })
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' });
```

----------------------------------------

TITLE: HTML Structure for Anime.js Animation Scopes
DESCRIPTION: This HTML snippet provides the structure needed for applying the Anime.js animation. Each '.row' element contains a '.square' div that is the target for animations, demonstrating how multiple identical structures can use shared scope defaults for consistent animations.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscopescope-parametersdefaults.md#2025-04-18_snippet_1

LANGUAGE: HTML
CODE:
```
<div class="medium row">
  <div class="square"></div>
  <div class="padded label">scope 1</div>
</div>
<div class="medium row">
  <div class="square"></div>
  <div class="padded label">scope 2</div>
</div>
<div class="medium row">
  <div class="square"></div>
  <div class="padded label">scope 3</div>
</div>
```

----------------------------------------

TITLE: Animating with ScrollObserver using Position Shorthands - JavaScript
DESCRIPTION: This JavaScript snippet demonstrates how to use Anime.js to animate a '.square' element based on scroll position within a '.scroll-container'.  The `onScroll` function is used to trigger the animation when the element enters or leaves the specified scroll positions (center top, center bottom).
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-thresholdspositions-shorthands.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, onScroll } from 'animejs';

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  duration: 2000,
  alternate: true,
  loop: true,
  ease: 'inOutQuad',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'center top',
    leave: 'center bottom',
    debug: true
  })
});
```

----------------------------------------

TITLE: Animating Multiple Targets with Anime.js
DESCRIPTION: Example showing how to animate both a JavaScript object (vector2D) and a DOM element (.square) simultaneously. Uses utils.roundPad for number formatting and updates a log element with the current vector2D state.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtargetsarray-of-targets.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

const [ $log ] = utils.$('.demo code');

const vector2D = { x: 0, y: 0 };

animate([vector2D, '.square'], {
  x: '17rem',
  modifier: utils.roundPad(2).padStart(5, '0'),
  onRender: () => $log.textContent = JSON.stringify(vector2D),
});
```

----------------------------------------

TITLE: Configuring Global Autoplay Default in Anime.js
DESCRIPTION: Code snippet showing how to change the default autoplay setting globally for all timelines by updating the engine.defaults object in Anime.js.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-playback-settingsautoplay.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.autoplay = false;
```

----------------------------------------

TITLE: Basic Utils.get() Function Signature
DESCRIPTION: Shows the basic syntax for using utils.get() to retrieve a target's property value. The function accepts a target element, property name, and optional unit parameter.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesget.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const value = utils.get(target, property, unit);
```

----------------------------------------

TITLE: Pausing and Resuming Anime.js Engine
DESCRIPTION: This JavaScript code pauses the Anime.js engine, displays a countdown on a button, and resumes the engine after the countdown. It uses `engine.pause()` to stop animations and `engine.resume()` to restart them. The `setInterval` function is used to manage the countdown and update the button text.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationengineengine-methodspause.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine, animate, utils } from 'animejs';

const [ $container ] = utils.$('.container');
const [ $add, $pause ] = utils.$('button');

function addAnimation() {
  const $particle = document.createElement('div');
  $particle.classList.add('particle');
  $container.appendChild($particle);
  animate($particle, {
    x: utils.random(-10, 10, 2) + 'rem',
    y: utils.random(-3, 3, 2) + 'rem',
    scale: [{ from: 0, to: 1 }, { to: 0 }],
    loop: true,
  });
}

let timeout = 3;
let interval;

function pauseEngine() {
  engine.pause();
  $pause.setAttribute('disabled', 'true');
  $pause.innerHTML = `Resume in ${timeout--} seconds`;
  interval = setInterval(() => {
    if (timeout <= 0) {
      clearInterval(interval);
      engine.resume();
      $pause.removeAttribute('disabled');
      $pause.innerHTML = 'Pause for 3 seconds';
      timeout = 3;    
    } else {
      $pause.innerHTML = `Resume in ${timeout--} seconds`;
    }
  }, 1000);
}

$add.addEventListener('click', addAnimation);
$pause.addEventListener('click', pauseEngine);
```

----------------------------------------

TITLE: Implementing Draggable Callbacks in Anime.js
DESCRIPTION: Example showing how to create a draggable element with snap points, container constraints, and callback functions. The code demonstrates setting up x/y snap points, modifier functions, container padding, stiffness, and ease settings along with basic callback hooks.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-callbacks.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
createDraggable('.square', {
  x: { snap: 100 },
  y: { snap: 50 },
  modifier: utils.wrap(-200, 0),
  containerPadding: 10,
  containerStiffness: 40,
  containerEase: 'out(3)',
  onGrab: () => {},
  onDrag: () => {},
  onRelease: () => {},
});
```

----------------------------------------

TITLE: Targeting Elements with AnimeJS CSS Selectors
DESCRIPTION: Demonstrates different ways to target DOM elements using CSS selectors in AnimeJS animations. Shows examples of class, ID, and nth-child selectors with various animation properties.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtargetscss-selector.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

animate('.square', { x: '17rem' });
animate('#css-selector-id', { rotate: '1turn' });
animate('.row:nth-child(3) .square', { scale: [1, .5, 1] });
```

----------------------------------------

TITLE: Implementing onAfterResize Callback in AnimeJS Draggable
DESCRIPTION: This snippet demonstrates how to use the onAfterResize callback in AnimeJS Draggable. It creates a draggable element and updates a counter each time the container or target sizes change. The callback also triggers an animation to bring the dragged element into view.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-callbacksonafterresize.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let resizes = 0;

const draggable = createDraggable('.square', {
  container: '.grid',
  onAfterResize: self => {
    $value.textContent = ++resizes;
    self.animateInView(1000, 30);
  }
});
```

----------------------------------------

TITLE: Setting Engine Pause Behavior
DESCRIPTION: This snippet demonstrates how to configure the Anime.js engine to pause animations when the document is hidden. It sets the 'pauseOnDocumentHidden' property and outlines its effect on animation playback.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationengineengine-parameterspauseondocumenthidden.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
engine.pauseOnDocumentHidden = true;
```

----------------------------------------

TITLE: Implementing Timer Restart Functionality with AnimeJS in JavaScript
DESCRIPTION: This code snippet demonstrates how to create and restart a timer using AnimeJS. It sets up a timer that updates a time display and adds a click event listener to a restart button. The timer's current time is displayed and can be reset to 0 using the restart method.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-methodsrestart.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimer, utils } from 'animejs';

const [ $restartButton ] = utils.$('.restart');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  onUpdate: self => $time.innerHTML = self.currentTime
});

const restartTimer = () => timer.restart();

$restartButton.addEventListener('click', restartTimer);
```

----------------------------------------

TITLE: Creating Manual Timer Control with Anime.js
DESCRIPTION: Demonstrates how to create a timer with autoplay disabled and manually play it using a button click event. The timer updates a time display on each update.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-playback-settingsautoplay.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
const [ $time ] = utils.$('.time');
const [ $playButton ] = utils.$('.play');

const timer = createTimer({
  autoplay: false,
  onUpdate: self => $time.innerHTML = self.currentTime
});

const playTimer = () => timer.play();

$playButton.addEventListener('click', playTimer);
```

----------------------------------------

TITLE: Implementing Multiple Animations with Different Durations in AnimeJS
DESCRIPTION: Example showing three animations with different durations (0ms, 500ms, and 2000ms). The first animation completes instantly, the second takes half a second, and the third takes two seconds to complete.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-playback-settingsduration.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

animate('.dur-0', {
  x: '17rem',
  duration: 0,
});

animate('.dur-500', {
  x: '17rem',
  duration: 500,
});

animate('.dur-2000', {
  x: '17rem',
  duration: 2000
});
```

----------------------------------------

TITLE: Initializing and Animating Circles with Anime.js
DESCRIPTION: This snippet creates animatable circles and sets up mouse move event handling to animate their positions. It uses createAnimatable, stagger, and utility functions from Anime.js.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimatableanimatable-settingsduration.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createAnimatable, utils, stagger } from 'animejs';

const $demos = document.querySelector('#docs-demos');
const $demo = $demos.querySelector('.docs-demo.is-active');
let bounds = $demo.getBoundingClientRect();
const refreshBounds = () => bounds = $demo.getBoundingClientRect();

const circles = createAnimatable('.circle', {
  x: 0, // Imediatly set the value without animation
  y: stagger(200, { from: 'center', start: 200 }),
  ease: 'out(4)',
});

const onMouseMove = e => {
  const { width, height, left, top } = bounds;
  const hw = width / 2;
  const hh = height / 2;
  const x = utils.clamp(e.clientX - left - hw, -hw, hw);
  const y = utils.clamp(e.clientY - top - hh, -hh, hh);
  circles.x(x).y(y);
}

window.addEventListener('mousemove', onMouseMove);
$demos.addEventListener('scroll', refreshBounds);
```

----------------------------------------

TITLE: HTML Structure for Anime.js Animation Demo
DESCRIPTION: The HTML markup that structures the animation demo, containing the elements being animated (triangle, square, circle) and a counter display that shows the number of updates triggered by the onUpdate callback.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-callbacksonupdate.md#2025-04-18_snippet_2

LANGUAGE: html
CODE:
```
<div class="large row">
  <div class="medium pyramid">
    <div class="triangle"></div>
    <div class="square"></div>
    <div class="circle"></div>
  </div>
  <pre class="large log row">
    <span class="label">updates</span>
    <span class="value">0</span>
  </pre>
</div>
```

----------------------------------------

TITLE: Toggle Anime.js Time Unit Setting
DESCRIPTION: This function `toggleSetting` toggles the Anime.js `engine.timeUnit` between seconds and milliseconds. It also disables the appropriate button based on the current time unit, enhancing user interface feedback.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationengineengine-parameterstimeunit-seconds-milliseconds.md#2025-04-18_snippet_3

LANGUAGE: javascript
CODE:
```
const toggleSetting = () => {
  const isUsingSeconds = engine.timeUnit === 's';
  engine.timeUnit = isUsingSeconds ? 'ms' : 's';
  $ms.disabled = isUsingSeconds;
  $s.disabled = !isUsingSeconds;
}
```

----------------------------------------

TITLE: Set Anime.js Global Time Unit
DESCRIPTION: This snippet shows how to globally change the time unit used by Anime.js to either seconds ('s') or milliseconds ('ms') using `engine.timeUnit`. The code also illustrates how the default duration is automatically adjusted to match the new time unit.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationengineengine-parameterstimeunit-seconds-milliseconds.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
engine.timeUnit = 's'; // Change the time unit globally to seconds
console.log(engine.engine.defaults.duration); // -> Returns 1
```

----------------------------------------

TITLE: HTML Structure for Anime.js Staggered Animation
DESCRIPTION: The HTML structure used for the staggered animation example, containing a pyramid of shapes (triangle, square, and circle) that will be animated with different timing delays.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationstaggertimeline-positions-staggering.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large row">
  <div class="medium pyramid">
    <div class="triangle"></div>
    <div class="square"></div>
    <div class="circle"></div>
  </div>
</div>
```

----------------------------------------

TITLE: Creating Anime.js Timeline with Stagger Effect
DESCRIPTION: This code snippet demonstrates how to create an Anime.js timeline with a stagger effect using the `stagger` function. It imports `createtimeline` and `stagger` from the animejs library and defines a timeline with multiple animations, each applying a different 'from' value to the stagger function to control the starting point of the animation on a series of square elements.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationstaggerstagger-parametersstagger-from.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createtimeline, stagger } from 'animejs';

const tl = createTimeline({
  loop: true,
  alternate: true,
})
.add('.row:nth-child(1) .square', {
  scale: 0,
  delay: stagger(50, { from: 8 }),
})
.add('.row:nth-child(2) .square', {
  scale: 0,
  delay: stagger(50, { from: 'first' }),
})
.add('.row:nth-child(3) .square', {
  scale: 0,
  delay: stagger(50, { from: 'center' }),
})
.add('.row:nth-child(4) .square', {
  scale: 0,
  delay: stagger(50, { from: 'last' }),
});
```

----------------------------------------

TITLE: Animating with Interpolation in JavaScript using Anime.js
DESCRIPTION: Demonstrates how to use the interpolate utility within animation configurations. It shows two animations: one normal rotation and one using interpolation for rotation.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesinterpolate.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

animate('.normal', {
  rotate: '1turn',
  duration: 3000,
  loop: true,
  ease: 'inOut',
});

animate('.interpolated', {
  rotate: '1turn',
  modifier: utils.interpolate(0, 12), // Interpolates 0 to 12 by passing the rotate progress value 0 to 1
  duration: 3000,
  loop: true,
  ease: 'inOut',
});
```

----------------------------------------

TITLE: Using clamp utility in Anime.js
DESCRIPTION: Demonstrates how to use the clamp utility function from Anime.js to restrict values or create a clamping function. It shows basic usage and chaining with other utilities.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesclamp.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const clampedValue = utils.clamp(value, min, max);
const clamperFunction = utils.clamp(min, max);
```

LANGUAGE: javascript
CODE:
```
const clampBetween0and100 = utils.clamp(0, 100);
clampBetween0and100(90);  // 90
clampBetween0and100(120); // 100
clampBetween0and100(-15); // 0

const clampAndRound = utils.clamp(0, 100).round(2); // Clamp then round to 2 decimal places
clampAndRound(72.7523); // 72.75
clampAndRound(120.2514); // 100
```

----------------------------------------

TITLE: Import onScroll from Anime.js
DESCRIPTION: Imports the `onScroll` function along with `animate` from the Anime.js library. The `onScroll` function is used to create a ScrollObserver, which triggers animations based on scroll position.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscroll.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { onScroll, animate } from 'animejs';
```

----------------------------------------

TITLE: Complete Anime.js Example with Promise Handling
DESCRIPTION: A full example showing how to import Anime.js modules, create an animation with multiple options, and use the then() method to update UI text when the animation is fulfilled.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiapi-differences-with-native-waapifinished.md#2025-04-18_snippet_3

LANGUAGE: javascript
CODE:
```
import { waapi, utils } from 'animejs';

const [ $value ] = utils.$('.value');

const animation = waapi.animate('.circle', {
  translate: '16rem',
  loop: 2,
  alternate: true,
});

animation.then(() => $value.textContent = 'fulfilled');
```

----------------------------------------

TITLE: Enabling Draggable Elements with Anime.js in JavaScript
DESCRIPTION: This code snippet demonstrates how to create a draggable element, disable it, and then enable it using a button click event. It utilizes the createDraggable and utils functions from the animejs library.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-methodsenable.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable, utils } from 'animejs';

const [ $enableButton ] = utils.$('.enable');

const draggable = createDraggable('.square');

draggable.disable();

const enableDraggable = () => draggable.enable();

$enableButton.addEventListener('click', enableDraggable);
```

----------------------------------------

TITLE: Creating Draggable Object in JavaScript
DESCRIPTION: The snippet demonstrates how to create a Draggable object using 'createDraggable' function, detailing object initialization with target elements and parameters. This instance object 'draggable' allows managing its behavior via methods like 'disable', 'enable', and 'revert'. Requires anime.js library version 4.0.0 or higher.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-methods.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
const draggable = createDraggable(target, parameters);
```

----------------------------------------

TITLE: Setting Global Default Duration in AnimeJS
DESCRIPTION: Shows how to modify the default animation duration globally using the engine.defaults object.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-parametersduration.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.duration = 500;
```

----------------------------------------

TITLE: Interactive Timer Stretch Implementation
DESCRIPTION: Complete implementation of a timer stretch demo that includes creating a timer with update callback and handling range input events to dynamically adjust timer duration.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-methodsstretch.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $duration ] = utils.$('.duration');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  duration: 2000,
  onUpdate: self => $time.innerHTML = self.currentTime
});

const stretchTimer = () => {
  timer.stretch(+$range.value);
  $duration.innerHTML = utils.round(timer.duration, 0);
  timer.restart();
}

$range.addEventListener('input', stretchTimer);
```

----------------------------------------

TITLE: Implementing Timer Complete Method in AnimeJS
DESCRIPTION: Demonstrates how to create and complete a timer using AnimeJS. The code creates a timer with a 100000ms duration that updates a display element, and includes a button to trigger instant completion.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-methodscomplete.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimer, utils } from 'animejs';

const [ $completeButton ] = utils.$('.complete');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  duration: 100000,
  onUpdate: self => $time.innerHTML = self.currentTime
});

const completeTimer = () => timer.complete();

$completeButton.addEventListener('click', completeTimer);
```

----------------------------------------

TITLE: HTML Structure for Anime.js Timeline Animation
DESCRIPTION: HTML structure containing the target elements for the Anime.js timeline animation. It includes a pyramid with triangle, square, and circle elements that will be animated according to the timeline positioning.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetime-position.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large row">
  <div class="medium pyramid">
    <div class="triangle"></div>
    <div class="square"></div>
    <div class="circle"></div>
  </div>
</div>
```

----------------------------------------

TITLE: Advanced Interpolation Examples in JavaScript using Anime.js
DESCRIPTION: Shows more complex usage of the interpolate function, including creating a reusable interpolation function, chaining with rounding, and using it within animation configurations.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesinterpolate.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
const interpolateBetween0and100 = utils.interpolate(0, 100);
interpolateBetween0and100(0.5);  // 50
interpolateBetween0and100(0.75); // 75
interpolateBetween0and100(0.25); // 25

const interpolateAndRound = utils.interpolate(0, 100).round(2); // Interpolate then round to 2 decimal places
interpolateAndRound(0.677523); // 67.75
interpolateAndRound(1.202514); // 100
```

----------------------------------------

TITLE: HTML Structure for AnimeJS Timeline Example
DESCRIPTION: This HTML snippet provides the structure for displaying the results of the AnimeJS timeline 'call' method example. It includes three columns to show the output of functions A, B, and C.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodscall.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large centered row">
  <div class="col">
    <pre class="large log row">
      <span class="label">function A</span>
      <span class="function-A value lcd">--</span>
    </pre>
  </div>
  <div class="col">
    <pre class="large log row">
      <span class="label">function B</span>
      <span class="function-B value lcd">--</span>
    </pre>
  </div>
  <div class="col">
    <pre class="large log row">
      <span class="label">function C</span>
      <span class="function-C value lcd">--</span>
    </pre>
  </div>
</div>
```

----------------------------------------

TITLE: Implementing onComplete and onUpdate Callbacks in Anime.js Timer
DESCRIPTION: This example demonstrates the usage of onComplete and onUpdate callbacks in an Anime.js timer. It creates a timer with a duration of 2000ms, updates the status when completed, and continuously updates the current time.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-callbacksoncomplete.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimer, utils } from 'animejs';

const [ $status ] = utils.$('.status');
const [ $time ] = utils.$('.time');

createTimer({
  duration: 2000,
  onComplete: self => $status.innerHTML = 'true',
  onUpdate: self => $time.innerHTML = self.currentTime
});
```

----------------------------------------

TITLE: Creating Animatable Clocks with Different Easing Functions in Anime.js
DESCRIPTION: This snippet demonstrates how to create two animatable clocks using Anime.js, each with a different easing function. It includes functions to rotate the clocks based on mouse movement.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimatableanimatable-settingsease.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createAnimatable, utils, stagger } from 'animejs';

const clock1 = createAnimatable('.clock-1', {
  rotate: { unit: 'rad' },
  ease: 'linear',
});

const clock2 = createAnimatable('.clock-2', {
  rotate: { unit: 'rad' },
  ease: 'outElastic',
});

const rotateClock = (animatable) => {
  const PI = Math.PI;
  let angle = PI / 2;
  let lastAngle = 0;
  return e => {
    const [ $clock ] = animatable.targets;
    const { width, height, left, top } = $clock.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    const currentAngle = Math.atan2(y, x);
    const diff = currentAngle - lastAngle;
    angle += diff > PI ? diff - 2 * PI : diff < -PI ? diff + 2 * PI : diff;
    lastAngle = currentAngle;
    animatable.rotate(angle);
  }
}

const rotateClock1 = rotateClock(clock1);
const rotateClock2 = rotateClock(clock2);

const onMouseMove = e => {
  rotateClock1(e);
  rotateClock2(e);
}

window.addEventListener('mousemove', onMouseMove);
```

----------------------------------------

TITLE: Animating Scroll with Synchronization Mode in Anime.js
DESCRIPTION: This snippet demonstrates how to utilize the onScroll() method from Anime.js to synchronize animation with scroll position, utilizing parameters to define the synchronization behavior.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-synchronisation-modes.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
animate('.square', {
  x: 100,
  autoplay: onScroll({
    container: '.container',
    target: '.section',
    axis: 'y',
    enter: 'bottom top',
    leave: 'top bottom',
    sync: true,            // Synchronisation Mode
    onEnter: () => {},
    onLeave: () => {},
    onUpdate: () => {},
  })
});
```

----------------------------------------

TITLE: Chaining Multiple Utility Functions in JavaScript
DESCRIPTION: Demonstrates how to chain multiple utility functions together to create a more complex operation. This example normalizes a value and rounds it to one decimal place.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitieschain-able-utility-functions.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
const normalizeAndRound = utils.mapRange(0, 255, 0, 1).round(1);
normalizeAndRound(128); // '0.5'
normalizeAndRound(64);  // '0.3'
```

----------------------------------------

TITLE: Setting Global Framerate Defaults in AnimeJS
DESCRIPTION: Demonstrates how to modify the default framerate globally using the engine.defaults object. This affects all subsequent timer instances.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-playback-settingsframerate.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.frameRate = 30;
```

----------------------------------------

TITLE: Scroll Layout Structure - HTML
DESCRIPTION: This snippet provides the HTML structure necessary to demonstrate the scroll-enabled animations defined in the JavaScript snippet. It includes a scroll container with elements that respond to scroll events.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-callbacksonupdate.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="scroll-container scroll-y">
  <div class="scroll-content grid square-grid">
    <div class="scroll-section padded sticky">
      <div class="large row">
        <pre class="large log row">
          <span class="label">updates</span>
          <span class="value">0</span>
        </pre>
      </div>
    </div>
    <div class="scroll-section padded">
      <div class="large row">
        <div class="square"></div>
      </div>
    </div>
    <div class="scroll-section">
    </div>
  </div>
</div>
```

----------------------------------------

TITLE: Configuring Anime.js Stagger Parameters
DESCRIPTION: Demonstrates the stagger method with multiple configuration options including start, from, reversed, ease, and grid parameters. Used to create sequential or grid-based animation effects.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationstaggerstagger-parameters.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
stagger(
  '1rem',
  {
    start: 100,
    from: 2,
    reversed: false,
    ease: 'outQuad',
    grid: [8, 8],
  }
);
```

----------------------------------------

TITLE: Setting Animatable Properties in Anime.js
DESCRIPTION: This snippet demonstrates how to use animatable properties as methods to set new values, durations, and easing functions. It shows the syntax for calling these methods and explains their parameters and return values.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimatableanimatable-methodssetters.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
animatable.property(value, duration, easing);
```

----------------------------------------

TITLE: Implementing Draggable ScrollInView with AnimeJS
DESCRIPTION: Creates a draggable element and implements scroll-into-view functionality. The code demonstrates how to initialize a draggable element and trigger scrolling animation when the element is outside the viewport. Includes event listener setup and position configuration.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-methodsscrollinview.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable } from 'animejs';

const [ $scrollInView ] = utils.$('.scroll-button');

const draggable = createDraggable('.square', {
  container: '.scroll-container',
});

const scrollInView = () => {
  draggable.scrollInView(400, 100);
}

// Set the draggable position outside the scroll viewport
draggable.x = 120;
draggable.y = 200;

$scrollInView.addEventListener('click', scrollInView);
```

----------------------------------------

TITLE: Animating Scroll Updates with Anime.js - JavaScript
DESCRIPTION: This snippet imports the necessary functions from Anime.js and sets up an animation on a square element that updates a displayed value during scroll events. It uses the onScroll callback to handle synchronization with the scroll container.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-callbacksonupdate.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, onScroll, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let updates = 0;

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: .5,
    debug: true,
    onUpdate: () => $value.textContent = ++updates,
  })
});
```

----------------------------------------

TITLE: Implementing onBeforeUpdate Callback in Anime.js Timeline
DESCRIPTION: This code creates an Anime.js timeline with an onBeforeUpdate callback. The callback updates a DOM element with the number of updates. The timeline animates three shapes sequentially with loops and delays.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-callbacksonbeforeupdate.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let updates = 0;

const tl = createTimeline({
  defaults: { duration: 500 },
  loopDelay: 250,
  loop: true,
  onBeforeUpdate: self => $value.textContent = ++updates
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '+=250')
.add('.square', { x: '15rem' }, '+=250');
```

----------------------------------------

TITLE: Native WAAPI Animation with Promise.all
DESCRIPTION: Demonstrates the equivalent approach using native Web Animation API. This example creates multiple animations and uses Promise.all with the finished property to track completion of all animations.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiapi-differences-with-native-waapifinished.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
const targets = document.querySelectorAll('.square');
const animations = [];

targets.forEach(($el, i) => {
  animations[i] = $el.animate({
    translate: '100px',
  }, {
    fill: 'forwards',
    duration: 500,
  });
});

Promise.all(
  animations
    .map((animation) => animation.finished)
    .then(() => console.log('completed'))
);
```

----------------------------------------

TITLE: Implementing Different Composition Modes with Interactive Animation Example in Anime.js
DESCRIPTION: This code demonstrates how to use different composition modes ('none', 'replace', and 'blend') in Anime.js animations. It sets up a base animation for three squares and adds interactive hover animations with different composition behaviors for each square.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-parameterscomposition.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

const squares = utils.$('.square');
const [ $none, $replace, $blend ] = squares;

// Animate each square with a different composition mode

squares.forEach($square => {
  // 'none', 'replace', 'blend'
  const mode = $square.classList[1];
  animate($square, {
    scale: [.5, 1],
    alternate: true,
    loop: true,
    duration: 750,
    composition: mode,
  });
});

// Common animation parameters

const enter = { scale: 1.5, duration: 350 };
const leave = { scale: 1.0, duration: 250 };

// Composition none animations

const enterNone = () => animate($none, {
  composition: 'none', ...enter
});

const leaveNone = () => animate($none, {
  composition: 'none', ...leave
});

$none.addEventListener('mouseenter', enterNone);
$none.addEventListener('mouseleave', leaveNone);

// Composition replace animations

const enterReplace = () => animate($replace, {
  composition: 'replace', ...enter
});

const leaveReplace = () => animate($replace, {
  composition: 'replace', ...leave
});

$replace.addEventListener('mouseenter', enterReplace);
$replace.addEventListener('mouseleave', leaveReplace);

// Composition blend animations

const enterBlend = () => animate($blend, {
  composition: 'blend', ...enter
});

const leaveBlend = () => animate($blend, {
  composition: 'blend', ...leave
});

$blend.addEventListener('mouseenter', enterBlend);
$blend.addEventListener('mouseleave', leaveBlend);
```

----------------------------------------

TITLE: Creating and Using padStart Function with Examples
DESCRIPTION: Examples demonstrating how to create a reusable padding function with predefined parameters and how to chain utility functions together to perform multiple operations like rounding and padding.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiespad-start.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
const padTo5WithZeros = utils.padStart(5, '0');
padTo5WithZeros('123');  // '00123'
padTo5WithZeros(78);     // '00078'
padTo5WithZeros('1234'); // '01234'

const roundAndPad = utils.round(2).padStart(5, '0'); // Round to 2 decimal places then pad to 5 characters
roundAndPad(12.345);  // '12.35'
roundAndPad(7.8);     // '07.80'
```

----------------------------------------

TITLE: Importing Anime.js Engine
DESCRIPTION: This snippet demonstrates how to import the `engine` object from the animejs library. The `engine` object provides access to global animation parameters like speed, fps, and precision, allowing you to configure the overall animation behavior.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationengineengine-parameters.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
```

----------------------------------------

TITLE: Timeline Stretch Method Implementation in JavaScript
DESCRIPTION: Shows how to create and control an Anime.js timeline with the stretch method. Creates animations for multiple elements with different delays and allows dynamic duration adjustment through a range input.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodsstretch.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $totalDuration ] = utils.$('.value');

const tl = createTimeline({
  loop: 1,
  alternate: true,
})
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const stretchTimeline = () => {
  const newDuration = +$range.value;
  $totalDuration.textContent = newDuration;
  tl.stretch(newDuration).restart();
}

stretchTimeline();

$range.addEventListener('input', stretchTimeline);
```

----------------------------------------

TITLE: Configuring Draggable Cursor Settings in AnimeJS
DESCRIPTION: This snippet demonstrates how to create draggable elements with custom cursor settings using AnimeJS. It shows two examples: one disabling custom cursor styling and another setting specific cursor styles for hover and grab states.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-settingscursor.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable } from 'animejs';

createDraggable('.square', {
  cursor: false
});

createDraggable('.circle', {
  cursor: {
    onHover: 'move',
    onGrab: 'wait'
  }
});
```

----------------------------------------

TITLE: Using stretch() Method in Anime.js
DESCRIPTION: Demonstrates how to use the stretch() method to modify animation duration. The animation moves squares horizontally with staggered timing, allowing runtime duration adjustment via a range input.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-methodsstretch.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, utils, stagger } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $totalDuration ] = utils.$('.value');

const animation = animate('.square', {
  x: '17rem',
  ease: 'inOutSine',
  delay: stagger(200),
});

const stretchAnimation = () => {
  const newDuration = +$range.value;
  $totalDuration.textContent = newDuration;
  animation.stretch(newDuration).restart();
}

stretchAnimation();

$range.addEventListener('input', stretchAnimation);
```

----------------------------------------

TITLE: Creating a Timer with Custom Playback Rate and Interactive Controls
DESCRIPTION: Demonstrates how to create a timer with a custom playback rate and implement interactive controls to adjust the speed in real-time. The timer updates a time display and allows changing the speed via a range input.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-playback-settingsplaybackrate.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimer, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $speed ] = utils.$('.speed');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  playbackRate: 2,
  onUpdate: self => $time.innerHTML = utils.round(self.currentTime, 0),
});

const updateSpeed = () => {
  const speed = utils.roundPad(+$range.value, 1);
  $speed.innerHTML = speed;
  utils.sync(() => timer.speed = speed);
}

$range.addEventListener('input', updateSpeed);
```

----------------------------------------

TITLE: Setting Global Default Playback Rate in Anime.js
DESCRIPTION: Demonstrates how to set the default playback rate globally for all animations using the engine.defaults object. This affects all animations unless overridden locally.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-playback-settingsplaybackrate.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.playbackRate = .75;
```

----------------------------------------

TITLE: Animating a Square on Scroll with Anime.js
DESCRIPTION: This snippet demonstrates how to animate a square element by changing its position and rotation when the user scrolls horizontally. It uses the 'onScroll' function from the Anime.js library to trigger the animation based on the scroll container defined by the user.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-settingsaxis.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimer, utils, onScroll } from 'animejs';

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  duration: 2000,
  alternate: true,
  loop: true,
  ease: 'inOutQuad',
  autoplay: onScroll({
    container: '.scroll-container',
    axis: 'x',
  })
});
```

----------------------------------------

TITLE: Animating with Duration-Based Keyframes in AnimeJS
DESCRIPTION: Creates an animation using keyframes that define multiple property values at specific points in time. The animation will transition between each keyframe over the specified duration.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationkeyframes.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
animate('.square', {
  keyframes: [
    { x: 100, y: 100 },
    { x: 200, y: 200 },
  ],
  duration: 3000,
}
```

----------------------------------------

TITLE: AnimeJS Animation with MapRange Modifier
DESCRIPTION: Demonstrates using mapRange as a modifier in AnimeJS animations, comparing normal and mapped rotation animations.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesmap-range.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

animate('.normal', {
  rotate: '12turn',
  duration: 12000,
  loop: true,
  ease: 'inOut',
});

animate('.mapped', {
  rotate: '12turn',
  modifier: utils.mapRange(0, 12, 0, 1), // Used as a modifier
  duration: 12000,
  loop: true,
  ease: 'inOut',
});
```

----------------------------------------

TITLE: Creating and Using Simple Chain-able Functions in JavaScript
DESCRIPTION: Shows how to create a simple chain-able function using the clamp utility and how to use it without chaining.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitieschain-able-utility-functions.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
const chainableClamp = utils.clamp(0, 100); // Returns a chain-able function
const result = chainableClamp(150); // 100
```

----------------------------------------

TITLE: Removing Animations, Timers, or Timelines from Anime.js Timeline
DESCRIPTION: Demonstrates how to remove animations, timers, or timelines from an Anime.js timeline. The method accepts an object (Animation, Timer, or Timeline) and an optional time position.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodsremove.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
timeline.remove([animation, timer, timeline]);
```

----------------------------------------

TITLE: HTML Structure for Animated Circles
DESCRIPTION: This HTML snippet defines the structure for the animated circles and includes a label instructing users to move the cursor around.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimatableanimatable-settingsduration.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="medium centered row">
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
</div>
<div class="small centered row">
  <span class="label"><br><br><br>Move cursor around</span>
</div>
```

----------------------------------------

TITLE: HTML for Time Unit Display and Controls
DESCRIPTION: This HTML snippet defines the structure for displaying the time in both seconds and milliseconds, along with buttons to toggle between the two time units. It includes `div` elements for layout, `pre` elements for displaying the timer values, and `button` elements for user interaction.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationengineengine-parameterstimeunit-seconds-milliseconds.md#2025-04-18_snippet_5

LANGUAGE: html
CODE:
```
<div class="large centered row">
  <div class="col">
    <pre class="large log row">
      <span class="label">duration: 1</span>
      <span class="time-s value lcd">0</span>
    </pre>
  </div>
  <div class="col">
    <pre class="large log row">
      <span class="label">duration: 1000</span>
      <span class="time-ms value lcd">0</span>
    </pre>
  </div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button toggle" disabled>milliseconds</button>
    <button class="button toggle">seconds</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: HTML Structure for Anime.js Animation Target
DESCRIPTION: Provides the HTML structure for the target element of the Anime.js animation, which is a square div inside a container with specific classes.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-parametersdelay.md#2025-04-18_snippet_2

LANGUAGE: html
CODE:
```
<div class="medium row">
  <div class="square"></div>
</div>
```

----------------------------------------

TITLE: HTML Structure for Displaying Anime.js Timer Values
DESCRIPTION: This HTML snippet creates a structure to display the iteration time and current time of an Anime.js timer animation. It uses pre-formatted elements with specific classes for styling and identification.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-playback-settingsreversed.md#2025-04-18_snippet_2

LANGUAGE: html
CODE:
```
<div class="large centered row">
  <div class="col">
    <pre class="large log row">
      <span class="label">iteration time</span>
      <span class="iteration-time value lcd">0</span>
    </pre>
  </div>
  <div class="col">
    <pre class="large log row">
      <span class="label">current time</span>
      <span class="current-time value lcd">0</span>
    </pre>
  </div>
</div>
```

----------------------------------------

TITLE: HTML Structure for Staggered Animations with Anime.js
DESCRIPTION: This HTML snippet provides the structure for elements that will be animated using the stagger function in Anime.js. Each div with the class 'square' will be the target of the animations, allowing those elements to be animated in sequence according to the specified parameters in the JavaScript code.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationstagger.md#2025-04-18_snippet_1

LANGUAGE: HTML
CODE:
```
<div class=\"small row\">\n  <div class=\"square\"></div>\n</div>\n<div class=\"small row\">\n  <div class=\"square\"></div>\n</div>\n<div class=\"small row\">\n  <div class=\"square\"></div>\n</div>\n<div class=\"small row\">\n  <div class=\"square\"></div>\n</div>
```

----------------------------------------

TITLE: Initializing ScrollObserver with Scroll-Based Animation
DESCRIPTION: Creates a scroll-triggered animation for an element using Anime.js onScroll configuration with revert method
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-methodsrevert.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, onScroll } from 'animejs';

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: 1,
    debug: true,
    onSyncComplete: self => self.revert()
  })
});
```

----------------------------------------

TITLE: Implementing Timeline Remove Methods in Anime.js
DESCRIPTION: A complete example demonstrating the usage of remove() method in different scenarios. It creates a timeline with multiple animations and provides functions to remove an animation, a target, and a specific tween property.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodsremove.md#2025-04-18_snippet_3

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $removeA, $removeB, $removeC ] = utils.$('.button');

const animation = animate('.circle', { x: '15rem', scale: [1, .5, 1] });

const tl = createTimeline({ loop: true, alternate: true })
.sync(animation)
.add('.triangle', { x: '15rem', rotate: 360 }, 100)
.add('.square',   { x: '15rem' }, 200);

const removeAnimation = () => tl.remove(animation);
const removeTarget = () => tl.remove('.square');
const removeRotate = () => tl.remove('.triangle', 'rotate');

$removeA.addEventListener('click', removeAnimation);
$removeB.addEventListener('click', removeTarget);
$removeC.addEventListener('click', removeRotate);
```

----------------------------------------

TITLE: Animating Elements with Anime.js in JavaScript
DESCRIPTION: This snippet illustrates adding and animating 150 particles with random positions and scale, leveraging utility functions from Anime.js. Requires imports from the Anime.js package and a container to hold particles.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationengineengine-parametersspeed.md#2025-04-18_snippet_1

LANGUAGE: JavaScript
CODE:
```
import { engine, animate, utils } from 'animejs';

const [ $container ] = utils.$('.container');
const [ $range ] = utils.$('.range');

for (let i = 0; i < 150; i++) {
  const $particle = document.createElement('div');
  $particle.classList.add('particle');
  $container.appendChild($particle);
  animate($particle, {
    x: utils.random(-10, 10, 2) + 'rem',
    y: utils.random(-3, 3, 2) + 'rem',
    scale: [{ from: 0, to: 1 }, { to: 0 }],
    delay: utils.random(0, 1000),
    loop: true,
  });  
}

function onInput() {
  utils.sync(() => engine.speed = this.value);
}

$range.addEventListener('input', onInput);
```

----------------------------------------

TITLE: HTML Structure for Animation Target
DESCRIPTION: Shows the HTML markup structure required for the animation example, containing a square element within a medium row container.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-parametersduration.md#2025-04-18_snippet_2

LANGUAGE: html
CODE:
```
<div class="medium row">
  <div class="square"></div>
</div>
```

----------------------------------------

TITLE: Anime.js ScrollObserver Object Syntax
DESCRIPTION: This snippet shows how to define ScrollObserver thresholds using an object syntax.  The `enter` property defines when the target enters the viewport (top of the target meets the bottom of the container), and the `leave` property defines when the target leaves the viewport (bottom of the target meets the top of the container).
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-thresholds.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
onScroll({
  // Enters when the top of the target meets the bottom of the container
  enter: { target: 'top', container: 'bottom' },
  // Leaves when the bottom of the target meets the top of the container
  leave: { target: 'bottom', container: 'top' }
});
```

----------------------------------------

TITLE: Creating a Timeline with Alternate and Loop Parameters in Anime.js
DESCRIPTION: Shows how to create an Anime.js timeline with the 'alternate' parameter set to true and looping enabled. The example also includes an onLoop callback that updates a counter display element.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-playback-settingsalternate.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $loops ] = utils.$('.loops');

let loops = 0;

const tl = createTimeline({
  loop: true,
  alternate: true,
  onLoop: self => $loops.innerHTML = ++loops,
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '-=500')
.add('.square', { x: '15rem' }, '-=500');
```

----------------------------------------

TITLE: Scroll Container and Content Structure - HTML
DESCRIPTION: This HTML structure provides a scrollable container with sections and a square element within it. It is necessary for the scroll observer to function properly, allowing the Anime.js animations to be triggered as the user scrolls.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-synchronisation-modessmooth-scroll.md#2025-04-18_snippet_1

LANGUAGE: HTML
CODE:
```
<div class="scroll-container scroll-y">
  <div class="scroll-content grid square-grid">
    <div class="scroll-section padded">
      <div class="large row">
        <div class="label">scroll down</div>
      </div>
    </div>
    <div class="scroll-section padded">
      <div class="large row">
        <div class="square"></div>
      </div>
    </div>
    <div class="scroll-section">
    </div>
  </div>
</div>
```

----------------------------------------

TITLE: Anime.js ScrollObserver with Target
DESCRIPTION: This code snippet demonstrates how to use the `target` property within `onScroll` to specify which element triggers the scroll event. The `createTimer` function creates an animation that updates the timer's inner HTML based on the scroll position of the specified target element within the scroll container.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-settingstarget.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimer, utils, onScroll } from 'animejs';

const [ $timer ] = utils.$('.timer');

createTimer({
  duration: 2000,
  alternate: true,
  loop: true,
  onUpdate: self => {
    $timer.innerHTML = self.iterationCurrentTime
  },
  autoplay: onScroll({
    target: $timer,
    container: '.scroll-container',
  })
});
```

----------------------------------------

TITLE: Setting Global Frame Rate in AnimeJS
DESCRIPTION: Code snippet demonstrating how to change the default frame rate globally in AnimeJS by updating the engine.defaults object.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-playback-settingsframerate.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.frameRate = 30;
```

----------------------------------------

TITLE: Importing Anime.js and Animating Input Value
DESCRIPTION: This snippet demonstrates how to import Anime.js and create an animation that targets an input element's 'value' attribute. It uses the 'animate' function to set up a looping animation with alternating direction and rounds the value to integers.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimatable-propertieshtml-attributes.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

animate('input', {
  value: 1000, // animate the input "value" attribute
  alternate: true,
  loop: true,
  modifier: utils.round(0),
});
```

----------------------------------------

TITLE: Implementing onDrag Callback with Anime.js
DESCRIPTION: Demonstrates how to create a draggable element with a callback function that counts and displays the number of drag operations. The callback executes whenever the element is being dragged.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-callbacksondrag.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let drags = 0;

createDraggable('.square', {
  container: '.grid',
  onDrag: () => $value.textContent = ++drags
});
```

----------------------------------------

TITLE: Setting Global Default Playback Rate in Anime.js
DESCRIPTION: Shows how to modify the default playbackRate value globally for all animations by updating the engine.defaults object. This allows setting a different base speed for all animations in your project.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-playback-settingsplaybackrate.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.playbackRate = .75;
```

----------------------------------------

TITLE: Animating with animejs in JavaScript
DESCRIPTION: This JavaScript snippet illustrates how to use the 'stagger' function from 'animejs' to apply staggered animation effects to elements. It imports the 'animate' and 'stagger' functions and uses them to animate '.square' elements with staggered positions and delays. Dependencies include the animejs library. The key parameters are the stagger value ('1rem') and the start values for x position and delay (14 and 500 respectively).
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationstaggerstagger-parametersstagger-start.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { animate, stagger } from 'animejs';

animate('.square', {
  x: stagger('1rem', { start: 14 }), // adds 11 to the staggered value
  delay: stagger(100, { start: 500 }) // adds 500 to the staggered value
});
```

----------------------------------------

TITLE: Implementing Timer Reverse Functionality with AnimeJS in JavaScript
DESCRIPTION: This code snippet demonstrates how to create and use a timer with AnimeJS, including a reverse functionality. It sets up a timer with a duration of 2000ms and updates a UI element with the current time. A button event listener is added to trigger the reverse method.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-methodsreverse.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimer, utils } from 'animejs';

const [ $reverseButton ] = utils.$('.reverse');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  duration: 2000,
  onUpdate: self => $time.innerHTML = self.iterationCurrentTime,
});

const reverseTimer = () => timer.reverse();

$reverseButton.addEventListener('click', reverseTimer);
```

----------------------------------------

TITLE: Chain-able radToDeg Examples in Anime.js
DESCRIPTION: Demonstrates how to create a chain-able radToDeg function that can be reused or combined with other utility functions. Shows examples of direct conversion and combining with the round utility.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesrad-to-deg.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
const radToDeg = utils.radToDeg();
radToDeg(1.7453292519943295); // 100
radToDeg(Math.PI);            // 180

const roundRadToDeg = utils.radToDeg().round(2); // Convert radians to degrees then round to 2 decimal places
roundRadToDeg(Math.PI / 7);  // 25.71
```

----------------------------------------

TITLE: Creating an Anime.js Timer with Duration Setting
DESCRIPTION: This code demonstrates how to create a timer using Anime.js with a specified duration of 2000 milliseconds. The timer updates a DOM element with the current time value on each timer update.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-playback-settingsduration.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimer, utils } from 'animejs';

const [ $time ] = utils.$('.time');

createTimer({
  duration: 2000,
  onUpdate: self => $time.innerHTML = self.currentTime
});
```

----------------------------------------

TITLE: Dynamic Timer Framerate Control Implementation
DESCRIPTION: Creates a timer instance with configurable framerate and implements real-time FPS updating through range input control. Includes DOM manipulation for displaying current time and FPS values.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-playback-settingsframerate.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimer, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $fps ] = utils.$('.fps');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  frameRate: 60,
  onUpdate: self => $time.innerHTML = self.currentTime,
});

const updateFps = () => {
  const { value } = $range;
  $fps.innerHTML = value;
  timer.fps = value;
}

$range.addEventListener('input', updateFps);
```

----------------------------------------

TITLE: Configuring Tween Parameters in Anime.js
DESCRIPTION: Demonstrates how to animate elements using the 'to' parameter with specific easing functions. The example shows x-axis translation and rotation animations.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-parametersto.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

animate('.square', {
  x: {
    to: '16rem', // From 0px to 16rem
    ease: 'outCubic',
  },
  rotate: {
    to: '.75turn', // From 0turn to .75turn
    ease: 'inOutQuad'
  },
});
```

----------------------------------------

TITLE: HTML Structure for Scroll Animation
DESCRIPTION: This snippet provides the HTML structure necessary for implementing the scroll animation. It includes a scroll container that wraps the animated square and additional sections to demonstrate the scrolling effect visually.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-settingsaxis.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="scroll-container scroll-x">
  <div class="scroll-content grid square-grid">
    <div class="scroll-section padded">
      <div class="large centered row">
        <div class="label">scroll right →</div>
      </div>
    </div>
    <div class="scroll-section padded">
      <div class="large row">
        <div class="square"></div>
      </div>
    </div>
  </div>
</div>
```

----------------------------------------

TITLE: HTML Setup for Scoped Animation with Anime.js
DESCRIPTION: This HTML structure sets up three '.medium.row' divs, each containing a '.square' div. The second '.row' is targeted for scoped animation with Anime.js, allowing the animation to be contained within a specific section of the DOM.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscopescope-parametersroot.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="medium row">
  <div class="square"></div>
  <div class="padded label">outside scope</div>
</div>
<div class="medium row">
  <div class="square"></div>
  <div class="padded label">inside scope</div>
</div>
<div class="medium row">
  <div class="square"></div>
  <div class="padded label">outside scope</div>
</div>
```

----------------------------------------

TITLE: Implementing Draggable setX Method - JavaScript
DESCRIPTION: Demonstrates how to use the setX method to programmatically set the x-position of a draggable element. The example shows creating a draggable instance and setting random x positions via button click.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-methodssetx.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable, utils } from 'animejs';

const [ $setButton ] = utils.$('.set');

const draggable = createDraggable('.square');

const setRandomX = () => draggable.setX(utils.random(-100, 100));

$setButton.addEventListener('click', setRandomX);
```

----------------------------------------

TITLE: Implementing pause() Method with AnimeJS Timeline
DESCRIPTION: This code demonstrates how to create a timeline with AnimeJS and pause it using the pause() method. The example creates a timeline with three animations that run in sequence with specific timings, and adds a pause button event listener to control the timeline.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodspause.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $pauseButton ] = utils.$('.pause');

const tl = createTimeline({
  loop: true,
  alternate: true,
})
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const pauseTimeline = () => tl.pause();

$pauseButton.addEventListener('click', pauseTimeline);
```

----------------------------------------

TITLE: Setting Global Default for Alternate Parameter in Anime.js
DESCRIPTION: Demonstrates how to change the default value of the 'alternate' parameter globally in Anime.js by updating the engine.defaults object. This affects all animations unless overridden locally.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-playback-settingsalternate.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.alternate = true;
```

----------------------------------------

TITLE: HTML Grid Structure
DESCRIPTION: This HTML code defines a grid of square elements using `div` elements with the class 'square'. The grid is structured using 'row' divs to arrange the squares in rows. This markup is used by the JavaScript code to select and animate the grid elements.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationstaggerstagger-parametersstagger-grid.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="small justified row">
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
</div>
<div class="small justified row">
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
</div>
<div class="small justified row">
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
</div>
<div class="small justified row">
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
</div>
```

----------------------------------------

TITLE: HTML Structure for Draggable Elements
DESCRIPTION: Shows the HTML markup required to create a grid container with draggable square and circle elements. The elements are styled with 'large centered grid' classes.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-settingsmaxvelocity.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large centered grid square-grid">
  <div class="square draggable"></div>
  <div class="circle draggable"></div>
</div>
```

----------------------------------------

TITLE: Wrap Function with Chaining in JavaScript
DESCRIPTION: Examples of using the wrap utility function with specific ranges and chaining with other utilities like round(). Shows practical applications for number wrapping.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitieswrap.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
const wrapBetween0and100 = utils.wrap(0, 100);
wrapBetween0and100(105); // 5
wrapBetween0and100(220); // 20
wrapBetween0and100(-15); // 85

const wrapAndRound = utils.wrap(0, 100).round(2); // Wrap then round to 2 decimal places
wrapAndRound(105.7523); // 5.75
wrapAndRound(220.2514); // 20.25
```

----------------------------------------

TITLE: Setting Default Framerate Globally in Anime.js
DESCRIPTION: This snippet shows how to change the default framerate for all animations globally using the engine.defaults object in Anime.js. It sets the default framerate to 30 fps.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-playback-settingsframerate.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.frameRate = 30;
```

----------------------------------------

TITLE: Basic Timeline Synchronization in AnimeJS
DESCRIPTION: Demonstrates basic timeline synchronization by creating and syncing a child timeline with position transformations.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodssync.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const tlChild = createTimeline().add(target, { x: 100 }).add(target, { y: 100 });

creatTimeline().sync(tlChild);
```

----------------------------------------

TITLE: Setting Global Default Playback Rate in AnimeJS
DESCRIPTION: Shows how to change the default playback rate for all timers globally by updating the engine.defaults object. This affects all timers that don't explicitly specify a playback rate.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-playback-settingsplaybackrate.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.playbackRate = .75;
```

----------------------------------------

TITLE: HTML Structure for Random Animation Demo
DESCRIPTION: HTML markup structure showing multiple square elements that can be targeted for random animations.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesrandom.md#2025-04-18_snippet_2

LANGUAGE: html
CODE:
```
<div class="small row">
  <div class="square"></div>
</div>
<div class="small row">
  <div class="square"></div>
</div>
<div class="small row">
  <div class="square"></div>
</div>
<div class="small row">
  <div class="square"></div>
</div>
```

----------------------------------------

TITLE: HTML Structure for Scroll Container and Animated Element
DESCRIPTION: This HTML snippet defines the structure for a scroll container and an element that will be animated using Anime.js. The `.scroll-container` div is set to enable vertical scrolling (`scroll-y`).  Inside the container, there are nested divs to structure the content and the `.square` div, which will be the target of the Anime.js scroll animation.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-thresholdsnumeric-values.md#2025-04-18_snippet_1

LANGUAGE: HTML
CODE:
```
<div class="scroll-container scroll-y">
  <div class="scroll-content grid square-grid">
    <div class="scroll-section padded">
      <div class="large centered row">
        <div class="label">scroll down</div>
      </div>
    </div>
    <div class="scroll-section padded">
      <div class="large row">
        <div class="square"></div>
      </div>
    </div>
    <div class="scroll-section">
    </div>
  </div>
</div>
```

----------------------------------------

TITLE: Using AnimJS Timer with Callbacks and DOM Updates in JavaScript
DESCRIPTION: This example shows how to create an AnimJS timer with specific parameters, including duration, loop, frameRate, and callbacks. It updates DOM elements with the current time and iteration count.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimer.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

const [ $time, $count ] = utils.$('.value');

createTimer({
  duration: 1000,
  loop: true,
  frameRate: 30,
  onUpdate: self => $time.innerHTML = self.currentTime,
  onLoop: self => $count.innerHTML = self._currentIteration
});
```

----------------------------------------

TITLE: HTML Structure for AnimeJS Animation Controls Demo
DESCRIPTION: This HTML markup provides the structure for demonstrating animation controls in AnimeJS. It includes animated square elements and control buttons for pausing, alternating direction, and resuming animations.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-methodsresume.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button">Pause</button>
    <button class="button">Alternate</button>
    <button class="button">Resume</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: Setting Global Default Loop Value in Anime.js
DESCRIPTION: Demonstrates how to change the default loop value globally by updating the engine.defaults object in Anime.js. This allows all animations to use the specified loop behavior without explicitly defining it for each animation.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-playback-settingsloop.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.loop = true;
```

----------------------------------------

TITLE: Implementing onUpdate Callback with AnimeJS Timer
DESCRIPTION: This example shows how to create a timer with AnimeJS and use the onUpdate callback. It updates HTML elements with the number of updates and the current time of the timer on each frame.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-callbacksonupdate.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimer, utils } from 'animejs';

const [ $updates ] = utils.$('.updates');
const [ $time ] = utils.$('.time');

let updates = 0;

createTimer({
  onUpdate: self => {
    $updates.innerHTML = ++updates;
    $time.innerHTML = self.currentTime;
  }
});
```

----------------------------------------

TITLE: Creating a Non-Repeating Scroll Observer in Anime.js
DESCRIPTION: This code snippet creates a scroll observer that updates a value but does not repeat the event handling after the animation is complete. It utilizes 'createTimer' similarly to the repeating observer but sets the 'repeat' property to false.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-settingsrepeat.md#2025-04-18_snippet_1

LANGUAGE: JavaScript
CODE:
```
const [ $noRepeat ] = utils.$('.no-repeat .value');
let noRepeatUpdates = 0;

createTimer({
  duration: 1000,
  autoplay: onScroll({
    container: '.scroll-container',
    target: '.no-repeat',
    enter: 'bottom-=40 top',
    leave: 'top+=60 bottom',
    onUpdate: () => $noRepeat.innerHTML = noRepeatUpdates++,
    repeat: false,
    debug: true,
  })
});
```

----------------------------------------

TITLE: HTML structure for clamp demonstration in Anime.js
DESCRIPTION: Provides the HTML structure for demonstrating the difference between normal and clamped animations using Anime.js.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesclamp.md#2025-04-18_snippet_2

LANGUAGE: html
CODE:
```
<div class="x-large spaced-evenly row">
  <div class="col">
    <div class="clock normal"></div>
    <div class="label">normal</div>
  </div>
  <div class="col">
    <div class="clock clamped"></div>
    <div class="label">clamped [.25,.75]</div>
  </div>
</div>
```

----------------------------------------

TITLE: Configuring Global Timer Pause Callback in AnimeJS
DESCRIPTION: Shows how to set up a default global pause callback handler by modifying the engine defaults. The callback receives the timer instance as an argument.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-callbacksonpause.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.onPause = self => console.log(self.id);
```

----------------------------------------

TITLE: Using stagger function with AnimeJS for multi-target animations
DESCRIPTION: This snippet demonstrates how to use the stagger function in AnimeJS to create staggered animations across multiple elements. It shows how to apply different y-position and rotation values to each target in sequence, with loop and alternate options enabled.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationstaggervalues-staggering.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, stagger } from 'animejs';

const animation = animate('.square', {
  y: stagger(['-2.75rem', '2.75rem']),
  rotate: { from: stagger('-.125turn') },
  loop: true,
  alternate: true
});
```

----------------------------------------

TITLE: Setting Global Default Delay in Anime.js
DESCRIPTION: Demonstrates how to change the default delay value globally for all animations by updating the engine.defaults object. This code sets a 500ms delay for all animations across the application.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-playback-settingsdelay.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.delay = 500;
```

----------------------------------------

TITLE: Setting Global onUpdate Default in Anime.js
DESCRIPTION: Shows how to change the default onUpdate callback globally by updating the engine.defaults object in Anime.js.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-callbacksonupdate.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.onUpdate = self => console.log(self.id);
```

----------------------------------------

TITLE: Setting Global Default Delay in Anime.js
DESCRIPTION: Demonstrates how to change the default delay value globally for all animations using the engine.defaults object in Anime.js.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-parametersdelay.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.delay = 500;
```

----------------------------------------

TITLE: Using padStart Utility Function in Anime.js
DESCRIPTION: Shows basic usage of the padStart utility function which pads a value from the start with a specified string until it reaches a desired length. It can be used directly with a value or as a chainable function.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiespad-start.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const paddedValue = utils.padStart(value, totalLength, padString);
const padderFunction = utils.padStart(totalLength, padString);
```

----------------------------------------

TITLE: HTML Structure for Draggable Elements in AnimeJS
DESCRIPTION: This HTML snippet defines the structure for two draggable elements: a square and a circle. These elements are targeted by the JavaScript code to apply draggable functionality with custom cursor settings.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-settingscursor.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large centered row">
  <div class="square draggable"></div>
  <div class="circle draggable"></div>
</div>
```

----------------------------------------

TITLE: HTML Structure for AnimateJS Loop Counter Example
DESCRIPTION: This HTML snippet provides the structure for the AnimateJS loop counter example. It includes a div for the animated circle and a pre element to display the loop count.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-callbacksonloop.md#2025-04-18_snippet_2

LANGUAGE: html
CODE:
```
<div class="large row">
  <div class="circle"></div>
  <pre class="large log row">
    <span class="label">loops</span>
    <span class="value">0</span>
  </pre>
</div>
```

----------------------------------------

TITLE: Initializing Draggable Element with Release Mass in Anime.js
DESCRIPTION: This snippet demonstrates how to initialize a draggable element using Anime.js and set the `releaseMass` property.  The `releaseMass` affects the element's behavior after it is released, influencing its movement and bounciness. Two elements, square and circle, are initialized with different releaseMass values.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-settingsreleasemass.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  releaseMass: .1,
});

createDraggable('.circle', {
  container: '.grid',
  releaseMass: 10,
});
```

----------------------------------------

TITLE: HTML Structure for CSS Variable Animation Demo
DESCRIPTION: The HTML structure shows a grid of square elements that will be animated using CSS variables. These squares are the targets for the animation examples shown in the JavaScript code.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-value-typescss-variable.md#2025-04-18_snippet_2

LANGUAGE: html
CODE:
```
<div class="medium justified row">
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
</div>
```

----------------------------------------

TITLE: Basic Usage of roundPad Function in AnimeJS
DESCRIPTION: Shows the basic syntax for using the roundPad utility in AnimeJS. It can be used directly to round and pad a value, or to create a reusable function with a pre-defined decimal length.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesround-pad.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const roundedPaddedValue = utils.roundPad(value, decimalLength);
const roundPadderFunction = utils.roundPad(decimalLength);
```

----------------------------------------

TITLE: Implementing onRender Callback in Anime.js Animation
DESCRIPTION: This example shows how to use the onRender callback in an Anime.js animation. It animates a circle element and updates a render count display on each render.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-callbacksonrender.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

const [ $rendersLog ] = utils.$('.value');

let renders = 0;

const animation = animate('.circle', {
  x: '16rem',
  loopDelay: 1500,
  loop: true,
  alternate: true,
  onRender: self => $rendersLog.textContent = ++renders
});
```

----------------------------------------

TITLE: HTML Structure for Scroll-Triggered Animation
DESCRIPTION: This HTML structure provides a scrollable container and a target element for the Anime.js animation. The `.scroll-container` class defines the scrollable area, and the `.square` class targets the animated element.  The structure includes sections for scrolling down and up indications.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-settingsdebug.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="scroll-container scroll-y">
  <div class="scroll-content grid square-grid">
    <div class="scroll-section padded">
      <div class="large centered row">
        <div class="label">scroll down</div>
      </div>
    </div>
    <div class="scroll-section padded">
      <div class="large row">
        <div class="square"></div>
      </div>
    </div>
    <div class="scroll-section padded">
      <div class="large centered row">
        <div class="label">scroll up</div>
      </div>
    </div>
  </div>
</div>
```

----------------------------------------

TITLE: HTML Structure for Draggable Elements
DESCRIPTION: This HTML snippet defines the structure for the draggable elements and their container.  The `.square` and `.circle` elements are defined as draggable, and they are placed within a container element with the class `.grid`. This structure allows the Anime.js code to select and initialize the draggable behavior for these elements.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-settingsreleasemass.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large centered grid square-grid">
  <div class="square draggable"></div>
  <div class="circle draggable"></div>
</div>
```

----------------------------------------

TITLE: Animate with ScrollObserver
DESCRIPTION: Animates the 'targets' element, setting its x position to 100.  The autoplay parameter uses `onScroll(parameters)` to trigger the animation based on scroll position. The parameters object configures the ScrollObserver settings, thresholds, sync modes, and callbacks.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscroll.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
animate(targets, { x: 100, autoplay: onScroll(parameters) });
```

----------------------------------------

TITLE: Configuring Draggable Elements with ReleaseDamping - JavaScript
DESCRIPTION: Demonstrates how to create draggable elements with different damping settings using AnimeJS. Shows configuration of both square and circle elements with custom releaseDamping and releaseStiffness values.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-settingsreleasedamping.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  releaseDamping: 5,
});

createDraggable('.circle', {
  container: '.grid',
  releaseStiffness: 30,
});
```

----------------------------------------

TITLE: Importing Engine and Setting Default Duration in Anime.js
DESCRIPTION: This code snippet demonstrates how to import the `engine` object from the Anime.js library and then set the default animation duration to 500 milliseconds. This will affect all subsequent Timer, Animation, and Timeline instances created.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationengineengine-defaults.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { engine } from 'animejs';

engine.engine.defaults.duration = 500;
```

----------------------------------------

TITLE: Creating drawable SVG element
DESCRIPTION: Creates a proxy of an SVG element with a draw property to control line visibility. The method accepts various SVG element types as targets and returns an array of proxy SVG elements.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationsvgcreatedrawable.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const [ drawable ] = svg.createDrawable(target);
```

----------------------------------------

TITLE: Initializing Draggable Elements with Release Stiffness in Anime.js
DESCRIPTION: This snippet demonstrates how to initialize draggable elements using the `createDraggable` function from Anime.js and configure the `releaseStiffness` property. The `releaseStiffness` parameter controls the bounciness and speed of the element after it is released.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-settingsreleasestiffness.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  releaseStiffness: 20,
});

createDraggable('.circle', {
  container: '.grid',
  releaseStiffness: 300,
});
```

----------------------------------------

TITLE: Using then() Method with Anime.js WAAPI
DESCRIPTION: Demonstrates the inline usage of the then() method in Anime.js to execute a callback after animation completion. This replaces the finished property available in native WAAPI.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiapi-differences-with-native-waapifinished.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
waapi.animate(target, {
  translate: '100px',
  duration: 500,
}).then(callback);
```

----------------------------------------

TITLE: Setting Default onPause Callback Globally in Anime.js
DESCRIPTION: Example of how to change the default onPause callback function globally by updating the engine.defaults object. This sets a default handler that logs the animation's ID whenever any animation is paused.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-callbacksonpause.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.onPause = self => console.log(self.id);
```

----------------------------------------

TITLE: Using roundPad as a Modifier in AnimeJS Animation
DESCRIPTION: Demonstrates using the roundPad utility as a modifier in an animation sequence. This example animates the innerHTML property of an element with class 'value' from its current value to '8.1', formatting the values with 3 decimal places during the animation.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesround-pad.md#2025-04-18_snippet_3

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

animate('.value', {
  innerHTML: '8.1',
  modifier: utils.roundPad(3),
  duration: 10000,
  ease: 'linear',
});
```

----------------------------------------

TITLE: Implementing onLoop Callback in AnimateJS Animation
DESCRIPTION: This example shows how to use the onLoop callback in an AnimateJS animation. It creates an animation that moves a circle element and updates a counter for each loop iteration.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-callbacksonloop.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let loops = 0;

const animation = animate('.circle', {
  x: '16rem',
  loopDelay: 1500,
  loop: true,
  alternate: true,
  onLoop: self => $value.textContent = ++loops
});
```

----------------------------------------

TITLE: HTML Structure for Scroll Container
DESCRIPTION: Defines the HTML layout for scroll-based animation with nested scroll sections and target element
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-methodsrevert.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="scroll-container scroll-y">
  <div class="scroll-content grid square-grid">
    <div class="scroll-section padded">
      <div class="large row">
        <div class="label">scroll down</div>
      </div>
    </div>
    <div class="scroll-section padded">
      <div class="large row">
        <div class="square"></div>
      </div>
    </div>
    <div class="scroll-section">
    </div>
  </div>
</div>
```

----------------------------------------

TITLE: HTML Structure for Draggable Elements
DESCRIPTION: This HTML snippet defines the structure for the draggable elements used in the Anime.js examples. It creates a grid containing a square and a circle, both marked with the 'draggable' class, enabling them to be dragged.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-settingsvelocitymultiplier.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large centered grid square-grid">
  <div class="square draggable"></div>
  <div class="circle draggable"></div>
</div>
```

----------------------------------------

TITLE: Configuring Alternate Option in anime.js Animations
DESCRIPTION: This code shows three different configurations of the 'alternate' option in anime.js animations. It includes a normal animation, an alternating animation, and an alternating animation with reverse direction.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-playback-settingsalternate.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

animate('.dir-normal', {
  x: '17rem',
  alternate: false, // Default
  loop: 1,
});

animate('.dir-alternate', {
  x: '17rem',
  alternate: true,
  loop: 1, // Required to see the second iteration
});

animate('.dir-alternate-reverse', {
  x: '17rem',
  alternate: true,
  reversed: true,
  loop: 1,
});
```

----------------------------------------

TITLE: HTML Structure for Logo and Button
DESCRIPTION: This HTML snippet provides the structure for the logo (an SVG element) and the button that triggers the rotation animation.  The logo uses the class `logo js` for targeting in the JavaScript code, and the button is used to display the rotation count and trigger the animation.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationgetting-startedusing-with-vanilla-js.md#2025-04-18_snippet_6

LANGUAGE: html
CODE:
```
<div class="large centered row">
  <svg class="logo js" preserveAspectRatio="xMidYMid meet" viewBox="0 0 630 630"><path fill="currentColor" d="M577,0 C606.271092,0 630,23.7289083 630,53 L630,577 C630,606.271092 606.271092,630 577,630 L53,630 C23.7289083,630 0,606.271092 0,577 L0,53 C0,23.7289083 23.7289083,0 53,0 L577,0 Z M479.5,285.89 C426.63,285.89 392.8,319.69 392.8,364.09 C392.8,411.808 420.615238,434.63146 462.622716,452.742599 L478.7,459.64 L483.441157,461.719734 C507.57404,472.359996 521.8,479.858 521.8,498.94 C521.8,515.88 506.13,528.14 481.6,528.14 C452.4,528.14 435.89,512.91 423.2,492.19 L375.09,520.14 C392.47,554.48 427.99,580.68 482.97,580.68 C539.2,580.68 581.07,551.48 581.07,498.18 C581.07,448.74 552.67,426.75 502.37,405.18 L487.57,398.84 L485.322788,397.859899 C461.5199,387.399087 451.17,380.1172 451.17,362.89 C451.17,348.52 462.16,337.52 479.5,337.52 C496.5,337.52 507.45,344.69 517.6,362.89 L563.7,333.29 C544.2,298.99 517.14,285.89 479.5,285.89 Z M343.09,289.27 L283.89,289.27 L283.89,490.57 C283.89,520.16 271.62,527.77 252.17,527.77 C231.83,527.77 223.37,513.82 214.07,497.32 L165.88,526.495 C179.84,556.04 207.29,580.57 254.69,580.57 C307.15,580.57 343.09,552.67 343.09,491.37 L343.09,289.27 Z"/></svg>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button>rotations: 0</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: Executing Method from Anime.js Scope
DESCRIPTION: Executes a registered method from an Anime.js scope using the `methods` object and the method name.  The method is called on the scope's method object. No specific dependencies other than a previously defined and registered method within the scope.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscoperegister-method-function.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
scope.methods.methodName(); // Execute the method
```

----------------------------------------

TITLE: Implementing Timer Pause Functionality with AnimeJS
DESCRIPTION: Demonstrates creating a timer with pause callback functionality, updating UI elements on pause and time update. Includes event listeners for pause/resume controls.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-callbacksonpause.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimer, utils } from 'animejs';

const [ $resumeButton, $pauseButton ] = utils.$('.button');
const [ $paused ] = utils.$('.paused');
const [ $time ] = utils.$('.time');

let paused = 0;

const timer = createTimer({
  onPause: () => $paused.innerHTML = ++paused,
  onUpdate: self => $time.innerHTML = self.currentTime
});

const pauseTimer = () => timer.pause();
const resumeTimer = () => timer.resume();

$resumeButton.addEventListener('click', resumeTimer);
$pauseButton.addEventListener('click', pauseTimer);
```

----------------------------------------

TITLE: HTML Structure for Scroll Animation
DESCRIPTION: This HTML snippet defines the structure for the scroll animation example. It includes a scrollable container with sections containing a square, a timer display, and circles that are animated based on the scroll position.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscroll.md#2025-04-18_snippet_6

LANGUAGE: html
CODE:
```
<div class="scroll-container scroll-y">
  <div class="scroll-content grid square-grid">
    <div class="scroll-section padded">
      <div class="large centered row">
        <div class="label">scroll down</div>
      </div>
    </div>
    <div class="scroll-section padded">
      <div class="large row">
        <div class="square"></div>
      </div>
    </div>
    <div class="scroll-section padded">
      <div class="large centered row">
        <pre class="large log row">
          <span class="label">timer</span>
          <span class="timer value lcd">0</span>
        </pre>
      </div>
    </div>
    <div class="scroll-section padded">
      <div class="large row">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  </div>
</div>
```

----------------------------------------

TITLE: HTML Structure for Draggable Element and Resize Counter Display
DESCRIPTION: This HTML snippet provides the structure for displaying a draggable square element within a grid container, along with a counter to show the number of resizes that have occurred.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-callbacksonresize.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="iframe-content resizable">
  <div class="large padded grid square-grid">
    <pre class="large log row">
      <span class="label">resizes</span>
      <span class="value">0</span>
    </pre>
    <div class="square draggable"></div>
  </div>
</div>
```

----------------------------------------

TITLE: Implementing Timer Revert Functionality with AnimeJS in JavaScript
DESCRIPTION: This code snippet demonstrates how to create and manipulate an AnimeJS timer using the revert() method. It sets up play and revert buttons, and updates a time display. The timer is created with an onUpdate callback to update the displayed time.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-methodsrevert.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimer, utils } from 'animejs';

const [ $playButton ] = utils.$('.play');
const [ $revertButton ] = utils.$('.revert');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  onUpdate: self => $time.innerHTML = self.currentTime
});

const playTimer = () => timer.play();
const revertTimer = () => {
  timer.revert();
  $time.innerHTML = timer.currentTime
}

$playButton.addEventListener('click', playTimer);
$revertButton.addEventListener('click', revertTimer);
```

----------------------------------------

TITLE: HTML Structure for Displaying AnimJS Timer Values
DESCRIPTION: This HTML snippet creates a layout for displaying the current time and callback count of an AnimJS timer. It uses div elements with specific classes for styling and organization.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimer.md#2025-04-18_snippet_2

LANGUAGE: html
CODE:
```
<div class="large centered row">
  <div class="half col">
    <pre class="large log row">
      <span class="label">current time</span>
      <span class="value lcd">0</span>
    </pre>
  </div>
  <div class="half col">
    <pre class="large log row">
      <span class="label">callback fired</span>
      <span class="value lcd">0</span>
    </pre>
  </div>
</div>
```

----------------------------------------

TITLE: Creating and Using Chain-able Utility Functions in JavaScript
DESCRIPTION: Demonstrates how to create and use chain-able utility functions in Anime.js. The example shows clamping, rounding, and padding operations chained together.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitieschain-able-utility-functions.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const clampRoundPad = utils.clamp(0, 100).round(2).padStart(6, '0');
clampRoundPad(125)   // '000100'
clampRoundPad(75.25) // '075.25'
```

----------------------------------------

TITLE: Enabling ScrollObserver Debug Mode in Anime.js
DESCRIPTION: This snippet demonstrates how to enable debug mode for an Anime.js animation triggered by scrolling.  The `debug: true` option within the `onScroll` configuration enables visual markers representing the enter and leave thresholds, helping to understand the animation trigger points. The `container` option specifies the scrollable container.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-settingsdebug.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, onScroll } from 'animejs';

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  duration: 2000,
  alternate: true,
  loop: true,
  ease: 'inOutQuad',
  autoplay: onScroll({
    container: '.scroll-container',
    debug: true,
  })
});
```

----------------------------------------

TITLE: Creating a Timer in Anime.js
DESCRIPTION: Example of how to create a timer object using the createTimer function in Anime.js. This creates a timer with specified parameters that can be used to control animations.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-properties.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const timer = createTimer(parameters);
```

----------------------------------------

TITLE: Animating with padEnd Modifier in Anime.js
DESCRIPTION: Example of using the padEnd utility as a modifier in an animation to format the innerHTML value during animation.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiespad-end.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

animate('.value', {
  innerHTML: 1,
  modifier: utils.round(3).padEnd(6, '-'),
  duration: 100000,
  ease: 'linear',
});
```

----------------------------------------

TITLE: Creating Normal and Reversed Animations with AnimeJS
DESCRIPTION: Examples of creating animations with different direction settings using the 'reversed' property. One animation plays in the normal direction (false) while the other plays in reverse (true). Both animations loop continuously.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-playback-settingsreversed.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

animate('.dir-normal', {
  x: '17rem',
  reversed: false, // Default behaviour
  loop: true
});

animate('.dir-reverse', {
  x: '17rem',
  reversed: true,
  loop: true
});
```

----------------------------------------

TITLE: Setting Global Default for Reversed Timer in Anime.js
DESCRIPTION: This snippet demonstrates how to change the default value of the 'reversed' property globally for all Anime.js animations. It imports the engine from Anime.js and sets the default 'reversed' value to true.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-playback-settingsreversed.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.reversed = true;
```

----------------------------------------

TITLE: HTML Structure for Anime.js Animation Control
DESCRIPTION: This HTML code defines the structure for the animation container and control buttons. It creates a container where the animations are displayed and two buttons: one to add animations and another to pause/resume the engine.  The classes are used for styling and selecting the elements with JavaScript.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationengineengine-methodspause.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large row container"></div>
<div class="medium row">
  <fieldset class="controls">
    <button>Add animation</button>
    <button>Pause for 3 seconds</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: Setting Global Default for Alternate in anime.js
DESCRIPTION: This snippet demonstrates how to change the default value of the 'alternate' option globally for all animations using the engine.defaults object.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-playback-settingsalternate.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.alternate = true;
```

----------------------------------------

TITLE: Creating a Draggable Element with Custom Scroll Threshold - JavaScript
DESCRIPTION: This snippet demonstrates how to create a draggable element using the Anime.js library, specifying a custom scroll threshold. The 'container' option defines the scrolling element, and 'scrollThreshold' sets the number of pixels required to trigger scrolling.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-settingsscrollthreshold.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.scroll-container',
  scrollThreshold: 12,
});
```

----------------------------------------

TITLE: Setting Global Autoplay Default in AnimeJS
DESCRIPTION: Demonstrates how to modify the default autoplay behavior globally for all animations by updating the engine defaults.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-playback-settingsautoplay.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.autoplay = false;
```

----------------------------------------

TITLE: Disabling a Draggable Element in Anime.js - JavaScript
DESCRIPTION: This code snippet demonstrates how to disable a draggable element by using the Anime.js library. It imports necessary functions, sets up an event listener on a button, and invokes the disable method on the draggable object when the button is clicked. The draggable functionality is tied to a square div, and requires the Anime.js library to function properly.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-methodsdisable.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { createDraggable, utils } from 'animejs';

const [ $disableButton ] = utils.$('.disable');

const draggable = createDraggable('.square');

const disableDraggable = () => draggable.disable();

$disableButton.addEventListener('click', disableDraggable);
```

----------------------------------------

TITLE: HTML Structure for Clock Demo
DESCRIPTION: Defines the HTML structure for the clock demo interface, including the clock element container and user instruction label.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimatableanimatable-settingsunit.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large centered row">
  <div class="col">
    <div class="clock"></div>
  </div>
</div>
<div class="small centered row">
  <span class="label">Move cursor around</span>
</div>
```

----------------------------------------

TITLE: HTML Structure for AnimeJS revert() Demo with Interactive Buttons
DESCRIPTION: The HTML structure that accompanies the JavaScript example, containing square elements that will be animated and control buttons for triggering the revert() and restart() methods. It includes three rows with animated squares and buttons for user interaction.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-methodsrevert.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button revert">Revert</button>
    <button class="button restart">Restart</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: Creating a Repeating Scroll Observer in Anime.js
DESCRIPTION: This code snippet sets up a scroll observer using Anime.js that updates a value based on scroll actions. It uses 'createTimer' to manage the animation duration and behavior on scroll events, including repeated event handling.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-settingsrepeat.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { createTimer, onScroll, utils } from 'animejs';

const [ $repeat ] = utils.$('.repeat .value');
let repeatUpdates = 0;

createTimer({
  duration: 1000,
  autoplay: onScroll({
    container: '.scroll-container',
    target: '.repeat',
    enter: 'bottom-=40 top',
    leave: 'top+=60 bottom',
    onUpdate: () => $repeat.innerHTML = repeatUpdates++,
    repeat: true,
    debug: true,
  })
});
```

----------------------------------------

TITLE: Creating a Reversed Timeline with Anime.js
DESCRIPTION: This code creates a reversed timeline using Anime.js. It animates three elements (.circle, .triangle, .square) along the x-axis and updates a time display. The timeline is set to play in reverse by default.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-playback-settingsreversed.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $time ] = utils.$('.time');

const tl = createTimeline({
  reversed: true,
  onUpdate: self => $time.innerHTML = self.currentTime
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '-=500')
.add('.square', { x: '15rem' }, '-=500');
```

----------------------------------------

TITLE: Using Random Utility Function in AnimeJS
DESCRIPTION: Basic syntax for generating random numbers using AnimeJS utils.random() function. Takes minimum and maximum values with optional decimal places parameter.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesrandom.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const randomValue = utils.random(min, max, decimalLength);
```

----------------------------------------

TITLE: ScrollObserver Method Overview
DESCRIPTION: Demonstrates the available methods for managing a ScrollObserver instance, including link(), refresh(), and revert() methods for controlling scroll behavior
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-methods.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
scrollObserver.link()
scrollObserver.refresh()
scrollObserver.revert()
```

----------------------------------------

TITLE: Creating an Animatable Object in Anime.js
DESCRIPTION: Demonstrates how to create an Animatable object using the createAnimatable function with targets and parameters. This is a core functionality introduced in Anime.js version 4.0.0.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimatableanimatable-properties.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const animatable = createAnimatable(targets, parameters);
```

----------------------------------------

TITLE: Applying snap utility as a modifier in anime.js animations
DESCRIPTION: Practical example showing how to apply the snap utility as a modifier in anime.js animations to create normal and snapped rotation animations.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiessnap.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

animate('.normal', {
  rotate: '1turn',
  duration: 3000,
  loop: true,
  ease: 'inOut',
});

animate('.snapped', {
  rotate: '1turn',
  modifier: utils.snap(.25), // Used as a modifier
  duration: 3000,
  loop: true,
  ease: 'inOut',
});
```

----------------------------------------

TITLE: HTML Structure for Anime.js Timeline Animation
DESCRIPTION: Defines the HTML structure for the animation elements including a pyramid of shapes (triangle, square, circle) and a control button for triggering the reverse animation.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodsreverse.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large row">
  <div class="medium pyramid">
    <div class="triangle"></div>
    <div class="square"></div>
    <div class="circle"></div>
  </div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button reverse">Reverse</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: HTML Structure for Timer Display and Controls
DESCRIPTION: HTML layout for displaying the current time of the timer and a play button to manually control the timer. Includes containers with styling classes.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-playback-settingsautoplay.md#2025-04-18_snippet_2

LANGUAGE: html
CODE:
```
<div class="large centered row">
  <div class="half col">
    <pre class="large log row">
      <span class="label">current time</span>
      <span class="time value lcd">0</span>
    </pre>
  </div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="play">Play</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: HTML Structure for AnimeJS Animation Target
DESCRIPTION: The HTML markup that defines the target element for the animation. It shows a square element inside a container with 'large row' classes.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-value-typesunit-conversion-value.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large row">
  <div class="square"></div>
</div>
```

----------------------------------------

TITLE: Configuring Draggable Elements with maxVelocity in AnimeJS
DESCRIPTION: Demonstrates how to create draggable elements with different maxVelocity settings. The first example shows a square with no velocity after release (0), while the second shows a circle with maximum velocity of 100.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-settingsmaxvelocity.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  maxVelocity: 0,
});

createDraggable('.circle', {
  container: '.grid',
  maxVelocity: 100,
});
```

----------------------------------------

TITLE: HTML Structure for ScrollObserver Example
DESCRIPTION: This HTML snippet defines the structure for the Anime.js ScrollObserver example. It includes a scrollable container (`scroll-container`) with nested divs representing scrollable sections and content.  The 'square' div is the element animated by Anime.js, and the 'value' span is updated by the `onLeave` callback.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-callbacksonleave.md#2025-04-18_snippet_1

LANGUAGE: HTML
CODE:
```
<div class="scroll-container scroll-y">
  <div class="scroll-content grid square-grid">
    <div class="scroll-section padded sticky">
      <div class="large row">
        <pre class="large log row">
          <span class="label">exits</span>
          <span class="value">0</span>
        </pre>
      </div>
    </div>
    <div class="scroll-section padded">
      <div class="large row">
        <div class="square"></div>
      </div>
    </div>
    <div class="scroll-section">
    </div>
  </div>
</div>
```

----------------------------------------

TITLE: HTML Structure for AnimeJS Animation Demo
DESCRIPTION: This HTML snippet defines the DOM structure needed for the animation demonstration. It includes two square elements that will be animated and a control button labeled 'Complete' that triggers the complete() method when clicked.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-methodscomplete.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button complete">Complete</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: Animating JavaScript Object Properties with Anime.js
DESCRIPTION: This snippet demonstrates how to animate properties of a JavaScript object using Anime.js. It includes setting up the initial object, importing necessary functions from Anime.js, and defining the animation with a render callback to update the DOM.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimatable-propertiesjavascript-object-properties.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

const myObject = {
  number: 1337,
  unit: '42%',
}

const [ $log ] = utils.$('code');

animate(myObject, {
  number: 50,
  unit: '100%',
  modifier: utils.round(0),
  onRender: function() {
    $log.innerHTML = JSON.stringify(myObject);
  }
});
```

----------------------------------------

TITLE: HTML Structure for Animation
DESCRIPTION: HTML markup showing the structure of multiple circle elements that are targeted by the animations.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiimprovements-to-the-web-animation-apimulti-targets-animation.md#2025-04-18_snippet_3

LANGUAGE: html
CODE:
```
<div class="medium row">
  <div class="circle"></div>
</div>
<div class="medium row">
  <div class="circle"></div>
</div>
<div class="medium row">
  <div class="circle"></div>
</div>
```

----------------------------------------

TITLE: HTML Structure for Color Animation Example
DESCRIPTION: HTML markup setting up multiple div elements with the 'circle' class for color animation demonstration. The structure consists of a container with multiple circle elements that will receive the animated color changes.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-value-typescolor-function-value.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large justified row">
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
</div>
```

----------------------------------------

TITLE: Configuring Timeline Playback Ease with Individual Animations
DESCRIPTION: Creates a timeline with custom playback easing and adds multiple animations with different easing functions for different elements.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-playback-settingsplaybackease.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
const tl = createTimeline({
  playbackEase: 'inOut(3)', // this ease is applied across all children
})
.add('.circle', { x: '15rem', ease: 'out(1)' })
.add('.triangle', { x: '15rem', ease: 'out(2)' })
.add('.square', { x: '15rem', ease: 'out(3)' });
```

----------------------------------------

TITLE: Timer Control Interface HTML Structure
DESCRIPTION: HTML structure for displaying the timer controls and time display. Includes a large LCD-style time display and three control buttons for resume, pause, and alternate functions.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-methodsresume.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large centered row">
  <div class="half col">
    <pre class="large log row">
      <span class="label">iteration time</span>
      <span class="time value lcd">0</span>
    </pre>
  </div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button">Resume</button>
    <button class="button">Pause</button>
    <button class="button">Alternate</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: Basic Wrap Function Usage in JavaScript
DESCRIPTION: Demonstrates the basic usage of the wrap utility function to constrain numbers within a range. Shows both direct value wrapping and creating a wrapper function.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitieswrap.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const wrappedValue = utils.wrap(value, min, max);
const wrapperFunction = utils.wrap(min, max);
```

----------------------------------------

TITLE: Animating with Tween Parameters Array in AnimeJS
DESCRIPTION: Creates an animation sequence using an array of objects with 'to' properties that specify target values for x and y properties. The animation will transition to each target value over the specified duration.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationkeyframes.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
animate('.square', {
  x: [{to: 100}, {to: 200}],
  y: [{to: 100}, {to: 200}],
  duration: 3000,
}
```

----------------------------------------

TITLE: HTML Structure for Animation Demo
DESCRIPTION: HTML markup demonstrating the structure needed for the animation examples, including elements with different style retention behaviors.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesclean-inline-styles.md#2025-04-18_snippet_2

LANGUAGE: html
CODE:
```
<div class="medium row">
  <div class="square keep-styles"></div>
  <div class="padded label">Keep styles (default)</div>
</div>
<div class="medium row">
  <div class="square clean-styles"></div>
  <div class="padded label">Clean translateX and borderRadius</div>
</div>
```

----------------------------------------

TITLE: Configuring Global Timer Loop Defaults in AnimeJS
DESCRIPTION: Shows how to modify the default loop behavior globally in AnimeJS by updating the engine defaults. This affects all timers created afterward unless overridden.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-playback-settingsloop.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.loop = true;
```

----------------------------------------

TITLE: Implementing $ Utility with Global and Scoped Selections in Anime.js
DESCRIPTION: Example showing how to use the $ utility to select elements globally and within a specific scope. It demonstrates setting scale on all squares and rotating only squares within a specific row.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesdollar-sign.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { utils, createScope } from 'animejs';

// Targets all the '.square' elements
utils.$('.square').forEach($square => {
  utils.set($square, { scale: .5 });
});

createScope({ root: '.row:nth-child(2)' }).add(() => {
  // Limits the selection to '.row:nth-child(2) .square'
  utils.$('.square').forEach($square => {
    utils.set($square, { rotate: 45 });
  });
});
```

----------------------------------------

TITLE: Animation Demo HTML Structure
DESCRIPTION: HTML structure for the animation demo containing multiple circles and a revert button control.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimatableanimatable-methodsrevert.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large centered row">
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button revert">Revert</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: HTML Structure for Scroll Animation - HTML
DESCRIPTION: This code snippet provides the necessary HTML structure to complement the JavaScript animation. It defines a scrollable container with multiple sections and squares that will be animated as the user scrolls down the page. The proper division and class names ensure that the scrolling and animation functionalities work in tandem.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-synchronisation-modeseased-scroll.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="scroll-container scroll-y">
  <div class="scroll-content grid square-grid">
    <div class="scroll-section padded">
      <div class="large row">
        <div class="label">scroll down</div>
      </div>
    </div>
    <div class="scroll-section padded">
      <div class="large row">
        <div class="square"></div>
        <div class="square"></div>
      </div>
    </div>
    <div class="scroll-section">
    </div>
  </div>
</div>
```

----------------------------------------

TITLE: Unit Inheritance in Anime.js Animations
DESCRIPTION: Shows how Anime.js inherits units from previous animations on the same property when no unit is specified in subsequent animations.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-value-typesnumerical-value.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
animate(target, { width: '50%' }); // Uses '%'
animate(target, { width: 75 });    // Inherits '%' -> '75%'
```

----------------------------------------

TITLE: Create Timer with Anime.js
DESCRIPTION: This JavaScript code creates two timers using the `createTimer` function (assumed to be defined elsewhere), one configured to run in seconds and another in milliseconds.  These timers update the HTML content with current iteration time. It showcases the usage of `utils.roundPad` to format the displayed time.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationengineengine-parameterstimeunit-seconds-milliseconds.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
const [ $timeS ] = utils.$('.time-s');
const [ $timeMs ] = utils.$('.time-ms');
const [ $ms, $s ] = utils.$('.toggle');

const secondsTimer = createTimer({
  duration: 1,
  loop: true,
  onUpdate: self => $timeS.innerHTML = utils.roundPad(self.iterationCurrentTime, 2)
});

const millisecondsTimer = createTimer({
  duration: 1000,
  loop: true,
  onUpdate: self => $timeMs.innerHTML = utils.roundPad(self.iterationCurrentTime, 2)
});
```

----------------------------------------

TITLE: Configuring Loop Delay for Specific Animation in AnimeJS
DESCRIPTION: Shows how to create an animation with specific loop delay settings, including scale transformation and alternating animation.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-playback-settingsplayback-loopdelay.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
const loopDelayAnimation = animate('.circle', {
  x: '16rem',
  scale: {
    to: 1.8,
    delay: 500,
    duration: 500,
  },
  loopDelay: 1000,
  loop: true,
  alternate: true,
});
```

----------------------------------------

TITLE: Importing and Using Anime.js WAAPI Module
DESCRIPTION: Demonstrates how to import the WAAPI module from Anime.js and use it to animate an element with a translation of 16rem.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiimprovements-to-the-web-animation-apisensible-defaults.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
import { waapi } from 'animejs';

waapi.animate('.circle', { translate: '16rem' });
```

----------------------------------------

TITLE: SVG Markup with Displacement Filter
DESCRIPTION: HTML markup for an SVG element that includes a displacement filter and a polygon shape. This SVG demonstrates the visual output of the animation examples, showing a hexagon that can be animated.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimatable-propertiessvg-attributes.md#2025-04-18_snippet_2

LANGUAGE: html
CODE:
```
<div class="large centered row">
<svg width="128" height="128" viewBox="0 0 128 128">
  <filter id="displacementFilter">
    <feTurbulence type="turbulence" numOctaves="2" baseFrequency="0" result="turbulence"/>
    <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="1" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <polygon points="64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96"  fill="currentColor"/>
</svg>
</div>
```

----------------------------------------

TITLE: Implementing onGrab Callback for Draggable Elements in Anime.js
DESCRIPTION: This snippet demonstrates how to use the onGrab callback with createDraggable in Anime.js. It creates a draggable square and updates a counter each time the element is grabbed.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-callbacksongrab.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let grabs = 0;

createDraggable('.square', {
  container: '.grid',
  onGrab: () => $value.textContent = ++grabs
});
```

----------------------------------------

TITLE: Implementing cleanInlineStyles with Animations
DESCRIPTION: Comprehensive example showing how to use cleanInlineStyles with animations, including setting initial styles and cleaning specific properties while keeping others.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesclean-inline-styles.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

utils.set('.square', { scale: .75 });

animate('.keep-styles', {
  x: '23rem',
  borderRadius: '50%',
});

animate('.clean-styles', {
  x: '23rem',
  borderRadius: '50%',
  // This removes the translateX and borderRadius inline styles
  // But keeps the scale previously added outside of this animation
  onComplete: utils.cleanInlineStyles
});
```

----------------------------------------

TITLE: HTML Structure for Anime.js restart() Demo
DESCRIPTION: This HTML markup creates the structure needed for the restart() method demonstration. It includes square elements that will be animated and a restart button that triggers the animation restart.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-methodsrestart.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button restart">Restart</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: HTML Structure for Anime.js Animation
DESCRIPTION: Provides the HTML structure for the elements being animated in the timeline example. It includes a pyramid structure with triangle, square, and circle elements.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimeline.md#2025-04-18_snippet_2

LANGUAGE: html
CODE:
```
<div class="large row">
  <div class="medium pyramid">
    <div class="triangle"></div>
    <div class="square"></div>
    <div class="circle"></div>
  </div>
</div>
```

----------------------------------------

TITLE: Configuring Draggable Elements with containerFriction in Anime.js
DESCRIPTION: This snippet demonstrates how to create draggable elements with different containerFriction values using Anime.js. It shows two examples: one with no friction (0) and another with maximum friction (1).
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-settingscontainerfriction.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  containerFriction: 0,
});

createDraggable('.circle', {
  container: '.grid',
  containerFriction: 1,
});
```

----------------------------------------

TITLE: Animating Rotation in Degrees and Radians with Anime.js
DESCRIPTION: Illustrates how to use the degToRad utility in an animation context. It creates two animatables, one for degrees and one for radians, and synchronizes their rotation using the degToRad conversion.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesdeg-to-rad.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate, createAnimatable, utils } from 'animejs';

const radAnimatable = createAnimatable('.rad', {
  rotate: { unit: 'rad', duration: 0 },
});

const [ $deg ] = utils.$('.deg');

const degAnimation = animate($deg, {
  rotate: '360deg',
  ease: 'linear',
  loop: true,
  onUpdate: () => {
    const degrees = utils.get($deg, 'rotate', false);
    radAnimatable.rotate(utils.degToRad(degrees));
  }
});
```

----------------------------------------

TITLE: HTML Structure for Anime.js Timeline Demo
DESCRIPTION: This HTML snippet provides the structure for the Anime.js timeline demo. It includes animated elements (triangle, square, circle) and control buttons for pause, alternate, and resume actions.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodsresume.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large row">
  <div class="medium pyramid">
    <div class="triangle"></div>
    <div class="square"></div>
    <div class="circle"></div>
  </div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button">Pause</button>
    <button class="button">Alternate</button>
    <button class="button">Resume</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: Setting Global Default for Reversed Timeline in Anime.js
DESCRIPTION: This snippet demonstrates how to change the default value of the 'reversed' property globally for all timelines in Anime.js. It imports the engine from 'animejs' and sets the default reversed value to true.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-playback-settingsreversed.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.reversed = true;
```

----------------------------------------

TITLE: AnimeJS Round Utility in Animation Example
DESCRIPTION: Demonstrates using the round utility in actual animations. It creates two animations, one normal and one with rotation values rounded to one decimal place using the round utility as a modifier function.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesround.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

animate('.normal', {
  rotate: '1turn',
  duration: 3000,
  loop: true,
});

animate('.rounded', {
  rotate: '1turn',
  modifier: utils.round(1), // Used as a function
  duration: 3000,
  loop: true,
});
```

----------------------------------------

TITLE: HTML Structure for Anime.js Timeline Animation
DESCRIPTION: This HTML structure contains the elements targeted by the Anime.js timeline animation. It includes triangle, square, and circle elements arranged in a pyramid layout.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-playback-settingsdefaults.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large row">
  <div class="medium pyramid">
    <div class="triangle"></div>
    <div class="square"></div>
    <div class="circle"></div>
  </div>
</div>
```

----------------------------------------

TITLE: HTML Structure for Animating Squares with anime.js
DESCRIPTION: HTML markup that creates a series of square elements organized in rows. These elements are targeted by the anime.js animation to demonstrate individual CSS transform properties.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiimprovements-to-the-web-animation-apiindividual-css-transforms.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="small row">
  <div class="square"></div>
</div>
<div class="small row">
  <div class="square"></div>
</div>
<div class="small row">
  <div class="square"></div>
</div>
<div class="small row">
  <div class="square"></div>
</div>
```

----------------------------------------

TITLE: HTML Structure for Staggered Grid Animation
DESCRIPTION: This snippet provides the HTML structure necessary for rendering the animated squares in a staggered grid. Each square is contained within a div, and this layout is essential for the associated JavaScript animations to function correctly.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationstaggerstagger-parametersstagger-grid-axis.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="small justified row">
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
</div>
<div class="small justified row">
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
</div>
<div class="small justified row">
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
</div>
<div class="small justified row">
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
</div>
```

----------------------------------------

TITLE: Animating with HEX Color Values in Anime.js
DESCRIPTION: This snippet demonstrates how to use HEX color values in Anime.js animations. It targets an element with the class 'hex' and animates its background color to '#FF4B4B'.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-value-typescolor-value.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { animate } from 'animejs';

animate('.hex',  {
  background: '#FF4B4B',
});
```

----------------------------------------

TITLE: Creating Draggable Elements
DESCRIPTION: This snippet creates a draggable element using the `createDraggable` function. It targets elements with the class `.logo.js` and configures the draggable behavior. It also uses `createSpring` for the `releaseEase` property, providing a spring-like effect when the element is released.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationgetting-startedusing-with-vanilla-js.md#2025-04-18_snippet_3

LANGUAGE: javascript
CODE:
```
// Make the logo draggable around its center
createDraggable('.logo.js', {
  container: [0, 0, 0, 0],
  releaseEase: createSpring({ stiffness: 200 })
});
```

----------------------------------------

TITLE: Using remove() Utility Function in Anime.js
DESCRIPTION: Demonstrates the usage of the remove() utility function to remove targets from animations. It accepts targets, an optional animation instance, and an optional property name. Returns an array of removed targeted elements.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesremove.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const removed = utils.remove(targets, instance, propertyName);
```

----------------------------------------

TITLE: HTML Structure for Timeline Animation Controls
DESCRIPTION: Defines the HTML structure for displaying animated elements and timeline controls. Includes a pyramid of shapes and a range input for controlling animation duration.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodsstretch.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large row">
  <div class="medium pyramid">
    <div class="triangle"></div>
    <div class="square"></div>
    <div class="circle"></div>
  </div>
  <pre class="large log row">
    <span class="label">total duration</span>
    <span class="value">0</span>
  </pre>
</div>
<div class="medium centered row">
  <fieldset class="controls">
    <input type="range" min=100 max=2000 value=1000 step=100 class="seek range" />
  </fieldset>
</div>
```

----------------------------------------

TITLE: HTML Structure for Anime.js Animation Demo
DESCRIPTION: HTML markup showing the target elements for the animation. Six square div elements are arranged in a row that will be animated using the WAAPI implementation.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiimprovements-to-the-web-animation-apiindividual-property-parameters.md#2025-04-18_snippet_2

LANGUAGE: html
CODE:
```
<div class="large row">
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
</div>
```

----------------------------------------

TITLE: HTML Structure for AnimeJS Animation Demo
DESCRIPTION: This HTML snippet provides the structure for demonstrating the AnimeJS animation refresh functionality. It includes containers for animated squares and a button to trigger the refresh and restart actions.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-methodsrefresh.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button refresh">Refresh & Restart</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: Basic AnimeJS Set Utility Syntax
DESCRIPTION: Shows the basic syntax for using utils.set() to set property values on target elements. Returns an Animation object that can be used to revert changes.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesset.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const setter = utils.set(targets, properties);
```

----------------------------------------

TITLE: Initializing CreateScope with AnimeJS - JavaScript
DESCRIPTION: This code snippet demonstrates the initialization of a scope using AnimeJS's 'createScope' method. It introduces several methods such as 'add', 'refresh', and 'revert' which allow users to manipulate and manage animation scopes. The snippet does not detail parameters for 'createScope'.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscopescope-methods.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
const scope = createScope(parameters);
```

----------------------------------------

TITLE: HTML Structure for Draggable Demo
DESCRIPTION: Defines the HTML structure required for the draggable element and drag counter display. Includes a grid container, log display area, and the draggable square element.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-callbacksondrag.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large padded grid square-grid">
  <pre class="large log row">
    <span class="label">drags</span>
    <span class="value">0</span>
  </pre>
  <div class="square draggable"></div>
</div>
```

----------------------------------------

TITLE: Advanced Anime.js Animation with Dynamic Duration
DESCRIPTION: This snippet showcases a more advanced use of Anime.js, where the duration of each element's animation is determined by its data attribute. It also imports necessary functions from the Anime.js library.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiimprovements-to-the-web-animation-apifunction-based-values.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
import { waapi, utils, stagger } from 'animejs';

waapi.animate('.square', {
  translate: () => `${utils.random(10, 17)}rem`,
  rotate: () => utils.random(-180, 180),
  scale: (_, i) => .25 + (i * .25),
  duration: $el => $el.dataset.duration,
  delay: stagger(100)
});
```

----------------------------------------

TITLE: WAAPI Native Implementation for Multiple Elements
DESCRIPTION: Native Web Animation API implementation showing how to animate multiple elements with staggered delay using forEach loop.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiimprovements-to-the-web-animation-apimulti-targets-animation.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
document.querySelectorAll('.circle').forEach(($el, i) => {
  $el.animate({
    translate: '100px',
  }, {
    duration: 1000,
    delay: i * 100,
    easing: 'ease-out',
  }).finished.then(() => {
    $el.style.translate = '100px';
  })
});
```

----------------------------------------

TITLE: HTML Structure for Animation Target
DESCRIPTION: Provides the HTML structure for the animation target, including a container div and a square element to be animated.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-value-typesnumerical-value.md#2025-04-18_snippet_3

LANGUAGE: html
CODE:
```
<div class="large row">
  <div class="square"></div>
</div>
```

----------------------------------------

TITLE: HTML Structure for Staggered Animation Demo
DESCRIPTION: HTML markup showing the structure for demonstrating staggered animations with multiple square elements and their corresponding timing labels. Each row contains a square element and its timing information.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationstaggertime-staggering.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="small row">
  <div class="square"></div>
  <div class="padded label">delay: 0ms;&nbsp;&nbsp;&nbsp;duration: 500ms</div>
</div>
<div class="small row">
  <div class="square"></div>
  <div class="padded label">delay: 100ms; duration: 700ms</div>
</div>
<div class="small row">
  <div class="square"></div>
  <div class="padded label">delay: 200ms; duration: 900ms</div>
</div>
<div class="small row">
  <div class="square"></div>
  <div class="padded label">delay: 300ms; duration: 1100ms</div>
</div>
```

----------------------------------------

TITLE: Animating with HSL Color Values in Anime.js
DESCRIPTION: This snippet illustrates the use of HSL color values in Anime.js animations. It targets an element with the class 'hsl' and animates its background color to 'hsl(44, 100%, 59%)'.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-value-typescolor-value.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
animate('.hsl',  {
  background: 'hsl(44, 100%, 59%)',
});
```

----------------------------------------

TITLE: HTML Structure for AnimeJS Animation Demo
DESCRIPTION: This HTML snippet provides the structure for the animation demo. It includes two square elements that will be animated, and control buttons for cancelling and playing the animation.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-methodscancel.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button cancel">Cancel</button>
    <button class="button play">Play</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: Animating Elements with Native Web Animation API
DESCRIPTION: Illustrates how to use the native Web Animation API's element.animate() method to achieve similar animation effects. It shows differences in syntax for element selection, keyframe definition, and animation option settings.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiapi-differences-with-native-waapi.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
const $square = document.querySelector('.square');

$square
.animate({
translate: '100px 50px',
opacity: .5,
}, {
ieterations: 4,
direction: 'alternate',
easing: 'ease-out',
});
```

----------------------------------------

TITLE: Importing Engine Properties in Anime.js - JavaScript
DESCRIPTION: This snippet demonstrates how to import the engine object from the 'animejs' module, providing access to various engine properties that control animation behavior, such as time units, frame rates, and playback settings. The 'animejs' module is a dependency for using these engine properties.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationengineengine-properties.md#2025-04-18_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { engine } from 'animejs';
```

----------------------------------------

TITLE: HTML Structure for Animation Speed Control Demo
DESCRIPTION: HTML markup for the animation playback rate demo, featuring a circle element that will be animated, a display for the current speed value, and a range input control for adjusting the animation speed.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-playback-settingsplaybackrate.md#2025-04-18_snippet_2

LANGUAGE: html
CODE:
```
<div class="large row">
  <div class="circle"></div>
  <pre class="large log row">
    <span class="label">speed</span>
    <span class="speed value">1.00</span>
  </pre>
</div>
<div class="medium row">
  <fieldset class="controls">
    <input type="range" min=0 max=5 value=1 step=.01 class="range" />
  </fieldset>
</div>
```

----------------------------------------

TITLE: Animating CSS Variables with AnimeJS WAAPI method
DESCRIPTION: This example shows how to animate CSS variables using the WAAPI animate() method. CSS variables can be directly referenced using the 'var(--variable-name)' syntax without additional helpers.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-value-typescss-variable.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { waapi, animate } from 'animejs';

waapi.animate('.square',  {
  rotate: 'var(--rotation)',
  borderColor: ['var(--hex-orange)', 'var(--hex-red)' ],
});
```

----------------------------------------

TITLE: Implementing Draggable Stop Method in AnimeJS
DESCRIPTION: This snippet demonstrates how to use the 'stop' method on a Draggable object in AnimeJS. It creates a draggable square, animates it, and provides a button to stop all animations. The 'stop' method halts all running animations on the draggable, including container scroll and release animations.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-methodsstop.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable, animate, utils } from 'animejs';

const [ $stopButton ] = utils.$('.stop');

const draggable = createDraggable('.square');

animate(draggable, {
  x: [-100, 100],
  alternate: true,
  loop: true
});

const stopDraggable = () => draggable.stop();

$stopButton.addEventListener('click', stopDraggable);
```

----------------------------------------

TITLE: HTML Structure for Reverse Animation Demo
DESCRIPTION: Defines the HTML structure for demonstrating the reverse animation, including two square elements and a control button. The layout uses rows for organization and includes a fieldset for controls.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-methodsreverse.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <div class="square"></div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button reverse">Reverse</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: Setting Default onRender Callback Globally in Anime.js
DESCRIPTION: This snippet demonstrates how to set a default onRender callback globally for all timelines using the engine.defaults object in Anime.js.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-callbacksonrender.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.onRender = self => console.log(self.id);
```

----------------------------------------

TITLE: Applying Axis Modifiers in AnimeJS Draggable
DESCRIPTION: This snippet demonstrates how to use the 'modifier' parameter in createDraggable to limit the movement range of a draggable element. It uses the utils.wrap function to constrain the movement globally and specifically for the x-axis.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-axes-parametersmodifier.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable, utils } from 'animejs';

createDraggable('.square', {
  modifier: utils.wrap(-32, 32), // Global to both x and y
  x: { modifier: utils.wrap(-128, 128) }, // Specific to x 
});
```

----------------------------------------

TITLE: Configuring releaseContainerFriction for Draggable Elements in Anime.js
DESCRIPTION: This snippet demonstrates how to create draggable elements with different releaseContainerFriction values. It shows two examples: one with no friction (0) and another with maximum friction (1).
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-settingsreleasecontainerfriction.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  releaseContainerFriction: 0,
});

createDraggable('.circle', {
  container: '.grid',
  releaseContainerFriction: 1,
});
```

----------------------------------------

TITLE: HTML Structure for AnimeJS Animation Targets
DESCRIPTION: HTML markup defining the target elements for the animation. Each square element has a data-x attribute that's used in the animation to set different x values for each target.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-value-typesfunction-based.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="medium row">
  <div class="square" data-x="170"></div>
</div>
<div class="medium row">
  <div class="square" data-x="80"></div>
</div>
<div class="medium row">
  <div class="square" data-x="270"></div>
</div>
```

----------------------------------------

TITLE: Defining Event Listener Functions for Animation
DESCRIPTION: These functions, `onMouseEnter` and `onMouseLeave`, define the animations that occur when the mouse enters or leaves an element.  `onMouseEnter` scales the element up, and `onMouseLeave` scales it back down. The `animate` function is assumed to be globally available and handles the actual animation logic.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscopescope-methodsrevert.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
function onMouseEnter() { animate(this, { scale: 2, duration: 250 }) }
function onMouseLeave() { animate(this, { scale: 1, duration: 750 }) }
```

----------------------------------------

TITLE: Equivalent animation using Web Animation API
DESCRIPTION: This code snippet shows how to achieve the same animation effect as the Anime.js example using the native Web Animation API. It selects all elements with the 'square' class and animates them to translate 100 pixels, with alternate-reverse direction for 4 iterations.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiapi-differences-with-native-waapidirection.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
const targets = document.querySelectorAll('.square');

targets.forEach(($el, i) => {
  $el.animate({
    translate: '100px',
  }, {
    fill: 'forwards',
    duration: 1000,
    direction: 'alternate-reverse',
    iterations: 4
  })
});
```

----------------------------------------

TITLE: HTML Structure for Timer Display
DESCRIPTION: This HTML snippet creates a layout for displaying the current time of the Anime.js timer. It consists of a container with a label and a value display element that will be updated by the timer.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-playback-settingsduration.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large centered row">
  <div class="half col">
    <pre class="large log row">
      <span class="label">current time</span>
      <span class="time value lcd">0</span>
    </pre>
  </div>
</div>
```

----------------------------------------

TITLE: Shuffling Array Elements with Anime.js Utils in JavaScript
DESCRIPTION: Demonstrates how to use the shuffle utility function from Anime.js to randomize an array. It takes an array as input and returns the mutated array with randomized element order.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesshuffle.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const shuffledArray = utils.shuffle(array);
```

----------------------------------------

TITLE: HTML Structure for Scroll Synchronized Animation
DESCRIPTION: The HTML snippet outlines the necessary structure for implementing scroll-synchronized animations using Anime.js. It includes a scroll container with sections and a square element that will be animated. The setup assumes integration with a JavaScript animation script using Anime.js.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-synchronisation-modesplayback-progress.md#2025-04-18_snippet_1

LANGUAGE: HTML
CODE:
```
<div class="scroll-container scroll-y">
  <div class="scroll-content grid square-grid">
    <div class="scroll-section padded">
      <div class="large row">
        <div class="label">scroll down</div>
      </div>
    </div>
    <div class="scroll-section padded">
      <div class="large row">
        <div class="square"></div>
      </div>
    </div>
    <div class="scroll-section">
    </div>
  </div>
</div>
```

----------------------------------------

TITLE: Managing Timer Updates in Anime.js
DESCRIPTION: This snippet illustrates the setup of two timers: a global timer that tracks elapsed time since the script started, and an engine timer that updates based on the current time of the Anime.js engine. The timers are linked to HTML elements for live updates.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationengineengine-parameterspauseondocumenthidden.md#2025-04-18_snippet_1

LANGUAGE: JavaScript
CODE:
```
const [ $globalTime ] = utils.$('.global-time');
const [ $engineTime ] = utils.$('.engine-time');
const [ $toggle ] = utils.$('.toggle');

const startTime = Date.now();

const globalTimer = setInterval(() => {
  $globalTime.innerHTML = Date.now() - startTime;
}, 16);

const engineTimer = createTimer({
  onUpdate: self => $engineTime.innerHTML = self.currentTime
});
```

----------------------------------------

TITLE: Setting Default onBegin Callback in AnimeJS
DESCRIPTION: Demonstrates how to globally set the default onBegin callback using the engine.defaults object. The callback receives the timer instance as its argument.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-callbacksonbegin.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.onBegin = self => console.log(self.id);
```

----------------------------------------

TITLE: HTML Structure for Draggable Element and Control Button
DESCRIPTION: This HTML snippet provides the structure for a draggable element within a grid container and includes a button to trigger the animateInView method.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-methodsanimateinview.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="medium padded show-bounds grid square-grid animate-in-view">
  <div class="square draggable"></div>
</div>
<div class="large row">
  <fieldset class="controls">
    <button class="button animate-button">Animate in view</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: Creating Timeline with onRender Callback in Anime.js
DESCRIPTION: This code creates a timeline with an onRender callback that updates a DOM element with the number of renders. It also demonstrates adding multiple animations to the timeline.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-callbacksonrender.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let renders = 0;

const tl = createTimeline({
  defaults: { duration: 500 },
  loopDelay: 250,
  loop: true,
  onRender: self => $value.textContent = ++renders
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '+=250')
.add('.square', { x: '15rem' }, '+=250');
```

----------------------------------------

TITLE: Using loop parameter with AnimeJS WAAPI adapter
DESCRIPTION: This example demonstrates how to use the 'loop' parameter with AnimeJS's WAAPI adapter to move elements horizontally. The loop parameter is set to 3, making the animation repeat 3 times, and alternate is set to true for back-and-forth movement.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiapi-differences-with-native-waapiiterations.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
waapi.animate('.square', {
  translate: '17rem',
  loop: 3,
  alternate: true,
  delay: stagger(100)
});
```

----------------------------------------

TITLE: Timer Stretch Method Signature
DESCRIPTION: Basic syntax for the timer.stretch() method that changes the total duration of a timer. Takes a duration parameter in milliseconds and returns the timer instance for method chaining.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-methodsstretch.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
timer.stretch(duration);
```

----------------------------------------

TITLE: HTML Structure for Draggable Element and Stop Button
DESCRIPTION: This HTML snippet provides the structure for a draggable square element and a 'Stop' button. It sets up the necessary DOM elements for the JavaScript code to interact with, creating a user interface for the draggable functionality demonstration.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-methodsstop.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large centered row">
  <div class="square draggable"></div>
</div>
<div class="large row">
  <fieldset class="controls">
    <button class="button stop">Stop</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: HTML Structure for ScrollObserver Example
DESCRIPTION: This HTML code defines the structure for the Anime.js ScrollObserver example, including a scrollable container, sections, and a square element. It includes a sticky section that displays the 'entered' count, which is updated by the onEnter callback in the JavaScript code. The CSS classes 'scroll-container', 'scroll-y', 'scroll-section', 'padded', 'sticky', 'large', 'row', 'label', 'value', and 'square' are used for styling and layout.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-callbacksonenter.md#2025-04-18_snippet_1

LANGUAGE: HTML
CODE:
```
<div class="scroll-container scroll-y">
  <div class="scroll-content grid square-grid">
    <div class="scroll-section padded sticky">
      <div class="large row">
        <pre class="large log row">
          <span class="label">entered</span>
          <span class="value">0</span>
        </pre>
      </div>
    </div>
    <div class="scroll-section padded">
      <div class="large row">
        <div class="square"></div>
      </div>
    </div>
    <div class="scroll-section">
    </div>
  </div>
</div>
```

----------------------------------------

TITLE: Animating Element Properties with Anime.js WAAPI
DESCRIPTION: This snippet demonstrates how to animate various properties of an element using Anime.js WAAPI. It sets x, y, width, and height values without specifying units, which will use default units.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiimprovements-to-the-web-animation-apidefault-units.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
waapi.animate('.circle', {
  x: 100,
  y: 50,
  width: 150,
  height: 80,
});
```

----------------------------------------

TITLE: SVG Path Definition for Motion Animation
DESCRIPTION: Defines an SVG path representing the Suzuka circuit that serves as the motion path for the animation, including viewBox and path specifications.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationsvgcreatemotionpath.md#2025-04-18_snippet_2

LANGUAGE: html
CODE:
```
<svg viewBox="0 0 304 112">
  <title>Suzuka</title>
  <g stroke="none" fill="none" fill-rule="evenodd">
    <path d="M189.142857,4 C227.456875,4 248.420457,4.00974888 256.864191,4.00974888 C263.817211,4.00974888 271.61219,3.69583517 274.986231,6.63061513 C276.382736,7.84531176 279.193529,11.3814152 280.479499,13.4815847 C281.719344,15.5064248 284.841964,20.3571626 275.608629,20.3571626 C265.817756,20.3571626 247.262478,19.9013915 243.955117,19.9013915 C239.27946,19.9013915 235.350655,24.7304885 228.6344,24.7304885 C224.377263,24.7304885 219.472178,21.0304113 214.535324,21.0304113 C207.18393,21.0304113 200.882842,30.4798911 194.124187,30.4798911 C186.992968,30.4798911 182.652552,23.6245972 173.457298,23.6245972 C164.83277,23.6245972 157.191045,31.5424105 157.191045,39.1815359 C157.191045,48.466779 167.088672,63.6623005 166.666679,66.9065088 C166.378668,69.1206889 155.842137,79.2568633 151.508744,77.8570506 C145.044576,75.7689355 109.126667,61.6405346 98.7556561,52.9785141 C96.4766876,51.0750861 89.3680347,39.5769094 83.4195005,38.5221785 C80.6048001,38.0231057 73.0179337,38.7426555 74.4158694,42.6956376 C76.7088819,49.1796531 86.3280337,64.1214904 87.1781062,66.9065088 C88.191957,70.2280995 86.4690152,77.0567847 82.2060607,79.2503488 C79.2489435,80.7719756 73.1324132,82.8858479 64.7015706,83.0708761 C55.1604808,83.2802705 44.4254811,80.401884 39.1722168,80.401884 C25.7762119,80.401884 24.3280517,89.1260466 22.476679,94.4501705 C21.637667,96.8629767 20.4337535,108 33.2301959,108 C37.8976087,108 45.0757044,107.252595 53.4789069,103.876424 C61.8821095,100.500252 122.090049,78.119656 128.36127,75.3523302 C141.413669,69.5926477 151.190142,68.4987755 147.018529,52.0784879 C143.007818,36.291544 143.396957,23.4057975 145.221196,19.6589263 C146.450194,17.1346449 148.420955,14.8552817 153.206723,15.7880203 C155.175319,16.1716965 155.097637,15.0525421 156.757598,11.3860986 C158.417558,7.71965506 161.842736,4.00974888 167.736963,4.00974888 C177.205308,4.00974888 184.938832,4 189.142857,4 Z" id="suzuka" stroke="currentColor" stroke-width="2"></path>
  </g>
</svg>
<div class="square car motion-path-car" style="transform: translateX(189px) translateY(4px);"></div>
```

----------------------------------------

TITLE: HTML Structure for Scroll Animation
DESCRIPTION: This HTML snippet defines the structure for a scroll container with nested sections and a target element ('.square') for animation. The outer 'scroll-container' enables vertical scrolling, and the 'scroll-content' contains multiple 'scroll-section' elements, including one that holds the animated square.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-thresholdsrelative-position-values.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="scroll-container scroll-y">
  <div class="scroll-content grid square-grid">
    <div class="scroll-section padded">
      <div class="large centered row">
        <div class="label">scroll down</div>
      </div>
    </div>
    <div class="scroll-section padded">
      <div class="large row">
        <div class="square"></div>
      </div>
    </div>
    <div class="scroll-section">
    </div>
  </div>
</div>
```

----------------------------------------

TITLE: HTML Structure for Anime.js Utility Examples
DESCRIPTION: HTML structure used in the examples, consisting of three rows each containing eight square elements that can be targeted by the utility functions.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesdollar-sign.md#2025-04-18_snippet_2

LANGUAGE: html
CODE:
```
<div class="medium justified row">
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
</div>
<div class="medium justified row">
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
</div>
<div class="medium justified row">
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
</div>
```

----------------------------------------

TITLE: Setting Default onPause Callback in AnimeJS
DESCRIPTION: Example of setting a global default onPause callback for all animations using the engine.defaults object.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-callbacksonpause.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.onPause = self => console.log(self.id);
```

----------------------------------------

TITLE: Animating CSS color() Function with AnimeJS WAAPI
DESCRIPTION: Example of using AnimeJS's WAAPI method to animate background color with the CSS color() function. This code imports the waapi module from AnimeJS and applies a display-p3 color space animation to elements with the 'circle' class.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationtween-value-typescolor-function-value.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { waapi } from 'animejs';

waapi.animate('.circle',  {
  backgroundColor: 'color(display-p3 1.0 0.267 0.267 / 1.0)',
});
```

----------------------------------------

TITLE: Implementing Animation Removal in Anime.js
DESCRIPTION: This snippet shows a practical implementation of the remove() function in an Anime.js animation. It creates an animation for square elements and provides buttons to remove elements from the animation.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesremove.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { animate, utils } from 'animejs';

let updates = 0;

const [ $removeFirstButton ] = utils.$('.remove-1');
const [ $removeSecondButton ] = utils.$('.remove-2');
const [ $updates ] = utils.$('.value');

const animation = animate('.square', {
  x: '17rem',
  rotate: 360,
  alternate: true,
  loop: true,
  onUpdate: () => {
    $updates.textContent = updates++;
  }
});

$removeFirstButton.onclick = () => {
  utils.remove('.row:nth-child(1) .square');
}

$removeSecondButton.onclick = () => {
  utils.remove('.row:nth-child(2) .square', animation, 'x');
}
```

----------------------------------------

TITLE: Creating HTML Structure for AnimeJS Timer UI
DESCRIPTION: This HTML snippet defines the structure for displaying the timer's current time and a button to trigger the reverse functionality. It includes a log area to show the iteration time and a control section with a reverse button.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-methodsreverse.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large centered row">
  <div class="half col">
    <pre class="large log row">
      <span class="label">iteration time</span>
      <span class="time value lcd">0</span>
    </pre>
  </div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button reverse">Reverse</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: Executing Callback Functions in AnimeJS Timeline
DESCRIPTION: This snippet demonstrates how to use the 'call' method in an AnimeJS timeline to execute callback functions at specific time positions. It updates the content of HTML elements at different intervals.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodscall.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { createTimeline, utils } from 'animejs';

const [ $functionA ] = utils.$('.function-A');
const [ $functionB ] = utils.$('.function-B');
const [ $functionC ] = utils.$('.function-C');

const tl = createTimeline()
.call(() => $functionA.innerHTML = 'A', 0)
.call(() => $functionB.innerHTML = 'B', 800)
.call(() => $functionC.innerHTML = 'C', 1200);
```

----------------------------------------

TITLE: Setting Global Alternate Default in AnimeJS
DESCRIPTION: Demonstrates how to globally configure the default alternate setting for all animations using the engine.defaults object.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-playback-settingsalternate.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { engine } from 'animejs';
engine.defaults.alternate = true;
```

----------------------------------------

TITLE: Chaining AnimeJS Utility Functions Example
DESCRIPTION: Shows how to chain multiple AnimeJS utilities. In this example, the clamp utility is chained with round to first limit a value between 0 and 100, then round it to 2 decimal places.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesround.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
const clampAndRound = utils.clamp(0, 100).round(2); // Clamp then round to 2 decimal places
clampAndRound(72.7523); // 72.75
clampAndRound(120.2514); // 100
```

----------------------------------------

TITLE: HTML Structure for Displaying Timer Status and Time
DESCRIPTION: This HTML snippet provides the structure for displaying the completion status and current time of the Anime.js timer. It uses pre-formatted elements with specific classes for styling and identification.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-callbacksoncomplete.md#2025-04-18_snippet_2

LANGUAGE: html
CODE:
```
<div class="large row">
  <div class="col">
    <pre class="large log row">
      <span class="label">completed</span>
      <span class="status value">false</span>
    </pre>
  </div>
  <div class="col">
    <pre class="large log row">
      <span class="label">current time</span>
      <span class="time value lcd">0</span>
    </pre>
  </div>
</div>
```

----------------------------------------

TITLE: HTML Structure for Scroll-Based Animation
DESCRIPTION: This HTML snippet provides the layout necessary for the JavaScript code to function. It sets up a scrollable container with nested elements where animations are applied. A '.scroll-container' class is used to define the scrolling area containing sections with '.scroll-content' and '.square-grid' for organizing the animated grid of squares. The '.value' span displays the number of times the 'onLeaveForward' condition is met. This layout is crucial for the scroll-triggered animations to work correctly.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscrollscrollobserver-callbacksonleaveforward.md#2025-04-18_snippet_1

LANGUAGE: HTML
CODE:
```
<div class=\"scroll-container scroll-y\">
  <div class=\"scroll-content grid square-grid\">
    <div class=\"scroll-section padded sticky\">
      <div class=\"large row\">
        <pre class=\"large log row\">
          <span class=\"label\">exits</span>
          <span class=\"value\">0</span>
        </pre>
      </div>
    </div>
    <div class=\"scroll-section padded\">
      <div class=\"large row\">
        <div class=\"square\"></div>
      </div>
    </div>
    <div class=\"scroll-section\">
    </div>
  </div>
</div>
```

----------------------------------------

TITLE: Equivalent Animation Using Native Web Animation API
DESCRIPTION: This code snippet shows the equivalent animation using the native Web Animation API. It animates translate, width, and height properties, explicitly specifying 'px' units. It also demonstrates setting duration, easing, and handling animation completion.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiimprovements-to-the-web-animation-apidefault-units.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
const $el = document.querySelector('.circle');

$el.animate({
  translate: '100px 50px',
  width: '150px',
  height: '80px',
}, {
  duration: 1000,
  easing: 'ease-out',
}).finished.then(() => {
  $el.style.translate = '100px';
});
```

----------------------------------------

TITLE: Anime.js Timeline sync() Method Syntax
DESCRIPTION: Shows the syntax for the timeline.sync() method which is used to synchronize WAAPI animations with an Anime.js timeline. The method takes an animation object and an optional position parameter.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinesync-waapi-animations.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
timeline.sync(animation, position);
```

----------------------------------------

TITLE: HTML Structure for AnimeJS Stagger Animation
DESCRIPTION: This HTML structure defines a row of square elements that will be animated using the stagger function. It creates 11 div elements with the class 'square' inside a container with classes 'small justified row'.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationstaggerstagger-value-typesrange-value.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="small justified row">
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
</div>
```

----------------------------------------

TITLE: HTML Structure for Displaying Animated Value
DESCRIPTION: Provides the HTML structure used to display the animated value from the previous JavaScript animation example.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitieschain-able-utility-functions.md#2025-04-18_snippet_4

LANGUAGE: html
CODE:
```
<div class="large row">
  <pre class="large log row">
    <span class="value lcd">0</span>
  </pre>
</div>
```

----------------------------------------

TITLE: Basic radToDeg Usage in Anime.js
DESCRIPTION: Shows the basic syntax for converting radians to degrees using the radToDeg utility function. The function accepts a radian value and returns the equivalent in degrees.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesrad-to-deg.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const degrees = utils.radToDeg(radians);
```

----------------------------------------

TITLE: Creating Anime.js Scopes and Refreshing them (JavaScript)
DESCRIPTION: This snippet demonstrates how to create Anime.js scopes using `createScope` and add a constructor function to each scope. The `refresh()` method is then used to rebuild the scope when a button is clicked. The example includes setting up a timeline with staggering animations for circle elements within the scopes.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationscopescope-methodsrefresh.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
import { utils, stagger, createScope, createTimeline } from 'animejs';

const [ $button1, $button2 ] = utils.$('.refresh');

const scopeConstructor = scope => {
  const circles = utils.$('.circle');
  if (scope.i === undefined || scope.i > circles.length - 1) scope.i = 0;
  const i = scope.i++;
  
  utils.set(circles, {
    opacity: stagger([1, .25], { from: i, ease: 'out(3)' }),
  });
  
  createTimeline()
  .add(circles, {
    scale: [{ to: [.5, 1], duration: 250 }, { to: .5, duration: 750 }],
    duration: 750,
    loop: true,
  }, stagger(50, { from: i }))
  .seek(750)
}

const scope1 = createScope({ root: '.row-1' }).add(scopeConstructor);
const scope2 = createScope({ root: '.row-2' }).add(scopeConstructor);

const refreshScope1 = () => scope1.refresh();
const refreshScope2 = () => scope2.refresh();

$button1.addEventListener('click', refreshScope1);
$button2.addEventListener('click', refreshScope2);
```

----------------------------------------

TITLE: HTML Structure for Anime.js Timeline Remove Example
DESCRIPTION: The HTML structure used in the Anime.js timeline remove example. It includes elements for animation and control buttons.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodsremove.md#2025-04-18_snippet_4

LANGUAGE: html
CODE:
```
<div class="large row">
  <div class="medium pyramid">
    <div class="triangle"></div>
    <div class="square"></div>
    <div class="circle"></div>
  </div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button">Remove anim</button>
    <button class="button">Remove target</button>
    <button class="button">remove tween</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: Chaining roundPad with Other AnimeJS Utilities
DESCRIPTION: Shows how to chain the roundPad function with other utilities like snap. This example demonstrates snapping a value to the nearest 50 and then rounding and padding it to 2 decimal places.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesround-pad.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
const snapAndRoundPad = utils.snap(50).roundPad(2); // Snap to nearest 50 then roundPad to 2 decimal places
snapAndRoundPad(123.456); // '100.00'
snapAndRoundPad(175.789); // '200.00'
```

----------------------------------------

TITLE: SVG markup for line drawing animation
DESCRIPTION: HTML SVG markup defining a complex logo/text design using paths and polylines. Each element has the 'line' class which is referenced in the JavaScript animation code for drawing effects.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationsvgcreatedrawable.md#2025-04-18_snippet_3

LANGUAGE: html
CODE:
```
<svg viewBox="0 0 304 112">
  <g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <path class="line" d="M59 90V56.136C58.66 46.48 51.225 39 42 39c-9.389 0-17 7.611-17 17s7.611 17 17 17h8.5v17H42C23.222 90 8 74.778 8 56s15.222-34 34-34c18.61 0 33.433 14.994 34 33.875V90H59z"/>
    <polyline class="line" points="59 22.035 59 90 76 90 76 22 59 22"/>
    <path class="line" d="M59 90V55.74C59.567 36.993 74.39 22 93 22c18.778 0 34 15.222 34 34v34h-17V56c0-9.389-7.611-17-17-17-9.225 0-16.66 7.48-17 17.136V90H59z"/>
    <polyline class="line" points="127 22.055 127 90 144 90 144 22 127 22"/>
    <path class="line" d="M127 90V55.74C127.567 36.993 142.39 22 161 22c18.778 0 34 15.222 34 34v34h-17V56c0-9.389-7.611-17-17-17-9.225 0-16.66 7.48-17 17.136V90h-17z"/>
    <path class="line" d="M118.5 22a8.5 8.5 0 1 1-8.477 9.067v-1.134c.283-4.42 3.966-7.933 8.477-7.933z"/>
    <path class="line" d="M144 73c-9.389 0-17-7.611-17-17v-8.5h-17V56c0 18.778 15.222 34 34 34V73z"/>
    <path class="line" d="M178 90V55.74C178.567 36.993 193.39 22 212 22c18.778 0 34 15.222 34 34v34h-17V56c0-9.389-7.611-17-17-17-9.225 0-16.66 7.48-17 17.136V90h-17z"/>
    <path class="line" d="M263 73c-9.389 0-17-7.611-17-17s7.611-17 17-17c9.18 0 16.58 7.4 17 17h-17v17h34V55.875C296.433 36.994 281.61 22 263 22c-18.778 0-34 15.222-34 34s15.222 34 34 34V73z"/>
    <path class="line" d="M288.477 73A8.5 8.5 0 1 1 280 82.067v-1.134c.295-4.42 3.967-7.933 8.477-7.933z"/>
  </g>
</svg>
```

----------------------------------------

TITLE: HTML Structure for Animation Comparison Demo
DESCRIPTION: This HTML code sets up the structure for comparing WAAPI and JavaScript animations. It includes two square elements for animation and a button to toggle CPU blocking for demonstration purposes.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apihardware-accelerated-animations.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="medium row">
  <div class="waapi square"></div>
  <span class="padded label">WAAPI</span>
</div>
<div class="medium row">
  <div class="js square"></div>
  <span class="padded label">JS</span>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button">Block CPU</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: HTML Structure for Draggable Element and Refresh Button
DESCRIPTION: This HTML snippet provides the structure for a draggable square element and a refresh button. It sets up the necessary DOM elements for the JavaScript code to interact with.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-methodsrefresh.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large centered row">
  <div class="square draggable"></div>
</div>
<div class="large row">
  <fieldset class="controls">
    <button class="button refresh">Refresh</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: Advanced Anime.js Animation Example
DESCRIPTION: Example showing import statement and advanced animation with looping and alternating features.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationweb-animation-apiimprovements-to-the-web-animation-apimulti-targets-animation.md#2025-04-18_snippet_2

LANGUAGE: javascript
CODE:
```
import { waapi, stagger } from 'animejs';

waapi.animate('.circle', {
  translate: '17rem',
  delay: stagger(100),
  loop: true,
  alternate: true,
});
```

----------------------------------------

TITLE: Implementing padEnd Utility Function in Anime.js
DESCRIPTION: Basic usage of the padEnd utility function which pads a number or string from the end with a specified string until it reaches a given length.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiespad-end.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const paddedValue = utils.padEnd(value, totalLength, padString);
const padderFunction = utils.padEnd(totalLength, padString);
```

----------------------------------------

TITLE: Configuring Animation Autoplay Settings
DESCRIPTION: Shows examples of creating animations with explicit autoplay settings, both enabled and disabled.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationanimationanimation-playback-settingsautoplay.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
animate('.autoplay-true', {
  x: '17rem',
  autoplay: true, // Default
});

animate('.autoplay-false', {
  x: '17rem',
  autoplay: false
});
```

----------------------------------------

TITLE: HTML Structure for Draggable Element Interface
DESCRIPTION: HTML markup that defines the structure for a draggable square element and its control buttons for revert and enable functionality.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationdraggabledraggable-methodsrevert.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large centered row">
  <div class="square draggable"></div>
</div>
<div class="large row">
  <fieldset class="controls">
    <button class="button revert">Revert</button>
    <button class="button enable">Enable</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: Creating a Timer with loopDelay in AnimeJS
DESCRIPTION: Example of creating a timer with loopDelay in AnimeJS. The timer loops with a 750ms delay between iterations, has a duration of 250ms, and updates the UI with the loop count and current iteration time.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimertimer-playback-settingsplayback-loopdelay.md#2025-04-18_snippet_1

LANGUAGE: javascript
CODE:
```
import { createTimer, utils } from 'animejs';

const [ $loops ] = utils.$('.loops');
const [ $time ] = utils.$('.time');

let loops = 0;

createTimer({
  loop: true,
  loopDelay: 750,
  duration: 250,
  onLoop: () => $loops.innerHTML = ++loops,
  onUpdate: self => $time.innerHTML = utils.clamp(self.iterationCurrentTime, 0, 250)
});
```

----------------------------------------

TITLE: HTML Structure for Animation Demo - HTML
DESCRIPTION: Defines the HTML structure for displaying animated shapes and control buttons. Includes containers for geometric shapes (triangle, square, circle) and buttons for reverting and restarting the animation.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationtimelinetimeline-methodsrevert.md#2025-04-18_snippet_1

LANGUAGE: html
CODE:
```
<div class="large row">
  <div class="medium pyramid">
    <div class="triangle"></div>
    <div class="square"></div>
    <div class="circle"></div>
  </div>
</div>
<div class="medium row">
  <fieldset class="controls">
    <button class="button revert">Revert</button>
    <button class="button restart">Restart</button>
  </fieldset>
</div>
```

----------------------------------------

TITLE: Using AnimeJS Round Utility Function
DESCRIPTION: Demonstrates basic usage of the round utility function in AnimeJS. It can be used either to directly round a value or to create a reusable rounding function with a specified decimal length.
SOURCE: https://github.com/Ogyeet10/animejs-docs/blob/master/documentationutilitiesround.md#2025-04-18_snippet_0

LANGUAGE: javascript
CODE:
```
const roundedValue = utils.round(value, decimalLength);
const roundingFunction = utils.round(decimalLength);
```