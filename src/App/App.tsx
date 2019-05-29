import React, { FunctionComponent, useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.less";
import { basename } from "../paths";
import Hovedside from "./Hovedside/Hovedside";
import Banner from "./Banner/Banner";
import LoginBoundary from "./LoginBoundary";
import { OrganisasjonsListeProvider } from "../OrganisasjonsListeProvider";
import { OrganisasjonsDetaljerProvider } from "../OrganisasjonDetaljerProvider";
import { SyfoTilgangProvider } from "../SyfoTilgangProvider";
import InformasjonOmBedrift from "./InformasjonOmBedrift/InformasjonOmBedrift";

const App: FunctionComponent = () => {
  return (
    <LoginBoundary>
      <OrganisasjonsListeProvider>
        <SyfoTilgangProvider>
          <OrganisasjonsDetaljerProvider>
            <BrowserRouter basename={basename}>
              <div className="bakgrunnsside typo-normal">
                <Banner tittel={"Ditt nav arbeidsgiver"} />

                <Switch>
                  <Route
                    path="/:orgnummer"
                    exact={true}
                    component={Hovedside}
                  />
                  <Route
                    path="/bedriftsinformasjon"
                    exact={true}
                    component={InformasjonOmBedrift}
                  />
                </Switch>
              </div>
            </BrowserRouter>
          </OrganisasjonsDetaljerProvider>
        </SyfoTilgangProvider>
      </OrganisasjonsListeProvider>
    </LoginBoundary>
  );
};

export default App;
