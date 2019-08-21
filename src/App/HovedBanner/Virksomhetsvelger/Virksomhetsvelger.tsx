import React, { FunctionComponent, useContext, useState, useEffect } from 'react';

import { Collapse } from 'react-collapse';
import { withRouter, RouteComponentProps } from 'react-router';
import { Input } from 'nav-frontend-skjema';

import './Virksomhetsvelger.less';

import { Undertittel, Element } from 'nav-frontend-typografi';
import bedriftsikon from './OrganisasjonsVisning/underenhet-ikon.svg';
import hvittbedriftsikon from './OrganisasjonsVisning/hvit-underenhet.svg';
import { WrapperState } from 'react-aria-menubutton';
import JuridiskEnhetMedUnderenheter from './JuridiskEnhetMedUnderenheter/JuridiskEnhetMedUnderenheter';

import sok from './forstorrelsesglass.svg';
import kryss from './kryss.svg';
import { OrganisasjonsListeContext } from '../../../OrganisasjonsListeProvider';
import { OrganisasjonsDetaljerContext } from '../../../OrganisasjonDetaljerProvider';
import { byggSokeresultat } from './byggSokeresultat';
import { OverenhetOrganisasjon, tomAltinnOrganisasjon } from '../../../Objekter/organisasjon';
import MenyEtterSok from './MenyEtterSok/MenyEtterSok';

const AriaMenuButton = require('react-aria-menubutton');

interface Props {
    className?: string;
}

const VirksomhetsVelgerNiva1: FunctionComponent<Props & RouteComponentProps> = props => {
    const { organisasjonstre, organisasjoner } = useContext(OrganisasjonsListeContext);
    const { valgtOrganisasjon } = useContext(OrganisasjonsDetaljerContext);
    const [erApen, setErApen] = useState(false);
    const [valgtOrgNavn, setValgtOrgNavn] = useState(' ');
    const [inputTekst, setInputTekst] = useState('');
    const [listeMedOrganisasjonerFraSok, setlisteMedOrganisasjonerFraSok] = useState(
        organisasjonstre
    );

    const HentTekstOgSettState = (event: any) => {
        setInputTekst(event.currentTarget.value);
        setlisteMedOrganisasjonerFraSok(
            byggSokeresultat(organisasjonstre, organisasjoner, inputTekst)
        );
    };

    const setOrganisasjonHvisUnderEnhet = (org: OverenhetOrganisasjon) => {
        if (org.overordnetOrg.Type !== 'Enterprise') {
            props.history.push('/' + org.overordnetOrg.OrganizationNumber);
            setErApen(false);
        }
    };

    useEffect(() => {
        setErApen(false);
        if (valgtOrganisasjon.Name.length > 23) {
            setValgtOrgNavn(valgtOrganisasjon.Name.substring(0, 22) + '...');
        } else {
            setValgtOrgNavn(valgtOrganisasjon.Name);
        }
    }, [valgtOrganisasjon]);

    const OrganisasjonsMenyKomponenter = organisasjonstre.map(function(organisasjon) {
        if (organisasjon === organisasjonstre[0]) {
            return (
                <JuridiskEnhetMedUnderenheter
                    organisasjon={organisasjon}
                    className={'forste-meny-objekt'}
                />
            );
        } else {
            return (
                <JuridiskEnhetMedUnderenheter
                    organisasjon={organisasjon}
                    className={'meny-objekt'}
                />
            );
        }
    });

    return (
        <div className={'organisasjons-meny ' + props.className}>
            <AriaMenuButton.Wrapper
                className="organisasjons-meny__wrapper"
                style={{ marginTop: 20 }}
                onMenuToggle={(erApen: WrapperState) => {
                    setErApen(erApen.isOpen);
                }}
                closeOnSelection={false}
                onSelection={(value: OverenhetOrganisasjon) => setOrganisasjonHvisUnderEnhet(value)}
            >
                {valgtOrganisasjon !== tomAltinnOrganisasjon && (
                    <AriaMenuButton.Button className="organisasjons-meny__button">
                        <img
                            alt={'ikon for bedrift'}
                            className={'organisasjons-meny__button__bedrifts-ikon'}
                            src={bedriftsikon}
                        />
                        <img
                            alt={'ikon for bedrift'}
                            className={'organisasjons-meny__button__hvitt-ikon'}
                            src={hvittbedriftsikon}
                        />
                        <div className="organisasjons-meny__button-tekst">
                            <Element>{valgtOrgNavn}</Element>
                            org. nr. {valgtOrganisasjon.OrganizationNumber}
                        </div>
                    </AriaMenuButton.Button>
                )}
                <div
                    className={
                        erApen
                            ? 'organisasjons-meny__wrapper-apen'
                            : 'organisasjons-meny__wrapper-lukket'
                    }
                >
                    <Collapse isOpened={true || false}>
                        <AriaMenuButton.Menu className={'organisasjons-meny'}>
                            <div className={'organisasjons-meny__vis-valgt-bedrift'}>
                                <img alt={'ikon for bedrift'} src={bedriftsikon} />
                                <div className="organisasjons-meny__vis-valgt-bedrift-tekst">
                                    <Undertittel>{valgtOrganisasjon.Name}</Undertittel>
                                    org. nr. {valgtOrganisasjon.OrganizationNumber}
                                </div>
                            </div>
                            <Undertittel className={'organisasjons-meny__dine-aktorer-tekst'}>
                                Dine aktører{' '}
                            </Undertittel>
                            <Input
                                label={''}
                                value={inputTekst}
                                onChange={HentTekstOgSettState}
                                placeholder="Søk etter underenheter"
                            />
                            {inputTekst.length === 0 && (
                                <img
                                    alt={''}
                                    className={'organisasjons-meny__input-sok'}
                                    src={sok}
                                />
                            )}
                            {inputTekst.length > 0 && (
                                <img
                                    alt={''}
                                    className={'organisasjons-meny__input-kryss'}
                                    src={kryss}
                                    onClick={() => setInputTekst('')}
                                />
                            )}
                            <div className={'organisasjons-meny__meny-komponenter-container'}>
                                {inputTekst.length === 0 && OrganisasjonsMenyKomponenter}
                                {inputTekst.length > 0 && (
                                    <>
                                        <MenyEtterSok
                                            ListeMedObjektFraSok={listeMedOrganisasjonerFraSok}
                                        />
                                    </>
                                )}
                            </div>
                        </AriaMenuButton.Menu>
                    </Collapse>
                </div>
            </AriaMenuButton.Wrapper>
        </div>
    );
};

export default withRouter(VirksomhetsVelgerNiva1);
