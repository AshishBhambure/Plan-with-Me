
import Card from './card'
// import './tours.css'
function Tours({tours,removeTour}){

    // console.log(tours);

    return(
        <div className='container'>
            <div>
                <h2 className='title'>Plan With Ashish</h2>
            </div>

            <div className='cards'>
                {
                    tours.map((tour) =>{
                        return <Card {...tour}  removeTour={removeTour} ></Card>
                    } )
                }

            </div>
        </div>
    )
}
export default Tours;