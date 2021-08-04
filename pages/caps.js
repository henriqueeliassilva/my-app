
 function caps () {
    return  <CapsLock>Henrique Elias Silva</CapsLock>
  }

function CapsLock(props) {
    const textInserted = props.children;
    const textInCapsLock = textInserted.toUpperCase();
    return <h1>{textInCapsLock}</h1>

} 

export default caps

