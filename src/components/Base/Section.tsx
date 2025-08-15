import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    id?: string;
}

const Section = ({
    children,
    id,
}: Readonly<SectionProps>) => {

    return (
        <section
            id={id}
            className={`px-6 md:px-10 lg:px-24 xl:px-40`}
        >
            {children}
        </section>
    );
};

export default Section;