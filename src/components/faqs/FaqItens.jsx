import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { faqConfigs } from "./faqConfigs";

const FaqItens = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="m-auto max-w-full px-25 py-0 box-border">
            {faqConfigs.map((topicItem) => (
                <div key={topicItem.id}>
                    <p className="text-2xl text-cor6 font-bold border-solid border-b-black border-b-1 pt-16 pb-8.75">
                        {topicItem.topic}
                    </p>
                    {topicItem.infos.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`border-b boder-solid border-black ${index === topicItem.infos.length - 1 ? "" : ""
                                    }`}
                            >
                                <div
                                    className="flex flex-row flex-nowrap justify-between pt-6 pb-4 font-semibold text-xl cursor-pointer"
                                    onClick={() => toggleIndex(index)}
                                >
                                    <div>{item.question}</div>
                                    <div>{isOpen ? <MinusIcon /> : <PlusIcon />}</div>
                                </div>
                                {isOpen && (
                                    <div
                                        className="font-medium text-sm pb-4"
                                        dangerouslySetInnerHTML={{ __html: item.answer }}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            ))}
        </section>
    );
};

export default FaqItens;