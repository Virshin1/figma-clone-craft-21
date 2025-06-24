
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
    { id: 'dmt', title: 'DMT', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/d9d164360b1fbc4d980f7c15fcadd75539949710?placeholderIfAbsent=true', category: 'Payments' },
    { id: 'aeps', title: 'AEPS', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/d9d164360b1fbc4d980f7c15fcadd75539949710?placeholderIfAbsent=true', category: 'Payments' },
    { id: 'upi-pay', title: 'UPI Pay', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/d9d164360b1fbc4d980f7c15fcadd75539949710?placeholderIfAbsent=true', category: 'Payments' },
    { id: 'ppi-wallet', title: 'PPI Wallet', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/d9d164360b1fbc4d980f7c15fcadd75539949710?placeholderIfAbsent=true', category: 'Payments' },
    
    // Recharge
    { id: 'recharge', title: 'Recharge', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/d9d164360b1fbc4d980f7c15fcadd75539949710?placeholderIfAbsent=true', category: 'Recharge' },
    
    // Wallet Transfer
    { id: 'fintech-wallet-transfer', title: 'Fintech Wallet to Bank Transfer', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/d9d164360b1fbc4d980f7c15fcadd75539949710?placeholderIfAbsent=true', category: 'Wallet Transfer' },
    
    // Bill Payments
    { id: 'bill-payment-offline', title: 'Bill Payment Offline', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/d9d164360b1fbc4d980f7c15fcadd75539949710?placeholderIfAbsent=true', category: 'Bill Payments' },
    { id: 'bill-payment-online', title: 'Bill Payment Online', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/d9d164360b1fbc4d980f7c15fcadd75539949710?placeholderIfAbsent=true', category: 'Bill Payments' },
    { id: 'igl-commercial-bill', title: 'IGL Commercial Bill', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/d9d164360b1fbc4d980f7c15fcadd75539949710?placeholderIfAbsent=true', category: 'Bill Payments' },
    
    // Credit Card
    { id: 'credit-card-bill', title: 'Credit Card Bill', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/d9d164360b1fbc4d980f7c15fcadd75539949710?placeholderIfAbsent=true', category: 'Credit Card' },
    
    // Travel
    { id: 'airline', title: 'Airline', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/d9d164360b1fbc4d980f7c15fcadd75539949710?placeholderIfAbsent=true', category: 'Travel' },
    { id: 'bus', title: 'Bus', icon: 'https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/d9d164360b1fbc4d980f7c15fcadd75539949710?placeholderIfAbsent=true', category: 'Travel' }
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
