
import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel } from './ui/dropdown-menu';

interface ServiceOption {
  id: string;
  title: string;
  icon: string;
  category: string;
}

interface AddServiceDropdownProps {
  onServiceAdd: (service: ServiceOption) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const AddServiceDropdown: React.FC<AddServiceDropdownProps> = ({
  onServiceAdd,
  isOpen,
  onToggle
}) => {
  const serviceOptions: ServiceOption[] = [
    // Payments
    { id: 'ppi-wallet-gold', title: 'PPI Wallet Gold', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/d9d164360b1fbc4d980f7c15fcadd75539949710?placeholderIfAbsent=true', category: 'Payments' },
    { id: 'dmt', title: 'DMT', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/38c4e30b0af84f9cbe6bf2a7f8b80b54c6e7b123?placeholderIfAbsent=true', category: 'Payments' },
    { id: 'aeps', title: 'AEPS', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/2bf3c7a8d1e04f5f8e9b3c4a6f5e8d7c9b2a1e3f?placeholderIfAbsent=true', category: 'Payments' },
    { id: 'upi-pay', title: 'UPI Pay', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/4a8f2b6e3c9d1f7a5e8b2c4f6d9a3b7e1c5f8a2d?placeholderIfAbsent=true', category: 'Payments' },
    { id: 'ppi-wallet', title: 'PPI Wallet', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/6d3a8f1b9c4e7f2a5b8d1e6f3c9a2b7e4f1a8d5c?placeholderIfAbsent=true', category: 'Payments' },
    
    // Recharge
    { id: 'recharge', title: 'Recharge', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/8b5e2f9c1a7d4b6f3e8a9c2f5d1b4e7a6c3f9b2e?placeholderIfAbsent=true', category: 'Recharge' },
    
    // Wallet Transfer
    { id: 'fintech-wallet-transfer', title: 'Fintech Wallet to Bank Transfer', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/1f7a3c9e5b8d2f6a4e9c3b7f1a5d8c2e6b4f9a3d?placeholderIfAbsent=true', category: 'Wallet Transfer' },
    
    // Bill Payments
    { id: 'bill-payment-offline', title: 'Bill Payment Offline', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/3c6f9b2e8a1d5f4b7e9c2a6f3d8b1e5c4f7a9b2d?placeholderIfAbsent=true', category: 'Bill Payments' },
    { id: 'bill-payment-online', title: 'Bill Payment Online', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/5a9e3f1c7b4d8e2f6a9c1b5e8d3f7a2c4e6b9f1a?placeholderIfAbsent=true', category: 'Bill Payments' },
    { id: 'igl-commercial-bill', title: 'IGL Commercial Bill', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/7e2a6f4b9c1d5e8a3f7b2c6e9a4f1d5b8c3e7f2a?placeholderIfAbsent=true', category: 'Bill Payments' },
    
    // Credit Card
    { id: 'credit-card-bill', title: 'Credit Card Bill', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/9d4b7f2e5c8a1f6b3e9a4c7f2d5b8e1c6f4a9b3e?placeholderIfAbsent=true', category: 'Credit Card' },
    
    // Travel
    { id: 'airline', title: 'Airline', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/2c7f4a9b6e1d8f3a5c9b2e7f4d1a6c8b3f5e9a2d?placeholderIfAbsent=true', category: 'Travel' },
    { id: 'bus', title: 'Bus', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/4e8a2c6f9b3d7e1a5f8c2b6e4d9a1c7f3b5e8a4d?placeholderIfAbsent=true', category: 'Travel' }
  ];

  const handleServiceSelect = (service: ServiceOption) => {
    onServiceAdd(service);
    onToggle(); // Close the dropdown after selection
  };

  const groupedServices = serviceOptions.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, ServiceOption[]>);

  return (
    <DropdownMenu open={isOpen} onOpenChange={onToggle}>
      <DropdownMenuTrigger asChild>
        <button 
          className="absolute -top-2 -right-2 bg-white text-[rgba(51,102,153,1)] w-8 h-8 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10"
          aria-label="Add service"
        >
          {isOpen ? <X size={16} className="stroke-2" /> : <Plus size={16} className="stroke-2" />}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-64 max-h-96 overflow-y-auto bg-white border border-gray-200 shadow-lg z-50"
        align="end"
        side="bottom"
      >
        {Object.entries(groupedServices).map(([category, services]) => (
          <div key={category}>
            <DropdownMenuLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-2 py-1">
              {category}
            </DropdownMenuLabel>
            {services.map((service) => (
              <DropdownMenuItem
                key={service.id}
                onClick={() => handleServiceSelect(service)}
                className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <img 
                  src={service.icon} 
                  alt={`${service.title} icon`}
                  className="w-6 h-6 object-contain flex-shrink-0"
                />
                <span className="text-sm font-medium text-gray-700 truncate">
                  {service.title}
                </span>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
