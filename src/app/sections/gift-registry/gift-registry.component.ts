import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Registry {
  name: string;
  description: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-gift-registry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gift-registry.component.html',
  styleUrl: './gift-registry.component.scss'
})
export class GiftRegistryComponent {
  registries: Registry[] = [
    {
      name: 'Cash Gift',
      description: 'Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, a cash gift would be much appreciated.',
      icon: 'fa-gift',
      link: '#'
    },
    {
      name: 'Bank Transfer',
      description: 'For those who prefer to send a monetary gift via bank transfer, please use the following account details.',
      icon: 'fa-money-bill-transfer',
      link: '#'
    }
  ];

  bankDetails = {
    accountName: 'Ivory & Josephine Wedding',
    bankName: 'Sierra Leone Commercial Bank',
    accountNumber: '003-012345-01',
    swiftCode: 'SLCBSLFR'
  };
}
