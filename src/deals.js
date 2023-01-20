import dealsnoon from './dealsnoon.avif'
import kitchendeal from './kitchendeal.png'
import furnituredeal from './furnituredeal.png'
import beddingdeal from './beddingdeal.avif'
import fragrancedeals from './fragrancedeals.png'

function DealsNoon(){
    return(
        <><div id="noondeal">
            <img src={dealsnoon} />
        </div>
        <div>
            <img id='dealsimg' src={kitchendeal}  />
            <img id='dealsimg' src={furnituredeal} />
            <img id='dealsimg' src={beddingdeal} />
            <img id='dealsimg' src={fragrancedeals} />
            </div>
     </>
    )
}
export default DealsNoon