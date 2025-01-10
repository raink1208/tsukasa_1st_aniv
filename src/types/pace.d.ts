declare module 'pace-js' {
  interface Pace {
    start(options?: object): void;
    restart(): void;
    stop(): void;
    track(): void;
    ignore(): void;
    trigger(event: string): void;
    on(event: string, handler: () => void): void;
    off(event: string, handler: () => void): void;
  }
}

declare const Pace;