
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
  // Comprehensive debug logging
  console.log('=== ServiceCard Debug ===');
  console.log('Title:', title);
  console.log('IsCustomService:', isCustomService);
  console.log('Icon exists:', !!icon);
  console.log('Icon length:', icon?.length || 0);
  console.log('Icon first 200 chars:', icon?.substring(0, 200));
  console.log('Icon contains <svg>:', icon?.includes('<svg>'));
  console.log('Icon contains viewBox:', icon?.includes('viewBox'));
  console.log('Raw icon data:', icon);

  // Test SVG parsing
  if (icon && isCustomService) {
    try {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = icon;
      const svgElement = tempDiv.querySelector('svg');
      console.log('SVG parsing successful:', !!svgElement);
      if (svgElement) {
        console.log('SVG tag name:', svgElement.tagName);
        console.log('SVG attributes:', Array.from(svgElement.attributes).map(attr => `${attr.name}="${attr.value}"`));
        console.log('SVG innerHTML:', svgElement.innerHTML);
      }
    } catch (error) {
      console.error('SVG parsing error:', error);
    }
  }

  const cardContent = (
    <>
      <div className="bg-white shadow-[0px_2px_2px_rgba(0,0,0,0.14)] absolute z-0 flex min-h-[132px] max-w-full w-[225px] items-stretch h-[132px] rounded-[20px] right-0 bottom-0" />
      <div className="z-10 flex min-h-[104px] w-full max-w-[207px] flex-col items-center justify-center p-4">
        {isCustomService && icon ? (
          <>
            <div className="w-12 h-12 mb-3 bg-blue-50 border-2 border-blue-200 rounded-lg flex items-center justify-center relative">
              {/* Raw SVG attempt */}
              <div 
                dangerouslySetInnerHTML={{ __html: icon }}
                className="w-8 h-8 flex items-center justify-center"
                style={{ 
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              />
              
              {/* Fallback indicator if SVG doesn't render */}
              <div className="absolute inset-0 flex items-center justify-center text-xs text-red-500 pointer-events-none">
                {!icon.includes('<svg') ? '❌' : ''}
              </div>
            </div>
            
            <div className="text-center text-gray-700 text-sm font-medium leading-tight">
              {title}
            </div>
            
            {/* Enhanced debug info */}
            <div className="text-xs text-blue-600 mt-1 bg-blue-50 px-2 py-1 rounded border">
              <div>SVG: {icon.includes('<svg') ? '✅ Valid' : '❌ Invalid'}</div>
              <div>Length: {icon.length}</div>
              <div>Type: {typeof icon}</div>
              <div className="font-mono text-[10px] mt-1 max-w-[150px] truncate">
                {icon.substring(0, 50)}...
              </div>
            </div>
          </>
        ) : !isCustomService ? (
          <>
            <div className="text-4xl text-gray-400 mb-2">+</div>
            <div className="text-center text-gray-500 text-sm">
              {title}
            </div>
          </>
        ) : (
          <div className="text-xs text-red-500">
            Custom service but no icon data
          </div>
        )}
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
