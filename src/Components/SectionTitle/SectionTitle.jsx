
const SectionTitle = ({subHeading,Heading}) => {
    return (
        <div className="mx-auto max-w-xs text-center ">
            <p className="text-yellow-600 pb-4">{subHeading}</p>
            <h3 className="lg:text-3xl md:text-3xl text-2xl border-y-2 py-2">{Heading}</h3>
        </div>
    );
};

export default SectionTitle;