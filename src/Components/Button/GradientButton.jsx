
const GradientButton = ({buttonValue,children}) => {
    return (
        <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] rounded-none text-white border-0">{buttonValue}
                    {children}
        
        </button>
    );
};

export default GradientButton;