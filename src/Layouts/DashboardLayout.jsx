import DashboardSidebar from "../Components/DashboardSidebar"

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex">
            <DashboardSidebar />
            {children}
        </div>
    )
}

export default DashboardLayout