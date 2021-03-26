import fetchMock from 'fetch-mock';
const delay = new Promise(res => setTimeout(res, 500));

const ballstadOgHamarøy = {
    Name: 'BALLSTAD OG HAMARØY',
    Type: 'Business',
    OrganizationNumber: '811076732',
    ParentOrganizationNumber: '811076112',
    OrganizationForm: 'AAFY',
    Status: 'Active',
}

const ballstadOgHorten = {
    Name: 'BALLSTAD OG HORTEN',
    Type: 'Enterprise',
    ParentOrganizationNumber: null,
    OrganizationNumber: '811076112',
    OrganizationForm: 'FLI',
    Status: 'Active',
}

const testAvAafy = {
    Name: 'TEST AV AAFY ',
    Type: 'Business',
    OrganizationNumber: '973610015',
    ParentOrganizationNumber: '971348593',
    OrganizationForm: 'AAFY',
    Status: 'Active',
};

const navEngerdal = {
    Name: 'NAV ENGERDAL',
    Type: 'Business',
    ParentOrganizationNumber: '874652202',
    OrganizationNumber: '991378642',
    OrganizationForm: 'BEDR',
    Status: 'Active',
};

const navHamar = {
    Name: 'NAV HAMAR',
    Type: 'Business',
    ParentOrganizationNumber: '874652202',
    OrganizationNumber: '990229023',
    OrganizationForm: 'BEDR',
    Status: 'Active',
};

const bjørnøyaOgRovdeRevisjon = {
    Name: 'BJØRNØYA OG ROVDE REVISJON',
    Type: 'Enterprise',
    ParentOrganizationNumber: null,
    OrganizationNumber: '810993472',
    OrganizationForm: 'AS',
    Status: 'Active',
};

const arendalOgBønesRevisjon = {
    Name: 'ARENDAL OG BØNES REVISJON',
    Type: 'Business',
    ParentOrganizationNumber: '810993472',
    OrganizationNumber: '810993502',
    OrganizationForm: 'BEDR',
    Status: 'Active',
};

const gravdalOgSolliaRevisjon = {
    Name: 'GRAVDAL OG SOLLIA REVISJON',
    Type: 'Business',
    ParentOrganizationNumber: '810993472',
    OrganizationNumber: '910993542',
    OrganizationForm: 'BEDR',
    Status: 'Active',
};

const storfosnaOgFredrikstadRegnskap = {
    Name: 'STORFOSNA OG FREDRIKSTAD REGNSKAP',
    Type: 'Business',
    ParentOrganizationNumber: '910825550',
    OrganizationNumber: '910825569',
    OrganizationForm: 'AAFY',
    Status: 'Active',
};

const tranøyOgSandreIVestfoldRegnskap = {
    Name: 'TRANØY OG SANDE I VESTFOLD REGNSKAP',
    Type: 'Enterprise',
    ParentOrganizationNumber: '',
    OrganizationNumber: '910825550',
    OrganizationForm: 'FLI',
    Status: 'Active',
};

const birtavarreOgVærlandetForelder = {
    Name: 'BIRTAVARRE OG VÆRLANDET FORELDER',
    Type: 'Enterprise',
    OrganizationNumber: '910825555',
    OrganizationForm: 'AS',
    Status: 'Active',
};

const saltrødOgHøneby = {
    Name: 'SALTRØD OG HØNEBY',
    Type: 'Business',
    OrganizationNumber: '999999999',
    ParentOrganizationNumber: '910825555',
    OrganizationForm: 'BEDR',
    Status: 'Active',
};

export const OrganisasjonerResponse = [
    ballstadOgHamarøy,
    ballstadOgHorten,
    testAvAafy,
    navEngerdal,
    navHamar,
    bjørnøyaOgRovdeRevisjon,
    arendalOgBønesRevisjon,
    gravdalOgSolliaRevisjon,
    storfosnaOgFredrikstadRegnskap,
    tranøyOgSandreIVestfoldRegnskap,
    birtavarreOgVærlandetForelder,
    saltrødOgHøneby
];

const rettigheterSkjemaDefaultResponse = [
    ballstadOgHamarøy,
    ballstadOgHorten,
    birtavarreOgVærlandetForelder,
    saltrødOgHøneby,
];

const mentortilskuddskjemaResponse = [
    ballstadOgHamarøy,
    ballstadOgHorten,
    navEngerdal,
    navHamar,
];

const InntektsmeldingSkjemaResponse = [
    ballstadOgHamarøy,
    ballstadOgHorten,
];

export const mock = () => {
    fetchMock
        .get(
            'min-side-arbeidsgiver/api/organisasjoner',
            delay.then(() => {
                return OrganisasjonerResponse;
            })
        )
        .spy();

    fetchMock
        .get(
            '/min-side-arbeidsgiver/api/rettigheter-til-skjema/?serviceKode=5216&serviceEdition=1',
            delay.then(() => {
                return mentortilskuddskjemaResponse;
            })
        )
        .spy();

    fetchMock
        .get(
            '/min-side-arbeidsgiver/api/rettigheter-til-skjema/?serviceKode=4936&serviceEdition=1',
            delay.then(() => {
                return InntektsmeldingSkjemaResponse;
            })
        )
        .spy();

    fetchMock
        .get(
            'begin:/min-side-arbeidsgiver/api/rettigheter-til-skjema/',
            delay.then(() => {
                return rettigheterSkjemaDefaultResponse;
            })
        )
        .spy();
}