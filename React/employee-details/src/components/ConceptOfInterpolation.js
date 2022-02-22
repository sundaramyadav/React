export default function ConceptOfInterpolation() {

    var Name = "Sundaram";

    function getTime() {
        return new Date().getHours() + " : " +  new Date().getMinutes() + " : " + new Date().getSeconds();
    }

    return (
        <div>
            <h1>Hello {Name} The Current Time is Given Below:</h1>
            <h2>Time: { getTime() }</h2>
        </div>
    )
}