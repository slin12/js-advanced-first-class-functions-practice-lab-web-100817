// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, location) {
  const filtered = drivers.filter(function(driver) {
    return driver.hometown === location;
  })
  filtered.forEach(function(driver) {
    console.log(driver.name);
  })
}

function driversByRevenue(drivers) {
  const copy = [...drivers]
  const sorted = copy.sort(function(a, b) {
    return a.revenue - b.revenue;
  })
  return sorted;
}

function driversByName(drivers) {
  const copy = [...drivers];
  const sorted = copy.sort(function(a, b) {
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return 1;
    }
    else if (a.name.toUpperCase() < b.name.toUpperCase()) {
      return -1;
    }
    else {
      return 0;
    }
  })
  return sorted;
}

function totalRevenue(drivers) {
  const answer = drivers.reduce(function(sum, obj) {
    debugger;
    return sum += obj.revenue;
  }, 0)
  return answer;
}

function averageRevenue(drivers) {
  const total = totalRevenue(drivers);
  return total / drivers.length; 
}
