import { Link } from "react-router-dom";
function ExpositorArtListItem({ item}) {

    return (            
        
        <div>
            <Link 
                to={item.link}
                target='_blank'
                rel="nonreferrer noreferrer"
            >
                <div className=" w-full overflow-hidden">
                <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full group-hover:opacity-75"
                />
                </div>
            </Link>
        </div>
    )
}

export default ExpositorArtListItem;