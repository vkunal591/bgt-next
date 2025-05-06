import React from "react";
import Button from "./Button";
import HeadingContent from "./HeadingContent";


interface CardData {
    id: string | number;
    image?: string;
    subtitle?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
  
 
}

interface SectionWithCardsProps {
    headingProps: React.ComponentProps<typeof HeadingContent>;
    cards: CardData[];
    gridClass?: string;
    sectionPadding?: string;
    gap?: string;
    cardClass?: string;
    cardContetntClass?: string;
    showButton?: boolean;
    imageClass?: string;
    titleClass?: string;
    subtitleClass?: string;
    descriptionClass?: string;
    buttonClass?: string;
    showImage?: boolean;
    showSubtitle?: boolean;
    showTitle?: boolean;
    showDescription?: boolean;
}

const SectionWithCards: React.FC<SectionWithCardsProps> = ({
    headingProps,
    cards,
    gridClass = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    sectionPadding = "py-10 px-4",
    gap = "gap-6",
    cardClass = "p-4 rounded-lg shadow-md bg-white",
    cardContetntClass = "p-4 rounded-lg shadow-md bg-white",
    showButton = true,
    imageClass = "",
    titleClass = "",
    subtitleClass = "",
    descriptionClass = "",
    buttonClass = "",
    showImage = true,
    showSubtitle = true,
    showTitle = true,
    showDescription = true,
    
}) => {
    return (
        <section className={`w-full ${sectionPadding}`}>
            <HeadingContent {...headingProps} />

            <div className={`grid ${gridClass} ${gap} mt-8`}>
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={`  ${cardClass || "p-4 rounded-lg shadow-md bg-white"}`}
                    >
                        {showImage && card.image && (
                            <img
                                src={card.image}
                                alt={card.title || "Card Image"}
                                className={` ${imageClass || "w-full h-48 object-cover rounded-md mb-4"}`}
                            />
                        )}

                        <div className={` ${cardContetntClass || "p-4 rounded-lg shadow-md bg-white"}`}>

                            {showSubtitle && card.subtitle && (
                                <p className={`text-sm text-gray-800 mb-1 ${subtitleClass || ""}`}>
                                    {card.subtitle}
                                </p>
                            )}

                            {showTitle && card.title && (
                                <h3 className={`text-xl font-semibold mb-2 text-dark-primary ${titleClass || ""}`}>
                                    {card.title}
                                </h3>
                            )}

                            {showDescription && card.description && (
                                <p className={`text-gray-700 mb-4 ${descriptionClass || ""}`}>
                                    {card.description}
                                </p>
                            )}

                            {showButton && card.buttonText && card.buttonLink && (
                                <Button
                                    href={card.buttonLink}
                                    className={buttonClass || ""}
                                >
                                    {card.buttonText}
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SectionWithCards;