import environment from './utils/environment';
import {basename} from "./paths";

export const soknadskjemaInkluderingstilskudd = () => {
    if (environment.MILJO === 'prod-sbs') {
        return 'https://www.altinn.no/skjemaoversikt/arbeids--og-velferdsetaten-nav/soknad-om-inkluderingstilskudd/';
    } else {
        return 'https://tt02.altinn.no/Pages/ServiceEngine/Start/StartService.aspx?ServiceEditionCode=1&ServiceCode=5212';
    }
};

export const soknadsskjemaLonnstilskudd = () => {
    if (environment.MILJO === 'prod-sbs') {
        return 'https://altinn.no/skjemaoversikt/arbeids--og-velferdsetaten-nav/avtale-om-oppstart-av-lonnstilskudd/';
    } else {
        return 'https://tt02.altinn.no/Pages/ServiceEngine/Start/StartService.aspx?ServiceEditionCode=1&ServiceCode=5159';
    }
};

export const soknadTilskuddTilMentor = () => {
    if (environment.MILJO === 'prod-sbs') {
        return 'https://www.altinn.no/skjemaoversikt/arbeids--og-velferdsetaten-nav/soknad-om-tilskudd-til-mentor/';
    } else {
        return 'https://tt02.altinn.no/Pages/ServiceEngine/Start/StartService.aspx?ServiceEditionCode=1&ServiceCode=5216';
    }
};
export const inntekstmelding =
    'https://www.altinn.no/skjemaoversikt/arbeids--og-velferdsetaten-nav/Inntektsmelding-til-NAV/';

export const ekspertbistand =
    'https://www.altinn.no/skjemaoversikt/arbeids--og-velferdsetaten-nav/soknad-om-tilskudd-til-ekspertbistand/';

export const skjemaForArbeidsgivere = 'https://www.nav.no/soknader/nb/bedrift';

export const arbeidsforholdLink = () => {
    if (environment.MILJO === 'prod-sbs') {
        return 'https://arbeidsgiver.nav.no/arbeidsforhold/';
    } else {
        return 'https://arbeidsgiver-q.nav.no/arbeidsforhold/';
    }
};

export const syfoLink = () => {
    if (environment.MILJO === 'prod-sbs') {
        return 'https://tjenester.nav.no/sykefravaerarbeidsgiver';
    } else {
        return 'https://tjenester-q1.nav.no/sykefravaerarbeidsgiver';
    }
};

export const linkTilArbeidsplassen = () => {
    if (environment.MILJO === 'prod-sbs') {
        return 'https://arbeidsplassen.nav.no/bedrift';
    } else {
        return 'https://arbeidsplassen-q.nav.no/bedrift';
    }
};

export const pamSettBedriftLenke = (orgnr: string) => {
    if (environment.MILJO === 'prod-sbs') {
        return `https://arbeidsplassen.nav.no/stillingsregistrering-api/api/arbeidsgiver/${orgnr}`;
    } else {
        return `https://arbeidsplassen-q.nav.no/stillingsregistrering-api/api/arbeidsgiver/${orgnr}`;
    }
};

export const sjekkInnloggetLenke = () => {
    return basename + '/api/innlogget';
};

export const pamHentStillingsannonserLenke = () => {
    if (environment.MILJO === 'prod-sbs') {
        return 'https://arbeidsplassen.nav.no/stillingsregistrering-api/api/stillinger/numberByStatus';
    } else {
        return 'https://arbeidsplassen-q.nav.no/stillingsregistrering-api/api/stillinger/numberByStatus';
    }
};

export const digiSyfoNarmesteLederLink = '/min-side-arbeidsgiver/api/narmesteleder';

export const LenkeTilInfoOmNarmesteLeder =
    'https://www.nav.no/no/bedrift/oppfolging/sykmeldt-arbeidstaker/digital-sykmelding-informasjon-til-arbeidsgivere/hvordan-melde-inn-naermeste-leder-for-en-sykmeldt_kap';

export const LenkeTilInfoOmRettigheterTilSykmelding =
    'https://www.nav.no/no/Bedrift/Oppfolging/Sykmeldt+arbeidstaker/digital-sykmelding-informasjon-til-arbeidsgivere/om-tilganger-i-altinn';
export const LenkeTilInfoOmAltinnRoller =
    'https://www.altinn.no/hjelp/profil/roller-og-rettigheter/';

export const lenkeTilInfoOmSykefravarsstatistikk =
    'https://www.nav.no/no/bedrift/innhold-til-bedrift-forside/nyheter/fa-oversikt-over-sykefravaeret';

export const hentUnderenhetApiLink = (orgnr: string) => {
    return `https://data.brreg.no/enhetsregisteret/api/underenheter/${orgnr}`;
};

export const hentOverordnetEnhetApiLink = (orgnr: string) => {
    return `https://data.brreg.no/enhetsregisteret/api/enheter/${orgnr}`;
};

export const enhetsregisteretUnderenhetLink = (orgnr: string) => {
    return `https://data.brreg.no/enhetsregisteret/oppslag/underenheter/${orgnr}`;
};

export const enhetsregisteretOverordnetenhetLink = (orgnr: string) => {
    return `https://data.brreg.no/enhetsregisteret/oppslag/enheter/${orgnr}`;
};

export const arbeidsAvtaleLink = () => {
    if (environment.MILJO === 'prod-sbs') {
        return 'https://arbeidsgiver.nav.no/tiltaksgjennomforing/?part=arbeidsgiver';
    } else {
        return 'https://arbeidsgiver-q.nav.no/tiltaksgjennomforing/?part=arbeidsgiver';
    }
};

export const hentArbeidsavtalerApiLink = () => {
    return '/min-side-arbeidsgiver/tiltaksgjennomforing-api/avtaler?part=arbeidsgiver';
};

export const beOmTilgangIAltinnLink = (
    orgnr: string,
    serviceKode: string,
    serviceEditionKode: string,
    serviceEditionKodeTest?: string
) => {
    if (environment.MILJO === 'prod-sbs') {
        return (
            'https://altinn.no/ui/DelegationRequest?offeredBy=' +
            orgnr +
            '&resources=' +
            serviceKode +
            '_' +
            serviceEditionKode
        );
    } else {
        let testServiceEditionKode = serviceEditionKode;
        if (serviceEditionKodeTest) {
            testServiceEditionKode = serviceEditionKodeTest;
        }
        return (
            'https://tt02.altinn.no/ui/DelegationRequest?offeredBy=' +
            orgnr +
            '&resources=' +
            serviceKode+
            '_' +
            testServiceEditionKode
        );
    }
};

export const lenkeTilDittNavPerson = 'https://www.nav.no/person/dittnav/';
export const lenkeTilTilgangsstyringsInfo =
    'https://arbeidsgiver.nav.no/min-side-arbeidsgiver/informasjon-om-tilgangsstyring';

export const linkTilUnleash = '/min-side-arbeidsgiver/api/feature';

export const lenkeIAweb =
    'https://www.altinn.no/Pages/ServiceEngine/Start/StartService.aspx?ServiceEditionCode=2&ServiceCode=3403&Oselect=true&M=SP';

export const lenkeTilSykefravarsstatistikk = '/sykefravarsstatistikk/';

export const lenkeTilInfoOmDigitaleSoknader =
    'https://www.nav.no/no/bedrift/tjenester-og-skjemaer/nav-og-altinn-tjenester/altinn-skjemaer-refusjoner-meldinger2/soknader-om-arbeidsmarkedstiltak-og-tilskudd-fra-nav';

export const lenkeTilInforOmInntekstmelding =
    'https://www.nav.no/no/bedrift/tjenester-og-skjemaer/nav-og-altinn-tjenester/inntektsmelding';

export const lenkeTilPermitteringOgMasseoppsigelsesSkjema = () => {
    if (environment.MILJO === 'prod-sbs') {
        return 'https://arbeidsgiver.nav.no/permittering/'
    }
    else {
        return 'https://arbeidsgiver-q.nav.no/permittering/'
    }
};

export const lenkeTilLonnskompensasjonRefusjonSkjema = () => {
    if (environment.MILJO === 'prod-sbs') {
        return 'https://arbeidsgiver.nav.no/permittering-refusjon/'
    }
    else {
        return 'https://arbeidsgiver-q.nav.no/permittering-refusjon/'
    }
};

export const lenkeTilKlageskjema = (orgnr: string) => {
    const orgNrDel = orgnr.length > 0 ? '?bedrift=' + orgnr : '';
    if (environment.MILJO === 'prod-sbs') {
        return 'https://arbeidsgiver.nav.no/klage-permittering-refusjon/' + orgNrDel;
    }
    else {
        return 'https://arbeidsgiver-q.nav.no/klage-permittering-refusjon/' + orgNrDel;
    }
};

export  const LenkeTilKoronaSykeRefusjon = (orgnr: string) => {
    const orgNrDel = orgnr.length > 0 ? '?bedrift=' + orgnr : '';
    if (environment.MILJO === 'prod-sbs') {
        return 'https://arbeidsgiver.nav.no/nettrefusjon/' + orgNrDel;
    }
    else {
        return 'https://arbeidsgiver-q.nav.no/nettrefusjon/' + orgNrDel;
    }
};

export const infoOmPermitteringOgMasseoppsigelse = 'https://www.nav.no/no/bedrift/innhold-til-bedrift-forside/nyheter/permitteringer-som-folge-av-koronaviruset/';

export const lenkeTilInfoOmPermittering =
    'https://www.nav.no/no/bedrift/innhold-til-bedrift-forside/nyheter/permitteringer-som-folge-av-koronaviruset';
