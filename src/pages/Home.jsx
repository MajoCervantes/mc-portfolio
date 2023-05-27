import InnerInfo from '../components/InnerInfo/InnerInfo';
import BasicLayout from '../components/BasicLayout/BasicLayout';

const Home = () => {
	return (
		<div
			style={{
				height: '100%',
			}}>
			<BasicLayout>
				<InnerInfo />
			</BasicLayout>
		</div>
	);
};

export default Home;
