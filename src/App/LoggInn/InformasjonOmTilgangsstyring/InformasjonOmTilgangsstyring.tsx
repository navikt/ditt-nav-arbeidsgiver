import React, { FunctionComponent } from "react";
import Ekspanderbartpanel from "nav-frontend-ekspanderbartpanel";
import "./InformasjonOmTilgangsstyring.less";
import Lenke from "nav-frontend-lenker";
import {
  LenkeTilInfoOmAltinnRoller,
  LenkeTilInfoOmNarmesteLeder
} from "../../../lenker";
import {
  Innholdstittel,
  Normaltekst,
  Element,
  Undertittel
} from "nav-frontend-typografi";
import LoggInnBanner from "../LoggInnBanner/LoggInnBanner";
import { basename } from "../../../paths";

const InformasjonOmTilgangsstyring: FunctionComponent = () => {
  return (
    <div className={"informasjon-om-tilgangsstyring "}>
      <LoggInnBanner />
      <div className={"informasjon-om-tilgangsstyring__innhold"}>
        <Lenke
          className={"informasjon-om-tilgangsstyring__lenke"}
          href={basename + "/"}
        >
          Tilbake til forsiden
        </Lenke>
        <div className={"informasjon-om-tilgangsstyring__tekst"}>
          <Innholdstittel
            className={"informasjon-om-tilgangsstyring__innholdstittel"}
          >
            {" "}
            Tilganger i Altinn{" "}
          </Innholdstittel>
          <Normaltekst className={"informasjon-om-tilgangsstyring__ingress"}>
            Navs tjenester for arbeidsgivere krever at du er registrert med
            bestemte roller i Altinn. Her får du en oversikt over hvilke roller
            de forskjellige tjenestene krever.
          </Normaltekst>
          <Undertittel
            className={"informasjon-om-tilgangsstyring__systemtittel"}
          >
            Slik får du tilgang til tjenestene
          </Undertittel>
          <Ekspanderbartpanel tittel="Rekruttering" border>
            <Normaltekst
              className={"informasjon-om-tilgangsstyring__arbeidsplassen-tekst"}
            >
              På{" "}
              <Lenke href={"https://arbeidsplassen.nav.no/"}>
                Arbeidsplassen
              </Lenke>{" "}
              kan du finne kandidater og opprette stillingsannonser.
            </Normaltekst>
            <Element
              className={"informasjon-om-tilgangsstyring__rolle-overskrift"}
            >
              Du må ha en av disse rollene:{" "}
            </Element>
            <ul>
              <li>Lønn og personalmedarbeider</li>
              <li>Utfyller/innsender</li>
            </ul>
            <Element
              className={"informasjon-om-tilgangsstyring__rolle-overskrift"}
            >
              Eller denne rettigheten:{" "}
            </Element>
            <ul>
              <li>Rekruttering</li>
            </ul>
          </Ekspanderbartpanel>
          <Ekspanderbartpanel tittel="Sykemeldte" border>
            Tilgang til digitale sykemeldinger krever at du er registrert som
            Nærmeste leder for én eller flere ansatte i din virksomhet. Les mer
            om registrering av Nærmeste leder{" "}
            <Lenke href={LenkeTilInfoOmNarmesteLeder}>her.</Lenke>
          </Ekspanderbartpanel>
          <Ekspanderbartpanel
            tittel="Tilskudd til mentor, lønn- og inkluderingstilskudd"
            border
          >
            Tilgang til disse skjemaene i Altinn krever rollen:
            <ul>
              <li>Helse-, sosial og velferdstjenester</li>
            </ul>
          </Ekspanderbartpanel>
          <Ekspanderbartpanel tittel="Inntektsmelding" border>
            Tilgang til dette skjemaet i Altinn krever en av rollene:
            <ul>
              <li>Ansvarlig revisor</li>
              <li>Lønn og personalmedarbeider</li>
              <li>Regnskapsfører lønn</li>
              <li>Regnskapsfører med signeringsrettighet</li>
              <li>Regnskapsfører uten signeringsrettighet</li>
              <li>Revisormedarbeider</li>
              <li>Kontaktperson NUF</li>
            </ul>
          </Ekspanderbartpanel>
          <div className="informasjon-om-tilgangsstyring__bunntekst">
            Mangler du tilgang på tjenester du mener du burde ha sett? Les mer
            om Altinnroller og hvordan de tildeles{" "}
            <Lenke href={LenkeTilInfoOmAltinnRoller}>her.</Lenke>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformasjonOmTilgangsstyring;
