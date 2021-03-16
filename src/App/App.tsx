import React, { FunctionComponent, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { basename } from '../paths';
import Hovedside from './Hovedside/Hovedside';
import LoginBoundary from './LoginBoundary';
import { OrganisasjonerOgTilgangerProvider } from './OrganisasjonerOgTilgangerProvider';
import { OrganisasjonsDetaljerProvider } from './OrganisasjonDetaljerProvider';
import InformasjonOmTilgangsstyringSide from './InformasjonOmTilgangsstyringSide/InformasjonOmTilgangsstyringSide';
import InformasjonOmBedrift from './InformasjonOmBedrift/InformasjonOmBedrift';
import { FeatureToggleProvider } from '../FeatureToggleProvider';
import { ManglerTilgangContainer } from './Hovedside/ManglerTilgangContainer/ManglerTilgangContainer';
import { loggBrukerLoggetInn } from '../utils/funksjonerForAmplitudeLogging';
import './App.less';
import { AltinnMeldingsboksProvider } from './AltinnMeldingsboksProvider';

const App: FunctionComponent = () => {

    useEffect(() => {
        loggBrukerLoggetInn();
    }, []);

    return (
        <div className="typo-normal bakgrunnsside">
            <BrowserRouter basename={basename}>
                <Switch>
                    <Route
                        path="/informasjon-om-tilgangsstyring"
                        exact={true}
                        component={InformasjonOmTilgangsstyringSide}
                    />
                    <LoginBoundary>
                        <AltinnMeldingsboksProvider>
                            <FeatureToggleProvider>
                                <OrganisasjonerOgTilgangerProvider>
                                    <OrganisasjonsDetaljerProvider>
                                        <Switch>
                                            <Route
                                                path="/bedriftsinformasjon"
                                                exact={true}
                                                component={InformasjonOmBedrift}
                                            />
                                            <Route
                                                path="/mangler-tilgang"
                                                exact={true}
                                                component={ManglerTilgangContainer}
                                            />
                                            <Route path="/" exact={true} component={Hovedside} />
                                        </Switch>
                                    </OrganisasjonsDetaljerProvider>
                                </OrganisasjonerOgTilgangerProvider>
                            </FeatureToggleProvider>
                        </AltinnMeldingsboksProvider>
                    </LoginBoundary>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
