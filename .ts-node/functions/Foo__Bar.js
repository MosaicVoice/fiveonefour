"use strict";
// Example streaming function: Reshapes Foo data to Bar format.
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = run;
// The 'run' function contains the logic that runs on each new data point in the Foo stream.
// For more details on how Moose streaming functions work, see: https://docs.moosejs.com
function run(foo) {
    var _a, _b;
    return {
        primaryKey: foo.primaryKey,
        utcTimestamp: new Date(foo.timestamp),
        textLength: (_b = (_a = foo.optionalText) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0,
        hasText: foo.optionalText !== null,
    };
}
//# sourceMappingURL=Foo__Bar.js.map