
import React from 'react';

interface ServiceOption {
  id: string;
  title: string;
  icon: string;
  category: string;
}

interface ServiceDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (service: ServiceOption) => void;
  position: { x: number; y: number };
}

const serviceOptions: ServiceOption[] = [
  // Payments category
  { id: 'ppi-wallet-gold', title: 'PPI Wallet Gold', icon: 'M20 12V8H4v4M4 8a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8zM12 15l-2 2 2 2 2-2-2-2z', category: 'Payments' },
  { id: 'dmt', title: 'DMT', icon: 'M12 8c-3.333 0-5 1.333-5 4s1.667 4 5 4M12 8h.01M12 16h.01M15 12h-3M12 12V8M12 12v4M8 12h1m5 0h1m-6-3h.01M14 9h.01M10 15h.01M14 15h.01', category: 'Payments' },
  { id: 'aeps', title: 'AEPS', icon: 'M12 3a9 9 0 00-9 9 9 9 0 009 9 8 8 0 008-8 9 9 0 00-9-9zM22 12h-4M2 12h4M12 2v4M12 22v-4', category: 'Payments' },
  { id: 'upi-pay', title: 'UPI Pay', icon: 'M4 4h6v6H4zM4 14h6v6H4zM14 4h6v6h-6zM14 14h6v6h-6z', category: 'Payments' },
  { id: 'ppi-wallet', title: 'PPI Wallet', icon: 'M20 12V8H4v4M4 8a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8z', category: 'Payments' },
  
  // Recharge category
  { id: 'recharge', title: 'Recharge', icon: 'M8 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2h-2M12 18V6l-3 3 3-3 3 3M8 3h8v4H8V3z', category: 'Recharge' },
  
  // Wallet Transfer category
  { id: 'wallet-transfer', title: 'Fintech Wallet to Bank Transfer', icon: 'M2 8l4-4 4 4M6 4v16M20 12V8H8v4M8 8a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H10a2 2 0 01-2-2V8z', category: 'Wallet Transfer' },
  
  // Bill Payments category
  { id: 'bill-offline', title: 'Bill Payment Offline', icon: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M9 14h6M9 17h6M14 14l-4-4 4-4', category: 'BillPayments' },
  { id: 'bill-online', title: 'Bill Payment Online', icon: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M10 17l-3-3 3-3M13 17h1', category: 'BillPayments' },
  { id: 'igl-commercial', title: 'IGL Commercial Bill', icon: 'M13.43 3.32a3.5 3.5 0 00-4.86 4.86L3.32 13.43a3.5 3.5 0 004.86 4.86l5.25-5.25a3.5 3.5 0 004.86-4.86l-5.25-5.25zM22 6s-2 6-6 6', category: 'BillPayments' },
  
  // Credit Card category
  { id: 'credit-card-bill', title: 'Credit Card Bill', icon: 'M1 4h22v16H1V4zM1 10h22', category: 'Credit card' },
  
  // Travel category
  { id: 'airline', title: 'Airline', icon: 'M2 12h20l-4-4m4 4l-4 4M12 2l4 10h-8l4-10z', category: 'Travel' },
  { id: 'bus', title: 'Bus', icon: 'M3 11h18v10H3V11zM7 11V3M17 11V3M3 16h18M7 20a1 1 0 100-2 1 1 0 000 2zM17 20a1 1 0 100-2 1 1 0 000 2z', category: 'Travel' }
];

export const ServiceDropdown: React.FC<ServiceDropdownProps> = ({ 
  isOpen, 
  onClose, 
  onSelect, 
  position 
}) => {
  if (!isOpen) return null;

  const categories = Array.from(new Set(serviceOptions.map(option => option.category)));

  return (
    <>
      <div 
        className="fixed inset-0 z-40" 
        onClick={onClose}
      />
      <div 
        className="fixed z-50 bg-white rounded-lg shadow-2xl border border-gray-200 max-w-sm w-80 max-h-96 overflow-y-auto"
        style={{
          left: Math.min(position.x, window.innerWidth - 320),
          top: Math.min(position.y, window.innerHeight - 400)
        }}
      >
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Add Service</h3>
          {categories.map(category => (
            <div key={category} className="mb-4">
              <h4 className="text-sm font-medium text-gray-600 mb-2 border-b border-gray-100 pb-1">
                {category}
              </h4>
              {serviceOptions
                .filter(option => option.category === category)
                .map(option => (
                  <button
                    key={option.id}
                    onClick={() => {
                      onSelect(option);
                      onClose();
                    }}
                    className="w-full flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md transition-colors text-left"
                  >
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="text-[#336699] flex-shrink-0"
                    >
                      <path d={option.icon} />
                    </svg>
                    <span className="text-sm text-gray-700">{option.title}</span>
                  </button>
                ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
