import { useState } from 'react';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import ProjectsOverview from './Projects/ProjectsOverview/ProjectsOverview';
import ProjectInfo from './Projects/ProjectInfo/ProjectInfo';
import styles from './InnerInfo.module.scss';

const InnerInfo = () => {
	const [selectedProject, setSelectedProject] = useState(null);
	const [showAnimation, setShowAnimation] = useState(false);

	const handleProjectClick = (project) => {
		if (!selectedProject) {
			setShowAnimation(false);
		} else {
			setShowAnimation((prevState) => !prevState);
		}
		setSelectedProject((prevState) => (prevState === project ? null : project));
	};

	return (
		<>
			<div className={styles.mainMessage}>
				{selectedProject ? (
					<ProjectInfo
						selectedProject={selectedProject}
						showAnimation={showAnimation}
						setShowAnimation={setShowAnimation}
					/>
				) : (
					<PersonalInfo selectedProject={selectedProject} />
				)}
			</div>

			<div className={styles.spacer} />

			<ProjectsOverview handleProjectClick={handleProjectClick} />
		</>
	);
};

export default InnerInfo;
