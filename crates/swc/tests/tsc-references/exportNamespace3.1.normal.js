//// [a.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
export var A = function A() {
    "use strict";
    _class_call_check(this, A);
};
//// [b.ts]
export { };
//// [c.ts]
import * as _a from "./b";
export { _a as a };
//// [d.ts]
import { a } from "./c";
new a.A(); // Error
