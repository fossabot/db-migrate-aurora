import { InternalOptions, CallbackFunction } from "db-migrate-base";
import AuroraDataApiDriver, {
  IInternalOptions,
  RDSParams
} from "./AuroraDataApiDriver";
var AWS = require("aws-sdk");

export function connect(
  config: RDSParams,
  intern: InternalOptions,
  callback: CallbackFunction
) {
  // @ts-ignore
  callback(null, new AuroraDataApiDriver(intern, config));
}
