
import { TooltipsTop, TooltipsBottom } from "../components/index";
interface Props {
    children: React.ReactNode
}

const TooltipLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <TooltipsTop />
            {children}
            <TooltipsBottom />
        </>
    )
}

export default TooltipLayout