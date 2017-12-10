"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moize_1 = require("moize");
var f = function (x) { return x; };
var f2 = moize_1.default(f);
