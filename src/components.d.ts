/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AnimatableComponent {
    /**
    * A DOMString with which to reference the animation.
    */
    'animateId': string;
    /**
    * Start the animation when the component is mounted.
    */
    'autoPlay': boolean;
    /**
    * Clears all `KeyframeEffects` caused by this animation and aborts its playback.
    */
    'cancel': () => Promise<void>;
    /**
    * Determines how values are combined between this animation and other, separate animations that do not specify their own specific composite operation. Defaults to `replace`.
    */
    'composite'?: CompositeOperation;
    /**
    * Sets the current time value of the animation in milliseconds, whether running or paused.
    */
    'currentTime'?: number;
    /**
    * The number of milliseconds to delay the start of the animation. Defaults to 0.
    */
    'delay'?: number;
    /**
    * Direction of the animation.
    */
    'direction': PlaybackDirection;
    /**
    * The number of milliseconds each iteration of the animation takes to complete. Defaults to 0.
    */
    'duration'?: number;
    /**
    * The rate of the animation's change over time.
    */
    'easing'?: string;
    /**
    * The number of milliseconds to delay after the end of an animation.
    */
    'endDelay'?: number;
    /**
    * Dictates whether the animation's effects should be reflected by the element(s) prior to playing ("backwards"), retained after the animation has completed playing ("forwards"), or both. Defaults to "none".
    */
    'fill'?: FillMode;
    /**
    * Sets the current playback time to the end of the animation corresponding to the current playback direction.
    */
    'finish': () => Promise<void>;
    /**
    * Returns the current time value of the animation in milliseconds, whether running or paused.
    */
    'getCurrentTime': () => Promise<number>;
    /**
    * Indicates whether the animation is currently waiting for an asynchronous operation such as initiating playback or pausing a running animation.
    */
    'getPending': () => Promise<boolean>;
    /**
    * Returns an enumerated value describing the playback state of an animation.
    */
    'getPlayState': () => Promise<AnimationPlayState>;
    /**
    * Returns the playback rate of the animation.
    */
    'getPlaybackRate': () => Promise<number>;
    /**
    * Returns the scheduled time when an animation's playback should begin.
    */
    'getStartTime': () => Promise<number>;
    /**
    * Determines how values build from iteration to iteration in this animation.
    */
    'iterationComposite'?: IterationCompositeOperation;
    /**
    * Describes at what point in the iteration the animation should start.
    */
    'iterationStart'?: number;
    /**
    * The number of times the animation should repeat. Defaults to `1`, and can also take a value of `Infinity` to make it repeat for as long as the element exists.
    */
    'iterations'?: number;
    /**
    * Keyframes of the animation.
    */
    'keyFrames': Keyframe[];
    /**
    * Keyframes of the animation in string format.
    */
    'keyFramesData': string;
    /**
    * Default options of the animation.
    */
    'options': KeyframeAnimationOptions;
    /**
    * Default options of the animation in string format.
    */
    'optionsData': string;
    /**
    * Suspends playback of the animation.
    */
    'pause': () => Promise<void>;
    /**
    * Starts or resumes playing of an animation.
    */
    'play': () => Promise<void>;
    /**
    * Sets the playback rate of the animation.
    */
    'playbackRate'?: number;
    /**
    * Reverses the playback direction, meaning the animation ends at its beginning.
    */
    'reverse': () => Promise<void>;
    /**
    * Sets the scheduled time when an animation's playback should begin.
    */
    'startTime'?: number;
  }
}

declare global {


  interface HTMLAnimatableComponentElement extends Components.AnimatableComponent, HTMLStencilElement {}
  var HTMLAnimatableComponentElement: {
    prototype: HTMLAnimatableComponentElement;
    new (): HTMLAnimatableComponentElement;
  };
  interface HTMLElementTagNameMap {
    'animatable-component': HTMLAnimatableComponentElement;
  }
}

declare namespace LocalJSX {
  interface AnimatableComponent {
    /**
    * A DOMString with which to reference the animation.
    */
    'animateId'?: string;
    /**
    * Start the animation when the component is mounted.
    */
    'autoPlay'?: boolean;
    /**
    * Determines how values are combined between this animation and other, separate animations that do not specify their own specific composite operation. Defaults to `replace`.
    */
    'composite'?: CompositeOperation;
    /**
    * Sets the current time value of the animation in milliseconds, whether running or paused.
    */
    'currentTime'?: number;
    /**
    * The number of milliseconds to delay the start of the animation. Defaults to 0.
    */
    'delay'?: number;
    /**
    * Direction of the animation.
    */
    'direction'?: PlaybackDirection;
    /**
    * The number of milliseconds each iteration of the animation takes to complete. Defaults to 0.
    */
    'duration'?: number;
    /**
    * The rate of the animation's change over time.
    */
    'easing'?: string;
    /**
    * The number of milliseconds to delay after the end of an animation.
    */
    'endDelay'?: number;
    /**
    * Dictates whether the animation's effects should be reflected by the element(s) prior to playing ("backwards"), retained after the animation has completed playing ("forwards"), or both. Defaults to "none".
    */
    'fill'?: FillMode;
    /**
    * Determines how values build from iteration to iteration in this animation.
    */
    'iterationComposite'?: IterationCompositeOperation;
    /**
    * Describes at what point in the iteration the animation should start.
    */
    'iterationStart'?: number;
    /**
    * The number of times the animation should repeat. Defaults to `1`, and can also take a value of `Infinity` to make it repeat for as long as the element exists.
    */
    'iterations'?: number;
    /**
    * Keyframes of the animation.
    */
    'keyFrames'?: Keyframe[];
    /**
    * Keyframes of the animation in string format.
    */
    'keyFramesData'?: string;
    /**
    * This event is sent when the animation is cancelled.
    */
    'onCancel'?: (event: CustomEvent<HTMLElement>) => void;
    /**
    * This event is sent when the animation finishes playing.
    */
    'onFinish'?: (event: CustomEvent<HTMLElement>) => void;
    /**
    * Default options of the animation.
    */
    'options'?: KeyframeAnimationOptions;
    /**
    * Default options of the animation in string format.
    */
    'optionsData'?: string;
    /**
    * Sets the playback rate of the animation.
    */
    'playbackRate'?: number;
    /**
    * Sets the scheduled time when an animation's playback should begin.
    */
    'startTime'?: number;
  }

  interface IntrinsicElements {
    'animatable-component': AnimatableComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'animatable-component': LocalJSX.AnimatableComponent & JSXBase.HTMLAttributes<HTMLAnimatableComponentElement>;
    }
  }
}


