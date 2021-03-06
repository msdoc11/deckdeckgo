/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface DeckgoSlideCountdown {
    'afterSwipe': () => Promise<void>;
    'beforeSwipe': (_enter: boolean, _reveal: boolean) => Promise<boolean>;
    'customActions': boolean;
    'customBackground': boolean;
    'days': number;
    'hideContent': () => Promise<void>;
    'hours': number;
    'lazyLoadContent': () => Promise<void>;
    'minutes': number;
    'revealContent': () => Promise<void>;
    'seconds': number;
    'start': () => Promise<void>;
    'stop': () => Promise<void>;
    'until': string;
  }
}

declare global {


  interface HTMLDeckgoSlideCountdownElement extends Components.DeckgoSlideCountdown, HTMLStencilElement {}
  var HTMLDeckgoSlideCountdownElement: {
    prototype: HTMLDeckgoSlideCountdownElement;
    new (): HTMLDeckgoSlideCountdownElement;
  };
  interface HTMLElementTagNameMap {
    'deckgo-slide-countdown': HTMLDeckgoSlideCountdownElement;
  }
}

declare namespace LocalJSX {
  interface DeckgoSlideCountdown extends JSXBase.HTMLAttributes<HTMLDeckgoSlideCountdownElement> {
    'customActions'?: boolean;
    'customBackground'?: boolean;
    'days'?: number;
    'hours'?: number;
    'minutes'?: number;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'seconds'?: number;
    'until'?: string;
  }

  interface IntrinsicElements {
    'deckgo-slide-countdown': DeckgoSlideCountdown;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


