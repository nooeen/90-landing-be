import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
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
}
