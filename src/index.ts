import { Container } from "unstated";

export const set = (prefix: string, props: { [x: string]: string }) =>
  Object.keys(props).map(key => {
    window.localStorage.setItem(`${prefix}-${key}`, props[key]);
  });
export const get = (prefix: string, key: string) =>
  window.localStorage.getItem(`${prefix}-${key}`);
export const remove = (prefix: string, key: string) =>
  window.localStorage.removeItem(`${prefix}-${key}`);

export const jsonSet = (prefix: string, key: string, object: any) =>
  set(prefix, {
    [key]: JSON.stringify(object)
  });

export const jsonGet = (prefix: string, key: string, defaultValue = {}): any =>
  get(prefix, key) ? JSON.parse(get(prefix, key)) : defaultValue;

export class SlothContainer<T extends {}> extends Container<Partial<T>> {
  prefix = "Slothking";
  constructor(prefix?: string) {
    super();
    if (prefix) {
      this.prefix = prefix;
    }
  }
  state: Partial<T> = jsonGet(this.prefix, "storage", {});
  set = (state: Partial<T>) => {
    jsonSet(this.prefix, "storage", {
      ...(this.state as any),
      ...(state as any)
    });
    return this.setState(state);
  };
}
