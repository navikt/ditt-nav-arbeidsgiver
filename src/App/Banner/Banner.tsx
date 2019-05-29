import React, { FunctionComponent, useContext, useEffect } from "react";
import "./Banner.less";
import { Select } from "nav-frontend-skjema";
import { Normaltekst } from "nav-frontend-typografi";
import { OrganisasjonsListeContext } from "../../OrganisasjonsListeProvider";
import { OrganisasjonsDetaljerContext } from "../../OrganisasjonDetaljerProvider";
import { defaultAltinnOrg } from "../../organisasjon";
import { logInfo } from "../../utils/metricsUtils";
import { withRouter, RouteComponentProps } from "react-router";

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

  const velgOrganisasjon = async (orgnr: string) => {
    const organisasjon = organisasjoner.find(
      org => orgnr === org.OrganizationNumber
    );
    if (organisasjon) {
      endreOrganisasjon(organisasjon);
      props.history.replace("/" + orgnr);
    }
  };

  useEffect(() => {
    let orgnr = props.location.pathname.split("/")[1];
    console.log(props.location.pathname.split("/")[1]);
    if (orgnr && orgnr.length > 0) {
      //velgOrganisasjon(props.location.pathname.split('/')[1]);
      orgnr = props.location.pathname.split("/")[1];
      const organisasjon = organisasjoner.find(
        org => orgnr === org.OrganizationNumber
      );
      if (organisasjon) {
        endreOrganisasjon(organisasjon);
      }
    }
  }, [organisasjoner]);

  useEffect(() => {
    console.log("ja");
    // hvis orgnr i url: kall velgOrganisasjon

    let orgnr = props.location.pathname.split("/")[1];
    console.log(props.location.pathname.split("/")[1]);
    if (orgnr && orgnr.length > 0) {
      //velgOrganisasjon(props.location.pathname.split('/')[1]);
      orgnr = props.location.pathname.split("/")[1];
      const organisasjon = organisasjoner.find(
        org => orgnr === org.OrganizationNumber
      );
      if (organisasjon) {
        endreOrganisasjon(organisasjon);
      }
    } else if (organisasjoner[0] && valgtOrganisasjon === defaultAltinnOrg) {
      //orgnr = organisasjoner[0].OrganizationNumber;
      endreOrganisasjon(organisasjoner[0]);
      //todo endre url
    }
    //props.history.replace("/" + orgnr);
  }, [organisasjoner]);

  if (valgtOrganisasjon) {
    logInfo(
      "besok fra organisasjon: " + valgtOrganisasjon.OrganizationNumber,
      valgtOrganisasjon.OrganizationNumber
    );
  }

  return (
    <div className={"banner"}>
      {organisasjoner.length > 0 && (
        <div className={"banner__container"}>
          <div className={"banner__select"}>
            <Select
              className={"banner__organisasjoner"}
              label={""}
              onChange={event => velgOrganisasjon(event.target.value)}
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
