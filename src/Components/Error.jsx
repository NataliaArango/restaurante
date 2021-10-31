import React,{Fragment} from 'react';
import swal from 'sweetalert';
const Error = ({error}) => {
    
    return ( 
        <Fragment>
            {swal({error}, "warning")};
        </Fragment>
        
    );
}
 
export default Error;