import RateItem from "./RateItem";
import AddCart from "./AddCart";

const CardItem = ({ cartCount, setCartCount })=> {
    const data = [
        {
            src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            title: "Fancy Product",
            price1: "40.00",
            price2: "80.00",           
            strike: false,
            sale: false
        },
        {
            src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            title: "Special Item",
            price1: "20.00",
            price2: "18.00",           
            strike: true,
            sale: true
        },
        {
            src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            title: "Sale Item",
            price1: "50.00",
            price2: "25.00",           
            strike: true,
            sale: true
        },
        {
            src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            title: "Popular Item",
            price1: "40.00",
            price2: "0",           
            strike: false,
            sale: false
        },
        {
            src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            title: "Sale Item",
            price1: "50.00",
            price2: "25.00",                     
            strike: true,
            sale: true
        },
        {
            src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            title: "Fancy Product",
            price1: "120.00",
            price2: "280.00",           
            strike: false,
            sale: false
        },
        {
            src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            title: "Special Item",
            price1: "20.00",
            price2: "18.00",           
            strike: true,
            sale: true
        },
        {
            src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            title: "Popular Item",
            price1: "40.00",
            price2: "0",           
            strike: false
        }
    ];

    return (
        <>
        {data.map((data, index) => {
            return (
                <div className="col mb-5" key={index}>
                    <div className="card h-100">
                        <img className="card-img-top" src={data.src} alt="..."/>
                        {data.sale ? saleBox() : ""}

                        <div className="card-body p-4">
                            <div className="text-center">
                                <h5 className="fw-bolder">{data.title}</h5>
                                {data.strike && (
                                    <span className="text-muted text-decoration-line-through">
                                        ${data.price1}
                                    </span>
                                )}
                                {!data.strike && `$${data.price1}`} {data.title === "Fancy Product" && "-"} {data.title !== "Popular Item" && `$${data.price2}`}
                            </div>
                            <RateItem key={index} />                            
                        </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                                <AddCart cartCount={cartCount} setCartCount={setCartCount} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
        </>
    )
}

function saleBox() {
    return (
        <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem"}}>
            Sale            
        </div>
    )
}

export default CardItem;