import toys1 from './toys1.png'
import toys2 from './toys2.png'
import toys3 from './toys3.png'
import toys4 from './toys4.png'

function ToySale(){
    return(
        <><div id="toyhead">
            <h1>Toy sale | 17-20 January</h1>
        </div>
        <div>
            <img id='toysimg' src={toys1} />
            <img id='toysimg' src={toys2} />
            <img id='toysimg' src={toys1} />
            <img id='toysimg' src={toys3} />
            <img id='toysimg' src={toys1} />
            <img id='toysimg' src={toys2} />
            <img id='toysimg' src={toys1} />
            <img id='toysimg' src={toys4} />
            </div>
            </>
    )
}
export default ToySale