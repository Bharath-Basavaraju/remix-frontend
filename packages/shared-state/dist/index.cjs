"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var shared_state_exports = {};
__export(shared_state_exports, {
  useSharedState: () => useSharedState
});
module.exports = __toCommonJS(shared_state_exports);

// store.ts
var import_nanostores = require("nanostores");
var import_react = require("@nanostores/react");
var countStore = (0, import_nanostores.atom)(0);
var increment = () => {
  countStore.set(countStore.get() + 1);
};
function useSharedState() {
  const count = (0, import_react.useStore)(countStore);
  return { count, increment };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useSharedState
});
