
import React from 'react';
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import t3 from "../../assets/t3.png";
import t4 from "../../assets/t4.png";
import t5 from "../../assets/t5.png";
import t6 from "../../assets/t6.png";
import t7 from "../../assets/t7.png";
const TeenCards = () => {
    const cardData = [
        {
            id: 1,
            image: t1,
            imageFirst: true,
            text: (
                <>
                    <span className="font-bold">Infonexus</span> teens is helping me become the best version of myself. Middle school is hard enough. I have lost weight, I didn't think it was possible. Dr. Fitch showed me that being overweight is complex with many factors. She has taught me that we can achieve weight loss success if we work together. She does her part and has shown me how to do mine in an easy and simple way. She does special tests to make sure your weight issues are not because of your genes or medical conditions. She has helped everyone in my family lose weight and keep it off. Dr. Fitch means a lot to me because she makes it her job to help me be healthy and wants to hear my opinion.
                </>
            ),
        },
        {
            id: 2,
            image: t2,
            imageFirst: false,
            text: (
                <>
                    We aim to provide adolescents and families with a supportive and understanding healthcare environment, envisioning a future where individuals can truly feel "known well" by their doctors. Our mission is clear: to revolutionize healthcare for everybody, fostering a culture of inclusivity, understanding, and genuine support.
                </>
            ),
        },
        {
            id: 3,
            image: t3,
            imageFirst: true,
            text: (
                <>
                    <span className="font-bold">Infonexus</span> teens recognizes the unique challenges children encounter in healthcare settings. Our mission is to offer a compassionate and entirely personalized approach focused on each child's individuality and specific needs. Through motivational interviewing, we cultivate genuine shared decision-making with the patient, and their family. Our services encompass a wide range, including comprehensive metabolic screening, genetic screening, pharmacotherapy, dietitian services, and behavioral health support.
                </>
            ),
        },
        {
            id: 4,
            image: t4,
            imageFirst: false,
            text: (
                <>
                    In a world where nearly 20% of children and adolescents in the US are affected by obesity, knownwell teens is an oasis of compassionate support, offering healthcare free from judgment. Our team of professionals is committed to changing the narrative by ensuring that young minds and bodies receive the attention and care they need and deserve to thrive.
                </>
            ),
        },
        {
            id: 5,
            image: t5,
            imageFirst: true,
            text: (
                <>
                    We aim to provide adolescents and families with a supportive and understanding healthcare environment, envisioning a future where individuals can truly feel "known well" by their doctors. Our mission is clear: to revolutionize healthcare for everybody, fostering a culture of inclusivity, understanding, and genuine support.
                </>
            ),
        },
        {
            id: 6,
            image: t6,
            imageFirst: false,
            text: (
                <>
                    Every child's health journey deserves understanding, compassion, and expert-led care. As a specialized extension of knownwell, knownwell teens focuses on children aged 13 and above with metabolic concerns, including obesity, and provides empathetic healthcare rooted in the unique needs of young individuals.
                </>
            ),
        },
    ];

    return (
        <div>
            <div>
                {cardData.map((card) => (
                    <div
                        key={card.id}
                        className="flex flex-col justify-center mt-10"
                    >
                        <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-6 max-w-xs md:max-w-6xl mx-auto border border-white bg-[#F5F5F7]">
                            {card.imageFirst && (
                                <div className="w-full md:w-1/4 grid place-items-center">
                                    <img
                                        src={card.image}
                                        className="rounded-xl h-full object-cover"
                                    />
                                </div>
                            )}
                            <div className="w-full md:w-3/4 flex flex-col space-y-2 p-3">
                                <p className="text-2xl text-[#00000080]">
                                    {card.text}
                                </p>
                            </div>
                            {!card.imageFirst && (
                                <div className="w-full md:w-1/4 grid place-items-center">
                                    <img
                                        src={card.image}
                                        className="rounded-xl h-full object-cover"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col justify-center mt-10">
                <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-6 max-w-xs md:max-w-6xl mx-auto border border-white bg-[#F5F5F7]">
                    <div className="w-full md:w-2/5 grid place-items-center">
                        <img
                            src={t7}
                            className="rounded-xl h-full object-cover"
                            style={{ height: "100%" }}
                        />
                    </div>
                    <div className="w-full md:w-3/5 flex flex-col space-y-2 p-3">
                        <h3 className="font-bold text-3xl">Why Infonexuse  xists for teens</h3>
                        <p className="text-2xl text-gray-500">
                            The inspiration behind knownwell teens stems from personal experiences of our team members, including our founder Brooke Boyarsky Pratt. At the tender age of ten, Brooke’s pediatrician suggested to her mom (in front of Brooke) that she should go to “fat camp.” Where she should have found help, she instead found shame. This incident is unfortunately not an isolated one.
                            Recognizing the need for a change in the way obesity is approached in healthcare, knownwell teens introduces a comprehensive care model built on evidence-based medicine and emphasizes empathy, patience, and kindness in healthcare interactions. Co-founded by individuals passionate about reforming the treatment of obesity, including Brooke Boyarsky Pratt and Dr. Angela Fitch — a renowned figure in weight-inclusive medicine and pediatrician herself — knownwell teens offers integrated, insurance-covered, comprehensive healthcare led by dedicated clinicians.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-10 mb-10">
                <button className="px-8 py-4  bg-[#256BFE] text-white rounded-lg font-bold text-3xl" style={{ width: '500px' }} >
                    Load More
                </button>
            </div>

        </div>
    );
};

export default TeenCards;
