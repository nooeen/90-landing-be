"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getLinks() {
        return [
            {
                name: 'XOILAC',
                url: 'https://xem9.xoilac12.org/?utm_source=landing&utm_medium=landing',
                logo: '/logo-xoilac.png',
            },
            {
                name: 'VEBOtv',
                url: 'https://tructiep.vebo3.org/?utm_source=landing&utm_medium=landing',
                logo: '/logo-01.png',
            },
            {
                name: 'BanhKhuc',
                url: 'https://xem9.banhkhuc6.com/?utm_source=landing&utm_medium=landing',
                logo: '/logo-bk.png',
            },
            {
                name: '90Phut',
                url: 'https://tructiep.90phut4.live/?utm_source=landing&utm_medium=landing',
                logo: '/logo-90.png',
            },
            {
                name: 'Group Facebook',
                url: 'https://www.facebook.com/groups/3069898683235513/',
                logo: '/logo-facebook.png',
            },
            {
                name: 'Không Sợ Bóng',
                url: 'https://www.facebook.com/groups/3069898683235513/',
                logo: '/logo-youtube.png',
            },
        ];
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map