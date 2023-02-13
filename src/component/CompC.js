import React , {useContext} from 'react' ;
import { AppState , NameContext } from '../App';

const CompC = () => {

     const data = useContext(AppState) ;
     const data2 = useContext(NameContext) ;

     return (
          <div className='temp'>
               CompC <br />
               <h1> {data.data} </h1>
               <h1> {data.name.name} </h1>
               <h1> {data.name.age} </h1>
               <code>{data2}</code> <br />
               <button onClick={ data.sayHello} >Hello</button>
          </div>
     ) ;
} ;

export default CompC ;