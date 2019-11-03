import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-a3674212.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["animatable-component",[[4,"animatable-component",{"animation":[1],"keyFrames":[1040],"keyFramesData":[1,"key-frames-data"],"options":[1040],"optionsData":[1,"options-data"],"animateId":[1025,"animate-id"],"delay":[1026],"endDelay":[1026,"end-delay"],"duration":[1026],"direction":[1025],"composite":[1025],"easing":[1025],"fill":[1025],"iterations":[1026],"iterationStart":[1026,"iteration-start"],"iterationComposite":[1025,"iteration-composite"],"autoPlay":[4,"autoplay"],"currentTime":[2,"current-time"],"startTime":[2,"start-time"],"playbackRate":[2,"playback-rate"],"getCurrentTime":[64],"getStartTime":[64],"getPending":[64],"getPlaybackRate":[64],"getPlayState":[64],"cancel":[64],"finish":[64],"pause":[64],"play":[64],"reverse":[64]}]]]], options);
});
