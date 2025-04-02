import ComponentStore from './NativeComponentStore';
import { Button, Text } from './components';

export function multiply(a: number, b: number): number {
  return ComponentStore.multiply(a, b);
}

export { Button, Text };
