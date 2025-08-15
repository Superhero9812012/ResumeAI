// import { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { Badge } from '@/components/ui/badge';
// import {
//     GraduationCap,
//     Plus,
//     Trash2,
//     Save,
//     X,
//     Sparkles,
//     Calendar,
//     Building,
//     MapPin,
//     Award,
//     BookOpen,
//     Target,
//     Lightbulb,
//     ArrowUp,
//     ArrowDown,
//     Copy
// } from 'lucide-react';

// export function EducationEditor({ data, onUpdate, onClose }) {
//     const [education, setEducation] = useState(data);
//     const [expandedIndex, setExpandedIndex] = useState(0);

//     const addEducation = () => {
//         const newEducation = {
//             id: Date.now(),
//             degree: '',
//             major: '',
//             school: '',
//             location: '',
//             year: '',
//             gpa: '',
//             achievements: [],
//             coursework: [],
//             activities: []
//         };
//         setEducation([...education, newEducation]);
//         setExpandedIndex(education.length);
//     };

//     const removeEducation = (index) => {
//         const updated = education.filter((_, i) => i !== index);
//         setEducation(updated);
//         if (expandedIndex >= updated.length && updated.length > 0) {
//             setExpandedIndex(updated.length - 1);
//         }
//     };

//     const updateEducation = (index, field, value) => {
//         const updated = [...education];
//         updated[index] = { ...updated[index], [field]: value };
//         setEducation(updated);
//     };

//     const addToArray = (index, field, value) => {
//         if (value.trim()) {
//             const updated = [...education];
//             updated[index][field] = [...updated[index][field], value.trim()];
//             setEducation(updated);
//         }
//     };

//     const removeFromArray = (index, field, itemIndex) => {
//         const updated = [...education];
//         updated[index][field] = updated[index][field].filter((_, i) => i !== itemIndex);
//         setEducation(updated);
//     };

//     const moveEducation = (index, direction) => {
//         const updated = [...education];
//         const newIndex = direction === 'up' ? index - 1 : index + 1;
//         if (newIndex >= 0 && newIndex < updated.length) {
//             [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
//             setEducation(updated);
//             setExpandedIndex(newIndex);
//         }
//     };

//     const duplicateEducation = (index) => {
//         const edu = { ...education[index], id: Date.now() };
//         const updated = [...education];
//         updated.splice(index + 1, 0, edu);
//         setEducation(updated);
//     };

//     const optimizeEducation = (index) => {
//         const edu = education[index];
//         const suggestions = [];

//         // Add common coursework for CS degrees
//         if (edu.degree.toLowerCase().includes('computer science') && edu.coursework.length === 0) {
//             const commonCoursework = [
//                 'Data Structures and Algorithms',
//                 'Database Management Systems',
//                 'Software Engineering',
//                 'Operating Systems',
//                 'Computer Networks'
//             ];
//             updateEducation(index, 'coursework', commonCoursework);
//             suggestions.push('Added relevant coursework');
//         }

//         // Suggest activities if none
//         if (edu.activities.length === 0) {
//             updateEducation(index, 'activities', ['Technical Society Member']);
//             suggestions.push('Added technical activities');
//         }

//         return suggestions;
//     };

//     const degreeTypes = [
//         'Bachelor of Technology',
//         'Bachelor of Science',
//         'Master of Science',
//         'Master of Technology',
//         'Bachelor of Engineering',
//         'Master of Engineering',
//         'Bachelor of Arts',
//         'Master of Arts',
//         'Ph.D.',
//         'Associate Degree',
//         'Diploma'
//     ];

//     const commonMajors = [
//         'Computer Science and Engineering',
//         'Computer Science',
//         'Software Engineering',
//         'Information Technology',
//         'Electrical Engineering',
//         'Electronics and Communication',
//         'Data Science',
//         'Artificial Intelligence',
//         'Cybersecurity',
//         'Computer Applications'
//     ];

//     const getEducationScore = (edu) => {
//         let score = 0;
//         if (edu.degree.trim()) score += 25;
//         if (edu.school.trim()) score += 20;
//         if (edu.year.trim()) score += 15;
//         if (edu.gpa && parseFloat(edu.gpa) > 0) score += 15;
//         if (edu.coursework?.length > 0) score += 15;
//         if (edu.achievements?.length > 0 || edu.activities?.length > 0) score += 10;
//         return Math.min(score, 100);
//     };

//     const handleSave = () => {
//         const validEducation = education.filter(edu =>
//             edu.degree.trim() && edu.school.trim()
//         );
//         onUpdate(validEducation);
//         onClose();
//     };

//     return (
//         <Card>
//             <CardHeader className="flex flex-row items-center justify-between">
//                 <div>
//                     <CardTitle className="flex items-center gap-2">
//                         <GraduationCap className="h-5 w-5" />
//                         Education Background
//                         <Badge variant="outline">{education.length} {education.length === 1 ? 'Degree' : 'Degrees'}</Badge>
//                     </CardTitle>
//                     <p className="text-sm text-gray-600 mt-1">
//                         Add your educational qualifications and academic achievements
//                     </p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <Button variant="outline" size="sm" onClick={addEducation}>
//                         <Plus className="h-4 w-4 mr-2" />
//                         Add Education
//                     </Button>
//                     <Button size="sm" onClick={handleSave}>
//                         <Save className="h-4 w-4 mr-2" />
//                         Save
//                     </Button>
//                     <Button variant="outline" size="sm" onClick={onClose}>
//                         <X className="h-4 w-4" />
//                     </Button>
//                 </div>
//             </CardHeader>
//             <CardContent className="space-y-6">
//                 {/* Optimization Tips */}
//                 <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
//                     <h4 className="font-medium text-indigo-900 mb-2 flex items-center gap-2">
//                         <Lightbulb className="h-4 w-4" />
//                         Education Optimization Tips
//                     </h4>
//                     <ul className="text-sm text-indigo-800 space-y-1">
//                         <li>• List education in reverse chronological order (most recent first)</li>
//                         <li>• Include GPA if 3.5 or higher, relevant coursework, and academic achievements</li>
//                         <li>• Mention honors, scholarships, or academic recognitions</li>
//                         <li>• Add relevant projects, thesis work, or research experience</li>
//                         <li>• Include extracurricular activities that demonstrate leadership or technical skills</li>
//                     </ul>
//                 </div>

//                 {education.length === 0 ? (
//                     <div className="text-center py-12">
//                         <GraduationCap className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//                         <h3 className="text-lg font-semibold text-gray-600 mb-2">No Education Added Yet</h3>
//                         <p className="text-gray-500 mb-4">Add your educational background to get started</p>
//                         <Button onClick={addEducation}>
//                             <Plus className="h-4 w-4 mr-2" />
//                             Add Your First Education
//                         </Button>
//                     </div>
//                 ) : (
//                     <div className="space-y-4">
//                         {education.map((edu, index) => (
//                             <Card key={edu.id} className={`border-2 transition-all ${expandedIndex === index ? 'border-indigo-300 shadow-lg' : 'border-gray-200'}`}>
//                                 <CardHeader className="pb-3">
//                                     <div className="flex items-center justify-between">
//                                         <div className="flex items-center gap-3">
//                                             <Button
//                                                 variant="ghost"
//                                                 size="sm"
//                                                 onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
//                                                 className="p-2"
//                                             >
//                                                 <GraduationCap className="h-4 w-4" />
//                                             </Button>
//                                             <div>
//                                                 <h4 className="font-semibold">
//                                                     {edu.degree || `Education ${index + 1}`}
//                                                     {edu.major && ` in ${edu.major}`}
//                                                 </h4>
//                                                 <p className="text-sm text-gray-600">
//                                                     {edu.school} {edu.school && edu.location && '•'} {edu.location}
//                                                 </p>
//                                                 {edu.year && (
//                                                     <p className="text-xs text-gray-500 flex items-center gap-1">
//                                                         <Calendar className="h-3 w-3" />
//                                                         {edu.year}
//                                                     </p>
//                                                 )}
//                                             </div>
//                                         </div>
//                                         <div className="flex items-center gap-1">
//                                             <div className="flex items-center gap-1 mr-2">
//                                                 <div className={`w-2 h-2 rounded-full ${getEducationScore(edu) >= 80 ? 'bg-green-500' :
//                                                         getEducationScore(edu) >= 60 ? 'bg-yellow-500' : 'bg-red-500'
//                                                     }`}></div>
//                                                 <span className="text-xs text-gray-600">{getEducationScore(edu)}%</span>
//                                             </div>
//                                             <Button
//                                                 variant="outline"
//                                                 size="sm"
//                                                 onClick={() => moveEducation(index, 'up')}
//                                                 disabled={index === 0}
//                                             >
//                                                 <ArrowUp className="h-4 w-4" />
//                                             </Button>
//                                             <Button
//                                                 variant="outline"
//                                                 size="sm"
//                                                 onClick={() => moveEducation(index, 'down')}
//                                                 disabled={index === education.length - 1}
//                                             >
//                                                 <ArrowDown className="h-4 w-4" />
//                                             </Button>
//                                             <Button
//                                                 variant="outline"
//                                                 size="sm"
//                                                 onClick={() => duplicateEducation(index)}
//                                             >
//                                                 <Copy className="h-4 w-4" />
//                                             </Button>
//                                             <Button
//                                                 variant="outline"
//                                                 size="sm"
//                                                 onClick={() => removeEducation(index)}
//                                                 className="text-red-600 hover:text-red-700"
//                                             >
//                                                 <Trash2 className="h-4 w-4" />
//                                             </Button>
//                                         </div>
//                                     </div>
//                                 </CardHeader>

//                                 {expandedIndex === index && (
//                                     <CardContent className="pt-0 space-y-4">
//                                         {/* Basic Information */}
//                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                             <div className="space-y-2">
//                                                 <Label className="flex items-center gap-2">
//                                                     <Award className="h-4 w-4" />
//                                                     Degree Type *
//                                                 </Label>
//                                                 <Input
//                                                     value={edu.degree}
//                                                     onChange={(e) => updateEducation(index, 'degree', e.target.value)}
//                                                     placeholder="Bachelor of Technology"
//                                                     list={`degree-${index}`}
//                                                 />
//                                                 <datalist id={`degree-${index}`}>
//                                                     {degreeTypes.map(degree => (
//                                                         <option key={degree} value={degree} />
//                                                     ))}
//                                                 </datalist>
//                                             </div>
//                                             <div className="space-y-2">
//                                                 <Label className="flex items-center gap-2">
//                                                     <BookOpen className="h-4 w-4" />
//                                                     Major/Field of Study
//                                                 </Label>
//                                                 <Input
//                                                     value={edu.major}
//                                                     onChange={(e) => updateEducation(index, 'major', e.target.value)}
//                                                     placeholder="Computer Science and Engineering"
//                                                     list={`major-${index}`}
//                                                 />
//                                                 <datalist id={`major-${index}`}>
//                                                     {commonMajors.map(major => (
//                                                         <option key={major} value={major} />
//                                                     ))}
//                                                 </datalist>
//                                             </div>
//                                             <div className="space-y-2">
//                                                 <Label className="flex items-center gap-2">
//                                                     <Building className="h-4 w-4" />
//                                                     School/University *
//                                                 </Label>
//                                                 <Input
//                                                     value={edu.school}
//                                                     onChange={(e) => updateEducation(index, 'school', e.target.value)}
//                                                     placeholder="University Name"
//                                                 />
//                                             </div>
//                                             <div className="space-y-2">
//                                                 <Label className="flex items-center gap-2">
//                                                     <MapPin className="h-4 w-4" />
//                                                     Location
//                                                 </Label>
//                                                 <Input
//                                                     value={edu.location}
//                                                     onChange={(e) => updateEducation(index, 'location', e.target.value)}
//                                                     placeholder="City, State"
//                                                 />
//                                             </div>
//                                             <div className="space-y-2">
//                                                 <Label className="flex items-center gap-2">
//                                                     <Calendar className="h-4 w-4" />
//                                                     Year/Period *
//                                                 </Label>
//                                                 <Input
//                                                     value={edu.year}
//                                                     onChange={(e) => updateEducation(index, 'year', e.target.value)}
//                                                     placeholder="2019 - 2023"
//                                                 />
//                                             </div>
//                                             <div className="space-y-2">
//                                                 <Label className="flex items-center gap-2">
//                                                     <Target className="h-4 w-4" />
//                                                     GPA (Optional)
//                                                 </Label>
//                                                 <Input
//                                                     value={edu.gpa}
//                                                     onChange={(e) => updateEducation(index, 'gpa', e.target.value)}
//                                                     placeholder="3.8/4.0"
//                                                 />
//                                             </div>
//                                         </div>

//                                         {/* Relevant Coursework */}
//                                         <div className="space-y-3">
//                                             <div className="flex items-center justify-between">
//                                                 <Label className="flex items-center gap-2">
//                                                     <BookOpen className="h-4 w-4" />
//                                                     Relevant Coursework
//                                                 </Label>
//                                                 <Button
//                                                     variant="outline"
//                                                     size="sm"
//                                                     onClick={() => optimizeEducation(index)}
//                                                 >
//                                                     <Sparkles className="h-4 w-4 mr-2" />
//                                                     Auto-fill
//                                                 </Button>
//                                             </div>

//                                             <div className="flex flex-wrap gap-2 mb-3">
//                                                 {edu.coursework.map((course, courseIndex) => (
//                                                     <Badge
//                                                         key={courseIndex}
//                                                         variant="outline"
//                                                         className="bg-indigo-50 text-indigo-700 border-indigo-200 group cursor-pointer hover:bg-indigo-100"
//                                                     >
//                                                         <span>{course}</span>
//                                                         <X
//                                                             className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
//                                                             onClick={() => removeFromArray(index, 'coursework', courseIndex)}
//                                                         />
//                                                     </Badge>
//                                                 ))}
//                                             </div>

//                                             <Input
//                                                 placeholder="Add relevant coursework (e.g., Data Structures, Database Systems)"
//                                                 className="h-8 text-sm"
//                                                 onKeyPress={(e) => {
//                                                     if (e.key === 'Enter') {
//                                                         addToArray(index, 'coursework', e.target.value);
//                                                         e.target.value = '';
//                                                     }
//                                                 }}
//                                             />
//                                         </div>

//                                         {/* Achievements */}
//                                         <div className="space-y-3">
//                                             <Label className="flex items-center gap-2">
//                                                 <Award className="h-4 w-4" />
//                                                 Academic Achievements
//                                             </Label>

//                                             <div className="flex flex-wrap gap-2 mb-3">
//                                                 {edu.achievements.map((achievement, achIndex) => (
//                                                     <Badge
//                                                         key={achIndex}
//                                                         variant="outline"
//                                                         className="bg-yellow-50 text-yellow-700 border-yellow-200 group cursor-pointer hover:bg-yellow-100"
//                                                     >
//                                                         <span>{achievement}</span>
//                                                         <X
//                                                             className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
//                                                             onClick={() => removeFromArray(index, 'achievements', achIndex)}
//                                                         />
//                                                     </Badge>
//                                                 ))}
//                                             </div>

//                                             <Input
//                                                 placeholder="Add achievements (e.g., Dean's List, Magna Cum Laude, Scholarship)"
//                                                 className="h-8 text-sm"
//                                                 onKeyPress={(e) => {
//                                                     if (e.key === 'Enter') {
//                                                         addToArray(index, 'achievements', e.target.value);
//                                                         e.target.value = '';
//                                                     }
//                                                 }}
//                                             />
//                                         </div>

//                                         {/* Activities */}
//                                         <div className="space-y-3">
//                                             <Label className="flex items-center gap-2">
//                                                 <Target className="h-4 w-4" />
//                                                 Activities & Organizations
//                                             </Label>

//                                             <div className="flex flex-wrap gap-2 mb-3">
//                                                 {edu.activities.map((activity, actIndex) => (
//                                                     <Badge
//                                                         key={actIndex}
//                                                         variant="outline"
//                                                         className="bg-green-50 text-green-700 border-green-200 group cursor-pointer hover:bg-green-100"
//                                                     >
//                                                         <span>{activity}</span>
//                                                         <X
//                                                             className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
//                                                             onClick={() => removeFromArray(index, 'activities', actIndex)}
//                                                         />
//                                                     </Badge>
//                                                 ))}
//                                             </div>

//                                             <Input
//                                                 placeholder="Add activities (e.g., Programming Club, IEEE Student Member)"
//                                                 className="h-8 text-sm"
//                                                 onKeyPress={(e) => {
//                                                     if (e.key === 'Enter') {
//                                                         addToArray(index, 'activities', e.target.value);
//                                                         e.target.value = '';
//                                                     }
//                                                 }}
//                                             />
//                                         </div>
//                                     </CardContent>
//                                 )}
//                             </Card>
//                         ))}
//                     </div>
//                 )}

//                 {/* Summary Stats */}
//                 {education.length > 0 && (
//                     <div className="flex items-center justify-between pt-4 border-t">
//                         <div className="flex items-center gap-4 text-sm text-gray-600">
//                             <span>Total Education: {education.length}</span>
//                             <span>With GPA: {education.filter(e => e.gpa).length}</span>
//                             <span>With Coursework: {education.filter(e => e.coursework.length > 0).length}</span>
//                         </div>
//                         <div className="text-sm text-gray-500">
//                             Avg. Completion: {Math.round(
//                                 education.reduce((total, edu) => total + getEducationScore(edu), 0) / education.length
//                             )}%
//                         </div>
//                     </div>
//                 )}
//             </CardContent>
//         </Card>
//     );
// }



import { useState, KeyboardEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
    GraduationCap,
    Plus,
    Trash2,
    Save,
    X,
    Sparkles,
    Calendar,
    Building,
    MapPin,
    Award,
    BookOpen,
    Target,
    Lightbulb,
    ArrowUp,
    ArrowDown,
    Copy
} from 'lucide-react';

// Type Definitions
interface Education {
    id: number;
    degree: string;
    major: string;
    school: string;
    location: string;
    year: string;
    gpa: string;
    achievements: string[];
    coursework: string[];
    activities: string[];
}

interface EducationEditorProps {
    data: Education[];
    onUpdate: (data: Education[]) => void;
    onClose: () => void;
}

type ArrayField = 'achievements' | 'coursework' | 'activities';

export function EducationEditor({ data, onUpdate, onClose }: EducationEditorProps) {
    const [education, setEducation] = useState<Education[]>(data);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const addEducation = () => {
        const newEducation: Education = {
            id: Date.now(),
            degree: '',
            major: '',
            school: '',
            location: '',
            year: '',
            gpa: '',
            achievements: [],
            coursework: [],
            activities: []
        };
        setEducation([...education, newEducation]);
        setExpandedIndex(education.length);
    };

    const removeEducation = (index: number) => {
        const updated = education.filter((_, i) => i !== index);
        setEducation(updated);
        if (expandedIndex !== null && expandedIndex >= updated.length && updated.length > 0) {
            setExpandedIndex(updated.length - 1);
        } else if (updated.length === 0) {
            setExpandedIndex(null);
        }
    };

    const updateEducation = <K extends keyof Education>(index: number, field: K, value: Education[K]) => {
        const updated = [...education];
        updated[index] = { ...updated[index], [field]: value };
        setEducation(updated);
    };

    const addToArray = (index: number, field: ArrayField, value: string) => {
        if (value.trim()) {
            const updated = [...education];
            updated[index][field] = [...updated[index][field], value.trim()];
            setEducation(updated);
        }
    };

    const removeFromArray = (index: number, field: ArrayField, itemIndex: number) => {
        const updated = [...education];
        updated[index][field] = updated[index][field].filter((_, i) => i !== itemIndex);
        setEducation(updated);
    };

    const moveEducation = (index: number, direction: 'up' | 'down') => {
        const updated = [...education];
        const newIndex = direction === 'up' ? index - 1 : index + 1;
        if (newIndex >= 0 && newIndex < updated.length) {
            [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
            setEducation(updated);
            setExpandedIndex(newIndex);
        }
    };

    const duplicateEducation = (index: number) => {
        const edu: Education = { ...education[index], id: Date.now() };
        const updated = [...education];
        updated.splice(index + 1, 0, edu);
        setEducation(updated);
    };

    const optimizeEducation = (index: number): string[] => {
        const edu = education[index];
        const suggestions: string[] = [];

        if (edu.degree.toLowerCase().includes('computer science') && edu.coursework.length === 0) {
            const commonCoursework = [
                'Data Structures and Algorithms',
                'Database Management Systems',
                'Software Engineering',
                'Operating Systems',
                'Computer Networks'
            ];
            updateEducation(index, 'coursework', commonCoursework);
            suggestions.push('Added relevant coursework');
        }

        if (edu.activities.length === 0) {
            updateEducation(index, 'activities', ['Technical Society Member']);
            suggestions.push('Added technical activities');
        }

        return suggestions;
    };

    const degreeTypes: string[] = [
        'Bachelor of Technology', 'Bachelor of Science', 'Master of Science', 'Master of Technology',
        'Bachelor of Engineering', 'Master of Engineering', 'Bachelor of Arts', 'Master of Arts',
        'Ph.D.', 'Associate Degree', 'Diploma'
    ];

    const commonMajors: string[] = [
        'Computer Science and Engineering', 'Computer Science', 'Software Engineering', 'Information Technology',
        'Electrical Engineering', 'Electronics and Communication', 'Data Science', 'Artificial Intelligence',
        'Cybersecurity', 'Computer Applications'
    ];

    const getEducationScore = (edu: Education): number => {
        let score = 0;
        if (edu.degree.trim()) score += 25;
        if (edu.school.trim()) score += 20;
        if (edu.year.trim()) score += 15;
        if (edu.gpa && parseFloat(edu.gpa) > 0) score += 15;
        if (edu.coursework?.length > 0) score += 15;
        if (edu.achievements?.length > 0 || edu.activities?.length > 0) score += 10;
        return Math.min(score, 100);
    };

    const handleSave = () => {
        const validEducation = education.filter(edu =>
            edu.degree.trim() && edu.school.trim()
        );
        onUpdate(validEducation);
        onClose();
    };

    return (
        <Card>
            <CardHeader className="flex flex-col gap-2.5 items-center justify-between">
                <div className="flex flex-col items-center">
                    <CardTitle className="flex items-center gap-2 text-sm">
                        <GraduationCap className="h-5 w-5" />
                        Education Background
                        <Badge variant="outline">{education.length} {education.length === 1 ? 'Degree' : 'Degrees'}</Badge>
                    </CardTitle>
                    <p className="text-sm text-gray-600 mt-1">
                        Add your educational qualifications and academic achievements
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={addEducation}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Education
                    </Button>
                    <Button size="sm" onClick={handleSave}>
                        <Save className="h-4 w-4 mr-2" />
                        Save
                    </Button>
                    <Button variant="outline" size="sm" onClick={onClose}>
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                    <h4 className="font-medium text-indigo-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="h-4 w-4" />
                        Education Optimization Tips
                    </h4>
                    <ul className="text-sm text-indigo-800 space-y-1">
                        <li>• List education in reverse chronological order (most recent first)</li>
                        <li>• Include GPA if 3.5 or higher, relevant coursework, and academic achievements</li>
                        <li>• Mention honors, scholarships, or academic recognitions</li>
                        <li>• Add relevant projects, thesis work, or research experience</li>
                        <li>• Include extracurricular activities that demonstrate leadership or technical skills</li>
                    </ul>
                </div>

                {education.length === 0 ? (
                    <div className="text-center py-12">
                        <GraduationCap className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-600 mb-2">No Education Added Yet</h3>
                        <p className="text-gray-500 mb-4">Add your educational background to get started</p>
                        <Button onClick={addEducation}>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Your First Education
                        </Button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {education.map((edu, index) => (
                            <Card key={edu.id} className={`border-2 transition-all ${expandedIndex === index ? 'border-indigo-300 shadow-lg' : 'border-gray-200'}`}>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                                className="p-2"
                                            >
                                                <GraduationCap className="h-4 w-4" />
                                            </Button>
                                            <div>
                                                <h4 className="font-semibold text-sm">
                                                    {edu.degree || `Education ${index + 1}`}
                                                    {edu.major && ` in ${edu.major}`}
                                                </h4>
                                                <p className="text-sm text-gray-600">
                                                    {edu.school} {edu.school && edu.location && '•'} {edu.location}
                                                </p>
                                                {edu.year && (
                                                    <p className="text-xs text-gray-500 flex items-center gap-1">
                                                        <Calendar className="h-3 w-3" />
                                                        {edu.year}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <div className="flex items-center gap-1 mr-2">
                                                <div className={`w-2 h-2 rounded-full ${getEducationScore(edu) >= 80 ? 'bg-green-500' :
                                                    getEducationScore(edu) >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                                                    }`}></div>
                                                <span className="text-xs text-gray-600">{getEducationScore(edu)}%</span>
                                            </div>
                                            <Button variant="outline" size="sm" onClick={() => moveEducation(index, 'up')} disabled={index === 0}>
                                                <ArrowUp className="h-4 w-4" />
                                            </Button>
                                            <Button variant="outline" size="sm" onClick={() => moveEducation(index, 'down')} disabled={index === education.length - 1}>
                                                <ArrowDown className="h-4 w-4" />
                                            </Button>
                                            <Button variant="outline" size="sm" onClick={() => duplicateEducation(index)}>
                                                <Copy className="h-4 w-4" />
                                            </Button>
                                            <Button variant="outline" size="sm" onClick={() => removeEducation(index)} className="text-red-600 hover:text-red-700">
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardHeader>

                                {expandedIndex === index && (
                                    <CardContent className="pt-0 space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor={`degree-${edu.id}`} className="flex items-center gap-2">
                                                    <Award className="h-4 w-4" />
                                                    Degree Type *
                                                </Label>
                                                <Input
                                                    id={`degree-${edu.id}`}
                                                    value={edu.degree}
                                                    onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                                                    placeholder="Bachelor of Technology"
                                                    list={`degree-list-${index}`}
                                                />
                                                <datalist id={`degree-list-${index}`}>
                                                    {degreeTypes.map(degree => <option key={degree} value={degree} />)}
                                                </datalist>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor={`major-${edu.id}`} className="flex items-center gap-2">
                                                    <BookOpen className="h-4 w-4" />
                                                    Major/Field of Study
                                                </Label>
                                                <Input
                                                    id={`major-${edu.id}`}
                                                    value={edu.major}
                                                    onChange={(e) => updateEducation(index, 'major', e.target.value)}
                                                    placeholder="Computer Science and Engineering"
                                                    list={`major-list-${index}`}
                                                />
                                                <datalist id={`major-list-${index}`}>
                                                    {commonMajors.map(major => <option key={major} value={major} />)}
                                                </datalist>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor={`school-${edu.id}`} className="flex items-center gap-2">
                                                    <Building className="h-4 w-4" />
                                                    School/University *
                                                </Label>
                                                <Input
                                                    id={`school-${edu.id}`}
                                                    value={edu.school}
                                                    onChange={(e) => updateEducation(index, 'school', e.target.value)}
                                                    placeholder="University Name"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor={`location-${edu.id}`} className="flex items-center gap-2">
                                                    <MapPin className="h-4 w-4" />
                                                    Location
                                                </Label>
                                                <Input
                                                    id={`location-${edu.id}`}
                                                    value={edu.location}
                                                    onChange={(e) => updateEducation(index, 'location', e.target.value)}
                                                    placeholder="City, State"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor={`year-${edu.id}`} className="flex items-center gap-2">
                                                    <Calendar className="h-4 w-4" />
                                                    Year/Period *
                                                </Label>
                                                <Input
                                                    id={`year-${edu.id}`}
                                                    value={edu.year}
                                                    onChange={(e) => updateEducation(index, 'year', e.target.value)}
                                                    placeholder="2019 - 2023"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor={`gpa-${edu.id}`} className="flex items-center gap-2">
                                                    <Target className="h-4 w-4" />
                                                    GPA (Optional)
                                                </Label>
                                                <Input
                                                    id={`gpa-${edu.id}`}
                                                    value={edu.gpa}
                                                    onChange={(e) => updateEducation(index, 'gpa', e.target.value)}
                                                    placeholder="3.8/4.0"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <Label className="flex items-center gap-2">
                                                    <BookOpen className="h-4 w-4" />
                                                    Relevant Coursework
                                                </Label>
                                                <Button variant="outline" size="sm" onClick={() => optimizeEducation(index)}>
                                                    <Sparkles className="h-4 w-4 mr-2" />
                                                    Auto-fill
                                                </Button>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {edu && edu?.coursework?.map((course, courseIndex) => (
                                                    <Badge key={courseIndex} variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200 group cursor-pointer hover:bg-indigo-100">
                                                        <span>{course}</span>
                                                        <X className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => removeFromArray(index, 'coursework', courseIndex)} />
                                                    </Badge>
                                                ))}
                                            </div>
                                            <Input
                                                placeholder="Add relevant coursework (e.g., Data Structures, Database Systems)"
                                                className="h-8 text-sm"
                                                onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                                                    if (e.key === 'Enter') {
                                                        const target = e.target as HTMLInputElement;
                                                        addToArray(index, 'coursework', target.value);
                                                        target.value = '';
                                                    }
                                                }}
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <Label className="flex items-center gap-2">
                                                <Award className="h-4 w-4" />
                                                Academic Achievements
                                            </Label>
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {edu && edu?.achievements?.map((achievement, achIndex) => (
                                                    <Badge key={achIndex} variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200 group cursor-pointer hover:bg-yellow-100">
                                                        <span>{achievement}</span>
                                                        <X className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => removeFromArray(index, 'achievements', achIndex)} />
                                                    </Badge>
                                                ))}
                                            </div>
                                            <Input
                                                placeholder="Add achievements (e.g., Dean's List, Magna Cum Laude, Scholarship)"
                                                className="h-8 text-sm"
                                                onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                                                    if (e.key === 'Enter') {
                                                        const target = e.target as HTMLInputElement;
                                                        addToArray(index, 'achievements', target.value);
                                                        target.value = '';
                                                    }
                                                }}
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <Label className="flex items-center gap-2">
                                                <Target className="h-4 w-4" />
                                                Activities & Organizations
                                            </Label>
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {edu && edu?.activities?.map((activity, actIndex) => (
                                                    <Badge key={actIndex} variant="outline" className="bg-green-50 text-green-700 border-green-200 group cursor-pointer hover:bg-green-100">
                                                        <span>{activity}</span>
                                                        <X className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => removeFromArray(index, 'activities', actIndex)} />
                                                    </Badge>
                                                ))}
                                            </div>
                                            <Input
                                                placeholder="Add activities (e.g., Programming Club, IEEE Student Member)"
                                                className="h-8 text-sm"
                                                onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                                                    if (e.key === 'Enter') {
                                                        const target = e.target as HTMLInputElement;
                                                        addToArray(index, 'activities', target.value);
                                                        target.value = '';
                                                    }
                                                }}
                                            />
                                        </div>
                                    </CardContent>
                                )}
                            </Card>
                        ))}
                    </div>
                )}

                {education.length > 0 && (
                    <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>Total Education: {education.length}</span>
                            <span>With GPA: {education.filter(e => e.gpa).length}</span>
                            <span>With Coursework: {education.filter(e => e?.coursework?.length > 0).length}</span>
                        </div>
                        <div className="text-sm text-gray-500">
                            Avg. Completion: {education.length > 0 ? Math.round(
                                education.reduce((total, edu) => total + getEducationScore(edu), 0) / education.length
                            ) : 0}%
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}