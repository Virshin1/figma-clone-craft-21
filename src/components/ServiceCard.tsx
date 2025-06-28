
import React from 'react';

interface ServiceCardProps {
  title: string;
  icon: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showPlusButton?: boolean;
  isCustomService?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon,
  onClick,
  className = "",
  isCustomService = false
}) => {
  // Enhanced debug logging
  console.log('ServiceCard render:', { 
    title, 
    icon: icon.substring(0, 100), 
    isCustomService,
    iconLength: icon.length,
    iconType: typeof icon 
  });

  // Function to create SVG element
  const createSVGElement = (svgString: string) => {
    if (!svgString) return null;
    
    try {
      // Create a div to parse the SVG string
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = svgString;
      const svgElement = tempDiv.querySelector('svg');
      
      if (svgElement) {
        // Ensure SVG has proper attributes
        svgElement.setAttribute('width', '32');
        svgElement.setAttribute('height', '32');
        svgElement.style.display = 'block';
        svgElement.style.maxWidth = '32px';
        svgElement.style.maxHeight = '32px';
        return svgElement.outerHTML;
      }
    } catch (error) {
      console.error('Error parsing SVG:', error);
    }
    
    return svgString; // fallback to original
  };

  const cardContent = (
    <>
      <div className="bg-white shadow-[0px_2px_2px_rgba(0,0,0,0.14)] absolute z-0 flex min-h-[132px] max-w-full w-[225px] items-stretch h-[132px] rounded-[20px] right-0 bottom-0" />
      <div className="z-10 flex min-h-[104px] w-full max-w-[207px] flex-col items-center justify-center p-4">
        {isCustomService && icon ? (
          <>
            <div className="w-12 h-12 mb-3 bg-blue-50 border-2 border-blue-200 rounded-lg flex items-center justify-center overflow-hidden">
              <div 
                dangerouslySetInnerHTML={{ __html: createSVGElement(icon) }}
                className="flex items-center justify-center w-8 h-8"
                style={{ 
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'inherit'
                }}
              />
            </div>
            <div className="text-center text-gray-700 text-sm font-medium leading-tight">
              {title}
            </div>
            {/* Debug info - remove this later */}
            <div className="text-xs text-green-600 mt-1 bg-green-50 px-2 py-1 rounded">
              SVG: {icon.includes('<svg') ? 'Valid' : 'Invalid'} | Length: {icon.length}
            </div>
          </>
        ) : !isCustomService ? (
          <>
            <div className="text-4xl text-gray-400 mb-2">+</div>
            <div className="text-center text-gray-500 text-sm">
              {title}
            </div>
          </>
        ) : null}
      </div>
    </>
  );

  const baseClasses = `self-stretch relative min-h-[132px] w-[225px] my-auto pl-[9px] pr-2 py-3.5 transition-transform duration-200 hover:scale-105 cursor-pointer ${className}`;

  return (
    <button
      onClick={onClick}
      className={baseClasses}
      aria-label={isCustomService ? `Access ${title} service` : 'Add new service'}
    >
      {cardContent}
    </button>
  );
};
