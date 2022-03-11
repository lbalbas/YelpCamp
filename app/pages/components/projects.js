import Head from "next/head";
import { useState } from "react";
import Image from "next/image";

export default function Projects() {
	const [projects, setProjects] = useState([
		{
			name: "Pollst",
			link: "https://google.com",
			repo: "https://google.com",
			img: "/pollst-screen.e3031fb7.png",
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolor quod nostrum dolores! Aliquam dignissimos odio nihil, facere quas a necessitatibus nulla alias deserunt. Enim aut corrupti reprehenderit exercitationem deleniti?",
			tech: ["/postgresql.svg", "/react.svg", "/php.svg"],
		},
		{
			name: "Pe",
			link: "https://google.com",
			repo: "https://google.com",
			img:
				"https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolor quod nostrum dolores! Aliquam dignissimos odio nihil, facere quas a necessitatibus nulla alias deserunt. Enim aut corrupti reprehenderit exercitationem deleniti?",
			tech: ["/postgresql.svg", "/react.svg", "/php.svg"],
		},
		{
			name: "Po",
			link: "https://google.com",
			repo: "https://google.com",
			img:
				"https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolor quod nostrum dolores! Aliquam dignissimos odio nihil, facere quas a necessitatibus nulla alias deserunt. Enim aut corrupti reprehenderit exercitationem deleniti?",
			tech: ["/postgresql.svg", "/react.svg", "/php.svg"],
		},
		{
			name: "Pa",
			link: "https://google.com",
			repo: "https://google.com",
			img:
				"https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolor quod nostrum dolores! Aliquam dignissimos odio nihil, facere quas a necessitatibus nulla alias deserunt. Enim aut corrupti reprehenderit exercitationem deleniti?",
			tech: ["/postgresql.svg", "/react.svg", "/php.svg"],
		},
	]);

	return (
		<section className="project-grid">
			{projects.map((project) => {
				return (
					<article key={project.name} className="project-card">
						<style jsx>{`
							article {
								background-image: url(${project.img});
								background-repeat: no-repeat;
								background-size: contain;
							}
						`}</style>
						<div className="project-hover">
							<h3 className="project-title">{project.name}</h3>
							<p className="project-desc">{project.desc}</p>
							<div className="project-tech">
								{project.tech.map((tech) => (
									<Image
										key={tech}
										src={tech}
										height="35"
										width="35"
									/>
								))}
							</div>
							<a
								role="button"
								target="_blank"
								href={project.link}
								className="button project-demo"
							>
								<Image
									src="/browsers-outline.png"
									height="25"
									width="25"
								/>
								<span>See live</span>
							</a>
							<a
								role="button"
								target="_blank"
								href={project.repo}
								className="button project-repo"
							>
								<Image
									src="/logo-github.svg"
									height="25"
									width="25"
								/>
								<span>See on Github</span>
							</a>
						</div>
					</article>
				);
			})}
		</section>
	);
}
