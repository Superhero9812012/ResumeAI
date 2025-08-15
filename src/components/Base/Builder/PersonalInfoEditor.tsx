// // // import { useState } from 'react';
// // // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // // import { Button } from '@/components/ui/button';
// // // import { Input } from '@/components/ui/input';
// // // import { Label } from '@/components/ui/label';
// // // import { Badge } from '@/components/ui/badge';
// // // import {
// // //     User,
// // //     Mail,
// // //     Phone,
// // //     MapPin,
// // //     Globe,
// // //     Github,
// // //     Save,
// // //     X,
// // //     Sparkles,
// // //     RefreshCw,
// // //     Eye,
// // //     EyeOff,
// // //     type LucideIcon
// // // } from 'lucide-react';

// // // // Type Definitions
// // // interface PersonalInfo {
// // //     name: string;
// // //     title: string;
// // //     email: string;
// // //     phone: string;
// // //     location: string;
// // //     website: string;
// // //     github: string;
// // // }

// // // interface PersonalInfoEditorProps {
// // //     data: PersonalInfo;
// // //     onUpdate: (data: PersonalInfo) => void;
// // //     onClose: () => void;
// // // }

// // // interface InputField {
// // //     key: keyof PersonalInfo;
// // //     label: string;
// // //     icon: LucideIcon;
// // //     placeholder: string;
// // //     required?: boolean;
// // //     type?: string;
// // // }

// // // type FormErrors = Partial<Record<keyof PersonalInfo, string>>;

// // // export function PersonalInfoEditor({ data, onUpdate, onClose }: PersonalInfoEditorProps) {
// // //     const [formData, setFormData] = useState<PersonalInfo>(data);
// // //     const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);
// // //     const [errors, setErrors] = useState<FormErrors>({});

// // //     const handleChange = (field: keyof PersonalInfo, value: string) => {
// // //         setFormData(prev => ({
// // //             ...prev,
// // //             [field]: value
// // //         }));

// // //         if (errors[field]) {
// // //             setErrors(prev => {
// // //                 const newErrors = { ...prev };
// // //                 delete newErrors[field];
// // //                 return newErrors;
// // //             });
// // //         }
// // //     };

// // //     const validateForm = (): boolean => {
// // //         const newErrors: FormErrors = {};

// // //         if (!formData.name.trim()) newErrors.name = 'Name is required';
// // //         if (!formData.email.trim()) newErrors.email = 'Email is required';
// // //         else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
// // //         if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
// // //         if (!formData.location.trim()) newErrors.location = 'Location is required';

// // //         setErrors(newErrors);
// // //         return Object.keys(newErrors).length === 0;
// // //     };

// // //     const handleSave = () => {
// // //         if (validateForm()) {
// // //             onUpdate(formData);
// // //             onClose();
// // //         }
// // //     };

// // //     const handleOptimize = () => {
// // //         const optimizedData: PersonalInfo = {
// // //             ...formData,
// // //             title: formData.title || 'Software Engineer',
// // //             website: formData.website || 'linkedin.com/in/yourprofile',
// // //         };
// // //         setFormData(optimizedData);
// // //     };

// // //     const inputFields: InputField[] = [
// // //         { key: 'name', label: 'Full Name', icon: User, placeholder: 'John Doe', required: true },
// // //         { key: 'title', label: 'Professional Title', icon: User, placeholder: 'Software Engineer' },
// // //         { key: 'email', label: 'Email Address', icon: Mail, placeholder: 'john@example.com', required: true, type: 'email' },
// // //         { key: 'phone', label: 'Phone Number', icon: Phone, placeholder: '+1 (555) 123-4567', required: true },
// // //         { key: 'location', label: 'Location', icon: MapPin, placeholder: 'City, State', required: true },
// // //         { key: 'website', label: 'LinkedIn URL', icon: Globe, placeholder: 'linkedin.com/in/yourprofile' },
// // //         { key: 'github', label: 'GitHub URL', icon: Github, placeholder: 'github.com/yourusername' }
// // //     ];

// // //     if (isPreviewMode) {
// // //         return (
// // //             <Card>
// // //                 <CardHeader className="flex flex-row items-center justify-between">
// // //                     <CardTitle className="flex items-center gap-2 text-sm">
// // //                         <User className="h-5 w-5" />
// // //                         Personal Information Preview
// // //                     </CardTitle>
// // //                     <div className="flex items-center gap-2">
// // //                         <Button variant="outline" size="sm" onClick={() => setIsPreviewMode(false)}>
// // //                             <EyeOff className="h-4 w-4 mr-2" />
// // //                             Edit Mode
// // //                         </Button>
// // //                         <Button size="sm" onClick={handleSave}>
// // //                             <Save className="h-4 w-4 mr-2" />
// // //                             Save Changes
// // //                         </Button>
// // //                         <Button variant="outline" size="sm" onClick={onClose}>
// // //                             <X className="h-4 w-4" />
// // //                         </Button>
// // //                     </div>
// // //                 </CardHeader>
// // //                 <CardContent>
// // //                     <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 rounded-lg text-white">
// // //                         <div className="flex items-center gap-4">
// // //                             <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
// // //                                 <User className="h-8 w-8 text-white" />
// // //                             </div>
// // //                             <div>
// // //                                 <h2 className="text-2xl font-bold">{formData.name}</h2>
// // //                                 <p className="text-blue-100 text-lg">{formData.title}</p>
// // //                             </div>
// // //                         </div>
// // //                         <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-sm">
// // //                             <div className="flex items-center gap-2">
// // //                                 <Mail className="h-4 w-4" />
// // //                                 {formData.email}
// // //                             </div>
// // //                             <div className="flex items-center gap-2">
// // //                                 <Phone className="h-4 w-4" />
// // //                                 {formData.phone}
// // //                             </div>
// // //                             <div className="flex items-center gap-2">
// // //                                 <MapPin className="h-4 w-4" />
// // //                                 {formData.location}
// // //                             </div>
// // //                             {formData.website && (
// // //                                 <div className="flex items-center gap-2">
// // //                                     <Globe className="h-4 w-4" />
// // //                                     {formData.website}
// // //                                 </div>
// // //                             )}
// // //                         </div>
// // //                     </div>
// // //                 </CardContent>
// // //             </Card>
// // //         );
// // //     }

// // //     return (
// // //         <Card>
// // //             <CardHeader className="flex flex-row items-center justify-between">
// // //                 <div>
// // //                     <CardTitle className="flex items-center gap-2 text-sm">
// // //                         <User className="h-5 w-5" />
// // //                         Edit Personal Information
// // //                     </CardTitle>
// // //                     <p className="text-xs text-gray-600 mt-1">
// // //                         Update your contact details and professional information
// // //                     </p>
// // //                 </div>
// // //                 <div className="flex items-center gap-2">
// // //                     <Button variant="outline" size="sm" onClick={handleOptimize}>
// // //                         <Sparkles className="h-4 w-4 mr-2" />
// // //                         AI Optimize
// // //                     </Button>
// // //                     <Button variant="outline" size="sm" onClick={() => setIsPreviewMode(true)}>
// // //                         <Eye className="h-4 w-4 mr-2" />
// // //                         Preview
// // //                     </Button>
// // //                     <Button size="sm" onClick={handleSave}>
// // //                         <Save className="h-4 w-4 mr-2" />
// // //                         Save
// // //                     </Button>
// // //                     <Button variant="outline" size="sm" onClick={onClose}>
// // //                         <X className="h-4 w-4" />
// // //                     </Button>
// // //                 </div>
// // //             </CardHeader>
// // //             <CardContent className="space-y-6">
// // //                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
// // //                     <h4 className="font-medium text-blue-900 mb-2">💡 Optimization Tips</h4>
// // //                     <ul className="text-sm text-blue-800 space-y-1">
// // //                         <li>• Use your full professional name as it appears on official documents</li>
// // //                         <li>• Include a clear professional title that matches your target role</li>
// // //                         <li>• Use a professional email address (avoid nicknames)</li>
// // //                         <li>• Include LinkedIn profile for better networking opportunities</li>
// // //                     </ul>
// // //                 </div>

// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                     {inputFields.map((field) => (
// // //                         <div key={field.key} className="space-y-2">
// // //                             <Label htmlFor={field.key} className="flex items-center gap-2">
// // //                                 <field.icon className="h-4 w-4" />
// // //                                 {field.label}
// // //                                 {field.required && <Badge variant="destructive" className="text-xs">Required</Badge>}
// // //                             </Label>
// // //                             <Input
// // //                                 id={field.key}
// // //                                 type={field.type || 'text'}
// // //                                 value={formData[field.key] || ''}
// // //                                 onChange={(e) => handleChange(field.key, e.target.value)}
// // //                                 placeholder={field.placeholder}
// // //                                 className={errors[field.key] ? 'border-red-500' : ''}
// // //                             />
// // //                             {errors[field.key] && (
// // //                                 <p className="text-sm text-red-600">{errors[field.key]}</p>
// // //                             )}
// // //                         </div>
// // //                     ))}
// // //                 </div>

// // //                 <div className="flex items-center justify-between pt-4 border-t">
// // //                     <div className="text-sm text-gray-600">
// // //                         {Object.keys(errors).length === 0 ? (
// // //                             <span className="text-green-600">✓ All required fields completed</span>
// // //                         ) : (
// // //                             <span className="text-red-600">
// // //                                 {Object.keys(errors).length} field(s) need attention
// // //                             </span>
// // //                         )}
// // //                     </div>
// // //                     <div className="text-sm text-gray-500">
// // //                         Last updated: {new Date().toLocaleTimeString()}
// // //                     </div>
// // //                 </div>
// // //             </CardContent>
// // //         </Card>
// // //     );
// // // }


// // import { useState } from 'react';
// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Button } from '@/components/ui/button';
// // import { Input } from '@/components/ui/input';
// // import { Label } from '@/components/ui/label';
// // import { Badge } from '@/components/ui/badge';
// // import {
// //     User, Mail, Phone, MapPin, Globe, Github, Save, X, Sparkles, Eye, EyeOff, Loader2, type LucideIcon
// // } from 'lucide-react';

// // interface PersonalInfo {
// //     name: string;
// //     title: string;
// //     email: string;
// //     phone: string;
// //     location: string;
// //     website: string;
// //     github: string;
// // }

// // interface PersonalInfoEditorProps {
// //     data: PersonalInfo;
// //     onUpdate: (data: PersonalInfo) => Promise<void>;
// //     onClose: () => void;
// // }

// // interface InputField {
// //     key: keyof PersonalInfo;
// //     label: string;
// //     icon: LucideIcon;
// //     placeholder: string;
// //     required?: boolean;
// //     type?: string;
// // }

// // type FormErrors = Partial<Record<keyof PersonalInfo, string>>;

// // export function PersonalInfoEditor({ data, onUpdate, onClose }: PersonalInfoEditorProps) {
// //     const [formData, setFormData] = useState<PersonalInfo>(data);
// //     const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);
// //     const [errors, setErrors] = useState<FormErrors>({});
// //     const [isSaving, setIsSaving] = useState<boolean>(false);

// //     const handleChange = (field: keyof PersonalInfo, value: string) => {
// //         setFormData(prev => ({
// //             ...prev,
// //             [field]: value
// //         }));
// //         if (errors[field]) {
// //             setErrors(prev => {
// //                 const newErrors = { ...prev };
// //                 delete newErrors[field];
// //                 return newErrors;
// //             });
// //         }
// //     };

// //     const validateForm = (): boolean => {
// //         const newErrors: FormErrors = {};
// //         if (!formData.name.trim()) newErrors.name = 'Name is required';
// //         if (!formData.email.trim()) newErrors.email = 'Email is required';
// //         else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
// //         if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
// //         if (!formData.location.trim()) newErrors.location = 'Location is required';
// //         setErrors(newErrors);
// //         return Object.keys(newErrors).length === 0;
// //     };

// //     const handleSave = async () => {
// //         if (!validateForm()) return;
// //         setIsSaving(true);
// //         try {
// //             await onUpdate(formData);
// //             onClose();
// //         } catch (error) {
// //             console.error("Failed to save personal info:", error);
// //         } finally {
// //             setIsSaving(false);
// //         }
// //     };

// //     const handleOptimize = () => {
// //         const optimizedData: PersonalInfo = {
// //             ...formData,
// //             title: formData.title || 'Software Engineer',
// //             website: formData.website || 'linkedin.com/in/yourprofile',
// //         };
// //         setFormData(optimizedData);
// //     };

// //     const inputFields: InputField[] = [
// //         { key: 'name', label: 'Full Name', icon: User, placeholder: 'John Doe', required: true },
// //         { key: 'title', label: 'Professional Title', icon: User, placeholder: 'Software Engineer' },
// //         { key: 'email', label: 'Email Address', icon: Mail, placeholder: 'john@example.com', required: true, type: 'email' },
// //         { key: 'phone', label: 'Phone Number', icon: Phone, placeholder: '+1 (555) 123-4567', required: true },
// //         { key: 'location', label: 'Location', icon: MapPin, placeholder: 'City, State', required: true },
// //         { key: 'website', label: 'LinkedIn URL', icon: Globe, placeholder: 'linkedin.com/in/yourprofile' },
// //         { key: 'github', label: 'GitHub URL', icon: Github, placeholder: 'github.com/yourusername' }
// //     ];

// //     if (isPreviewMode) {
// //         return (
// //             <Card>
// //                 <CardHeader className="flex flex-row items-center justify-between">
// //                     <CardTitle className="flex items-center gap-2 text-sm">
// //                         <User className="h-5 w-5" />
// //                         Personal Information Preview
// //                     </CardTitle>
// //                     <div className="flex items-center gap-2">
// //                         <Button variant="outline" size="sm" onClick={() => setIsPreviewMode(false)}>
// //                             <EyeOff className="h-4 w-4 mr-2" />
// //                             Edit Mode
// //                         </Button>
// //                         <Button size="sm" onClick={handleSave} disabled={isSaving}>
// //                             {isSaving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
// //                             {isSaving ? 'Saving...' : 'Save Changes'}
// //                         </Button>
// //                         <Button variant="outline" size="sm" onClick={onClose} disabled={isSaving}>
// //                             <X className="h-4 w-4" />
// //                         </Button>
// //                     </div>
// //                 </CardHeader>
// //                 <CardContent>
// //                     <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 rounded-lg text-white">
// //                         <div className="flex items-center gap-4">
// //                             <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
// //                                 <User className="h-8 w-8 text-white" />
// //                             </div>
// //                             <div>
// //                                 <h2 className="text-2xl font-bold">{formData.name}</h2>
// //                                 <p className="text-blue-100 text-lg">{formData.title}</p>
// //                             </div>
// //                         </div>
// //                         <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-sm">
// //                             <div className="flex items-center gap-2"><Mail className="h-4 w-4" />{formData.email}</div>
// //                             <div className="flex items-center gap-2"><Phone className="h-4 w-4" />{formData.phone}</div>
// //                             <div className="flex items-center gap-2"><MapPin className="h-4 w-4" />{formData.location}</div>
// //                             {formData.website && (<div className="flex items-center gap-2"><Globe className="h-4 w-4" />{formData.website}</div>)}
// //                         </div>
// //                     </div>
// //                 </CardContent>
// //             </Card>
// //         );
// //     }

// //     return (
// //         <Card>
// //             <CardHeader className="flex flex-row items-center justify-between">
// //                 <div>
// //                     <CardTitle className="flex items-center gap-2 text-sm">
// //                         <User className="h-5 w-5" />
// //                         Edit Personal Information
// //                     </CardTitle>
// //                     <p className="text-xs text-gray-600 mt-1">
// //                         Update your contact details and professional information
// //                     </p>
// //                 </div>
// //                 <div className="flex items-center gap-2">
// //                     <Button variant="outline" size="sm" onClick={handleOptimize}>
// //                         <Sparkles className="h-4 w-4 mr-2" />
// //                         AI Optimize
// //                     </Button>
// //                     <Button variant="outline" size="sm" onClick={() => setIsPreviewMode(true)}>
// //                         <Eye className="h-4 w-4 mr-2" />
// //                         Preview
// //                     </Button>
// //                     <Button size="sm" onClick={handleSave} disabled={isSaving}>
// //                         {isSaving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
// //                         {isSaving ? 'Saving...' : 'Save'}
// //                     </Button>
// //                     <Button variant="outline" size="sm" onClick={onClose} disabled={isSaving}>
// //                         <X className="h-4 w-4" />
// //                     </Button>
// //                 </div>
// //             </CardHeader>
// //             <CardContent className="space-y-6">
// //                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
// //                     <h4 className="font-medium text-blue-900 mb-2">💡 Optimization Tips</h4>
// //                     <ul className="text-sm text-blue-800 space-y-1">
// //                         <li>• Use your full professional name as it appears on official documents</li>
// //                         <li>• Include a clear professional title that matches your target role</li>
// //                         <li>• Use a professional email address (avoid nicknames)</li>
// //                         <li>• Include LinkedIn profile for better networking opportunities</li>
// //                     </ul>
// //                 </div>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                     {inputFields.map((field) => (
// //                         <div key={field.key} className="space-y-2">
// //                             <Label htmlFor={field.key} className="flex items-center gap-2">
// //                                 <field.icon className="h-4 w-4" />
// //                                 {field.label}
// //                                 {field.required && <Badge variant="destructive" className="text-xs">Required</Badge>}
// //                             </Label>
// //                             <Input
// //                                 id={field.key}
// //                                 type={field.type || 'text'}
// //                                 value={formData[field.key] || ''}
// //                                 onChange={(e) => handleChange(field.key, e.target.value)}
// //                                 placeholder={field.placeholder}
// //                                 className={errors[field.key] ? 'border-red-500' : ''}
// //                             />
// //                             {errors[field.key] && (
// //                                 <p className="text-sm text-red-600">{errors[field.key]}</p>
// //                             )}
// //                         </div>
// //                     ))}
// //                 </div>
// //                 <div className="flex items-center justify-between pt-4 border-t">
// //                     <div className="text-sm text-gray-600">
// //                         {Object.keys(errors).length === 0 ? (
// //                             <span className="text-green-600">✓ All required fields completed</span>
// //                         ) : (
// //                             <span className="text-red-600">{Object.keys(errors).length} field(s) need attention</span>
// //                         )}
// //                     </div>
// //                     <div className="text-sm text-gray-500">
// //                         Last updated: {new Date().toLocaleTimeString()}
// //                     </div>
// //                 </div>
// //             </CardContent>
// //         </Card>
// //     );
// // }

// import { useState, useEffect } from 'react'; // Import useEffect
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Badge } from '@/components/ui/badge';
// import { User, Mail, Phone, MapPin, Globe, Github, Save, X, Sparkles, Eye, EyeOff, Loader2, type LucideIcon } from 'lucide-react';

// interface PersonalInfo { name: string; title: string; email: string; phone: string; location: string; website: string; github: string; }

// // Change onUpdate to be async
// interface PersonalInfoEditorProps { data: PersonalInfo; onUpdate: (data: PersonalInfo) => Promise<void>; onClose: () => void; }

// interface InputField { key: keyof PersonalInfo; label: string; icon: LucideIcon; placeholder: string; required?: boolean; type?: string; }
// type FormErrors = Partial<Record<keyof PersonalInfo, string>>;

// export function PersonalInfoEditor({ data, onUpdate, onClose }: PersonalInfoEditorProps) {
//     const [formData, setFormData] = useState<PersonalInfo>(data);
//     const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);
//     const [errors, setErrors] = useState<FormErrors>({});
//     const [isSaving, setIsSaving] = useState<boolean>(false);

//     // This hook keeps the component's state in sync with its props.
//     useEffect(() => {
//         setFormData(data);
//     }, [data]);

//     const handleChange = (field: keyof PersonalInfo, value: string) => {
//         setFormData(prev => ({ ...prev, [field]: value }));
//         if (errors[field]) {
//             setErrors(prev => {
//                 const newErrors = { ...prev };
//                 delete newErrors[field];
//                 return newErrors;
//             });
//         }
//     };

//     const validateForm = (): boolean => {
//         const newErrors: FormErrors = {};
//         if (!formData.name.trim()) newErrors.name = 'Name is required';
//         if (!formData.email.trim()) newErrors.email = 'Email is required';
//         else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
//         if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
//         if (!formData.location.trim()) newErrors.location = 'Location is required';
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     // Make this function async and await the update
//     const handleSave = async () => {
//         if (!validateForm()) return;
//         setIsSaving(true);
//         try {
//             await onUpdate(formData); // Wait for the parent to finish saving
//             onClose(); // Only close after the save is complete
//         } catch (error) {
//             console.error("Failed to save personal info:", error);
//             // Optionally show an error toast to the user here
//         } finally {
//             setIsSaving(false);
//         }
//     };

//     const handleOptimize = () => {
//         setFormData({ ...formData, title: formData.title || 'Software Engineer', website: formData.website || 'linkedin.com/in/yourprofile' });
//     };

//     const inputFields: InputField[] = [
//         { key: 'name', label: 'Full Name', icon: User, placeholder: 'John Doe', required: true },
//         { key: 'title', label: 'Professional Title', icon: User, placeholder: 'Software Engineer' },
//         { key: 'email', label: 'Email Address', icon: Mail, placeholder: 'john@example.com', required: true, type: 'email' },
//         { key: 'phone', label: 'Phone Number', icon: Phone, placeholder: '+1 (555) 123-4567', required: true },
//         { key: 'location', label: 'Location', icon: MapPin, placeholder: 'City, State', required: true },
//         { key: 'website', label: 'LinkedIn URL', icon: Globe, placeholder: 'linkedin.com/in/yourprofile' },
//         { key: 'github', label: 'GitHub URL', icon: Github, placeholder: 'github.com/yourusername' }
//     ];

//     if (isPreviewMode) {
//         return (
//             <Card>
//                 <CardHeader className="flex flex-row items-center justify-between">
//                     <CardTitle className="flex items-center gap-2 text-sm"><User className="h-5 w-5" />Personal Information Preview</CardTitle>
//                     <div className="flex items-center gap-2">
//                         <Button variant="outline" size="sm" onClick={() => setIsPreviewMode(false)}><EyeOff className="h-4 w-4 mr-2" />Edit Mode</Button>
//                         <Button size="sm" onClick={handleSave} disabled={isSaving}>{isSaving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}{isSaving ? 'Saving...' : 'Save Changes'}</Button>
//                         <Button variant="outline" size="sm" onClick={onClose} disabled={isSaving}><X className="h-4 w-4" /></Button>
//                     </div>
//                 </CardHeader>
//                 <CardContent>
//                     <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 rounded-lg text-white">
//                         <div className="flex items-center gap-4">
//                             <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center"><User className="h-8 w-8 text-white" /></div>
//                             <div>
//                                 <h2 className="text-2xl font-bold">{formData.name}</h2>
//                                 <p className="text-blue-100 text-lg">{formData.title}</p>
//                             </div>
//                         </div>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-sm">
//                             <div className="flex items-center gap-2"><Mail className="h-4 w-4" />{formData.email}</div>
//                             <div className="flex items-center gap-2"><Phone className="h-4 w-4" />{formData.phone}</div>
//                             <div className="flex items-center gap-2"><MapPin className="h-4 w-4" />{formData.location}</div>
//                             {formData.website && (<div className="flex items-center gap-2"><Globe className="h-4 w-4" />{formData.website}</div>)}
//                         </div>
//                     </div>
//                 </CardContent>
//             </Card>
//         );
//     }

//     return (
//         <Card>
//             <CardHeader className="flex flex-row items-center justify-between">
//                 <div>
//                     <CardTitle className="flex items-center gap-2 text-sm"><User className="h-5 w-5" />Edit Personal Information</CardTitle>
//                     <p className="text-xs text-gray-600 mt-1">Update your contact details and professional information</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <Button variant="outline" size="sm" onClick={handleOptimize}><Sparkles className="h-4 w-4 mr-2" />AI Optimize</Button>
//                     <Button variant="outline" size="sm" onClick={() => setIsPreviewMode(true)}><Eye className="h-4 w-4 mr-2" />Preview</Button>
//                     <Button size="sm" onClick={handleSave} disabled={isSaving}>{isSaving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}{isSaving ? 'Saving...' : 'Save'}</Button>
//                     <Button variant="outline" size="sm" onClick={onClose} disabled={isSaving}><X className="h-4 w-4" /></Button>
//                 </div>
//             </CardHeader>
//             <CardContent className="space-y-6">
//                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//                     <h4 className="font-medium text-blue-900 mb-2">💡 Optimization Tips</h4>
//                     <ul className="text-sm text-blue-800 space-y-1">
//                         <li>• Use your full professional name as it appears on official documents</li>
//                         <li>• Include a clear professional title that matches your target role</li>
//                         <li>• Use a professional email address (avoid nicknames)</li>
//                         <li>• Include LinkedIn profile for better networking opportunities</li>
//                     </ul>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {inputFields.map((field) => (
//                         <div key={field.key} className="space-y-2">
//                             <Label htmlFor={field.key} className="flex items-center gap-2"><field.icon className="h-4 w-4" />{field.label}{field.required && <Badge variant="destructive" className="text-xs">Required</Badge>}</Label>
//                             <Input id={field.key} type={field.type || 'text'} value={formData[field.key] || ''} onChange={(e) => handleChange(field.key, e.target.value)} placeholder={field.placeholder} className={errors[field.key] ? 'border-red-500' : ''} />
//                             {errors[field.key] && (<p className="text-sm text-red-600">{errors[field.key]}</p>)}
//                         </div>
//                     ))}
//                 </div>
//                 <div className="flex items-center justify-between pt-4 border-t">
//                     <div className="text-sm text-gray-600">
//                         {Object.keys(errors).length === 0 ? (<span className="text-green-600">✓ All required fields completed</span>) : (<span className="text-red-600">{Object.keys(errors).length} field(s) need attention</span>)}
//                     </div>
//                     <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleTimeString()}</div>
//                 </div>
//             </CardContent>
//         </Card>
//     );
// }


import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Phone, MapPin, Globe, Github, Save, X, Sparkles, Eye, EyeOff, Loader2, type LucideIcon } from 'lucide-react';

interface PersonalInfo { name: string; title: string; email: string; phone: string; location: string; website: string; github: string; }
interface PersonalInfoEditorProps { data: PersonalInfo; onUpdate: (data: PersonalInfo) => void; onClose: () => void; }
interface InputField { key: keyof PersonalInfo; label: string; icon: LucideIcon; placeholder: string; required?: boolean; type?: string; }
type FormErrors = Partial<Record<keyof PersonalInfo, string>>;

export function PersonalInfoEditor({ data, onUpdate, onClose }: PersonalInfoEditorProps) {
    const [formData, setFormData] = useState<PersonalInfo>(data);
    const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);
    const [errors, setErrors] = useState<FormErrors>({});

    useEffect(() => {
        setFormData(data);
    }, [data]);

    const handleChange = (field: keyof PersonalInfo, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        if (!formData.location.trim()) newErrors.location = 'Location is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = () => {
        if (!validateForm()) return;
        onUpdate(formData);
        onClose();
    };

    const handleOptimize = () => {
        setFormData({ ...formData, title: formData.title || 'Software Engineer', website: formData.website || 'linkedin.com/in/yourprofile' });
    };

    const inputFields: InputField[] = [
        { key: 'name', label: 'Full Name', icon: User, placeholder: 'John Doe', required: true },
        { key: 'title', label: 'Professional Title', icon: User, placeholder: 'Software Engineer' },
        { key: 'email', label: 'Email Address', icon: Mail, placeholder: 'john@example.com', required: true, type: 'email' },
        { key: 'phone', label: 'Phone Number', icon: Phone, placeholder: '+1 (555) 123-4567', required: true },
        { key: 'location', label: 'Location', icon: MapPin, placeholder: 'City, State', required: true },
        { key: 'website', label: 'LinkedIn URL', icon: Globe, placeholder: 'linkedin.com/in/yourprofile' },
        { key: 'github', label: 'GitHub URL', icon: Github, placeholder: 'github.com/yourusername' }
    ];

    if (isPreviewMode) {
        return (
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-sm"><User className="h-5 w-5" />Personal Information Preview</CardTitle>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => setIsPreviewMode(false)}><EyeOff className="h-4 w-4 mr-2" />Edit Mode</Button>
                        <Button size="sm" onClick={handleSave}><Save className="h-4 w-4 mr-2" />Save Changes</Button>
                        <Button variant="outline" size="sm" onClick={onClose}><X className="h-4 w-4" /></Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 rounded-lg text-white">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center"><User className="h-8 w-8 text-white" /></div>
                            <div>
                                <h2 className="text-2xl font-bold">{formData.name}</h2>
                                <p className="text-blue-100 text-lg">{formData.title}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-sm">
                            <div className="flex items-center gap-2"><Mail className="h-4 w-4" />{formData.email}</div>
                            <div className="flex items-center gap-2"><Phone className="h-4 w-4" />{formData.phone}</div>
                            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" />{formData.location}</div>
                            {formData.website && (<div className="flex items-center gap-2"><Globe className="h-4 w-4" />{formData.website}</div>)}
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardHeader className="flex flex-col items-center gap-2.5 justify-between">
                <div className="flex flex-col items-center">
                    <CardTitle className="flex items-center gap-2 text-sm"><User className="h-5 w-5" />Edit Personal Information</CardTitle>
                    <p className="text-xs text-gray-600 mt-1">Update your contact details and professional information</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={handleOptimize}><Sparkles className="h-4 w-4 mr-2" />AI Optimize</Button>
                    <Button variant="outline" size="sm" onClick={() => setIsPreviewMode(true)}><Eye className="h-4 w-4 mr-2" />Preview</Button>
                    <Button size="sm" onClick={handleSave}><Save className="h-4 w-4 mr-2" />Save</Button>
                    <Button variant="outline" size="sm" onClick={onClose}><X className="h-4 w-4" /></Button>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2">💡 Optimization Tips</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Use your full professional name as it appears on official documents</li>
                        <li>• Include a clear professional title that matches your target role</li>
                        <li>• Use a professional email address (avoid nicknames)</li>
                        <li>• Include LinkedIn profile for better networking opportunities</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {inputFields.map((field) => (
                        <div key={field.key} className="space-y-2">
                            <Label htmlFor={field.key} className="flex items-center gap-2"><field.icon className="h-4 w-4" />{field.label}{field.required && <Badge variant="destructive" className="text-xs">Required</Badge>}</Label>
                            <Input id={field.key} type={field.type || 'text'} value={formData[field.key] || ''} onChange={(e) => handleChange(field.key, e.target.value)} placeholder={field.placeholder} className={errors[field.key] ? 'border-red-500' : ''} />
                            {errors[field.key] && (<p className="text-sm text-red-600">{errors[field.key]}</p>)}
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm text-gray-600">
                        {Object.keys(errors).length === 0 ? (<span className="text-green-600">✓ All required fields completed</span>) : (<span className="text-red-600">{Object.keys(errors).length} field(s) need attention</span>)}
                    </div>
                    <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleTimeString()}</div>
                </div>
            </CardContent>
        </Card>
    );
}