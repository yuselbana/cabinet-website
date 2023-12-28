import RowComponent from "./RowComponent";
import goldKitch from '../../public/goldKitch.jpg'
import blueKitch from '../../public/blueKitch.jpg'
export default function Values() {
    return (
        <div className="min-h-screen lg:h-screen p-12">
            <RowComponent button={"Our Cabinets"} buttonHREF={'/cabinetry'} order={"1"} title={"Cabinets"} image={goldKitch}  body={"The wide variety of wood species, colors, and designs we offer makes the decision-making process challenging, as you'll need to settle on just one style that truly captures your style."} />
            <RowComponent button={"Our Countertops"} buttonHREF={'/countertops'} order={"-2"}  title={"Countertops"} image={blueKitch}  body={"The countertop is the central hub of culinary activities, blending style and functionality. Add a splash of color to make your kitchen stand out."} />
        </div>

    )
}