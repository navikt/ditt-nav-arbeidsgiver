import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.less';
import { basename } from '../paths';
import Hovedside from './Hovedside/Hovedside';
import LoginBoundary from './LoginBoundary';
import { OrganisasjonsListeProvider } from '../OrganisasjonsListeProvider';
import { OrganisasjonsDetaljerProvider } from '../OrganisasjonDetaljerProvider';
import { SyfoTilgangProvider } from '../SyfoTilgangProvider';
import InformasjonOmTilgangsstyringSide from './InformasjonOmTilgangsstyringSide/InformasjonOmTilgangsstyringSide';
import InformasjonOmBedrift from './InformasjonOmBedrift/InformasjonOmBedrift';
import environment from '../utils/environment';
import amplitude from '../utils/amplitude';
import { FeatureToggleProvider } from '../FeatureToggleProvider';

const App: FunctionComponent = () => {
    amplitude.logEvent(' #min-side-arbeidsgiver logget pa i ' + environment.MILJO);

    return (
        <div className="typo-normal">
            <BrowserRouter>
                <Switch>
                    <Route
                        path= {"/"}
                        exact={true}
                        render={() => window.location.href="https://www.nav.no/no/bedrift"}
                    />
                    <Route
                        path= {basename + "/informasjon-om-tilgangsstyring"}
                        exact={true}
                        component={InformasjonOmTilgangsstyringSide}
                    />
                    <LoginBoundary>
                        <FeatureToggleProvider>
                            <OrganisasjonsListeProvider>
                                <SyfoTilgangProvider>
                                    <OrganisasjonsDetaljerProvider>
                                        <div className="bakgrunnsside">
                                            <Switch>
                                                <Route
                                                    path={basename + "/bedriftsinformasjon"}
                                                    exact={true}
                                                    component={InformasjonOmBedrift}
                                                />
                                                <Route
                                                    path={basename + "/"}
                                                    exact={true}
                                                    component={Hovedside}
                                                />
                                            </Switch>
                                        </div>
                                    </OrganisasjonsDetaljerProvider>
                                </SyfoTilgangProvider>
                            </OrganisasjonsListeProvider>
                        </FeatureToggleProvider>
                    </LoginBoundary>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
