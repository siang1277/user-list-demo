export function getCompany(company) {
    return `${company.name}:- ${company.bs}, ${company.catchPhrase}`
}

export function getAddress(address) {
    let suite = address.suite? `${address.suite}, `:'';
    return `${suite}${address.street}, ${address.city}, ${address.zipcode}`
}

export function getGeoLocation(address) {
    return `${address.geo.lng}, ${address.geo.lat}`
}