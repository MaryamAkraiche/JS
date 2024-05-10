let now = new Date();

const brusselsTime = new Date().toLocaleString('fr-BE',{ timeZone: 'Europe/Brussels'});

const anchorageTime = new Date().toLocaleString('fr-BE',{ timeZone: 'America/Anchorage'});

const reykjavikTime = new Date().toLocaleString('fr-BE',{ timeZone: 'Atlantic/Reykjavik'});

const stPetersburgTime = new Date().toLocaleString('fr-BE',{ timeZone: 'Europe/Moscow'});

console.log("anchorage Time: ", anchorageTime, "brussels Time: ", brusselsTime);
console.log("Reykjavik Time: ", reykjavikTime, "brussels Time: ", brusselsTime);
console.log("Saint-Petersburg Time: ", stPetersburgTime, "brussels Time: ", brusselsTime);