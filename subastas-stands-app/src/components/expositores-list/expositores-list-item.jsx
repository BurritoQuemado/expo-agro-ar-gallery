import { Link } from "react-router-dom";
function ListItem({ item}) {

    return (            
        
        <div>
            <Link 
                to={'/expositor/'+item.id}
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

export default ListItem;