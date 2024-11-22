import Card from "./Card";
import { useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
function BookDetails()
{
    const{id}=useParams();
    const book=useSelector((store)=>store.Book.items);
    console.log(book.length)
    const bkdetail=book.filter((x)=>x.id===id);
    console.log(book)
    return(
        <>
       <div className="p-4 bg-white shadow rounded flex flex-col flex-grow">
       <h1 className="text-3xl font-bold mb-4 text-center">Here is the entire Details of your book</h1>
       {
            bkdetail.map((bk, index) => (
            <Card
            key={index}
            title={bk.title}
            subtitle={bk.subtitle}
            imgurl={bk.image}
            authors={bk.authors}
            id={bk.id}
            category={bk.category}
            url={bk.url}
          />
        ))}
       </div>
        </>
    )
}
export default BookDetails;