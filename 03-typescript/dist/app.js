"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const service_hero_1 = require("./services/service.hero");
const hero = (0, service_hero_1.findHeroByID)(2);
console.log((_a = hero === null || hero === void 0 ? void 0 : hero.name) !== null && _a !== void 0 ? _a : 'No hero found');
//# sourceMappingURL=app.js.map