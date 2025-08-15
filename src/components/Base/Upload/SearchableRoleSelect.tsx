// "use client";

// import React, { useState, useRef, useEffect } from 'react';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Badge } from '@/components/ui/badge';
// import { ChevronDown, Search, Briefcase, Star } from 'lucide-react';
// import { colors } from '@/components/Global/colors';
// import { jobCategories } from '@/data/roles';

// interface SearchableRoleSelectProps {
//     value: string;
//     onChange: (value: string) => void;
//     placeholder?: string;
//     label?: string;
//     helperText?: string;
//     required?: boolean;
//     disabled?: boolean;
//     className?: string;
// }



// export function SearchableRoleSelect({
//     value,
//     onChange,
//     placeholder = "Search or select a job role...",
//     label = "Target Role",
//     helperText = "Select from popular roles or type your own custom job title",
//     required = false,
//     disabled = false,
//     className = ""
// }: SearchableRoleSelectProps) {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [searchTerm, setSearchTerm] = useState('');
//     const dropdownRef = useRef<HTMLDivElement>(null);



//     // Flatten all roles for searching
//     const allRoles = jobCategories.flatMap(category => category.roles);

//     // Remove duplicates and sort
//     const uniqueRoles = Array.from(new Set(allRoles)).sort();

//     // Filter roles based on search term
//     const filteredRoles = uniqueRoles.filter(role =>
//         role.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     // Get featured roles (most popular)
//     const featuredCategory = jobCategories.find(cat => cat.featured);
//     const featuredRoles = featuredCategory?.roles || [];

//     // Close dropdown when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//                 setIsDropdownOpen(false);
//                 setSearchTerm('');
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const handleRoleSelect = (role: string) => {
//         onChange(role);
//         setSearchTerm('');
//         setIsDropdownOpen(false);
//     };

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const inputValue = e.target.value;
//         onChange(inputValue);
//         setSearchTerm(inputValue);
//         setIsDropdownOpen(true);
//     };

//     const handleInputFocus = () => {
//         setIsDropdownOpen(true);
//         setSearchTerm(value);
//     };

//     return (
//         <div className={`space-y-2 relative ${className}`} ref={dropdownRef}>
//             {/* Label */}
//             {label && (
//                 <Label
//                     htmlFor="role-select"
//                     className="text-sm font-medium flex items-center gap-1"
//                     style={{ color: colors.tertiary }}
//                 >
//                     {label}
//                     {required && <span style={{ color: colors.error }}>*</span>}
//                 </Label>
//             )}

//             {/* Input Field */}
//             <div className="relative">
//                 <Input
//                     id="role-select"
//                     placeholder={placeholder}
//                     value={value}
//                     onChange={handleInputChange}
//                     onFocus={handleInputFocus}
//                     disabled={disabled}
//                     className="border focus:ring-2 pr-10 transition-all duration-200"
//                     style={{
//                         borderColor: isDropdownOpen ? colors.primary : colors.secondaryDark,
//                         backgroundColor: colors.lightBg
//                     }}
//                     autoComplete="off"
//                 />
//                 <button
//                     type="button"
//                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                     disabled={disabled}
//                     className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded transition-colors disabled:opacity-50"
//                 >
//                     <ChevronDown
//                         className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
//                         style={{ color: colors.neutral }}
//                     />
//                 </button>
//             </div>

//             {/* Helper Text */}
//             {helperText && (
//                 <p className="text-xs" style={{ color: colors.neutral }}>
//                     {helperText}
//                 </p>
//             )}

//             {/* Dropdown Menu */}
//             {isDropdownOpen && !disabled && (
//                 <div
//                     className="absolute top-full left-0 right-0 z-50 mt-1 border rounded-xl shadow-2xl overflow-hidden"
//                     style={{
//                         backgroundColor: colors.lightBg,
//                         borderColor: colors.secondaryDark,
//                         maxHeight: '400px'
//                     }}
//                 >
//                     {/* Search Results or Categories */}
//                     <div className="overflow-y-auto max-h-96">
//                         {searchTerm ? (
//                             /* Search Results */
//                             <div className="p-2">
//                                 {/* Search Header */}
//                                 <div className="flex items-center gap-2 p-2 mb-2 rounded-lg" style={{ backgroundColor: colors.primaryOpacity(0.05) }}>
//                                     <Search className="h-4 w-4" style={{ color: colors.primary }} />
//                                     <span className="text-sm font-medium" style={{ color: colors.primary }}>
//                                         Search Results for "{searchTerm}"
//                                     </span>
//                                     <Badge variant="secondary" className="ml-auto text-xs">
//                                         {filteredRoles.length} found
//                                     </Badge>
//                                 </div>

//                                 {filteredRoles.length > 0 ? (
//                                     <div className="space-y-1">
//                                         {filteredRoles.slice(0, 15).map((role, index) => (
//                                             <button
//                                                 key={index}
//                                                 type="button"
//                                                 onClick={() => handleRoleSelect(role)}
//                                                 className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium group"
//                                                 style={{ color: colors.tertiary }}
//                                             >
//                                                 <div className="flex items-center justify-between">
//                                                     <span>{role}</span>
//                                                     <Briefcase className="h-3 w-3 opacity-0 group-hover:opacity-50 transition-opacity" />
//                                                 </div>
//                                             </button>
//                                         ))}
//                                         {filteredRoles.length > 15 && (
//                                             <div className="px-3 py-2 text-xs text-center" style={{ color: colors.neutral }}>
//                                                 ... and {filteredRoles.length - 15} more matches
//                                             </div>
//                                         )}
//                                     </div>
//                                 ) : (
//                                     <div className="p-4 text-center">
//                                         <p className="text-sm mb-2" style={{ color: colors.neutral }}>
//                                             No pre-defined roles found for "{searchTerm}"
//                                         </p>
//                                         <button
//                                             type="button"
//                                             onClick={() => handleRoleSelect(searchTerm)}
//                                             className="text-sm font-medium px-3 py-1 rounded transition-colors"
//                                             style={{
//                                                 color: colors.primary,
//                                                 backgroundColor: colors.primaryOpacity(0.1)
//                                             }}
//                                         >
//                                             Use "{searchTerm}" as custom role
//                                         </button>
//                                     </div>
//                                 )}
//                             </div>
//                         ) : (
//                             /* Category View */
//                             <>
//                                 {/* Featured Roles */}
//                                 <div>
//                                     <div
//                                         className="px-4 py-3 text-sm font-bold border-b sticky top-0 flex items-center gap-2"
//                                         style={{
//                                             backgroundColor: colors.primaryOpacity(0.1),
//                                             color: colors.primary,
//                                             borderColor: colors.primaryOpacity(0.2)
//                                         }}
//                                     >
//                                         <Star className="h-4 w-4" />
//                                         Most Popular Roles
//                                     </div>
//                                     <div className="p-2 grid grid-cols-2 gap-1">
//                                         {featuredRoles.map((role, index) => (
//                                             <button
//                                                 key={index}
//                                                 type="button"
//                                                 onClick={() => handleRoleSelect(role)}
//                                                 className="text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
//                                                 style={{ color: colors.tertiary }}
//                                             >
//                                                 {role}
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* All Categories */}
//                                 {jobCategories.filter(cat => !cat.featured).map((category) => (
//                                     <div key={category.name}>
//                                         <div
//                                             className="px-4 py-2 text-xs font-semibold border-b sticky top-0 flex items-center gap-2"
//                                             style={{
//                                                 backgroundColor: colors.secondaryOpacity(0.7),
//                                                 color: colors.tertiary,
//                                                 borderColor: colors.secondaryDark
//                                             }}
//                                         >
//                                             {category.icon}
//                                             {category.name}
//                                             <Badge variant="outline" className="ml-auto text-xs">
//                                                 {category.roles.length}
//                                             </Badge>
//                                         </div>
//                                         <div className="p-1">
//                                             {category.roles.slice(0, 6).map((role, index) => (
//                                                 <button
//                                                     key={index}
//                                                     type="button"
//                                                     onClick={() => handleRoleSelect(role)}
//                                                     className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
//                                                     style={{ color: colors.tertiary }}
//                                                 >
//                                                     {role}
//                                                 </button>
//                                             ))}
//                                             {category.roles.length > 6 && (
//                                                 <div className="px-3 py-1 text-xs" style={{ color: colors.neutral }}>
//                                                     ... and {category.roles.length - 6} more in {category.name.replace(/[^\w\s]/gi, '')}
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </>
//                         )}
//                     </div>

//                     {/* Footer */}
//                     <div
//                         className="border-t p-3"
//                         style={{
//                             borderColor: colors.secondaryDark,
//                             backgroundColor: colors.secondaryOpacity(0.3)
//                         }}
//                     >
//                         <div className="text-xs text-center" style={{ color: colors.neutral }}>
//                             💡 Can't find your role? Just type any custom job title above
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }


"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Search, Briefcase, Star } from 'lucide-react';
import { colors } from '@/components/Global/colors';
import { jobCategories } from '@/data/roles';

interface SearchableRoleSelectProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
    helperText?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
}

interface JobCategory {
    name: string;
    icon: React.ReactNode;
    roles: string[];
    featured?: boolean;
}

export function SearchableRoleSelect({
    value,
    onChange,
    placeholder = "Search or select a job role...",
    label = "Target Role",
    helperText = "Select from popular roles or type your own custom job title",
    required = false,
    disabled = false,
    className = ""
}: SearchableRoleSelectProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);


    // Flatten all roles for searching
    const allRoles = jobCategories.flatMap(category => category.roles);

    // Remove duplicates and sort
    const uniqueRoles = Array.from(new Set(allRoles)).sort();

    // Filter roles based on search term
    const filteredRoles = uniqueRoles.filter(role =>
        role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Get featured roles (most popular)
    const featuredCategory = jobCategories.find(cat => cat.featured);
    const featuredRoles = featuredCategory?.roles || [];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
                setSearchTerm('');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleRoleSelect = (role: string) => {
        onChange(role);
        setSearchTerm('');
        setIsDropdownOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        onChange(inputValue);
        setSearchTerm(inputValue);
        setIsDropdownOpen(true);
    };

    const handleInputFocus = () => {
        setIsDropdownOpen(true);
        setSearchTerm(value);
    };

    return (
        <div className={`space-y-2 relative ${className}`} ref={dropdownRef}>
            {/* Label */}
            {label && (
                <Label
                    htmlFor="role-select"
                    className="text-sm font-medium flex items-center gap-1"
                    style={{ color: colors.tertiary }}
                >
                    {label}
                    {required && <span style={{ color: colors.error }}>*</span>}
                </Label>
            )}

            {/* Input Field */}
            <div className="relative">
                <Input
                    id="role-select"
                    placeholder={placeholder}
                    value={value}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    disabled={disabled}
                    className="border focus:ring-2 pr-10 transition-all duration-200"
                    style={{
                        borderColor: isDropdownOpen ? colors.primary : colors.secondaryDark,
                        backgroundColor: colors.lightBg
                    }}
                    autoComplete="off"
                />
                <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    disabled={disabled}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded transition-colors disabled:opacity-50"
                >
                    <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                        style={{ color: colors.neutral }}
                    />
                </button>
            </div>

            {/* Helper Text */}
            {helperText && (
                <p className="text-xs" style={{ color: colors.neutral }}>
                    {helperText}
                </p>
            )}

            {/* Dropdown Menu */}
            {isDropdownOpen && !disabled && (
                <div
                    className="absolute top-full left-0 right-0 z-99999999 mt-1 border rounded-xl shadow-2xl overflow-hidden"
                    style={{
                        backgroundColor: colors.lightBg,
                        borderColor: colors.secondaryDark,
                        maxHeight: '400px'
                    }}
                >
                    {/* Search Results or Categories */}
                    <div className="overflow-y-auto h-96">
                        {searchTerm ? (
                            /* Search Results */
                            <div className="p-2">
                                {/* Search Header */}
                                <div className="flex items-center gap-2 p-2 mb-2 rounded-lg" style={{ backgroundColor: colors.primaryOpacity(0.05) }}>
                                    <Search className="h-4 w-4" style={{ color: colors.primary }} />
                                    <span className="text-sm font-medium" style={{ color: colors.primary }}>
                                        Search Results for "{searchTerm}"
                                    </span>
                                    <Badge variant="secondary" className="ml-auto text-xs">
                                        {filteredRoles.length} found
                                    </Badge>
                                </div>

                                {filteredRoles.length > 0 ? (
                                    <div className="space-y-1">
                                        {filteredRoles.slice(0, 15).map((role, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                onClick={() => handleRoleSelect(role)}
                                                className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium group"
                                                style={{ color: colors.tertiary }}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span>{role}</span>
                                                    <Briefcase className="h-3 w-3 opacity-0 group-hover:opacity-50 transition-opacity" />
                                                </div>
                                            </button>
                                        ))}
                                        {filteredRoles.length > 15 && (
                                            <div className="px-3 py-2 text-xs text-center" style={{ color: colors.neutral }}>
                                                ... and {filteredRoles.length - 15} more matches
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="p-4 text-center">
                                        <p className="text-sm mb-2" style={{ color: colors.neutral }}>
                                            No pre-defined roles found for "{searchTerm}"
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => handleRoleSelect(searchTerm)}
                                            className="text-sm font-medium px-3 py-1 rounded transition-colors"
                                            style={{
                                                color: colors.primary,
                                                backgroundColor: colors.primaryOpacity(0.1)
                                            }}
                                        >
                                            Use "{searchTerm}" as custom role
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            /* Category View */
                            <>
                                {/* Featured Roles */}
                                <div>
                                    <div
                                        className="px-4 py-3 text-sm font-bold border-b sticky top-0 flex items-center gap-2"
                                        style={{
                                            backgroundColor: colors.primaryOpacity(0.1),
                                            color: colors.primary,
                                            borderColor: colors.primaryOpacity(0.2)
                                        }}
                                    >
                                        <Star className="h-4 w-4" />
                                        Most Popular Roles
                                    </div>
                                    <div className="p-2 grid grid-cols-2 gap-1">
                                        {featuredRoles.map((role, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                onClick={() => handleRoleSelect(role)}
                                                className="text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
                                                style={{ color: colors.tertiary }}
                                            >
                                                {role}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* All Categories */}
                                {jobCategories.filter(cat => !cat.featured).map((category) => (
                                    <div key={category.name}>
                                        <div
                                            className="px-4 py-2 text-xs font-semibold border-b sticky top-0 flex items-center gap-2"
                                            style={{
                                                backgroundColor: colors.secondaryOpacity(0.7),
                                                color: colors.tertiary,
                                                borderColor: colors.secondaryDark
                                            }}
                                        >
                                            {category.icon}
                                            {category.name}
                                            <Badge variant="outline" className="ml-auto text-xs">
                                                {category.roles.length}
                                            </Badge>
                                        </div>
                                        <div className="p-1">
                                            {category.roles.slice(0, 6).map((role, index) => (
                                                <button
                                                    key={index}
                                                    type="button"
                                                    onClick={() => handleRoleSelect(role)}
                                                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                                                    style={{ color: colors.tertiary }}
                                                >
                                                    {role}
                                                </button>
                                            ))}
                                            {category.roles.length > 6 && (
                                                <div className="px-3 py-1 text-xs" style={{ color: colors.neutral }}>
                                                    ... and {category.roles.length - 6} more in {category.name.replace(/[^\w\s]/gi, '')}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>

                    {/* Footer */}
                    <div
                        className="border-t p-3"
                        style={{
                            borderColor: colors.secondaryDark,
                            backgroundColor: colors.secondaryOpacity(0.3)
                        }}
                    >
                        <div className="text-xs text-center" style={{ color: colors.neutral }}>
                            💡 Can't find your role? Just type any custom job title above
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}