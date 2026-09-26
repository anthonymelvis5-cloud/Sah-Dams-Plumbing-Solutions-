import React from 'react';
import { Search, MapPin, Home, DollarSign, Bed, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { FilterState } from '../types/realEstate';

interface PropertySearchProps {
  filter: FilterState;
  onFilterChange: (newFilter: FilterState) => void;
  onResetFilter: () => void;
  resultsCount: number;
}

export const PropertySearch: React.FC<PropertySearchProps> = ({
  filter,
  onFilterChange,
  onResetFilter,
  resultsCount,
}) => {
  const locations = [
    'All Locations',
    'London',
    'Miami',
    'New York',
    'Dubai',
    'Monaco',
    'Los Angeles',
  ];

  const propertyTypes = [
    'All Types',
    'Villa',
    'Penthouse',
    'Townhouse',
    'Modern Estate',
    'Waterfront Villa',
    'Architectural Modern',
  ];

  const priceRanges = [
    'Any Price',
    'Under $5,000,000',
    '$5,000,000 - $8,000,000',
    '$8,000,000+',
  ];

  const bedroomOptions = ['Any Bedrooms', '4+ Beds', '5+ Beds', '6+ Beds', '7+ Beds'];

  const handleLocationChange = (val: string) => {
    onFilterChange({ ...filter, location: val === 'All Locations' ? '' : val });
  };

  const handleTypeChange = (val: string) => {
    onFilterChange({ ...filter, propertyType: val === 'All Types' ? '' : val });
  };

  const handleStatusChange = (val: 'All' | 'Buy' | 'Rent') => {
    onFilterChange({ ...filter, status: val });
  };

  const handlePriceChange = (val: string) => {
    onFilterChange({ ...filter, priceRange: val === 'Any Price' ? '' : val });
  };

  const handleBedroomsChange = (val: string) => {
    onFilterChange({ ...filter, bedrooms: val === 'Any Bedrooms' ? '' : val });
  };

  const isFiltered = Boolean(
    filter.location ||
    filter.propertyType ||
    filter.status !== 'All' ||
    filter.priceRange ||
    filter.bedrooms
  );

  return (
    <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12">
      <div className="bg-[#121418] border border-[#2a2f38] shadow-2xl p-6 sm:p-8 backdrop-blur-xl">
        
        {/* Top Status Tabs & Results Counter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#222730]">
          
          {/* Buy / Rent / All Segmented Control */}
          <div className="inline-flex items-center p-1 bg-[#0b0c0e] border border-[#22262e]">
            {(['All', 'Buy', 'Rent'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => handleStatusChange(tab)}
                className={`px-5 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-200 cursor-pointer ${
                  filter.status === tab
                    ? 'bg-[#c5a880] text-[#0b0c0e] font-bold shadow-sm'
                    : 'text-[#a39784] hover:text-[#f4efe8]'
                }`}
              >
                {tab === 'All' ? 'All Portfolios' : tab}
              </button>
            ))}
          </div>

          {/* Quick status & reset indicator */}
          <div className="flex items-center gap-4 text-xs tracking-wider uppercase text-[#a39784]">
            <span className="font-mono text-[#c5a880] font-semibold">
              {resultsCount} {resultsCount === 1 ? 'Property Available' : 'Properties Available'}
            </span>
            {isFiltered && (
              <button
                onClick={onResetFilter}
                className="flex items-center gap-1.5 text-xs text-[#dfc6a3] hover:text-white transition-colors cursor-pointer border-b border-[#dfc6a3]/40"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

        </div>

        {/* Integrated Filter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 items-end">
          
          {/* 1. Location */}
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#a39784] mb-2 flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#c5a880]" />
              <span>Location</span>
            </label>
            <select
              value={filter.location || 'All Locations'}
              onChange={(e) => handleLocationChange(e.target.value)}
              className="w-full bg-[#0b0c0e] text-[#f4efe8] border border-[#2a2f38] px-3.5 py-3 text-xs tracking-wider focus:outline-none focus:border-[#c5a880] transition-colors"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc} className="bg-[#121418] text-[#f4efe8]">
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* 2. Property Type */}
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#a39784] mb-2 flex items-center gap-1.5">
              <Home className="w-3 h-3 text-[#c5a880]" />
              <span>Property Type</span>
            </label>
            <select
              value={filter.propertyType || 'All Types'}
              onChange={(e) => handleTypeChange(e.target.value)}
              className="w-full bg-[#0b0c0e] text-[#f4efe8] border border-[#2a2f38] px-3.5 py-3 text-xs tracking-wider focus:outline-none focus:border-[#c5a880] transition-colors"
            >
              {propertyTypes.map((t) => (
                <option key={t} value={t} className="bg-[#121418] text-[#f4efe8]">
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* 3. Price Range */}
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#a39784] mb-2 flex items-center gap-1.5">
              <DollarSign className="w-3 h-3 text-[#c5a880]" />
              <span>Price Range</span>
            </label>
            <select
              value={filter.priceRange || 'Any Price'}
              onChange={(e) => handlePriceChange(e.target.value)}
              className="w-full bg-[#0b0c0e] text-[#f4efe8] border border-[#2a2f38] px-3.5 py-3 text-xs tracking-wider focus:outline-none focus:border-[#c5a880] transition-colors"
            >
              {priceRanges.map((pr) => (
                <option key={pr} value={pr} className="bg-[#121418] text-[#f4efe8]">
                  {pr}
                </option>
              ))}
            </select>
          </div>

          {/* 4. Bedrooms */}
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#a39784] mb-2 flex items-center gap-1.5">
              <Bed className="w-3 h-3 text-[#c5a880]" />
              <span>Bedrooms</span>
            </label>
            <select
              value={filter.bedrooms || 'Any Bedrooms'}
              onChange={(e) => handleBedroomsChange(e.target.value)}
              className="w-full bg-[#0b0c0e] text-[#f4efe8] border border-[#2a2f38] px-3.5 py-3 text-xs tracking-wider focus:outline-none focus:border-[#c5a880] transition-colors"
            >
              {bedroomOptions.map((b) => (
                <option key={b} value={b} className="bg-[#121418] text-[#f4efe8]">
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* 5. Search Action Button */}
          <div>
            <a
              href="#properties"
              className="w-full py-3.5 px-4 bg-[#c5a880] hover:bg-[#dfc6a3] text-[#0b0c0e] font-semibold text-xs uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Search className="w-3.5 h-3.5 text-[#0b0c0e]" />
              <span>Search Portfolio</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
