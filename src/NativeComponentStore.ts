import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  multiply(a: number, b: number): number;
  Button(): void;
  Text(): void;
  Divider(): void;
  Image(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('ComponentStore');
