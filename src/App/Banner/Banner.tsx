import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useCallback
} from "react";
import "./Banner.less";
import { Select } from "nav-frontend-skjema";
import { Normaltekst } from "nav-frontend-typografi";
import { OrganisasjonsListeContext } from "../../OrganisasjonsListeProvider";
import { OrganisasjonsDetaljerContext } from "../../OrganisasjonDetaljerProvider";
import { tomAltinnOrganisasjon, Organisasjon } from "../../organisasjon";

import { withRouter, RouteComponentProps } from "react-router";
import Lenke from "nav-frontend-lenker";
import { basename } from "../../paths";

interface Props {
  tittel?: string;
}

const Banner: FunctionComponent<
  Props & RouteComponentProps<{ orgnummer: string }>
> = props => {
  const { organisasjoner } = useContext(OrganisasjonsListeContext);
  const { endreOrganisasjon, valgtOrganisasjon } = useContext(
    OrganisasjonsDetaljerContext
  );

  const endreOrgCallback = useCallback(
    orgnr => {
      const organisasjon = organisasjoner.find(
        org => org.OrganizationNumber === orgnr
      );
      if (organisasjon && organisasjon !== valgtOrganisasjon) {
        endreOrganisasjon(organisasjon);
      }
    },
    [endreOrganisasjon, organisasjoner, valgtOrganisasjon]
  );

  const settUrl = (orgnr: string) => {
    props.history.push("/" + orgnr);
  };

  useEffect(() => {
    console.log("useffect i banner kjører");
    const forrigeOrganisasjon: Organisasjon = valgtOrganisasjon;
    let orgnrFraUrl = props.location.pathname.split("/")[1];
    const orgnrErSattIUrl = orgnrFraUrl && orgnrFraUrl.length > 0;
    if (
      orgnrErSattIUrl &&
      orgnrFraUrl !== forrigeOrganisasjon.OrganizationNumber
    ) {
      const organisasjonFraListe = organisasjoner.find(
        organisasjon => orgnrFraUrl === organisasjon.OrganizationNumber
      );
      if (organisasjonFraListe) {
        endreOrgCallback(organisasjonFraListe.OrganizationNumber);
      }
    } else if (
      organisasjoner[0] &&
      valgtOrganisasjon === tomAltinnOrganisasjon
    ) {
      endreOrgCallback(organisasjoner[0].OrganizationNumber);
      props.history.push("/" + organisasjoner[0].OrganizationNumber);
    }
  }, [
    organisasjoner,
    valgtOrganisasjon,
    props.history,
    props.location.pathname,
    endreOrgCallback
  ]);


  const erPaBedriftsinfoSide = props.location.pathname.search(
    "bedriftsinformasjon"
  );

  return (
    <div className={"banner"}>
      {erPaBedriftsinfoSide !== -1 && (
        <div className={"banner__ikon-og-lenke"}>
          <Lenke
            href={basename + "/" + valgtOrganisasjon.OrganizationNumber + "/"}
          >
            Tilbake til forsiden
          </Lenke>
        </div>
      )}
      {organisasjoner.length > 0 && (
        <div className={"banner__container"}>
          <div className={"banner__select"}>
            <Select
              className={"banner__organisasjoner"}
              label={""}
              onChange={event => settUrl(event.target.value)}
            >
              {organisasjoner.map((organisasjon, index) => (
                <option
                  className={"banner__option"}
                  key={index}
                  value={organisasjon.OrganizationNumber}
                  selected={organisasjon === valgtOrganisasjon}
                >
                  {organisasjon.Name}
                </option>
              ))}
            </Select>
            {valgtOrganisasjon && (
              <Normaltekst className={"banner__orgnr"}>
                {"Org.nr " + valgtOrganisasjon.OrganizationNumber}
              </Normaltekst>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(Banner);
