export interface InjectableDependency {
  src: string;
  inject: string | boolean;
  vendor?: boolean;
  buildType?: string[] | string;

  // @deprecated
  env?: string[] | string;
}

export interface BuildType {
  DEVELOPMENT: string;
  MOCK: string;
  FNTA: string;
  FNTE: string;
  NFTA: string;
  PROD: string;
  [key: string]: string;
}

export interface ExtendPackages {
  name: string;
  path?: string;
  packageMeta?: any;
}
