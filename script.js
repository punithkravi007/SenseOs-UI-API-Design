const { Nozzel, Bed } = require("./Components/ThermalResource.js");
const AdapterService = require("./Service/AdapterService.js");

const TOOL_SET_TARGET_TEMP = "lena.resources.tool.EventToolSetTargetTemp";
const BED_SET_TARGET_TEMP = "lena.resources.bed.EventBedSetTargetTemp";

let adapterService = new AdapterService();


setTimeout(() => {
  new Nozzel("id_0", 140).setTargetTemperature(
    TOOL_SET_TARGET_TEMP,
    adapterService
  );
}, 1000);
