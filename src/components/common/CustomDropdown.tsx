'use client';

import { useState } from 'react';

import { map } from 'lodash-es';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  options: { optionId: string; optionName: string }[];
  onOptionSelect: (optionId: string, optionName: string) => void;
  placeholder?: string;
}

const CustomDropdown = ({
  options,
  onOptionSelect,
  placeholder = '옵션을 선택해주세요',
}: Props) => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const handleSelect = (optionId: string, optionName: string) => {
    onOptionSelect?.(optionId, optionName);
    setIsOptionOpen(false);
  };

  return (
    <div className="border border-gray-500 rounded-md overflow-hidden">
      {/* 드롭다운 트리거 */}
      <button
        type="button"
        onClick={() => setIsOptionOpen(!isOptionOpen)}
        className="w-full h-11 px-3 flex items-center justify-between bg-gray-50 text-sm"
      >
        <span className="text-gray-500">{placeholder}</span>
        {isOptionOpen ? (
          <ChevronUp size={16} className="text-gray-400" />
        ) : (
          <ChevronDown size={16} className="text-gray-400" />
        )}
      </button>

      {/* 옵션 목록 */}
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOptionOpen ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <div className="border-t border-gray-200">
          {map(options, ({ optionId, optionName }) => (
            <button
              key={optionId}
              type="button"
              onClick={() => handleSelect(optionId, optionName)}
              className="w-full px-3 py-3 text-left text-sm hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
            >
              {optionName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomDropdown;
