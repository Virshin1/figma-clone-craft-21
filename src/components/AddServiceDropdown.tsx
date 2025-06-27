
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
  onServiceRemove: () => void;
  isOpen: boolean;
  onToggle: () => void;
  hasCustomService: boolean;
}

export const AddServiceDropdown: React.FC<AddServiceDropdownProps> = ({
  onServiceAdd,
  onServiceRemove,
  isOpen,
  onToggle,
  hasCustomService
}) => {
  const serviceOptions: ServiceOption[] = [
    // Payments
    { id: 'ppi-wallet-gold', title: 'PPI Wallet Gold', icon: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=64&h=64&fit=crop&crop=center', category: 'Payments' },
    { id: 'dmt', title: 'DMT', icon: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=64&h=64&fit=crop&crop=center', category: 'Payments' },
    { id: 'aeps', title: 'AEPS', icon: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=64&h=64&fit=crop&crop=center', category: 'Payments' },
    { id: 'upi-pay', title: 'UPI Pay', icon: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=64&h=64&fit=crop&crop=center', category: 'Payments' },
    { id: 'ppi-wallet', title: 'PPI Wallet', icon: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=64&h=64&fit=crop&crop=center', category: 'Payments' },
    
    // Recharge
    { id: 'recharge', title: 'Recharge', icon: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=64&h=64&fit=crop&crop=center', category: 'Recharge' },
    
    // Wallet Transfer
    { id: 'fintech-wallet-transfer', title: 'Fintech Wallet to Bank Transfer', icon: 'https://images.unsplash.com/photo-1554224154-26032fced8bd?w=64&h=64&fit=crop&crop=center', category: 'Wallet Transfer' },
    
    // Bill Payments
    { id: 'bill-payment-offline', title: 'Bill Payment Offline', icon: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=64&h=64&fit=crop&crop=center', category: 'Bill Payments' },
    { id: 'bill-payment-online', title: 'Bill Payment Online', icon: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=64&h=64&fit=crop&crop=center', category: 'Bill Payments' },
    { id: 'igl-commercial-bill', title: 'IGL Commercial Bill', icon: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=64&h=64&fit=crop&crop=center', category: 'Bill Payments' },
    
    // Credit Card
    { id: 'credit-card-bill', title: 'Credit Card Bill', icon: 'https://images.unsplash.com/photo-1556742208-999815fca738?w=64&h=64&fit=crop&crop=center', category: 'Credit Card' },
    
    // Travel
    { id: 'airline', title: 'Airline', icon: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=64&h=64&fit=crop&crop=center', category: 'Travel' },
    { id: 'bus', title: 'Bus', icon: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=64&h=64&fit=crop&crop=center', category: 'Travel' }
  ];

  const handleServiceSelect = (service: ServiceOption) => {
    console.log('Service selected:', service);
    console.log('Icon URL:', service.icon);
    onServiceAdd(service);
    onToggle();
  };

  const handleRemoveClick = () => {
    onServiceRemove();
    onToggle();
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
          aria-label={hasCustomService ? "Remove service" : "Add service"}
        >
          {hasCustomService ? <X size={16} className="stroke-2" /> : <Plus size={16} className="stroke-2" />}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-64 max-h-96 overflow-y-auto bg-white border border-gray-200 shadow-lg z-50"
        align="end"
        side="bottom"
      >
        {hasCustomService ? (
          <DropdownMenuItem
            onClick={handleRemoveClick}
            className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-red-50 transition-colors text-red-600"
          >
            <X size={16} />
            <span className="text-sm font-medium">Remove Service</span>
          </DropdownMenuItem>
        ) : (
          <>
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
                      className="w-6 h-6 object-contain flex-shrink-0 rounded"
                      onError={(e) => {
                        console.log(`Failed to load dropdown image: ${service.icon}`);
                      }}
                    />
                    <span className="text-sm font-medium text-gray-700 truncate">
                      {service.title}
                    </span>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
              </div>
            ))}
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
