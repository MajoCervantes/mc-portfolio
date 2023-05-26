import styles from './ProjectsOverview.module.scss';

const ProjectsOverview = () => {
	return (
		<>
			<div className={styles.mainMessage}>
				<div className={styles.welcomeMessage}>
					<div>
						<h1>Bienvenido</h1>
						<span>
							<p>
								¡Hola! Soy María José Cervantes, una apasionada desarrolladora
								web front-end con más de 2 años de experiencia. He trabajado
								como freelance y colaborado en proyectos para microempresas en
								la CDMX, desarrollando aplicaciones web informativas,
								administrativas y de comercio electrónico.
							</p>
							<p>
								Me encanta aprender y experimentar con nuevas tecnologías. Soy
								hábil en el diseño y creación de interfaces atractivas y
								funcionales. Disfruto trabajar en equipos colaborativos y tengo
								habilidades de comunicación efectiva.
							</p>
							<p>
								A lo largo de mi trayectoria, he tenido la oportunidad de
								trabajar en diversos entornos colaborativos y en equipos
								multidisciplinarios. Esta experiencia me ha permitido
								desarrollar habilidades de comunicación efectiva y trabajar de
								manera eficiente en proyectos conjuntos.
							</p>
						</span>
					</div>
				</div>
			</div>

			<div className={styles.spacer} />

			<div className={styles.mainProjects}>
				<h2>Proyectos</h2>
				<div className={styles.projectWrapper}>
					<div>
						<a href=''>
							<span>Encamino</span>
						</a>

						<a href=''>
							<span>Passwor Generator</span>
						</a>

						<a href=''>
							<span>Shopsi</span>
						</a>

						<a href=''>
							<span>PDF Generator</span>
						</a>

						<a href=''>
							<span>Punto Novia</span>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectsOverview;
