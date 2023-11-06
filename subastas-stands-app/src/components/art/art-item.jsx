import { Link } from "react-router-dom";
function ExpositorArtListItem({ item}) {

    return (            
        
        <div className="shadow-md border rounded-lg">
            <Link 
                to={item.link}
                target='_blank'
                rel="nonreferrer noreferrer"
            >
                <div className=" w-full overflow-hidden shadow-md border rounded-lg">
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