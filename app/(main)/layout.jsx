import { Navigation } from "./_components/navigation";

const MainLayout = ({children}) => {
	return (
		<div className="h-full flex dark:bg-[#1f1f1f]">
			<Navigation />
			<main className="h-full overflow-auto flex-1">
    {children}
    </main>
		</div>
	);
};

export default MainLayout;
