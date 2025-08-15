// components/ComingSoon.tsx
import React from 'react';
import { Clock, Wrench, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ComingSoon = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <Wrench className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl">Coming Soon</CardTitle>
                    <CardDescription>
                        We're working hard to bring you something amazing. Stay tuned!
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="rounded-lg bg-muted p-6 text-center">
                        <div className="flex items-center justify-center text-muted-foreground mb-2">
                            <Clock className="mr-2 h-4 w-4" />
                            <span className="text-sm font-medium">Estimated launch</span>
                        </div>
                        <div className="text-2xl font-bold">
                            1 Week
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-3">
                    <div className="flex w-full flex-col gap-3">
                        <Button className="w-full">
                            Notify Me
                        </Button>
                        <Button variant="outline" className="w-full">
                            Contact Support
                        </Button>
                    </div>

                    <Separator className="my-2" />

                    <div className="text-center text-sm text-muted-foreground">
                        Have questions?{' '}
                        <a
                            href="mailto:support@resumebot.co.in"
                            className="text-primary hover:underline"
                        >
                            support@resumebot.co.in
                        </a>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ComingSoon;