export default function AboutSections() {
	return (
		<>
			<div className="bg-[#16161d] h-screen w-screen ">
				<div className="absolute h-screen w-screen pointer-events-none z-100 mix-blend-overlay bg-[url('../public/noice.avif')] opacity-50" />
				<div className="flex justify-center items-center h-screen w-screen">
					<div className="container">
						<div className="wrapper flex flex-col md:flex-row gap-4 justify-center items-center">
							<div className="serviceBox max-w-[535px] min-w-[500px] max-h-72 bg-[#202425] rounded-lg p-6">
								<img
									src="twitter.svg"
									alt=""
									className="h-10 w-10 mb-4"
								/>
								<h1 className="text-white text-3xl font-bold">
									Title
								</h1>
								<p className="text-white">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Aliquam debitis quibusdam,
									a dignissimos amet porro soluta? Fugit esse
									nesciunt facilis.
								</p>
								<div className="flex flex-row">
									<img
										src="insta.svg"
										alt=""
										className="w-8 h-8 mt-8 mr-6"
									/>
									<p className="mt-9 text-white">
										Lorem, ipsum.
									</p>
								</div>
							</div>
							<div className="serviceBox max-w-[535px] min-w-[500px] max-h-72 bg-[#202425] rounded-lg p-6">
								<img
									src="twitter.svg"
									alt=""
									className="h-10 w-10 mb-4"
								/>
								<h1 className="text-white text-3xl font-bold">
									Title
								</h1>
								<p className="text-white">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Aliquam debitis quibusdam,
									a dignissimos amet porro soluta? Fugit esse
									nesciunt facilis.
								</p>
								<div className="flex flex-row">
									<img
										src="insta.svg"
										alt=""
										className="w-8 h-8 mt-8 mr-6"
									/>
									<p className="mt-9 text-white">
										Lorem, ipsum.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
