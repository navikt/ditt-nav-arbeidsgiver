export interface SyfoKallObjekt {
  narmesteLedere: narmesteLedere[];
  humanResources: humanResources[];
}

export interface narmesteLedere {
  aktor: string;
  tilgangFom: string;
  skrivetilganger: string;
  tilganger: Array<string>;
}

export interface humanResources {
  liste: Array<any>;
}