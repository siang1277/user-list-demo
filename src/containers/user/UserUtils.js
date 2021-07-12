export function getCompany(company) {
    return `${company.name}:- ${company.bs}, ${company.catchPhrase}`
}

export function getAddress(address) {
    return `${address.suite}, ${address.street}, ${address.city}, ${address.zipcode}`
}

export function getGeoLocation(address) {
    return `${address.geo.lng}, ${address.geo.lat}`
}