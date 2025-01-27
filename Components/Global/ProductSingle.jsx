import Link from 'next/link'
import AddProductSingle from './AddProductSingle';
import LazyImage from './LazyLoad';
import dynamic from "next/dynamic";

export default function ProductSingle(props) {

    // const AddProductSingle = dynamic(import('./AddProductSingle'));

  const { product } = props;


  return (
      <div className="product__single">
        <Link href={`/proizvodi/${product.productCategories.nodes[0].slug}/${product.slug}`}><a>
            <div className="product__img">
                <LazyImage
                    key={product.id}
                    src={undefined !== product.productAdditional ? product.productAdditional.additionalProduct.productThumbnail.mediaItemUrl : product.image !== null ? product.image.sourceUrl : '/placeholder.jpg'}
                    alt={product.name}
                />
                {(() => {
                        if (product.onSale === true){
                            return(<div className="img__sale"><h6>AKCIJA</h6></div>)
                        } else{
                            return('')
                        }
                })()}
            </div>
            <div className="product__desc">
                <div className="__left">
                    <h4 className="__name">{product.name}</h4>
                    <h5 className="__cat">{null !== product.productCategories.nodes[0].name ? product.productCategories.nodes[0].name : "undefined"}</h5>
                </div>
                <div className="__right">
                    {
                        product.onSale === true ?
                        <div className="price__wrap"><p className="price__sale">{ product.regularPrice }</p> <p className="price__reg">{product.price}</p></div>
                        :
                        <div className="price__wrap"><p className="price__reg">{ product.price }</p></div>
                    }
                    <p className={product.stockStatus === "IN_STOCK" ? "__stock" : "__stock __alt"}>{product.stockStatus === "IN_STOCK" ? "Dostupno" : "Nema na zalihama"}</p>
                </div>
            </div>
            
        </a></Link>

        {/* BUTTON */}
        {
            product.stockStatus === "IN_STOCK" ?
            <Link href={`/proizvodi/${product.productCategories.nodes[0].slug}/${product.slug}`}><a>
                <button className="button product-single__cart"> <img src="/cart.svg" alt="" /> Opcije pregleda</button>
            </a></Link>
            :
            <button className="button product-single__cart __disabled"> <img src="/cart.svg" alt="" /> Dodaj u korpu</button>
        }
      </div>
  );
}
