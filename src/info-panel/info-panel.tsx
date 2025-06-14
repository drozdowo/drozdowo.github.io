const InfoPanel = () => {
    return (
        <>
            <div className="mb-6 last:mb-0">
                <h3 className="text-lg font-semibold text-matrix-primary mb-3 border-b border-matrix-secondary pb-2 text-shadow-matrix-glow-sm sm:text-base">About Me</h3>
                <p className="text-sm leading-relaxed text-matrix-tertiary m-0 text-shadow-matrix-glow-xs sm:text-xs">
                    Passionate software engineer with a focus on building amazing user experiences, and scalable systems using the latest tools and technologies. Experienced with AI-assisted coding, and agent development using tools like LangChain and LangGraph. Always eager to learn and adapt to new challenges in the ever-evolving tech landscape, especially now with the advent of coding AI and LLMs.
                </p>
            </div>
            <div className="mb-6 last:mb-0">
                <h3 className="text-lg font-semibold text-matrix-primary mb-3 border-b border-matrix-secondary pb-2 text-shadow-matrix-glow-sm sm:text-base">Hobbies</h3>
                <p className="text-sm leading-relaxed text-matrix-tertiary m-0 text-shadow-matrix-glow-xs sm:text-xs">
                    When I'm not behind my keyboard, you can find me gardening in my backyard, playing tennis with friends, gaming (of course), playing some EDH, or in Algonquin Provincial Park backpacking/camping.
                </p>
            </div>
        </>
    );
};

export default InfoPanel;
