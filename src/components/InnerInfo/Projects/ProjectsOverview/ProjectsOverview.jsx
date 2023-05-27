import { projects } from '../../../../utils/projects';
import styles from './ProjectsOverview.module.scss';

const ProjectsOverview = ({ handleProjectClick }) => {
	return (
		<>
			<div className={styles.mainProjects}>
				<h2>Proyectos</h2>
				<div className={styles.projectWrapper}>
					<div>
						{projects.map((project) => (
							<div
								key={project.name}
								onClick={() => handleProjectClick(project)}>
								<span>{project?.name}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectsOverview;
