const Heading = ({ h1, p }) => {
    return (
        <div>
            <h1 className="font-extrabold text-[#222328] text-[32px]">{h1}</h1>
            <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">{p}</p>
        </div>
    );
};

export default Heading;
