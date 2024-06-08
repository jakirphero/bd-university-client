
const SectionTitle = ({ heading }) => {
    return (
        <div className="my-14">
            <h3 className="text-2xl font-bold text-center capitalize mb-2">{heading}</h3>
            <hr className="w-1/12 mx-auto border-2"/>
        </div>
    );
};

export default SectionTitle;