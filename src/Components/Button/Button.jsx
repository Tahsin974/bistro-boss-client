
const Button = ({children,color,hoverColor,flex,justifyCenter}) => {
    return (
        <>
        {
            flex&&justifyCenter ? <div className='flex justify-center'>
            <button className={!hoverColor ?`btn btn-outline border-0 border-b-2 border-b-${color} text-${color} uppercase` : `btn btn-outline border-0 border-b-2 border-b-${color} text-${color} hover:text-${hoverColor} uppercase` }>{children}</button> 
         </div>
         :
         <div>
           <button className={!hoverColor ?`btn btn-outline border-0 border-b-2 border-b-${color} text-${color} uppercase` : `btn btn-outline border-0 border-b-2 border-b-${color} text-${color} hover:text-${hoverColor} uppercase` }>{children}</button> 
        </div>
        }
        
        
        </>
        
    );
};

export default Button;