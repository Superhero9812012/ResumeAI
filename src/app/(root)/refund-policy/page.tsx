// "use client";
// import React from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { RotateCcw, CreditCard, AlertCircle, Clock, Truck, Phone, Mail, CheckCircle, XCircle } from 'lucide-react';
// import Section from '@/components/Base/Section';

// const RefundCancellationPage = () => {
//     const policies = [
//         {
//             title: "Cancellation Policy",
//             icon: XCircle,
//             color: "from-red-50 to-red-100 dark:from-red-950 dark:to-red-900",
//             iconBg: "bg-red-500",
//             rules: [
//                 "Cancellations considered only within 2 days of placing the order",
//                 "Requests may not be entertained if orders are communicated to sellers and shipping initiated",
//                 "If product is out for delivery, you may reject at the doorstep",
//                 "No cancellations for perishable items (flowers, eatables, etc.)",
//                 "Refund/replacement available if delivered product quality is poor"
//             ]
//         },
//         {
//             title: "Refund Policy",
//             icon: CreditCard,
//             color: "from-green-50 to-green-100 dark:from-green-950 dark:to-green-900",
//             iconBg: "bg-green-500",
//             rules: [
//                 "Report damaged or defective items to customer service immediately",
//                 "Seller/merchant will check and determine the issue at their end",
//                 "Must be reported within 2 days of product receipt",
//                 "If product not as shown or per expectations, notify within 2 days",
//                 "Customer service will investigate and take appropriate decision"
//             ]
//         },
//         {
//             title: "Return & Exchange",
//             icon: RotateCcw,
//             color: "from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900",
//             iconBg: "bg-blue-500",
//             rules: [
//                 "Return/exchange offered within first 2 days from purchase date",
//                 "Item must be unused and in same condition as received",
//                 "Original packaging required for returns",
//                 "Sale items may not be eligible for return/exchange",
//                 "Items replaced only if found defective or damaged after inspection"
//             ]
//         }
//     ];

//     const timelineSteps = [
//         {
//             step: "1",
//             title: "Request Submission",
//             description: "Submit cancellation/refund request within 2 days",
//             time: "Within 2 days of purchase"
//         },
//         {
//             step: "2",
//             title: "Review Process",
//             description: "Our team reviews your request and checks with seller",
//             time: "1-2 business days"
//         },
//         {
//             step: "3",
//             title: "Approval Decision",
//             description: "Request approved based on policy compliance",
//             time: "2-3 business days"
//         },
//         {
//             step: "4",
//             title: "Refund Processing",
//             description: "Approved refunds processed to your account",
//             time: "2 days for processing"
//         }
//     ];

//     const exclusions = [
//         "Digital services already delivered",
//         "Perishable items (flowers, food items)",
//         "Products with manufacturer warranty issues",
//         "Items purchased during special sales (conditions apply)",
//         "Products damaged due to misuse"
//     ];

//     return (
//         <Section>
//             <div className="container mx-auto py-20">
//                 {/* Header */}
//                 <div className="text-center mb-16">
//                     <div className="flex items-center justify-center gap-2 mb-4">
//                         <RotateCcw className="h-8 w-8 text-primary" />
//                         <Badge variant="secondary" className="text-sm font-medium">
//                             Customer Protection
//                         </Badge>
//                     </div>
//                     <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
//                         Refund & Cancellation Policy
//                     </h1>
//                     <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//                         We want you to be completely satisfied with your purchase. Here's our comprehensive
//                         policy for cancellations, refunds, and returns.
//                     </p>
//                 </div>

//                 {/* Important Notice */}
//                 <Card className="mb-12 border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800">
//                     <CardContent className="p-6">
//                         <div className="flex items-start gap-4">
//                             <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
//                             <div>
//                                 <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
//                                     Time-Sensitive Policy
//                                 </h3>
//                                 <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed">
//                                     <strong>All requests must be made within 2 days</strong> of your purchase or product receipt.
//                                     After this period, no cancellations, refunds, or exchanges will be entertained.
//                                 </p>
//                             </div>
//                         </div>
//                     </CardContent>
//                 </Card>

//                 {/* Policy Sections */}
//                 <div className="space-y-8 mb-16">
//                     {policies.map((policy, index) => {
//                         const IconComponent = policy.icon;
//                         return (
//                             <Card key={index} className="overflow-hidden">
//                                 <CardHeader className={`bg-gradient-to-r ${policy.color}`}>
//                                     <CardTitle className="flex items-center gap-3 text-xl">
//                                         <div className={`w-10 h-10 ${policy.iconBg} rounded-lg flex items-center justify-center`}>
//                                             <IconComponent className="h-5 w-5 text-white" />
//                                         </div>
//                                         {policy.title}
//                                     </CardTitle>
//                                 </CardHeader>
//                                 <CardContent className="p-6">
//                                     <ul className="space-y-3">
//                                         {policy.rules.map((rule, idx) => (
//                                             <li key={idx} className="flex items-start gap-3">
//                                                 <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
//                                                 <span className="text-muted-foreground leading-relaxed">{rule}</span>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </CardContent>
//                             </Card>
//                         );
//                     })}
//                 </div>

//                 {/* Process Timeline */}
//                 <Card className="mb-16">
//                     <CardHeader className="text-center">
//                         <CardTitle className="flex items-center justify-center gap-2 text-2xl">
//                             <Clock className="h-6 w-6 text-primary" />
//                             Refund Process Timeline
//                         </CardTitle>
//                         <p className="text-muted-foreground">Here's what happens when you submit a refund request</p>
//                     </CardHeader>
//                     <CardContent className="p-8">
//                         <div className="grid md:grid-cols-4 gap-6">
//                             {timelineSteps.map((step, index) => (
//                                 <div key={index} className="text-center relative">
//                                     {index < timelineSteps.length - 1 && (
//                                         <div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-border"></div>
//                                     )}
//                                     <div className="w-12 h-12 text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 relative z-10 bg-primary">
//                                         {step.step}
//                                     </div>
//                                     <h4 className="font-semibold mb-2">{step.title}</h4>
//                                     <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{step.description}</p>
//                                     <Badge variant="outline" className="text-xs">{step.time}</Badge>
//                                 </div>
//                             ))}
//                         </div>
//                     </CardContent>
//                 </Card>

//                 {/* Exclusions & Exceptions */}
//                 <div className="grid md:grid-cols-2 gap-8 mb-16">
//                     <Card>
//                         <CardHeader>
//                             <CardTitle className="flex items-center gap-2 text-lg">
//                                 <XCircle className="h-5 w-5 text-red-500" />
//                                 Items Not Eligible for Return
//                             </CardTitle>
//                         </CardHeader>
//                         <CardContent>
//                             <ul className="space-y-2">
//                                 {exclusions.map((item, idx) => (
//                                     <li key={idx} className="flex items-start gap-2">
//                                         <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
//                                         <span className="text-sm text-muted-foreground">{item}</span>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </CardContent>
//                     </Card>

//                     <Card>
//                         <CardHeader>
//                             <CardTitle className="flex items-center gap-2 text-lg">
//                                 <Truck className="h-5 w-5 text-primary" />
//                                 Shipping & Delivery
//                             </CardTitle>
//                         </CardHeader>
//                         <CardContent className="space-y-4">
//                             <div>
//                                 <h4 className="font-medium mb-2">Shipping Policy</h4>
//                                 <p className="text-sm text-muted-foreground">
//                                     Orders shipped within 2 days via registered courier companies or speed post.
//                                     Delivery to address provided at purchase time.
//                                 </p>
//                             </div>
//                             <div>
//                                 <h4 className="font-medium mb-2">Shipping Costs</h4>
//                                 <p className="text-sm text-muted-foreground">
//                                     Any shipping costs levied by seller or Platform Owner are non-refundable.
//                                 </p>
//                             </div>
//                         </CardContent>
//                     </Card>
//                 </div>

//                 {/* Warranty Notice */}
//                 <Card className="mb-16 border-purple-200 bg-purple-50 dark:bg-purple-950/20 dark:border-purple-800">
//                     <CardHeader>
//                         <CardTitle className="text-purple-800 dark:text-purple-200 flex items-center gap-2">
//                             <AlertCircle className="h-5 w-5" />
//                             Manufacturer Warranty Products
//                         </CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                         <p className="text-sm text-purple-700 dark:text-purple-300 leading-relaxed">
//                             For products that come with manufacturer warranty, please contact the manufacturer directly
//                             for any complaints or issues. These are not covered under our refund policy as they have
//                             their own warranty terms and conditions.
//                         </p>
//                     </CardContent>
//                 </Card>

//                 {/* How to Request */}
//                 <Card className="mb-16">
//                     <CardHeader className="text-center">
//                         <CardTitle className="text-2xl">How to Request Refund or Cancellation</CardTitle>
//                         <p className="text-muted-foreground">Follow these simple steps to submit your request</p>
//                     </CardHeader>
//                     <CardContent>
//                         <div className="grid md:grid-cols-3 gap-6">
//                             <div className="text-center p-6 bg-muted/30 rounded-lg">
//                                 <Phone className="h-10 w-10 text-primary mx-auto mb-4" />
//                                 <h4 className="font-semibold mb-2">Contact Customer Service</h4>
//                                 <p className="text-sm text-muted-foreground mb-4">
//                                     Call our customer service team during business hours
//                                 </p>
//                                 <p className="text-xs font-medium">Monday - Friday (9:00 - 18:00)</p>
//                             </div>

//                             <div className="text-center p-6 bg-muted/30 rounded-lg">
//                                 <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
//                                 <h4 className="font-semibold mb-2">Email Support</h4>
//                                 <p className="text-sm text-muted-foreground mb-4">
//                                     Send detailed request with order information
//                                 </p>
//                                 <p className="text-xs font-medium">support@resumebot.co.in</p>
//                             </div>

//                             <div className="text-center p-6 bg-muted/30 rounded-lg">
//                                 <AlertCircle className="h-10 w-10 text-primary mx-auto mb-4" />
//                                 <h4 className="font-semibold mb-2">Provide Details</h4>
//                                 <p className="text-sm text-muted-foreground mb-4">
//                                     Include order ID, reason for request, and supporting evidence
//                                 </p>
//                                 <p className="text-xs font-medium">Required for processing</p>
//                             </div>
//                         </div>
//                     </CardContent>
//                 </Card>

//                 {/* Contact Information */}
//                 <Card className="text-center">
//                     <CardHeader>
//                         <CardTitle>Need Help?</CardTitle>
//                         <p className="text-muted-foreground">
//                             Our customer service team is here to assist you with your refund and cancellation requests.
//                         </p>
//                     </CardHeader>
//                     <CardContent>
//                         <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
//                             <div className="flex items-center gap-2 justify-center">
//                                 <Mail className="h-4 w-4 text-primary" />
//                                 <span className="text-sm">support@resumebot.co.in</span>
//                             </div>
//                             <div className="flex items-center gap-2 justify-center">
//                                 <Phone className="h-4 w-4 text-primary" />
//                                 <span className="text-sm">Monday - Friday (9:00 - 18:00)</span>
//                             </div>
//                         </div>

//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                             <Button className="flex items-center gap-2">
//                                 <Mail className="h-4 w-4" />
//                                 Email Support
//                             </Button>
//                             <Button variant="outline" className="flex items-center gap-2">
//                                 <Phone className="h-4 w-4" />
//                                 Call Now
//                             </Button>
//                         </div>

//                         <div className="mt-6 text-xs text-muted-foreground">
//                             <p>ResumeBot</p>
//                             <p>A1-203 Akshar Elementa, Pune, India</p>
//                         </div>
//                     </CardContent>
//                 </Card>

//                 {/* Last Updated */}
//                 <div className="text-center mt-12 text-sm text-muted-foreground">
//                     <p>This refund and cancellation policy is effective immediately and supersedes any previous versions.</p>
//                     <p className="mt-2">For any clarifications, please contact our customer service team.</p>
//                 </div>
//             </div>
//         </Section>
//     );
// };

// export default RefundCancellationPage;


"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { RotateCcw, CreditCard, AlertCircle, Clock, Phone, Mail, CheckCircle, XCircle, Zap, FileText, RefreshCw } from 'lucide-react';
import Section from '@/components/Base/Section';

const RefundCancellationPage = () => {
    const eligibleRefunds = [
        {
            title: "Duplicate Charges",
            description: "You are charged twice for the same service",
            icon: CreditCard
        },
        {
            title: "Technical Failure",
            description: "You experience a technical failure that our support team cannot resolve within 3 business days",
            icon: AlertCircle
        },
        {
            title: "System Error",
            description: "The resume output is completely blank or unusable due to system error",
            icon: FileText
        }
    ];

    const nonRefundable = [
        "Change of mind after purchase",
        "Dissatisfaction based on design preference or subjective quality",
        "Incorrect input data provided by the user (e.g., wrong role, resume file errors)",
        "Completed and delivered services"
    ];

    const resolutionOptions = [
        {
            title: "Full Refund",
            description: "Complete refund of your purchase amount",
            icon: CreditCard,
            color: "bg-green-500"
        },
        {
            title: "Service Credit",
            description: "Credit for future services on our platform",
            icon: Zap,
            color: "bg-blue-500"
        },
        {
            title: "Free Re-generation",
            description: "One-time free resume re-generation service",
            icon: RefreshCw,
            color: "bg-purple-500"
        }
    ];

    const processSteps = [
        {
            step: "1",
            title: "Contact Support",
            description: "Email us within 7 days of purchase with your order ID and issue details",
            time: "Within 7 days"
        },
        {
            step: "2",
            title: "Assessment",
            description: "Our team will review your case and assess eligibility",
            time: "2-3 business days"
        },
        {
            step: "3",
            title: "Resolution",
            description: "We'll provide an appropriate solution based on your case",
            time: "After assessment"
        }
    ];

    return (
        <Section>
            <div className="container mx-auto py-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <RotateCcw className="h-8 w-8 text-primary" />
                        <Badge variant="secondary" className="text-sm font-medium">
                            Digital Services Policy
                        </Badge>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Refund Policy - ResumeBot.co.in
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        At ResumeBot.co.in, we strive to deliver high-quality AI-powered resume optimization services. 
                        Since our products are digital and personalized, we have the following refund policy.
                    </p>
                </div>

                {/* Important Notice */}
                <Card className="mb-12 border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800">
                    <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                            <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                                    Digital Service Notice
                                </h3>
                                <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed">
                                    Our services are <strong>digital and personalized</strong>. All refund requests must be made 
                                    <strong> within 7 days of purchase</strong> and meet specific eligibility criteria outlined below.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Eligible Refunds */}
                <Card className="mb-12">
                    <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
                        <CardTitle className="flex items-center gap-3 text-xl">
                            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                                <CheckCircle className="h-5 w-5 text-white" />
                            </div>
                            📌 Eligibility for Refund
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <p className="text-muted-foreground mb-6">Refunds will only be considered in the following cases:</p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {eligibleRefunds.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <div key={index} className="p-4 border rounded-lg bg-muted/30">
                                        <div className="flex items-center gap-3 mb-3">
                                            <IconComponent className="h-5 w-5 text-green-600" />
                                            <h4 className="font-semibold">{item.title}</h4>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </CardContent>
                </Card>

                {/* Non-Refundable */}
                <Card className="mb-12">
                    <CardHeader className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950 dark:to-red-900">
                        <CardTitle className="flex items-center gap-3 text-xl">
                            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                                <XCircle className="h-5 w-5 text-white" />
                            </div>
                            ❌ Non-Refundable
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <p className="text-muted-foreground mb-6">Refunds will not be provided for:</p>
                        <ul className="space-y-3">
                            {nonRefundable.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                {/* Support Process */}
                <Card className="mb-12">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
                        <CardTitle className="flex items-center gap-3 text-xl">
                            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                <Mail className="h-5 w-5 text-white" />
                            </div>
                            💬 Support Process
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="mb-6">
                            <p className="text-muted-foreground mb-4">
                                If you believe you qualify for a refund, please contact us within <strong>7 days of purchase</strong> at 
                                <span className="font-medium text-primary"> support@resumebot.co.in</span> with your order ID and issue details.
                            </p>
                            <p className="text-muted-foreground">
                                Our team will assess the situation and respond within <strong>2–3 business days</strong>.
                            </p>
                        </div>

                        {/* Process Timeline */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {processSteps.map((step, index) => (
                                <div key={index} className="text-center relative">
                                    {index < processSteps.length - 1 && (
                                        <div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-border"></div>
                                    )}
                                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 relative z-10">
                                        {step.step}
                                    </div>
                                    <h4 className="font-semibold mb-2">{step.title}</h4>
                                    <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{step.description}</p>
                                    <Badge variant="outline" className="text-xs">{step.time}</Badge>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Resolution Options */}
                <Card className="mb-12">
                    <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
                        <CardTitle className="flex items-center gap-3 text-xl">
                            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                                <CheckCircle className="h-5 w-5 text-white" />
                            </div>
                            ✅ Resolution Options
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <p className="text-muted-foreground mb-6">Based on your specific case, we may offer:</p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {resolutionOptions.map((option, index) => {
                                const IconComponent = option.icon;
                                return (
                                    <div key={index} className="p-6 border rounded-lg bg-muted/30 text-center">
                                        <div className={`w-12 h-12 ${option.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                                            <IconComponent className="h-6 w-6 text-white" />
                                        </div>
                                        <h4 className="font-semibold mb-2">{option.title}</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {option.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </CardContent>
                </Card>

                {/* Contact Information */}
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle>Need Help?</CardTitle>
                        <p className="text-muted-foreground">
                            Our customer service team is here to assist you with your refund requests.
                        </p>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
                            <div className="flex items-center gap-2 justify-center">
                                <Mail className="h-4 w-4 text-primary" />
                                <span className="text-sm font-medium">support@resumebot.co.in</span>
                            </div>
                            <div className="flex items-center gap-2 justify-center">
                                <Clock className="h-4 w-4 text-primary" />
                                <span className="text-sm">Response within 2-3 business days</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                            <Button className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                Email Support
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2">
                                <FileText className="h-4 w-4" />
                                Submit Request
                            </Button>
                        </div>

                        <div className="text-xs text-muted-foreground">
                            <p className="font-medium">Thank you for choosing ResumeBot</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Last Updated */}
                <div className="text-center mt-12 text-sm text-muted-foreground">
                    <p>This refund policy is effective immediately and applies to all ResumeBot.co.in services.</p>
                    <p className="mt-2">For any clarifications, please contact our support team at support@resumebot.co.in</p>
                </div>
            </div>
        </Section>
    );
};

export default RefundCancellationPage;