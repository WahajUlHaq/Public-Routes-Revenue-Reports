const { ERROR_WHILE_REPORT_GENERATION } = require("../../configs/errorStrings");
const routesDummyData = require("../../dummyData/routes.json");

exports.getRevenueReport = async (req, res) => {
  try {
    const routes = routesDummyData
    const durationSum = new Map();
    const revenueReport = [];
  
    for (let route of routes) {
      let duration = 0;
      let cp = 0;
      let sp = 0;
  
      if (route.status === "Completed") {
        let actualStart = new Date(route.actualStart);
        let actualEnd = new Date(route.actualEnd);
        duration = (actualEnd - actualStart) / (1000 * 60 * 60); 
      } else if (route.status === "Scheduled") {
        let scheduledStart = new Date(route.scheduledStart);
        let estimatedEnd = new Date(route.estimatedEnd);
        duration = (estimatedEnd - scheduledStart) / (1000 * 60 * 60); 
      }
  
      let vehicleId = route.vehicle.id;
      if (!durationSum.has(vehicleId)) {
        durationSum.set(vehicleId, 0);
      }
      durationSum.set(vehicleId, durationSum.get(vehicleId) + duration);
  
      cp = (route.vehicle.costPrice / durationSum.get(vehicleId)) * duration;
      sp = (route.vehicle.sellingPrice / durationSum.get(vehicleId)) * duration;
  
      let gpm = (sp - cp) / sp;
  
      let report = {
        name: route.routeName,
        organization: route.orgName,
        status: route.status,
        duration: duration,
        hourlyCP: cp.toFixed(2),
        hourlySP: sp.toFixed(2),
        gpm: gpm.toFixed(2)
      };
  
      revenueReport.push(report);
    }
  
    res
      .status(200)
      .send({ data: revenueReport, message: "Revenue report generated" });
  } catch (error) {
    res.status(401).send({ message: ERROR_WHILE_REPORT_GENERATION })
  }
};
