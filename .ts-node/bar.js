"use strict";
// Example Block that creates a materialized view that aggregates daily statistics from Bar_0_0
Object.defineProperty(exports, "__esModule", { value: true });
var MV_NAME = "BarAggregated_MV";
var MV_QUERY = "\nCREATE MATERIALIZED VIEW ".concat(MV_NAME, "\nENGINE = MergeTree()\nORDER BY dayOfMonth\nPOPULATE\nAS\nSELECT\n  toDayOfMonth(utcTimestamp) as dayOfMonth,\n  count(primaryKey) as totalRows,\n  countIf(hasText) as rowsWithText,\n  sum(textLength) as totalTextLength,\n  max(textLength) as maxTextLength\nFROM Bar_0_0\nGROUP BY dayOfMonth\n");
var DROP_MV_QUERY = "\nDROP TABLE IF EXISTS ".concat(MV_NAME, "\n");
exports.default = {
    teardown: [DROP_MV_QUERY], // SQL to drop the materialized view if it exists
    setup: [MV_QUERY], // SQL to create a materialized view that aggregates daily statistics from Bar_0_0
};
//# sourceMappingURL=Bar.js.map