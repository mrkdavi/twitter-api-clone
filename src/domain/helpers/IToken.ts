export interface IToken {
  generate: (payload: any) => string;
  verify: (token: string) => any;
}