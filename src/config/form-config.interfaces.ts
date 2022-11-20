import { Config } from './config.interface';

export interface ValidatorMap {
  [validator: string]: string;
}

export interface FormConfig extends Config {
  validatorMap: ValidatorMap;
}
