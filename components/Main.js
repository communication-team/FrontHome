import Container1 from "./Container1";
import Container2 from "./Container2";
import WhyBuy from "./WhyBuy";
import DisCountUsed from "./DisCountUsed"
import DisCountNew from "./DisCountNew"
import OurServices from "./OurServices"
import HowToBuyContainer from "./HowToBuyContainer"
import SearchByMakeContainer from "./SearchByMakeContainer"
import CarShapeContainer from "./CarShapeContainer"
import AnyQustContainer from "./AnyQustContainer"
import SideMenu from "./SideMenu"

export default function Body(props) {
    return(
            <main class="">
                {/* <SideMenu/> */}
                <Container1/>
                {/* <Container2/> */}
                {/* <DisCountUsed/> */}
                <DisCountNew/>
                <WhyBuy/>
                <OurServices/>
                <HowToBuyContainer/>
                <SearchByMakeContainer/>
                {/* <CarShapeContainer/> */}
                <AnyQustContainer/>
            </main>
    )
}