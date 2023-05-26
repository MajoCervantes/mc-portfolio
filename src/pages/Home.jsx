import ProjectsOverview from '../components/Projects/ProjectsOverview';
import BasicLayout from '../components/BasicLayout/BasicLayout';

const Home = () => {
	return (
		<div
			style={{
				height: '100%',
			}}>
			<BasicLayout>
				<ProjectsOverview />
			</BasicLayout>
		</div>
	);
};

export default Home;
