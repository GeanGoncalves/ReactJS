export default function Lista(props){
    return(
       <div>
           <h1>lista de Algo</h1>
           <ul style={{
               listStyle: "none",
               padding:0
           }}>
               {props.children}
           </ul>

       </div>
    )
}