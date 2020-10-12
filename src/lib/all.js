const reduceToBoolean = (acc, predicate) => acc === true && predicate === true
const all = (...predicates) => predicates.reduce(reduceToBoolean, true)

export default all
