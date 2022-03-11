import React from "react";
import Image from "next/image";

export default function About() {
	return (
		<section className="section-about">
			<div className="section about-container">
				<h2 className="about-title">About me</h2>
				<p className="about-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Vitae excepturi amet consectetur ex, pariatur veniam facilis
					ducimus libero aspernatur tempora quae nobis porro magni
					quos. Quos saepe consequatur a adipisci. Lorem ipsum dolor
					sit amet consectetur, adipisicing elit.
				</p>
				<div className="skills">
					<h3>Tech that I'm...</h3>
					<ul className="skill-container">
						<li>
							<span>...proficient in</span>
							<ul className="skill-list">
								<li>
									<Image
										src="/react.svg"
										height="35"
										width="35"
									/>
									<span className="skill-name">React</span>
								</li>
								<li>
									<Image
										src="/nodejs-icon.svg"
										height="35"
										width="35"
									/>
									<span className="skill-name">Node</span>
								</li>
								<li>
									<Image
										src="/gatsby.svg"
										height="35"
										width="35"
									/>
									<span className="skill-name">Gatsby</span>
								</li>
								<li>
									<Image
										src="/nextjs-icon.svg"
										height="35"
										width="35"
									/>
									<span className="skill-name">Next</span>
								</li>
							</ul>
						</li>
						<li>
							<span>...familiar with</span>
							<ul className="skill-list">
								<li>
									<Image
										src="/php.svg"
										height="35"
										width="35"
									/>
									<span className="skill-name">PHP</span>
								</li>
								<li>
									<Image
										src="/mysql.svg"
										height="35"
										width="35"
									/>
									<span className="skill-name">MySQL</span>
								</li>
								<li>
									<Image
										src="/file-type-mongo.svg"
										height="35"
										width="35"
									/>
									<span className="skill-name">MongoDB</span>
								</li>
							</ul>
						</li>
						<li>
							<span>...interested in</span>
							<ul className="skill-list">
								<li>
									<Image
										src="/graphql.svg"
										height="35"
										width="35"
									/>
									<span className="skill-name">GraphQL</span>
								</li>
								<li>
									<Image
										src="/postgresql.svg"
										height="35"
										width="35"
									/>
									<span className="skill-name">Postgres</span>
								</li>
								<li>Jest</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
