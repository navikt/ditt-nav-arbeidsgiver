interface Environment {
    MILJO: string,
    NAIS_APP_IMAGE: string,
}

const environment: Environment = {
    MILJO: 'local',
    NAIS_APP_IMAGE: 'unknown',
    ...(window as any)?.environment
};

interface Miljo<T> {
    prod: T;
    labs?: T;
    other: T;
}

export const gittMiljo = <T>(e: Miljo<T>): T=> {
    switch (environment.MILJO) {
        case 'prod-gcp':
            return e.prod
        case 'labs-gcp':
            return e.labs ? e.labs : e.other
        default:
            return e.other
    }
}

export default environment;

