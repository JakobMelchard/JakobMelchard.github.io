// Pages serves 404.html for any path no project site claims; /tu/<path> keeps its path under /notes/.
const m = location.pathname.match(/^\/tu(\/.*)?$/)
if (m) location.replace('/notes' + (m[1] || '/') + location.search + location.hash)
