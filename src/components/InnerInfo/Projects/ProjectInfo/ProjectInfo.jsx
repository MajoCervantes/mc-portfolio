import classNames from 'classnames';
import styles from './ProjectInfo.module.scss';

const ProjectInfo = ({ selectedProject, showAnimation }) => {
	return (
		<div
			className={classNames(styles.projectInfo, {
				[styles.slideOut]: !showAnimation,
				[styles.slideIn]: showAnimation,
			})}>
			<h1>{selectedProject?.name}</h1>
			<span>
				<p>{selectedProject?.description}</p>

				<div className={styles.buttonsContainer}>
					{selectedProject?.web && (
						<button>
							<a href={selectedProject?.web}>Ver Sitio</a>
						</button>
					)}

					{selectedProject?.github && (
						<button>
							<a href={selectedProject?.github}>Github</a>
						</button>
					)}

					{selectedProject?.npm && (
						<button>
							<a href={selectedProject?.npm}>NPM</a>
						</button>
					)}
				</div>
			</span>
		</div>
	);
};

export default ProjectInfo;
